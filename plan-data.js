// ============================================================
// 全年学习计划数据（2026.9 – 2027.8）—— 后端 + AI 应用方向（大二 · 多段实习）
// 每个 month：key / year / month(0-11) / label / title / theme
//            / core / aux / project / leetcodeGoal / modules[]
// 每个 module：name / range / goal / items[]
// 目标：大二暑假拿下第一段实习（中厂暑期优先，大厂日常也试）→ 大三冲大厂暑期转正实习。
// 主线：数据结构(学校) → TS → Node/后端 → LLM → RAG/Agent → Agent 工程化 + 研读开源
// 副线：Python 够用即停（到「字典+文件+函数」就停）；后端 TS/Node 为主、FastAPI 为辅。不加第二门语言，专注 TS/Node。
// 刷题：只用 C++（STL 方言）。题目统一在「数据结构学习地图 DS_MAP」一处，每周稳定刷 5-7 道，第一段实习前累计 250+ 题，不刷题海。
// 八股：计网 / OS / 数据库 / Redis 从本月起每周碎化一点，6 月只做收口冲刺。
// 项目：整体提前约 1 个月；每个项目加一个「深度点」（SQL 注入防护 / 重排评估等）进简历。
// 每日节奏：白天看数据结构 → 下午 Python + 小练习 → 晚上 TS 主线 + 数据结构手写/刷题 + 八股碎片。
// ============================================================

const YEAR_MONTHS = [
  {
    key: "2026-09", year: 2026, month: 8, label: "2026.9",
    title: "数据结构收尾 + Python 够用 + TS 起步",
    theme: "学校数据结构快速推进；Python 只学到「会读会改」；TS 开始打底。算法每周稳定刷 5-7 道，本月养成习惯。",
    core: "数据结构 / TS 起步", aux: "Python 够用 / git", project: "LeetCode 30 题",
    leetcodeGoal: 30,
    modules: [
      {
        name: "数据结构（学校课）", range: "全月 · 快速过", goal: "从第 8 节推进到第 13 节",
        items: [
          "树 / 二叉搜索树 / 堆（第 8-10 节）",
          "图的概念与存储（第 12 节）",
          "DFS / BFS / 最小生成树（第 13 节）",
          "每节配套 LeetCode 手写一遍",
        ],
      },
      {
        name: "Python 够用", range: "9.1 – 9.12", goal: "够用即停：到「字典+文件+函数」就停",
        items: [
          "语法快速过（对比 C/C++）",
          "列表 / 字典 / 集合 / 函数",
          "文件读写 + 常用内置模块",
          "每章学完写一个 10 行小脚本（统计词频 / 列表去重）",
        ],
      },
      {
        name: "TS 起步（JS 语法顺带学）", range: "9.13 – 9.30", goal: "会写会跑，不是会看",
        items: [
          "TS 语法（9.13–9.18）：变量/数组/对象、函数与箭头、map/filter、class/继承/模块、Promise/async-await（JS 语法随 TS 一起学）",
          "TS 类型（9.20–9.24）：基本类型注解 / interface / 函数类型 / 类与继承 / 泛型 / 联合类型与类型守卫",
          "综合产出（9.25–9.30）：命令行待办清单（内存→持久化→拆模块→补类型）+ fetch 查天气小工具",
          "async/await + fetch：读文件、调公开 JSON 接口（贯穿全程）",
        ],
      },
      {
        name: "git 基础", range: "全月", goal: "版本控制",
        items: [
          "git 常用命令 / 分支 / 合并",
          "远程仓库与推送",
          "GitHub 仓库整理",
        ],
      },
    ],
  },
  {
    key: "2026-10", year: 2026, month: 9, label: "2026.10",
    title: "数据结构收尾 + TS 进阶",
    theme: "学校数据结构到查找/排序收尾；TS 进阶补齐，为 11 月 Node 后端做准备。八股碎片开始：计网每周啃一点。",
    core: "数据结构 / TS", aux: "刷题", project: "LeetCode 30 题",
    leetcodeGoal: 30,
    modules: [
      {
        name: "数据结构（学校课）", range: "10.1 – 10.31", goal: "第 14-25 节收尾",
        items: [
          "查找 / BST / AVL（第 16-17 节）",
          "B 树 / B+ 树 / 散列表（第 18-19 节）",
          "排序：冒泡/插入 → 快排/归并/堆排（第 20-23 节）",
          "外部排序（第 24-25 节）",
        ],
      },
      {
        name: "TS 进阶", range: "10.1 – 10.20", goal: "能独立写一个小工具",
        items: [
          "泛型 / 工具类型（Partial / Pick）各写一个例子",
          "模块 / 导入导出：拆成多文件的小项目",
          "async/await + fetch：写一个调用 JSON 接口的命令行工具",
          "产出：一个能跑的控制台小工具（如查天气 / 待办清单）",
        ],
      },
      {
        name: "异步 + fetch + 前端回顾", range: "10.21 – 10.31", goal: "为 12 月调 API 铺路",
        items: [
          "Promise / async-await 彻底搞懂（配合 TS 练手）",
          "fetch 调 REST API + JSON 解析 + 错误处理",
          "HTML / CSS 快速回顾（够部署展示页即可）",
        ],
      },
    ],
  },
  {
    key: "2026-11", year: 2026, month: 10, label: "2026.11",
    title: "Node/TS 后端 + 部署 + 项目①",
    theme: "后端主线启动：Node + Express 起步并部署，11 月就做出第一个上线项目①（AI 资讯日报）。",
    core: "Node/TS 后端 / 部署", aux: "刷题", project: "项目① AI 资讯日报",
    leetcodeGoal: 30,
    modules: [
      {
        name: "Node.js 基础", range: "11.1 – 11.10", goal: "服务端起步",
        items: [
          "Node 运行模型 / 事件循环 / 模块",
          "npm / 包管理 / 常用库",
          "HTTP 模块 / 路由",
        ],
      },
      {
        name: "Express + HTTP + 部署", range: "11.11 – 11.22", goal: "能上线一个接口",
        items: [
          "Express 中间件 / 路由 / 请求响应",
          "REST API 设计 + fetch 调通自己的接口",
          "部署：Vercel / Cloudflare Workers",
          "（NestJS、MySQL 推迟到做问数系统时再学）",
        ],
      },
      {
        name: "项目① AI 资讯日报", range: "11.23 – 11.30", goal: "第一个上线项目",
        items: [
          "Cloudflare Workers + 定时抓取",
          "调 Gemini 做摘要",
          "发布到 GitHub Pages",
          "写 README 进简历",
        ],
      },
    ],
  },
  {
    key: "2026-12", year: 2026, month: 11, label: "2026.12",
    title: "后端进阶 + 计网 + LLM API 入门",
    theme: "后端补鉴权/部署，计网八股过一遍，并提前上手调大模型 API（12 月还有六级考试，节奏适当留白）。",
    core: "后端深入 / 计网 / LLM API", aux: "八股", project: "项目② 问数系统【强烈推荐】",
    leetcodeGoal: 25,
    modules: [
      {
        name: "后端进阶", range: "12.1 – 12.12", goal: "鉴权 / 部署",
        items: [
          "JWT 鉴权 / 中间件",
          "环境变量 / 配置管理",
          "部署：Vercel / Cloudflare Workers",
        ],
      },
      {
        name: "计算机网络", range: "12.13 – 12.22", goal: "八股",
        items: [
          "OSI / TCP-IP 分层",
          "TCP 三次握手 / 四次挥手",
          "HTTP / HTTPS / DNS",
        ],
      },
      {
        name: "LLM API 入门 + 问数起步", range: "12.23 – 12.31", goal: "会调大模型",
        items: [
          "调 OpenAI / 国产大模型 API（fetch + JSON）",
          "Prompt Engineering / 结构化输出（要求返回 JSON）",
          "问数系统前置：调 LLM 把自然语言生成 SQL",
        ],
      },
    ],
  },
  {
    key: "2027-01", year: 2027, month: 0, label: "2027.1",
    title: "问数系统② + 开源研读起步（寒假）",
    theme: "寒假集中：把「自然语言转 SQL」问数系统做成旗舰项目，同时开始研读第一个大厂开源项目。",
    core: "问数系统 / 开源研读", aux: "寒假刷题", project: "项目② 问数系统【强烈推荐】",
    leetcodeGoal: 40,
    modules: [
      {
        name: "项目② 大模型问数系统", range: "1.1 – 1.20", goal: "旗舰项目",
        items: [
          "自然语言 → SQL 的 Prompt 设计",
          "后端：FastAPI 或 Node 接 LLM",
          "连数据库执行 SQL + 结果可视化",
          "安全：SQL 注入防护 / 权限（深度点）",
          "写 README + 进简历",
        ],
      },
      {
        name: "开源研读（第一个）", range: "1.21 – 1.31", goal: "跑通源码",
        items: [
          "选一个大厂开源项目（Agent / RAG 方向）",
          "跑通源码 + 读核心模块",
          "写一份读后笔记（面试能讲）",
        ],
      },
    ],
  },
  {
    key: "2027-02", year: 2027, month: 1, label: "2027.2",
    title: "RAG + 知识库③ + 开源研读继续（寒假）",
    theme: "RAG 检索增强 + 向量库，做出知识库问答系统（加深度点：重排 + 评估），并继续开源研读。",
    core: "RAG / 向量库", aux: "刷题 / 开源研读", project: "项目③ 知识库问答",
    leetcodeGoal: 35,
    modules: [
      {
        name: "向量检索基础", range: "2.1 – 2.8", goal: "Embedding",
        items: [
          "Embedding 概念与选型",
          "向量库：FAISS / Chroma / Milvus",
        ],
      },
      {
        name: "RAG 实战", range: "2.9 – 2.18", goal: "检索增强",
        items: [
          "文档切分 / 检索 / 生成全流程",
          "重排 / 引用 / 优化",
          "LangChain / LlamaIndex 入门",
        ],
      },
      {
        name: "项目③ 知识库问答", range: "2.19 – 2.28", goal: "项目",
        items: [
          "做私有知识库问答（语析 / PandaWiki 风格）",
          "多文档 + 来源引用 + 重排/评估（深度点）",
          "写 README + 进简历",
        ],
      },
    ],
  },
  {
    key: "2027-03", year: 2027, month: 2, label: "2027.3",
    title: "Agent 开发 + 项目④ + 投第一段实习",
    theme: "从 LLM 到 Agent：Function Calling + 多智能体编排，做出客服/业务 Agent；本月开始投第一段实习（中厂日常/暑期）。",
    core: "Agent / 工具调用", aux: "刷题 / 投递", project: "项目④ 客服/业务 Agent",
    leetcodeGoal: 30,
    modules: [
      {
        name: "Agent 基础", range: "3.1 – 3.10", goal: "Function Calling",
        items: [
          "Agent 概念 / ReAct",
          "Function Calling / 工具调用",
          "多步推理",
        ],
      },
      {
        name: "多智能体编排", range: "3.11 – 3.20", goal: "LangGraph",
        items: [
          "LangGraph / 多智能体编排",
          "子智能体 / 专家协同",
          "记忆与上下文管理",
        ],
      },
      {
        name: "项目④ 业务 Agent", range: "3.21 – 3.27", goal: "项目",
        items: [
          "闲鱼客服 / 简历投递 Agent 选一",
          "多专家协同 + 上下文对话",
          "写 README + 进简历",
        ],
      },
      {
        name: "投第一段实习", range: "3.28 – 3.31", goal: "简历 + 海投",
        items: [
          "简历初版（2-3 个 AI 项目 + 量化结果）",
          "牛客 / 官网 / 内推投递（中厂优先，大厂日常也试）",
          "笔试准备：算法高频题 + 八股",
        ],
      },
    ],
  },
  {
    key: "2027-04", year: 2027, month: 3, label: "2027.4",
    title: "Agent 工程化 + 研读开源 + 项目⑤",
    theme: "进阶关键月：读大厂开源项目、搞懂 harness/loop，把 Agent 做成工程化产品。",
    core: "Agent 工程化 / 开源研读", aux: "刷题 / 投递", project: "项目⑤ 内容发现 Agent",
    leetcodeGoal: 30,
    modules: [
      {
        name: "Agent 工程化", range: "4.1 – 4.12", goal: "harness / loop",
        items: [
          "Agent 循环机制（GPT-6 Astra Loop）",
          "harness / 评测 / 可观测性",
          "错误处理 / 重试 / 工具沙箱",
        ],
      },
      {
        name: "研读大厂开源（加深）", range: "4.13 – 4.22", goal: "吃透 2-3 个",
        items: [
          "阿里 zg(zvec-grep) 代码检索",
          "TencentDB Agent Memory 记忆方案",
          "WorkBuddy 的 Skill 设计",
          "跑通源码 + 写读后笔记",
        ],
      },
      {
        name: "项目⑤ 内容发现 Agent", range: "4.23 – 4.30", goal: "项目",
        items: [
          "跨平台内容抓取（B站/小红书/知乎）",
          "用户画像 + 主动推送",
          "本地私有运行",
        ],
      },
    ],
  },
  {
    key: "2027-05", year: 2027, month: 4, label: "2027.5",
    title: "后端强化 + 操作系统 + 项目⑥",
    theme: "后端补 Redis/缓存/OS 八股（此前八股碎化的系统化收口），微调(LoRA)够用即可，再做一个多智能体项目。",
    core: "操作系统 / Redis", aux: "八股 / 微调", project: "项目⑥ 文旅/办公 Agent",
    leetcodeGoal: 20,
    modules: [
      {
        name: "操作系统", range: "5.1 – 5.14", goal: "八股",
        items: [
          "进程 / 线程 / 调度",
          "内存管理 / 虚拟内存",
          "死锁 / 进程间通信",
        ],
      },
      {
        name: "后端强化：Redis / 缓存", range: "5.15 – 5.22", goal: "缓存",
        items: [
          "Redis 数据类型 / 持久化",
          "缓存穿透 / 击穿 / 雪崩",
          "分布式锁入门",
        ],
      },
      {
        name: "微调够用 + FastAPI", range: "5.23 – 5.27", goal: "模型服务",
        items: [
          "LoRA 微调入门（够用即可）",
          "FastAPI 封装模型推理服务",
        ],
      },
      {
        name: "项目⑥ 文旅/办公 Agent", range: "5.28 – 5.31", goal: "项目",
        items: [
          "TripStar 文旅 / AI-PPT 选一",
          "多智能体框架（HelloAgents）",
        ],
      },
    ],
  },
  {
    key: "2027-06", year: 2027, month: 5, label: "2027.6",
    title: "算法冲刺 + 八股收口 + 项目深挖",
    theme: "面试硬门槛收口冲刺：LeetCode 高频题 + 各科八股（此前已碎化学过，本月系统收口），项目打磨成简历语言。",
    core: "算法 / 八股", aux: "LeetCode 冲刺", project: "LeetCode 50 题",
    leetcodeGoal: 50,
    modules: [
      {
        name: "数据结构全面复习", range: "6.1 – 6.10", goal: "全部手写",
        items: [
          "链表 / 栈 / 队列",
          "树 / 堆 / 哈希 / 图",
          "排序",
        ],
      },
      {
        name: "算法专题", range: "6.11 – 6.20", goal: "专题突破",
        items: [
          "双指针 / 滑动窗口 / 二分",
          "DFS / BFS / 回溯",
          "动态规划",
        ],
      },
      {
        name: "八股收口 + 项目深挖", range: "6.21 – 6.30", goal: "面试语言",
        items: [
          "Python / TS / ML / Agent 八股",
          "计网 / OS / 数据库 / Node 八股",
          "项目 STAR 话术打磨",
        ],
      },
    ],
  },
  {
    key: "2027-07", year: 2027, month: 6, label: "2027.7",
    title: "项目成型 + 简历 + 部署",
    theme: "把 2-3 个核心项目打磨上线，简历成型，GitHub 整理，为入职/下一段实习做准备。",
    core: "项目打磨 / 简历", aux: "GitHub / 部署", project: "简历 + GitHub 整理",
    leetcodeGoal: 20,
    modules: [
      {
        name: "核心项目打磨", range: "7.1 – 7.15", goal: "上线",
        items: [
          "问数系统 / 知识库 / Agent 项目完善",
          "部署上线（Vercel / Cloudflare）",
          "性能 / 边界 / 亮点整理",
        ],
      },
      {
        name: "简历 + GitHub", range: "7.16 – 7.31", goal: "成型",
        items: [
          "简历：2-3 个 AI 项目 + 量化结果",
          "GitHub README / 项目结构整理",
          "技术博客 / 项目笔记沉淀",
        ],
      },
    ],
  },
  {
    key: "2027-08", year: 2027, month: 7, label: "2027.8",
    title: "第一段实习（大二暑假）进行中 + 复盘",
    theme: "大二暑假 = 第一段实习进行时（中厂暑期 / 大厂日常）。以工作为主，周末复盘补漏，并为秋季冲大厂日常实习做规划。",
    core: "实习 / 复盘", aux: "周末补漏", project: "第一段实习复盘 + 下一段规划",
    leetcodeGoal: 15,
    modules: [
      {
        name: "实习（工作优先）", range: "8.1 – 8.31", goal: "边做边学",
        items: [
          "以实习任务为第一优先级",
          "记录工作中学到的工程/业务经验",
          "积累简历可写的「实习产出」",
        ],
      },
      {
        name: "周末复盘 + 补漏", range: "全月周末", goal: "稳住基本功",
        items: [
          "复习本周遇到的知识盲区",
          "保持每周 3-4 道算法手感",
          "复盘：这段实习哪里没做好、下一段怎么挑",
        ],
      },
      {
        name: "下一段规划", range: "8 月下旬", goal: "冲大厂日常",
        items: [
          "更新简历（加这段实习经历）",
          "梳理秋季大厂日常实习目标 + 内推资源",
        ],
      },
    ],
  },
];

