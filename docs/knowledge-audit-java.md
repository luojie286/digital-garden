# Java 课程知识校订与来源审计

整理日期：2026-10-23。范围：learning/java 直属 45 份 Markdown，不改原稿及其 _archive，不涉及项目学习。输出为 5 门课程、32 章，Java 17＋／Boot 3.x／Spring 6.x 作为教学基线。原稿中的后续主版本、历史工程与使用建议按版本或经验判断处理，不当成永久事实。

## 整理结果与取舍

课程顺序为 Java 基础与进阶 → 并发与 JVM / Spring Web → 持久层 → 安全与工程。正文按概念、原理、实际场景、误区和适度延伸组织。使用订单查询、库存扣减、注册登录、分页筛选与任务聚合，不虚构项目已具备某项能力。

45 份原稿全部映射到新章节；重复聊天按主题合并，目录与学习方法重组成课程图及工程实践。原稿中的重复答案、口诀、工具快捷键、过期固定课时、历史赛程与个人对话背景不作为新课程知识正文。原稿原位保留，可从映射回查，并非宣称逐字复刻所有问答。

每章末尾精确使用二级标题“模拟面试问题”，仅保留编号问题，共 157 题，带基础／应用／深入标记，不提供答案。正文仍正常解释知识，不把解释错误删成只有问题的提纲。

## 关键纠错记录

| 原稿或重复聊天中的问题 | 本次处理 | 对应章节 |
|---|---|---|
| int 范围写成 ±2¹⁵ | 修正为 −2³¹ 至 2³¹−1，区分位数与近似十进制范围 | java-types |
| 跨平台只描述解释执行 | 补充 JIT、class 版本与本机依赖限制 | java-types |
| 包就是目录，字段构造方法顺序固定 | 区分命名空间与工具约定，删除不存在的成员排列语法要求 | java-packages |
| private 改 public 作为重写权限扩大例子 | private 不被继承重写，重写规则另述 | java-objects |
| final 保证非空／对象不可变 | 明确只限制相应变量重赋值，展示 requireNonNull | java-types / java-ioc |
| 所有局部／匿名类必持有外部实例 | 按声明是否有外部实例限定，区分静态上下文 | java-lambda |
| Lambda 就是匿名类另一写法且一定更轻 | 说明目标类型、this、捕获与实现细节边界 | java-lambda |
| Runtime 包装后仍捕获原受检异常的无效示例 | 删除不成立 catch 路径，使用明确 Charset | java-exceptions |
| finally 唯一例外只有 System.exit | 说明进程终止、崩溃和无法离开执行路径等边界 | java-exceptions |
| UnsupportedCharsetException 放入 IOException 家族 | 不保留错误层级图；按实际受检/非受检规则讲解 | java-exceptions |
| 集合底层只有三种结构，Queue 全是 FIFO | 增补哈希、堆等，解释 PriorityQueue 契约 | java-collections |
| 遍历删除只能用 Iterator | 补充 removeIf 与正确下标遍历，fail-fast 不作同步保证 | java-collections |
| 泛型擦除意味着运行时没有任何泛型元数据 | 区分擦除与声明的 Signature / ParameterizedType | java-generics |
| Stream.toList 默认可修改 | 标注 Java16＋与不可修改，区别 Collectors 契约 | java-streams |
| Comparator 用 a-b | 改为 compare 或专用 Comparator，避免溢出 | java-lambda / java-collections |
| 反射固定慢 10—100 倍且能任意绕过 private | 删除无实验倍数断言，加入模块强封装和 trySetAccessible | java-reflection |
| NoClassDefFoundError 只等于初始化失败 | 补充依赖缺失与此前初始化失败两类可能 | java-reflection |
| String.length 等于字符数 | 区分 UTF16代码单元、码点、感知字符和 UTF8字节 | java-strings |
| UUID.randomUUID 不具安全随机来源 | 明确 JDK 强伪随机来源，并区分 ID 与凭据生命周期 | java-time |
| volatile 直接读 RAM，且只能一写多读 | 用 happens-before 推导，说明多写取决于业务不变量 | java-jmm |
| 局部引用在线程栈所以对象不共享 | 明确引用线程私有不代表其目标对象不共享 | java-jvm |
| 原子类若干调用组合必然原子 | 增补 CAS 限流例子、ConcurrentMap compute 与业务边界 | java-juc |
| offer/poll 不适合生产消费 | 说明立即拒绝、超时与背压是合理设计 | java-juc |
| 核心线程构造时全部创建，提交总立即返回 | 改为按需创建，补充 CallerRuns 和关闭等边界 | java-executors |
| CompletableFuture 超时等于底层 IO 取消 | 明确超时完成与底层取消分离，配置下游预算 | java-executors |
| 所有类加载阶段都是固定时间线 | 说明延迟解析、常量内联、接口初始化规则边界 | java-jvm |
| 端口必然只能一个程序，UDP API 不存在连接操作 | 限定地址/协议/复用，说明 UDP connect 的不同语义 | java-sockets |
| 每次 write 对应一次 read，TCP 等于业务恰好一次 | 加入长度前缀、readFully、大小上限、幂等边界 | java-sockets |
| Nginx 常与 Java 同一 JVM | 修正为通常独立原生进程 | java-filters |
| Spring 单例等于某类 JVM 唯一，DI 就是反射改字段 | 区分每容器每定义与构造器注入 | java-ioc |
| 只要有接口 AOP 必用 JDK 代理 | 区分 Framework 规则与 Boot 默认 CGLIB 配置 | java-aop |
| 三层架构就是 MVC，Boot 取代 Tomcat | 分别解释容器、请求分发、业务分层与启动 | java-boot / java-mvc |
| @Size(50)、@Data 全参构造器 | 修正标准注解元素与 RequiredArgsConstructor | java-validation |
| @Valid 保证对象非空且一律同一种异常 | 区分对象/方法约束、级联与非空及异常类型 | java-validation |
| postHandle 总能修改 JSON、返回 false 自动401 | 说明响应提交时序与显式设置错误响应 | java-filters |
| #{} 能参数化所有 SQL 结构 | 限定数据值，动态标识符白名单 | java-jdbc / java-mybatis |
| MyBatis 接口任意方法自动获得 SQL | 要求注册代理及对应 statement，区分通用 CRUD | java-mybatis |
| selectPage 一调用必分页 | 明确插件、解析器版本依赖及排序/页大小 | java-mybatis-plus |
| 先 count 再 insert 保证无重复 | 依赖数据库唯一约束并处理竞态 | java-validation |
| 加事务就能防超卖、回滚远程支付 | 增补条件更新、影响行数、本地资源边界与代理 | java-transactions |
| Base64保密、SHA256直接存密码、两次encode对比 | 改为专用密码哈希及 matches，补输入字节边界 | java-passwords |
| JWT 解码等于验证，认证等于订单授权 | 增补验证声明、密钥/算法边界、用户归属查询 | java-jwt |
| ThreadLocal 在线程结束自然释放且自动跨异步 | finally/remove，线程复用与显式传播 | java-context |
| @BeforeAll 一定 static，学两周必精通 | 说明测试生命周期例外，以能力验收替代天数 | java-delivery |
| Template 名字必然就是严格继承模板模式 | 区分模板化执行、回调与模式动机 | java-design-agent |

