// ===== 状态 =====
const STORAGE_KEY = "study-v3-state";

function defaultState() {
  return {
    items: {},      // { "prefix|mi|ii": true }
    notes: {},      // { "prefix|note|mi": "文本" }
    diary: {},      // { monthKey: "文本" }
    leetcode: {},   // { monthKey: number }
    checkins: {},   // { monthKey: [day...] }
    currentMonth: null,
    daily: {},      // { "YYYY-MM-DD": { taskId: true } }
  };
}

let state = loadState();

function loadState() {
  try {
    return Object.assign(defaultState(), JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const monthByKey = {};
YEAR_MONTHS.forEach((m) => (monthByKey[m.key] = m));

let currentMonthKey = state.currentMonth || YEAR_MONTHS[0].key;

// ===== 工具 =====
function itemKey(prefix, mi, ii) {
  return prefix + "|" + mi + "|" + ii;
}

function noteKey(prefix, mi) {
  return prefix + "|note|" + mi;
}

function daysInMonth(m) {
  return new Date(m.year, m.month + 1, 0).getDate();
}

function monthStats(m) {
  let modTotal = 0;
  let modDone = 0;
  m.modules.forEach((mod, mi) => {
    mod.items.forEach((_, ii) => {
      modTotal++;
      if (state.items[itemKey(m.key, mi, ii)]) modDone++;
    });
  });
  const lc = state.leetcode[m.key] || 0;
  const ci = state.checkins[m.key] || [];
  return { modTotal, modDone, lc, ciCount: ci.length, dim: daysInMonth(m) };
}

function monthProgress(m) {
  const s = monthStats(m);
  const modPct = s.modTotal ? s.modDone / s.modTotal : 0;
  const lcPct = m.leetcodeGoal ? Math.min(1, s.lc / m.leetcodeGoal) : 0;
  const ciPct = s.ciCount / s.dim;
  return Math.round(((modPct + lcPct + ciPct) / 3) * 100);
}

function yearProgress() {
  const sum = YEAR_MONTHS.reduce((acc, m) => acc + monthProgress(m), 0);
  return Math.round(sum / YEAR_MONTHS.length);
}

// ===== 渲染：通用模块列表 =====
function renderModuleList(container, modules, prefix, onChange) {
  container.innerHTML = "";

  function updateProgress(mi) {
    const total = modules[mi].items.length;
    let done = 0;
    modules[mi].items.forEach((_, ii) => {
      if (state.items[itemKey(prefix, mi, ii)]) done++;
    });
    const prog = document.getElementById("prog-" + prefix + "-" + mi);
    if (prog) prog.textContent = done + "/" + total;
  }

  modules.forEach((mod, mi) => {
    const card = document.createElement("details");
    card.className = "module";

    const sum = document.createElement("summary");
    sum.className = "module-summary";

    const left = document.createElement("div");
    left.className = "module-left";
    const name = document.createElement("span");
    name.className = "module-name";
    name.textContent = mod.name;
    const range = document.createElement("span");
    range.className = "module-range";
    let rangeText = mod.range || "";
    if (mod.goal) rangeText += (rangeText ? " · " : "") + mod.goal;
    range.textContent = rangeText;
    left.append(name, range);

    const prog = document.createElement("span");
    prog.className = "module-progress";
    prog.id = "prog-" + prefix + "-" + mi;
    prog.textContent = "0/" + mod.items.length;

    sum.append(left, prog);

    const body = document.createElement("div");
    body.className = "module-body";

    mod.items.forEach((text, ii) => {
      const key = itemKey(prefix, mi, ii);
      const label = document.createElement("label");
      label.className = "item";
      if (state.items[key]) label.classList.add("done");

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state.items[key];
      cb.addEventListener("change", () => {
        state.items[key] = cb.checked;
        saveState();
        label.classList.toggle("done", cb.checked);
        updateProgress(mi);
        if (onChange) onChange();
      });

      const span = document.createElement("span");
      span.textContent = text;

      label.append(cb, span);
      body.appendChild(label);
    });

    const noteLabel = document.createElement("div");
    noteLabel.className = "note-label";
    noteLabel.textContent = "📝 笔记 / 日记";
    const ta = document.createElement("textarea");
    ta.className = "note";
    ta.placeholder = "记录这个模块学了什么、哪里卡住了…";
    ta.value = state.notes[noteKey(prefix, mi)] || "";
    ta.addEventListener("input", () => {
      state.notes[noteKey(prefix, mi)] = ta.value;
      saveState();
    });
    body.append(noteLabel, ta);

    card.append(sum, body);
    container.appendChild(card);

    updateProgress(mi);
  });
}

// ===== 渲染：月份导航 =====
function renderMonthNav() {
  const nav = document.getElementById("month-nav");
  nav.innerHTML = "";
  YEAR_MONTHS.forEach((m) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (m.key === currentMonthKey ? " active" : "");
    chip.id = "chip-" + m.key;

    const label = document.createElement("span");
    label.className = "chip-label";
    label.textContent = m.label;
    const prog = document.createElement("span");
    prog.className = "chip-progress";
    prog.textContent = monthProgress(m) + "%";
    chip.append(label, prog);

    chip.addEventListener("click", () => {
      currentMonthKey = m.key;
      state.currentMonth = m.key;
      saveState();
      renderAll();
    });
    nav.appendChild(chip);
  });
}

// ===== 渲染：路线图 =====
function renderRoadmap() {
  const tbody = document.getElementById("roadmap-body");
  tbody.innerHTML = "";
  YEAR_MONTHS.forEach((m) => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + m.label + "</td><td>" + m.core + "</td><td>" + m.aux + "</td><td>" + m.project + "</td>";
    tbody.appendChild(tr);
  });
}

// ===== 渲染：LeetCode =====
function renderLeetcode(m) {
  document.getElementById("lc-solved").textContent = state.leetcode[m.key] || 0;
  document.getElementById("lc-goal").textContent = "/ " + m.leetcodeGoal + " 题";
  const lc = state.leetcode[m.key] || 0;
  const pct = m.leetcodeGoal ? Math.min(100, Math.round((lc / m.leetcodeGoal) * 100)) : 0;
  document.getElementById("lc-fill").style.width = pct + "%";
}

function changeLC(delta) {
  const m = monthByKey[currentMonthKey];
  const cur = state.leetcode[m.key] || 0;
  state.leetcode[m.key] = Math.max(0, cur + delta);
  saveState();
  renderLeetcode(m);
  updateMonthStats();
}

// ===== 渲染：日历 =====
function renderCalendar(m) {
  const grid = document.getElementById("cal-grid");
  grid.innerHTML = "";

  const first = new Date(m.year, m.month, 1);
  const startWeekday = first.getDay();
  const dim = daysInMonth(m);

  for (let i = 0; i < startWeekday; i++) {
    const blank = document.createElement("div");
    blank.className = "cal-day blank";
    grid.appendChild(blank);
  }

  const today = new Date();
  const isThisMonth = today.getFullYear() === m.year && today.getMonth() === m.month;
  const todayDate = today.getDate();
  const ci = state.checkins[m.key] || [];

  for (let d = 1; d <= dim; d++) {
    const cell = document.createElement("div");
    cell.className = "cal-day";
    if (ci.includes(d)) cell.classList.add("checked");
    if (isThisMonth && d === todayDate) cell.classList.add("today");
    cell.textContent = d;
    cell.addEventListener("click", () => toggleCheckin(m, d));
    grid.appendChild(cell);
  }
}

function toggleCheckin(m, day) {
  let ci = state.checkins[m.key] || [];
  if (ci.includes(day)) {
    ci = ci.filter((x) => x !== day);
  } else {
    ci.push(day);
  }
  state.checkins[m.key] = ci;
  saveState();
  renderCalendar(m);
  updateMonthStats();
}

function calcStreak(m) {
  const ci = state.checkins[m.key] || [];
  if (ci.length === 0) return 0;
  const sorted = ci.slice().sort((a, b) => a - b);
  let max = 1;
  let cur = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      cur++;
      max = Math.max(max, cur);
    } else {
      cur = 1;
    }
  }
  return max;
}

