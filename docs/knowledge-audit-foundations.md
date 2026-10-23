# 基础课程知识审校记录

审校日期：2026-10-23。范围为算法、计算机网络、操作系统、生成式软件工程、嵌入式五个方向；本轮重新读取 31 份非 `_archive` Markdown 原稿，形成 5 门课程、24 章。原稿原位保留，`learning/项目学习/` 不在本审校的编辑范围。

## 整理原则与覆盖

章节按概念而非聊天批次组织：相同算法重复出现时合并，保留关键反例、边界和个人调试经验；总览合并为课程顺序和复习入口。所有当前实际源路径均在 manifest fragment 中经过存在性校验，不将原稿文字中提到、但本轮目录中不存在的历史路径伪造成独立源文件。

课程记录位于 `learning/courses/` 对应五个目录；合并接口为 `.local-review/foundation-courses.json`，包含 courses 和 sources，sources 每份原稿均列出 chapterIds、disposition、reason。页面仅应展示规范课程，不再把这些原稿重复当成第二套课程。

## 主要修订

| 原表述或实现 | 修订与可核查依据 |
|---|---|
| 二阶差分遇单点仅写 +s/-s，随后两次前缀和 | 会产生向后持续的阶跃；统一四点公式令 step=0，重合后为 +s/-2s/+s。正文给出可执行反例与随机差分验证。 |
| 二阶差分两次前缀和注释反置 | 第一次由二阶还原一阶，第二次由一阶还原原值。 |
| 路径前缀计数频次减零后保留键、defaultdict 查询仍声称 O(h) | 使用 get 免插入未出现键，计数归零删除键；实测结束频次表恢复 {0:1}，峰值键数不超过高度加一。 |
| 基数排序一定从低到高、输入一定倒序处理 | 限定 LSD；MSD 也是合法方案。累计桶终点配倒序，桶起点配正序，核心为当前轮稳定。参考算法作者 LSD 实现。 |
| 所有 merge 必须用完整辅助数组 | 限定普通数组教学实现；链表与复杂原地归并有其他存储取舍。 |
| 堆排 O(1) 辅助空间但展示递归下沉 | 区分迭代下沉与递归栈；升序弹出与原地排序使用相反的堆方向。 |
| 并查集路径压缩即可笼统套用近常数界 | 示例明确路径压缩/折半与按大小合并组合，描述均摊 α(n)，不保证每次严格 O(1)。 |
| Trie 的 ab/ac 图未共享 a 前缀 | 重新解释共享路径；分开 pass 和 end，并说明原 3000005×65 int 表约 780 MB 边存储成本。 |
| 所有相等元素左右严格更小位置相同 | 仅对当前栈中同组候选成立；用 [2,1,2] 反驳全数组相等值均相同的说法。 |
| Kruskal 不足 n−1 条是出现环 | 改为原图不连通；环边由并查集跳过。补充孤立点与离散 ID 登记。 |
| Prim 的 key 当累计最短路 | 明确为连接当前树的最低边权，区别于 Dijkstra，补充具体三角图推演。 |
| Kahn 未输出节点都是环节点 | 可能是环后继而被阻塞；未输出完整证明有环，但不定位全部环节点。 |
| 计数 DP 缺失题面模数，示例固定 MOD | 接口显式传入 mod，保留原题信息不完整的边界，不猜测原题值。 |
| 大整数闭式 O(1) 等于绝对固定运行时间 | 限定为固定次数算术操作，位复杂度仍依赖整数规模。 |
| 网状拓扑一定最可靠；联网自然得到可靠性 | 冗余只是提供机会，可靠性还依赖故障相关性、设备与配置。 |
| IPv4 任意前缀主机数都减二 | 限定传统广播子网；RFC 3021 的 /31 点到点和 /32 等有例外，IPv6 不能照搬。 |
| ping 或 TCP 443 通即可证明业务正常 | 区分 DNS、ICMP、TCP、TLS、HTTP 和业务层，HEAD 也未必等价于 GET。 |
| HTTPS 加密等于代理永远无法读取 | 明确 TLS 终点和受信任拦截 CA 条件；CONNECT 普通转发不自动解密。 |
| TLS 1.3 总能保护任意历史会话 | 描述常见临时密钥交换前向保密，明确 PSK 模式和终端密钥泄露等前提。 |
| 全局代理/TUN/VPN 等同全部流量加密 | 分开路由、应用代理、虚拟接口和隧道方案；覆盖取决于 DNS/IPv6/规则/实现。 |
| 网络 jitter 只是 ping RTT 波动 | 指出时延变化与 RTP jitter 各有指标定义，不能用一个粗略差值代替。 |
| DataChannel 收到即可记录续传完成 | 区分排队、网络交付和应用持久化确认；背压不是完整性或磁盘落盘证明。 |
| 用户进入内核唯一途径为系统调用 | 异常、中断也可进入内核；清普通内存不是普遍特权指令。 |
| 共享内存总最快；消息传递天然完成业务同步 | 比较具体复制、缓存和同步成本；消息接口不保证业务临界区互斥。 |
| MLFQ 反复用不完时间片则降级 | 更正为消耗完配额且继续需要执行时可能降级，具体实现另有规则。 |
| 所有现代 OS 都用某一教材调度 | 区分教学模型与 Linux CFS/EEVDF、deadline 的实际文档及版本条件。 |
| printf 实现一定被链接复制到程序 | 区分静态提取与动态库引用、运行时装载；GCC 驱动也不一定落盘四个中间文件。 |
| 死锁至少两方；发现环总死锁 | 补充非重入锁自锁，以及单实例/多实例资源模型差别。 |
| 只能强抢锁解决优先级倒置 | 明确优先级继承临时提升持锁者，不强取锁，不解决循环死锁，需支持该协议。 |
| GPT5 后某种注意力收敛机制已完善 | 无可核验技术依据，不作为课程事实；原始 Transformer 论文不披露后续商业模型架构。 |
| 逻辑内容必然污染注意力，强化学习必然导致所有迎合 | 改为待测试经验/过度因果解释；分别说明位置效应和迎合研究的特定任务范围。 |
| 先前后端分离适用于所有项目 | 保留为架构偏好，按静态站、独立客户端、部署和维护约束评估。 |
| 模型评审即独立验证，形式验证证明全部正确 | 明确共同偏差、规范和模型前提；测试只覆盖其实际检查范围。 |
| STM32 等于所有 Cortex-M，M4 都带 FPU，L0 是 M0 | 聚焦 STM32F103/Cortex-M3 示例；系列和确切料号单独查，M4 的 FPU 可选，L0 常用 M0+。 |
| 外设寄存器就是 CPU 临时数据寄存器 | 分开核心寄存器与内存映射外设接口；补充副作用、volatile 非原子/屏障、BSRR 与 HAL 状态边界。 |