## 主要核对依据

- [Java 17 语言规范](https://docs.oracle.com/javase/specs/jls/se17/html/index.html)：类型、继承、Lambda、异常、JMM。
- [Java 17 API](https://docs.oracle.com/en/java/javase/17/docs/api/index.html)：String、反射、时间、集合、ThreadLocal 与 JUC 契约。
- [JVMS 17](https://docs.oracle.com/javase/specs/jvms/se17/html/index.html)：运行时区域、加载链接与初始化。
- [Boot 3.5 自动配置](https://docs.spring.io/spring-boot/3.5/reference/using/auto-configuration.html)与[AOP 默认代理](https://docs.spring.io/spring-boot/3.5/reference/features/aop.html)。
- [Spring 6.2 MVC Validation](https://docs.spring.io/spring-framework/reference/6.2/web/webmvc/mvc-controller/ann-validation.html)、[事务](https://docs.spring.io/spring-framework/reference/6.2/data-access/transaction/declarative/annotations.html)与[拦截器](https://docs.spring.io/spring-framework/reference/6.2/web/webmvc/mvc-config/interceptors.html)。
- [MyBatis 映射](https://mybatis.org/mybatis-3/sqlmap-xml.html)、[MyBatis-Plus 分页](https://baomidou.com/en/plugins/pagination/)、[Lombok Data](https://projectlombok.org/features/Data)。
- [JWT RFC8725](https://www.rfc-editor.org/rfc/rfc8725.html)、[JJWT](https://github.com/jwtk/jjwt)、[Spring Security 密码存储](https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html)。
- [MySQL 8.4 事务模型](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html)、[JUnit5](https://docs.junit.org/5.12.2/user-guide/)、[Maven 生命周期](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)。

说明：版本固定文档用于能力边界核对，不表示给新生产项目推荐该旧主线。Java17 JLS第4章直链在本次网络读取两次超时；类型规则另结合API与相关规范交叉检查，未将超时宣称为成功抓取。Spring Security、MyBatis-Plus 等滚动文档引用的是稳定概念，具体库配置仍按目标版本核对。工程选型、时间安排和性能判断明确作为经验推断，不伪装为规范承诺。

## 验证与限制

结构检查通过：45/45 来源有映射、32章 ID 唯一、章节路径存在、代码围栏闭合、全部篇末仅编号问题。反射章的完整 ReflectDemo 用本机 JDK21 的 javac --release 17 编译，运行输出 Roger。其余包含应用依赖的代码标为教学片段，未宣称每段均独立编译，更未宣称 Spring/数据库/鉴权完整集成测试已运行。

未写入原稿、archive 或项目学习，未运行 Git add/commit/push，未部署。总课程映射由主集成流程合并 .local-review/java-courses.json；此处只负责 Java 片段。

## 逐份来源去向

| 原稿 | 新章节 | 处理 |
|---|---|---|
| 00-总览与速记.md | java-packages、java-delivery | 旧主题导航由课程图取代；速记中不准确的绝对表述由各章修正，旧档案路径留原文。 |
| 01-基础语法与类型.md | java-types | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 02-包与导入.md | java-packages | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 03-字符串与构建器.md | java-strings | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 04-控制流.md | java-strings | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 05-面向对象.md | java-objects | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 06-抽象类与接口.md | java-objects | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 07-内部类.md | java-lambda | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 08-异常.md | java-exceptions | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 09-JavaBean与反射.md | java-reflection | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 10-学习方法与重点.md | java-delivery | 将学习循环与能力验收并入工程实践，不保留固定课时或背口诀即掌握的判断。 |
| 11-集合框架.md | java-collections、java-generics | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 12-泛型.md | java-collections、java-generics | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 13-IO与资源管理.md | java-exceptions | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 14-多线程与锁.md | java-threads | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 15-日期时间与正则.md | java-time | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 16-单元测试与安全基础.md | java-passwords、java-delivery | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 17-JUC并发工具.md | java-threads、java-juc、java-executors | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 18-网络编程基础.md | java-sockets | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 19-JMM与内存可见性.md | java-jmm | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 20-volatile.md | java-jmm | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 21-线程池与异步编程.md | java-executors | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 22-类加载机制.md | java-jvm | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 23-JVM字节码与栈帧.md | java-jvm | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 24-Socket进阶与NIO.md | java-sockets | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 25-Spring核心与IoC-DI-AOP.md | java-ioc、java-aop、java-transactions | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 26-SpringMVC与请求处理.md | java-mvc、java-filters | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 27-SpringBoot快速入门.md | java-boot | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 28-Tomcat与Servlet及Nginx.md | java-mvc、java-filters | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 29-常用设计模式.md | java-aop、java-design-agent | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 30-JDBC与数据库访问.md | java-jdbc | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 31-MyBatis基础.md | java-jdbc、java-mybatis | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 32-MySQL基础.md | java-transactions | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 33-Maven与依赖管理.md | java-delivery | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 34-密码安全与JWT鉴权.md | java-passwords、java-jwt、java-context | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 35-工程实践Git调试与Spike.md | java-delivery、java-design-agent | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| 36-Agent开发与MCP.md | java-design-agent | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md | java-lambda、java-streams、java-mybatis-plus | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Java_Spring基础与JWT拦截器_核对版学习笔记.md | java-objects、java-ioc、java-filters、java-passwords、java-jwt、java-context | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md | java-boot、java-ioc、java-mvc、java-validation、java-transactions、java-delivery | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Java后端_SpringBoot聊天核对与学习笔记.md | java-types、java-strings、java-objects、java-lambda、java-exceptions、java-streams、java-time、java-boot、java-ioc、java-mvc、java-validation、java-mybatis-plus | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Java后端五大基础_校订学习笔记_2026-10-23.md | java-reflection、java-ioc、java-mvc、java-filters、java-jwt、java-context | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| SpringBoot后端开发基础_聊天核对与学习笔记.md | java-mvc、java-validation、java-mybatis、java-mybatis-plus | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| SpringMVC_Tomcat_Servlet_三层架构_核对学习笔记.md | java-mvc、java-filters | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |
| Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md | java-jmm、java-boot、java-ioc、java-aop、java-mvc、java-filters、java-mybatis、java-transactions、java-delivery | 按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。 |