// ============================================================
// 项目完成时间表（Agent 项目 · 按月份）
// 每个 project：no / name / scene / when / level / stack / value / star
// star 为 true 表示「必做 · 强烈推荐」，是进简历的旗舰项目。
// 完整 13 个选题已合并到 10 行：语析/PandaWiki 并入知识库，闲鱼/简历投递并入业务 Agent，
// TripStar/AI-PPT 并入文旅办公，其余单独列出。
// ============================================================

const PROJECTS = [
  { no: 1, name: "AI 资讯日报", scene: "资讯 / 内容", when: "2026.11", level: "必做·入门", stack: "TS · Cloudflare Workers · Gemini API", value: "第一个上线项目，练 TS + 调 API + 部署", star: false },
  { no: 2, name: "大模型问数系统", scene: "数据查询", when: "2026.12–2027.1", level: "必做·旗舰", stack: "LLM · SQL · FastAPI / Node", value: "自然语言转 SQL，企业高频，简历含金量最高；深度点：SQL 注入防护", star: true },
  { no: 3, name: "知识库问答（RAG）", scene: "知识库 / RAG", when: "2027.1–2", level: "必做·旗舰", stack: "RAG · 向量库 · LangChain", value: "AI 岗最核心的落地能力（语析 / PandaWiki 风格）；深度点：重排 + 来源引用评估", star: true },
  { no: 4, name: "客服 / 业务 Agent", scene: "客服 / 自动化", when: "2027.3", level: "必做", stack: "Agent · Function Calling · LangGraph", value: "闲鱼客服 / 简历投递选一，多专家协同", star: true },
  { no: 5, name: "跨平台内容发现 Agent", scene: "内容推荐", when: "2027.4", level: "必做", stack: "Agent · 爬虫 · 用户画像", value: "结合开源研读，本地私有运行", star: false },
  { no: 6, name: "文旅 / 办公多智能体", scene: "生活 / 办公", when: "2027.5", level: "选做", stack: "HelloAgents · 多智能体", value: "TripStar 文旅 / AI-PPT 选一", star: false },
  { no: 7, name: "通用电商 SaaS 客服", scene: "客服 / SaaS", when: "选做", level: "选做·较难", stack: "多平台对接 · SaaS", value: "淘宝/抖音/拼多多统一客服，量力而行", star: false },
  { no: 8, name: "LLM 影视字幕助手", scene: "音视频", when: "选做", level: "选做", stack: "LLM · 字幕 / 翻译", value: "字幕生成、断句纠错、翻译", star: false },
  { no: 9, name: "AI 营销视频工厂", scene: "音视频", when: "选做", level: "选做", stack: "LLM · 剪辑 / 配音", value: "提示词+素材自动剪辑营销短视频", star: false },
  { no: 10, name: "全流程 AI 影视生产", scene: "音视频", when: "选做", level: "选做·最难", stack: "多模态 · 视频生成", value: "小说→分镜→短剧，最后有余力再做", star: false },
];

// （已移除 LEETCODE_PLAN：刷题题目统一放在下面的「数据结构学习地图」DS_MAP，每节 2-3 道，用 C++。）

// ============================================================
// 数据结构学习地图（25 节 · 按真实课程顺序）—— 刷题唯一入口
// 每个 section：no / part(1|2) / title / points[] / problems[]
// problems 为空表示本节以概念理解与手写为主，暂无直接对应题。
// 刷题规则：跟着「当前节」走，每节挑 2-3 道 problems 用 C++ 手写，不刷题海。
// ============================================================