// ===== 渲染：月份详情 =====
function renderMonth() {
  const m = monthByKey[currentMonthKey];

  document.getElementById("month-title").textContent = m.label + " · " + m.title;
  document.getElementById("month-theme").textContent = m.theme;

  renderLeetcode(m);
  renderCalendar(m);
  renderModuleList(document.getElementById("month-modules"), m.modules, m.key, updateMonthStats);

  document.getElementById("month-diary").value = state.diary[m.key] || "";
  updateMonthStats();
}

function updateMonthStats() {
  const m = monthByKey[currentMonthKey];
  const s = monthStats(m);
  const pct = monthProgress(m);

  document.getElementById("month-progress-pct").textContent = pct + "%";
  document.getElementById("month-progress-fill").style.width = pct + "%";
  document.getElementById("stat-modules").textContent = s.modDone + "/" + s.modTotal;
  document.getElementById("stat-leetcode").textContent = s.lc + "/" + m.leetcodeGoal;
  document.getElementById("stat-checkin").textContent = s.ciCount + "/" + s.dim;

  document.getElementById("cal-days").textContent = s.ciCount;
  document.getElementById("cal-streak").textContent = calcStreak(m);

  const chip = document.getElementById("chip-" + m.key);
  if (chip) chip.querySelector(".chip-progress").textContent = pct + "%";
}