## 资料核查方式与保留的不确定性

- 网络以 IETF RFC 1034、1918、3021、9293、9110、8446、1928、8445、3393 和 W3C WebRTC/Stats 为主要依据；正文逐章链接对应规范。
- OS 以 GCC、GNU ld、Linux man-pages、Linux scheduler/locking 文档及数据库官方死锁文档为依据；教材术语和具体实现保持区分。
- 算法核对 Princeton 算法作者公开实现、Python/Java 官方库语义；Princeton 教材网页访问返回 403 时使用其作者 GitHub 源码作为可访问一级资料。
- 生成式工程直接核对 Transformer、Lost in the Middle、sycophancy 和 verifier 论文，保留研究年份与任务局限，不引用未披露的模型机制。
- 嵌入式核对 Arm CMSIS 与 ST 官方 STM32F1 HAL GPIO 源码/头文件。大型 ST 参考手册 PDF 无法经浏览工具完整载入，未声称逐页核对整个手册；示例不提供未经核实的硬编码地址与任意芯片通用保证。
- 原稿缺上下文的“本质基于概率”“优化性能、避免”不补成确定结论；具体 2026 CVE 编号、影响版本未给出且未完成官方事件核验，不作为安全公告事实。
- Java/C/JavaScript 片段是注明前提的教学示例，本次未构造完整 JVM/固件/WebRTC 运行环境，不声称编译或硬件联调通过。

## 实际执行的验证

执行 `python .local-review/foundations-check.py`，直接提取课程 Markdown 的 Python 围栏代码执行，不另抄一份算法冒充正文验证。随机种子 20261023；结果如下：

| 检查 | 实际数量 | 结果 |
|---|---:|---|
| 24 章唯一 ID、源路径存在、末节纯编号问题、Python 语法 | 24 章 | 通过 |
| 二阶差分对逐点暴力：单点、负数、重叠、完整/随机区间 | 6001 组 | 通过 |
| 树前缀计数对逐起点枚举：恢复 {0:1}、峰值键数≤高度+1 | 1200 棵树 | 通过 |
| 归并与 lower_bound 对标准排序/bisect | 1000 组 | 通过 |
| 多路归并、单调栈、滑窗最值对暴力/排序 | 1000 组 | 通过 |
| 二进制串计数：N=0..10 全枚举，三种模数 | 759 个阈值/模数组合 | 通过 |
| 平方和计数闭式对 A/B=0..40 穷举 | 1681 组 | 通过 |
| 并查集合并结果对独立图可达性 | 10000 次操作 | 通过 |

合计 21665 个检查单位。此数量按上表定义计数，不代表覆盖全部可能输入；Java、C、实时网络和前端布局另由主集成验收。

## 原稿覆盖清单