const DS_MAP = [
  // ===== 第 1 部分 =====
  {
    no: 1, part: 1, title: "数据结构基本认知与必要知识点复习",
    points: [
      "逻辑结构：线性（表 / 栈 / 队列 / 串）与非线性（树 / 图）",
      "存储结构：顺序存储 vs 链式存储",
      "算法五特性：有穷、确定、可行、输入、输出",
      "时间 / 空间复杂度：大 O 记法，常见量级排序",
    ],
    problems: [
      { id: 509, name: "斐波那契数", slug: "fibonacci-number", diff: "简单" },
    ],
  },
  {
    no: 2, part: 1, title: "指针 · 结构体 · 动态内存分配 · 算法时间复杂度",
    points: [
      "指针与指针运算（&、*、指针偏移）",
      "struct 结构体与 typedef",
      "malloc / free 动态内存分配",
      "数组与指针的关系",
    ],
    problems: [
      { id: 27, name: "移除元素", slug: "remove-element", diff: "简单" },
      { id: 344, name: "反转字符串", slug: "reverse-string", diff: "简单" },
    ],
  },
  {
    no: 3, part: 1, title: "顺序表与链表",
    points: [
      "顺序表：随机访问 O(1)，插入删除 O(n)",
      "单链表：结点结构、头插 / 尾插",
      "头结点的作用：统一空表与首元素操作",
      "顺序 vs 链式 的取舍",
    ],
    problems: [
      { id: 27, name: "移除元素", slug: "remove-element", diff: "简单" },
      { id: 203, name: "移除链表元素", slug: "remove-linked-list-elements", diff: "简单" },
      { id: 206, name: "反转链表", slug: "reverse-linked-list", diff: "简单" },
    ],
  },
  {
    no: 4, part: 1, title: "链表应用 · 循环链表",
    points: [
      "循环链表：尾指针指向头",
      "快慢指针：判环 / 找中点",
      "约瑟夫环问题",
    ],
    problems: [
      { id: 141, name: "环形链表", slug: "linked-list-cycle", diff: "简单" },
      { id: 876, name: "链表的中间结点", slug: "middle-of-the-linked-list", diff: "简单" },
      { id: 142, name: "环形链表 II", slug: "linked-list-cycle-ii", diff: "中等" },
    ],
  },
  {
    no: 5, part: 1, title: "双向链表 · 栈 · 队列",
    points: [
      "双向链表：prev + next 指针",
      "栈：LIFO，顺序栈 / 链栈，入栈出栈",
      "队列：FIFO，队头队尾",
      "栈的应用：括号匹配、递归、表达式",
    ],
    problems: [
      { id: 707, name: "设计链表", slug: "design-linked-list", diff: "中等" },
      { id: 20, name: "有效的括号", slug: "valid-parentheses", diff: "简单" },
      { id: 232, name: "用栈实现队列", slug: "implement-queue-using-stacks", diff: "简单" },
      { id: 225, name: "用队列实现栈", slug: "implement-stack-using-queues", diff: "简单" },
    ],
  },
  {
    no: 6, part: 1, title: "循环队列 · 讲题 · 递归",
    points: [
      "循环队列：队满 (rear+1)%n == front",
      "队列元素个数：(rear - front + n) % n",
      "递归三要素：终止条件 / 递推 / 返回",
    ],
    problems: [
      { id: 622, name: "设计循环队列", slug: "design-circular-queue", diff: "中等" },
      { id: 509, name: "斐波那契数", slug: "fibonacci-number", diff: "简单" },
      { id: 70, name: "爬楼梯", slug: "climbing-stairs", diff: "简单" },
    ],
  },
  {
    no: 7, part: 1, title: "表达式求值 · 树开头",
    points: [
      "中缀 → 后缀（栈）",
      "逆波兰表达式求值",
      "树的基本概念：根 / 结点 / 度 / 深度",
    ],
    problems: [
      { id: 150, name: "逆波兰表达式求值", slug: "evaluate-reverse-polish-notation", diff: "中等" },
      { id: 227, name: "基本计算器 II", slug: "basic-calculator-ii", diff: "中等" },
    ],
  },
  {
    no: 8, part: 1, title: "二叉树与遍历",
    points: [
      "二叉树性质：第 i 层最多 2^(i-1) 个结点",
      "前 / 中 / 后序遍历（递归 + 非递归）",
      "层序遍历（队列）",
      "完全二叉树 / 满二叉树",
    ],
    problems: [
      { id: 144, name: "二叉树的前序遍历", slug: "binary-tree-preorder-traversal", diff: "简单" },
      { id: 94, name: "二叉树的中序遍历", slug: "binary-tree-inorder-traversal", diff: "简单" },
      { id: 145, name: "二叉树的后序遍历", slug: "binary-tree-postorder-traversal", diff: "简单" },
      { id: 102, name: "二叉树的层序遍历", slug: "binary-tree-level-order-traversal", diff: "中等" },
    ],
  },
  {
    no: 9, part: 1, title: "遍历结果推导 · 线索二叉树",
    points: [
      "由 前+中 / 中+后 唯一确定二叉树",
      "线索二叉树：利用空指针指向前驱 / 后继",
      "中序线索化",
    ],
    problems: [
      { id: 105, name: "从前序与中序遍历序列构造二叉树", slug: "construct-binary-tree-from-preorder-and-inorder-traversal", diff: "中等" },
      { id: 106, name: "从中序与后序遍历序列构造二叉树", slug: "construct-binary-tree-from-inorder-and-postorder-traversal", diff: "中等" },
      { id: 889, name: "根据前序和后序遍历构造二叉树", slug: "construct-binary-tree-from-preorder-and-postorder-traversal", diff: "中等" },
    ],
  },
  {
    no: 10, part: 1, title: "哈夫曼树 · 树森林与二叉树转换",
    points: [
      "哈夫曼树：带权路径长度 WPL 最小",
      "哈夫曼编码：前缀编码",
      "森林 ↔ 二叉树 的转换",
    ],
    problems: [],
  },
  {
    no: 11, part: 1, title: "树森林二叉树转换 · 层序遍历 · 综合应用题",
    points: [
      "森林 ↔ 二叉树 相互转换",
      "层序遍历变体（按层输出 / 层平均）",
      "N 叉树",
    ],
    problems: [
      { id: 429, name: "N 叉树的层序遍历", slug: "n-ary-tree-level-order-traversal", diff: "中等" },
      { id: 637, name: "二叉树的层平均值", slug: "average-of-levels-in-binary-tree", diff: "简单" },
      { id: 102, name: "二叉树的层序遍历", slug: "binary-tree-level-order-traversal", diff: "中等" },
    ],
  },
  {
    no: 12, part: 1, title: "图基本概念与存储结构",
    points: [
      "图：顶点 / 边 / 有向 / 无向 / 带权",
      "邻接矩阵 vs 邻接表（空间、适用场景）",
      "度 / 入度 / 出度",
    ],
    problems: [
      { id: 1791, name: "找出星型图的中心节点", slug: "find-center-of-star-graph", diff: "简单" },
      { id: 997, name: "找到小镇的法官", slug: "find-the-town-judge", diff: "简单" },
    ],
  },
  {
    no: 13, part: 1, title: "深度优先 · 广度优先 · 最小生成树",
    points: [
      "DFS：递归 / 栈",
      "BFS：队列",
      "最小生成树：Prim / Kruskal",
    ],
    problems: [
      { id: 200, name: "岛屿数量", slug: "number-of-islands", diff: "中等" },
      { id: 733, name: "图像渲染", slug: "flood-fill", diff: "简单" },
      { id: 547, name: "省份数量", slug: "number-of-provinces", diff: "中等" },
    ],
  },
  // ===== 第 2 部分 =====
  {
    no: 14, part: 2, title: "最短路径",
    points: [
      "Dijkstra（非负权，单源）",
      "Floyd（多源）",
      "Bellman-Ford（可处理负权）",
    ],
    problems: [
      { id: 743, name: "网络延迟时间", slug: "network-delay-time", diff: "中等" },
      { id: 787, name: "K 站中转内最便宜的航班", slug: "cheapest-flights-within-k-stops", diff: "中等" },
    ],
  },
  {
    no: 15, part: 2, title: "拓扑排序 · 关键路径",
    points: [
      "AOV 网 → 拓扑排序（入度表）",
      "AOE 网 → 关键路径",
      "入度表 / 队列实现",
    ],
    problems: [
      { id: 207, name: "课程表", slug: "course-schedule", diff: "中等" },
      { id: 210, name: "课程表 II", slug: "course-schedule-ii", diff: "中等" },
    ],
  },
  {
    no: 16, part: 2, title: "顺序查找 · 折半查找 · 二叉排序树",
    points: [
      "顺序查找 O(n)",
      "折半查找 O(logn)（需有序）",
      "BST：左小右大，插入 / 删除",
    ],
    problems: [
      { id: 704, name: "二分查找", slug: "binary-search", diff: "简单" },
      { id: 35, name: "搜索插入位置", slug: "search-insert-position", diff: "简单" },
      { id: 700, name: "二叉搜索树中的搜索", slug: "search-in-a-binary-search-tree", diff: "简单" },
    ],
  },
  {
    no: 17, part: 2, title: "折半查找判定树 · 平衡二叉树 · 题目讲解",
    points: [
      "折半查找判定树",
      "AVL：平衡因子、旋转（LL / RR / LR / RL）",
      "平衡二叉树高度推导",
    ],
    problems: [
      { id: 110, name: "平衡二叉树", slug: "balanced-binary-tree", diff: "简单" },
      { id: 108, name: "将有序数组转换为二叉搜索树", slug: "convert-sorted-array-to-binary-search-tree", diff: "简单" },
    ],
  },
  {
    no: 18, part: 2, title: "B 树与 B+ 树 · 真题解析",
    points: [
      "B 树：多路平衡、阶 m、分裂",
      "B+ 树：数据在叶子、叶子链",
      "与 BST / AVL 的区别",
    ],
    problems: [],
  },
  {
    no: 19, part: 2, title: "散列表 · 真题解析",
    points: [
      "哈希函数、冲突处理（拉链 / 开放定址）",
      "装填因子",
      "平均查找长度 ASL",
    ],
    problems: [
      { id: 1, name: "两数之和", slug: "two-sum", diff: "简单" },
      { id: 242, name: "有效的字母异位词", slug: "valid-anagram", diff: "简单" },
      { id: 49, name: "字母异位词分组", slug: "group-anagrams", diff: "中等" },
      { id: 128, name: "最长连续序列", slug: "longest-consecutive-sequence", diff: "中等" },
    ],
  },
  {
    no: 20, part: 2, title: "简单的排序算法",
    points: [
      "冒泡 / 选择 / 插入 O(n²)",
      "稳定性、是否原地",
      "直接插入 vs 折半插入",
    ],
    problems: [
      { id: 912, name: "排序数组", slug: "sort-an-array", diff: "中等" },
      { id: 283, name: "移动零", slug: "move-zeroes", diff: "简单" },
      { id: 147, name: "对链表进行插入排序", slug: "insertion-sort-list", diff: "中等" },
    ],
  },
  {
    no: 21, part: 2, title: "堆与堆排序",
    points: [
      "堆：大顶堆 / 小顶堆，完全二叉树",
      "建堆 O(n)、堆排 O(nlogn)",
      "优先队列",
    ],
    problems: [
      { id: 215, name: "数组中的第K个最大元素", slug: "kth-largest-element-in-an-array", diff: "中等" },
      { id: 347, name: "前 K 个高频元素", slug: "top-k-frequent-elements", diff: "中等" },
      { id: 703, name: "数据流中的第 K 大元素", slug: "kth-largest-element-in-a-stream", diff: "简单" },
    ],
  },
  {
    no: 22, part: 2, title: "高效的排序算法（希尔 · 归并 · 快速 · 基数）",
    points: [
      "希尔：分组插入",
      "归并：分治、稳定 O(nlogn)",
      "快排：partition、最坏 O(n²)",
      "基数：按位、稳定",
    ],
    problems: [
      { id: 912, name: "排序数组", slug: "sort-an-array", diff: "中等" },
      { id: 148, name: "排序链表", slug: "sort-list", diff: "中等" },
      { id: 215, name: "数组中的第K个最大元素", slug: "kth-largest-element-in-an-array", diff: "中等" },
    ],
  },
  {
    no: 23, part: 2, title: "内部排序真题讲解",
    points: [
      "各排序对比：时间 / 空间 / 稳定",
      "真题综合",
    ],
    problems: [
      { id: 75, name: "颜色分类", slug: "sort-colors", diff: "中等" },
      { id: 912, name: "排序数组", slug: "sort-an-array", diff: "中等" },
    ],
  },
  {
    no: 24, part: 2, title: "外部排序",
    points: [
      "多路归并、败者树",
      "置换-选择排序",
      "归并趟数计算",
    ],
    problems: [],
  },
  {
    no: 25, part: 2, title: "几道查找与排序大题讲解",
    points: [
      "查找 + 排序综合大题",
    ],
    problems: [
      { id: 33, name: "搜索旋转排序数组", slug: "search-in-rotated-sorted-array", diff: "中等" },
      { id: 34, name: "在排序数组中查找元素的第一个和最后一个位置", slug: "find-first-and-last-position-of-element-in-sorted-array", diff: "中等" },
      { id: 4, name: "寻找两个正序数组的中位数", slug: "median-of-two-sorted-arrays", diff: "困难" },
    ],
  },
];

// 当前学到第几节（改这个数字即可，地图会自动高亮「当前」并把前面的标为「已学」）
const DS_CURRENT = 8;

// ============================================================
// 英语专区：六级 + 雅思
// ============================================================

const ENGLISH = [
  {
    key: "cet6",
    title: "大学英语六级 (CET-6)",
    tag: "12 月考试 · 大厂简历常设门槛 · 目标 550+ 高分",
    advice: [
      "你的固定节奏：每天早上背 40 个六级单词，晚上听 BBC 六分钟英语练语感——两项作为每日固定任务，坚持到考前。",
      "12 月考试倒推：9–10 月打基础（词汇 + 听力），11 月刷真题 + 专项突破，12 月冲刺模考。",
      "词汇：早 40 词 + 晚复习，用「不背单词 / 墨墨」，核心 5500 词 3 个月刚好过完一轮。",
      "听力：BBC 六分钟是泛听练语感，还要配合真题精听（每天 1 篇约 30 分钟），重点练新闻 / 长对话 / 讲座。",
      "阅读：限时刷真题，先题后文定位，40 分钟 3 篇。",
      "写作：背 3–5 个万能模板 + 每周写 1–2 篇，注意三段式。",
      "翻译：每周 2 篇汉译英，积累固定搭配和中国文化词。",
      "真题：11 月中旬起刷整卷，每周 1 次全真模考，考前刷 3–5 套并复盘。",
    ],
    modules: [
      {
        name: "词汇（每日早 40 词）", goal: "核心 5500 词",
        items: ["第 1–2 周 · 高频核心词", "第 3–4 周 · 核心词", "第 5–6 周 · 核心词", "第 7–8 周 · 真题词 + 易错词", "第 9–10 周 · 全量复习", "考前一周 · 高频冲刺"],
      },
      {
        name: "听力（每日晚 BBC + 精听）", goal: "BBC 六分钟 + 真题精听",
        items: ["每天听 BBC 六分钟英语", "每天精听 1 篇真题听力", "新闻类专项", "长对话 / 讲座专项", "整套听力限时模拟"],
      },
      {
        name: "阅读", goal: "限时 40 分钟",
        items: ["限时 40 分钟做 3 篇", "定位 + 同义替换", "仔细阅读专项", "选词填空 + 段落匹配", "整套阅读模拟"],
      },
      {
        name: "写作", goal: "模板 + 练笔",
        items: ["背 3–5 个模板", "每周写 1–2 篇作文", "找人 / AI 批改"],
      },
      {
        name: "翻译", goal: "每周 2 篇",
        items: ["每周 2 篇汉译英", "积累中国文化词 + 固定搭配"],
      },
      {
        name: "真题冲刺（11–12 月）", goal: "全真模考",
        items: ["11 月中旬起刷整卷真题", "每周 1 次全真模考", "考前刷 3–5 套 + 复盘"],
      },
    ],
  },
  {
    key: "ielts",
    title: "雅思 (IELTS)",
    tag: "外派 / 留学用 · 目标 6.5–7.0 · 建议 2027 春首考",
    advice: [
      "时间线：六级 12 月考完 → 2027 年 1–2 月打基础（词汇 + 题型）→ 3–4 月首考（目标 6.5）→ 5–6 月留刷分空间，赶在暑期实习投递（7 月）前拿下分数。",
      "每天学什么（备考期每天约 1–1.5 小时）：精听 30 分钟 + 背 30 个学术词汇 + 口语开口 15 分钟，阅读 / 写作轮换。",
      "目标：外派 / 留学一般 6.5 起，冲 7.0 更稳，口语和写作是多数人短板，务必重点补。",
      "听力：剑桥真题 4–18 精听，重点练地图题、多选题、同义替换。",
      "阅读：限时 60 分钟 3 篇，练定位 + 判断题（True / False / Not Given）。",
      "写作：Task 1（图表）+ Task 2（议论文）都要练，务必找人或用 AI 批改。",
      "口语：Part 1 / 2 / 3 题库逐项过，每天开口 15 分钟并录音自评。",
    ],
    modules: [
      {
        name: "词汇（每日 30 词）", goal: "学术词汇 AWL 550",
        items: ["学术词汇 AWL 550", "话题词汇：教育 / 环境 / 科技", "同义替换积累"],
      },
      {
        name: "听力（每日精听 30 分钟）", goal: "剑桥真题精听",
        items: ["剑桥真题精听", "地图题 + 多选题专项", "整套听力限时（30 分钟）"],
      },
      {
        name: "阅读（每日 1 篇限时）", goal: "限时 60 分钟",
        items: ["限时 60 分钟 3 篇", "定位 + 判断题", "段落匹配 + 填空题"],
      },
      {
        name: "写作（每周 2 篇）", goal: "Task 1 + Task 2",
        items: ["Task 1 图表：线 / 柱 / 饼 / 表", "Task 2 议论文结构", "每周 1 篇 Task1 + 1 篇 Task2", "AI / 老师批改 + 复盘"],
      },
      {
        name: "口语（每日开口 15 分钟）", goal: "题库 + 录音自评",
        items: ["Part 1 常见话题", "Part 2 题库 + 1 分钟准备", "Part 3 展开论述", "每天开口 15 分钟 + 录音自评"],
      },
    ],
  },
];