// ===== 渲染：英语专区 =====
function renderEnglish() {
  const wrap = document.getElementById("english-wrap");
  wrap.innerHTML = "";

  const h = document.createElement("h2");
  h.className = "english-title";
  h.textContent = "🌍 英语专区（六级 + 雅思）";
  wrap.appendChild(h);

  ENGLISH.forEach((sec) => {
    const prefix = "en-" + sec.key;
    const card = document.createElement("section");
    card.className = "card";

    const title = document.createElement("h3");
    title.style.fontSize = "17px";
    title.style.marginBottom = "4px";
    title.textContent = sec.title;

    const tag = document.createElement("p");
    tag.className = "subtitle";
    tag.style.marginBottom = "12px";
    tag.textContent = sec.tag;

    const advice = document.createElement("ul");
    advice.className = "advice";
    sec.advice.forEach((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      advice.appendChild(li);
    });

    const modWrap = document.createElement("div");

    card.append(title, tag, advice, modWrap);
    wrap.appendChild(card);

    renderModuleList(modWrap, sec.modules, prefix, null);
  });
}

// ===== 每日安排 =====
function todayStr() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mm + "-" + dd;
}

function renderDaily() {
  const wrap = document.getElementById("daily-wrap");
  if (!wrap || typeof DAILY === "undefined") return;
  wrap.innerHTML = "";

  const card = document.createElement("section");
  card.className = "card daily";

  const h = document.createElement("h2");
  h.className = "daily-title";
  h.textContent = "📅 每日安排";
  card.appendChild(h);

  const sTitle = document.createElement("h3");
  sTitle.className = "sub-title";
  sTitle.style.marginTop = "0";
  sTitle.textContent = "⏰ 每日时间表（在校日）";
  card.appendChild(sTitle);

  const tl = document.createElement("div");
  tl.className = "daily-schedule";
  DAILY.schedule.forEach((s) => {
    const row = document.createElement("div");
    row.className = "schedule-row";

    const t = document.createElement("div");
    t.className = "schedule-time";
    t.textContent = s.time;

    const info = document.createElement("div");
    info.className = "schedule-info";
    const tt = document.createElement("div");
    tt.className = "schedule-title";
    tt.textContent = s.title;
    const nn = document.createElement("div");
    nn.className = "schedule-note";
    nn.textContent = s.note;
    info.append(tt, nn);

    row.append(t, info);
    tl.appendChild(row);
  });
  card.appendChild(tl);

  const wk = document.createElement("p");
  wk.className = "daily-weekend";
  wk.textContent = DAILY.weekend;
  card.appendChild(wk);

  const key = todayStr();
  const tTitle = document.createElement("h3");
  tTitle.className = "sub-title";
  tTitle.textContent = "✅ 每日任务 · " + key;
  card.appendChild(tTitle);

  const today = state.daily[key] || {};
  const taskWrap = document.createElement("div");
  taskWrap.className = "daily-tasks";
  DAILY.tasks.forEach((t) => {
    const label = document.createElement("label");
    label.className = "item";
    if (today[t.id]) label.classList.add("done");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!today[t.id];
    cb.addEventListener("change", () => {
      if (!state.daily[key]) state.daily[key] = {};
      state.daily[key][t.id] = cb.checked;
      saveState();
      label.classList.toggle("done", cb.checked);
    });

    const span = document.createElement("span");
    span.textContent = t.label;
    label.append(cb, span);
    taskWrap.appendChild(label);
  });
  card.appendChild(taskWrap);

  wrap.appendChild(card);
}

