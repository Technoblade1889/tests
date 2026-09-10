// ============================================================
// 全年学习计划数据（2026.9 – 2027.8）—— Agent 工程化 + 后端方向
// 每个 month：key / year / month(0-11) / label / title / theme
//            / core / aux / project / leetcodeGoal / modules[]
// 每个 module：name / range / goal / items[]
// 说明：已学过 高数/线代/离散，概率论与复变由学校课程覆盖，不再单排数学。
// 主线：数据结构(学校) → TS → Node/后端 → LLM → RAG/Agent → Agent 工程化 + 研读开源
// 副线：Python 够用即停（到「字典+文件+函数」就停，每章写个小脚本）；后端 TS/Node 为主、FastAPI 为辅。
// 刷题：只用 C++（STL 方言）。题目统一在「数据结构学习地图 DS_MAP」一处，跟着当前节刷 2-3 道，不刷题海。
// 每日节奏：白天看数据结构 → 下午看 Python + 写小练习 → 晚上整块 = TS（主线，先）+ 数据结构手写/刷题。
// ============================================================

const YEAR_MONTHS = [
  {
    key: "2026-09", year: 2026, month: 8, label: "2026.9",
    title: "数据结构收尾 + Python 够用 + TS 起步",
    theme: "学校数据结构快速推进；Python 只学到「会读会改」；TS 开始打底，为后端与 Agent 落地铺路。",
    core: "数据结构 / TS 起步", aux: "Python 够用 / git", project: "LeetCode 15 题",
    leetcodeGoal: 15,
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
        name: "TS 起步", range: "9.13 – 9.30", goal: "会写会跑，不是会看",
        items: [
          "装 Node + tsx，跑通第一个 .ts 脚本",
          "基本类型 / 接口 / 类型注解（每天写一个带类型的小函数）",
          "函数 / 类 / 泛型入门（写 first<T>、用 interface 描述对象）",
          "async/await：写一个读文件或 fetch 的小脚本",
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
    theme: "学校数据结构到查找/排序收尾；TS 进阶补齐，为 11 月 Node 后端做准备。",
    core: "数据结构 / TS", aux: "刷题", project: "LeetCode 25 题",
    leetcodeGoal: 25,
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
        name: "JS 异步 + fetch", range: "10.21 – 10.31", goal: "为 12 月调 API 铺路",
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
    title: "Node/TS 后端 + 部署",
    theme: "后端主线启动：Node + Express 起步，学会部署，为 12 月项目①铺路。",
    core: "Node/TS 后端 / 部署", aux: "刷题", project: "一个能上线的接口",
    leetcodeGoal: 20,
    modules: [
      {
        name: "Node.js 基础", range: "11.1 – 11.12", goal: "服务端起步",
        items: [
          "Node 运行模型 / 事件循环 / 模块",
          "npm / 包管理 / 常用库",
          "HTTP 模块 / 路由",
        ],
      },
      {
        name: "Express + HTTP + 部署", range: "11.13 – 11.30", goal: "能上线一个接口",
        items: [
          "Express 中间件 / 路由 / 请求响应",
          "REST API 设计 + fetch 调通自己的接口",
          "部署：Vercel / Cloudflare Workers（为项目①铺路）",
          "（NestJS、MySQL 推迟到寒假做问数系统时再学）",
        ],
      },
    ],
  },
  {
    key: "2026-12", year: 2026, month: 11, label: "2026.12",
    title: "后端深入 + 计网 + 项目①",
    theme: "后端补鉴权/部署，计网八股过一遍，做出第一个能上线的 TS 项目（AI 资讯日报）。",
    core: "后端深入 / 计网", aux: "八股", project: "项目① AI 资讯日报",
    leetcodeGoal: 15,
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
        name: "项目① AI 资讯日报", range: "12.23 – 12.31", goal: "第一个上线项目",
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
    key: "2027-01", year: 2027, month: 0, label: "2027.1",
    title: "大模型 API + 问数系统②（寒假）",
    theme: "寒假集中：搞懂大模型 API 与 Prompt，做出「自然语言转 SQL」问数系统（简历旗舰项目）。",
    core: "LLM API / Prompt", aux: "寒假刷题", project: "项目② 问数系统【强烈推荐】",
    leetcodeGoal: 25,
    modules: [
      {
        name: "大模型基础", range: "1.1 – 1.10", goal: "会用 API",
        items: [
          "大模型发展脉络 / 能力边界",
          "调 OpenAI / 国产大模型 API",
          "Prompt Engineering / 结构化输出",
        ],
      },
      {
        name: "项目② 大模型问数系统", range: "1.11 – 1.31", goal: "旗舰项目",
        items: [
          "自然语言 → SQL 的 Prompt 设计",
          "后端：FastAPI 或 Node 接 LLM",
          "连数据库执行 SQL + 结果可视化",
          "安全：SQL 注入防护 / 权限",
          "写 README + 进简历",
        ],
      },
    ],
  },
  {
    key: "2027-02", year: 2027, month: 1, label: "2027.2",
    title: "RAG + 知识库项目③（寒假）",
    theme: "RAG 检索增强 + 向量库，做出知识库问答系统，这是 AI 岗最核心的落地能力。",
    core: "RAG / 向量库", aux: "刷题", project: "项目③ 知识库问答",
    leetcodeGoal: 15,
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
          "多文档 + 来源引用",
          "写 README + 进简历",
        ],
      },
    ],
  },
  {
    key: "2027-03", year: 2027, month: 2, label: "2027.3",
    title: "Agent 开发 + 项目④",
    theme: "从 LLM 到 Agent：Function Calling + 多智能体编排，做出客服/业务 Agent。",
    core: "Agent / 工具调用", aux: "刷题", project: "项目④ 客服/业务 Agent",
    leetcodeGoal: 15,
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
        name: "项目④ 业务 Agent", range: "3.21 – 3.31", goal: "项目",
        items: [
          "闲鱼客服 / 简历投递 Agent 选一",
          "多专家协同 + 上下文对话",
          "写 README + 进简历",
        ],
      },
    ],
  },
  {
    key: "2027-04", year: 2027, month: 3, label: "2027.4",
    title: "Agent 工程化 + 研读开源 + 项目⑤",
    theme: "进阶关键月：读大厂开源项目、搞懂 harness/loop，把 Agent 做成工程化产品。",
    core: "Agent 工程化 / 开源研读", aux: "刷题", project: "项目⑤ 内容发现 Agent",
    leetcodeGoal: 15,
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
        name: "研读大厂开源", range: "4.13 – 4.22", goal: "跑通源码",
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
    theme: "后端补 Redis/缓存/OS 八股，微调(LoRA)够用即可，再做一个多智能体项目。",
    core: "操作系统 / Redis", aux: "八股 / 微调", project: "项目⑥ 文旅/办公 Agent",
    leetcodeGoal: 15,
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
    title: "算法冲刺 + 八股 + 项目深挖",
    theme: "面试硬门槛集中冲刺：LeetCode 高频题 + 各科八股，项目打磨成简历语言。",
    core: "算法 / 八股", aux: "LeetCode 冲刺", project: "LeetCode 40 题",
    leetcodeGoal: 40,
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
        name: "八股 + 项目深挖", range: "6.21 – 6.30", goal: "面试语言",
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
    theme: "把 2-3 个核心项目打磨上线，简历成型，GitHub 整理，为投递做准备。",
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
    title: "面试冲刺 + 投递",
    theme: "八股全面过、模拟面试，开始投递暑期实习。",
    core: "八股 / 模拟面试", aux: "投递", project: "投递暑期实习",
    leetcodeGoal: 20,
    modules: [
      {
        name: "八股全面整理", range: "8.1 – 8.15", goal: "系统化",
        items: [
          "Python / TS / ML / Agent 八股",
          "计网 / OS / 数据库 / Node 八股",
          "项目深挖话术",
        ],
      },
      {
        name: "面试冲刺", range: "8.16 – 8.31", goal: "投递",
        items: [
          "模拟面试",
          "高频题复习",
          "开始投递暑期实习",
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
  { no: 1, name: "AI 资讯日报", scene: "资讯 / 内容", when: "2026.12", level: "必做·入门", stack: "TS · Cloudflare Workers · Gemini API", value: "第一个上线项目，练 TS + 调 API + 部署", star: false },
  { no: 2, name: "大模型问数系统", scene: "数据查询", when: "2027.1", level: "必做·旗舰", stack: "LLM · SQL · FastAPI / Node", value: "自然语言转 SQL，企业高频，简历含金量最高", star: true },
  { no: 3, name: "知识库问答（RAG）", scene: "知识库 / RAG", when: "2027.2", level: "必做·旗舰", stack: "RAG · 向量库 · LangChain", value: "AI 岗最核心的落地能力（语析 / PandaWiki 风格）", star: true },
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
    { time: "晚上（整块）", title: "② 数据结构手写 + C++ 刷题", note: "手写白天那节，用 C++ 刷对应 2-3 道题" },
    { time: "晚上（收尾）", title: "③ Python 小练习 + 复盘", note: "下午没写完的补上，写笔记、勾任务、日历打卡" },
  ],
  weekend: "周末：把「晚上整块」延长；周六集中复习本周学过的题（按下面的遗忘曲线表），周日补漏 + 完整模块，或加刷 2-3 道新题。",
  tasks: [
    { id: "words", label: "背 40 个六级单词" },
    { id: "bbc", label: "听 BBC 六分钟英语" },
    { id: "ts", label: "写 TS（主线，学 + 写）" },
    { id: "ds", label: "数据结构手写 + C++ 刷当前节 2-3 题" },
    { id: "py", label: "Python 小练习（当天那章）" },
    { id: "review", label: "复盘 + 写笔记" },
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
// 逐日具体计划（2026.9.13 – 9.30）：每天三条线各一件
// ds = 数据结构刷题（C++）｜py = Python 练手（够用即停）｜ts = TS 学+写
// 空字符串表示当天该线已停（Python 9.18 起停，时间给 TS / 刷题）。
// 每周六固定休息（rest），不排学习。
// ============================================================

const DAILY_PLAN = [
  { date: "9.13", week: "日", ds: "二叉树前序遍历 · LC144（C++）", py: "字典：统计一句话每个词出现次数", ts: "装 Node + tsx，跑通第一个 hello.ts" },
  { date: "9.14", week: "一", ds: "二叉树中序遍历 · LC94", py: "字典进阶：写「姓名→分数」查分脚本（增删改查）", ts: "基本类型 + 写一个带类型的小函数" },
  { date: "9.15", week: "二", ds: "二叉树后序遍历 · LC145", py: "字典收尾 + 集合 set：列表去重 / 交集差集", ts: "接口 interface：描述一个「学生 / 商品」对象并打印" },
  { date: "9.16", week: "三", ds: "层序遍历 · LC102（+ 手写三种遍历再一遍）", py: "函数：写判断素数 / 斐波那契", ts: "函数类型 + 可选/默认参数：写个计算器函数" },
  { date: "9.17", week: "四", ds: "前+中序构造二叉树 · LC105", py: "文件读写：读一个 txt 统计词频 top5", ts: "类 class：写一个类并实例化" },
  { date: "9.18", week: "五", ds: "中+后序构造二叉树 · LC106", py: "文件读写：把数据写进文件再读回来（✅ Python 已够用，停）", ts: "泛型 generics：写 first<T> 和一个泛型函数" },
  { date: "9.19", week: "六", rest: "周六休息：不排学习，出去走走 / 补觉 / 打游戏" },
  { date: "9.20", week: "日", ds: "前+后序构造 · LC889（选做）+ 线索二叉树概念", py: "", ts: "联合类型 + 类型守卫：写类型收窄的例子" },
  { date: "9.21", week: "一", ds: "第10节 哈夫曼树（概念手写，无题）", py: "", ts: "async/await：写一个读文件的小脚本" },
  { date: "9.22", week: "二", ds: "N 叉树层序遍历 · LC429", py: "", ts: "async/await + fetch：调一个公开 JSON 接口打印" },
  { date: "9.23", week: "三", ds: "二叉树层平均值 · LC637", py: "", ts: "综合小工具：命令行待办清单（增删改查，存内存）" },
  { date: "9.24", week: "四", ds: "星型图中心节点 · LC1791", py: "", ts: "待办清单：加文件持久化（读写 JSON）" },
  { date: "9.25", week: "五", ds: "小镇法官 · LC997", py: "", ts: "待办清单：拆模块 + 整理 README" },
  { date: "9.26", week: "六", rest: "周六休息：不排学习" },
  { date: "9.27", week: "日", ds: "岛屿数量 · LC200", py: "", ts: "待办清单：补类型 + 错误处理" },
  { date: "9.28", week: "一", ds: "图像渲染 · LC733", py: "", ts: "fetch 实战：写一个查天气 / 查 IP 的小工具" },
  { date: "9.29", week: "二", ds: "省份数量 · LC547", py: "", ts: "整理 9 月 TS 产出，写一份「我会什么」清单" },
  { date: "9.30", week: "三", ds: "月底复盘：手写一个完整结构（反转链表 + 二叉树遍历）", py: "", ts: "月底复盘：跑通一个完整小工具，准备进 10 月 TS 进阶" },
];