// ============================================================
// 每日安排（固定时间表 + 每日任务清单）
// ============================================================

const DAILY = {
  schedule: [
    { time: "早上空闲", title: "背 40 个六级单词", note: "晨起 / 课间碎片时间，用「不背单词 / 墨墨」" },
    { time: "白天", title: "数据结构看 1 节", note: "学校课 / 网课，只「看」这一节，晚上再动手" },
    { time: "下午", title: "Python 看 1 章 + 写 20 分钟", note: "看到「字典+文件+函数」就停；看完立刻写个小脚本" },
    { time: "晚上（整块）", title: "① TS 主线（先）", note: "学 20 分钟 + 写 40 分钟，从装 Node 写第一个 .ts 开始" },
    { time: "晚上（整块）", title: "② 数据结构手写 + C++ 刷题", note: "每周稳定刷 5-7 道，用 C++ 刷对应节 2-3 道题" },
    { time: "晚上（收尾）", title: "③ 八股碎片（计网/OS/DB/Redis 轮换）", note: "每周 2-3 次，每次 15 分钟啃一个点，6 月只收口" },
    { time: "晚上（收尾）", title: "④ 复盘 + 每周产出", note: "写笔记、勾任务、日历打卡；每周一份可交付产出（能跑的代码 / 笔记）" },
  ],
  weekend: "周末：把「晚上整块」延长；周六集中复习本周学过的题（按下面的遗忘曲线表），周日补漏 + 完整模块，或加刷 2-3 道新题。每月一次里程碑复盘，对照月度目标查漏。",
  tasks: [
    { id: "words", label: "背 40 个六级单词" },
    { id: "bbc", label: "听 BBC 六分钟英语" },
    { id: "ts", label: "写 TS（主线，学 + 写）" },
    { id: "ds", label: "数据结构手写 + C++ 刷当前节 2-3 题" },
    { id: "py", label: "Python 小练习（当天那章）" },
    { id: "bagu", label: "八股碎片（计网/OS/DB/Redis 轮换）" },
    { id: "review", label: "复盘 + 每周产出" },
  ],
};

// ============================================================
// 遗忘曲线复习（艾宾浩斯：学后 1 / 2 / 4 / 7 / 15 天复习）
// ============================================================

const REVIEW = {
  intervals: [
    "当天学完 → 次日复习（间隔 1 天）",
    "第 2 次复习 · 间隔 2 天",
    "第 3 次复习 · 间隔 4 天",
    "第 4 次复习 · 间隔 7 天",
    "第 5 次复习 · 间隔 15 天",
  ],
  week: [
    { day: "周一", review: "（从今天开始）", learn: "新学 2 道题" },
    { day: "周二", review: "复习周一内容（1 天前）", learn: "新学 2 道题" },
    { day: "周三", review: "复习周二（1 天前）+ 周一（2 天前）", learn: "新学 2 道题" },
    { day: "周四", review: "复习周三（1 天前）+ 周二（2 天前）", learn: "新学 2 道题" },
    { day: "周五", review: "复习周四（1 天前）+ 周三（2 天前）+ 周一（4 天前）", learn: "新学 2 道题" },
    { day: "周六", review: "复习周五（1 天前）+ 周四（2 天前）+ 周二（4 天前）", learn: "新学 2 道题" },
    { day: "周日", review: "复习周六（1 天前）+ 周五（2 天前）+ 周三（4 天前）+ 周一（7 天前）", learn: "弹性补漏 / 休整" },
  ],
};

// ============================================================
// 逐日具体计划（全年 12 个月 · 按月份 key 组织，点月份导航即切换）
// 每天：{ date:"M.D", week:"周X", lines:[ {c,label,text} ] } 或 { date, week, rest:"休息说明" }
// c（颜色）: lc=刷题橙 · main=主线蓝 · aux=副线/课业绿 · proj=项目/投递紫 · bagu=八股青
// 每周六固定休息（rest）。
// ============================================================