// ===== 其他 =====
function renderHeader() {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  document.getElementById("date").textContent = "今天：" + now.toLocaleDateString("zh-CN", options);
  document.getElementById("year-progress").textContent = yearProgress() + "%";
}

function renderAll() {
  renderHeader();
  renderDaily();
  renderMonthNav();
  renderRoadmap();
  renderMonth();
  renderEnglish();
}

// ===== 数据导出 / 导入（手动同步） =====
function exportPayload() {
  return {
    app: "study-plan",
    version: 3,
    exportedAt: new Date().toISOString(),
    state: state,
  };
}

let syncTimer = null;
function syncStatus(msg) {
  const el = document.getElementById("sync-status");
  if (!el) return;
  el.textContent = msg;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => { el.textContent = ""; }, 5000);
}

function downloadExport() {
  const blob = new Blob([JSON.stringify(exportPayload(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const d = new Date();
  const stamp = d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
  a.href = url;
  a.download = "study-data-" + stamp + ".json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  syncStatus("✅ 已导出文件，把它传到另一台设备再「导入」");
}

function importState(raw) {
  const incoming = raw && raw.state ? raw.state : raw;
  if (!incoming || typeof incoming !== "object" || Array.isArray(incoming)) {
    throw new Error("数据格式不正确");
  }
  // 导入前自动备份本机旧数据
  localStorage.setItem(STORAGE_KEY + "-backup-" + Date.now(), JSON.stringify(state));
  state = Object.assign(defaultState(), incoming);
  currentMonthKey = state.currentMonth || YEAR_MONTHS[0].key;
  saveState();
  renderAll();
}

function handleImportFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      importState(JSON.parse(reader.result));
      syncStatus("✅ 导入成功（旧数据已自动备份）");
    } catch (e) {
      syncStatus("❌ 导入失败：" + e.message);
    }
  };
  reader.onerror = () => syncStatus("❌ 文件读取失败");
  reader.readAsText(file);
}

function copyData() {
  const text = JSON.stringify(exportPayload());
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => syncStatus("✅ 已复制，到另一台设备「粘贴导入」"),
      () => syncStatus("❌ 复制失败，请改用「导出文件」")
    );
  } else {
    syncStatus("❌ 浏览器不支持复制，请改用「导出文件」");
  }
}

// ===== 初始化 =====
document.getElementById("lc-minus").addEventListener("click", () => changeLC(-1));
document.getElementById("lc-plus").addEventListener("click", () => changeLC(1));
document.getElementById("lc-quick").addEventListener("click", () => changeLC(1));
document.getElementById("month-diary").addEventListener("input", (e) => {
  state.diary[currentMonthKey] = e.target.value;
  saveState();
});

document.getElementById("btn-export").addEventListener("click", downloadExport);
document.getElementById("btn-import").addEventListener("click", () => {
  document.getElementById("import-file").click();
});
document.getElementById("import-file").addEventListener("change", (e) => {
  const f = e.target.files && e.target.files[0];
  if (f) handleImportFile(f);
  e.target.value = "";
});
document.getElementById("btn-copy").addEventListener("click", copyData);
document.getElementById("btn-paste").addEventListener("click", () => {
  const wrap = document.getElementById("sync-paste");
  wrap.hidden = !wrap.hidden;
  if (!wrap.hidden) document.getElementById("paste-area").focus();
});
document.getElementById("btn-paste-confirm").addEventListener("click", () => {
  const ta = document.getElementById("paste-area");
  try {
    importState(JSON.parse(ta.value));
    ta.value = "";
    document.getElementById("sync-paste").hidden = true;
    syncStatus("✅ 导入成功（旧数据已自动备份）");
  } catch (e) {
    syncStatus("❌ 导入失败：" + e.message);
  }
});

renderAll();
