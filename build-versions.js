// ============================================================
// 版本快照生成脚本（开发者用，不参与页面运行）
//
// 作用：把每个「版本」对应的 git 提交，打包成一份自包含的
//       versions/vN.html，点开就能看到当时网站长什么样。
//
// 用法：node build-versions.js
//       新增版本时：在下方 VERSIONS 数组最前面加一行 {v, commit}，
//       然后重跑本脚本。
//
// 说明：
//   - 内联 style.css / plan-data.js / app.js，单个文件即可离线预览
//   - 把 localStorage 键改成 study-v3-snapshot-<v>，避免和正式版互相污染
// ============================================================

const fs = require("fs");
const cp = require("child_process");
const path = require("path");

// 版本 -> 提交（从 git log --reverse 对齐；vN 对应其代表性提交）
const VERSIONS = [
  { v: "v4", commit: "5512fa5" }, // 新增健身专区 + 健身进逐日计划
  { v: "v3", commit: "a7cfec4" }, // 逐日计划加入六级
  { v: "v2", commit: "9625f65" }, // 逐日计划全年 12 个月
  { v: "v1", commit: "a85c8ba" }, // 主线改版 + 苹果风视觉
  { v: "v0", commit: "dcfb66c" }, // 网站初版
];

function show(commit, file) {
  return cp.execSync(`git show "${commit}:${file}"`, { encoding: "utf8" });
}

fs.mkdirSync("versions", { recursive: true });

for (const { v, commit } of VERSIONS) {
  let html = show(commit, "index.html");
  const css = show(commit, "style.css");
  const data = show(commit, "plan-data.js");
  let app = show(commit, "app.js");

  // 隔离 localStorage：快照里打勾只存在自己的键里，不影响正式版
  app = app.replace(/study-v3-state/g, "study-v3-snapshot-" + v);

  // 内联 CSS
  html = html.replace(
    /<link[^>]*href=["']style\.css(\?v=[^"']*)?["'][^>]*\/?>/,
    "<style>\n" + css + "\n</style>"
  );

  // 内联 plan-data.js
  html = html.replace(
    /<script[^>]*src=["']plan-data\.js(\?v=[^"']*)?["'][^>]*>\s*<\/script>/,
    "<script>\n" + data + "\n</script>"
  );

  // 内联 app.js
  html = html.replace(
    /<script[^>]*src=["']app\.js(\?v=[^"']*)?["'][^>]*>\s*<\/script>/,
    "<script>\n" + app + "\n</script>"
  );

  // 快照水印（右下角悬浮徽标 + 返回当前版链接）
  const badge =
    '<div style="position:fixed;right:14px;bottom:14px;z-index:99999;background:#0071e3;color:#fff;' +
    'font:12px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;padding:8px 14px;border-radius:999px;' +
    'box-shadow:0 4px 16px rgba(0,0,0,.28);">' +
    "🕰️ " + v + " 历史快照 · <a href=\"../index.html\" style=\"color:#fff;text-decoration:underline;\">返回当前版</a>" +
    "</div>";
  html = html.replace(/<body>/, "<body>\n" + badge);

  const out = path.join("versions", v + ".html");
  fs.writeFileSync(out, html, "utf8");
  console.log("✓ " + out + "  (" + (html.length / 1024).toFixed(0) + " KB)");
}

console.log("\n完成：共生成 " + VERSIONS.length + " 个历史快照。");