| 原稿（相对项目根） | 规范章节 ID | 处理 |
|---|---|---|
| `learning/os/00-总览与速记.md` | `os-processes-scheduling`, `os-compile-link`, `os-deadlocks` | 合并重写，原位保留 |
| `learning/os/01-操作系统基础概念.md` | `os-processes-scheduling` | 合并重写，原位保留 |
| `learning/os/02-从源码到可执行文件.md` | `os-compile-link` | 合并重写，原位保留 |
| `learning/os/03-线程与处理机调度.md` | `os-processes-scheduling`, `os-deadlocks` | 合并重写，原位保留 |
| `learning/os/04-死锁.md` | `os-deadlocks` | 合并重写，原位保留 |
| `learning/嵌入式学习/01-嵌入式与STM32基础.md` | `embedded-stm32-registers` | 合并重写，原位保留 |
| `learning/生成式软件工程笔记/jyy/提示词工程.md` | `generative-engineering-context-evidence`, `generative-engineering-verifiable-workflow` | 合并重写，原位保留 |
| `learning/生成式软件工程笔记/MattNote.md` | `generative-engineering-verifiable-workflow` | 合并重写，原位保留 |
| `learning/算法/00-总览与速记.md` | `algo-invariants-search`, `algo-merge-radix`, `algo-disjoint-sets`, `algo-trie-prefixes`, `algo-graphs-dependencies-mst`, `algo-monotone-structures`, `algo-prefix-differences` | 合并重写，原位保留 |
| `learning/算法/01-归并排序.md` | `algo-merge-radix` | 合并重写，原位保留 |
| `learning/算法/02-堆与堆排序.md` | `algo-heap-streams` | 合并重写，原位保留 |
| `learning/算法/03-基数排序.md` | `algo-merge-radix` | 合并重写，原位保留 |
| `learning/算法/04-并查集.md` | `algo-disjoint-sets` | 合并重写，原位保留 |
| `learning/算法/05-前缀树Trie.md` | `algo-trie-prefixes` | 合并重写，原位保留 |
| `learning/算法/06-拓扑排序.md` | `algo-graphs-dependencies-mst` | 合并重写，原位保留 |
| `learning/算法/07-最小生成树.md` | `algo-graphs-dependencies-mst` | 合并重写，原位保留 |
| `learning/算法/08-单调栈与单调队列.md` | `algo-monotone-structures` | 合并重写，原位保留 |
| `learning/算法/09-差分.md` | `algo-prefix-differences` | 合并重写，原位保留 |
| `learning/算法/回文链表_O1空间_算法学习笔记.md` | `algo-linked-list-lru` | 合并重写，原位保留 |
| `learning/算法/算法刷题知识总结.md` | `algo-invariants-search`, `algo-heap-streams`, `algo-linked-list-lru`, `algo-tree-contracts`, `algo-monotone-structures`, `algo-counting-python` | 合并重写，原位保留 |
| `learning/算法/算法学习笔记_思想与模板.md` | `algo-invariants-search`, `algo-heap-streams`, `algo-linked-list-lru`, `algo-dp-backtracking` | 合并重写，原位保留 |
| `learning/算法/算法思想与技巧复盘.md` | `algo-invariants-search`, `algo-tree-contracts`, `algo-bfs-grid`, `algo-disjoint-sets`, `algo-counting-python` | 合并重写，原位保留 |
| `learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md` | `algo-tree-contracts`, `algo-bfs-grid`, `algo-prefix-differences`, `algo-dp-backtracking`, `algo-counting-python` | 合并重写，原位保留 |
| `learning/算法/链表算法学习笔记_重思想轻代码.md` | `algo-linked-list-lru` | 合并重写，原位保留 |
| `learning/计算机网络/00-总览与速记.md` | `net-layers-addresses`, `net-dns-request-diagnosis`, `net-performance`, `net-p2p-transfer` | 合并重写，原位保留 |
| `learning/计算机网络/01-网络概述与体系结构.md` | `net-layers-addresses` | 合并重写，原位保留 |
| `learning/计算机网络/02-网络体系与地址.md` | `net-layers-addresses` | 合并重写，原位保留 |
| `learning/计算机网络/03-应用层服务与排障.md` | `net-dns-request-diagnosis`, `net-tls-proxy-boundaries` | 合并重写，原位保留 |
| `learning/计算机网络/04-网络性能指标.md` | `net-performance` | 合并重写，原位保留 |
| `learning/计算机网络/05-传输技术与P2P.md` | `net-p2p-transfer` | 合并重写，原位保留 |
| `learning/计算机网络/互联网网络安全与代理原理学习笔记.md` | `net-layers-addresses`, `net-dns-request-diagnosis`, `net-tls-proxy-boundaries` | 合并重写，原位保留 |

归档目录 `_archive` 中的旧代码/碎片未再独立展示，现有活跃 Markdown 对它们的有效总结已经随对应章节覆盖；未复原用户删除的历史文件。
