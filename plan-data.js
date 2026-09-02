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
// LeetCode 每日题目清单（数据结构主线：9 月栈/队列/递归 + 10 月树/哈希/图/排序/查找）
// 每个月份 key 对应一组 day 块；每个 problem 是具体到「每天该刷哪道题」。
// problem：{ id, name, slug, diff }，slug 用于生成力扣链接。
// ============================================================

const LEETCODE_PLAN = {
  "2026-09": {
    summary: "数据结构收尾 · 共 15 题。栈 / 队列 / 递归，配合 Python 重写，约每 2 天 1 题，剩下时间留给语法与项目。",
    days: [
      {
        topic: "栈 Stack", day: "9.1 – 9.6",
        problems: [
          { id: 20, name: "有效的括号", slug: "valid-parentheses", diff: "简单" },
          { id: 155, name: "最小栈", slug: "min-stack", diff: "简单" },
          { id: 232, name: "用栈实现队列", slug: "implement-queue-using-stacks", diff: "简单" },
          { id: 225, name: "用队列实现栈", slug: "implement-stack-using-queues", diff: "简单" },
          { id: 150, name: "逆波兰表达式求值", slug: "evaluate-reverse-polish-notation", diff: "中等" },
          { id: 394, name: "字符串解码", slug: "decode-string", diff: "中等" },
        ],
      },
      {
        topic: "队列 Queue", day: "9.7 – 9.12",
        problems: [
          { id: 933, name: "最近的请求次数", slug: "number-of-recent-calls", diff: "简单" },
          { id: 622, name: "设计循环队列", slug: "design-circular-queue", diff: "中等" },
        ],
      },
      {
        topic: "递归 Recursion", day: "9.13 – 9.30",
        problems: [
          { id: 509, name: "斐波那契数", slug: "fibonacci-number", diff: "简单" },
          { id: 344, name: "反转字符串", slug: "reverse-string", diff: "简单" },
          { id: 206, name: "反转链表", slug: "reverse-linked-list", diff: "简单" },
          { id: 21, name: "合并两个有序链表", slug: "merge-two-sorted-lists", diff: "简单" },
          { id: 24, name: "两两交换链表中的节点", slug: "swap-nodes-in-pairs", diff: "中等" },
          { id: 70, name: "爬楼梯", slug: "climbing-stairs", diff: "简单" },
          { id: 104, name: "二叉树的最大深度", slug: "maximum-depth-of-binary-tree", diff: "简单" },
        ],
      },
    ],
  },
  "2026-10": {
    summary: "数据结构 + 算法 · 共 25 题。树 → 哈希/图 → 排序/查找 → 算法起步，按模块逐块刷透。",
    days: [
      {
        topic: "树 Tree", day: "10.1 – 10.10",
        problems: [
          { id: 144, name: "二叉树的前序遍历", slug: "binary-tree-preorder-traversal", diff: "简单" },
          { id: 94, name: "二叉树的中序遍历", slug: "binary-tree-inorder-traversal", diff: "简单" },
          { id: 145, name: "二叉树的后序遍历", slug: "binary-tree-postorder-traversal", diff: "简单" },
          { id: 102, name: "二叉树的层序遍历", slug: "binary-tree-level-order-traversal", diff: "中等" },
          { id: 104, name: "二叉树的最大深度", slug: "maximum-depth-of-binary-tree", diff: "简单" },
          { id: 101, name: "对称二叉树", slug: "symmetric-tree", diff: "简单" },
          { id: 226, name: "翻转二叉树", slug: "invert-binary-tree", diff: "简单" },
          { id: 98, name: "验证二叉搜索树", slug: "validate-binary-search-tree", diff: "中等" },
          { id: 230, name: "二叉搜索树中第K小的元素", slug: "kth-smallest-element-in-a-bst", diff: "中等" },
        ],
      },
      {
        topic: "哈希与图 Hash / Graph", day: "10.11 – 10.18",
        problems: [
          { id: 1, name: "两数之和", slug: "two-sum", diff: "简单" },
          { id: 217, name: "存在重复元素", slug: "contains-duplicate", diff: "简单" },
          { id: 242, name: "有效的字母异位词", slug: "valid-anagram", diff: "简单" },
          { id: 49, name: "字母异位词分组", slug: "group-anagrams", diff: "中等" },
          { id: 128, name: "最长连续序列", slug: "longest-consecutive-sequence", diff: "中等" },
          { id: 200, name: "岛屿数量", slug: "number-of-islands", diff: "中等" },
          { id: 733, name: "图像渲染", slug: "flood-fill", diff: "简单" },
        ],
      },
      {
        topic: "排序与查找 Sort / Binary Search", day: "10.19 – 10.26",
        problems: [
          { id: 912, name: "排序数组", slug: "sort-an-array", diff: "中等" },
          { id: 704, name: "二分查找", slug: "binary-search", diff: "简单" },
          { id: 35, name: "搜索插入位置", slug: "search-insert-position", diff: "简单" },
          { id: 34, name: "在排序数组中查找元素的第一个和最后一个位置", slug: "find-first-and-last-position-of-element-in-sorted-array", diff: "中等" },
          { id: 33, name: "搜索旋转排序数组", slug: "search-in-rotated-sorted-array", diff: "中等" },
        ],
      },
      {
        topic: "算法起步 双指针 / 回溯", day: "10.27 – 10.31",
        problems: [
          { id: 283, name: "移动零", slug: "move-zeroes", diff: "简单" },
          { id: 3, name: "无重复字符的最长子串", slug: "longest-substring-without-repeating-characters", diff: "中等" },
          { id: 11, name: "盛最多水的容器", slug: "container-with-most-water", diff: "中等" },
          { id: 46, name: "全排列", slug: "permutations", diff: "中等" },
        ],
      },
    ],
  },
};

// ============================================================
// 数据结构学习地图（25 节 · 按真实课程顺序）
// 每个 section：no / part(1|2) / title / points[] / problems[]
// problems 为空表示本节以概念理解与手写为主，暂无直接对应题。
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