const DAILY_PLAN = {
  "2026-09": [
    { date: "9.13", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树前序遍历 · LC144（C++）" },
      { c: "aux", label: "🐍 Python", text: "字典：统计一句话每个词出现次数" },
      { c: "main", label: "💙 TS", text: "装 Node + tsx，跑通第一个 hello.ts（顺带看 .js 版本，体会 TS=JS+类型）" },
    ]},
    { date: "9.14", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树中序遍历 · LC94" },
      { c: "aux", label: "🐍 Python", text: "字典进阶：写「姓名→分数」查分脚本（增删改查）" },
      { c: "main", label: "💙 TS", text: "TS 变量 let/const + 数组 [] / 对象 {}（把 C++ 的 struct 翻译成 TS 对象）" },
    ]},
    { date: "9.15", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树后序遍历 · LC145" },
      { c: "aux", label: "🐍 Python", text: "字典收尾 + 集合 set：列表去重 / 交集差集" },
      { c: "main", label: "💙 TS", text: "TS 函数 function vs 箭头函数 + 默认参数 + 回调（重点）" },
    ]},
    { date: "9.16", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "层序遍历 · LC102（+ 手写三种遍历再一遍）" },
      { c: "aux", label: "🐍 Python", text: "函数：写判断素数 / 斐波那契" },
      { c: "main", label: "💙 TS", text: "数组高阶方法 map / filter / find（拿一道 LC 题用 TS 重写）" },
    ]},
    { date: "9.17", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "前+中序构造二叉树 · LC105" },
      { c: "aux", label: "🐍 Python", text: "文件读写：读一个 txt 统计词频 top5" },
      { c: "main", label: "💙 TS", text: "对象 + this + class + 继承 extends（语法糖）+ 模块 import / export（Node）" },
    ]},
    { date: "9.18", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "中+后序构造二叉树 · LC106" },
      { c: "aux", label: "🐍 Python", text: "文件读写：把数据写进文件再读回来（✅ Python 已够用，停）" },
      { c: "main", label: "💙 TS", text: "异步：回调 → Promise → async/await（写读文件例子）" },
    ]},
    { date: "9.19", week: "六", rest: "周六休息：不排学习，出去走走 / 补觉 / 打游戏" },
    { date: "9.20", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "前+后序构造 · LC889（选做）+ 线索二叉树概念" },
      { c: "main", label: "💙 TS", text: "TS 基本类型注解 + 接口 interface：给「学生 / 商品」对象写类型并打印" },
    ]},
    { date: "9.21", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "第10节 哈夫曼树（概念手写，无题）" },
      { c: "main", label: "💙 TS", text: "函数类型 + 可选/默认参数：写个带类型的计算器函数" },
    ]},
    { date: "9.22", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "N 叉树层序遍历 · LC429" },
      { c: "main", label: "💙 TS", text: "类 class + 继承 + 类型：写一个类、子类继承并实例化" },
    ]},
    { date: "9.23", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树层平均值 · LC637" },
      { c: "main", label: "💙 TS", text: "泛型 generics：写 first<T> 和一个泛型函数" },
    ]},
    { date: "9.24", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "星型图中心节点 · LC1791" },
      { c: "main", label: "💙 TS", text: "联合类型 + 类型守卫：写类型收窄的例子" },
    ]},
    { date: "9.25", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "小镇法官 · LC997" },
      { c: "main", label: "💙 TS", text: "综合小工具①：命令行待办清单（增删改查，存内存）" },
    ]},
    { date: "9.26", week: "六", rest: "周六休息：不排学习" },
    { date: "9.27", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "main", label: "💙 TS", text: "待办清单②：加文件持久化（读写 JSON）+ 错误处理" },
    ]},
    { date: "9.28", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "图像渲染 · LC733" },
      { c: "main", label: "💙 TS", text: "待办清单③：拆模块 + 补全类型 + 整理 README" },
    ]},
    { date: "9.29", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "main", label: "💙 TS", text: "fetch 实战：写一个查天气 / 查 IP 的小工具（async/await 应用）" },
    ]},
    { date: "9.30", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "月底复盘：手写完整结构（反转链表 + 二叉树遍历）" },
      { c: "main", label: "💙 TS", text: "月底复盘：跑通完整小工具 + 写「我会什么」清单，进 10 月 TS 进阶" },
    ]},
  ],

  "2026-10": [
    { date: "10.1", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "二分查找 · LC704 + 二叉搜索树中的搜索 · LC700" },
      { c: "main", label: "💙 TS", text: "工具类型 Partial / Pick：各写一个例子" },
      { c: "aux", label: "📚 数据结构", text: "第16节 顺序查找 / 折半查找 / BST" },
    ]},
    { date: "10.2", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索插入位置 · LC35" },
      { c: "main", label: "💙 TS", text: "工具类型 Readonly / Record：各写一个例子" },
      { c: "aux", label: "📚 数据结构", text: "第17节 折半查找判定树 / AVL" },
    ]},
    { date: "10.3", week: "六", rest: "周六休息：不排学习" },
    { date: "10.4", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "网络延迟时间 · LC743（Dijkstra）" },
      { c: "main", label: "💙 TS", text: "模块 import / export：拆成多文件的小项目" },
      { c: "aux", label: "📚 数据结构", text: "第14节 最短路径" },
    ]},
    { date: "10.5", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "K 站中转内最便宜的航班 · LC787" },
      { c: "main", label: "💙 TS", text: "多文件小项目：把待办清单拆成多个模块" },
      { c: "aux", label: "📚 数据结构", text: "第15节 拓扑排序 / 关键路径" },
    ]},
    { date: "10.6", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207（拓扑排序）" },
      { c: "main", label: "💙 TS", text: "多文件小项目：模块间 import 打通" },
      { c: "aux", label: "📚 数据结构", text: "第15节 AOE 网 / 关键路径" },
    ]},
    { date: "10.7", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 II · LC210" },
      { c: "main", label: "💙 TS", text: "多文件小项目收尾：跑通 + 整理结构" },
    ]},
    { date: "10.8", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "平衡二叉树 · LC110" },
      { c: "main", label: "💙 TS", text: "async/await：写一个读文件的小脚本" },
      { c: "aux", label: "📚 数据结构", text: "第17节 AVL 旋转（LL/RR/LR/RL）" },
    ]},
    { date: "10.9", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "将有序数组转换为二叉搜索树 · LC108" },
      { c: "main", label: "💙 TS", text: "async/await + fetch：调一个公开 JSON 接口" },
      { c: "aux", label: "📚 数据结构", text: "第18节 B 树 / B+ 树" },
    ]},
    { date: "10.10", week: "六", rest: "周六休息：不排学习" },
    { date: "10.11", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1" },
      { c: "main", label: "💙 TS", text: "命令行工具：fetch 调 JSON 接口（查天气）" },
      { c: "aux", label: "📚 数据结构", text: "第19节 散列表 / 哈希冲突" },
    ]},
    { date: "10.12", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的字母异位词 · LC242" },
      { c: "main", label: "💙 TS", text: "命令行工具：解析 JSON + 打印" },
    ]},
    { date: "10.13", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "字母异位词分组 · LC49" },
      { c: "main", label: "💙 TS", text: "命令行工具：加错误处理 + 参数" },
    ]},
    { date: "10.14", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长连续序列 · LC128" },
      { c: "main", label: "💙 TS", text: "产出小工具①：命令行待办清单（存内存）" },
    ]},
    { date: "10.15", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "排序数组 · LC912（手写冒泡 / 插入）" },
      { c: "main", label: "💙 TS", text: "产出小工具②：待办清单加增删改查" },
      { c: "aux", label: "📚 数据结构", text: "第20节 简单排序" },
    ]},
    { date: "10.16", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "移动零 · LC283" },
      { c: "main", label: "💙 TS", text: "产出小工具③：待办清单文件持久化" },
    ]},
    { date: "10.17", week: "六", rest: "周六休息：不排学习" },
    { date: "10.18", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "对链表进行插入排序 · LC147" },
      { c: "main", label: "💙 TS", text: "产出小工具④：待办清单拆模块 + README" },
    ]},
    { date: "10.19", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 个最大元素 · LC215（堆）" },
      { c: "main", label: "💙 TS", text: "产出小工具⑤：待办清单补全类型 + 错误处理" },
      { c: "aux", label: "📚 数据结构", text: "第21节 堆 / 堆排序" },
    ]},
    { date: "10.20", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "💙 TS", text: "TS 进阶复盘：整理一个能跑的完整小工具" },
    ]},
    { date: "10.21", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "数据流中的第 K 大元素 · LC703" },
      { c: "main", label: "🧩 异步", text: "Promise 彻底搞懂：then / catch / 链式" },
    ]},
    { date: "10.22", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "排序链表 · LC148（归并）" },
      { c: "main", label: "🧩 异步", text: "async/await 彻底搞懂（配合 TS 练手）" },
      { c: "aux", label: "📚 数据结构", text: "第22节 高效排序" },
    ]},
    { date: "10.23", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "颜色分类 · LC75" },
      { c: "main", label: "🧩 异步", text: "fetch 调 REST API + JSON 解析" },
    ]},
    { date: "10.24", week: "六", rest: "周六休息：不排学习" },
    { date: "10.25", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "main", label: "🧩 异步", text: "fetch + 错误处理：超时 / 状态码 / try-catch" },
    ]},
    { date: "10.26", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "在排序数组中查找首末位置 · LC34" },
      { c: "main", label: "🧩 异步", text: "fetch 调自己的接口（本地起一个服务）" },
    ]},
    { date: "10.27", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "两个正序数组的中位数 · LC4" },
      { c: "main", label: "🧩 异步", text: "HTML / CSS 快速回顾①：结构 + 语义标签" },
    ]},
    { date: "10.28", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "排序综合：手写快排 + 归并" },
      { c: "main", label: "🧩 异步", text: "HTML / CSS 快速回顾②：Flex + 布局" },
      { c: "aux", label: "📚 数据结构", text: "第23节 内部排序真题" },
    ]},
    { date: "10.29", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "查找综合：二分 + 哈希各 1 题" },
      { c: "main", label: "🧩 异步", text: "HTML / CSS 快速回顾③：响应式 + 表单" },
      { c: "aux", label: "📚 数据结构", text: "第24节 外部排序" },
    ]},
    { date: "10.30", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "月底复盘：排序 + 查找各手写 1 题" },
      { c: "main", label: "🧩 异步", text: "HTML / CSS 回顾④：做一个部署展示页" },
      { c: "aux", label: "📚 数据结构", text: "第25节 查找与排序大题" },
    ]},
    { date: "10.31", week: "六", rest: "周六休息：不排学习" },
  ],

  "2026-11": [
    { date: "11.1", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 有效的字母异位词 · LC242" },
      { c: "main", label: "🟩 Node", text: "Node 运行模型 / 事件循环" },
    ]},
    { date: "11.2", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并两个有序链表 · LC21" },
      { c: "main", label: "🟩 Node", text: "模块系统：CommonJS / ESM" },
    ]},
    { date: "11.3", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "环形链表 · LC141 + 删除链表倒数第 N 个结点 · LC19" },
      { c: "main", label: "🟩 Node", text: "npm / 包管理 / 常用库" },
    ]},
    { date: "11.4", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "main", label: "🟩 Node", text: "HTTP 模块 / 路由" },
    ]},
    { date: "11.5", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "用栈实现队列 · LC232 + 用队列实现栈 · LC225" },
      { c: "main", label: "🟩 Node", text: "HTTP 路由实践：写一个简单接口" },
    ]},
    { date: "11.6", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "每日温度 · LC739" },
      { c: "main", label: "🟩 Node", text: "Node 基础收尾：跑通一个服务端脚本" },
    ]},
    { date: "11.7", week: "六", rest: "周六休息：不排学习" },
    { date: "11.8", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102 + 中序遍历 · LC94" },
      { c: "main", label: "🟩 Express", text: "Express 中间件 / 路由" },
    ]},
    { date: "11.9", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98 + 最近公共祖先 · LC236" },
      { c: "main", label: "🟩 Express", text: "Express 路由 + 请求响应" },
    ]},
    { date: "11.10", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "🟩 Express", text: "中间件进阶：日志 / 解析 body" },
    ]},
    { date: "11.11", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "main", label: "🟩 Express", text: "REST API 设计：GET / POST / PUT / DELETE" },
    ]},
    { date: "11.12", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "找到字符串中所有字母异位词 · LC438" },
      { c: "main", label: "🟩 Express", text: "REST API：写一个完整的 CRUD 接口" },
    ]},
    { date: "11.13", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "main", label: "🟩 Express", text: "fetch 调通自己的接口" },
    ]},
    { date: "11.14", week: "六", rest: "周六休息：不排学习" },
    { date: "11.15", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "三数之和 · LC15 + 盛最多水的容器 · LC11" },
      { c: "main", label: "🚀 部署", text: "部署：Vercel" },
    ]},
    { date: "11.16", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "main", label: "🚀 部署", text: "部署：Cloudflare Workers" },
    ]},
    { date: "11.17", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "main", label: "🚀 部署", text: "部署收尾：环境变量 / 配置管理" },
    ]},
    { date: "11.18", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "proj", label: "🛠 项目①", text: "AI 资讯日报：需求拆解 + 技术选型" },
    ]},
    { date: "11.19", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "proj", label: "🛠 项目①", text: "Cloudflare Workers + 定时抓取" },
    ]},
    { date: "11.20", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长公共子序列 · LC1143" },
      { c: "proj", label: "🛠 项目①", text: "调 Gemini 做摘要" },
    ]},
    { date: "11.21", week: "六", rest: "周六休息：不排学习" },
    { date: "11.22", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "打家劫舍 · LC198" },
      { c: "proj", label: "🛠 项目①", text: "发布到 GitHub Pages" },
    ]},
    { date: "11.23", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "不同路径 · LC62" },
      { c: "proj", label: "🛠 项目①", text: "写 README 进简历" },
    ]},
    { date: "11.24", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "proj", label: "🛠 项目①", text: "打磨：加错误处理 + 边界" },
    ]},
    { date: "11.25", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "proj", label: "🛠 项目①", text: "上线验收：跑通全流程" },
    ]},
    { date: "11.26", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "proj", label: "🛠 项目①", text: "写「简历条目」：技术栈 + 量化结果" },
    ]},
    { date: "11.27", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "proj", label: "🛠 项目①", text: "复盘：这个项目学到什么" },
    ]},
    { date: "11.28", week: "六", rest: "周六休息：不排学习" },
    { date: "11.29", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33 + 旋转数组最小值 · LC153" },
      { c: "main", label: "🟩 Node", text: "11 月复盘：后端 / 部署 / 项目① 查漏" },
    ]},
    { date: "11.30", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "两个正序数组的中位数 · LC4" },
      { c: "main", label: "🟩 Node", text: "月度里程碑：准备进 12 月后端进阶" },
    ]},
  ],

  "2026-12": [
    { date: "12.1", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 移动零 · LC283" },
      { c: "main", label: "🟩 后端", text: "JWT 鉴权 / 中间件" },
    ]},
    { date: "12.2", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 环形链表 · LC141" },
      { c: "main", label: "🟩 后端", text: "JWT 鉴权实战：登录 → 下发 token" },
    ]},
    { date: "12.3", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 每日温度 · LC739" },
      { c: "main", label: "🟩 后端", text: "环境变量 / 配置管理" },
    ]},
    { date: "12.4", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "main", label: "🟩 后端", text: "部署：Vercel / Cloudflare Workers" },
    ]},
    { date: "12.5", week: "六", rest: "周六休息：不排学习（或刷六级真题）" },
    { date: "12.6", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "三数之和 · LC15 + 盛最多水的容器 · LC11" },
      { c: "main", label: "🟩 后端", text: "后端进阶收尾：鉴权 + 部署跑通" },
    ]},
    { date: "12.7", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "🟩 后端", text: "部署收尾 + 错误处理" },
    ]},
    { date: "12.8", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "main", label: "🟩 后端", text: "后端小项目：写一个带鉴权的接口" },
    ]},
    { date: "12.9", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "main", label: "🟩 后端", text: "后端小项目：配置 + 环境变量" },
    ]},
    { date: "12.10", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "main", label: "🟩 后端", text: "后端小项目收尾 + 部署上线" },
    ]},
    { date: "12.11", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "main", label: "🟩 后端", text: "后端进阶阶段复盘" },
    ]},
    { date: "12.12", week: "六", rest: "周六休息：不排学习（或刷六级真题）" },
    { date: "12.13", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "bagu", label: "📡 计网", text: "OSI / TCP-IP 分层模型" },
    ]},
    { date: "12.14", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "bagu", label: "📡 计网", text: "TCP 三次握手 / 四次挥手" },
    ]},
    { date: "12.15", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "bagu", label: "📡 计网", text: "TCP 拥塞控制 / 流量控制" },
    ]},
    { date: "12.16", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "bagu", label: "📡 计网", text: "HTTP / HTTPS / DNS" },
    ]},
    { date: "12.17", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "bagu", label: "📡 计网", text: "HTTP 状态码 / 方法 / 缓存" },
    ]},
    { date: "12.18", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "图像渲染 · LC733" },
      { c: "bagu", label: "📡 计网", text: "计网八股过一遍：高频题自测" },
    ]},
    { date: "12.19", week: "六", rest: "周六休息：不排学习（或刷六级真题）" },
    { date: "12.20", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "bagu", label: "📡 计网", text: "计网收口：错题 + 重点复盘" },
    ]},
    { date: "12.21", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "bagu", label: "📡 计网", text: "计网八股收尾" },
    ]},
    { date: "12.22", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 II · LC210" },
      { c: "bagu", label: "📡 计网", text: "计网阶段复盘" },
    ]},
    { date: "12.23", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 个最大元素 · LC215" },
      { c: "main", label: "🤖 LLM", text: "调 OpenAI / 国产大模型 API（fetch + JSON）" },
    ]},
    { date: "12.24", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "🤖 LLM", text: "Prompt Engineering 入门" },
    ]},
    { date: "12.25", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "main", label: "🤖 LLM", text: "结构化输出：要求返回 JSON" },
    ]},
    { date: "12.26", week: "六", rest: "周六休息：不排学习" },
    { date: "12.27", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "main", label: "🤖 LLM", text: "问数前置：调 LLM 把自然语言生成 SQL" },
    ]},
    { date: "12.28", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "在排序数组中查找首末位置 · LC34" },
      { c: "main", label: "🤖 LLM", text: "LLM API：错误处理 + 限流重试" },
    ]},
    { date: "12.29", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "main", label: "🤖 LLM", text: "LLM API 阶段复盘" },
    ]},
    { date: "12.30", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "12 月复盘：八股 + 算法各挑 2 题" },
      { c: "main", label: "🤖 LLM", text: "12 月复盘：准备寒假问数系统" },
    ]},
    { date: "12.31", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "跨年：本周算法手感保持 2 题" },
      { c: "main", label: "🤖 LLM", text: "年度复盘：写下「我会什么」清单" },
    ]},
  ],

  "2027-01": [
    { date: "1.1", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "proj", label: "🛠 问数", text: "项目②：自然语言 → SQL 的 Prompt 设计" },
    ]},
    { date: "1.2", week: "六", rest: "周六休息：不排学习" },
    { date: "1.3", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "proj", label: "🛠 问数", text: "后端：FastAPI / Node 接 LLM" },
    ]},
    { date: "1.4", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "proj", label: "🛠 问数", text: "连数据库执行 SQL" },
    ]},
    { date: "1.5", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "proj", label: "🛠 问数", text: "结果可视化：表格 / 图表展示" },
    ]},
    { date: "1.6", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "proj", label: "🛠 问数", text: "安全：SQL 注入防护（深度点）" },
    ]},
    { date: "1.7", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98" },
      { c: "proj", label: "🛠 问数", text: "安全：权限控制" },
    ]},
    { date: "1.8", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "proj", label: "🛠 问数", text: "打磨：边界 + 错误处理" },
    ]},
    { date: "1.9", week: "六", rest: "周六休息：不排学习" },
    { date: "1.10", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "proj", label: "🛠 问数", text: "问数系统联调：全流程跑通" },
    ]},
    { date: "1.11", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "proj", label: "🛠 问数", text: "上线部署 + 测试" },
    ]},
    { date: "1.12", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "proj", label: "🛠 问数", text: "写 README + 进简历" },
    ]},
    { date: "1.13", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "proj", label: "🛠 问数", text: "问数系统复盘：难点 + 亮点" },
    ]},
    { date: "1.14", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "proj", label: "🛠 问数", text: "问数系统：补测 + 打磨" },
    ]},
    { date: "1.15", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "proj", label: "🛠 问数", text: "问数系统收尾：量化结果写简历" },
    ]},
    { date: "1.16", week: "六", rest: "周六休息：不排学习" },
    { date: "1.17", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200 + 省份数量 · LC547" },
      { c: "proj", label: "🛠 问数", text: "问数系统：补充文档 / 录 demo" },
    ]},
    { date: "1.18", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207 + 课程表 II · LC210" },
      { c: "proj", label: "🛠 问数", text: "问数系统：面试话术演练" },
    ]},
    { date: "1.19", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "proj", label: "🛠 问数", text: "问数系统收尾 + 进简历" },
    ]},
    { date: "1.20", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "proj", label: "🛠 问数", text: "项目② 里程碑：完成旗舰项目" },
    ]},
    { date: "1.21", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "aux", label: "📖 开源", text: "开源研读：选一个大厂项目（Agent / RAG 方向）" },
    ]},
    { date: "1.22", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "aux", label: "📖 开源", text: "跑通源码：环境搭建 + 运行" },
    ]},
    { date: "1.23", week: "六", rest: "周六休息：不排学习" },
    { date: "1.24", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "aux", label: "📖 开源", text: "读核心模块①：入口 / 主流程" },
    ]},
    { date: "1.25", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "在排序数组中查找首末位置 · LC34" },
      { c: "aux", label: "📖 开源", text: "读核心模块②：关键数据结构" },
    ]},
    { date: "1.26", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "aux", label: "📖 开源", text: "读核心模块③：核心算法 / 循环" },
    ]},
    { date: "1.27", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "aux", label: "📖 开源", text: "读源码笔记：画流程图" },
    ]},
    { date: "1.28", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "aux", label: "📖 开源", text: "写读后笔记（面试能讲）" },
    ]},
    { date: "1.29", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "盛最多水的容器 · LC11" },
      { c: "aux", label: "📖 开源", text: "开源研读复盘 + 笔记整理" },
    ]},
    { date: "1.30", week: "六", rest: "周六休息：不排学习" },
    { date: "1.31", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "1 月复盘：算法 + 项目各挑 2 题" },
      { c: "aux", label: "📖 开源", text: "1 月复盘：寒假成果盘点" },
    ]},
  ],

  "2027-02": [
    { date: "2.1", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "main", label: "🤖 RAG", text: "Embedding 概念与选型" },
    ]},
    { date: "2.2", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "🤖 RAG", text: "向量库：FAISS / Chroma / Milvus" },
    ]},
    { date: "2.3", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "main", label: "🤖 RAG", text: "向量库实战：存向量 + 检索" },
    ]},
    { date: "2.4", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "main", label: "🤖 RAG", text: "向量检索基础收尾" },
    ]},
    { date: "2.5", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "main", label: "🤖 RAG", text: "向量检索阶段复盘" },
    ]},
    { date: "2.6", week: "六", rest: "周六休息：不排学习" },
    { date: "2.7", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98 + 最近公共祖先 · LC236" },
      { c: "main", label: "🤖 RAG", text: "文档切分 / 检索 / 生成全流程" },
    ]},
    { date: "2.8", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "main", label: "🤖 RAG", text: "文档切分：chunk 策略" },
    ]},
    { date: "2.9", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "main", label: "🤖 RAG", text: "检索：召回 + 相似度" },
    ]},
    { date: "2.10", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "main", label: "🤖 RAG", text: "生成：拼接上下文 + 回答" },
    ]},
    { date: "2.11", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "main", label: "🤖 RAG", text: "重排 / 引用 / 优化（深度点）" },
    ]},
    { date: "2.12", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "main", label: "🤖 RAG", text: "LangChain / LlamaIndex 入门" },
    ]},
    { date: "2.13", week: "六", rest: "周六休息：不排学习" },
    { date: "2.14", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "main", label: "🤖 RAG", text: "LangChain 实战：搭一个检索链" },
    ]},
    { date: "2.15", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "main", label: "🤖 RAG", text: "RAG 实战收尾" },
    ]},
    { date: "2.16", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "main", label: "🤖 RAG", text: "RAG 阶段复盘" },
    ]},
    { date: "2.17", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "main", label: "🤖 RAG", text: "项目③ 规划：私有知识库问答" },
    ]},
    { date: "2.18", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "main", label: "🤖 RAG", text: "项目③：搭框架 + 数据准备" },
    ]},
    { date: "2.19", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "main", label: "🤖 RAG", text: "项目③：多文档 + 来源引用" },
    ]},
    { date: "2.20", week: "六", rest: "周六休息：不排学习" },
    { date: "2.21", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "🤖 RAG", text: "项目③：重排 + 评估（深度点）" },
    ]},
    { date: "2.22", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "main", label: "🤖 RAG", text: "项目③：联调 + 测试" },
    ]},
    { date: "2.23", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "main", label: "🤖 RAG", text: "项目③：上线部署" },
    ]},
    { date: "2.24", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "main", label: "🤖 RAG", text: "项目③：写 README + 进简历" },
    ]},
    { date: "2.25", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "main", label: "🤖 RAG", text: "项目③：复盘 + 量化结果" },
    ]},
    { date: "2.26", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "main", label: "🤖 RAG", text: "项目③ 收尾" },
    ]},
    { date: "2.27", week: "六", rest: "周六休息：不排学习" },
    { date: "2.28", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "2 月复盘：算法 + RAG 各挑 2 题" },
      { c: "main", label: "🤖 RAG", text: "2 月复盘：准备 3 月 Agent" },
    ]},
  ],

  "2027-03": [
    { date: "3.1", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "main", label: "🤖 Agent", text: "Agent 概念 / ReAct" },
    ]},
    { date: "3.2", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "🤖 Agent", text: "Function Calling / 工具调用" },
    ]},
    { date: "3.3", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "main", label: "🤖 Agent", text: "Function Calling 实战：写一个工具调用" },
    ]},
    { date: "3.4", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "main", label: "🤖 Agent", text: "多步推理：ReAct 循环" },
    ]},
    { date: "3.5", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "main", label: "🤖 Agent", text: "Agent 基础收尾" },
    ]},
    { date: "3.6", week: "六", rest: "周六休息：不排学习" },
    { date: "3.7", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98 + 最近公共祖先 · LC236" },
      { c: "main", label: "🤖 Agent", text: "Agent 基础阶段复盘" },
    ]},
    { date: "3.8", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "main", label: "🤖 Agent", text: "多智能体编排：LangGraph" },
    ]},
    { date: "3.9", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "main", label: "🤖 Agent", text: "LangGraph 实战：搭一条流程" },
    ]},
    { date: "3.10", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "main", label: "🤖 Agent", text: "子智能体 / 专家协同" },
    ]},
    { date: "3.11", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "main", label: "🤖 Agent", text: "多智能体实战：专家分工" },
    ]},
    { date: "3.12", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "main", label: "🤖 Agent", text: "记忆与上下文管理" },
    ]},
    { date: "3.13", week: "六", rest: "周六休息：不排学习" },
    { date: "3.14", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "main", label: "🤖 Agent", text: "多智能体阶段复盘" },
    ]},
    { date: "3.15", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "main", label: "🤖 Agent", text: "多智能体收尾" },
    ]},
    { date: "3.16", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "main", label: "🤖 Agent", text: "Agent 阶段复盘" },
    ]},
    { date: "3.17", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "main", label: "🤖 Agent", text: "Agent 阶段收口" },
    ]},
    { date: "3.18", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "main", label: "🤖 Agent", text: "项目④ 规划：客服 / 业务 Agent" },
    ]},
    { date: "3.19", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "main", label: "🤖 Agent", text: "项目④：选型（闲鱼客服 / 简历投递）" },
    ]},
    { date: "3.20", week: "六", rest: "周六休息：不排学习" },
    { date: "3.21", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "🤖 Agent", text: "项目④：搭框架 + 工具定义" },
    ]},
    { date: "3.22", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "main", label: "🤖 Agent", text: "项目④：多专家协同" },
    ]},
    { date: "3.23", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "main", label: "🤖 Agent", text: "项目④：上下文对话" },
    ]},
    { date: "3.24", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "main", label: "🤖 Agent", text: "项目④：联调 + 测试" },
    ]},
    { date: "3.25", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "main", label: "🤖 Agent", text: "项目④：上线 + README" },
    ]},
    { date: "3.26", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "main", label: "🤖 Agent", text: "项目④：写简历条目" },
    ]},
    { date: "3.27", week: "六", rest: "周六休息：不排学习" },
    { date: "3.28", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "proj", label: "🎯 投递", text: "简历初版：2-3 个 AI 项目 + 量化结果" },
    ]},
    { date: "3.29", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "盛最多水的容器 · LC11" },
      { c: "proj", label: "🎯 投递", text: "牛客 / 官网 / 内推投递（中厂优先）" },
    ]},
    { date: "3.30", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最长递增子序列 · LC300" },
      { c: "proj", label: "🎯 投递", text: "笔试准备：算法高频题 + 八股" },
    ]},
    { date: "3.31", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "3 月复盘：算法 + Agent 各挑 2 题" },
      { c: "proj", label: "🎯 投递", text: "3 月复盘：投递情况 + 面试准备" },
    ]},
  ],

  "2027-04": [
    { date: "4.1", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "main", label: "🤖 Agent工程", text: "Agent 循环机制（harness / loop）" },
    ]},
    { date: "4.2", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "🤖 Agent工程", text: "harness / 评测 / 可观测性" },
    ]},
    { date: "4.3", week: "六", rest: "周六休息：不排学习" },
    { date: "4.4", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "main", label: "🤖 Agent工程", text: "错误处理 / 重试" },
    ]},
    { date: "4.5", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "main", label: "🤖 Agent工程", text: "工具沙箱 / 安全" },
    ]},
    { date: "4.6", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "main", label: "🤖 Agent工程", text: "Agent 工程化实战：搭一个 loop" },
    ]},
    { date: "4.7", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98" },
      { c: "main", label: "🤖 Agent工程", text: "可观测性：日志 / 追踪" },
    ]},
    { date: "4.8", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "main", label: "🤖 Agent工程", text: "Agent 工程化收尾" },
    ]},
    { date: "4.9", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "main", label: "🤖 Agent工程", text: "Agent 工程化阶段复盘" },
    ]},
    { date: "4.10", week: "六", rest: "周六休息：不排学习" },
    { date: "4.11", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "aux", label: "📖 开源", text: "研读：阿里 zg(zvec-grep) 代码检索" },
    ]},
    { date: "4.12", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "aux", label: "📖 开源", text: "研读：zg 代码检索核心" },
    ]},
    { date: "4.13", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "aux", label: "📖 开源", text: "研读：TencentDB Agent Memory 记忆方案" },
    ]},
    { date: "4.14", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "aux", label: "📖 开源", text: "研读：Memory 记忆方案核心" },
    ]},
    { date: "4.15", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "aux", label: "📖 开源", text: "研读：WorkBuddy 的 Skill 设计" },
    ]},
    { date: "4.16", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "aux", label: "📖 开源", text: "研读：Skill 设计核心" },
    ]},
    { date: "4.17", week: "六", rest: "周六休息：不排学习" },
    { date: "4.18", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "aux", label: "📖 开源", text: "研读：跑通源码 + 写读后笔记" },
    ]},
    { date: "4.19", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "aux", label: "📖 开源", text: "研读：读后笔记整理" },
    ]},
    { date: "4.20", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "aux", label: "📖 开源", text: "开源研读复盘" },
    ]},
    { date: "4.21", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "aux", label: "📖 开源", text: "研读收尾：吃透 2-3 个" },
    ]},
    { date: "4.22", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "aux", label: "📖 开源", text: "研读阶段复盘" },
    ]},
    { date: "4.23", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "proj", label: "🛠 项目⑤", text: "内容发现 Agent：跨平台内容抓取" },
    ]},
    { date: "4.24", week: "六", rest: "周六休息：不排学习" },
    { date: "4.25", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "proj", label: "🛠 项目⑤", text: "B站 / 小红书 / 知乎抓取" },
    ]},
    { date: "4.26", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "proj", label: "🛠 项目⑤", text: "用户画像 + 主动推送" },
    ]},
    { date: "4.27", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "proj", label: "🛠 项目⑤", text: "本地私有运行" },
    ]},
    { date: "4.28", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "proj", label: "🛠 项目⑤", text: "联调 + 测试" },
    ]},
    { date: "4.29", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "盛最多水的容器 · LC11" },
      { c: "proj", label: "🛠 项目⑤", text: "上线 + README + 简历" },
    ]},
    { date: "4.30", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "4 月复盘：算法 + 开源各挑 2 题" },
      { c: "proj", label: "🛠 项目⑤", text: "4 月复盘" },
    ]},
  ],

  "2027-05": [
    { date: "5.1", week: "六", rest: "周六休息：不排学习（五一假期）" },
    { date: "5.2", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "bagu", label: "🧠 OS", text: "进程 / 线程 / 调度" },
    ]},
    { date: "5.3", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "bagu", label: "🧠 OS", text: "进程 / 线程区别 + 上下文切换" },
    ]},
    { date: "5.4", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "bagu", label: "🧠 OS", text: "内存管理 / 虚拟内存" },
    ]},
    { date: "5.5", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "bagu", label: "🧠 OS", text: "死锁 / 进程间通信" },
    ]},
    { date: "5.6", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "bagu", label: "🧠 OS", text: "OS 八股过一遍：高频题自测" },
    ]},
    { date: "5.7", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98" },
      { c: "bagu", label: "🧠 OS", text: "OS 收口：错题 + 重点复盘" },
    ]},
    { date: "5.8", week: "六", rest: "周六休息：不排学习" },
    { date: "5.9", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "bagu", label: "🧠 OS", text: "OS 阶段复盘" },
    ]},
    { date: "5.10", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "bagu", label: "🧠 Redis", text: "Redis 数据类型 / 持久化" },
    ]},
    { date: "5.11", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "bagu", label: "🧠 Redis", text: "缓存穿透 / 击穿 / 雪崩" },
    ]},
    { date: "5.12", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "bagu", label: "🧠 Redis", text: "分布式锁入门" },
    ]},
    { date: "5.13", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "bagu", label: "🧠 Redis", text: "Redis 收口：高频题自测" },
    ]},
    { date: "5.14", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "bagu", label: "🧠 Redis", text: "后端强化阶段复盘" },
    ]},
    { date: "5.15", week: "六", rest: "周六休息：不排学习" },
    { date: "5.16", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "main", label: "🧪 微调", text: "LoRA 微调入门（够用即可）" },
    ]},
    { date: "5.17", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "main", label: "🧪 微调", text: "FastAPI 封装模型推理服务" },
    ]},
    { date: "5.18", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "main", label: "🧪 微调", text: "模型服务：接口 + 调用" },
    ]},
    { date: "5.19", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "main", label: "🧪 微调", text: "微调阶段复盘" },
    ]},
    { date: "5.20", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "main", label: "🧪 微调", text: "微调 + FastAPI 收尾" },
    ]},
    { date: "5.21", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "🧪 微调", text: "模型服务阶段复盘" },
    ]},
    { date: "5.22", week: "六", rest: "周六休息：不排学习" },
    { date: "5.23", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "proj", label: "🛠 项目⑥", text: "文旅 / 办公 Agent：选型（TripStar / AI-PPT）" },
    ]},
    { date: "5.24", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "proj", label: "🛠 项目⑥", text: "多智能体框架（HelloAgents）" },
    ]},
    { date: "5.25", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "proj", label: "🛠 项目⑥", text: "搭框架 + 核心功能" },
    ]},
    { date: "5.26", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "proj", label: "🛠 项目⑥", text: "联调 + 测试" },
    ]},
    { date: "5.27", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "proj", label: "🛠 项目⑥", text: "上线 + README" },
    ]},
    { date: "5.28", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "proj", label: "🛠 项目⑥", text: "写简历条目" },
    ]},
    { date: "5.29", week: "六", rest: "周六休息：不排学习" },
    { date: "5.30", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "盛最多水的容器 · LC11" },
      { c: "proj", label: "🛠 项目⑥", text: "项目⑥ 复盘 + 收尾" },
    ]},
    { date: "5.31", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "5 月复盘：算法 + 后端各挑 2 题" },
      { c: "proj", label: "🛠 项目⑥", text: "5 月复盘：准备 6 月冲刺" },
    ]},
  ],

  "2027-06": [
    { date: "6.1", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "链表专题：反转 LC206 + 合并 LC21 + 环 LC141" },
      { c: "bagu", label: "📚 八股", text: "数据结构全面复习：链表 / 栈 / 队列" },
    ]},
    { date: "6.2", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "链表专题：删除倒数 LC19 + 两数相加 LC2 + LRU LC146" },
      { c: "bagu", label: "📚 八股", text: "数据结构：栈 / 队列应用" },
    ]},
    { date: "6.3", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "栈专题：括号 LC20 + 最小栈 LC155 + 每日温度 LC739" },
      { c: "bagu", label: "📚 八股", text: "数据结构：树 / 堆" },
    ]},
    { date: "6.4", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "树专题：遍历 LC94/102 + 验证 LC98" },
      { c: "bagu", label: "📚 八股", text: "数据结构：哈希 / 图" },
    ]},
    { date: "6.5", week: "六", rest: "周六休息：不排学习" },
    { date: "6.6", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "树专题：构造 LC105/106 + 公共祖先 LC236" },
      { c: "bagu", label: "📚 八股", text: "数据结构：排序" },
    ]},
    { date: "6.7", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "图专题：岛屿 LC200 + 省份 LC547 + 拓扑 LC207" },
      { c: "bagu", label: "📚 八股", text: "数据结构全面复习收口" },
    ]},
    { date: "6.8", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "双指针专题：三数之和 LC15 + 盛水 LC11 + 移动零 LC283" },
      { c: "bagu", label: "📚 八股", text: "数据结构：手写链表 / 二叉树" },
    ]},
    { date: "6.9", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "双指针专题：接雨水 LC42 + 环形链表II LC142" },
      { c: "bagu", label: "📚 八股", text: "数据结构：手写快排 / 堆排" },
    ]},
    { date: "6.10", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口：LC3 + LC76 + LC438" },
      { c: "bagu", label: "📚 八股", text: "数据结构阶段复盘" },
    ]},
    { date: "6.11", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口 + 二分：LC239 + LC704" },
      { c: "bagu", label: "📚 八股", text: "算法专题：双指针 / 滑动窗口 / 二分" },
    ]},
    { date: "6.12", week: "六", rest: "周六休息：不排学习" },
    { date: "6.13", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "二分专题：LC33 + LC34 + LC153" },
      { c: "bagu", label: "📚 八股", text: "算法专题：二分" },
    ]},
    { date: "6.14", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "DFS/BFS：LC200 + LC733 + LC994" },
      { c: "bagu", label: "📚 八股", text: "算法专题：DFS / BFS" },
    ]},
    { date: "6.15", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "回溯：LC46 + LC78 + LC39 + LC22" },
      { c: "bagu", label: "📚 八股", text: "算法专题：回溯" },
    ]},
    { date: "6.16", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "动态规划：LC70 + LC53 + LC300" },
      { c: "bagu", label: "📚 八股", text: "算法专题：动态规划（一）" },
    ]},
    { date: "6.17", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "动态规划：LC322 + LC1143 + LC198" },
      { c: "bagu", label: "📚 八股", text: "算法专题：动态规划（二）" },
    ]},
    { date: "6.18", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "动态规划：LC5 + LC62 + LC72" },
      { c: "bagu", label: "📚 八股", text: "算法专题：动态规划收口" },
    ]},
    { date: "6.19", week: "六", rest: "周六休息：不排学习" },
    { date: "6.20", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "贪心：LC55 + LC45 + LC763" },
      { c: "bagu", label: "📚 八股", text: "算法专题收口 + 复盘" },
    ]},
    { date: "6.21", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "堆/优先队列：LC215 + LC347 + LC23" },
      { c: "bagu", label: "📚 八股", text: "Python / TS / ML / Agent 八股" },
    ]},
    { date: "6.22", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "哈希：LC1 + LC242 + LC49 + LC128" },
      { c: "bagu", label: "📚 八股", text: "计网 / OS / 数据库 / Node 八股" },
    ]},
    { date: "6.23", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "高频综合：LRU LC146 + 三数之和 LC15" },
      { c: "bagu", label: "📚 八股", text: "八股收口：错题重刷" },
    ]},
    { date: "6.24", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "高频综合：接雨水 LC42 + 最小覆盖 LC76" },
      { c: "bagu", label: "📚 八股", text: "项目 STAR 话术打磨①" },
    ]},
    { date: "6.25", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "高频综合：岛屿 LC200 + 最长递增 LC300" },
      { c: "bagu", label: "📚 八股", text: "项目 STAR 话术打磨②" },
    ]},
    { date: "6.26", week: "六", rest: "周六休息：不排学习" },
    { date: "6.27", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "高频综合：中位数 LC4 + 搜索旋转 LC33" },
      { c: "bagu", label: "📚 八股", text: "项目 STAR 话术打磨③" },
    ]},
    { date: "6.28", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "高频综合：K 大 LC215 + 括号 LC22" },
      { c: "bagu", label: "📚 八股", text: "面试语言：项目深挖" },
    ]},
    { date: "6.29", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "6 月冲刺复盘：错题重刷 3 题" },
      { c: "bagu", label: "📚 八股", text: "八股收口 + 项目深挖复盘" },
    ]},
    { date: "6.30", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "6 月复盘：算法 + 八股查漏" },
      { c: "bagu", label: "📚 八股", text: "6 月复盘：准备 7 月项目成型" },
    ]},
  ],

  "2027-07": [
    { date: "7.1", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "proj", label: "🛠 项目", text: "核心项目打磨：问数系统完善" },
    ]},
    { date: "7.2", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "proj", label: "🛠 项目", text: "问数系统：性能 / 边界 / 亮点" },
    ]},
    { date: "7.3", week: "六", rest: "周六休息：不排学习" },
    { date: "7.4", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "proj", label: "🛠 项目", text: "知识库问答：完善 + 亮点" },
    ]},
    { date: "7.5", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "proj", label: "🛠 项目", text: "Agent 项目：完善 + 亮点" },
    ]},
    { date: "7.6", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "proj", label: "🛠 项目", text: "项目部署上线（Vercel / Cloudflare）" },
    ]},
    { date: "7.7", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98" },
      { c: "proj", label: "🛠 项目", text: "项目部署收尾" },
    ]},
    { date: "7.8", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "proj", label: "🛠 项目", text: "项目打磨收尾" },
    ]},
    { date: "7.9", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "proj", label: "🛠 项目", text: "项目复盘" },
    ]},
    { date: "7.10", week: "六", rest: "周六休息：不排学习" },
    { date: "7.11", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "proj", label: "🛠 项目", text: "项目打磨收尾" },
    ]},
    { date: "7.12", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "proj", label: "🛠 项目", text: "项目打磨阶段复盘" },
    ]},
    { date: "7.13", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "proj", label: "🛠 项目", text: "项目打磨收尾" },
    ]},
    { date: "7.14", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "proj", label: "🛠 项目", text: "项目成型里程碑" },
    ]},
    { date: "7.15", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "proj", label: "🛠 项目", text: "核心项目打磨收尾" },
    ]},
    { date: "7.16", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "proj", label: "📄 简历", text: "简历：2-3 个 AI 项目 + 量化结果" },
    ]},
    { date: "7.17", week: "六", rest: "周六休息：不排学习" },
    { date: "7.18", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "proj", label: "📄 简历", text: "简历：项目经历润色" },
    ]},
    { date: "7.19", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "proj", label: "📄 简历", text: "GitHub README / 项目结构整理" },
    ]},
    { date: "7.20", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "proj", label: "📄 简历", text: "GitHub 整理" },
    ]},
    { date: "7.21", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "proj", label: "📄 简历", text: "技术博客 / 项目笔记沉淀" },
    ]},
    { date: "7.22", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "proj", label: "📄 简历", text: "简历初版完成" },
    ]},
    { date: "7.23", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "proj", label: "📄 简历", text: "简历打磨：找内推 / 前辈看" },
    ]},
    { date: "7.24", week: "六", rest: "周六休息：不排学习" },
    { date: "7.25", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "proj", label: "📄 简历", text: "简历定稿" },
    ]},
    { date: "7.26", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "proj", label: "📄 简历", text: "GitHub 收尾" },
    ]},
    { date: "7.27", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "proj", label: "📄 简历", text: "博客 / 笔记沉淀" },
    ]},
    { date: "7.28", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "proj", label: "📄 简历", text: "简历 + GitHub 成型" },
    ]},
    { date: "7.29", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "盛最多水的容器 · LC11" },
      { c: "proj", label: "📄 简历", text: "简历收尾" },
    ]},
    { date: "7.30", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "7 月复盘：算法 + 项目各挑 2 题" },
      { c: "proj", label: "📄 简历", text: "7 月复盘" },
    ]},
    { date: "7.31", week: "六", rest: "周六休息：不排学习" },
  ],

  "2027-08": [
    { date: "8.1", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "两数之和 · LC1 + 三数之和 · LC15" },
      { c: "main", label: "💼 实习", text: "实习任务为第一优先级" },
    ]},
    { date: "8.2", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "无重复字符的最长子串 · LC3" },
      { c: "main", label: "💼 实习", text: "记录工作中学到的工程 / 业务经验" },
    ]},
    { date: "8.3", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "反转链表 · LC206 + 合并有序链表 · LC21" },
      { c: "main", label: "💼 实习", text: "积累简历可写的「实习产出」" },
    ]},
    { date: "8.4", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "有效的括号 · LC20 + 最小栈 · LC155" },
      { c: "main", label: "💼 实习", text: "实习：边做边学" },
    ]},
    { date: "8.5", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "二叉树的层序遍历 · LC102" },
      { c: "main", label: "💼 实习", text: "实习：本周工程经验记录" },
    ]},
    { date: "8.6", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "验证二叉搜索树 · LC98" },
      { c: "main", label: "💼 实习", text: "实习：周复盘" },
    ]},
    { date: "8.7", week: "六", rest: "周六休息：不排学习" },
    { date: "8.8", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "爬楼梯 · LC70 + 最大子数组和 · LC53" },
      { c: "aux", label: "📝 周末补漏", text: "复习本周遇到的知识盲区" },
    ]},
    { date: "8.9", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长递增子序列 · LC300" },
      { c: "main", label: "💼 实习", text: "实习任务优先" },
    ]},
    { date: "8.10", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "零钱兑换 · LC322" },
      { c: "main", label: "💼 实习", text: "记录工程 / 业务经验" },
    ]},
    { date: "8.11", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "全排列 · LC46 + 子集 · LC78" },
      { c: "main", label: "💼 实习", text: "积累实习产出" },
    ]},
    { date: "8.12", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "组合总和 · LC39" },
      { c: "main", label: "💼 实习", text: "实习边做边学" },
    ]},
    { date: "8.13", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "括号生成 · LC22" },
      { c: "main", label: "💼 实习", text: "实习周复盘" },
    ]},
    { date: "8.14", week: "六", rest: "周六休息：不排学习" },
    { date: "8.15", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "最长回文子串 · LC5" },
      { c: "aux", label: "📝 周末补漏", text: "保持每周 3-4 道算法手感" },
    ]},
    { date: "8.16", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "岛屿数量 · LC200" },
      { c: "main", label: "💼 实习", text: "实习任务优先" },
    ]},
    { date: "8.17", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "省份数量 · LC547" },
      { c: "main", label: "💼 实习", text: "记录工程 / 业务经验" },
    ]},
    { date: "8.18", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "课程表 · LC207" },
      { c: "main", label: "💼 实习", text: "积累实习产出" },
    ]},
    { date: "8.19", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "数组中的第 K 大 · LC215" },
      { c: "main", label: "💼 实习", text: "实习边做边学" },
    ]},
    { date: "8.20", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "前 K 个高频元素 · LC347" },
      { c: "main", label: "💼 实习", text: "实习周复盘" },
    ]},
    { date: "8.21", week: "六", rest: "周六休息：不排学习" },
    { date: "8.22", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "LRU 缓存 · LC146" },
      { c: "aux", label: "📝 周末补漏", text: "复习本周知识盲区" },
    ]},
    { date: "8.23", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "合并 K 个升序链表 · LC23" },
      { c: "main", label: "💼 实习", text: "实习任务优先" },
    ]},
    { date: "8.24", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "搜索旋转排序数组 · LC33" },
      { c: "main", label: "💼 实习", text: "记录工程 / 业务经验" },
    ]},
    { date: "8.25", week: "三", lines: [
      { c: "lc", label: "🧱 刷题", text: "最小覆盖子串 · LC76" },
      { c: "main", label: "💼 实习", text: "积累实习产出" },
    ]},
    { date: "8.26", week: "四", lines: [
      { c: "lc", label: "🧱 刷题", text: "滑动窗口最大值 · LC239" },
      { c: "proj", label: "🎯 规划", text: "更新简历（加这段实习经历）" },
    ]},
    { date: "8.27", week: "五", lines: [
      { c: "lc", label: "🧱 刷题", text: "接雨水 · LC42" },
      { c: "proj", label: "🎯 规划", text: "梳理秋季大厂日常实习目标 + 内推资源" },
    ]},
    { date: "8.28", week: "六", rest: "周六休息：不排学习" },
    { date: "8.29", week: "日", lines: [
      { c: "lc", label: "🧱 刷题", text: "8 月复盘：算法手感保持 2 题" },
      { c: "aux", label: "📝 复盘", text: "这段实习哪里没做好、下一段怎么挑" },
    ]},
    { date: "8.30", week: "一", lines: [
      { c: "lc", label: "🧱 刷题", text: "保持每周 3-4 道算法手感" },
      { c: "proj", label: "🎯 规划", text: "下一段实习规划收尾" },
    ]},
    { date: "8.31", week: "二", lines: [
      { c: "lc", label: "🧱 刷题", text: "8 月复盘 + 年度收口" },
      { c: "proj", label: "🎯 规划", text: "8 月复盘：冲大厂日常实习" },
    ]},
  ],
};

