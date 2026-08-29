// ============================================================
// 全年学习计划数据（2026.9 – 2027.8）—— AI 应用方向
// 每个 month：key / year / month(0-11) / label / title / theme
//            / core / aux / project / leetcodeGoal / modules[]
// 每个 module：name / range / goal / items[]
// 说明：已学过 高数/线代/离散，概率论与复变由学校课程覆盖，不再单排数学。
// 主线：Python → 数据结构算法 → 后端基础 → 机器学习 → 深度学习 → 大模型应用(RAG/Agent)
// ============================================================

const YEAR_MONTHS = [
  {
    key: "2026-09", year: 2026, month: 8, label: "2026.9",
    title: "Python 基础 + 数据结构收尾",
    theme: "有 C/C++ 底子，Python 语法快速过；数据结构用 Python 重写收尾。",
    core: "Python 基础", aux: "数据结构 / git", project: "LeetCode 15 题",
    leetcodeGoal: 15,
    modules: [
      {
        name: "Python 基础", range: "9.1 – 9.12", goal: "快速过（对比 C/C++）",
        items: [
          "环境搭建：Python + PyCharm / VS Code",
          "基础语法（对比 C/C++ 快速过）",
          "列表 / 元组 / 字典 / 集合",
          "函数与作用域",
          "面向对象",
        ],
      },
      {
        name: "Python 常用", range: "9.13 – 9.20", goal: "进阶技巧",
        items: [
          "列表推导式 / 生成器",
          "常用内置模块（os / sys / collections）",
          "文件读写",
          "异常处理",
        ],
      },
      {
        name: "数据结构收尾", range: "9.1 – 9.30", goal: "用 Python 重写",
        items: [
          "栈（Python 重写）",
          "队列（Python 重写）",
          "递归（Python 重写）",
        ],
      },
      {
        name: "git 基础", range: "全月", goal: "版本控制",
        items: [
          "git 常用命令",
          "分支 / 合并",
          "远程仓库与推送",
        ],
      },
    ],
  },
  {
    key: "2026-10", year: 2026, month: 9, label: "2026.10",
    title: "数据结构 + 算法",
    theme: "用 Python 把树、堆、哈希、图、排序全部过一遍，配合刷题。",
    core: "数据结构 / 算法", aux: "刷题", project: "LeetCode 25 题",
    leetcodeGoal: 25,
    modules: [
      {
        name: "树", range: "10.1 – 10.10", goal: "遍历 + BST + 堆",
        items: [
          "二叉树定义与遍历（前 / 中 / 后 / 层）",
          "二叉搜索树 BST",
          "堆与堆排序",
        ],
      },
      {
        name: "哈希与图", range: "10.11 – 10.18", goal: "哈希 + DFS/BFS",
        items: [
          "哈希表（dict / set）",
          "图与遍历（DFS / BFS）",
        ],
      },
      {
        name: "排序与查找", range: "10.19 – 10.26", goal: "快排 / 归并 / 二分",
        items: [
          "快排 / 归并 / 堆排",
          "二分查找",
        ],
      },
      {
        name: "算法起步", range: "10.27 – 10.31", goal: "双指针 / 回溯",
        items: [
          "双指针 / 滑动窗口",
          "贪心 / 回溯入门",
        ],
      },
    ],
  },
  {
    key: "2026-11", year: 2026, month: 10, label: "2026.11",
    title: "Python 进阶 + MySQL",
    theme: "Python 进阶补全；MySQL 是取数和面试的通用基础。",
    core: "Python 进阶 / MySQL", aux: "刷题", project: "LeetCode 25 题",
    leetcodeGoal: 25,
    modules: [
      {
        name: "Python 进阶", range: "11.1 – 11.12", goal: "底层机制",
        items: [
          "装饰器 / 闭包",
          "生成器 / 迭代器",
          "模块与包 / 虚拟环境",
          "面向对象进阶（魔法方法 / 继承）",
        ],
      },
      {
        name: "SQL / MySQL", range: "11.13 – 11.30", goal: "会写会优化",
        items: [
          "SQL 增删改查",
          "多表查询 / 连接",
          "索引与事务",
          "Python 操作 MySQL（pymysql / SQLAlchemy）",
        ],
      },
    ],
  },
  {
    key: "2026-12", year: 2026, month: 11, label: "2026.12",
    title: "计算机网络 + 数据分析",
    theme: "计网是八股核心；NumPy/Pandas 是 AI 数据处理的必备。",
    core: "计网 / 数据分析", aux: "八股", project: "数据分析小项目 + LeetCode 20 题",
    leetcodeGoal: 20,
    modules: [
      {
        name: "计算机网络", range: "12.1 – 12.15", goal: "八股核心",
        items: [
          "OSI / TCP-IP 分层",
          "TCP 三次握手 / 四次挥手",
          "HTTP / HTTPS",
          "DNS",
        ],
      },
      {
        name: "NumPy", range: "12.16 – 12.20", goal: "数组运算",
        items: [
          "数组创建 / 索引 / 广播",
          "矩阵运算",
        ],
      },
      {
        name: "Pandas + 可视化", range: "12.21 – 12.27", goal: "数据处理",
        items: [
          "DataFrame / 数据清洗",
          "分组聚合",
          "Matplotlib 绘图",
        ],
      },
      {
        name: "数据分析小项目", range: "12.28 – 12.31", goal: "练手",
        items: [
          "Titanic 分析",
          "整理成项目笔记",
        ],
      },
    ],
  },
  {
    key: "2027-01", year: 2027, month: 0, label: "2027.1",
    title: "机器学习入门",
    theme: "配合学校概率论，用 sklearn 把经典算法过一遍，参加 Kaggle 入门赛。",
    core: "机器学习 / sklearn", aux: "概率论（学校）", project: "Kaggle 入门赛① + LeetCode 20 题",
    leetcodeGoal: 20,
    modules: [
      {
        name: "机器学习基础", range: "1.1 – 1.10", goal: "监督 / 无监督",
        items: [
          "监督 / 无监督概念",
          "线性回归 / 逻辑回归",
          "模型评估（准确率 / 召回 / F1）",
        ],
      },
      {
        name: "经典算法", range: "1.11 – 1.20", goal: "sklearn",
        items: [
          "决策树 / 随机森林",
          "SVM",
          "K-means",
          "交叉验证 / 网格搜索",
        ],
      },
      {
        name: "Kaggle 入门赛①", range: "1.21 – 1.31", goal: "实战",
        items: [
          "Titanic 比赛",
          "房价预测",
          "提交并复盘",
        ],
      },
    ],
  },
  {
    key: "2027-02", year: 2027, month: 1, label: "2027.2",
    title: "深度学习 PyTorch",
    theme: "从张量到全连接网络到 CNN，做出第一个图像分类项目。",
    core: "PyTorch / CNN", aux: "刷题", project: "图像分类项目② + LeetCode 15 题",
    leetcodeGoal: 15,
    modules: [
      {
        name: "PyTorch 基础", range: "2.1 – 2.8", goal: "张量",
        items: [
          "张量 / 自动求导",
          "数据集与 DataLoader",
        ],
      },
      {
        name: "全连接网络", range: "2.9 – 2.14", goal: "训练循环",
        items: [
          "nn.Module / Linear",
          "损失函数 / 优化器 / 训练循环",
        ],
      },
      {
        name: "CNN", range: "2.15 – 2.22", goal: "卷积",
        items: [
          "卷积 / 池化",
          "搭建 CNN",
        ],
      },
      {
        name: "图像分类项目②", range: "2.23 – 2.28", goal: "项目",
        items: [
          "训练并评估",
          "整理进简历",
        ],
      },
    ],
  },
  {
    key: "2027-03", year: 2027, month: 2, label: "2027.3",
    title: "大模型 / LLM 基础",
    theme: "理解 Transformer，学会调大模型 API，做第一个 LLM 应用。",
    core: "Transformer / LLM API / Prompt", aux: "刷题", project: "LLM 应用项目③ + LeetCode 15 题",
    leetcodeGoal: 15,
    modules: [
      {
        name: "Transformer 基础", range: "3.1 – 3.10", goal: "理解",
        items: [
          "Attention 机制",
          "Transformer 结构",
          "大模型发展脉络",
        ],
      },
      {
        name: "LLM API 与 Prompt", range: "3.11 – 3.20", goal: "会调用",
        items: [
          "调 OpenAI / 国产大模型 API",
          "Prompt Engineering",
          "结构化输出",
        ],
      },
      {
        name: "LLM 应用项目③", range: "3.21 – 3.31", goal: "项目",
        items: [
          "做一个 AI 学习助手 / 问答应用",
          "整理进简历",
        ],
      },
    ],
  },
  {
    key: "2027-04", year: 2027, month: 3, label: "2027.4",
    title: "RAG + Agent 开发",
    theme: "当前最缺的大模型应用技能：检索增强 + 智能体。",
    core: "RAG / Agent / 向量数据库", aux: "刷题", project: "知识库问答项目④ + LeetCode 15 题",
    leetcodeGoal: 15,
    modules: [
      {
        name: "向量数据库", range: "4.1 – 4.7", goal: "检索",
        items: [
          "Embedding",
          "向量检索（FAISS / Chroma）",
        ],
      },
      {
        name: "RAG", range: "4.8 – 4.18", goal: "检索增强",
        items: [
          "RAG 原理与流程",
          "文档切分 / 检索 / 生成",
          "优化（重排 / 引用）",
        ],
      },
      {
        name: "Agent", range: "4.19 – 4.26", goal: "智能体",
        items: [
          "Function Calling",
          "多步推理 / 工具调用",
        ],
      },
      {
        name: "知识库问答项目④", range: "4.27 – 4.30", goal: "项目",
        items: [
          "做一个私有知识库问答系统",
          "整理进简历",
        ],
      },
    ],
  },
  {
    key: "2027-05", year: 2027, month: 4, label: "2027.5",
    title: "操作系统 + 后端基础",
    theme: "OS 八股 + 后端必备缓存基础，补上 AI 工程需要的系统能力。",
    core: "操作系统 / Redis", aux: "八股", project: "LeetCode 15 题",
    leetcodeGoal: 15,
    modules: [
      {
        name: "操作系统", range: "5.1 – 5.16", goal: "八股",
        items: [
          "进程 / 线程",
          "内存管理 / 虚拟内存",
          "死锁 / 进程间通信",
          "整理 OS 八股",
        ],
      },
      {
        name: "后端基础：Redis / 缓存", range: "5.17 – 5.31", goal: "缓存",
        items: [
          "缓存概念",
          "Redis 数据类型",
          "缓存穿透 / 击穿 / 雪崩",
        ],
      },
    ],
  },
  {
    key: "2027-06", year: 2027, month: 5, label: "2027.6",
    title: "算法冲刺 + 八股",
    theme: "面试硬门槛集中冲刺，剑指 Offer 和热题过一遍。",
    core: "算法 / 数据结构", aux: "LeetCode 冲刺", project: "LeetCode 40 题",
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
          "双指针 / 滑动窗口",
          "二分",
          "DFS / BFS / 回溯",
          "动态规划",
        ],
      },
      {
        name: "高频题", range: "6.21 – 6.30", goal: "刷透",
        items: [
          "剑指 Offer",
          "热题 100",
        ],
      },
    ],
  },
  {
    key: "2027-07", year: 2027, month: 6, label: "2027.7",
    title: "AI 项目深入 + 微调 + 部署",
    theme: "把项目做深做精，学会微调(LoRA)和简单部署，简历成型。",
    core: "模型微调 / 部署", aux: "简历 / GitHub", project: "简历 + GitHub",
    leetcodeGoal: 20,
    modules: [
      {
        name: "模型微调", range: "7.1 – 7.12", goal: "LoRA",
        items: [
          "LoRA 微调",
          "微调一个领域模型",
        ],
      },
      {
        name: "部署与工程化", range: "7.13 – 7.20", goal: "上线",
        items: [
          "vLLM / 简单推理部署",
          "接口封装（FastAPI）",
        ],
      },
      {
        name: "项目深挖 + 简历", range: "7.21 – 7.31", goal: "简历",
        items: [
          "完善 2–3 个 AI 项目进简历",
          "GitHub 整理（README / 项目）",
        ],
      },
    ],
  },
  {
    key: "2027-08", year: 2027, month: 7, label: "2027.8",
    title: "面试冲刺 + 投递",
    theme: "八股全面过一遍，模拟面试，开始投递暑期实习。",
    core: "八股 / 模拟面试", aux: "投递", project: "投递暑期实习",
    leetcodeGoal: 20,
    modules: [
      {
        name: "八股全面整理", range: "8.1 – 8.15", goal: "系统化",
        items: [
          "Python / ML 八股",
          "计网 / OS / 数据库八股",
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
    { time: "07:30 – 08:00", title: "背 40 个六级单词", note: "晨起记忆最佳，用「不背单词 / 墨墨」" },
    { time: "12:30 – 13:00", title: "午间复习", note: "回顾早上单词 + 扫一眼今日主线笔记" },
    { time: "21:00 – 22:00", title: "主线学习", note: "当月模块（Python / ML / 大模型 / 刷题）" },
    { time: "22:00 – 22:30", title: "BBC 六分钟英语", note: "先盲听 1 遍 → 看字幕 → 跟读" },
    { time: "22:30 – 23:00", title: "复盘 + 打卡", note: "写笔记、勾每日任务、日历打卡" },
  ],
  weekend: "周末：把「主线学习」延长到 2–3 小时，补一个完整项目模块 / 多刷 2–3 道 LeetCode。",
  tasks: [
    { id: "words", label: "背 40 个六级单词" },
    { id: "bbc", label: "听 BBC 六分钟英语" },
    { id: "leetcode", label: "刷 1 道 LeetCode" },
    { id: "main", label: "完成今日主线学习（当月模块）" },
    { id: "review", label: "复盘 + 写笔记" },
  ],
};