// ============================================================
// 学习进度总览（科目进度条 · 备注起始时间）
// 每个 skill：id / emoji / name / color(进度条颜色) / start(起始时间)
//            / end(截止时间，空 = 无明确截止) / note(一句话说明)
//            / src + 对应数据源：
//              - src:"ds"        → 数据结构，进度 = DS_CURRENT / DS_MAP 节数
//              - src:"mods"      → 按月模块，mods:[ [月份key, 模块下标], ... ]
//              - src:"problems"  → 刷题，进度 = 地图里已勾题 / 总题数
//              - src:"en"        → 英语，en:"cet6" / "ielts"
// 想加新科目：照抄一行，src 选对数据源即可。
// ============================================================

const SKILLS = [
  // —— 语言与基础（9–10 月）——
  { id: "ds",   emoji: "🧱", name: "数据结构",   color: "#ff9f0a", start: "2026.9.1",  end: "",            note: "学校课 · 25 节地图 · 6 月全面复习", src: "ds" },
  { id: "py",   emoji: "🐍", name: "Python",     color: "#34c759", start: "2026.9.1",  end: "2026.9.18",   note: "够用即停（到字典+文件+函数）", src: "mods", mods: [["2026-09", 1]] },
  { id: "ts",   emoji: "💙", name: "TypeScript", color: "#0071e3", start: "2026.9.13", end: "2026.10.31",  note: "主线 · 会写会跑", src: "mods", mods: [["2026-09", 2], ["2026-10", 1], ["2026-10", 2]] },
  { id: "git",  emoji: "🌿", name: "git",        color: "#5856d6", start: "2026.9.1",  end: "",            note: "版本控制", src: "mods", mods: [["2026-09", 3]] },
  // —— 后端（11–12 月）——
  { id: "node", emoji: "⚙️", name: "Node + Express", color: "#30b0c7", start: "2026.11.1",  end: "",        note: "后端主线 · 部署上线", src: "mods", mods: [["2026-11", 0], ["2026-11", 1]] },
  { id: "sec",  emoji: "🔐", name: "后端进阶",   color: "#af52de", start: "2026.12.1",  end: "",            note: "JWT 鉴权 / 环境变量 / 部署", src: "mods", mods: [["2026-12", 0]] },
  { id: "net",  emoji: "🌐", name: "计算机网络", color: "#ff2d55", start: "2026.12.13", end: "",            note: "八股 · TCP / HTTP / DNS", src: "mods", mods: [["2026-12", 1]] },
  { id: "llm",  emoji: "🤖", name: "LLM API",    color: "#0a84ff", start: "2026.12.23", end: "",            note: "调大模型 · Prompt · 结构化输出", src: "mods", mods: [["2026-12", 2]] },
  // —— AI 主线（2027.1–4 月）——
  { id: "oss",  emoji: "📚", name: "开源研读",   color: "#8e8e93", start: "2027.1.21", end: "",            note: "跑通大厂 Agent / RAG 源码", src: "mods", mods: [["2027-01", 1], ["2027-04", 1]] },
  { id: "rag",  emoji: "🔍", name: "RAG / 向量库", color: "#ff9f0a", start: "2027.2.1",  end: "",          note: "Embedding · 检索 · 重排", src: "mods", mods: [["2027-02", 0], ["2027-02", 1]] },
  { id: "agent", emoji: "🧠", name: "Agent 开发", color: "#5856d6", start: "2027.3.1",  end: "",            note: "Function Calling · 多智能体", src: "mods", mods: [["2027-03", 0], ["2027-03", 1]] },
  { id: "agent-eng", emoji: "⚡", name: "Agent 工程化", color: "#30b0c7", start: "2027.4.1", end: "",        note: "harness / loop / 评测", src: "mods", mods: [["2027-04", 0]] },
  // —— 强化与收口（2027.5 月）——
  { id: "os",   emoji: "🖥️", name: "操作系统",   color: "#ff9500", start: "2027.5.1",  end: "",            note: "八股 · 进程 / 内存 / 死锁", src: "mods", mods: [["2027-05", 0]] },
  { id: "redis", emoji: "💾", name: "Redis / 缓存", color: "#ff3b30", start: "2027.5.15", end: "",          note: "缓存穿透 / 击穿 / 雪崩", src: "mods", mods: [["2027-05", 1]] },
  { id: "ft",   emoji: "🎛️", name: "微调 + FastAPI", color: "#34c759", start: "2027.5.23", end: "",         note: "LoRA 入门 · 模型服务", src: "mods", mods: [["2027-05", 2]] },
  // —— 全程 & 英语 ——
  { id: "lc",   emoji: "🔥", name: "刷题 / 算法", color: "#ff3b30", start: "2026.9.13", end: "",            note: "全程 · 只用 C++ · 跟地图每节 2-3 道", src: "problems" },
  { id: "en6",  emoji: "🌍", name: "英语六级",   color: "#0071e3", start: "2026.9.1",  end: "2026.12",     note: "目标 550+ · 每日固定任务", src: "en", en: "cet6" },
  { id: "ielts", emoji: "🎓", name: "雅思",      color: "#af52de", start: "2027.1.1",  end: "",            note: "目标 6.5–7.0 · 2027 春首考", src: "en", en: "ielts" },
];

// ============================================================
// 版本 / 更新日志（每次大更新记一笔，最新在最上面）
// 想看历史改动就翻这里；想加新版本，照抄一行放在数组最前面即可。
// ============================================================

const VERSIONS = [
  { v: "v14", date: "2026-09-16", title: "去 JS、TS 顺带学语法", desc: "去掉独立 JS 速成，JS 语法随 TS 一起学（TS=JS+类型）；TS 进度推进到「继承」，class 条目补上 extends；10 月「JS 异步」改名「异步 + fetch + 前端回顾」。" },
  { v: "v13", date: "2026-09-15", title: "逐日计划全年 12 个月", desc: "逐日具体计划从只有 9 月扩展到全年 12 个月，每天带具体刷题题目；点上方月份即可切换对应月份的逐日计划；TS 起步前前置 JS 速成。" },
  { v: "v12", date: "2026-09-14", title: "UI 优化", desc: "学习进度总览及其余卡片改为可收起、默认收起；删除数据同步栏（文件导入 / 导出）。" },
  { v: "v11", date: "2026-09-14", title: "全年学习进度总览", desc: "新增全年 18 个科目进度条，每科带起始 / 截止时间。" },
  { v: "v10", date: "2026-09-13", title: "加码版计划", desc: "算法翻倍贯穿全年、八股碎化到每天、项目提前、目标重定位到多段实习。" },
  { v: "v9", date: "2026-09-10", title: "逐日计划细化", desc: "TS 从 9.13 开始、每周六休息、按月分组可展开（当天默认展开）。" },
  { v: "v8", date: "2026-09-10", title: "逐日具体计划", desc: "新增逐日具体计划，每天 ds / python / ts 三线各一件。" },
  { v: "v7", date: "2026-09-10", title: "刷题统一", desc: "刷题统一到数据结构地图（删掉 LeetCode 双清单）；TS 改成具体动手项；Python 够用即停；11 月收敛到 Node + 部署。" },
  { v: "v6", date: "2026-09-06", title: "主线改版 + 苹果风视觉", desc: "主线改为 Agent 工程化 + 后端（TS 为主）；新增项目完成时间表；整体苹果风视觉。" },
  { v: "v5", date: "2026-09-02", title: "遗忘曲线复习表", desc: "新增遗忘曲线周复习表（1 / 2 / 4 / 7 天间隔）+ 每日 2 题 + 数据结构地图当前进度标记。" },
  { v: "v4", date: "2026-09-02", title: "数据结构学习地图", desc: "25 节，每节重点 + 配套 LeetCode。" },
  { v: "v3", date: "2026-09-02", title: "LeetCode 清单 + 云端同步", desc: "LeetCode 每日题目清单 + Puter.js 全平台云端同步。" },
  { v: "v2", date: "2026-08-29", title: "数据同步", desc: "支持手动导出 / 导入文件 + 复制 / 粘贴备份。" },
  { v: "v1", date: "2026-08-29", title: "网站初版", desc: "AI 向学习计划 + 每日安排（时间表 / 任务清单）+ 英语专区上线。" },
];

// ============================================================
// LeetCode 题号 → slug 补充表（逐日计划里点题跳转用）
// 数据结构地图（DS_MAP）里已带 slug 的题会自动复用，这里只补地图没覆盖到的题号。
// 题号顺序按数字排，方便查找。
// ============================================================

const LC_SLUG_EXTRA = {
  2: "add-two-numbers",
  3: "longest-substring-without-repeating-characters",
  5: "longest-palindromic-substring",
  11: "container-with-most-water",
  15: "3sum",
  19: "remove-nth-node-from-end-of-list",
  21: "merge-two-sorted-lists",
  22: "generate-parentheses",
  23: "merge-k-sorted-lists",
  39: "combination-sum",
  42: "trapping-rain-water",
  45: "jump-game-ii",
  46: "permutations",
  53: "maximum-subarray",
  55: "jump-game",
  62: "unique-paths",
  72: "edit-distance",
  76: "minimum-window-substring",
  78: "subsets",
  98: "validate-binary-search-tree",
  146: "lru-cache",
  153: "find-minimum-in-rotated-sorted-array",
  155: "min-stack",
  198: "house-robber",
  236: "lowest-common-ancestor-of-a-binary-tree",
  239: "sliding-window-maximum",
  300: "longest-increasing-subsequence",
  322: "coin-change",
  438: "find-all-anagrams-in-a-string",
  739: "daily-temperatures",
  763: "partition-labels",
  994: "rotting-oranges",
  1143: "longest-common-subsequence",
};
