// 自动生成：规范课程与项目原文索引。

var learningNotes = [
  {
    "id": "java-types",
    "version": "e450d5a94649",
    "md": "learning/courses/java-basics/01-java-types.md",
    "title": "运行平台、类型与数值边界",
    "description": "从字节码到订单金额，分清基本类型、引用和值传递。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "从源码到运行",
        "anchor": "从源码到运行",
        "level": 2,
        "text": "  Java 17 源码经 javac 生成 class 字节码，JVM 可以解释执行，也可以把热点代码即时编译成本机指令。跨平台还要求 class 版本、依赖和本机能力兼容；含 Windows 路径或本地动态库的程序不会仅靠 JVM 自动兼容 Linux。  JDK 提供编译器、调试工具和运行环境。为 Boot 3.x 示例安装兼容 JDK，并检查 java -version 、 javac -version 和 Maven 实际使用的 JAVA_HOME，避免编辑器能编译、命令行却报 class 版本过高。 "
      },
      {
        "title": "类型、范围与默认值",
        "anchor": "类型范围与默认值",
        "level": 2,
        "text": "  类型 语言规定 实际用途 --- --- --- byte / short 8 / 16 位有符号整数 原始字节、协议字段 int 32 位，−2³¹ 到 2³¹−1 数量、页码 long 64 位有符号整数 数据库 ID、毫秒时间 float / double 32 / 64 位浮点 容忍近似的测量 char 16 位 UTF-16 代码单元 字符串底层语义 boolean true / false 判断；不能转为 0/1  原稿把 int 范围写成 ±2¹⁵，现修正为 32 位范围。boolean 的语言语义不能推出所有 JVM 对象布局中的固定字节数。对象字段有零值或 null；局部变量读取前必须确定赋值。包装类允许 null，自动拆箱可能触发 NPE。 "
      },
      {
        "title": "实际开发：数量与金额",
        "anchor": "实际开发数量与金额",
        "level": 2,
        "text": "  java long bytes = 3L 1024 1024 1024; int total = Math.multiplyExact(quantity, unitCount); BigDecimal price = new BigDecimal(\"19.90\"); BigDecimal amount = price.multiply(BigDecimal.valueOf(quantity));   第一行先用 long 参与乘法，避免 int 已溢出后才转 long。整数溢出通常不会自动报错；需要拒绝溢出时使用 exact 系列方法。金额通常用 BigDecimal 或明确最小单位的整数；舍入位数与模式由业务规则确定。  new BigDecimal(0.1) 会保留二进制近似值；字符串构造更明确。BigDecimal 不可变，运算结果要接住； 1.0 和 1.00 数值比较用 compareTo，相等性还需考虑 scale。 "
      },
      {
        "title": "引用也是按值传递",
        "anchor": "引用也是按值传递",
        "level": 2,
        "text": "  User b = a 复制引用，不复制对象。方法参数接收引用值的副本：修改对象字段可能被调用方观察到，给形参重新赋 null 不会改变调用方变量。final 引用不能重新赋值，但不自动保证对象不可变、非空或线程安全。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Java 17 JLS：类型、值与变量 - BigDecimal API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】int 的范围是什么？为什么 long 接收 int 乘法结果仍可能溢出？ 2. 【基础】成员字段和局部变量的默认值规则有什么区别？ 3. 【应用】订单金额为什么通常不用 double？ 4. 【应用】方法内重新赋值引用参数，调用方的变量会变化吗？ 5. 【深入】BigDecimal 的 equals 与 compareTo 为什么可能得出不同结论？ "
      }
    ],
    "questions": [
      {
        "id": "98cf82b61f7527cb",
        "text": "【基础】int 的范围是什么？为什么 long 接收 int 乘法结果仍可能溢出？"
      },
      {
        "id": "6579cc2254c4c66e",
        "text": "【基础】成员字段和局部变量的默认值规则有什么区别？"
      },
      {
        "id": "212f8a6d096bed02",
        "text": "【应用】订单金额为什么通常不用 double？"
      },
      {
        "id": "5de36f2c879206f7",
        "text": "【应用】方法内重新赋值引用参数，调用方的变量会变化吗？"
      },
      {
        "id": "7de98bcb36698381",
        "text": "【深入】BigDecimal 的 equals 与 compareTo 为什么可能得出不同结论？"
      }
    ],
    "searchText": "运行平台、类型与数值边界 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 从源码到运行 java 17 源码经 javac 生成 class 字节码，jvm 可以解释执行，也可以把热点代码即时编译成本机指令。跨平台还要求 class 版本、依赖和本机能力兼容；含 windows 路径或本地动态库的程序不会仅靠 jvm 自动兼容 linux。 jdk 提供编译器、调试工具和运行环境。为 boot 3.x 示例安装兼容 jdk，并检查 java -version 、 javac -version 和 maven 实际使用的 java_home，避免编辑器能编译、命令行却报 class 版本过高。 类型、范围与默认值 类型 语言规定 实际用途 --- --- --- byte / short 8 / 16 位有符号整数 原始字节、协议字段 int 32 位，−2³¹ 到 2³¹−1 数量、页码 long 64 位有符号整数 数据库 id、毫秒时间 float / double 32 / 64 位浮点 容忍近似的测量 char 16 位 utf-16 代码单元 字符串底层语义 boolean true / false 判断；不能转为 0/1 原稿把 int 范围写成 ±2¹⁵，现修正为 32 位范围。boolean 的语言语义不能推出所有 jvm 对象布局中的固定字节数。对象字段有零值或 null；局部变量读取前必须确定赋值。包装类允许 null，自动拆箱可能触发 npe。 实际开发：数量与金额 java long bytes = 3l 1024 1024 1024; int total = math.multiplyexact(quantity, unitcount); bigdecimal price = new bigdecimal(\"19.90\"); bigdecimal amount = price.multiply(bigdecimal.valueof(quantity)); 第一行先用 long 参与乘法，避免 int 已溢出后才转 long。整数溢出通常不会自动报错；需要拒绝溢出时使用 exact 系列方法。金额通常用 bigdecimal 或明确最小单位的整数；舍入位数与模式由业务规则确定。 new bigdecimal(0.1) 会保留二进制近似值；字符串构造更明确。bigdecimal 不可变，运算结果要接住； 1.0 和 1.00 数值比较用 compareto，相等性还需考虑 scale。 引用也是按值传递 user b = a 复制引用，不复制对象。方法参数接收引用值的副本：修改对象字段可能被调用方观察到，给形参重新赋 null 不会改变调用方变量。final 引用不能重新赋值，但不自动保证对象不可变、非空或线程安全。 参考资料 - java 17 jls：类型、值与变量 - bigdecimal api 模拟面试问题 1. 【基础】int 的范围是什么？为什么 long 接收 int 乘法结果仍可能溢出？ 2. 【基础】成员字段和局部变量的默认值规则有什么区别？ 3. 【应用】订单金额为什么通常不用 double？ 4. 【应用】方法内重新赋值引用参数，调用方的变量会变化吗？ 5. 【深入】bigdecimal 的 equals 与 compareto 为什么可能得出不同结论？"
  },
  {
    "id": "java-packages",
    "version": "46130b08ca67",
    "md": "learning/courses/java-basics/02-java-packages.md",
    "title": "包、导入与项目边界",
    "description": "理解全限定名、源根目录和编译依赖，避免把 import 当作加载。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "名字、目录与源根",
        "anchor": "名字目录与源根",
        "level": 2,
        "text": "  包用于组织命名空间。 com.example.order.OrderService 是全限定名，常规 Maven 项目把它放在 src/main/java/com/example/order/OrderService.java 。源根是 src/main/java，而不是包目录本身。包与目录匹配是工具链的重要约定，不能把 Java 包简单定义成文件夹。  普通编译单元的顺序是 package（如有）、import、顶级声明。字段、构造器和方法没有必须按某个顺序出现的语法要求。通常 javac 要求 public 顶级类名与文件名匹配，一个文件至多一个 public 顶级类型；其他包级顶级类型可共存。 "
      },
      {
        "title": "import 不复制代码",
        "anchor": "import-不复制代码",
        "level": 2,
        "text": "  java package com.example.order; import java.util.List; import static java.util.Objects.requireNonNull;  public class OrderIds { private final List ids; public OrderIds(List ids) { this.ids = List.copyOf(requireNonNull(ids)); } }   import 允许用简单名引用可访问类型。通配导入不递归导入子包，也不会让运行时把包内所有类都加载。静态导入只缩短静态成员名字；过多通配导入会让同名类型或方法含混。  java.lang 和同包类型通常无需导入，但不表示任何库都在类路径里。要使用第三方类型，需要先让构建工具解析依赖，再导入其名字。import 本身不会下载 jar。 "
      },
      {
        "title": "实际开发：模块怎么分",
        "anchor": "实际开发模块怎么分",
        "level": 2,
        "text": "  小型订单项目可以按功能组织 order/controller、order/service、order/mapper，公共能力再单独抽取。包级可见性有助于限制内部实现；public 是对外 API 承诺，不能为了消除编译错误就把所有成员开放。  看到“找不到符号”先检查拼写、包、导入和依赖；运行时 ClassNotFoundException 再查打包与类路径。不要通过移动单个 class 文件来掩盖 Maven 源目录配置错误。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：包和模块 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】全限定名与源根目录分别是什么？ 2. 【基础】import java.util. 会导入子包吗？ 3. 【应用】引入第三方 jar 和写 import 的职责有什么区别？ 4. 【深入】包级可见性如何帮助保护内部实现？ "
      }
    ],
    "questions": [
      {
        "id": "45e9cc73f60fc1c1",
        "text": "【基础】全限定名与源根目录分别是什么？"
      },
      {
        "id": "9dc01959843e5f62",
        "text": "【基础】import java.util. 会导入子包吗？"
      },
      {
        "id": "c0d4af7abcaa23d7",
        "text": "【应用】引入第三方 jar 和写 import 的职责有什么区别？"
      },
      {
        "id": "844a272026e9db74",
        "text": "【深入】包级可见性如何帮助保护内部实现？"
      }
    ],
    "searchText": "包、导入与项目边界 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 名字、目录与源根 包用于组织命名空间。 com.example.order.orderservice 是全限定名，常规 maven 项目把它放在 src/main/java/com/example/order/orderservice.java 。源根是 src/main/java，而不是包目录本身。包与目录匹配是工具链的重要约定，不能把 java 包简单定义成文件夹。 普通编译单元的顺序是 package（如有）、import、顶级声明。字段、构造器和方法没有必须按某个顺序出现的语法要求。通常 javac 要求 public 顶级类名与文件名匹配，一个文件至多一个 public 顶级类型；其他包级顶级类型可共存。 import 不复制代码 java package com.example.order; import java.util.list; import static java.util.objects.requirenonnull; public class orderids { private final list ids; public orderids(list ids) { this.ids = list.copyof(requirenonnull(ids)); } } import 允许用简单名引用可访问类型。通配导入不递归导入子包，也不会让运行时把包内所有类都加载。静态导入只缩短静态成员名字；过多通配导入会让同名类型或方法含混。 java.lang 和同包类型通常无需导入，但不表示任何库都在类路径里。要使用第三方类型，需要先让构建工具解析依赖，再导入其名字。import 本身不会下载 jar。 实际开发：模块怎么分 小型订单项目可以按功能组织 order/controller、order/service、order/mapper，公共能力再单独抽取。包级可见性有助于限制内部实现；public 是对外 api 承诺，不能为了消除编译错误就把所有成员开放。 看到“找不到符号”先检查拼写、包、导入和依赖；运行时 classnotfoundexception 再查打包与类路径。不要通过移动单个 class 文件来掩盖 maven 源目录配置错误。 参考资料 - jls 17：包和模块 模拟面试问题 1. 【基础】全限定名与源根目录分别是什么？ 2. 【基础】import java.util. 会导入子包吗？ 3. 【应用】引入第三方 jar 和写 import 的职责有什么区别？ 4. 【深入】包级可见性如何帮助保护内部实现？"
  },
  {
    "id": "java-strings",
    "version": "3ccb79beef9b",
    "md": "learning/courses/java-basics/03-java-strings.md",
    "title": "字符串、Unicode 与控制流",
    "description": "准确理解不可变字符串、编码边界与 Java 17 switch。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "不可变与相等",
        "anchor": "不可变与相等",
        "level": 2,
        "text": "  String 的值不可改变，replace、strip、substring 返回新字符串或符合契约的结果，不会修改原变量指向的内容。 == 比较引用是否同一对象，equals 比较内容；常量池可能让部分引用相同，但不能依赖它做业务判断。可空输入可用 Objects.equals 或先判断 null。  StringBuilder 用于一个线程内逐步拼接，例如导出多行订单 CSV；不要为了两个字符串相加就一律替换成 Builder。StringBuffer 对方法做同步也不意味着多个调用组合成的整个流程自动原子。 "
      },
      {
        "title": "代码单元不等于看到的字符",
        "anchor": "代码单元不等于看到的字符",
        "level": 2,
        "text": "  java String face = \"😀\"; System.out.println(face.length()); // 2 个 UTF-16 代码单元 System.out.println(face.codePointCount(0, face.length())); // 1 码点 System.out.println(face.getBytes(StandardCharsets.UTF_8).length); // 4 字节   码点数仍不必等于用户感知字符数，例如组合音标与复合 Emoji。用户名限制要先确定按字节、代码单元还是感知字符计数；数据库字段长度、前端字数和后端 @Size 不能假定完全一致。网络和文件读写显式使用 UTF-8，避免 Java 17 的平台默认字符集差异。  isEmpty 判断零长度，isBlank 判断空串或空白字符组成；调用它们前仍须处理 null。trim 与 strip 的空白规则不同。split 接收正则，按点号切分要转义；Java 字符串和正则分别解释一次反斜杠。 "
      },
      {
        "title": "用控制流表达完整规则",
        "anchor": "用控制流表达完整规则",
        "level": 2,
        "text": "  java String label = switch (status) { case \"NEW\" - \"待支付\"; case \"PAID\" - \"已支付\"; default - throw new IllegalArgumentException(\"未知状态\"); };   Java 17 支持 switch 表达式与箭头分支；多语句分支返回值用 yield，箭头分支不发生传统冒号分支的贯穿。Java 17 中不能把后续版本的模式 switch 当作无需启用预览就可用的语法，null 也要显式在进入前处理。  条件校验采用提前返回可减少嵌套，但不要散落重复的业务规则。块注释不能嵌套；注释描述设计意图，不能代替对状态转换的约束与测试。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - String API - JLS 17：switch 语句 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】String 的不可变和 final 引用有什么区别？ 2. 【应用】为什么 Emoji 的 length 不一定是 1？ 3. 【应用】导出十万行文本时如何选择拼接方式和编码？ 4. 【深入】Java 17 的 switch 表达式怎样保证结果完整？ "
      }
    ],
    "questions": [
      {
        "id": "67675292462fce22",
        "text": "【基础】String 的不可变和 final 引用有什么区别？"
      },
      {
        "id": "631b86808edba740",
        "text": "【应用】为什么 Emoji 的 length 不一定是 1？"
      },
      {
        "id": "7cdc4c979070105c",
        "text": "【应用】导出十万行文本时如何选择拼接方式和编码？"
      },
      {
        "id": "b6df145cf0093a8e",
        "text": "【深入】Java 17 的 switch 表达式怎样保证结果完整？"
      }
    ],
    "searchText": "字符串、unicode 与控制流 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 不可变与相等 string 的值不可改变，replace、strip、substring 返回新字符串或符合契约的结果，不会修改原变量指向的内容。 == 比较引用是否同一对象，equals 比较内容；常量池可能让部分引用相同，但不能依赖它做业务判断。可空输入可用 objects.equals 或先判断 null。 stringbuilder 用于一个线程内逐步拼接，例如导出多行订单 csv；不要为了两个字符串相加就一律替换成 builder。stringbuffer 对方法做同步也不意味着多个调用组合成的整个流程自动原子。 代码单元不等于看到的字符 java string face = \"😀\"; system.out.println(face.length()); // 2 个 utf-16 代码单元 system.out.println(face.codepointcount(0, face.length())); // 1 码点 system.out.println(face.getbytes(standardcharsets.utf_8).length); // 4 字节 码点数仍不必等于用户感知字符数，例如组合音标与复合 emoji。用户名限制要先确定按字节、代码单元还是感知字符计数；数据库字段长度、前端字数和后端 @size 不能假定完全一致。网络和文件读写显式使用 utf-8，避免 java 17 的平台默认字符集差异。 isempty 判断零长度，isblank 判断空串或空白字符组成；调用它们前仍须处理 null。trim 与 strip 的空白规则不同。split 接收正则，按点号切分要转义；java 字符串和正则分别解释一次反斜杠。 用控制流表达完整规则 java string label = switch (status) { case \"new\" - \"待支付\"; case \"paid\" - \"已支付\"; default - throw new illegalargumentexception(\"未知状态\"); }; java 17 支持 switch 表达式与箭头分支；多语句分支返回值用 yield，箭头分支不发生传统冒号分支的贯穿。java 17 中不能把后续版本的模式 switch 当作无需启用预览就可用的语法，null 也要显式在进入前处理。 条件校验采用提前返回可减少嵌套，但不要散落重复的业务规则。块注释不能嵌套；注释描述设计意图，不能代替对状态转换的约束与测试。 参考资料 - string api - jls 17：switch 语句 模拟面试问题 1. 【基础】string 的不可变和 final 引用有什么区别？ 2. 【应用】为什么 emoji 的 length 不一定是 1？ 3. 【应用】导出十万行文本时如何选择拼接方式和编码？ 4. 【深入】java 17 的 switch 表达式怎样保证结果完整？"
  },
  {
    "id": "java-objects",
    "version": "fb077830ebf6",
    "md": "learning/courses/java-basics/04-java-objects.md",
    "title": "对象、继承与接口契约",
    "description": "从引用到动态分派，用支付策略理解抽象与边界。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "变量类型与真实对象",
        "anchor": "变量类型与真实对象",
        "level": 2,
        "text": "  声明 Payment p 没有创建对象， new CardPayment() 才是普通实例化。引用的编译期类型决定哪些成员可访问；被重写实例方法的实际执行取决于运行时类型。字段访问和静态方法隐藏按编译期类型解析，不能笼统说“所有成员都有多态”。  重载在编译期根据签名和参数类型选择；重写遵循继承契约。子类不能缩小可见性，不能扩大受检异常范围；引用返回类型可协变，基本类型返回值不能随意改变。private 方法不被继承重写，原笔记“private → public 是扩大重写权限”的口诀不成立。 "
      },
      {
        "title": "实际开发：支付能力",
        "anchor": "实际开发支付能力",
        "level": 2,
        "text": "  java interface Payment { String pay(long orderId); } final class FakePayment implements Payment { @Override public String pay(long orderId) { return \"test-\" + orderId; } } final class Checkout { private final Payment payment; Checkout(Payment payment) { this.payment = Objects.requireNonNull(payment); } String checkout(long orderId) { return payment.pay(orderId); } }   Checkout 依赖契约，测试可传 FakePayment，正式环境传真实网关实现。构造器注入只是把依赖从外部交进来，不要求必须使用 Spring。接口类型与实现类类型不是“两个对象”，赋值或转型也不创建对象。 "
      },
      {
        "title": "抽象类与接口怎么选",
        "anchor": "抽象类与接口怎么选",
        "level": 2,
        "text": "  抽象类可存实例状态、提供构造器和部分实现，适合有稳定共享骨架的类族。接口声明能力契约，允许 default、static、private 辅助方法；接口字段隐含 public static final。一个类可实现多个接口，只能直接继承一个类。  “是什么／能做什么”只是帮助记忆，不能替代对状态、演化和复用的设计判断。默认方法冲突必须按 Java 规则消歧。接口也不保证其所有实现都线程安全。 "
      },
      {
        "title": "组合与生命周期",
        "anchor": "组合与生命周期",
        "level": 2,
        "text": "  持有其他对象的字段至少说明关联。严格 UML 组合还强调生命周期归属，因此 Controller 引用单例 Service 不宜直接称为强组合。业务复用通常先考虑委托，避免为复用几个方法继承不合适的父类。  向下转型要有类型依据；Spring 注入的接口对象可能是代理，强转实现类可能失败。需要能力时把它放进合适契约，而不是到处 instanceof 补洞。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：类 - JLS 17：接口 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】重写与重载的选择发生在什么阶段？ 2. 【基础】字段和静态方法是否按运行时对象多态分派？ 3. 【应用】支付网关为什么适合通过接口注入？ 4. 【深入】private 方法为什么不构成被重写方法？ 5. 【深入】抽象类和默认接口方法如何选择？ "
      }
    ],
    "questions": [
      {
        "id": "5b8df1574db4838d",
        "text": "【基础】重写与重载的选择发生在什么阶段？"
      },
      {
        "id": "6643222ace684b8c",
        "text": "【基础】字段和静态方法是否按运行时对象多态分派？"
      },
      {
        "id": "293639cabefbac6e",
        "text": "【应用】支付网关为什么适合通过接口注入？"
      },
      {
        "id": "2f122fc63fe3261b",
        "text": "【深入】private 方法为什么不构成被重写方法？"
      },
      {
        "id": "f97a6477f45e84bd",
        "text": "【深入】抽象类和默认接口方法如何选择？"
      }
    ],
    "searchText": "对象、继承与接口契约 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 变量类型与真实对象 声明 payment p 没有创建对象， new cardpayment() 才是普通实例化。引用的编译期类型决定哪些成员可访问；被重写实例方法的实际执行取决于运行时类型。字段访问和静态方法隐藏按编译期类型解析，不能笼统说“所有成员都有多态”。 重载在编译期根据签名和参数类型选择；重写遵循继承契约。子类不能缩小可见性，不能扩大受检异常范围；引用返回类型可协变，基本类型返回值不能随意改变。private 方法不被继承重写，原笔记“private → public 是扩大重写权限”的口诀不成立。 实际开发：支付能力 java interface payment { string pay(long orderid); } final class fakepayment implements payment { @override public string pay(long orderid) { return \"test-\" + orderid; } } final class checkout { private final payment payment; checkout(payment payment) { this.payment = objects.requirenonnull(payment); } string checkout(long orderid) { return payment.pay(orderid); } } checkout 依赖契约，测试可传 fakepayment，正式环境传真实网关实现。构造器注入只是把依赖从外部交进来，不要求必须使用 spring。接口类型与实现类类型不是“两个对象”，赋值或转型也不创建对象。 抽象类与接口怎么选 抽象类可存实例状态、提供构造器和部分实现，适合有稳定共享骨架的类族。接口声明能力契约，允许 default、static、private 辅助方法；接口字段隐含 public static final。一个类可实现多个接口，只能直接继承一个类。 “是什么／能做什么”只是帮助记忆，不能替代对状态、演化和复用的设计判断。默认方法冲突必须按 java 规则消歧。接口也不保证其所有实现都线程安全。 组合与生命周期 持有其他对象的字段至少说明关联。严格 uml 组合还强调生命周期归属，因此 controller 引用单例 service 不宜直接称为强组合。业务复用通常先考虑委托，避免为复用几个方法继承不合适的父类。 向下转型要有类型依据；spring 注入的接口对象可能是代理，强转实现类可能失败。需要能力时把它放进合适契约，而不是到处 instanceof 补洞。 参考资料 - jls 17：类 - jls 17：接口 模拟面试问题 1. 【基础】重写与重载的选择发生在什么阶段？ 2. 【基础】字段和静态方法是否按运行时对象多态分派？ 3. 【应用】支付网关为什么适合通过接口注入？ 4. 【深入】private 方法为什么不构成被重写方法？ 5. 【深入】抽象类和默认接口方法如何选择？"
  },
  {
    "id": "java-lambda",
    "version": "33191396eb92",
    "md": "learning/courses/java-basics/05-java-lambda.md",
    "title": "内部类、Lambda 与回调",
    "description": "把行为作为参数传递，并识别捕获变量与 this 的差异。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "内部类与嵌套类",
        "anchor": "内部类与嵌套类",
        "level": 2,
        "text": "  成员内部类关联外部实例，通过 outer.new Inner() 创建；静态嵌套类不隐含外部实例，用 new Outer.Inner() 创建。局部类声明在代码块内，匿名类在表达式中创建无名子类或接口实现。  原稿把所有局部类、匿名类都标成持有外部实例不严谨：是否存在外部实例取决于声明环境，例如静态上下文不能隐式取得外部 this。长期被缓存的回调若捕获服务对象，可能连带保留大量状态，应关注引用链而非仅看语法名字。 "
      },
      {
        "title": "函数式接口是目标类型",
        "anchor": "函数式接口是目标类型",
        "level": 2,
        "text": "  Lambda 需要兼容的函数式接口，关键是一个符合规则的抽象方法，允许 default/static 等方法。@FunctionalInterface 可让编译器检查契约。  接口 行为 --- --- Predicate T → boolean，判定 Function T → R，转换 Consumer T → void，消费 Supplier 无参数 → T，延迟提供  java Predicate valid = n - n 0; Function length = String::length; Supplier create = ArrayList::new; Comparator compare = Integer::compare;   方法引用不立即执行方法；被调用方在需要时使用这段行为。比较任意整数用 Integer.compare，不能用 a-b 冒溢出风险。 "
      },
      {
        "title": "实际开发：上传完成回调",
        "anchor": "实际开发上传完成回调",
        "level": 2,
        "text": "  java void upload(byte[] bytes, Consumer onComplete) { // 此处只模拟同步处理；真实上传还需 IO 与错误处理 onComplete.accept(bytes.length); } upload(new byte[64], size - System.out.println(\"已处理字节：\" + size));   回调只表示“把逻辑交给对方、由对方在约定时机调用”，不天然异步。要判断执行线程，必须看 upload 实现或框架契约。 "
      },
      {
        "title": "捕获限制不等于不可变",
        "anchor": "捕获限制不等于不可变",
        "level": 2,
        "text": "  被捕获局部变量须 final 或 effectively final，表示引用或值不再重新赋值；其指向集合的内部内容仍可能改变，线程安全也不会自动获得。Lambda 的 this 沿用词法环境中的 this，匿名类的 this 指匿名对象。  不要依赖 Lambda 恰好生成某种 class 文件或总比匿名类快。实现细节和性能要用具体 JDK 与真实调用方式验证。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：Lambda 表达式 - JLS 17：内部类 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】函数式接口能有多个 default 方法吗？ 2. 【应用】方法引用与立即调用 getter 有什么区别？ 3. 【应用】回调什么时候是同步的，什么时候是异步的？ 4. 【深入】effectively final 为什么不保证集合不可变？ 5. 【深入】Lambda 与匿名类中的 this 分别指向谁？ "
      }
    ],
    "questions": [
      {
        "id": "c7be51b4f590e06a",
        "text": "【基础】函数式接口能有多个 default 方法吗？"
      },
      {
        "id": "74839126110dc53e",
        "text": "【应用】方法引用与立即调用 getter 有什么区别？"
      },
      {
        "id": "d2333dd4d4014b41",
        "text": "【应用】回调什么时候是同步的，什么时候是异步的？"
      },
      {
        "id": "bf000372c4292ad4",
        "text": "【深入】effectively final 为什么不保证集合不可变？"
      },
      {
        "id": "0f54520638dbbb1c",
        "text": "【深入】Lambda 与匿名类中的 this 分别指向谁？"
      }
    ],
    "searchText": "内部类、lambda 与回调 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 内部类与嵌套类 成员内部类关联外部实例，通过 outer.new inner() 创建；静态嵌套类不隐含外部实例，用 new outer.inner() 创建。局部类声明在代码块内，匿名类在表达式中创建无名子类或接口实现。 原稿把所有局部类、匿名类都标成持有外部实例不严谨：是否存在外部实例取决于声明环境，例如静态上下文不能隐式取得外部 this。长期被缓存的回调若捕获服务对象，可能连带保留大量状态，应关注引用链而非仅看语法名字。 函数式接口是目标类型 lambda 需要兼容的函数式接口，关键是一个符合规则的抽象方法，允许 default/static 等方法。@functionalinterface 可让编译器检查契约。 接口 行为 --- --- predicate t → boolean，判定 function t → r，转换 consumer t → void，消费 supplier 无参数 → t，延迟提供 java predicate valid = n - n 0; function length = string::length; supplier create = arraylist::new; comparator compare = integer::compare; 方法引用不立即执行方法；被调用方在需要时使用这段行为。比较任意整数用 integer.compare，不能用 a-b 冒溢出风险。 实际开发：上传完成回调 java void upload(byte[] bytes, consumer oncomplete) { // 此处只模拟同步处理；真实上传还需 io 与错误处理 oncomplete.accept(bytes.length); } upload(new byte[64], size - system.out.println(\"已处理字节：\" + size)); 回调只表示“把逻辑交给对方、由对方在约定时机调用”，不天然异步。要判断执行线程，必须看 upload 实现或框架契约。 捕获限制不等于不可变 被捕获局部变量须 final 或 effectively final，表示引用或值不再重新赋值；其指向集合的内部内容仍可能改变，线程安全也不会自动获得。lambda 的 this 沿用词法环境中的 this，匿名类的 this 指匿名对象。 不要依赖 lambda 恰好生成某种 class 文件或总比匿名类快。实现细节和性能要用具体 jdk 与真实调用方式验证。 参考资料 - jls 17：lambda 表达式 - jls 17：内部类 模拟面试问题 1. 【基础】函数式接口能有多个 default 方法吗？ 2. 【应用】方法引用与立即调用 getter 有什么区别？ 3. 【应用】回调什么时候是同步的，什么时候是异步的？ 4. 【深入】effectively final 为什么不保证集合不可变？ 5. 【深入】lambda 与匿名类中的 this 分别指向谁？"
  },
  {
    "id": "java-exceptions",
    "version": "b3a909ed9922",
    "md": "learning/courses/java-basics/06-java-exceptions.md",
    "title": "异常传播与资源清理",
    "description": "区分编译期处理义务、业务失败与外部资源生命周期。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 6,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "谁必须处理",
        "anchor": "谁必须处理",
        "level": 2,
        "text": "  Throwable 下的 RuntimeException 家族与 Error 家族属于非受检异常，编译器不强制捕获或声明；其余受检异常必须捕获或通过 throws 传播。Error 通常表示严重运行问题，不应常规吞掉，但“任何 Error 都无法捕获”并非语言规则。  throw 真正抛出对象；throws 只是方法声明，不主动触发异常。运行时异常无需层层声明也会沿调用栈传播。catch 要把子类型放在父类型前，否则后续分支不可达。  原稿包装 UnsupportedEncodingException 成 RuntimeException 后，调用方仍专门捕获已不可能抛出的受检异常，示例无法正确编译；新代码使用明确 Charset，避免制造这个无效异常路径。 "
      },
      {
        "title": "读取订单导出文件",
        "anchor": "读取订单导出文件",
        "level": 2,
        "text": "  java static List readOrders(Path file) throws IOException { try (BufferedReader reader = Files.newBufferedReader(file, StandardCharsets.UTF_8)) { List lines = new ArrayList< (); String line; while ((line = reader.readLine()) != null) lines.add(line); return lines; } }   文本需要编解码，图片、压缩文件等用字节流。Reader 的 read() 终止标记为 -1，readLine() 为 null。大文件应流式逐条处理而非全部收集到内存；读取网络数据还需要超时、大小上限和取消能力。  try-with-resources 管理 AutoCloseable，按资源声明的逆序关闭。正文异常和关闭异常同时出现时，关闭异常可记录为 suppressed，排障不能只看最外层消息。包装流通常负责关闭底层流，不要把标准输入或共享输出的所有权随意交给局部方法。 "
      },
      {
        "title": "finally 的边界",
        "anchor": "finally-的边界",
        "level": 2,
        "text": "  正常返回、抛异常时通常执行 finally；JVM 强制终止、进程崩溃或永不离开的循环都可能让它没有机会运行。因此不能宣称“只有 System.exit 这一个例外”。不要在 finally 中 return，它可能覆盖返回值或吞掉异常。 "
      },
      {
        "title": "业务层如何处理",
        "anchor": "业务层如何处理",
        "level": 2,
        "text": "  库存不足可以转换成明确业务异常；数据库断线应保留 cause 并按系统故障处理。每层只 printStackTrace 再返回 null，会丢掉失败语义，最终可能以 NPE 结束。选择能恢复、能补充语义或对外形成响应的边界处理一次，日志避免重复打印。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：异常 - AutoCloseable API - Files API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】throws 会主动创建并抛出异常吗？ 2. 【应用】什么时候应该包装异常并保留 cause？ 3. 【应用】大文件导出为何不能总用 readAllLines？ 4. 【深入】try-with-resources 如何处理关闭时再次发生的异常？ 5. 【深入】finally 中 return 有什么风险？ "
      }
    ],
    "questions": [
      {
        "id": "69f80d4884322b62",
        "text": "【基础】throws 会主动创建并抛出异常吗？"
      },
      {
        "id": "70eae071612b90bd",
        "text": "【应用】什么时候应该包装异常并保留 cause？"
      },
      {
        "id": "c98515f0f8b35ce2",
        "text": "【应用】大文件导出为何不能总用 readAllLines？"
      },
      {
        "id": "f45cf6b439593423",
        "text": "【深入】try-with-resources 如何处理关闭时再次发生的异常？"
      },
      {
        "id": "a8fb1081adaaec4c",
        "text": "【深入】finally 中 return 有什么风险？"
      }
    ],
    "searchText": "异常传播与资源清理 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 谁必须处理 throwable 下的 runtimeexception 家族与 error 家族属于非受检异常，编译器不强制捕获或声明；其余受检异常必须捕获或通过 throws 传播。error 通常表示严重运行问题，不应常规吞掉，但“任何 error 都无法捕获”并非语言规则。 throw 真正抛出对象；throws 只是方法声明，不主动触发异常。运行时异常无需层层声明也会沿调用栈传播。catch 要把子类型放在父类型前，否则后续分支不可达。 原稿包装 unsupportedencodingexception 成 runtimeexception 后，调用方仍专门捕获已不可能抛出的受检异常，示例无法正确编译；新代码使用明确 charset，避免制造这个无效异常路径。 读取订单导出文件 java static list readorders(path file) throws ioexception { try (bufferedreader reader = files.newbufferedreader(file, standardcharsets.utf_8)) { list lines = new arraylist< (); string line; while ((line = reader.readline()) != null) lines.add(line); return lines; } } 文本需要编解码，图片、压缩文件等用字节流。reader 的 read() 终止标记为 -1，readline() 为 null。大文件应流式逐条处理而非全部收集到内存；读取网络数据还需要超时、大小上限和取消能力。 try-with-resources 管理 autocloseable，按资源声明的逆序关闭。正文异常和关闭异常同时出现时，关闭异常可记录为 suppressed，排障不能只看最外层消息。包装流通常负责关闭底层流，不要把标准输入或共享输出的所有权随意交给局部方法。 finally 的边界 正常返回、抛异常时通常执行 finally；jvm 强制终止、进程崩溃或永不离开的循环都可能让它没有机会运行。因此不能宣称“只有 system.exit 这一个例外”。不要在 finally 中 return，它可能覆盖返回值或吞掉异常。 业务层如何处理 库存不足可以转换成明确业务异常；数据库断线应保留 cause 并按系统故障处理。每层只 printstacktrace 再返回 null，会丢掉失败语义，最终可能以 npe 结束。选择能恢复、能补充语义或对外形成响应的边界处理一次，日志避免重复打印。 参考资料 - jls 17：异常 - autocloseable api - files api 模拟面试问题 1. 【基础】throws 会主动创建并抛出异常吗？ 2. 【应用】什么时候应该包装异常并保留 cause？ 3. 【应用】大文件导出为何不能总用 readalllines？ 4. 【深入】try-with-resources 如何处理关闭时再次发生的异常？ 5. 【深入】finally 中 return 有什么风险？"
  },
  {
    "id": "java-collections",
    "version": "d4404184cfba",
    "md": "learning/courses/java-basics/07-java-collections.md",
    "title": "集合选择与相等性",
    "description": "围绕订单列表、去重和索引理解集合契约与复杂度。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 7,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "根据操作选择结构",
        "anchor": "根据操作选择结构",
        "level": 2,
        "text": "  List 表达有次序的元素序列且可重复；Set 表达不重复；Map 存键值映射，并不继承 Collection。Queue 并非都先进先出，PriorityQueue 按优先级出队，其迭代顺序也不保证全局排序；双端队列 ArrayDeque 可承担普通队列或栈。  ArrayList 随机访问 O(1)，尾部追加均摊 O(1)，中间插删一般 O(n)。LinkedList 找到指定下标要 O(n)，只有已定位节点附近操作才可能 O(1)。不能仅因“频繁插入”就直接推荐链表，还要看定位成本与内存局部性。  集合底层不止数组、链表和红黑树：还有哈希表、堆、位向量等。API 契约与 JDK 具体扩容倍率分开学习，扩容细节不是 Java 语言承诺。 "
      },
      {
        "title": "实际开发：批量查商品",
        "anchor": "实际开发批量查商品",
        "level": 2,
        "text": "  java Set ids = new LinkedHashSet< (requestedIds); Map byId = new HashMap< (); for (Product p : products) byId.put(p.id(), p); List ordered = new ArrayList< (); for (Long id : ids) { Product p = byId.get(id); if (p != null) ordered.add(p); }   用 LinkedHashSet 保留首次请求顺序并去重，Map 提供查找。HashMap 通常查询近似 O(1)，但依赖哈希分布；碰撞、比较和扩容有成本。集合规模小时，可读性通常比预先微调容量更重要。 "
      },
      {
        "title": "equals 与 hashCode",
        "anchor": "equals-与-hashcode",
        "level": 2,
        "text": "  哈希集合要求 equals 相等的对象具有相同 hashCode，反过来不成立。作为 key 的业务字段若加入后变化，可能导致“看起来存在却找不到”。使用不可变 key 或专门 ID，避免可变 Entity 直接充当键。  TreeMap / TreeSet 以比较结果判断排序位置和重复性；比较器与 equals 不一致时要了解其后果。比较数值别用减法造成溢出。 "
      },
      {
        "title": "修改与只读",
        "anchor": "修改与只读",
        "level": 2,
        "text": "  遍历删除可用 Iterator.remove、removeIf 或正确设计的下标循环，并非只能用迭代器。fail-fast 是尽力检测错误，不能当同步机制。  Arrays.asList 是固定长度、背靠原数组的列表，能 set 但不能增删；List.of 不可修改且拒绝 null；不可修改容器不等于内部元素深度不可变。跨线程共享时还需安全发布与并发设计，普通 HashMap 不是共享写入方案。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Collections Framework - HashMap API - PriorityQueue API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Map 为什么不属于 Collection？ 2. 【应用】批量去重并保持请求顺序选择什么集合？ 3. 【应用】为何修改 HashMap key 的字段可能导致查找失败？ 4. 【深入】PriorityQueue 的遍历结果为什么不一定有序？ 5. 【深入】固定长度、不可修改与深度不可变有什么区别？ "
      }
    ],
    "questions": [
      {
        "id": "728de88f7e1045de",
        "text": "【基础】Map 为什么不属于 Collection？"
      },
      {
        "id": "269c27b6c81df772",
        "text": "【应用】批量去重并保持请求顺序选择什么集合？"
      },
      {
        "id": "da30e50090aed353",
        "text": "【应用】为何修改 HashMap key 的字段可能导致查找失败？"
      },
      {
        "id": "231e1125f1697ec5",
        "text": "【深入】PriorityQueue 的遍历结果为什么不一定有序？"
      },
      {
        "id": "dd0529952b5cea3c",
        "text": "【深入】固定长度、不可修改与深度不可变有什么区别？"
      }
    ],
    "searchText": "集合选择与相等性 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 根据操作选择结构 list 表达有次序的元素序列且可重复；set 表达不重复；map 存键值映射，并不继承 collection。queue 并非都先进先出，priorityqueue 按优先级出队，其迭代顺序也不保证全局排序；双端队列 arraydeque 可承担普通队列或栈。 arraylist 随机访问 o(1)，尾部追加均摊 o(1)，中间插删一般 o(n)。linkedlist 找到指定下标要 o(n)，只有已定位节点附近操作才可能 o(1)。不能仅因“频繁插入”就直接推荐链表，还要看定位成本与内存局部性。 集合底层不止数组、链表和红黑树：还有哈希表、堆、位向量等。api 契约与 jdk 具体扩容倍率分开学习，扩容细节不是 java 语言承诺。 实际开发：批量查商品 java set ids = new linkedhashset< (requestedids); map byid = new hashmap< (); for (product p : products) byid.put(p.id(), p); list ordered = new arraylist< (); for (long id : ids) { product p = byid.get(id); if (p != null) ordered.add(p); } 用 linkedhashset 保留首次请求顺序并去重，map 提供查找。hashmap 通常查询近似 o(1)，但依赖哈希分布；碰撞、比较和扩容有成本。集合规模小时，可读性通常比预先微调容量更重要。 equals 与 hashcode 哈希集合要求 equals 相等的对象具有相同 hashcode，反过来不成立。作为 key 的业务字段若加入后变化，可能导致“看起来存在却找不到”。使用不可变 key 或专门 id，避免可变 entity 直接充当键。 treemap / treeset 以比较结果判断排序位置和重复性；比较器与 equals 不一致时要了解其后果。比较数值别用减法造成溢出。 修改与只读 遍历删除可用 iterator.remove、removeif 或正确设计的下标循环，并非只能用迭代器。fail-fast 是尽力检测错误，不能当同步机制。 arrays.aslist 是固定长度、背靠原数组的列表，能 set 但不能增删；list.of 不可修改且拒绝 null；不可修改容器不等于内部元素深度不可变。跨线程共享时还需安全发布与并发设计，普通 hashmap 不是共享写入方案。 参考资料 - collections framework - hashmap api - priorityqueue api 模拟面试问题 1. 【基础】map 为什么不属于 collection？ 2. 【应用】批量去重并保持请求顺序选择什么集合？ 3. 【应用】为何修改 hashmap key 的字段可能导致查找失败？ 4. 【深入】priorityqueue 的遍历结果为什么不一定有序？ 5. 【深入】固定长度、不可修改与深度不可变有什么区别？"
  },
  {
    "id": "java-generics",
    "version": "307bd6cf48a4",
    "md": "learning/courses/java-basics/08-java-generics.md",
    "title": "泛型、通配符与类型擦除",
    "description": "用分页结果和批量处理理解类型安全及 PECS。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 8,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "泛型保护边界",
        "anchor": "泛型保护边界",
        "level": 2,
        "text": "  List 把元素类型约束提前到编译期，减少强转与运行时错误。List 不是 List 的子类型，否则可向整数列表塞入 Double。数组协变是不同机制，可能在运行时抛 ArrayStoreException，不能套用到泛型。  java record PageResult (long total, List records) {} static void copy(List from, List to) { for (T value : from) to.add(value); }   生产者 extends：能安全读为上界类型，不能随意放入某个具体子类型；消费者 super：能写入 T，读出来通常只能视为 Object。PECS 是 API 设计提示，不是所有出现 extends 都“绝不能写任何东西”的绝对规则，例如 null 或合法删除操作另有契约。 "
      },
      {
        "title": "实际开发：统一分页",
        "anchor": "实际开发统一分页",
        "level": 2,
        "text": "  PageResult 和 PageResult 共享分页结构，仍保留各自 records 的编译期类型。不要用原始类型 PageResult 或 List 抹去检查，再靠调用方猜测。若一个方法同时读取并修改同一种元素，明确 List 往往比通配符更好。 "
      },
      {
        "title": "擦除的含义",
        "anchor": "擦除的含义",
        "level": 2,
        "text": "  大部分类型参数在字节码中擦除为上界或 Object，并伴随必要强转、桥接方法。不能写 new T()、new List [10] 或 instanceof List 。但 class 文件可保留泛型签名元数据，反射能在部分声明位置读取 ParameterizedType；不能说运行时“一切泛型信息都完全消失”。  反射读取到 List 字段声明，并不意味着任意 List 实例都能报告实际元素类型。JSON 框架处理 List 时常需类型令牌，正因为只传 List.class 无法完整表达元素类型。 "
      },
      {
        "title": "边界与误区",
        "anchor": "边界与误区",
        "level": 2,
        "text": "  泛型类型实参不能直接是 int，要使用 Integer；可变参数叠加泛型可能产生堆污染。不要为消除警告大范围加 SuppressWarnings，先定位是哪一处突破类型边界。泛型本身也不提供线程安全或运行时内容校验。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：类型变量与参数化类型 - Oracle：通配符 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】为什么 List 不能赋值给 List ？ 2. 【应用】批量复制 API 为什么适合使用 extends 和 super？ 3. 【应用】分页对象如何保留元素类型约束？ 4. 【深入】类型擦除与反射读取泛型声明信息矛盾吗？ "
      }
    ],
    "questions": [
      {
        "id": "b5e7f318477ce8a6",
        "text": "【基础】为什么 List 不能赋值给 List ？"
      },
      {
        "id": "80c086df465064dc",
        "text": "【应用】批量复制 API 为什么适合使用 extends 和 super？"
      },
      {
        "id": "557effc2ea5ddfa9",
        "text": "【应用】分页对象如何保留元素类型约束？"
      },
      {
        "id": "1a069649d9b2c9ec",
        "text": "【深入】类型擦除与反射读取泛型声明信息矛盾吗？"
      }
    ],
    "searchText": "泛型、通配符与类型擦除 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 泛型保护边界 list 把元素类型约束提前到编译期，减少强转与运行时错误。list 不是 list 的子类型，否则可向整数列表塞入 double。数组协变是不同机制，可能在运行时抛 arraystoreexception，不能套用到泛型。 java record pageresult (long total, list records) {} static void copy(list from, list to) { for (t value : from) to.add(value); } 生产者 extends：能安全读为上界类型，不能随意放入某个具体子类型；消费者 super：能写入 t，读出来通常只能视为 object。pecs 是 api 设计提示，不是所有出现 extends 都“绝不能写任何东西”的绝对规则，例如 null 或合法删除操作另有契约。 实际开发：统一分页 pageresult 和 pageresult 共享分页结构，仍保留各自 records 的编译期类型。不要用原始类型 pageresult 或 list 抹去检查，再靠调用方猜测。若一个方法同时读取并修改同一种元素，明确 list 往往比通配符更好。 擦除的含义 大部分类型参数在字节码中擦除为上界或 object，并伴随必要强转、桥接方法。不能写 new t()、new list [10] 或 instanceof list 。但 class 文件可保留泛型签名元数据，反射能在部分声明位置读取 parameterizedtype；不能说运行时“一切泛型信息都完全消失”。 反射读取到 list 字段声明，并不意味着任意 list 实例都能报告实际元素类型。json 框架处理 list 时常需类型令牌，正因为只传 list.class 无法完整表达元素类型。 边界与误区 泛型类型实参不能直接是 int，要使用 integer；可变参数叠加泛型可能产生堆污染。不要为消除警告大范围加 suppresswarnings，先定位是哪一处突破类型边界。泛型本身也不提供线程安全或运行时内容校验。 参考资料 - jls 17：类型变量与参数化类型 - oracle：通配符 模拟面试问题 1. 【基础】为什么 list 不能赋值给 list ？ 2. 【应用】批量复制 api 为什么适合使用 extends 和 super？ 3. 【应用】分页对象如何保留元素类型约束？ 4. 【深入】类型擦除与反射读取泛型声明信息矛盾吗？"
  },
  {
    "id": "java-streams",
    "version": "f9e6f4c2f4ab",
    "md": "learning/courses/java-basics/09-java-streams.md",
    "title": "Stream 与展示模型转换",
    "description": "将筛选、映射和收集组成清晰的数据管道。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 9,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "Stream 是计算描述",
        "anchor": "stream-是计算描述",
        "level": 2,
        "text": "  Stream 不存储数据，不是可重复消费的集合；中间操作形成管道，终止操作触发求值。filter 筛选，map 转换，flatMap 展开多层，sorted 排序。forEach 是消费动作，不能把它当作生成新元素的 map。  java record Order(long id, boolean paid, BigDecimal amount) {} record OrderVO(long id, String amount) {} List result = orders.stream() .filter(Order::paid) .sorted(Comparator.comparingLong(Order::id).reversed()) .map(o - new OrderVO(o.id(), o.amount().toPlainString())) .toList();   这里把数据库模型转换成响应模型，只暴露 id 和金额文本。不是“Stream 自动防止泄漏”，而是 map 中显式选择了字段。大量筛选和分页应尽量交给数据库，不要先把全表读到 JVM 再 filter。 "
      },
      {
        "title": "结果集合的契约",
        "anchor": "结果集合的契约",
        "level": 2,
        "text": "  Java 16 起 Stream.toList 返回不可修改 List；Collectors.toList 不保证实现和可修改性。明确需要可修改列表时使用 toCollection(ArrayList::new)。List.of 从 Java 9 提供，也不可修改，不能机械把 Java 8 教程代码替换而忽略调用方后续 add。  中间操作惰性不意味着每个 Lambda 保证执行一次：优化和短路会影响调用次数。因此不要在 map、peek 中依赖发送短信等必须发生的副作用。 "
      },
      {
        "title": "实际开发的陷阱",
        "anchor": "实际开发的陷阱",
        "level": 2,
        "text": "  不要在过滤中修改原始集合，也不要把普通 ArrayList 作为 parallelStream 的共享累加器。并行流不是“免费加速”：拆分、合并、线程争用与阻塞 IO 可能让它更慢，还可能影响公共 ForkJoinPool 的其他任务。  toMap 遇重复键要明确合并规则，否则可能抛异常。订单行按商品归并时，保留第一条、求和或报错是业务决定，不能随意用 (a,b)- a 掩盖重复数据。 "
      },
      {
        "title": "可读性选择",
        "anchor": "可读性选择",
        "level": 2,
        "text": "  三步以内的筛选转换通常清晰；多重异常、提前退出和复杂状态更新用普通循环可能更容易维护。学习目标是解释每一步数据如何变化，而非把所有循环改写成链式调用。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Java 17 Stream API - Collectors API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】中间操作和终止操作有什么区别？ 2. 【应用】把 Entity 转成 VO 时如何控制暴露字段？ 3. 【应用】toMap 遇到重复键应该怎样决定行为？ 4. 【深入】为什么不能在 peek 中依赖必须执行的业务副作用？ 5. 【深入】parallelStream 处理阻塞接口可能有哪些问题？ "
      }
    ],
    "questions": [
      {
        "id": "e24f32c4e6388b54",
        "text": "【基础】中间操作和终止操作有什么区别？"
      },
      {
        "id": "22b41a4f4d1be9c2",
        "text": "【应用】把 Entity 转成 VO 时如何控制暴露字段？"
      },
      {
        "id": "7fdf16ccac474f15",
        "text": "【应用】toMap 遇到重复键应该怎样决定行为？"
      },
      {
        "id": "534902961cf16e1e",
        "text": "【深入】为什么不能在 peek 中依赖必须执行的业务副作用？"
      },
      {
        "id": "51f77cbc89580f46",
        "text": "【深入】parallelStream 处理阻塞接口可能有哪些问题？"
      }
    ],
    "searchText": "stream 与展示模型转换 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 stream 是计算描述 stream 不存储数据，不是可重复消费的集合；中间操作形成管道，终止操作触发求值。filter 筛选，map 转换，flatmap 展开多层，sorted 排序。foreach 是消费动作，不能把它当作生成新元素的 map。 java record order(long id, boolean paid, bigdecimal amount) {} record ordervo(long id, string amount) {} list result = orders.stream() .filter(order::paid) .sorted(comparator.comparinglong(order::id).reversed()) .map(o - new ordervo(o.id(), o.amount().toplainstring())) .tolist(); 这里把数据库模型转换成响应模型，只暴露 id 和金额文本。不是“stream 自动防止泄漏”，而是 map 中显式选择了字段。大量筛选和分页应尽量交给数据库，不要先把全表读到 jvm 再 filter。 结果集合的契约 java 16 起 stream.tolist 返回不可修改 list；collectors.tolist 不保证实现和可修改性。明确需要可修改列表时使用 tocollection(arraylist::new)。list.of 从 java 9 提供，也不可修改，不能机械把 java 8 教程代码替换而忽略调用方后续 add。 中间操作惰性不意味着每个 lambda 保证执行一次：优化和短路会影响调用次数。因此不要在 map、peek 中依赖发送短信等必须发生的副作用。 实际开发的陷阱 不要在过滤中修改原始集合，也不要把普通 arraylist 作为 parallelstream 的共享累加器。并行流不是“免费加速”：拆分、合并、线程争用与阻塞 io 可能让它更慢，还可能影响公共 forkjoinpool 的其他任务。 tomap 遇重复键要明确合并规则，否则可能抛异常。订单行按商品归并时，保留第一条、求和或报错是业务决定，不能随意用 (a,b)- a 掩盖重复数据。 可读性选择 三步以内的筛选转换通常清晰；多重异常、提前退出和复杂状态更新用普通循环可能更容易维护。学习目标是解释每一步数据如何变化，而非把所有循环改写成链式调用。 参考资料 - java 17 stream api - collectors api 模拟面试问题 1. 【基础】中间操作和终止操作有什么区别？ 2. 【应用】把 entity 转成 vo 时如何控制暴露字段？ 3. 【应用】tomap 遇到重复键应该怎样决定行为？ 4. 【深入】为什么不能在 peek 中依赖必须执行的业务副作用？ 5. 【深入】parallelstream 处理阻塞接口可能有哪些问题？"
  },
  {
    "id": "java-reflection",
    "version": "e4dacc3844e4",
    "md": "learning/courses/java-basics/10-java-reflection.md",
    "title": "JavaBean、record 与反射",
    "description": "理解框架读取元数据的能力，同时识别模块访问限制。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 10,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "约定与语言能力",
        "anchor": "约定与语言能力",
        "level": 2,
        "text": "  JavaBean 是围绕属性访问等形成的组件约定，不是关键字，也不等同于 Spring Bean。getter/setter、无参构造是常见数据绑定方式，但 Spring 管理对象不要求每个类都按这一模板编写。Java 17 的 record 适合简洁的不可变数据载体，其访问器是 name()，不是 getName()；引用组件仍可能指向可变对象。  反射通过 Class、Constructor、Method、Field 在运行时查询和操作类型。Class.forName(name) 通常还会触发初始化，Type.class 与已存在对象的 getClass 有不同获取方式。 "
      },
      {
        "title": "一个可运行的最小例子",
        "anchor": "一个可运行的最小例子",
        "level": 2,
        "text": "  java import java.lang.reflect.Method; public class ReflectDemo { public record User(String name) {} public static void main(String[] args) throws Exception { User user = new User(\"Roger\"); Method accessor = User.class.getMethod(\"name\"); System.out.println(accessor.invoke(user)); } }   getMethods 返回公开方法并包含继承成员；getDeclaredMethods 返回本类声明方法，不自动包含父类，也不代表均可访问。Method.invoke 的目标方法异常包装在 InvocationTargetException 中，要查看 cause 区分业务异常与反射调用错误。 "
      },
      {
        "title": "实际开发：JSON 转换与框架",
        "anchor": "实际开发json-转换与框架",
        "level": 2,
        "text": "  序列化框架可以检查属性、注解、构造器，生成或缓存访问逻辑。编译期注解处理与运行时反射不同，Lombok 等生成代码不应统称为反射。Spring 也可能通过工厂方法、Supplier、预处理元数据创建对象，并非“只靠反射 new”。  setAccessible(true) 不是任意绕过封装的万能钥匙。Java 17 模块强封装可能拒绝深反射；trySetAccessible 可返回失败。不要把打开整个 JDK 模块作为日常业务默认配置。 "
      },
      {
        "title": "性能与故障边界",
        "anchor": "性能与故障边界",
        "level": 2,
        "text": "  原稿“反射固定慢 10—100 倍”缺少可复现实验，删除这个断言。开销依调用方式、缓存、JDK 和 JIT 而变化；先避免热路径反复查找成员，再按实际需求测量。  ClassNotFoundException 通常是显式按名加载未找到；NoClassDefFoundError 可能来自运行时依赖缺失，也可能与此前初始化失败相关，不能只定义为“类初始化失败”。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - java.lang.reflect API - AccessibleObject API - JLS 17：record 类 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】JavaBean 和 Spring Bean 是同一概念吗？ 2. 【应用】getMethods 与 getDeclaredMethods 如何选择？ 3. 【应用】反射调用业务方法失败后应检查哪一层异常？ 4. 【深入】setAccessible 在 Java 17 为什么可能失败？ 5. 【深入】record 为什么不是所有层次的深度不可变对象？ "
      }
    ],
    "questions": [
      {
        "id": "97a0ac130fe5fd5c",
        "text": "【基础】JavaBean 和 Spring Bean 是同一概念吗？"
      },
      {
        "id": "30dbddcbce266b82",
        "text": "【应用】getMethods 与 getDeclaredMethods 如何选择？"
      },
      {
        "id": "845cc37c27d26ab9",
        "text": "【应用】反射调用业务方法失败后应检查哪一层异常？"
      },
      {
        "id": "fde085996a23eeeb",
        "text": "【深入】setAccessible 在 Java 17 为什么可能失败？"
      },
      {
        "id": "46418dd3bb83057c",
        "text": "【深入】record 为什么不是所有层次的深度不可变对象？"
      }
    ],
    "searchText": "javabean、record 与反射 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 约定与语言能力 javabean 是围绕属性访问等形成的组件约定，不是关键字，也不等同于 spring bean。getter/setter、无参构造是常见数据绑定方式，但 spring 管理对象不要求每个类都按这一模板编写。java 17 的 record 适合简洁的不可变数据载体，其访问器是 name()，不是 getname()；引用组件仍可能指向可变对象。 反射通过 class、constructor、method、field 在运行时查询和操作类型。class.forname(name) 通常还会触发初始化，type.class 与已存在对象的 getclass 有不同获取方式。 一个可运行的最小例子 java import java.lang.reflect.method; public class reflectdemo { public record user(string name) {} public static void main(string[] args) throws exception { user user = new user(\"roger\"); method accessor = user.class.getmethod(\"name\"); system.out.println(accessor.invoke(user)); } } getmethods 返回公开方法并包含继承成员；getdeclaredmethods 返回本类声明方法，不自动包含父类，也不代表均可访问。method.invoke 的目标方法异常包装在 invocationtargetexception 中，要查看 cause 区分业务异常与反射调用错误。 实际开发：json 转换与框架 序列化框架可以检查属性、注解、构造器，生成或缓存访问逻辑。编译期注解处理与运行时反射不同，lombok 等生成代码不应统称为反射。spring 也可能通过工厂方法、supplier、预处理元数据创建对象，并非“只靠反射 new”。 setaccessible(true) 不是任意绕过封装的万能钥匙。java 17 模块强封装可能拒绝深反射；trysetaccessible 可返回失败。不要把打开整个 jdk 模块作为日常业务默认配置。 性能与故障边界 原稿“反射固定慢 10—100 倍”缺少可复现实验，删除这个断言。开销依调用方式、缓存、jdk 和 jit 而变化；先避免热路径反复查找成员，再按实际需求测量。 classnotfoundexception 通常是显式按名加载未找到；noclassdeffounderror 可能来自运行时依赖缺失，也可能与此前初始化失败相关，不能只定义为“类初始化失败”。 参考资料 - java.lang.reflect api - accessibleobject api - jls 17：record 类 模拟面试问题 1. 【基础】javabean 和 spring bean 是同一概念吗？ 2. 【应用】getmethods 与 getdeclaredmethods 如何选择？ 3. 【应用】反射调用业务方法失败后应检查哪一层异常？ 4. 【深入】setaccessible 在 java 17 为什么可能失败？ 5. 【深入】record 为什么不是所有层次的深度不可变对象？"
  },
  {
    "id": "java-time",
    "version": "499366d9f008",
    "md": "learning/courses/java-basics/11-java-time.md",
    "title": "时间、正则与边界输入",
    "description": "用订单截止时间和表单校验理解时间模型与字符串规则。",
    "subject": "java-basics",
    "kind": "系统课程",
    "order": 11,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "时间轴与日历",
        "anchor": "时间轴与日历",
        "level": 2,
        "text": "  LocalDate 表示日期，LocalDateTime 表示无时区的日期时间，Instant 表示绝对时刻；OffsetDateTime 带 UTC 偏移，ZonedDateTime 带地区时区及历史规则。相同 LocalDateTime 在不同时区对应不同 Instant，夏令时切换处甚至可能不存在或对应两个时刻。  java Instant createdAt = clock.instant(); Instant expiresAt = createdAt.plus(Duration.ofMinutes(15)); boolean expired = !clock.instant().isBefore(expiresAt); ZonedDateTime display = createdAt.atZone(ZoneId.of(\"Asia/Shanghai\"));   订单过期按绝对时刻比较，用户展示时再转换时区。Clock 由调用方提供，可在测试中固定时间，避免 sleep 等待 15 分钟。每日结算日则需要先定义业务时区和日历边界，不应一律把“一天”视为任何环境下都等于 24 小时。 "
      },
      {
        "title": "格式与存储",
        "anchor": "格式与存储",
        "level": 2,
        "text": "  DateTimeFormatter 不可变且线程安全；自定义严格日期解析可用 uuuu-MM-dd，注意 MM 月份、mm 分钟、HH 24 小时制、YYYY 周基年。旧 SimpleDateFormat 可变且不适合直接共享。  API 应注明秒还是毫秒、是否含偏移。MySQL DATETIME 不自动保存地区时区语义，数据库与 JDBC 的约定须共同检查。跨区展示不要依赖服务器默认时区。 "
      },
      {
        "title": "正则两层转义",
        "anchor": "正则两层转义",
        "level": 2,
        "text": "  java Pattern digits = Pattern.compile(\"\\\\d{6}\"); boolean valid = input != null && digits.matcher(input).matches(); Matcher matcher = Pattern.compile(\"order-(\\\\d+)\").matcher(\"order-123\"); if (matcher.find()) System.out.println(matcher.group(1));   Java 字符串先解释反斜杠，正则引擎再解释。matches 检查完整输入，find 查找下一处匹配。固定 Pattern 可复用，Matcher 带匹配状态不应跨线程共享。 "
      },
      {
        "title": "实际开发的限制",
        "anchor": "实际开发的限制",
        "level": 2,
        "text": "  注册邮箱或手机号的正则只能校验格式，不证明地址真实、号码归属或用户身份。处理不可信长输入时先限制长度，避免复杂回溯正则耗尽 CPU；不要用一个巨大正则解析完整 HTML 或复杂协议。  UUID.randomUUID 使用强伪随机来源，不能错误写成“没有安全随机性”；但 ID 和登录凭证用途不同。需要可撤销、一次性重置凭据时，除了随机性还要设计到期、哈希存储、使用次数和泄漏处理。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - java.time 包 - Pattern API - UUID API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】LocalDateTime 与 Instant 的区别是什么？ 2. 【应用】怎样测试订单恰好在到期时刻的行为？ 3. 【应用】matches 与 find 有什么区别？ 4. 【深入】为什么有时区的一个日历日不总是 24 小时？ 5. 【深入】邮箱正则校验通过后还缺什么验证？ "
      }
    ],
    "questions": [
      {
        "id": "59936ec1aa5a5a39",
        "text": "【基础】LocalDateTime 与 Instant 的区别是什么？"
      },
      {
        "id": "71ae36aea1764b6c",
        "text": "【应用】怎样测试订单恰好在到期时刻的行为？"
      },
      {
        "id": "deb5031f1edd4368",
        "text": "【应用】matches 与 find 有什么区别？"
      },
      {
        "id": "08bf9313d1ffdf8a",
        "text": "【深入】为什么有时区的一个日历日不总是 24 小时？"
      },
      {
        "id": "138a2530977c2335",
        "text": "【深入】邮箱正则校验通过后还缺什么验证？"
      }
    ],
    "searchText": "时间、正则与边界输入 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 时间轴与日历 localdate 表示日期，localdatetime 表示无时区的日期时间，instant 表示绝对时刻；offsetdatetime 带 utc 偏移，zoneddatetime 带地区时区及历史规则。相同 localdatetime 在不同时区对应不同 instant，夏令时切换处甚至可能不存在或对应两个时刻。 java instant createdat = clock.instant(); instant expiresat = createdat.plus(duration.ofminutes(15)); boolean expired = !clock.instant().isbefore(expiresat); zoneddatetime display = createdat.atzone(zoneid.of(\"asia/shanghai\")); 订单过期按绝对时刻比较，用户展示时再转换时区。clock 由调用方提供，可在测试中固定时间，避免 sleep 等待 15 分钟。每日结算日则需要先定义业务时区和日历边界，不应一律把“一天”视为任何环境下都等于 24 小时。 格式与存储 datetimeformatter 不可变且线程安全；自定义严格日期解析可用 uuuu-mm-dd，注意 mm 月份、mm 分钟、hh 24 小时制、yyyy 周基年。旧 simpledateformat 可变且不适合直接共享。 api 应注明秒还是毫秒、是否含偏移。mysql datetime 不自动保存地区时区语义，数据库与 jdbc 的约定须共同检查。跨区展示不要依赖服务器默认时区。 正则两层转义 java pattern digits = pattern.compile(\"\\\\d{6}\"); boolean valid = input != null && digits.matcher(input).matches(); matcher matcher = pattern.compile(\"order-(\\\\d+)\").matcher(\"order-123\"); if (matcher.find()) system.out.println(matcher.group(1)); java 字符串先解释反斜杠，正则引擎再解释。matches 检查完整输入，find 查找下一处匹配。固定 pattern 可复用，matcher 带匹配状态不应跨线程共享。 实际开发的限制 注册邮箱或手机号的正则只能校验格式，不证明地址真实、号码归属或用户身份。处理不可信长输入时先限制长度，避免复杂回溯正则耗尽 cpu；不要用一个巨大正则解析完整 html 或复杂协议。 uuid.randomuuid 使用强伪随机来源，不能错误写成“没有安全随机性”；但 id 和登录凭证用途不同。需要可撤销、一次性重置凭据时，除了随机性还要设计到期、哈希存储、使用次数和泄漏处理。 参考资料 - java.time 包 - pattern api - uuid api 模拟面试问题 1. 【基础】localdatetime 与 instant 的区别是什么？ 2. 【应用】怎样测试订单恰好在到期时刻的行为？ 3. 【应用】matches 与 find 有什么区别？ 4. 【深入】为什么有时区的一个日历日不总是 24 小时？ 5. 【深入】邮箱正则校验通过后还缺什么验证？"
  },
  {
    "id": "java-threads",
    "version": "548daaba97a2",
    "md": "learning/courses/java-concurrency/01-java-threads.md",
    "title": "线程、锁与协作取消",
    "description": "从库存扣减理解临界区、互斥和中断协议。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "并发问题来自共享状态",
        "anchor": "并发问题来自共享状态",
        "level": 2,
        "text": "  进程提供资源和隔离边界，线程是进程内执行路径。调用 run 是普通方法调用，start 才请求启动新线程；同一 Thread 对象不能重复 start。并发不一定并行，多线程也不保证更快。  count++ 包含读、计算、写回，两个线程可读到同一旧值，产生丢更新。锁的保护对象是业务不变量，而不是“某一行看起来危险的代码”。  java final class Stock { private int remaining = 1; synchronized boolean reserve() { if (remaining <= 0) return false; remaining--; return true; } }   检查与扣减在同一临界区，且所有相关访问遵守同一把锁。不同 Stock 实例的实例锁不互斥；静态同步方法锁住对应 Class 对象。JVM 锁不能阻止另一台服务器修改数据库库存，真实下单需数据库条件更新与事务。 "
      },
      {
        "title": "synchronized 与显式锁",
        "anchor": "synchronized-与显式锁",
        "level": 2,
        "text": "  synchronized 在正常或异常离开时释放监视器，支持重入。ReentrantLock 提供尝试获取、超时和可中断获取，必须在成功获取后用 finally unlock。需要等待锁时选择 lockInterruptibly，并合理传播中断。  固定获取多把锁的顺序可以减少循环等待；避免持锁调用耗时远程服务。排障看线程转储中的持有者和等待关系，不是简单把“线程很多”当成死锁。 "
      },
      {
        "title": "等待与通知",
        "anchor": "等待与通知",
        "level": 2,
        "text": "  wait 必须持有对象监视器，并会释放该监视器；sleep 不释放已持有锁。等待条件必须用 while 检查，防止虚假唤醒和唤醒后条件已被其他线程改变。notify 不是立刻转交锁，等待线程仍需重新竞争。  实际生产消费优先 BlockingQueue，而非手写 wait/notify。学习底层目的是理解协议和故障，不是重复实现成熟容器。 "
      },
      {
        "title": "取消是协作协议",
        "anchor": "取消是协作协议",
        "level": 2,
        "text": "  interrupt 不是强制杀线程。许多阻塞方法收到中断抛 InterruptedException 并清除状态；不能处理时通常向上传播，或恢复中断状态后退出任务。仅恢复状态却继续无限循环也不能完成取消。对阻塞 IO 还需遵循对应 API 的关闭、超时和中断契约。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Thread API - Lock API - Object.wait API) "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】start 与 run 有什么区别？ 2. 【应用】为什么检查库存与扣减必须保护为一个整体？ 3. 【应用】wait 和 sleep 对锁的处理有什么不同？ 4. 【深入】为什么捕获中断后只打印异常可能导致停机失败？ 5. 【深入】如何分析互相等待的两条线程？ "
      }
    ],
    "questions": [
      {
        "id": "1c8b1742eda53074",
        "text": "【基础】start 与 run 有什么区别？"
      },
      {
        "id": "1f9eaa9c48dd11e5",
        "text": "【应用】为什么检查库存与扣减必须保护为一个整体？"
      },
      {
        "id": "bdf04dea46433c73",
        "text": "【应用】wait 和 sleep 对锁的处理有什么不同？"
      },
      {
        "id": "cfc3b24ad3ea2311",
        "text": "【深入】为什么捕获中断后只打印异常可能导致停机失败？"
      },
      {
        "id": "7768108a2bcd8dbb",
        "text": "【深入】如何分析互相等待的两条线程？"
      }
    ],
    "searchText": "线程、锁与协作取消 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 并发问题来自共享状态 进程提供资源和隔离边界，线程是进程内执行路径。调用 run 是普通方法调用，start 才请求启动新线程；同一 thread 对象不能重复 start。并发不一定并行，多线程也不保证更快。 count++ 包含读、计算、写回，两个线程可读到同一旧值，产生丢更新。锁的保护对象是业务不变量，而不是“某一行看起来危险的代码”。 java final class stock { private int remaining = 1; synchronized boolean reserve() { if (remaining <= 0) return false; remaining--; return true; } } 检查与扣减在同一临界区，且所有相关访问遵守同一把锁。不同 stock 实例的实例锁不互斥；静态同步方法锁住对应 class 对象。jvm 锁不能阻止另一台服务器修改数据库库存，真实下单需数据库条件更新与事务。 synchronized 与显式锁 synchronized 在正常或异常离开时释放监视器，支持重入。reentrantlock 提供尝试获取、超时和可中断获取，必须在成功获取后用 finally unlock。需要等待锁时选择 lockinterruptibly，并合理传播中断。 固定获取多把锁的顺序可以减少循环等待；避免持锁调用耗时远程服务。排障看线程转储中的持有者和等待关系，不是简单把“线程很多”当成死锁。 等待与通知 wait 必须持有对象监视器，并会释放该监视器；sleep 不释放已持有锁。等待条件必须用 while 检查，防止虚假唤醒和唤醒后条件已被其他线程改变。notify 不是立刻转交锁，等待线程仍需重新竞争。 实际生产消费优先 blockingqueue，而非手写 wait/notify。学习底层目的是理解协议和故障，不是重复实现成熟容器。 取消是协作协议 interrupt 不是强制杀线程。许多阻塞方法收到中断抛 interruptedexception 并清除状态；不能处理时通常向上传播，或恢复中断状态后退出任务。仅恢复状态却继续无限循环也不能完成取消。对阻塞 io 还需遵循对应 api 的关闭、超时和中断契约。 参考资料 - thread api - lock api - object.wait api) 模拟面试问题 1. 【基础】start 与 run 有什么区别？ 2. 【应用】为什么检查库存与扣减必须保护为一个整体？ 3. 【应用】wait 和 sleep 对锁的处理有什么不同？ 4. 【深入】为什么捕获中断后只打印异常可能导致停机失败？ 5. 【深入】如何分析互相等待的两条线程？"
  },
  {
    "id": "java-jmm",
    "version": "0d77a67b3b80",
    "md": "learning/courses/java-concurrency/02-java-jmm.md",
    "title": "JMM、happens-before 与 volatile",
    "description": "用配置快照发布推导可见性，避免把 JMM 当作硬件缓存图。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "JMM 规定什么",
        "anchor": "jmm-规定什么",
        "level": 2,
        "text": "  JMM 描述共享内存操作允许观察到的行为。堆、栈、方法区属于运行时数据区域，回答数据放哪里；JMM 回答线程间如何合法观察读写。“工作内存”是教学抽象，不能直接等同 CPU 缓存，更不能断言 volatile 每次都访问物理 RAM。  原子性保护不可分割操作，可见性限定读写观察，有序性约束可观察行为。单线程语义允许编译器和硬件优化，但源码先后和现实时间先后都不足以单独建立跨线程同步。 "
      },
      {
        "title": "推导发布关系",
        "anchor": "推导发布关系",
        "level": 2,
        "text": "  java final class ConfigHolder { private Map config = Map.of(); private volatile boolean ready; void publish() { config = Map.of(\"checkout\", \"enabled\"); ready = true; } String read() { return ready ? config.get(\"checkout\") : \"loading\"; } }   限于一次发布且发布后不再修改 config 的场景：写 config → volatile 写 ready → 读取到 true → 读 config，借助程序顺序、volatile 规则和传递性建立 happens-before。ready 为普通字段则缺少这条保证。  常用同步边还包括同一监视器解锁到后续加锁、start 前动作到新线程、线程结束到成功 join 返回。工具类如 Future、并发队列也有各自文档规定的内存一致性效果。 "
      },
      {
        "title": "volatile 适用边界",
        "anchor": "volatile-适用边界",
        "level": 2,
        "text": "  volatile 保证单次访问的语义与安全发布，count++ 仍不是原子操作，if-check-then-set 也不是。原稿“一写多读才可用”只是常见情形，不是语言限制；多写线程能否使用取决于是否存在复合业务不变量。  更清晰的热更新模式是 volatile Map snapshot = Map.of() ，一次构建不可修改快照再替换引用。只给 List 引用加 volatile，不会让后续 list.add 自动线程安全。 "
      },
      {
        "title": "final 与双重检查",
        "anchor": "final-与双重检查",
        "level": 2,
        "text": "  正确构造且未在构造期间逃逸的 final 字段具有特殊可见性保证，但不等于其引用的任意后续变化都可见。双重检查懒加载通常需要 volatile 保证发布，初学者可优先选择静态初始化或已有容器生命周期，减少手工并发状态机。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JLS 17：内存模型与 final 字段 - java.util.concurrent 内存一致性 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】JMM 与 JVM 内存区域有什么区别？ 2. 【应用】请完整推导 ready 为 true 后配置可见的关系。 3. 【应用】volatile List 为什么不能保护 add？ 4. 【深入】happens-before 是墙上时钟的先后吗？ 5. 【深入】构造期间 this 逃逸为何会破坏安全发布？ "
      }
    ],
    "questions": [
      {
        "id": "7afbcd0e09f4c942",
        "text": "【基础】JMM 与 JVM 内存区域有什么区别？"
      },
      {
        "id": "dcd7121ec8c8152b",
        "text": "【应用】请完整推导 ready 为 true 后配置可见的关系。"
      },
      {
        "id": "092e394922f69d73",
        "text": "【应用】volatile List 为什么不能保护 add？"
      },
      {
        "id": "12426b495b7987f8",
        "text": "【深入】happens-before 是墙上时钟的先后吗？"
      },
      {
        "id": "9345516950750814",
        "text": "【深入】构造期间 this 逃逸为何会破坏安全发布？"
      }
    ],
    "searchText": "jmm、happens-before 与 volatile 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 jmm 规定什么 jmm 描述共享内存操作允许观察到的行为。堆、栈、方法区属于运行时数据区域，回答数据放哪里；jmm 回答线程间如何合法观察读写。“工作内存”是教学抽象，不能直接等同 cpu 缓存，更不能断言 volatile 每次都访问物理 ram。 原子性保护不可分割操作，可见性限定读写观察，有序性约束可观察行为。单线程语义允许编译器和硬件优化，但源码先后和现实时间先后都不足以单独建立跨线程同步。 推导发布关系 java final class configholder { private map config = map.of(); private volatile boolean ready; void publish() { config = map.of(\"checkout\", \"enabled\"); ready = true; } string read() { return ready ? config.get(\"checkout\") : \"loading\"; } } 限于一次发布且发布后不再修改 config 的场景：写 config → volatile 写 ready → 读取到 true → 读 config，借助程序顺序、volatile 规则和传递性建立 happens-before。ready 为普通字段则缺少这条保证。 常用同步边还包括同一监视器解锁到后续加锁、start 前动作到新线程、线程结束到成功 join 返回。工具类如 future、并发队列也有各自文档规定的内存一致性效果。 volatile 适用边界 volatile 保证单次访问的语义与安全发布，count++ 仍不是原子操作，if-check-then-set 也不是。原稿“一写多读才可用”只是常见情形，不是语言限制；多写线程能否使用取决于是否存在复合业务不变量。 更清晰的热更新模式是 volatile map snapshot = map.of() ，一次构建不可修改快照再替换引用。只给 list 引用加 volatile，不会让后续 list.add 自动线程安全。 final 与双重检查 正确构造且未在构造期间逃逸的 final 字段具有特殊可见性保证，但不等于其引用的任意后续变化都可见。双重检查懒加载通常需要 volatile 保证发布，初学者可优先选择静态初始化或已有容器生命周期，减少手工并发状态机。 参考资料 - jls 17：内存模型与 final 字段 - java.util.concurrent 内存一致性 模拟面试问题 1. 【基础】jmm 与 jvm 内存区域有什么区别？ 2. 【应用】请完整推导 ready 为 true 后配置可见的关系。 3. 【应用】volatile list 为什么不能保护 add？ 4. 【深入】happens-before 是墙上时钟的先后吗？ 5. 【深入】构造期间 this 逃逸为何会破坏安全发布？"
  },
  {
    "id": "java-juc",
    "version": "57babcb0a128",
    "md": "learning/courses/java-concurrency/03-java-juc.md",
    "title": "原子类、并发容器与限流协作",
    "description": "正确组合 CAS、队列和信号量，不把线程安全方法误当业务原子性。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "CAS 保护一次状态变更",
        "anchor": "cas-保护一次状态变更",
        "level": 2,
        "text": "  CAS 比较当前值与期望值，相等才原子替换。AtomicInteger 的 getAndIncrement 返回旧值，incrementAndGet 返回新值。多个原子方法组合仍可能竞态：get()<10 后 increment 不保证上限 10。  java static boolean acquire(AtomicInteger inFlight, int limit) { for (;;) { int old = inFlight.get(); if (old = limit) return false; if (inFlight.compareAndSet(old, old + 1)) return true; } }   成功后业务结束必须对应释放；这只是单进程并发计数示例，不是跨服务器限流。复杂资源许可通常直接使用 Semaphore，获得许可后 finally release。公平与吞吐也需要按业务权衡。  CAS 看见 A→B→A 时可能漏掉历史变化；需辨认版本时考虑带 stamp 的引用。高竞争重试有 CPU 成本，不能把所有原子 API 都简化成“永远无锁且更快”。LongAdder 适合热点统计，但 sum 不提供原子快照，不适合严格库存余额。 "
      },
      {
        "title": "ConcurrentHashMap 的边界",
        "anchor": "concurrenthashmap-的边界",
        "level": 2,
        "text": "  java counts.computeIfAbsent(route, k - new LongAdder()).increment();   并发 Map 保证各方法契约，不保证先 containsKey 再 put 的整个流程原子。compute 回调保持短小，避免阻塞远程调用或递归更新同一 map。它不允许 null 键和值；迭代通常弱一致，不是整个容器固定快照。 "
      },
      {
        "title": "有界队列形成背压",
        "anchor": "有界队列形成背压",
        "level": 2,
        "text": "  ArrayBlockingQueue 用固定容量限制缓冲。put/take 等待空间或数据，offer/poll 立即失败返回，也有带超时版本。原稿把 offer/poll 一律描述为“不该用于生产消费”不成立：超时或立即拒绝正是许多服务的过载策略。  例如图片压缩生产快于消费者时，无界队列只是把延迟变成内存堆积；有界队列配超时、拒绝和指标，才能明确服务容量。持锁调用 queue.put 可能引发额外死锁风险。 "
      },
      {
        "title": "同步工具怎么选",
        "anchor": "同步工具怎么选",
        "level": 2,
        "text": "  CountDownLatch 等待一批前置任务完成，倒计数到零不能重置；Semaphore 限制同时进入某区域的许可数。两者都不能替代所有共享状态保护，也不负责持久化故障恢复。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - AtomicInteger - ConcurrentHashMap - BlockingQueue - Semaphore "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】getAndIncrement 和 incrementAndGet 返回什么？ 2. 【应用】为什么多个原子方法组合仍可能超限？ 3. 【应用】有界队列满时有哪些合理的处理方式？ 4. 【深入】LongAdder 为什么不适合严格余额？ 5. 【深入】CountDownLatch 和 Semaphore 分别解决什么问题？ "
      }
    ],
    "questions": [
      {
        "id": "4b80fe4b212c33d9",
        "text": "【基础】getAndIncrement 和 incrementAndGet 返回什么？"
      },
      {
        "id": "74848afa7a24d740",
        "text": "【应用】为什么多个原子方法组合仍可能超限？"
      },
      {
        "id": "a99b4c9ae2240ec7",
        "text": "【应用】有界队列满时有哪些合理的处理方式？"
      },
      {
        "id": "78f868c4ad8c6d76",
        "text": "【深入】LongAdder 为什么不适合严格余额？"
      },
      {
        "id": "944658a6942b9a2e",
        "text": "【深入】CountDownLatch 和 Semaphore 分别解决什么问题？"
      }
    ],
    "searchText": "原子类、并发容器与限流协作 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 cas 保护一次状态变更 cas 比较当前值与期望值，相等才原子替换。atomicinteger 的 getandincrement 返回旧值，incrementandget 返回新值。多个原子方法组合仍可能竞态：get() = limit) return false; if (inflight.compareandset(old, old + 1)) return true; } } 成功后业务结束必须对应释放；这只是单进程并发计数示例，不是跨服务器限流。复杂资源许可通常直接使用 semaphore，获得许可后 finally release。公平与吞吐也需要按业务权衡。 cas 看见 a→b→a 时可能漏掉历史变化；需辨认版本时考虑带 stamp 的引用。高竞争重试有 cpu 成本，不能把所有原子 api 都简化成“永远无锁且更快”。longadder 适合热点统计，但 sum 不提供原子快照，不适合严格库存余额。 concurrenthashmap 的边界 java counts.computeifabsent(route, k - new longadder()).increment(); 并发 map 保证各方法契约，不保证先 containskey 再 put 的整个流程原子。compute 回调保持短小，避免阻塞远程调用或递归更新同一 map。它不允许 null 键和值；迭代通常弱一致，不是整个容器固定快照。 有界队列形成背压 arrayblockingqueue 用固定容量限制缓冲。put/take 等待空间或数据，offer/poll 立即失败返回，也有带超时版本。原稿把 offer/poll 一律描述为“不该用于生产消费”不成立：超时或立即拒绝正是许多服务的过载策略。 例如图片压缩生产快于消费者时，无界队列只是把延迟变成内存堆积；有界队列配超时、拒绝和指标，才能明确服务容量。持锁调用 queue.put 可能引发额外死锁风险。 同步工具怎么选 countdownlatch 等待一批前置任务完成，倒计数到零不能重置；semaphore 限制同时进入某区域的许可数。两者都不能替代所有共享状态保护，也不负责持久化故障恢复。 参考资料 - atomicinteger - concurrenthashmap - blockingqueue - semaphore 模拟面试问题 1. 【基础】getandincrement 和 incrementandget 返回什么？ 2. 【应用】为什么多个原子方法组合仍可能超限？ 3. 【应用】有界队列满时有哪些合理的处理方式？ 4. 【深入】longadder 为什么不适合严格余额？ 5. 【深入】countdownlatch 和 semaphore 分别解决什么问题？"
  },
  {
    "id": "java-executors",
    "version": "6b873f3d40ca",
    "md": "learning/courses/java-concurrency/04-java-executors.md",
    "title": "线程池、Future 与异步编排",
    "description": "明确线程、队列和超时预算，避免异步把负载藏起来。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "线程池是一种容量管理",
        "anchor": "线程池是一种容量管理",
        "level": 2,
        "text": "  ThreadPoolExecutor 管理工作线程、任务队列和拒绝策略。通常在工作线程少于 core 时尝试创建线程，否则入队；队列无法接收时尝试扩到 max，再无法执行则拒绝。关闭状态等并发情况也会影响接收，四步口诀不是精确穷尽源码。  java ThreadPoolExecutor pool = new ThreadPoolExecutor( 4, 8, 30, TimeUnit.SECONDS, new ArrayBlockingQueue< (64), Executors.defaultThreadFactory(), new ThreadPoolExecutor.AbortPolicy());   core 默认也按需创建，不是构造线程池就预先起齐；可配置预启动与核心超时。无界队列往往使 max 不起预期扩容作用。线程数应结合 CPU、阻塞时间、数据库连接池和下游配额，不能固定套“核数×2”。 "
      },
      {
        "title": "拒绝是业务可见的失败",
        "anchor": "拒绝是业务可见的失败",
        "level": 2,
        "text": "  AbortPolicy 抛拒绝异常；CallerRunsPolicy 可能占用请求或事件线程，并且关闭时不执行，不能宣称提交总是立即返回。丢弃策略可能让等待 Future 的逻辑无法完成，生产路径不能随意静默丢任务。服务应观测队列长度、等待时间、活跃线程、完成数和拒绝数。  submit 返回 Future，不代表任务成功；异常一般需 get 或完成回调观察。get 可阻塞并抛受检异常；Future.cancel(true) 只是尽力协作取消，任务仍需支持中断。 "
      },
      {
        "title": "实际开发：并行聚合商品详情",
        "anchor": "实际开发并行聚合商品详情",
        "level": 2,
        "text": "  java CompletableFuture product = CompletableFuture.supplyAsync(() - loadProduct(id), ioPool); CompletableFuture stock = CompletableFuture.supplyAsync(() - loadStock(id), ioPool); CompletableFuture detail = product.thenCombine(stock, Detail::new) .orTimeout(800, TimeUnit.MILLISECONDS);   loadProduct/loadStock、Detail 与 ioPool 是应用自定义依赖，此片段展示编排而非完整工程。thenApply 转换值，thenCompose 展平下一个异步阶段，thenCombine 合并独立结果；不带 Async 的延续可能在完成线程或当前线程执行，不能当作“自动开新线程”。 "
      },
      {
        "title": "超时与收尾",
        "anchor": "超时与收尾",
        "level": 2,
        "text": "  orTimeout 让 Future 超时完成，不保证底层 HTTP 或 JDBC 调用真正停止；下游仍需连接、读取和查询超时。避免同一有限线程池内任务互相 get 等待造成饥饿。显式选择业务执行器，不把阻塞请求塞进公共池。  Java 17 的 ExecutorService 不按后续版本的 try-with-resources 用法处理；生命周期中 shutdown，按预算 awaitTermination，必要时 shutdownNow 并响应中断。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - ThreadPoolExecutor API - CompletableFuture API - Future API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】任务入队和扩到 maximumPoolSize 的顺序是什么？ 2. 【应用】为什么无界队列可能导致延迟和内存不断增长？ 3. 【应用】thenCompose 与 thenCombine 如何选择？ 4. 【深入】Future 超时为什么不等于底层调用已经停止？ 5. 【深入】线程池内互相等待如何造成饥饿？ "
      }
    ],
    "questions": [
      {
        "id": "8f99715da0129afd",
        "text": "【基础】任务入队和扩到 maximumPoolSize 的顺序是什么？"
      },
      {
        "id": "a9261e64d889bcbb",
        "text": "【应用】为什么无界队列可能导致延迟和内存不断增长？"
      },
      {
        "id": "98637832c2741ad1",
        "text": "【应用】thenCompose 与 thenCombine 如何选择？"
      },
      {
        "id": "0d228c24944b790d",
        "text": "【深入】Future 超时为什么不等于底层调用已经停止？"
      },
      {
        "id": "5d8d11f5878de91d",
        "text": "【深入】线程池内互相等待如何造成饥饿？"
      }
    ],
    "searchText": "线程池、future 与异步编排 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 线程池是一种容量管理 threadpoolexecutor 管理工作线程、任务队列和拒绝策略。通常在工作线程少于 core 时尝试创建线程，否则入队；队列无法接收时尝试扩到 max，再无法执行则拒绝。关闭状态等并发情况也会影响接收，四步口诀不是精确穷尽源码。 java threadpoolexecutor pool = new threadpoolexecutor( 4, 8, 30, timeunit.seconds, new arrayblockingqueue< (64), executors.defaultthreadfactory(), new threadpoolexecutor.abortpolicy()); core 默认也按需创建，不是构造线程池就预先起齐；可配置预启动与核心超时。无界队列往往使 max 不起预期扩容作用。线程数应结合 cpu、阻塞时间、数据库连接池和下游配额，不能固定套“核数×2”。 拒绝是业务可见的失败 abortpolicy 抛拒绝异常；callerrunspolicy 可能占用请求或事件线程，并且关闭时不执行，不能宣称提交总是立即返回。丢弃策略可能让等待 future 的逻辑无法完成，生产路径不能随意静默丢任务。服务应观测队列长度、等待时间、活跃线程、完成数和拒绝数。 submit 返回 future，不代表任务成功；异常一般需 get 或完成回调观察。get 可阻塞并抛受检异常；future.cancel(true) 只是尽力协作取消，任务仍需支持中断。 实际开发：并行聚合商品详情 java completablefuture product = completablefuture.supplyasync(() - loadproduct(id), iopool); completablefuture stock = completablefuture.supplyasync(() - loadstock(id), iopool); completablefuture detail = product.thencombine(stock, detail::new) .ortimeout(800, timeunit.milliseconds); loadproduct/loadstock、detail 与 iopool 是应用自定义依赖，此片段展示编排而非完整工程。thenapply 转换值，thencompose 展平下一个异步阶段，thencombine 合并独立结果；不带 async 的延续可能在完成线程或当前线程执行，不能当作“自动开新线程”。 超时与收尾 ortimeout 让 future 超时完成，不保证底层 http 或 jdbc 调用真正停止；下游仍需连接、读取和查询超时。避免同一有限线程池内任务互相 get 等待造成饥饿。显式选择业务执行器，不把阻塞请求塞进公共池。 java 17 的 executorservice 不按后续版本的 try-with-resources 用法处理；生命周期中 shutdown，按预算 awaittermination，必要时 shutdownnow 并响应中断。 参考资料 - threadpoolexecutor api - completablefuture api - future api 模拟面试问题 1. 【基础】任务入队和扩到 maximumpoolsize 的顺序是什么？ 2. 【应用】为什么无界队列可能导致延迟和内存不断增长？ 3. 【应用】thencompose 与 thencombine 如何选择？ 4. 【深入】future 超时为什么不等于底层调用已经停止？ 5. 【深入】线程池内互相等待如何造成饥饿？"
  },
  {
    "id": "java-jvm",
    "version": "ec4192b3bcad",
    "md": "learning/courses/java-concurrency/05-java-jvm.md",
    "title": "类加载、栈帧与运行时排障",
    "description": "将 JVM 结构映射到启动失败、栈溢出和内存增长。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "类的身份与阶段",
        "anchor": "类的身份与阶段",
        "level": 2,
        "text": "  类在 JVM 中的身份与二进制名、定义它的类加载器共同相关。加载取得定义，链接包括验证、准备和解析，初始化执行类初始化逻辑；解析可延迟，不要把简图当成所有类严格同步经历的时间线。  准备通常为静态字段分配存储并设默认值，常量变量按规范特殊处理。主动使用可能触发初始化，读取被内联的编译期常量未必触发其声明类初始化。父类通常先初始化；接口规则不能直接套“所有父接口都先初始化”。 "
      },
      {
        "title": "运行时数据与方法调用",
        "anchor": "运行时数据与方法调用",
        "level": 2,
        "text": "  堆主要容纳对象与数组，线程私有栈包含方法调用帧，帧具有局部变量表、操作数栈、动态链接和返回支持。局部引用变量在线程栈里，不表示它指向的对象线程私有；多个线程完全可以通过各自引用访问同一堆对象。  方法区是规范概念，HotSpot 元空间是某些相关实现，不要把所有类元数据、静态字段和字符串都机械画进同一“永久代”。具体对象布局与分配优化也不能只靠语言层示意推断。  java static int total(int price, int quantity) { return price quantity; }   用 javap -c 查看 iload、imul、ireturn 等字节码，可理解栈式执行：加载值到操作数栈，再消费栈顶操作。JIT 后的机器码可以不同，字节码不等于每一步最终硬件指令。 "
      },
      {
        "title": "实际开发：三类故障",
        "anchor": "实际开发三类故障",
        "level": 2,
        "text": "  - 启动 ClassNotFoundException：查依赖是否打包、运行类路径与模块路径。 - StackOverflowError：查递归终止条件、对象 toString 循环引用和调用链；增大栈通常不能修复无限递归。 - 堆持续增长：看对象数量、保留路径和缓存边界，区分泄漏、合法增长和短期分配压力。  GC 回收不可达对象，不是按“离开方法立即回收”。静态集合、监听器、ThreadLocal 值和未关闭资源可能长期保留对象。不要把每次 Full GC 都直接归因于“内存太小”。 "
      },
      {
        "title": "排障路径",
        "anchor": "排障路径",
        "level": 2,
        "text": "  先记录 JDK 版本、启动参数、负载与错误时间，再用 jcmd、线程转储、GC 日志或堆转储寻找证据。转储可能包含用户数据，实验使用脱敏环境。CPU 高时先找热点线程与堆栈，而不是盲目改 GC 参数。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - JVMS 17：运行时数据区域 - JVMS 17：加载、链接与初始化 - jcmd 工具 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】加载、链接与初始化各做什么？ 2. 【应用】局部变量在线程栈里为什么仍可能引用共享对象？ 3. 【应用】StackOverflowError 应如何定位？ 4. 【深入】两个同名类为什么可能不能互相转型？ 5. 【深入】为什么 GC 发生不代表内存泄漏已经解决？ "
      }
    ],
    "questions": [
      {
        "id": "4fa2ca4859a79dd7",
        "text": "【基础】加载、链接与初始化各做什么？"
      },
      {
        "id": "4ffafc630c0bb279",
        "text": "【应用】局部变量在线程栈里为什么仍可能引用共享对象？"
      },
      {
        "id": "eb99f32ecb71f38e",
        "text": "【应用】StackOverflowError 应如何定位？"
      },
      {
        "id": "abfcc3fc7236f4d6",
        "text": "【深入】两个同名类为什么可能不能互相转型？"
      },
      {
        "id": "857ef9cb8d5d8782",
        "text": "【深入】为什么 GC 发生不代表内存泄漏已经解决？"
      }
    ],
    "searchText": "类加载、栈帧与运行时排障 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 类的身份与阶段 类在 jvm 中的身份与二进制名、定义它的类加载器共同相关。加载取得定义，链接包括验证、准备和解析，初始化执行类初始化逻辑；解析可延迟，不要把简图当成所有类严格同步经历的时间线。 准备通常为静态字段分配存储并设默认值，常量变量按规范特殊处理。主动使用可能触发初始化，读取被内联的编译期常量未必触发其声明类初始化。父类通常先初始化；接口规则不能直接套“所有父接口都先初始化”。 运行时数据与方法调用 堆主要容纳对象与数组，线程私有栈包含方法调用帧，帧具有局部变量表、操作数栈、动态链接和返回支持。局部引用变量在线程栈里，不表示它指向的对象线程私有；多个线程完全可以通过各自引用访问同一堆对象。 方法区是规范概念，hotspot 元空间是某些相关实现，不要把所有类元数据、静态字段和字符串都机械画进同一“永久代”。具体对象布局与分配优化也不能只靠语言层示意推断。 java static int total(int price, int quantity) { return price quantity; } 用 javap -c 查看 iload、imul、ireturn 等字节码，可理解栈式执行：加载值到操作数栈，再消费栈顶操作。jit 后的机器码可以不同，字节码不等于每一步最终硬件指令。 实际开发：三类故障 - 启动 classnotfoundexception：查依赖是否打包、运行类路径与模块路径。 - stackoverflowerror：查递归终止条件、对象 tostring 循环引用和调用链；增大栈通常不能修复无限递归。 - 堆持续增长：看对象数量、保留路径和缓存边界，区分泄漏、合法增长和短期分配压力。 gc 回收不可达对象，不是按“离开方法立即回收”。静态集合、监听器、threadlocal 值和未关闭资源可能长期保留对象。不要把每次 full gc 都直接归因于“内存太小”。 排障路径 先记录 jdk 版本、启动参数、负载与错误时间，再用 jcmd、线程转储、gc 日志或堆转储寻找证据。转储可能包含用户数据，实验使用脱敏环境。cpu 高时先找热点线程与堆栈，而不是盲目改 gc 参数。 参考资料 - jvms 17：运行时数据区域 - jvms 17：加载、链接与初始化 - jcmd 工具 模拟面试问题 1. 【基础】加载、链接与初始化各做什么？ 2. 【应用】局部变量在线程栈里为什么仍可能引用共享对象？ 3. 【应用】stackoverflowerror 应如何定位？ 4. 【深入】两个同名类为什么可能不能互相转型？ 5. 【深入】为什么 gc 发生不代表内存泄漏已经解决？"
  },
  {
    "id": "java-sockets",
    "version": "7b6474941536",
    "md": "learning/courses/java-concurrency/06-java-sockets.md",
    "title": "Socket、协议边界与 NIO",
    "description": "从阻塞流到 Selector，理解连接资源与消息分帧。",
    "subject": "java-concurrency",
    "kind": "系统课程",
    "order": 6,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "端点和连接",
        "anchor": "端点和连接",
        "level": 2,
        "text": "  IP、端口和传输协议定位通信端点；TCP 连接常用源 IP/端口、目的 IP/端口四元组区分，讨论时还需考虑协议与网络命名空间。服务端一个监听端口可对应大量连接。原稿“一端口只能一个程序”要限定地址、协议、绑定选项和操作系统，不能当绝对规则。  ServerSocket 负责监听，accept 返回与具体客户端通信的 Socket。底层 socket/bind/listen/accept 有助于理解，但 Java 构造器封装不要求开发者逐一调用这些系统调用。UDP 无需 TCP 握手，但 API 中也有 connect 这种设置默认对端的行为。 "
      },
      {
        "title": "TCP 没有消息边界",
        "anchor": "tcp-没有消息边界",
        "level": 2,
        "text": "  一次 write 不对应一次 read，可能分段也可能合并。应用需要分隔符、固定长度或长度前缀，并对大小设上限。以长度前缀为例：  java DataInputStream in = new DataInputStream(socket.getInputStream()); int size = in.readInt(); if (size 1024 1024) throw new IOException(\"非法帧大小\"); byte[] payload = new byte[size]; in.readFully(payload);   这是片段：调用方需管理 socket 生命周期、读取超时、异常和协议版本。读前先验证大小，防止对方让服务分配巨型数组。read 返回的长度可能小于请求长度，不得假定数据总是一次读齐。 "
      },
      {
        "title": "实际开发：按行聊天",
        "anchor": "实际开发按行聊天",
        "level": 2,
        "text": "  双方明确 UTF-8 与换行分隔；发送端只 print 不换行且不关闭输出，readLine 可能一直等。PrintWriter 自动刷新只针对特定方法，不代表每次 write 都发出；它还可能把 IO 错误记录为内部状态，协议代码要检查错误。  用 Socket.connect 指定连接超时，用 setSoTimeout 设置阻塞读取超时；发送成功仅说明数据交给相应层，并不证明订单业务已提交。 "
      },
      {
        "title": "BIO 与 NIO",
        "anchor": "bio-与-nio",
        "level": 2,
        "text": "  阻塞模型可用线程池服务多连接，但长时间占用线程和无界连接排队会耗尽资源。NIO 的 Channel、Buffer、Selector 允许少量线程管理多个可就绪通道；read/write 仍可能部分完成，需维护每个连接的帧解析与待发送状态。  Selector 不替你处理业务慢调用。Netty 等框架封装事件循环和编解码，业务阻塞应按框架规则隔离。TCP 的可靠有序是字节传输语义，不等于业务恰好一次；UDP 也不必然更快，选型需看拥塞控制、时延、可靠性和应用协议。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Socket API - DataInputStream.readFully - Selector API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】监听 Socket 与 accept 返回的 Socket 有何区别？ 2. 【应用】为什么不能按每次 read 结果当成完整消息？ 3. 【应用】长度前缀协议要防范哪些输入？ 4. 【深入】Selector 为什么不自动解决慢数据库调用？ 5. 【深入】TCP 可靠传输为什么仍可能出现重复下单？ "
      }
    ],
    "questions": [
      {
        "id": "47825202a5efcc69",
        "text": "【基础】监听 Socket 与 accept 返回的 Socket 有何区别？"
      },
      {
        "id": "5285b6503b760b3e",
        "text": "【应用】为什么不能按每次 read 结果当成完整消息？"
      },
      {
        "id": "c350033c515df552",
        "text": "【应用】长度前缀协议要防范哪些输入？"
      },
      {
        "id": "04ae25319b5b303b",
        "text": "【深入】Selector 为什么不自动解决慢数据库调用？"
      },
      {
        "id": "fd7864f3f7bf8bf5",
        "text": "【深入】TCP 可靠传输为什么仍可能出现重复下单？"
      }
    ],
    "searchText": "socket、协议边界与 nio 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 端点和连接 ip、端口和传输协议定位通信端点；tcp 连接常用源 ip/端口、目的 ip/端口四元组区分，讨论时还需考虑协议与网络命名空间。服务端一个监听端口可对应大量连接。原稿“一端口只能一个程序”要限定地址、协议、绑定选项和操作系统，不能当绝对规则。 serversocket 负责监听，accept 返回与具体客户端通信的 socket。底层 socket/bind/listen/accept 有助于理解，但 java 构造器封装不要求开发者逐一调用这些系统调用。udp 无需 tcp 握手，但 api 中也有 connect 这种设置默认对端的行为。 tcp 没有消息边界 一次 write 不对应一次 read，可能分段也可能合并。应用需要分隔符、固定长度或长度前缀，并对大小设上限。以长度前缀为例： java datainputstream in = new datainputstream(socket.getinputstream()); int size = in.readint(); if (size 1024 1024) throw new ioexception(\"非法帧大小\"); byte[] payload = new byte[size]; in.readfully(payload); 这是片段：调用方需管理 socket 生命周期、读取超时、异常和协议版本。读前先验证大小，防止对方让服务分配巨型数组。read 返回的长度可能小于请求长度，不得假定数据总是一次读齐。 实际开发：按行聊天 双方明确 utf-8 与换行分隔；发送端只 print 不换行且不关闭输出，readline 可能一直等。printwriter 自动刷新只针对特定方法，不代表每次 write 都发出；它还可能把 io 错误记录为内部状态，协议代码要检查错误。 用 socket.connect 指定连接超时，用 setsotimeout 设置阻塞读取超时；发送成功仅说明数据交给相应层，并不证明订单业务已提交。 bio 与 nio 阻塞模型可用线程池服务多连接，但长时间占用线程和无界连接排队会耗尽资源。nio 的 channel、buffer、selector 允许少量线程管理多个可就绪通道；read/write 仍可能部分完成，需维护每个连接的帧解析与待发送状态。 selector 不替你处理业务慢调用。netty 等框架封装事件循环和编解码，业务阻塞应按框架规则隔离。tcp 的可靠有序是字节传输语义，不等于业务恰好一次；udp 也不必然更快，选型需看拥塞控制、时延、可靠性和应用协议。 参考资料 - socket api - datainputstream.readfully - selector api 模拟面试问题 1. 【基础】监听 socket 与 accept 返回的 socket 有何区别？ 2. 【应用】为什么不能按每次 read 结果当成完整消息？ 3. 【应用】长度前缀协议要防范哪些输入？ 4. 【深入】selector 为什么不自动解决慢数据库调用？ 5. 【深入】tcp 可靠传输为什么仍可能出现重复下单？"
  },
  {
    "id": "net-layers-addresses",
    "version": "7299bf0a1ea6",
    "md": "learning/courses/networks/layers-addresses.md",
    "title": "分层、地址与一次发包",
    "description": "区分协议和实现，按前缀与路由理解 IP、MAC 和 NAT。",
    "subject": "networks",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "计算机网络",
      "后端",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "分层是一种职责划分",
        "anchor": "分层是一种职责划分",
        "level": 2,
        "text": "  网络协议规定报文格式、交互过程与行为，操作系统、库、服务器才是实现。HTTP 是协议，Nginx 是软件， /api/orders 是应用自己设计的路径。OSI 七层、TCP/IP 四层以及五层教学模型是不同抽象，不能按层数机械对号；TLS、QUIC 也不必强行塞进唯一一格。  教学五层可这样理解：应用层解释业务消息，传输层提供端到端交付能力，网络层跨网络转发 IP 包，链路层在相邻链路传帧，物理层传信号。普通二层交换机按 MAC 转发，路由器按目的 IP 路由，但实际设备可具备多层功能。  网络可实现通信、资源共享与分布式处理，但可靠性和扩展性需要设计，联网本身不保证。星状、网状、树状等描述结构；PAN/LAN/MAN/WAN 描述范围，资源子网/通信子网描述功能，不是同一分类。“网状一定最可靠”忽略链路共享故障和配置，宜说冗余路径能提供容错机会。 "
      },
      {
        "title": "IP 终点与 MAC 下一跳",
        "anchor": "ip-终点与-mac-下一跳",
        "level": 2,
        "text": "  电脑 192.168.1.10 访问外部 8.8.8.8，路由表选默认网关 192.168.1.1。IP 包目的为 8.8.8.8，本地以太网帧目标 MAC 却是网关；路由器拆除旧帧，再在下一链路重新封装。普通路由不改源/目的 IP，NAT 是常见例外；TTL 等字段仍逐跳变化。  Socket 是程序使用网络的接口，不是网卡。典型发送路径为应用→系统调用/套接字缓冲→协议栈→驱动收发队列→网卡；DMA、分段卸载等能改变具体工作分配。一次应用 write 不等于一个 TCP 段或以太帧，端口分发也不是网卡直接定位 Java 对象。 "
      },
      {
        "title": "子网用位运算，不用看点分段",
        "anchor": "子网用位运算不用看点分段",
        "level": 2,
        "text": "  IPv4 共 32 位， 192.168.1.130/26 的掩码是 255.255.255.192，网络地址为 192.168.1.128。该传统广播子网的主机范围是 .129～.190，广播 .191。 2^(32-prefix)-2 仅适用于这种常见广播子网，不能套用 /31 点到点或 /32 主机路由。  RFC1918 私有地址为 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。172.16/12 只含第二段 16～31，不能把全部 172 开头视为私网。IPv6 不沿用 IPv4 广播及相同减二规则。 "
      },
      {
        "title": "后端部署中的可达性",
        "anchor": "后端部署中的可达性",
        "level": 2,
        "text": "  Spring Boot 绑定 127.0.0.1 只能从本机对应网络命名空间访问；0.0.0.0 表示监听所有本地 IPv4 接口，仍需防火墙、路由、端口映射或公网入口。容器内的 localhost 指容器自身，与宿主机不同。能访问互联网不等于有可入站的独立公网 IPv4，家庭与运营商 NAT 都可能存在。  相同网络号也不保证互通：VLAN、无线访客隔离、主机防火墙都会影响。排障先明确访问方、服务所在机器或容器、监听地址与目标端口，而不是只问“是不是同一个 Wi-Fi”。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 1918 私有地址 - RFC 3021：/31 点到点链路例外 - RFC 9293 TCP 规范 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：协议、服务端软件和 API 路径分别是什么？ 2. 实际应用：访问外网时 IP 目标与以太网 MAC 目标为什么不同？ 3. 实际应用：如何计算 192.168.1.130/26 所属网络？ 4. 深入追问：绑定 0.0.0.0 为什么仍不一定能从公网访问？ 5. 深入追问：IPv4 主机数减二公式有哪些适用边界？"
      }
    ],
    "questions": [
      {
        "id": "71498ce61a4ab230",
        "text": "基础理解：协议、服务端软件和 API 路径分别是什么？"
      },
      {
        "id": "be47874a93f9d6c9",
        "text": "实际应用：访问外网时 IP 目标与以太网 MAC 目标为什么不同？"
      },
      {
        "id": "29716225804d8d88",
        "text": "实际应用：如何计算 192.168.1.130/26 所属网络？"
      },
      {
        "id": "d9ca3ae53e471c70",
        "text": "深入追问：绑定 0.0.0.0 为什么仍不一定能从公网访问？"
      },
      {
        "id": "2c5e66579637704e",
        "text": "深入追问：IPv4 主机数减二公式有哪些适用边界？"
      }
    ],
    "searchText": "分层、地址与一次发包 分层是一种职责划分 网络协议规定报文格式、交互过程与行为，操作系统、库、服务器才是实现。http 是协议，nginx 是软件， /api/orders 是应用自己设计的路径。osi 七层、tcp/ip 四层以及五层教学模型是不同抽象，不能按层数机械对号；tls、quic 也不必强行塞进唯一一格。 教学五层可这样理解：应用层解释业务消息，传输层提供端到端交付能力，网络层跨网络转发 ip 包，链路层在相邻链路传帧，物理层传信号。普通二层交换机按 mac 转发，路由器按目的 ip 路由，但实际设备可具备多层功能。 网络可实现通信、资源共享与分布式处理，但可靠性和扩展性需要设计，联网本身不保证。星状、网状、树状等描述结构；pan/lan/man/wan 描述范围，资源子网/通信子网描述功能，不是同一分类。“网状一定最可靠”忽略链路共享故障和配置，宜说冗余路径能提供容错机会。 ip 终点与 mac 下一跳 电脑 192.168.1.10 访问外部 8.8.8.8，路由表选默认网关 192.168.1.1。ip 包目的为 8.8.8.8，本地以太网帧目标 mac 却是网关；路由器拆除旧帧，再在下一链路重新封装。普通路由不改源/目的 ip，nat 是常见例外；ttl 等字段仍逐跳变化。 socket 是程序使用网络的接口，不是网卡。典型发送路径为应用→系统调用/套接字缓冲→协议栈→驱动收发队列→网卡；dma、分段卸载等能改变具体工作分配。一次应用 write 不等于一个 tcp 段或以太帧，端口分发也不是网卡直接定位 java 对象。 子网用位运算，不用看点分段 ipv4 共 32 位， 192.168.1.130/26 的掩码是 255.255.255.192，网络地址为 192.168.1.128。该传统广播子网的主机范围是 .129～.190，广播 .191。 2^(32-prefix)-2 仅适用于这种常见广播子网，不能套用 /31 点到点或 /32 主机路由。 rfc1918 私有地址为 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。172.16/12 只含第二段 16～31，不能把全部 172 开头视为私网。ipv6 不沿用 ipv4 广播及相同减二规则。 后端部署中的可达性 spring boot 绑定 127.0.0.1 只能从本机对应网络命名空间访问；0.0.0.0 表示监听所有本地 ipv4 接口，仍需防火墙、路由、端口映射或公网入口。容器内的 localhost 指容器自身，与宿主机不同。能访问互联网不等于有可入站的独立公网 ipv4，家庭与运营商 nat 都可能存在。 相同网络号也不保证互通：vlan、无线访客隔离、主机防火墙都会影响。排障先明确访问方、服务所在机器或容器、监听地址与目标端口，而不是只问“是不是同一个 wi-fi”。 参考资料 - rfc 1918 私有地址 - rfc 3021：/31 点到点链路例外 - rfc 9293 tcp 规范 模拟面试问题 1. 基础理解：协议、服务端软件和 api 路径分别是什么？ 2. 实际应用：访问外网时 ip 目标与以太网 mac 目标为什么不同？ 3. 实际应用：如何计算 192.168.1.130/26 所属网络？ 4. 深入追问：绑定 0.0.0.0 为什么仍不一定能从公网访问？ 5. 深入追问：ipv4 主机数减二公式有哪些适用边界？"
  },
  {
    "id": "net-dns-request-diagnosis",
    "version": "a46113197c75",
    "md": "learning/courses/networks/dns-request-diagnosis.md",
    "title": "DNS、TCP 与面向服务的排障",
    "description": "每个命令只证明它实际测试的那一层。",
    "subject": "networks",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "计算机网络",
      "后端",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "名称解析不总从根开始",
        "anchor": "名称解析不总从根开始",
        "level": 2,
        "text": "  DNS 是分布式命名系统，A/AAAA 记录提供地址，CNAME 提供别名。客户端可查浏览器/系统缓存，再询问递归解析器；解析器根据缓存或委派查权威数据，必要时才访问根和顶级域。TTL 影响缓存期限，也存在负缓存，修改记录不代表所有客户端立即更新。  同一域名不同 IP 可能来自 CDN、地理调度或不同解析器，不足以单独证明欺骗。传统 DNS 常用 UDP，也必须考虑 TCP，DoH/DoT 为查询通道提供加密；域名解析正确不等于网站身份已经认证。 "
      },
      {
        "title": "TCP 是字节流，不是业务成功证明",
        "anchor": "tcp-是字节流不是业务成功证明",
        "level": 2,
        "text": "  典型新连接为 SYN、SYN+ACK、ACK，交换初始序列号并同步连接状态；TCP 负责有序字节流与重传等，不提供网站身份认证或业务授权。一次发送的边界不被 TCP 保留，应用需明确长度、分隔符等消息格式。  访问 HTTPS API 的简化路径：URL→DNS→路由→TCP→TLS→HTTP→Nginx→Spring MVC→数据库。复用连接、DNS 缓存、HTTP/3 都会改变实际步骤。TCP 建连成功但后端数据库不可用，接口仍可能 500；Nginx 502 可能发生在连接上游或协议处理阶段，需查对应日志。 "
      },
      {
        "title": "实际排查：网页打开但 ping 不通",
        "anchor": "实际排查网页打开但-ping-不通",
        "level": 2,
        "text": "  ping 使用 ICMP 回显，不是 TCP/UDP，不使用端口；服务可屏蔽 ICMP 而继续提供 HTTPS。HTTP/SOCKS 代理也通常不会转发普通 ping。域名找不到是解析阶段失败；已解析后超时只表示未收到 ICMP 应答，不能直接断定服务器离线。  powershell nslookup example.com Test-NetConnection example.com -Port 443 curl.exe -I https://example.com tracert example.com   每条分别检查 DNS、TCP 443、某次 HTTP HEAD 响应以及诊断路径。HEAD 被拒绝不等于 GET 失败，需根据接口选择方法；tracert 的星号也可能是中间设备不应答。curl 还会受环境变量与代理配置影响，比较前记录网络路径与协议版本。 "
      },
      {
        "title": "服务器侧怎样继续",
        "anchor": "服务器侧怎样继续",
        "level": 2,
        "text": "  Linux 查看监听 ss -lntp 、对应进程和应用日志，容器需进入正确网络命名空间。SSH 是管理服务器的加密协议，与向用户提供的 HTTP 不同，SSH 正常不能证明 443 正常。公网反向代理到 127.0.0.1:8080 时，内网 HTTP 链路和公网 TLS 分开检查。  开发中以同一个请求 ID 串联代理、控制器、数据库日志，记录 DNS/建连/TLS/首字节/总时长可缩小范围。先复现真实接口、相同方法、必要的测试认证与请求体，再用低层测试解释问题；不要把健康检查成功当所有业务接口成功。 "
      },
      {
        "title": "拓展：观测结果的范围",
        "anchor": "拓展观测结果的范围",
        "level": 2,
        "text": "  抓包、日志和命令输出都是特定时间、路径、权限下的观测。一次 curl 成功不代表全天无故障，单次 ping 的 RTT 不等同用户接口响应时间。排障记录至少写明目的主机、端口、代理、时间与错误层级，避免更换多个条件后无法判断哪个因素起效。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 1034 DNS 概念与委派 - RFC 9293 TCP 状态与字节流 - RFC 9110 HTTP 方法语义 - curl 官方手册 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：DNS 缓存命中时是否还要询问根服务器？ 2. 实际应用：ping 失败、TCP 443 成功分别说明什么？ 3. 实际应用：TCP 建连成功但 API 500 应从哪些证据继续排查？ 4. 深入追问：TCP 字节流为什么需要应用自行定义消息边界？ 5. 深入追问：怎样设计排障对照以避免代理路径干扰结论？"
      }
    ],
    "questions": [
      {
        "id": "4edff7f5f600cf81",
        "text": "基础理解：DNS 缓存命中时是否还要询问根服务器？"
      },
      {
        "id": "d14c697595153666",
        "text": "实际应用：ping 失败、TCP 443 成功分别说明什么？"
      },
      {
        "id": "8c08aaa355636862",
        "text": "实际应用：TCP 建连成功但 API 500 应从哪些证据继续排查？"
      },
      {
        "id": "ad3a45b1791fad73",
        "text": "深入追问：TCP 字节流为什么需要应用自行定义消息边界？"
      },
      {
        "id": "d55399b3025049dc",
        "text": "深入追问：怎样设计排障对照以避免代理路径干扰结论？"
      }
    ],
    "searchText": "dns、tcp 与面向服务的排障 名称解析不总从根开始 dns 是分布式命名系统，a/aaaa 记录提供地址，cname 提供别名。客户端可查浏览器/系统缓存，再询问递归解析器；解析器根据缓存或委派查权威数据，必要时才访问根和顶级域。ttl 影响缓存期限，也存在负缓存，修改记录不代表所有客户端立即更新。 同一域名不同 ip 可能来自 cdn、地理调度或不同解析器，不足以单独证明欺骗。传统 dns 常用 udp，也必须考虑 tcp，doh/dot 为查询通道提供加密；域名解析正确不等于网站身份已经认证。 tcp 是字节流，不是业务成功证明 典型新连接为 syn、syn+ack、ack，交换初始序列号并同步连接状态；tcp 负责有序字节流与重传等，不提供网站身份认证或业务授权。一次发送的边界不被 tcp 保留，应用需明确长度、分隔符等消息格式。 访问 https api 的简化路径：url→dns→路由→tcp→tls→http→nginx→spring mvc→数据库。复用连接、dns 缓存、http/3 都会改变实际步骤。tcp 建连成功但后端数据库不可用，接口仍可能 500；nginx 502 可能发生在连接上游或协议处理阶段，需查对应日志。 实际排查：网页打开但 ping 不通 ping 使用 icmp 回显，不是 tcp/udp，不使用端口；服务可屏蔽 icmp 而继续提供 https。http/socks 代理也通常不会转发普通 ping。域名找不到是解析阶段失败；已解析后超时只表示未收到 icmp 应答，不能直接断定服务器离线。 powershell nslookup example.com test-netconnection example.com -port 443 curl.exe -i https://example.com tracert example.com 每条分别检查 dns、tcp 443、某次 http head 响应以及诊断路径。head 被拒绝不等于 get 失败，需根据接口选择方法；tracert 的星号也可能是中间设备不应答。curl 还会受环境变量与代理配置影响，比较前记录网络路径与协议版本。 服务器侧怎样继续 linux 查看监听 ss -lntp 、对应进程和应用日志，容器需进入正确网络命名空间。ssh 是管理服务器的加密协议，与向用户提供的 http 不同，ssh 正常不能证明 443 正常。公网反向代理到 127.0.0.1:8080 时，内网 http 链路和公网 tls 分开检查。 开发中以同一个请求 id 串联代理、控制器、数据库日志，记录 dns/建连/tls/首字节/总时长可缩小范围。先复现真实接口、相同方法、必要的测试认证与请求体，再用低层测试解释问题；不要把健康检查成功当所有业务接口成功。 拓展：观测结果的范围 抓包、日志和命令输出都是特定时间、路径、权限下的观测。一次 curl 成功不代表全天无故障，单次 ping 的 rtt 不等同用户接口响应时间。排障记录至少写明目的主机、端口、代理、时间与错误层级，避免更换多个条件后无法判断哪个因素起效。 参考资料 - rfc 1034 dns 概念与委派 - rfc 9293 tcp 状态与字节流 - rfc 9110 http 方法语义 - curl 官方手册 模拟面试问题 1. 基础理解：dns 缓存命中时是否还要询问根服务器？ 2. 实际应用：ping 失败、tcp 443 成功分别说明什么？ 3. 实际应用：tcp 建连成功但 api 500 应从哪些证据继续排查？ 4. 深入追问：tcp 字节流为什么需要应用自行定义消息边界？ 5. 深入追问：怎样设计排障对照以避免代理路径干扰结论？"
  },
  {
    "id": "net-tls-proxy-boundaries",
    "version": "0f07d9516b9b",
    "md": "learning/courses/networks/tls-proxy-boundaries.md",
    "title": "TLS、代理与信任边界",
    "description": "区分内容加密、身份认证、流量转发与隧道路由。",
    "subject": "networks",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "计算机网络",
      "后端",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "加密连接必须连到预期的人",
        "anchor": "加密连接必须连到预期的人",
        "level": 2,
        "text": "  TLS 为通信提供保密性、完整性与对端认证机制。典型网站连接用证书和签名认证服务端，通过临时密钥协商派生对称密钥保护数据。证书不负责直接加密所有 HTTP 正文，证书链也不是只验一次签名就完事；还要看域名 SAN、有效期、用途、信任锚及客户端策略。  正常证书验证可阻止单纯 DNS 重定向冒充原域名。攻击者若能让客户端接受伪造证书，并控制连接路径，可能分别建立客户端—攻击者、攻击者—真实站两条 TLS，读取自身作为终点的明文。地址栏域名未必改变，因此“看起来网址没变”不足以验证身份。  TLS 1.3 的常见临时密钥交换提供前向保密，后来仅泄露网站证书私钥不等于能解密过去全部流量。不能把该结论扩成所有配置、PSK 模式或终端泄露下的绝对保证。 "
      },
      {
        "title": "CONNECT 与 SOCKS5 转发什么",
        "anchor": "connect-与-socks5-转发什么",
        "level": 2,
        "text": "  浏览器通过 HTTP 代理访问 HTTPS，可先发 CONNECT example.com:443 ，代理成功后在隧道内与目标进行 TLS。HTTPS_PROXY 配成 http://127.0.0.1:7897 描述的是连接代理的方法，不代表最终站点 HTTPS 被改成明文。端口号由本机代理配置决定，不是标准固定值。  SOCKS5 支持 CONNECT 等命令并定义 UDP ASSOCIATE，本身不保证数据加密。传域名可由代理侧解析；先本地解析再传 IP 会影响 DNS 路径。普通隧道代理不能自动看到 HTTPS 明文；若终端另行信任了拦截代理的 CA，则情况不同。 "
      },
      {
        "title": "VPN、TUN 与规则不是同一概念",
        "anchor": "vpntun-与规则不是同一概念",
        "level": 2,
        "text": "  VPN 可将内层 IP 包加密封装送往隧道端点，外部网络主要看到外层端点与流量特征。TUN 是供用户程序收发三层数据包的虚拟接口机制，不等于一种具体加密协议；TAP 则面向以太帧。  全隧道或分流取决于路由、DNS、IPv6 与排除规则。“全局模式”也可能仅对交给代理的流量生效，不代表所有进程所有协议都已接管。Fake-IP 是代理内部维护域名映射的一种实现策略，不是目标站点真正的公网部署地址；其具体地址段与规则应查对应客户端配置。 "
      },
      {
        "title": "后端部署例子：TLS 在哪里结束",
        "anchor": "后端部署例子tls-在哪里结束",
        "level": 2,
        "text": "  浏览器经 HTTPS 访问 Nginx，再由 Nginx 通过 HTTP 转发本机 Spring Boot。公网 TLS 的终点是 Nginx，内部一跳未必加密；跨不可信网络时要为内部链路另设保护。日志和转发头必须由可信入口规范处理，不能无条件信任客户端伪造的 X-Forwarded-For/Proto。  VPN 出口一般还能观察目标地址等元数据，但正常站点 TLS 明文仍由真实 TLS 终点掌握。网站仍可通过登录身份和应用标识识别用户，换出口 IP 不等于完全匿名。 "
      },
      {
        "title": "漏洞判断基于条件",
        "anchor": "漏洞判断基于条件",
        "level": 2,
        "text": "  原稿所提具体 2026 漏洞缺少已核实编号和影响版本，不作为事实收录。应从官方公告核对组件、版本、触发路径、暴露面与修复；存在 CVE 不等于项目可远程攻击，也不等于已泄露。Node.js 是运行时，Express/Spring 是框架，GitHub Pages 托管静态内容，构建使用某运行时不代表线上 API 运行在它上面。  不要为了连接成功关闭证书验证，这会破坏身份保证；应检查服务器证书链、时间、域名与受信任根配置。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 8446 TLS 1.3 - RFC 9110 CONNECT - RFC 1928 SOCKS5 - Linux TUN/TAP 文档 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：保密性与对端认证为什么是不同目标？ 2. 实际应用：CONNECT 代理为什么通常看不到 HTTPS 明文？ 3. 实际应用：Nginx 终止 TLS 后内部 HTTP 的安全边界在哪里？ 4. 深入追问：证书私钥泄露为何不必然破解历史 TLS 1.3 会话？ 5. 深入追问：TUN、VPN 和全局代理分别描述什么？"
      }
    ],
    "questions": [
      {
        "id": "f32a411d013ff57e",
        "text": "基础理解：保密性与对端认证为什么是不同目标？"
      },
      {
        "id": "dce0f7fa1ca0f44d",
        "text": "实际应用：CONNECT 代理为什么通常看不到 HTTPS 明文？"
      },
      {
        "id": "57fd2b4c6159056a",
        "text": "实际应用：Nginx 终止 TLS 后内部 HTTP 的安全边界在哪里？"
      },
      {
        "id": "634e53889b11da2b",
        "text": "深入追问：证书私钥泄露为何不必然破解历史 TLS 1.3 会话？"
      },
      {
        "id": "736f007a93bd43ab",
        "text": "深入追问：TUN、VPN 和全局代理分别描述什么？"
      }
    ],
    "searchText": "tls、代理与信任边界 加密连接必须连到预期的人 tls 为通信提供保密性、完整性与对端认证机制。典型网站连接用证书和签名认证服务端，通过临时密钥协商派生对称密钥保护数据。证书不负责直接加密所有 http 正文，证书链也不是只验一次签名就完事；还要看域名 san、有效期、用途、信任锚及客户端策略。 正常证书验证可阻止单纯 dns 重定向冒充原域名。攻击者若能让客户端接受伪造证书，并控制连接路径，可能分别建立客户端—攻击者、攻击者—真实站两条 tls，读取自身作为终点的明文。地址栏域名未必改变，因此“看起来网址没变”不足以验证身份。 tls 1.3 的常见临时密钥交换提供前向保密，后来仅泄露网站证书私钥不等于能解密过去全部流量。不能把该结论扩成所有配置、psk 模式或终端泄露下的绝对保证。 connect 与 socks5 转发什么 浏览器通过 http 代理访问 https，可先发 connect example.com:443 ，代理成功后在隧道内与目标进行 tls。https_proxy 配成 http://127.0.0.1:7897 描述的是连接代理的方法，不代表最终站点 https 被改成明文。端口号由本机代理配置决定，不是标准固定值。 socks5 支持 connect 等命令并定义 udp associate，本身不保证数据加密。传域名可由代理侧解析；先本地解析再传 ip 会影响 dns 路径。普通隧道代理不能自动看到 https 明文；若终端另行信任了拦截代理的 ca，则情况不同。 vpn、tun 与规则不是同一概念 vpn 可将内层 ip 包加密封装送往隧道端点，外部网络主要看到外层端点与流量特征。tun 是供用户程序收发三层数据包的虚拟接口机制，不等于一种具体加密协议；tap 则面向以太帧。 全隧道或分流取决于路由、dns、ipv6 与排除规则。“全局模式”也可能仅对交给代理的流量生效，不代表所有进程所有协议都已接管。fake-ip 是代理内部维护域名映射的一种实现策略，不是目标站点真正的公网部署地址；其具体地址段与规则应查对应客户端配置。 后端部署例子：tls 在哪里结束 浏览器经 https 访问 nginx，再由 nginx 通过 http 转发本机 spring boot。公网 tls 的终点是 nginx，内部一跳未必加密；跨不可信网络时要为内部链路另设保护。日志和转发头必须由可信入口规范处理，不能无条件信任客户端伪造的 x-forwarded-for/proto。 vpn 出口一般还能观察目标地址等元数据，但正常站点 tls 明文仍由真实 tls 终点掌握。网站仍可通过登录身份和应用标识识别用户，换出口 ip 不等于完全匿名。 漏洞判断基于条件 原稿所提具体 2026 漏洞缺少已核实编号和影响版本，不作为事实收录。应从官方公告核对组件、版本、触发路径、暴露面与修复；存在 cve 不等于项目可远程攻击，也不等于已泄露。node.js 是运行时，express/spring 是框架，github pages 托管静态内容，构建使用某运行时不代表线上 api 运行在它上面。 不要为了连接成功关闭证书验证，这会破坏身份保证；应检查服务器证书链、时间、域名与受信任根配置。 参考资料 - rfc 8446 tls 1.3 - rfc 9110 connect - rfc 1928 socks5 - linux tun/tap 文档 模拟面试问题 1. 基础理解：保密性与对端认证为什么是不同目标？ 2. 实际应用：connect 代理为什么通常看不到 https 明文？ 3. 实际应用：nginx 终止 tls 后内部 http 的安全边界在哪里？ 4. 深入追问：证书私钥泄露为何不必然破解历史 tls 1.3 会话？ 5. 深入追问：tun、vpn 和全局代理分别描述什么？"
  },
  {
    "id": "net-performance",
    "version": "c2797bf107ae",
    "md": "learning/courses/networks/performance.md",
    "title": "性能指标与排队：带宽不是响应速度",
    "description": "把 RTT、吞吐、抖动与业务延迟分开测量。",
    "subject": "networks",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "计算机网络",
      "后端",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "指标描述的对象不同",
        "anchor": "指标描述的对象不同",
        "level": 2,
        "text": "  RTT 为一次往返时间，不等于单向延迟的两倍，方向可能不对称。链路容量、可用带宽、实际吞吐量与应用有效载荷速率也不同：100 Mbps 除以 8 是理论 12.5 MB/s，协议开销与瓶颈会降低应用结果。RTT 很低仍可能下载慢，带宽很高仍可能交互慢。  丢包率需要明确采样对象和时间窗口。2000 个包丢 40 个是 2%，但连续丢 40 个与均匀丢失的体验可能不同；诊断 ICMP 被过滤不等价于业务 TCP 丢包率。UDP 不提供重传保证，不是“UDP 必然更快也必然丢包”的因果关系。 "
      },
      {
        "title": "请求例子：顺序依赖放大 RTT",
        "anchor": "请求例子顺序依赖放大-rtt",
        "level": 2,
        "text": "  接口依次远程调用 5 次，每次网络往返约 40 ms，即使响应很小，也可能累计约 200 ms 网络等待，尚未包括计算、排队、TLS 等成本。能安全并行的独立调用可以减少关键路径；有事务依赖的步骤不能只为提速随意并行。  传输 10 MiB 数据到可用吞吐 10 Mbit/s 的路径，纯传输下限约 8.39 秒，另加连接与其他开销。区分 MiB 的 2^20 字节与 MB 的 10^6 字节，不能混用单位后得出精确测速结论。 "
      },
      {
        "title": "排队与缓冲不是免费补偿",
        "anchor": "排队与缓冲不是免费补偿",
        "level": 2,
        "text": "  当发送速率长期超过瓶颈可服务速率，队列积累导致等待增加，队列满后丢包。更大的缓冲可以吸收突发，却不能提高瓶颈服务能力，反而可能让交互延迟更高。RTT 上升、抖动、丢包可能同源于拥塞，但无线干扰也可直接丢包，不存在唯一的固定先后链。  实时音视频接收端用抖动缓冲平滑到达波动，缓冲越大通常更能吸收迟到，但延迟也更高。IP 包时延变化与 RTP jitter 有各自定义，不能把“ping 最大值减最小值”直接当所有场景的标准抖动。 "
      },
      {
        "title": "WebRTC 如何测量",
        "anchor": "webrtc-如何测量",
        "level": 2,
        "text": "  availableOutgoingBitrate 是路径可用发送比特率的估计，不是网卡上限也不是实际发送速率，字段可能不可用。两次 stats 的 bytesSent 差除时间差，再乘 8，才能估计对应统计对象区间平均比特率；注意 timestamp 单位是毫秒，需换算秒。  javascript function intervalBitrate(previous, current) { const seconds = (current.timestamp - previous.timestamp) / 1000; if (seconds <= 0 current.bytesSent < previous.bytesSent) return null; return 8 (current.bytesSent - previous.bytesSent) / seconds; }   比较前确认是同一统计对象，连接重建或计数重置后重新建立基线。采样 RTP、传输层或候选对的字节口径不同，不能简单相加当单一媒体有效速率。 "
      },
      {
        "title": "拓展与工程判断",
        "anchor": "拓展与工程判断",
        "level": 2,
        "text": "  后端接口统计 p50/p95/p99 与错误率，而不只平均耗时；平均值会隐藏长尾。压测必须记录并发、请求速率、数据大小和连接复用方式。先定位瓶颈是计算、磁盘、数据库、连接池还是网络，再选择缓存、批量、并行或降码率；扩大带宽不能修复数据库锁等待。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 3393：包时延变化指标 - W3C WebRTC Stats：统计字段定义 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：100 Mbps 和 100 MB/s 相差多少，标称值能否代表应用吞吐？ 2. 实际应用：多个顺序小请求为什么可能比一个大请求更慢？ 3. 实际应用：从两次 bytesSent 怎样计算比特率？ 4. 深入追问：增大网络缓冲为什么可能伤害低延迟体验？ 5. 深入追问：比较两个 WebRTC stats 样本前需要确认什么？"
      }
    ],
    "questions": [
      {
        "id": "d688d82e6524d64a",
        "text": "基础理解：100 Mbps 和 100 MB/s 相差多少，标称值能否代表应用吞吐？"
      },
      {
        "id": "a4ba886fbdb58533",
        "text": "实际应用：多个顺序小请求为什么可能比一个大请求更慢？"
      },
      {
        "id": "8c2a53a665fdaa48",
        "text": "实际应用：从两次 bytesSent 怎样计算比特率？"
      },
      {
        "id": "cf6896f600cc01a7",
        "text": "深入追问：增大网络缓冲为什么可能伤害低延迟体验？"
      },
      {
        "id": "0901bb679013ac00",
        "text": "深入追问：比较两个 WebRTC stats 样本前需要确认什么？"
      }
    ],
    "searchText": "性能指标与排队：带宽不是响应速度 指标描述的对象不同 rtt 为一次往返时间，不等于单向延迟的两倍，方向可能不对称。链路容量、可用带宽、实际吞吐量与应用有效载荷速率也不同：100 mbps 除以 8 是理论 12.5 mb/s，协议开销与瓶颈会降低应用结果。rtt 很低仍可能下载慢，带宽很高仍可能交互慢。 丢包率需要明确采样对象和时间窗口。2000 个包丢 40 个是 2%，但连续丢 40 个与均匀丢失的体验可能不同；诊断 icmp 被过滤不等价于业务 tcp 丢包率。udp 不提供重传保证，不是“udp 必然更快也必然丢包”的因果关系。 请求例子：顺序依赖放大 rtt 接口依次远程调用 5 次，每次网络往返约 40 ms，即使响应很小，也可能累计约 200 ms 网络等待，尚未包括计算、排队、tls 等成本。能安全并行的独立调用可以减少关键路径；有事务依赖的步骤不能只为提速随意并行。 传输 10 mib 数据到可用吞吐 10 mbit/s 的路径，纯传输下限约 8.39 秒，另加连接与其他开销。区分 mib 的 2^20 字节与 mb 的 10^6 字节，不能混用单位后得出精确测速结论。 排队与缓冲不是免费补偿 当发送速率长期超过瓶颈可服务速率，队列积累导致等待增加，队列满后丢包。更大的缓冲可以吸收突发，却不能提高瓶颈服务能力，反而可能让交互延迟更高。rtt 上升、抖动、丢包可能同源于拥塞，但无线干扰也可直接丢包，不存在唯一的固定先后链。 实时音视频接收端用抖动缓冲平滑到达波动，缓冲越大通常更能吸收迟到，但延迟也更高。ip 包时延变化与 rtp jitter 有各自定义，不能把“ping 最大值减最小值”直接当所有场景的标准抖动。 webrtc 如何测量 availableoutgoingbitrate 是路径可用发送比特率的估计，不是网卡上限也不是实际发送速率，字段可能不可用。两次 stats 的 bytessent 差除时间差，再乘 8，才能估计对应统计对象区间平均比特率；注意 timestamp 单位是毫秒，需换算秒。 javascript function intervalbitrate(previous, current) { const seconds = (current.timestamp - previous.timestamp) / 1000; if (seconds <= 0 current.bytessent < previous.bytessent) return null; return 8 (current.bytessent - previous.bytessent) / seconds; } 比较前确认是同一统计对象，连接重建或计数重置后重新建立基线。采样 rtp、传输层或候选对的字节口径不同，不能简单相加当单一媒体有效速率。 拓展与工程判断 后端接口统计 p50/p95/p99 与错误率，而不只平均耗时；平均值会隐藏长尾。压测必须记录并发、请求速率、数据大小和连接复用方式。先定位瓶颈是计算、磁盘、数据库、连接池还是网络，再选择缓存、批量、并行或降码率；扩大带宽不能修复数据库锁等待。 参考资料 - rfc 3393：包时延变化指标 - w3c webrtc stats：统计字段定义 模拟面试问题 1. 基础理解：100 mbps 和 100 mb/s 相差多少，标称值能否代表应用吞吐？ 2. 实际应用：多个顺序小请求为什么可能比一个大请求更慢？ 3. 实际应用：从两次 bytessent 怎样计算比特率？ 4. 深入追问：增大网络缓冲为什么可能伤害低延迟体验？ 5. 深入追问：比较两个 webrtc stats 样本前需要确认什么？"
  },
  {
    "id": "net-p2p-transfer",
    "version": "58ba0e795dc3",
    "md": "learning/courses/networks/p2p-transfer.md",
    "title": "P2P、ICE 与可靠文件传输",
    "description": "直连探测与文件完整性属于不同层的责任。",
    "subject": "networks",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "计算机网络",
      "后端",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "P2P 不代表完全没有服务器",
        "anchor": "p2p-不代表完全没有服务器",
        "level": 2,
        "text": "  两个客户端直传业务数据仍可借助服务器做登录、发现、信令。私有 IP 不能被公网直接路由，NAT 映射和防火墙限制入站；知道对方公网地址也未必连得上。IPv6 解决地址空间问题，也不会自动取消防火墙策略。  信令交换 Offer/Answer 和候选，WebRTC 不规定必须使用某种信令协议。SDP 描述会话能力与参数；ICE 收集、检测、选择候选路径；STUN 帮助发现映射信息；TURN 提供中继候选。STUN 返回映射地址不等于直连成功，ICE 实际检查才提供连通性证据。 "
      },
      {
        "title": "一次连接的角色分工",
        "anchor": "一次连接的角色分工",
        "level": 2,
        "text": "  A 通过 WebSocket 将 offer 发到 B，B 返回 answer，两端交换 ICE candidates；候选可为本地、服务器反射或中继。ICE 选择成功的候选对，数据走直连或中继。候选可能逐步产生，信令实现要处理先收到 candidate 而远端描述尚未设置等时序。  直连和中继都应提供可观测状态，不把“信令已连接”显示为“媒体已连通”。网络切换可能需要 ICE restart，界面应区分连接中、断开、重连和失败。 "
      },
      {
        "title": "媒体轨道与 DataChannel 的目标",
        "anchor": "媒体轨道与-datachannel-的目标",
        "level": 2,
        "text": "  实时音视频轨道重视时延、编码与丢包恢复；把整个视频文件发完再本地播放重视完整性与存储，是另一条产品路线。RTCDataChannel 默认可靠有序，也支持其他可靠性/顺序配置，不能在所有代码里假定相同语义。  文件传输先发送 fileId、总大小、分块规则和文件哈希等元数据，再按 chunkIndex 发送块。1 GiB/64 KiB=16384 块只是演示；真正块大小需遵守协商的最大消息尺寸、浏览器能力和内存约束，不能硬编码为所有环境最优。 "
      },
      {
        "title": "背压与持久化确认",
        "anchor": "背压与持久化确认",
        "level": 2,
        "text": "  循环 send 大文件可能让 bufferedAmount 持续上涨。设置高低水位，超过高水位暂停读文件/发送，低水位事件后恢复；监听前后都检查当前缓冲与 readyState，处理连接关闭，避免错过事件而永久等待。背压限制排队内存，不等于应用已收到，更不等于写盘成功。  接收端写盘并确认块后更新可恢复位图；重连后交换已持久化块清单，只补缺失块。重复块按 fileId/index 幂等处理，最后检查长度与全文件哈希。顺序可靠通道在原连接里不丢消息，也不能跨进程崩溃自动恢复应用状态。 "
      },
      {
        "title": "开发例子：同步观影与文件分发",
        "anchor": "开发例子同步观影与文件分发",
        "level": 2,
        "text": "  同步观影可只同步播放状态，让两端各自获取合法可访问媒体，也可转实时媒体轨道；文件分发则需块级进度和校验。方案应先明确内容来源、带宽预算、是否允许等待下载及失败恢复，再决定技术，不能用 LAN 成功样例代替互联网网络验证。  测试局域网、不同 NAT、强制 TURN、切换网络、暂停写盘、断线重连和文件哈希不一致。错误消息要指出失败阶段，避免让用户反复刷新丢失进度。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 8445 ICE - W3C WebRTC：DataChannel 与背压接口 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：信令、SDP、ICE、STUN 与 TURN 各解决什么问题？ 2. 实际应用：STUN 查到公网映射为什么仍可能不能直连？ 3. 实际应用：bufferedAmount 降低能否证明接收端已写盘？ 4. 深入追问：可靠有序通道为什么仍需应用断点续传？ 5. 深入追问：同步观影与完整文件传输应如何选型和验收？"
      }
    ],
    "questions": [
      {
        "id": "e7b463c582cbbf4c",
        "text": "基础理解：信令、SDP、ICE、STUN 与 TURN 各解决什么问题？"
      },
      {
        "id": "6da08b8a646f854b",
        "text": "实际应用：STUN 查到公网映射为什么仍可能不能直连？"
      },
      {
        "id": "4a1305c195e9b910",
        "text": "实际应用：bufferedAmount 降低能否证明接收端已写盘？"
      },
      {
        "id": "b0654a7d57154c23",
        "text": "深入追问：可靠有序通道为什么仍需应用断点续传？"
      },
      {
        "id": "1914babf52842f68",
        "text": "深入追问：同步观影与完整文件传输应如何选型和验收？"
      }
    ],
    "searchText": "p2p、ice 与可靠文件传输 p2p 不代表完全没有服务器 两个客户端直传业务数据仍可借助服务器做登录、发现、信令。私有 ip 不能被公网直接路由，nat 映射和防火墙限制入站；知道对方公网地址也未必连得上。ipv6 解决地址空间问题，也不会自动取消防火墙策略。 信令交换 offer/answer 和候选，webrtc 不规定必须使用某种信令协议。sdp 描述会话能力与参数；ice 收集、检测、选择候选路径；stun 帮助发现映射信息；turn 提供中继候选。stun 返回映射地址不等于直连成功，ice 实际检查才提供连通性证据。 一次连接的角色分工 a 通过 websocket 将 offer 发到 b，b 返回 answer，两端交换 ice candidates；候选可为本地、服务器反射或中继。ice 选择成功的候选对，数据走直连或中继。候选可能逐步产生，信令实现要处理先收到 candidate 而远端描述尚未设置等时序。 直连和中继都应提供可观测状态，不把“信令已连接”显示为“媒体已连通”。网络切换可能需要 ice restart，界面应区分连接中、断开、重连和失败。 媒体轨道与 datachannel 的目标 实时音视频轨道重视时延、编码与丢包恢复；把整个视频文件发完再本地播放重视完整性与存储，是另一条产品路线。rtcdatachannel 默认可靠有序，也支持其他可靠性/顺序配置，不能在所有代码里假定相同语义。 文件传输先发送 fileid、总大小、分块规则和文件哈希等元数据，再按 chunkindex 发送块。1 gib/64 kib=16384 块只是演示；真正块大小需遵守协商的最大消息尺寸、浏览器能力和内存约束，不能硬编码为所有环境最优。 背压与持久化确认 循环 send 大文件可能让 bufferedamount 持续上涨。设置高低水位，超过高水位暂停读文件/发送，低水位事件后恢复；监听前后都检查当前缓冲与 readystate，处理连接关闭，避免错过事件而永久等待。背压限制排队内存，不等于应用已收到，更不等于写盘成功。 接收端写盘并确认块后更新可恢复位图；重连后交换已持久化块清单，只补缺失块。重复块按 fileid/index 幂等处理，最后检查长度与全文件哈希。顺序可靠通道在原连接里不丢消息，也不能跨进程崩溃自动恢复应用状态。 开发例子：同步观影与文件分发 同步观影可只同步播放状态，让两端各自获取合法可访问媒体，也可转实时媒体轨道；文件分发则需块级进度和校验。方案应先明确内容来源、带宽预算、是否允许等待下载及失败恢复，再决定技术，不能用 lan 成功样例代替互联网网络验证。 测试局域网、不同 nat、强制 turn、切换网络、暂停写盘、断线重连和文件哈希不一致。错误消息要指出失败阶段，避免让用户反复刷新丢失进度。 参考资料 - rfc 8445 ice - w3c webrtc：datachannel 与背压接口 模拟面试问题 1. 基础理解：信令、sdp、ice、stun 与 turn 各解决什么问题？ 2. 实际应用：stun 查到公网映射为什么仍可能不能直连？ 3. 实际应用：bufferedamount 降低能否证明接收端已写盘？ 4. 深入追问：可靠有序通道为什么仍需应用断点续传？ 5. 深入追问：同步观影与完整文件传输应如何选型和验收？"
  },
  {
    "id": "os-processes-scheduling",
    "version": "8cb35a0bd117",
    "md": "learning/courses/operating-systems/processes-scheduling.md",
    "title": "进程、线程与调度：谁在等待什么",
    "description": "从系统调用到执行现场，理解并发模型和调度取舍。",
    "subject": "operating-systems",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "操作系统",
      "后端",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "隔离资源与保存执行现场",
        "anchor": "隔离资源与保存执行现场",
        "level": 2,
        "text": "  进程是地址空间和资源管理的重要单位，线程是其中执行流。一个进程的线程通常共享代码、堆和文件描述符，各自有寄存器现场与栈。PCB/TCB 是教材抽象名，真实内核组织可能不同，不必寻找和教材表格完全一一对应的结构。  函数调用的栈帧可能保存返回信息、局部数据、溢出参数与寄存器；确切布局由 ABI、架构与优化决定，不是所有参数都必须先放栈上。递归深度大可能耗尽栈，Java StackOverflowError 与 Python RecursionError 是不同运行时表现。尾调用优化也不能在 Java/Python 中一概假定。  用户态不能任意修改页表、直接操控全部硬件。程序经系统调用请求内核服务，但“进入内核唯一途径是系统调用”不准确，异常与外部中断也会进入内核处理。普通内存清零不是普遍意义的特权指令，IO 指令权限也依赖架构和配置，不能将教材例子推广为所有 CPU 事实。 "
      },
      {
        "title": "就绪和阻塞：缺的是哪种资源",
        "anchor": "就绪和阻塞缺的是哪种资源",
        "level": 2,
        "text": "  三态模型中，就绪只等 CPU；运行正在执行；阻塞在等 IO、锁或定时事件，给 CPU 也无法继续。唤醒先成为可调度状态，再获得 CPU；实际可能立即被调度，图里的中间步骤是逻辑区分。  Spring Boot 一个请求线程调用阻塞数据库查询，在网络/驱动等待期间可能不占 CPU。此时把线程池开得更大不一定更快，还会增加栈、调度与数据库连接压力。CPU 密集任务则需要匹配核数与资源限制，不能用同一固定线程数公式覆盖全部负载。  Java Thread.State 与 OS 状态不一一对应，Java RUNNABLE 可覆盖就绪或正在执行等情况。不能仅凭线程转储的 RUNNABLE 就断定它一直消耗 CPU，应结合线程 CPU 时间和栈。 "
      },
      {
        "title": "切换与用户线程映射",
        "anchor": "切换与用户线程映射",
        "level": 2,
        "text": "  上下文切换保存当前 PC/寄存器等，恢复另一个执行流；跨地址空间还可能影响地址翻译与缓存。用户级线程能否多核并行，取决于是否映射到多个内核可调度线程：多对一通常不能，M:N 可以。某个阻塞调用是否拖住全部协程取决于运行时调度、调用适配与承载线程，不是“用户线程”四字决定。  系统调用不必然发生线程切换，线程切换也不必然跨进程。后端增加异步并不让 CPU 计算消失，而是改变等待时怎样复用执行资源。 "
      },
      {
        "title": "调度算法是目标之间的取舍",
        "anchor": "调度算法是目标之间的取舍",
        "level": 2,
        "text": "  FCFS 可能让短任务排在长任务后；SJF 依赖运行时长信息，在特定理想模型下优化平均等待，在线持续短任务可能饿死长任务。RR 时间片过大接近先来先服务，过小使切换比例变高。MLFQ 根据消耗 CPU 的行为调整优先级，常配周期提升缓解饥饿；原稿“反复用不完时间片就降级”写反，应是消耗完配额且仍需执行时降级，具体规则随实现。  教材高级/中级/低级调度分别描述作业接纳、挂起/激活与 CPU 分派。现代 Linux 常规服务并不总按“整个进程搬到外存”的三层模型实现。公平调度 CFS 与后来的 EEVDF 有实际版本演进，不能说当前所有 OS 都是某一种教材算法。  实时调度关注截止期：EDF 比较 deadline；LLF 看 deadline-now-remaining ，松弛度为负代表在该模型下已不能按时完成。算法名字不等于任意任务集都有保证；需满足可调度性、执行预算及抢占模型等假设。 "
      },
      {
        "title": "IPC 的开销与同步责任",
        "anchor": "ipc-的开销与同步责任",
        "level": 2,
        "text": "  共享内存让进程映射同一内存区域，减少某些复制，但初始化、缓存一致性、同步仍有成本，不保证在每种负载下最快。消息传递可通过管道、消息队列或 socket，发送接收并不天然保证全部业务操作互斥；仍需协议、顺序和一致性设计。本机共享内存不可直接当跨机器普通内存使用，分布式共享内存是额外系统。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Linux pthreads 进程共享与线程私有属性 - POSIX 共享内存接口 - Linux CFS 与 EEVDF 演进说明 - Linux Deadline 调度及预算约束 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：进程与线程分别隔离或共享哪些状态？ 2. 实际应用：线程等数据库时为什么不一定消耗 CPU？ 3. 实际应用：系统调用为什么不必然引起线程切换？ 4. 深入追问：多对一和多对多线程模型如何影响多核与阻塞？ 5. 深入追问：MLFQ 降级、公平调度和实时截止期分别优化什么？ 6. 深入追问：共享内存为什么仍需要同步且不保证所有场景最快？"
      }
    ],
    "questions": [
      {
        "id": "1b1ba5be86ad96fc",
        "text": "基础理解：进程与线程分别隔离或共享哪些状态？"
      },
      {
        "id": "65543513c80a94f3",
        "text": "实际应用：线程等数据库时为什么不一定消耗 CPU？"
      },
      {
        "id": "6cfbb33917f15ea7",
        "text": "实际应用：系统调用为什么不必然引起线程切换？"
      },
      {
        "id": "64f2bbf688b37d0d",
        "text": "深入追问：多对一和多对多线程模型如何影响多核与阻塞？"
      },
      {
        "id": "13a766df63f4a105",
        "text": "深入追问：MLFQ 降级、公平调度和实时截止期分别优化什么？"
      },
      {
        "id": "3aedf09c0f582466",
        "text": "深入追问：共享内存为什么仍需要同步且不保证所有场景最快？"
      }
    ],
    "searchText": "进程、线程与调度：谁在等待什么 隔离资源与保存执行现场 进程是地址空间和资源管理的重要单位，线程是其中执行流。一个进程的线程通常共享代码、堆和文件描述符，各自有寄存器现场与栈。pcb/tcb 是教材抽象名，真实内核组织可能不同，不必寻找和教材表格完全一一对应的结构。 函数调用的栈帧可能保存返回信息、局部数据、溢出参数与寄存器；确切布局由 abi、架构与优化决定，不是所有参数都必须先放栈上。递归深度大可能耗尽栈，java stackoverflowerror 与 python recursionerror 是不同运行时表现。尾调用优化也不能在 java/python 中一概假定。 用户态不能任意修改页表、直接操控全部硬件。程序经系统调用请求内核服务，但“进入内核唯一途径是系统调用”不准确，异常与外部中断也会进入内核处理。普通内存清零不是普遍意义的特权指令，io 指令权限也依赖架构和配置，不能将教材例子推广为所有 cpu 事实。 就绪和阻塞：缺的是哪种资源 三态模型中，就绪只等 cpu；运行正在执行；阻塞在等 io、锁或定时事件，给 cpu 也无法继续。唤醒先成为可调度状态，再获得 cpu；实际可能立即被调度，图里的中间步骤是逻辑区分。 spring boot 一个请求线程调用阻塞数据库查询，在网络/驱动等待期间可能不占 cpu。此时把线程池开得更大不一定更快，还会增加栈、调度与数据库连接压力。cpu 密集任务则需要匹配核数与资源限制，不能用同一固定线程数公式覆盖全部负载。 java thread.state 与 os 状态不一一对应，java runnable 可覆盖就绪或正在执行等情况。不能仅凭线程转储的 runnable 就断定它一直消耗 cpu，应结合线程 cpu 时间和栈。 切换与用户线程映射 上下文切换保存当前 pc/寄存器等，恢复另一个执行流；跨地址空间还可能影响地址翻译与缓存。用户级线程能否多核并行，取决于是否映射到多个内核可调度线程：多对一通常不能，m:n 可以。某个阻塞调用是否拖住全部协程取决于运行时调度、调用适配与承载线程，不是“用户线程”四字决定。 系统调用不必然发生线程切换，线程切换也不必然跨进程。后端增加异步并不让 cpu 计算消失，而是改变等待时怎样复用执行资源。 调度算法是目标之间的取舍 fcfs 可能让短任务排在长任务后；sjf 依赖运行时长信息，在特定理想模型下优化平均等待，在线持续短任务可能饿死长任务。rr 时间片过大接近先来先服务，过小使切换比例变高。mlfq 根据消耗 cpu 的行为调整优先级，常配周期提升缓解饥饿；原稿“反复用不完时间片就降级”写反，应是消耗完配额且仍需执行时降级，具体规则随实现。 教材高级/中级/低级调度分别描述作业接纳、挂起/激活与 cpu 分派。现代 linux 常规服务并不总按“整个进程搬到外存”的三层模型实现。公平调度 cfs 与后来的 eevdf 有实际版本演进，不能说当前所有 os 都是某一种教材算法。 实时调度关注截止期：edf 比较 deadline；llf 看 deadline-now-remaining ，松弛度为负代表在该模型下已不能按时完成。算法名字不等于任意任务集都有保证；需满足可调度性、执行预算及抢占模型等假设。 ipc 的开销与同步责任 共享内存让进程映射同一内存区域，减少某些复制，但初始化、缓存一致性、同步仍有成本，不保证在每种负载下最快。消息传递可通过管道、消息队列或 socket，发送接收并不天然保证全部业务操作互斥；仍需协议、顺序和一致性设计。本机共享内存不可直接当跨机器普通内存使用，分布式共享内存是额外系统。 参考资料 - linux pthreads 进程共享与线程私有属性 - posix 共享内存接口 - linux cfs 与 eevdf 演进说明 - linux deadline 调度及预算约束 模拟面试问题 1. 基础理解：进程与线程分别隔离或共享哪些状态？ 2. 实际应用：线程等数据库时为什么不一定消耗 cpu？ 3. 实际应用：系统调用为什么不必然引起线程切换？ 4. 深入追问：多对一和多对多线程模型如何影响多核与阻塞？ 5. 深入追问：mlfq 降级、公平调度和实时截止期分别优化什么？ 6. 深入追问：共享内存为什么仍需要同步且不保证所有场景最快？"
  },
  {
    "id": "os-compile-link",
    "version": "80411d1a4fbc",
    "md": "learning/courses/operating-systems/compile-link.md",
    "title": "从源码到运行：编译、链接与诊断",
    "description": "把语法、符号解析、动态库加载和性能优化分层判断。",
    "subject": "operating-systems",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "操作系统",
      "后端",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "四个阶段与观察方法",
        "anchor": "四个阶段与观察方法",
        "level": 2,
        "text": "  典型 C 工具链为预处理、编译、汇编、链接。预处理展开 include/宏与条件分支，编译将语言转换为目标汇编，汇编产生可重定位目标文件，链接解析符号并组织可执行文件。GCC 是驱动程序，具体工具与中间文件是否写盘随参数变化，不必真有四个可见子进程。  bash gcc -E hello.c -o hello.i gcc -S hello.c -o hello.s gcc -c hello.c -o hello.o gcc hello.o -o hello   -E 停在预处理，-S 停在汇编文本，-c 产生目标文件而不链接；-o 后是输出名。目标文件并非单纯一串待定地址的机器码，还包含节、符号、重定位等信息。文件后缀只是常见约定，不能仅以名字判断格式。 "
      },
      {
        "title": "链接器究竟找什么",
        "anchor": "链接器究竟找什么",
        "level": 2,
        "text": "  调用了声明但没有实现，或没有把对应目标文件/库传给链接器，可出现 undefined reference。静态库通常只将被需要的目标成员提取进入结果，并非无条件复制全库；动态链接保留相关依赖与动态符号处理，装载器在运行时加载与解析，可能存在延迟绑定。  原稿“printf 的实现一定被合并进可执行文件”仅对应某种静态链接情况。常见动态链接 C 程序运行时依赖共享 libc。运行时缺 .so 与链接期找不到符号属于不同阶段，排查也不同。  头文件放普通外部函数定义，多个翻译单元可能产生 multiple definition；但 static、inline 和 C/C++ 语义存在细节，不能说所有头文件函数体都违法。C/C++ 混编还需一致的调用约定与符号链接，例如合适的 extern \"C\"。 "
      },
      {
        "title": "开发例子：JNI 库在开发机能跑、服务器失败",
        "anchor": "开发例子jni-库在开发机能跑服务器失败",
        "level": 2,
        "text": "  Java 源码通常先成为字节码，由 JVM 解释/JIT/AOT 等执行，不能完整套用 C 的四阶段产物。JNI 原生库则再次引入本机架构和动态链接依赖：开发机 x86_64 Linux 编译的 so 不能默认在不同架构或不同 libc 环境加载。  排查顺序是确认目标系统与架构、库实际路径和依赖、符号导出、JVM/原生签名，再看业务逻辑。Java UnsatisfiedLinkError 可能来自找不到文件、依赖缺失或方法符号不匹配，不等于 Java 编译器语法错误。 "
      },
      {
        "title": "优化不改变程序的合法语义",
        "anchor": "优化不改变程序的合法语义",
        "level": 2,
        "text": "  -O0、-Og、-O2、-O3 是一组优化策略，不保证级别越高每个程序越快或更小；某些变换增加代码体积或改变调试可见性。调试可用 -g 配合适当优化，-Og 并非绝对禁止优化。性能比较用相同输入和构建条件，先看算法与热点再调选项。  编译器可利用语言规则优化，C/C++ 未定义行为可能让错误在优化后暴露；不能用“不开优化就正常”证明代码正确。原稿“本质基于概率”和“优化性能、避免”缺上下文，不补成确定的编译原理结论，仅在修订记录标为未证实碎片。 "
      },
      {
        "title": "适度拓展",
        "anchor": "适度拓展",
        "level": 2,
        "text": "  链接也会受库顺序、LTO、符号可见性与构建系统影响。先用最小两个源文件复现缺实现或重复定义，再回到大型工程，错误范围更清楚。构建成功只证明生成产物，不证明功能、性能或安全要求全部达标。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - GCC Overall Options - GCC 优化选项 - GNU ld：库与符号链接 - Java 17 UnsatisfiedLinkError "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：-E、-S、-c 分别在哪里停止？ 2. 实际应用：undefined reference 和运行时缺共享库为什么要分开排查？ 3. 实际应用：JNI 开发机正常、服务器加载失败应检查哪些环境条件？ 4. 深入追问：静态链接是否把整座静态库完整复制进程序？ 5. 深入追问：为什么优化级别更高并不保证程序更快？"
      }
    ],
    "questions": [
      {
        "id": "495ccba8b86255f0",
        "text": "基础理解：-E、-S、-c 分别在哪里停止？"
      },
      {
        "id": "7a75ee88cf9d8a43",
        "text": "实际应用：undefined reference 和运行时缺共享库为什么要分开排查？"
      },
      {
        "id": "ea955ba1a5981f75",
        "text": "实际应用：JNI 开发机正常、服务器加载失败应检查哪些环境条件？"
      },
      {
        "id": "f4407db98be32530",
        "text": "深入追问：静态链接是否把整座静态库完整复制进程序？"
      },
      {
        "id": "41133c2cbc1c7b35",
        "text": "深入追问：为什么优化级别更高并不保证程序更快？"
      }
    ],
    "searchText": "从源码到运行：编译、链接与诊断 四个阶段与观察方法 典型 c 工具链为预处理、编译、汇编、链接。预处理展开 include/宏与条件分支，编译将语言转换为目标汇编，汇编产生可重定位目标文件，链接解析符号并组织可执行文件。gcc 是驱动程序，具体工具与中间文件是否写盘随参数变化，不必真有四个可见子进程。 bash gcc -e hello.c -o hello.i gcc -s hello.c -o hello.s gcc -c hello.c -o hello.o gcc hello.o -o hello -e 停在预处理，-s 停在汇编文本，-c 产生目标文件而不链接；-o 后是输出名。目标文件并非单纯一串待定地址的机器码，还包含节、符号、重定位等信息。文件后缀只是常见约定，不能仅以名字判断格式。 链接器究竟找什么 调用了声明但没有实现，或没有把对应目标文件/库传给链接器，可出现 undefined reference。静态库通常只将被需要的目标成员提取进入结果，并非无条件复制全库；动态链接保留相关依赖与动态符号处理，装载器在运行时加载与解析，可能存在延迟绑定。 原稿“printf 的实现一定被合并进可执行文件”仅对应某种静态链接情况。常见动态链接 c 程序运行时依赖共享 libc。运行时缺 .so 与链接期找不到符号属于不同阶段，排查也不同。 头文件放普通外部函数定义，多个翻译单元可能产生 multiple definition；但 static、inline 和 c/c++ 语义存在细节，不能说所有头文件函数体都违法。c/c++ 混编还需一致的调用约定与符号链接，例如合适的 extern \"c\"。 开发例子：jni 库在开发机能跑、服务器失败 java 源码通常先成为字节码，由 jvm 解释/jit/aot 等执行，不能完整套用 c 的四阶段产物。jni 原生库则再次引入本机架构和动态链接依赖：开发机 x86_64 linux 编译的 so 不能默认在不同架构或不同 libc 环境加载。 排查顺序是确认目标系统与架构、库实际路径和依赖、符号导出、jvm/原生签名，再看业务逻辑。java unsatisfiedlinkerror 可能来自找不到文件、依赖缺失或方法符号不匹配，不等于 java 编译器语法错误。 优化不改变程序的合法语义 -o0、-og、-o2、-o3 是一组优化策略，不保证级别越高每个程序越快或更小；某些变换增加代码体积或改变调试可见性。调试可用 -g 配合适当优化，-og 并非绝对禁止优化。性能比较用相同输入和构建条件，先看算法与热点再调选项。 编译器可利用语言规则优化，c/c++ 未定义行为可能让错误在优化后暴露；不能用“不开优化就正常”证明代码正确。原稿“本质基于概率”和“优化性能、避免”缺上下文，不补成确定的编译原理结论，仅在修订记录标为未证实碎片。 适度拓展 链接也会受库顺序、lto、符号可见性与构建系统影响。先用最小两个源文件复现缺实现或重复定义，再回到大型工程，错误范围更清楚。构建成功只证明生成产物，不证明功能、性能或安全要求全部达标。 参考资料 - gcc overall options - gcc 优化选项 - gnu ld：库与符号链接 - java 17 unsatisfiedlinkerror 模拟面试问题 1. 基础理解：-e、-s、-c 分别在哪里停止？ 2. 实际应用：undefined reference 和运行时缺共享库为什么要分开排查？ 3. 实际应用：jni 开发机正常、服务器加载失败应检查哪些环境条件？ 4. 深入追问：静态链接是否把整座静态库完整复制进程序？ 5. 深入追问：为什么优化级别更高并不保证程序更快？"
  },
  {
    "id": "os-deadlocks",
    "version": "0e628cb83390",
    "md": "learning/courses/operating-systems/deadlocks.md",
    "title": "死锁、资源顺序与安全状态",
    "description": "区分预防、避免、检测和恢复，并连接后端锁依赖。",
    "subject": "operating-systems",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "操作系统",
      "后端",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "等待为什么永远不能推进",
        "anchor": "等待为什么永远不能推进",
        "level": 2,
        "text": "  A 持锁 L1 等 L2，B 持锁 L2 等 L1，构成循环等待。教材资源模型中死锁需要互斥、占有且等待、不可抢占、循环等待同时存在；统一资源顺序可以打破环路。这里的“不可抢占”指资源不能安全强取，不是 CPU 不能时间片抢占。  死锁不一定非得两个不同线程：一个线程重复获取不支持重入的锁，也可能自我等待。饥饿是长期得不到机会而其他任务仍推进；活锁是双方不断让步或重试却没有进展；死循环可能在消耗 CPU。这些现象应通过等待关系与进度判断，不能只看“卡住”。 "
      },
      {
        "title": "后端例子：账户转账",
        "anchor": "后端例子账户转账",
        "level": 2,
        "text": "  T1 从账户 A 转给 B，先锁 A 再锁 B；T2 反向转账先锁 B 再锁 A，会形成环。按账户 ID 从小到大加锁，再在临界区内按业务方向变更金额，可破坏循环等待。相同账户需单独处理，数据库行锁顺序、事务边界及实际访问计划也要一致。  仅设置锁超时不一定杜绝死锁，但可使调用放弃等待；放弃时应回滚已改状态并释放资源，重试要限制次数并带退避。不能杀掉持锁线程就假定数据自动恢复一致；Java finally、数据库事务回滚和外部副作用分别有不同保证。 "
      },
      {
        "title": "避免不是预防",
        "anchor": "避免不是预防",
        "level": 2,
        "text": "  预防改变资源规则，避免在每次分配前判断是否仍安全。银行家算法假设最大需求已知，Need=Max-Allocation，先检查请求不超过声明需求且当前可用，然后试分配并模拟安全序列。安全性检查使用独立 Work，找到 Need<=Work 的未完成进程后假设完成，Work+=其当前 Allocation。  单资源例：总量 10，P0 已持 3 最多需 9，P1 已持 2 最多需 4，Available=5。P1 还需 2，可以完成后归还 2，Work 变 7；P0 还需 6，随后可完成，故存在安全序列 P1→P0。若先再给 P0 三份，可用变 2，P1 仍能完成；若把剩余都给 P0，则可用为 0，而 P0/P1 都还需 1/2，试分配不安全，应拒绝。  不安全表示在该最大需求模型下无法保证所有任务最终完成，并不等于已经发生实际死锁；任务可能根本不再申请其最大值。银行家在一般互联网业务中难获完整需求，因此常使用事务死锁检测与重试，而不是把它当所有数据库的实际算法。 "
      },
      {
        "title": "图检测与恢复",
        "anchor": "图检测与恢复",
        "level": 2,
        "text": "  资源分配图 P→R 表请求，R→P 表已分配。每类单实例时，有环可判死锁；多实例有环只是必要线索，可能仍有可释放的实例。使用等待图也要说明建图规则与资源模型，不能看任意业务依赖图的环就宣布进程死锁。  检测到后可选择中止事务、回滚或在可恢复的模型下抢占资源。选择受害者考虑已做工作、重要性与饥饿，重复杀同一事务可能造成另一种不公平。 "
      },
      {
        "title": "优先级倒置不是同一问题",
        "anchor": "优先级倒置不是同一问题",
        "level": 2,
        "text": "  低优先级 L 持锁，高优先级 H 等锁，中优先级 M 抢占 L，使 H 被间接延迟。优先级继承暂时提高持锁 L 的调度优先级，让它更快完成释放；不把锁强行转给 H，不能据此解决循环等待。支持该协议的锁和调度配置才会生效，普通 Java 锁不能自动假设具有 OS 实时优先级继承。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Linux RT-mutex 优先级继承 - PostgreSQL 显式锁与死锁 - Java 17 ThreadMXBean 死锁检测接口 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：不可抢占资源与抢占 CPU 为什么不是一回事？ 2. 实际应用：反向转账如何通过全局锁顺序防止循环等待？ 3. 实际应用：超时取消后为什么还需要回滚与释放？ 4. 深入追问：不安全状态为什么不一定已经死锁？ 5. 深入追问：单实例和多实例资源图的环分别能证明什么？ 6. 深入追问：优先级继承为什么不能替代死锁预防？"
      }
    ],
    "questions": [
      {
        "id": "6784e914303b30b8",
        "text": "基础理解：不可抢占资源与抢占 CPU 为什么不是一回事？"
      },
      {
        "id": "cf4a3c38451c3052",
        "text": "实际应用：反向转账如何通过全局锁顺序防止循环等待？"
      },
      {
        "id": "88b99f95b336013f",
        "text": "实际应用：超时取消后为什么还需要回滚与释放？"
      },
      {
        "id": "8c2b5298135099c0",
        "text": "深入追问：不安全状态为什么不一定已经死锁？"
      },
      {
        "id": "d4b291bdf6a2d832",
        "text": "深入追问：单实例和多实例资源图的环分别能证明什么？"
      },
      {
        "id": "2b38363669d65239",
        "text": "深入追问：优先级继承为什么不能替代死锁预防？"
      }
    ],
    "searchText": "死锁、资源顺序与安全状态 等待为什么永远不能推进 a 持锁 l1 等 l2，b 持锁 l2 等 l1，构成循环等待。教材资源模型中死锁需要互斥、占有且等待、不可抢占、循环等待同时存在；统一资源顺序可以打破环路。这里的“不可抢占”指资源不能安全强取，不是 cpu 不能时间片抢占。 死锁不一定非得两个不同线程：一个线程重复获取不支持重入的锁，也可能自我等待。饥饿是长期得不到机会而其他任务仍推进；活锁是双方不断让步或重试却没有进展；死循环可能在消耗 cpu。这些现象应通过等待关系与进度判断，不能只看“卡住”。 后端例子：账户转账 t1 从账户 a 转给 b，先锁 a 再锁 b；t2 反向转账先锁 b 再锁 a，会形成环。按账户 id 从小到大加锁，再在临界区内按业务方向变更金额，可破坏循环等待。相同账户需单独处理，数据库行锁顺序、事务边界及实际访问计划也要一致。 仅设置锁超时不一定杜绝死锁，但可使调用放弃等待；放弃时应回滚已改状态并释放资源，重试要限制次数并带退避。不能杀掉持锁线程就假定数据自动恢复一致；java finally、数据库事务回滚和外部副作用分别有不同保证。 避免不是预防 预防改变资源规则，避免在每次分配前判断是否仍安全。银行家算法假设最大需求已知，need=max-allocation，先检查请求不超过声明需求且当前可用，然后试分配并模拟安全序列。安全性检查使用独立 work，找到 need<=work 的未完成进程后假设完成，work+=其当前 allocation。 单资源例：总量 10，p0 已持 3 最多需 9，p1 已持 2 最多需 4，available=5。p1 还需 2，可以完成后归还 2，work 变 7；p0 还需 6，随后可完成，故存在安全序列 p1→p0。若先再给 p0 三份，可用变 2，p1 仍能完成；若把剩余都给 p0，则可用为 0，而 p0/p1 都还需 1/2，试分配不安全，应拒绝。 不安全表示在该最大需求模型下无法保证所有任务最终完成，并不等于已经发生实际死锁；任务可能根本不再申请其最大值。银行家在一般互联网业务中难获完整需求，因此常使用事务死锁检测与重试，而不是把它当所有数据库的实际算法。 图检测与恢复 资源分配图 p→r 表请求，r→p 表已分配。每类单实例时，有环可判死锁；多实例有环只是必要线索，可能仍有可释放的实例。使用等待图也要说明建图规则与资源模型，不能看任意业务依赖图的环就宣布进程死锁。 检测到后可选择中止事务、回滚或在可恢复的模型下抢占资源。选择受害者考虑已做工作、重要性与饥饿，重复杀同一事务可能造成另一种不公平。 优先级倒置不是同一问题 低优先级 l 持锁，高优先级 h 等锁，中优先级 m 抢占 l，使 h 被间接延迟。优先级继承暂时提高持锁 l 的调度优先级，让它更快完成释放；不把锁强行转给 h，不能据此解决循环等待。支持该协议的锁和调度配置才会生效，普通 java 锁不能自动假设具有 os 实时优先级继承。 参考资料 - linux rt-mutex 优先级继承 - postgresql 显式锁与死锁 - java 17 threadmxbean 死锁检测接口 模拟面试问题 1. 基础理解：不可抢占资源与抢占 cpu 为什么不是一回事？ 2. 实际应用：反向转账如何通过全局锁顺序防止循环等待？ 3. 实际应用：超时取消后为什么还需要回滚与释放？ 4. 深入追问：不安全状态为什么不一定已经死锁？ 5. 深入追问：单实例和多实例资源图的环分别能证明什么？ 6. 深入追问：优先级继承为什么不能替代死锁预防？"
  },
  {
    "id": "java-boot",
    "version": "aa289a5e5d63",
    "md": "learning/courses/java-web/01-java-boot.md",
    "title": "Spring Boot 3：启动、Starter 与自动配置",
    "description": "区分应用装配、服务器启动和运行时请求三个阶段。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 5,
    "outline": [
      {
        "title": "四个技术各司其职",
        "anchor": "四个技术各司其职",
        "level": 2,
        "text": "  Spring Framework 提供容器、事务等能力；Spring MVC 负责 Servlet 栈请求处理；Tomcat 是 HTTP 服务器和 Servlet 容器；Boot 简化依赖、配置和启动。Boot 可以运行非 Web 应用，也可以采用别的 Web 技术栈，不是所有 Boot 项目都有 Tomcat。  本课程锁定 Java 17+、Boot 3.x、Spring Framework 6.x，Servlet 与 Validation 使用 jakarta 包；JDBC 等 Java SE API 中的 javax.sql 不因此改名。不要全局替换所有 javax，也不要把 Boot 4 的 starter 命名混进 Boot 3 教程。 "
      },
      {
        "title": "最小启动结构",
        "anchor": "最小启动结构",
        "level": 2,
        "text": "  java package com.example.shop; @SpringBootApplication public class ShopApplication { public static void main(String[] args) { SpringApplication.run(ShopApplication.class, args); } }   注解组合 @SpringBootConfiguration、@EnableAutoConfiguration 与 @ComponentScan。启动类放根包，业务组件放其子包。扫描是注册候选定义的重要机制，不是先遍历所有对象再给它们贴 Bean 标记。  starter-web 组织相关依赖，典型 Servlet Web 项目默认引入嵌入式 Tomcat。它不是代码生成器；只加依赖也不会自动生成订单 Controller。 "
      },
      {
        "title": "自动配置有条件",
        "anchor": "自动配置有条件",
        "level": 2,
        "text": "  类路径存在某能力、属性满足、用户未提供某 Bean 时，自动配置可能生效。定义自有 DataSource 后相关默认配置会让步；手写配置并非总是覆盖所有自动配置，需看具体条件和顺序。  启动时读取环境配置、选择应用上下文、注册定义、刷新容器并启动适用服务器。真实启动不是严格三行伪代码，后置处理器与服务器生命周期相互配合；请求到来时通常使用已创建的共享组件，而非重新跑一次全部启动流程。 "
      },
      {
        "title": "实际开发：配置与诊断",
        "anchor": "实际开发配置与诊断",
        "level": 2,
        "text": "  yaml server: port: 8081 spring: datasource: url: ${DB_URL} username: ${DB_USERNAME} password: ${DB_PASSWORD}   环境变量提供敏感值，不提交生产口令。修改配置需区分默认值、Profile、外部文件与命令行优先级。排查“为什么没有某 Bean”可使用 --debug 的条件报告，先看缺类、条件与扫描范围，再盲目添加注解。  循环依赖优先改职责；开启允许循环引用也无法解决所有构造器循环。Boot 管理兼容依赖版本，手工覆盖版本前先确认兼容与安全修复依据。 "
      },
      {
        "title": "配置绑定与源码入口",
        "anchor": "配置绑定与源码入口",
        "level": 2,
        "text": "  @Value(\"${server.port:8080}\") 提供占位符缺省值，但读取的是配置值； server.port=0 时实际监听端口需在服务器启动后通过 WebServer API 或事件获得。不能假设框架的内部默认端口必然已作为 Environment 属性存在。  成组业务参数可用 @ConfigurationProperties(prefix = \"shop.order\") ，例如将订单超时绑定到 record；还需 @ConfigurationPropertiesScan 、 @EnableConfigurationProperties 或显式 Bean 注册，注解本身不保证任意类都自动可注入。参数建议用 Duration 等明确单位，避免把 30 到底是秒还是分钟留给调用方猜。  Boot 3 的自定义自动配置候选通常登记在 META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports 。这与扫描应用的 @ComponentScan 是不同发现路径。追踪机制可从 SpringApplication.run 、 AbstractApplicationContext.refresh 、配置类解析和 AutoConfigurationImportSelector 入手，先在自己的 Controller/Service 断点观察调用栈，再逐步进入框架。  Actuator 可帮助查看健康、映射与条件，但端点的可用、启用和 HTTP 暴露是不同配置。不要因本地能看到端点就把 beans、env、conditions 等未经认证暴露给公网。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Boot 3.5 自动配置 - Boot 3.5 应用启动注解 - Boot 3.5 外部配置 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Boot、MVC、Tomcat 各解决什么问题？ 2. 【应用】加了 @Service 却无法注入，应检查什么？ 3. 【应用】如何查明某个自动配置为什么没有生效？ 4. 【深入】为什么自定义 DataSource 能影响自动配置？ 5. 【深入】Boot 3 升级中的 jakarta 迁移是否意味着替换全部 javax？ "
      }
    ],
    "questions": [
      {
        "id": "209f827af10a1712",
        "text": "【基础】Boot、MVC、Tomcat 各解决什么问题？"
      },
      {
        "id": "1ecce72332bf1c7e",
        "text": "【应用】加了 @Service 却无法注入，应检查什么？"
      },
      {
        "id": "7f0bfbc93f1e0354",
        "text": "【应用】如何查明某个自动配置为什么没有生效？"
      },
      {
        "id": "7c536bae3af08939",
        "text": "【深入】为什么自定义 DataSource 能影响自动配置？"
      },
      {
        "id": "10a179f98ce59b8d",
        "text": "【深入】Boot 3 升级中的 jakarta 迁移是否意味着替换全部 javax？"
      }
    ],
    "searchText": "spring boot 3：启动、starter 与自动配置 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 四个技术各司其职 spring framework 提供容器、事务等能力；spring mvc 负责 servlet 栈请求处理；tomcat 是 http 服务器和 servlet 容器；boot 简化依赖、配置和启动。boot 可以运行非 web 应用，也可以采用别的 web 技术栈，不是所有 boot 项目都有 tomcat。 本课程锁定 java 17+、boot 3.x、spring framework 6.x，servlet 与 validation 使用 jakarta 包；jdbc 等 java se api 中的 javax.sql 不因此改名。不要全局替换所有 javax，也不要把 boot 4 的 starter 命名混进 boot 3 教程。 最小启动结构 java package com.example.shop; @springbootapplication public class shopapplication { public static void main(string[] args) { springapplication.run(shopapplication.class, args); } } 注解组合 @springbootconfiguration、@enableautoconfiguration 与 @componentscan。启动类放根包，业务组件放其子包。扫描是注册候选定义的重要机制，不是先遍历所有对象再给它们贴 bean 标记。 starter-web 组织相关依赖，典型 servlet web 项目默认引入嵌入式 tomcat。它不是代码生成器；只加依赖也不会自动生成订单 controller。 自动配置有条件 类路径存在某能力、属性满足、用户未提供某 bean 时，自动配置可能生效。定义自有 datasource 后相关默认配置会让步；手写配置并非总是覆盖所有自动配置，需看具体条件和顺序。 启动时读取环境配置、选择应用上下文、注册定义、刷新容器并启动适用服务器。真实启动不是严格三行伪代码，后置处理器与服务器生命周期相互配合；请求到来时通常使用已创建的共享组件，而非重新跑一次全部启动流程。 实际开发：配置与诊断 yaml server: port: 8081 spring: datasource: url: ${db_url} username: ${db_username} password: ${db_password} 环境变量提供敏感值，不提交生产口令。修改配置需区分默认值、profile、外部文件与命令行优先级。排查“为什么没有某 bean”可使用 --debug 的条件报告，先看缺类、条件与扫描范围，再盲目添加注解。 循环依赖优先改职责；开启允许循环引用也无法解决所有构造器循环。boot 管理兼容依赖版本，手工覆盖版本前先确认兼容与安全修复依据。 配置绑定与源码入口 @value(\"${server.port:8080}\") 提供占位符缺省值，但读取的是配置值； server.port=0 时实际监听端口需在服务器启动后通过 webserver api 或事件获得。不能假设框架的内部默认端口必然已作为 environment 属性存在。 成组业务参数可用 @configurationproperties(prefix = \"shop.order\") ，例如将订单超时绑定到 record；还需 @configurationpropertiesscan 、 @enableconfigurationproperties 或显式 bean 注册，注解本身不保证任意类都自动可注入。参数建议用 duration 等明确单位，避免把 30 到底是秒还是分钟留给调用方猜。 boot 3 的自定义自动配置候选通常登记在 meta-inf/spring/org.springframework.boot.autoconfigure.autoconfiguration.imports 。这与扫描应用的 @componentscan 是不同发现路径。追踪机制可从 springapplication.run 、 abstractapplicationcontext.refresh 、配置类解析和 autoconfigurationimportselector 入手，先在自己的 controller/service 断点观察调用栈，再逐步进入框架。 actuator 可帮助查看健康、映射与条件，但端点的可用、启用和 http 暴露是不同配置。不要因本地能看到端点就把 beans、env、conditions 等未经认证暴露给公网。 参考资料 - boot 3.5 自动配置 - boot 3.5 应用启动注解 - boot 3.5 外部配置 模拟面试问题 1. 【基础】boot、mvc、tomcat 各解决什么问题？ 2. 【应用】加了 @service 却无法注入，应检查什么？ 3. 【应用】如何查明某个自动配置为什么没有生效？ 4. 【深入】为什么自定义 datasource 能影响自动配置？ 5. 【深入】boot 3 升级中的 jakarta 迁移是否意味着替换全部 javax？"
  },
  {
    "id": "java-ioc",
    "version": "738b81fbd417",
    "md": "learning/courses/java-web/02-java-ioc.md",
    "title": "IoC、DI、Bean 作用域与生命周期",
    "description": "从普通构造器注入到容器装配，理解共享对象的真实边界。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "控制反转与依赖注入",
        "anchor": "控制反转与依赖注入",
        "level": 2,
        "text": "  IoC 强调对象组装与生命周期控制转交容器，DI 通过构造器、setter 等把依赖交给对象。反射只是部分实现手段，DI 不定义为“反射改 private 字段”。Bean 是被容器管理的对象；BeanDefinition 是如何创建和管理它的元数据，不是同一个东西。  java @Service public class OrderService { private final OrderRepository orders; public OrderService(OrderRepository orders) { this.orders = Objects.requireNonNull(orders); } }   OrderRepository 是应用契约，需提供实现 Bean；单构造器通常无需 @Autowired。构造器参数先接收依赖引用，再用 Java 赋值初始化字段。final 不自动拒绝 null，这里 requireNonNull 明确表达前置条件。 "
      },
      {
        "title": "注册与消歧",
        "anchor": "注册与消歧",
        "level": 2,
        "text": "  @Component 与 @Service 等参与组件扫描；第三方类可通过配置类中的 @Bean 工厂方法注册。@Bean 不要求任何场景都与 @Configuration 同时出现，但所在类必须被 Spring 配置机制处理。  同一类型多个候选时用 @Qualifier、@Primary 等消歧。按接口注入需要可赋值的实现或代理，并不是接口自己实例化。手工 new 带 @Service 的类不会自动把这个对象纳入已有容器。 "
      },
      {
        "title": "实际开发：共享密码编码器",
        "anchor": "实际开发共享密码编码器",
        "level": 2,
        "text": "  @Configuration 定义一个 PasswordEncoder Bean，UserService 和 AdminService 注入时可共享它。singleton 的边界是每容器、每 Bean 定义，既不保证同一类整个 JVM 只有一个对象，也不保证所有字段线程安全。  Service 不要保存 currentUserId 之类请求级可变字段；并发请求会互相覆盖。prototype 注入 singleton 时通常只在创建时注入一次，要每次获得新实例需要 ObjectProvider 或其他显式机制。request/session 作用域依赖 Web 环境。 "
      },
      {
        "title": "生命周期不是一行 new",
        "anchor": "生命周期不是一行-new",
        "level": 2,
        "text": "  注册定义 → 实例化 → 属性填充与依赖解析 → 初始化回调与后置处理 → 提供对象，容器关闭执行适用销毁回调。@PostConstruct 通常由相关后处理器参与初始化前处理，AOP 代理也可能在后处理阶段出现，不能把某个细节说成所有 Bean 固定路径。  ApplicationContext 在 BeanFactory 基础上提供事件、资源等能力。业务代码优先依赖注入，避免到处 getBean 隐藏依赖。构造器循环依赖往往提示职责纠缠，应先拆分业务关系。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring 6.2 依赖注入 - Bean 作用域 - 容器扩展点 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】BeanDefinition 与 Bean 有何区别？ 2. 【应用】构造器注入为什么方便单元测试？ 3. 【应用】两个 Service 注入同一 singleton Bean 时共享什么？ 4. 【深入】prototype 注入 singleton 后每次调用会自动产生新对象吗？ 5. 【深入】为什么不应把当前用户保存到单例 Service 字段？ "
      }
    ],
    "questions": [
      {
        "id": "a339a8417d539133",
        "text": "【基础】BeanDefinition 与 Bean 有何区别？"
      },
      {
        "id": "9871ffe0f94f042f",
        "text": "【应用】构造器注入为什么方便单元测试？"
      },
      {
        "id": "44b0f2b4a38a69f9",
        "text": "【应用】两个 Service 注入同一 singleton Bean 时共享什么？"
      },
      {
        "id": "02a9047e14d99839",
        "text": "【深入】prototype 注入 singleton 后每次调用会自动产生新对象吗？"
      },
      {
        "id": "f33fef43dab7c92b",
        "text": "【深入】为什么不应把当前用户保存到单例 Service 字段？"
      }
    ],
    "searchText": "ioc、di、bean 作用域与生命周期 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 控制反转与依赖注入 ioc 强调对象组装与生命周期控制转交容器，di 通过构造器、setter 等把依赖交给对象。反射只是部分实现手段，di 不定义为“反射改 private 字段”。bean 是被容器管理的对象；beandefinition 是如何创建和管理它的元数据，不是同一个东西。 java @service public class orderservice { private final orderrepository orders; public orderservice(orderrepository orders) { this.orders = objects.requirenonnull(orders); } } orderrepository 是应用契约，需提供实现 bean；单构造器通常无需 @autowired。构造器参数先接收依赖引用，再用 java 赋值初始化字段。final 不自动拒绝 null，这里 requirenonnull 明确表达前置条件。 注册与消歧 @component 与 @service 等参与组件扫描；第三方类可通过配置类中的 @bean 工厂方法注册。@bean 不要求任何场景都与 @configuration 同时出现，但所在类必须被 spring 配置机制处理。 同一类型多个候选时用 @qualifier、@primary 等消歧。按接口注入需要可赋值的实现或代理，并不是接口自己实例化。手工 new 带 @service 的类不会自动把这个对象纳入已有容器。 实际开发：共享密码编码器 @configuration 定义一个 passwordencoder bean，userservice 和 adminservice 注入时可共享它。singleton 的边界是每容器、每 bean 定义，既不保证同一类整个 jvm 只有一个对象，也不保证所有字段线程安全。 service 不要保存 currentuserid 之类请求级可变字段；并发请求会互相覆盖。prototype 注入 singleton 时通常只在创建时注入一次，要每次获得新实例需要 objectprovider 或其他显式机制。request/session 作用域依赖 web 环境。 生命周期不是一行 new 注册定义 → 实例化 → 属性填充与依赖解析 → 初始化回调与后置处理 → 提供对象，容器关闭执行适用销毁回调。@postconstruct 通常由相关后处理器参与初始化前处理，aop 代理也可能在后处理阶段出现，不能把某个细节说成所有 bean 固定路径。 applicationcontext 在 beanfactory 基础上提供事件、资源等能力。业务代码优先依赖注入，避免到处 getbean 隐藏依赖。构造器循环依赖往往提示职责纠缠，应先拆分业务关系。 参考资料 - spring 6.2 依赖注入 - bean 作用域 - 容器扩展点 模拟面试问题 1. 【基础】beandefinition 与 bean 有何区别？ 2. 【应用】构造器注入为什么方便单元测试？ 3. 【应用】两个 service 注入同一 singleton bean 时共享什么？ 4. 【深入】prototype 注入 singleton 后每次调用会自动产生新对象吗？ 5. 【深入】为什么不应把当前用户保存到单例 service 字段？"
  },
  {
    "id": "java-aop",
    "version": "ca5923265c63",
    "md": "learning/courses/java-web/03-java-aop.md",
    "title": "AOP 代理与横切关注点",
    "description": "用耗时监控理解代理边界、切面回调和自调用。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "AOP 增强什么",
        "anchor": "aop-增强什么",
        "level": 2,
        "text": "  日志、事务与耗时统计横跨多个业务方法，AOP 可以将公共逻辑从核心业务提取。Spring AOP 通常基于代理：调用者先到代理，再由代理决定增强与调用目标。注解是元数据，只有对应基础设施读取并应用才生效。  JDK 动态代理围绕接口，CGLIB 类代理通过子类增强。Spring Framework 的选择规则与 Boot 的默认配置需分开：Boot 3 常默认使用类代理，即使实现了接口也不应断言一定是 JDK 代理。final 类与不能覆写的方法限制类代理增强，private 方法也不是普通代理可拦截的外部入口。 "
      },
      {
        "title": "实际开发：订单接口计时",
        "anchor": "实际开发订单接口计时",
        "level": 2,
        "text": "  java @Aspect @Component class TimingAspect { @Around(\"execution( com.example.shop.service.. (..))\") Object time(ProceedingJoinPoint point) throws Throwable { long start = System.nanoTime(); try { return point.proceed(); } finally { System.out.println(\"耗时 ns=\" + (System.nanoTime() - start)); } } }   片段要求 AOP 相关依赖与正确扫描。nanoTime 测量经过时间，不用于日历时间戳。真实日志不要打印密码、完整 Token 或用户敏感信息。环绕通知必须明确何时调用 proceed，漏调会导致业务不执行。  @Before 在进入前，@After 类似完成时 finally，@AfterReturning 只在正常返回后，@AfterThrowing 在匹配异常后。统一修改响应体不应误放在 MVC postHandle；不同扩展点有各自生命周期。 "
      },
      {
        "title": "自调用为什么绕过",
        "anchor": "自调用为什么绕过",
        "level": 2,
        "text": "  外部调用 beanProxy.placeOrder 会经过代理；目标内部 this.reserve 直接调用自身，通常不会再绕到代理。把 @Transactional 或切面注解放在 reserve 上，不保证内部调用生效。更清晰的修复是把独立业务边界放到另一个 Bean，或让事务覆盖真正的外部业务入口，而非默认引入代理自引用。 "
      },
      {
        "title": "设计模式的关联",
        "anchor": "设计模式的关联",
        "level": 2,
        "text": "  代理强调对目标访问的控制和增强，装饰器强调叠加功能，适配器转换接口；结构可能相似，但动机不同。AOP 与 AspectJ 编译/加载时织入也不同，不能把所有 AOP 的限制归结为 Spring 运行时代理限制。  模式是解决问题的语言，不是增加层数的指标。一个没有替换需求的小型纯函数没有必要变成接口、工厂和策略三件套。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring 6.2 代理机制 - Boot 3.5 AOP 配置 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Spring AOP 代理位于调用链的什么位置？ 2. 【应用】环绕通知不调用 proceed 会发生什么？ 3. 【应用】为什么同类 this 调用可能不触发事务？ 4. 【深入】Framework 代理规则与 Boot 默认配置为何需要区分？ 5. 【深入】代理、装饰器、适配器的设计动机有什么区别？ "
      }
    ],
    "questions": [
      {
        "id": "4aeaae38adb47105",
        "text": "【基础】Spring AOP 代理位于调用链的什么位置？"
      },
      {
        "id": "b71b32a1d35faec6",
        "text": "【应用】环绕通知不调用 proceed 会发生什么？"
      },
      {
        "id": "685251371f2938a2",
        "text": "【应用】为什么同类 this 调用可能不触发事务？"
      },
      {
        "id": "8b4041ea5bb138c6",
        "text": "【深入】Framework 代理规则与 Boot 默认配置为何需要区分？"
      },
      {
        "id": "db31e3fe93b8c524",
        "text": "【深入】代理、装饰器、适配器的设计动机有什么区别？"
      }
    ],
    "searchText": "aop 代理与横切关注点 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 aop 增强什么 日志、事务与耗时统计横跨多个业务方法，aop 可以将公共逻辑从核心业务提取。spring aop 通常基于代理：调用者先到代理，再由代理决定增强与调用目标。注解是元数据，只有对应基础设施读取并应用才生效。 jdk 动态代理围绕接口，cglib 类代理通过子类增强。spring framework 的选择规则与 boot 的默认配置需分开：boot 3 常默认使用类代理，即使实现了接口也不应断言一定是 jdk 代理。final 类与不能覆写的方法限制类代理增强，private 方法也不是普通代理可拦截的外部入口。 实际开发：订单接口计时 java @aspect @component class timingaspect { @around(\"execution( com.example.shop.service.. (..))\") object time(proceedingjoinpoint point) throws throwable { long start = system.nanotime(); try { return point.proceed(); } finally { system.out.println(\"耗时 ns=\" + (system.nanotime() - start)); } } } 片段要求 aop 相关依赖与正确扫描。nanotime 测量经过时间，不用于日历时间戳。真实日志不要打印密码、完整 token 或用户敏感信息。环绕通知必须明确何时调用 proceed，漏调会导致业务不执行。 @before 在进入前，@after 类似完成时 finally，@afterreturning 只在正常返回后，@afterthrowing 在匹配异常后。统一修改响应体不应误放在 mvc posthandle；不同扩展点有各自生命周期。 自调用为什么绕过 外部调用 beanproxy.placeorder 会经过代理；目标内部 this.reserve 直接调用自身，通常不会再绕到代理。把 @transactional 或切面注解放在 reserve 上，不保证内部调用生效。更清晰的修复是把独立业务边界放到另一个 bean，或让事务覆盖真正的外部业务入口，而非默认引入代理自引用。 设计模式的关联 代理强调对目标访问的控制和增强，装饰器强调叠加功能，适配器转换接口；结构可能相似，但动机不同。aop 与 aspectj 编译/加载时织入也不同，不能把所有 aop 的限制归结为 spring 运行时代理限制。 模式是解决问题的语言，不是增加层数的指标。一个没有替换需求的小型纯函数没有必要变成接口、工厂和策略三件套。 参考资料 - spring 6.2 代理机制 - boot 3.5 aop 配置 模拟面试问题 1. 【基础】spring aop 代理位于调用链的什么位置？ 2. 【应用】环绕通知不调用 proceed 会发生什么？ 3. 【应用】为什么同类 this 调用可能不触发事务？ 4. 【深入】framework 代理规则与 boot 默认配置为何需要区分？ 5. 【深入】代理、装饰器、适配器的设计动机有什么区别？"
  },
  {
    "id": "java-mvc",
    "version": "b088118279d3",
    "md": "learning/courses/java-web/04-java-mvc.md",
    "title": "从 HTTP 到 Controller：MVC 请求链",
    "description": "把方法映射、参数来源、序列化和状态码串成完整流程。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "两种分层不要混淆",
        "anchor": "两种分层不要混淆",
        "level": 2,
        "text": "  Tomcat 是 Servlet 容器，DispatcherServlet 本身是 Servlet；Spring MVC 在其上协调 Web 请求。Controller→Service→Mapper 是项目常见职责分层，不是 Spring MVC 强制的三层组成。Mapper 通常经 MyBatis、JDBC 和驱动访问数据库。  mermaid flowchart TD A[客户端 HTTP] -- B[Tomcat 与 Servlet Filter] B -- C[DispatcherServlet] C -- D[HandlerMapping 选择处理器] D -- E[适用的 Interceptor preHandle] E -- F[HandlerAdapter 参数绑定及调用] F -- G[Controller / Service / Mapper] G -- H[返回值处理和消息转换] H -- I[HTTP 响应]   这是同步 Servlet 请求逻辑图，省略异常与异步分支，不是所有类严格各执行一次的源码追踪。 "
      },
      {
        "title": "实际开发：订单查询",
        "anchor": "实际开发订单查询",
        "level": 2,
        "text": "  java @RestController @RequestMapping(\"/api/orders\") class OrderController { @GetMapping(\"/{id}\") String detail(@PathVariable(\"id\") Long id, @RequestParam(defaultValue = \"false\") boolean brief) { return \"订单：\" + id + \"，简要：\" + brief; } }   @PathVariable 取路径；@RequestParam 取查询或表单参数；@RequestHeader 取头；@RequestBody 经 HttpMessageConverter 读请求体，JSON 常由 Jackson 处理。@PostMapping 只限定 HTTP 方法，不等于“必须 JSON”或“自动入库”。 "
      },
      {
        "title": "HTTP 语义与 JSON",
        "anchor": "http-语义与-json",
        "level": 2,
        "text": "  GET 应按安全读取语义设计，POST 提交处理，PUT 对指定资源整体替换，PATCH 部分修改，DELETE 删除。幂等关注重复请求对目标状态的预期影响，不保证每次响应码相同。创建通常返回 201，成功无正文可返回 204，认证失败与授权失败分别考虑 401、403。  @RestController 的对象通常经合适转换器输出 JSON，String 也可能直接按文本输出，并不是所有返回值都自动 JSON。JSON 文本不是跨进程直接传 Java 对象；反序列化是否忽略未知字段受 ObjectMapper 配置影响。Java Long 超过前端安全整数范围时，API 需要明确字符串化等约定。 "
      },
      {
        "title": "错误定位",
        "anchor": "错误定位",
        "level": 2,
        "text": "  404 先核对完整路径与 context path；405 核对方法；415 核对 Content-Type 和支持的转换器；400 再区分 JSON 无法解析、类型转换失败与约束不满足。先看实际 HTTP 状态与日志，不靠“前端弹窗失败”猜原因。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring 6.2 DispatcherServlet - 映射请求 - RFC 9110：HTTP 语义 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Tomcat 是否直接查找 @GetMapping 方法？ 2. 【应用】POST 收到 415 与 400 分别应从哪里查起？ 3. 【应用】Controller 返回 Java 对象后如何形成 JSON？ 4. 【深入】DELETE 第二次返回 404 为什么仍可符合幂等语义？ 5. 【深入】为什么三层架构不是 Spring MVC 的定义？ "
      }
    ],
    "questions": [
      {
        "id": "aeb1e290c18d536c",
        "text": "【基础】Tomcat 是否直接查找 @GetMapping 方法？"
      },
      {
        "id": "897bec846893c05d",
        "text": "【应用】POST 收到 415 与 400 分别应从哪里查起？"
      },
      {
        "id": "d2d3c28469a48481",
        "text": "【应用】Controller 返回 Java 对象后如何形成 JSON？"
      },
      {
        "id": "0bfa1d756b208240",
        "text": "【深入】DELETE 第二次返回 404 为什么仍可符合幂等语义？"
      },
      {
        "id": "4846d1241f9740b2",
        "text": "【深入】为什么三层架构不是 Spring MVC 的定义？"
      }
    ],
    "searchText": "从 http 到 controller：mvc 请求链 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 两种分层不要混淆 tomcat 是 servlet 容器，dispatcherservlet 本身是 servlet；spring mvc 在其上协调 web 请求。controller→service→mapper 是项目常见职责分层，不是 spring mvc 强制的三层组成。mapper 通常经 mybatis、jdbc 和驱动访问数据库。 mermaid flowchart td a[客户端 http] -- b[tomcat 与 servlet filter] b -- c[dispatcherservlet] c -- d[handlermapping 选择处理器] d -- e[适用的 interceptor prehandle] e -- f[handleradapter 参数绑定及调用] f -- g[controller / service / mapper] g -- h[返回值处理和消息转换] h -- i[http 响应] 这是同步 servlet 请求逻辑图，省略异常与异步分支，不是所有类严格各执行一次的源码追踪。 实际开发：订单查询 java @restcontroller @requestmapping(\"/api/orders\") class ordercontroller { @getmapping(\"/{id}\") string detail(@pathvariable(\"id\") long id, @requestparam(defaultvalue = \"false\") boolean brief) { return \"订单：\" + id + \"，简要：\" + brief; } } @pathvariable 取路径；@requestparam 取查询或表单参数；@requestheader 取头；@requestbody 经 httpmessageconverter 读请求体，json 常由 jackson 处理。@postmapping 只限定 http 方法，不等于“必须 json”或“自动入库”。 http 语义与 json get 应按安全读取语义设计，post 提交处理，put 对指定资源整体替换，patch 部分修改，delete 删除。幂等关注重复请求对目标状态的预期影响，不保证每次响应码相同。创建通常返回 201，成功无正文可返回 204，认证失败与授权失败分别考虑 401、403。 @restcontroller 的对象通常经合适转换器输出 json，string 也可能直接按文本输出，并不是所有返回值都自动 json。json 文本不是跨进程直接传 java 对象；反序列化是否忽略未知字段受 objectmapper 配置影响。java long 超过前端安全整数范围时，api 需要明确字符串化等约定。 错误定位 404 先核对完整路径与 context path；405 核对方法；415 核对 content-type 和支持的转换器；400 再区分 json 无法解析、类型转换失败与约束不满足。先看实际 http 状态与日志，不靠“前端弹窗失败”猜原因。 参考资料 - spring 6.2 dispatcherservlet - 映射请求 - rfc 9110：http 语义 模拟面试问题 1. 【基础】tomcat 是否直接查找 @getmapping 方法？ 2. 【应用】post 收到 415 与 400 分别应从哪里查起？ 3. 【应用】controller 返回 java 对象后如何形成 json？ 4. 【深入】delete 第二次返回 404 为什么仍可符合幂等语义？ 5. 【深入】为什么三层架构不是 spring mvc 的定义？"
  },
  {
    "id": "java-validation",
    "version": "40d4ff868617",
    "md": "learning/courses/java-web/05-java-validation.md",
    "title": "DTO、校验与统一错误响应",
    "description": "分离结构转换、字段约束、业务规则和数据库约束。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "数据边界比类名更重要",
        "anchor": "数据边界比类名更重要",
        "level": 2,
        "text": "  DTO 负责某次操作的输入或传输，持久化模型映射数据库，VO 选择对外字段。这是工程约定，不是 Java 的特殊类型。不要把含密码哈希的用户 Entity 直接返回，也不要让客户端通过任意字段绑定给自己修改 role。  java public record RegisterRequest( @NotBlank @Size(min = 3, max = 50) String username, @NotBlank @Email String email, @NotBlank @Size(min = 12, max = 100) String password) {}   示例长度仅为教学约定，真实密码规则还需结合编码器能力。Boot 3 使用 jakarta.validation，通常加入 starter-validation。标准 @Size 没有 value 属性，@Size(50) 不可编译；长度约束也通常不拒绝 null，需要额外非空约束。 "
      },
      {
        "title": "校验在什么阶段发生",
        "anchor": "校验在什么阶段发生",
        "level": 2,
        "text": "  java @PostMapping(\"/registrations\") ResponseEntity register(@Valid @RequestBody RegisterRequest dto) { registrationService.register(dto); return ResponseEntity.status(201).build(); }   这是 Controller 方法片段，registrationService 需由应用实现和注入。消息转换先读 JSON，再根据适用校验机制检查 DTO。无效 JSON 不等于字段违反 @NotBlank；在默认情况下对象校验常抛 MethodArgumentNotValidException，Spring 6.1+ 方法级约束还可能抛 HandlerMethodValidationException。  @Valid 是级联校验标记，不是 @NotNull。嵌套地址对象既要必填又要校验内部字段时，组合 @NotNull 和 @Valid。@Validated 可选择分组，方法校验与类级 AOP 校验需按版本配置，不能机械叠注解。 "
      },
      {
        "title": "实际开发：注册用户名冲突",
        "anchor": "实际开发注册用户名冲突",
        "level": 2,
        "text": "  DTO 验证用户名长度，Service 检查业务规则，数据库 UNIQUE(username) 抵抗并发重复注册。先 selectCount 再 insert 不能代替唯一约束。发生唯一键冲突时转换成可理解的 409 响应，同时保留内部诊断证据。  统一异常处理可用 @RestControllerAdvice、@ExceptionHandler 或 ResponseEntityExceptionHandler。框架不会因为写了 message 属性就自动返回项目自定义 code/msg 结构。输出字段、状态码与错误码须明确约定，系统异常日志留服务端，不把栈、SQL 或密钥发给客户端。 "
      },
      {
        "title": "Lombok 的边界",
        "anchor": "lombok-的边界",
        "level": 2,
        "text": "  @Data 组合 getter、setter、toString、equals/hashCode 与必需参数构造等能力，不是全参构造器。自动 toString 可能泄漏密码，自动 equals 也可能不符合持久化对象身份；按需使用细粒度注解，或 record 明确响应模型。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring 6.2 MVC 校验 - Jakarta Validation 3.0 规范 - Lombok @Data "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】@NotNull、@NotEmpty 和 @NotBlank 有何不同？ 2. 【应用】@Valid 和 @NotNull 为什么可能需要同时使用？ 3. 【应用】预先查询用户名存在与数据库唯一约束各起什么作用？ 4. 【深入】无效 JSON 与 Bean Validation 错误分别在哪一步发生？ 5. 【深入】@Data 用在密码 DTO 和 Entity 上有哪些隐患？ "
      }
    ],
    "questions": [
      {
        "id": "5c06a3b946c3d33f",
        "text": "【基础】@NotNull、@NotEmpty 和 @NotBlank 有何不同？"
      },
      {
        "id": "aec3720550a8b385",
        "text": "【应用】@Valid 和 @NotNull 为什么可能需要同时使用？"
      },
      {
        "id": "b6517eef05e46665",
        "text": "【应用】预先查询用户名存在与数据库唯一约束各起什么作用？"
      },
      {
        "id": "3785a0242902d162",
        "text": "【深入】无效 JSON 与 Bean Validation 错误分别在哪一步发生？"
      },
      {
        "id": "bb7b16dd293dbbc6",
        "text": "【深入】@Data 用在密码 DTO 和 Entity 上有哪些隐患？"
      }
    ],
    "searchText": "dto、校验与统一错误响应 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 数据边界比类名更重要 dto 负责某次操作的输入或传输，持久化模型映射数据库，vo 选择对外字段。这是工程约定，不是 java 的特殊类型。不要把含密码哈希的用户 entity 直接返回，也不要让客户端通过任意字段绑定给自己修改 role。 java public record registerrequest( @notblank @size(min = 3, max = 50) string username, @notblank @email string email, @notblank @size(min = 12, max = 100) string password) {} 示例长度仅为教学约定，真实密码规则还需结合编码器能力。boot 3 使用 jakarta.validation，通常加入 starter-validation。标准 @size 没有 value 属性，@size(50) 不可编译；长度约束也通常不拒绝 null，需要额外非空约束。 校验在什么阶段发生 java @postmapping(\"/registrations\") responseentity register(@valid @requestbody registerrequest dto) { registrationservice.register(dto); return responseentity.status(201).build(); } 这是 controller 方法片段，registrationservice 需由应用实现和注入。消息转换先读 json，再根据适用校验机制检查 dto。无效 json 不等于字段违反 @notblank；在默认情况下对象校验常抛 methodargumentnotvalidexception，spring 6.1+ 方法级约束还可能抛 handlermethodvalidationexception。 @valid 是级联校验标记，不是 @notnull。嵌套地址对象既要必填又要校验内部字段时，组合 @notnull 和 @valid。@validated 可选择分组，方法校验与类级 aop 校验需按版本配置，不能机械叠注解。 实际开发：注册用户名冲突 dto 验证用户名长度，service 检查业务规则，数据库 unique(username) 抵抗并发重复注册。先 selectcount 再 insert 不能代替唯一约束。发生唯一键冲突时转换成可理解的 409 响应，同时保留内部诊断证据。 统一异常处理可用 @restcontrolleradvice、@exceptionhandler 或 responseentityexceptionhandler。框架不会因为写了 message 属性就自动返回项目自定义 code/msg 结构。输出字段、状态码与错误码须明确约定，系统异常日志留服务端，不把栈、sql 或密钥发给客户端。 lombok 的边界 @data 组合 getter、setter、tostring、equals/hashcode 与必需参数构造等能力，不是全参构造器。自动 tostring 可能泄漏密码，自动 equals 也可能不符合持久化对象身份；按需使用细粒度注解，或 record 明确响应模型。 参考资料 - spring 6.2 mvc 校验 - jakarta validation 3.0 规范 - lombok @data 模拟面试问题 1. 【基础】@notnull、@notempty 和 @notblank 有何不同？ 2. 【应用】@valid 和 @notnull 为什么可能需要同时使用？ 3. 【应用】预先查询用户名存在与数据库唯一约束各起什么作用？ 4. 【深入】无效 json 与 bean validation 错误分别在哪一步发生？ 5. 【深入】@data 用在密码 dto 和 entity 上有哪些隐患？"
  },
  {
    "id": "java-filters",
    "version": "b6e9b8b02273",
    "md": "learning/courses/java-web/06-java-filters.md",
    "title": "Filter、Interceptor 与部署接入",
    "description": "理解请求生命周期和 Nginx 边界，正确放置日志与清理。",
    "subject": "java-web",
    "kind": "系统课程",
    "order": 6,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "Spring"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "不同扩展点面向不同对象",
        "anchor": "不同扩展点面向不同对象",
        "level": 2,
        "text": "  Servlet Filter 包围 Servlet 链，可处理通用请求与安全；MVC Interceptor 围绕已选择的 Handler，可获取处理器信息；AOP 面向代理方法。Filter 可以通过合适注册方式使用 Spring Bean，不能说“Filter 访问不到容器”。  Interceptor 的 preHandle 返回 false 会中断后续 Handler，但不会自动形成 401。postHandle 面向正常 Handler 完成后的 MVC 模型，@ResponseBody 响应可能早已写出；要统一修改正文应考虑 ResponseBodyAdvice 等机制。 "
      },
      {
        "title": "注册与清理契约",
        "anchor": "注册与清理契约",
        "level": 2,
        "text": "  @Component 只是注册 Bean，不代表拦截全部请求；WebMvcConfigurer 需将实例加到指定映射中。多个拦截器时，afterCompletion 只对成功通过自身 preHandle 的相应拦截器按契约回调，不能假设任何失败路径都必然进入自己的清理方法。  java registry.addInterceptor(traceInterceptor) .addPathPatterns(\"/api/ \") .excludePathPatterns(\"/api/health\");   这是配置方法内部片段。真正的认证层优先使用 Spring Security FilterChain，MVC 路径匹配差异可能让手写拦截器留下安全空洞。教学 JWT 拦截器只用来理解流程，不作为完整安全实现。 "
      },
      {
        "title": "实际开发：代理后的真实请求",
        "anchor": "实际开发代理后的真实请求",
        "level": 2,
        "text": "  用户可先到 Nginx，再转发 Tomcat；Nginx 可做 TLS 接入、静态资源、反向代理和负载均衡，不必与 Java 同机器。独立 Nginx 一般是原生独立进程，原稿“常与 Java 同一 JVM”有误。  Tomcat 已可直接提供 HTTP 服务，Nginx 是按部署需求加入，不是 Spring Boot 必需组件。代理终止 TLS 后，后端可能看到 HTTP 和代理地址；只有来自可信代理的转发头才能参与构造真实协议、客户端地址与重定向，不能盲信用户传的 X-Forwarded- 。 "
      },
      {
        "title": "Servlet 生命周期与并发",
        "anchor": "servlet-生命周期与并发",
        "level": 2,
        "text": "  Servlet 通常初始化一次并服务多次请求，容器可能并发调用。Spring Controller、Interceptor 和 Filter 也常共享，不能把当前请求数据写进普通实例字段。异步分派、错误分派和线程切换会改变回调行为；日志与 ThreadLocal 清理必须明确在哪条执行路径生效。  排查 502 先看代理连接上游是否成功，排查应用 500 再看业务日志。代理超时不等于后端操作已经取消，涉及重复提交时仍需幂等设计。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring 6.2 拦截器 - HandlerInterceptor 契约 - Nginx 反向代理模块 - Jakarta Servlet 6.0 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Filter、Interceptor、AOP 各位于哪一层？ 2. 【应用】preHandle 返回 false 后如何形成真正的错误响应？ 3. 【应用】为什么不能靠 postHandle 一律修改 JSON？ 4. 【深入】代理超时与后端任务取消为什么是两件事？ 5. 【深入】为什么客户端可伪造的转发头不能直接信任？ "
      }
    ],
    "questions": [
      {
        "id": "6885cb07ecfeb4fc",
        "text": "【基础】Filter、Interceptor、AOP 各位于哪一层？"
      },
      {
        "id": "1a81a82ac25bd0ae",
        "text": "【应用】preHandle 返回 false 后如何形成真正的错误响应？"
      },
      {
        "id": "83ae20f16cfb6162",
        "text": "【应用】为什么不能靠 postHandle 一律修改 JSON？"
      },
      {
        "id": "f11e4cb4777260bf",
        "text": "【深入】代理超时与后端任务取消为什么是两件事？"
      },
      {
        "id": "87651604668eb7c6",
        "text": "【深入】为什么客户端可伪造的转发头不能直接信任？"
      }
    ],
    "searchText": "filter、interceptor 与部署接入 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 不同扩展点面向不同对象 servlet filter 包围 servlet 链，可处理通用请求与安全；mvc interceptor 围绕已选择的 handler，可获取处理器信息；aop 面向代理方法。filter 可以通过合适注册方式使用 spring bean，不能说“filter 访问不到容器”。 interceptor 的 prehandle 返回 false 会中断后续 handler，但不会自动形成 401。posthandle 面向正常 handler 完成后的 mvc 模型，@responsebody 响应可能早已写出；要统一修改正文应考虑 responsebodyadvice 等机制。 注册与清理契约 @component 只是注册 bean，不代表拦截全部请求；webmvcconfigurer 需将实例加到指定映射中。多个拦截器时，aftercompletion 只对成功通过自身 prehandle 的相应拦截器按契约回调，不能假设任何失败路径都必然进入自己的清理方法。 java registry.addinterceptor(traceinterceptor) .addpathpatterns(\"/api/ \") .excludepathpatterns(\"/api/health\"); 这是配置方法内部片段。真正的认证层优先使用 spring security filterchain，mvc 路径匹配差异可能让手写拦截器留下安全空洞。教学 jwt 拦截器只用来理解流程，不作为完整安全实现。 实际开发：代理后的真实请求 用户可先到 nginx，再转发 tomcat；nginx 可做 tls 接入、静态资源、反向代理和负载均衡，不必与 java 同机器。独立 nginx 一般是原生独立进程，原稿“常与 java 同一 jvm”有误。 tomcat 已可直接提供 http 服务，nginx 是按部署需求加入，不是 spring boot 必需组件。代理终止 tls 后，后端可能看到 http 和代理地址；只有来自可信代理的转发头才能参与构造真实协议、客户端地址与重定向，不能盲信用户传的 x-forwarded- 。 servlet 生命周期与并发 servlet 通常初始化一次并服务多次请求，容器可能并发调用。spring controller、interceptor 和 filter 也常共享，不能把当前请求数据写进普通实例字段。异步分派、错误分派和线程切换会改变回调行为；日志与 threadlocal 清理必须明确在哪条执行路径生效。 排查 502 先看代理连接上游是否成功，排查应用 500 再看业务日志。代理超时不等于后端操作已经取消，涉及重复提交时仍需幂等设计。 参考资料 - spring 6.2 拦截器 - handlerinterceptor 契约 - nginx 反向代理模块 - jakarta servlet 6.0 模拟面试问题 1. 【基础】filter、interceptor、aop 各位于哪一层？ 2. 【应用】prehandle 返回 false 后如何形成真正的错误响应？ 3. 【应用】为什么不能靠 posthandle 一律修改 json？ 4. 【深入】代理超时与后端任务取消为什么是两件事？ 5. 【深入】为什么客户端可伪造的转发头不能直接信任？"
  },
  {
    "id": "java-jdbc",
    "version": "a14f684f947e",
    "md": "learning/courses/java-data/01-java-jdbc.md",
    "title": "JDBC、参数绑定与连接生命周期",
    "description": "从一条查询理解 JDBC 模板工作、注入边界和资源释放。",
    "subject": "java-data",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "API、驱动与数据库",
        "anchor": "api驱动与数据库",
        "level": 2,
        "text": "  JDBC 是 Java 数据库访问 API，驱动把这些调用转换成数据库协议。Connection 表示连接，PreparedStatement 表示参数化语句，ResultSet 是结果游标。现代兼容驱动通常自动注册，不必固定手写 Class.forName。  java static List orderIds(DataSource ds, long userId) throws SQLException { String sql = \"SELECT id FROM orders WHERE user_id = ? ORDER BY id DESC\"; try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) { ps.setLong(1, userId); try (ResultSet rs = ps.executeQuery()) { List result = new ArrayList< (); while (rs.next()) result.add(rs.getLong(\"id\")); return result; } } }   DataSource 来自应用配置，片段需对应表。参数从 1 编号，游标初始在首行之前，先 next 再读。executeQuery 取得结果集；executeUpdate 通常返回影响行数，自动主键需专门请求并读取 generated keys。 "
      },
      {
        "title": "为什么参数化能防注入",
        "anchor": "为什么参数化能防注入",
        "level": 2,
        "text": "  输入以数据值绑定，不作为 SQL 结构解释。不要把用户名拼进引号形成 SQL，也不要误以为用了 PreparedStatement 就可以安全拼其他不可信片段。动态列名、表名、排序方向不能用普通参数替代标识符，应用白名单映射。  ORDER BY ? 可以在某些数据库作为值表达式合法出现，但不能因此把输入字符串当列名排序。关键在语义而非“能否通过语法解析”。驱动可能客户端模拟或服务端预处理，安全性应按驱动与参数边界理解。 "
      },
      {
        "title": "连接池与事务状态",
        "anchor": "连接池与事务状态",
        "level": 2,
        "text": "  池中 close 通常归还连接，仍必须调用，否则借用槽位耗尽。归还之前事务应完成，状态需由池或管理层正确复位。不要长期持有连接等待慢远程调用，也不要跨线程共享普通 Connection 而忽略契约。  手工事务先 setAutoCommit(false)，成功 commit，失败 rollback，再释放资源；回滚本身也可能失败，不能掩盖原始异常。Spring 管理事务时，避免绕开它另建连接造成两套互不关联的事务。 "
      },
      {
        "title": "实际开发的观测",
        "anchor": "实际开发的观测",
        "level": 2,
        "text": "  接口变慢可能是等待池中连接，不是 SQL 本身慢；分别测排队、执行、结果传输。查询超时、网络超时、池借用超时各自配置。大结果集还需考虑驱动流式策略与 fetchSize，不能假定设置一个数字就总能逐行从网络读取。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - java.sql API - PreparedStatement API - DataSource API "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Connection、PreparedStatement、ResultSet 各做什么？ 2. 【应用】executeUpdate 的返回值与自增主键有什么区别？ 3. 【应用】动态排序列怎样避免 SQL 注入？ 4. 【深入】连接池环境为什么仍需要 close？ 5. 【深入】如何区分 SQL 慢与等待数据库连接慢？ "
      }
    ],
    "questions": [
      {
        "id": "fe420f47c40fd31b",
        "text": "【基础】Connection、PreparedStatement、ResultSet 各做什么？"
      },
      {
        "id": "4d563a3cc4fb6ab3",
        "text": "【应用】executeUpdate 的返回值与自增主键有什么区别？"
      },
      {
        "id": "df8f6b50574b39d7",
        "text": "【应用】动态排序列怎样避免 SQL 注入？"
      },
      {
        "id": "62506287e1caeada",
        "text": "【深入】连接池环境为什么仍需要 close？"
      },
      {
        "id": "c1b826cfaa6045c4",
        "text": "【深入】如何区分 SQL 慢与等待数据库连接慢？"
      }
    ],
    "searchText": "jdbc、参数绑定与连接生命周期 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 api、驱动与数据库 jdbc 是 java 数据库访问 api，驱动把这些调用转换成数据库协议。connection 表示连接，preparedstatement 表示参数化语句，resultset 是结果游标。现代兼容驱动通常自动注册，不必固定手写 class.forname。 java static list orderids(datasource ds, long userid) throws sqlexception { string sql = \"select id from orders where user_id = ? order by id desc\"; try (connection c = ds.getconnection(); preparedstatement ps = c.preparestatement(sql)) { ps.setlong(1, userid); try (resultset rs = ps.executequery()) { list result = new arraylist< (); while (rs.next()) result.add(rs.getlong(\"id\")); return result; } } } datasource 来自应用配置，片段需对应表。参数从 1 编号，游标初始在首行之前，先 next 再读。executequery 取得结果集；executeupdate 通常返回影响行数，自动主键需专门请求并读取 generated keys。 为什么参数化能防注入 输入以数据值绑定，不作为 sql 结构解释。不要把用户名拼进引号形成 sql，也不要误以为用了 preparedstatement 就可以安全拼其他不可信片段。动态列名、表名、排序方向不能用普通参数替代标识符，应用白名单映射。 order by ? 可以在某些数据库作为值表达式合法出现，但不能因此把输入字符串当列名排序。关键在语义而非“能否通过语法解析”。驱动可能客户端模拟或服务端预处理，安全性应按驱动与参数边界理解。 连接池与事务状态 池中 close 通常归还连接，仍必须调用，否则借用槽位耗尽。归还之前事务应完成，状态需由池或管理层正确复位。不要长期持有连接等待慢远程调用，也不要跨线程共享普通 connection 而忽略契约。 手工事务先 setautocommit(false)，成功 commit，失败 rollback，再释放资源；回滚本身也可能失败，不能掩盖原始异常。spring 管理事务时，避免绕开它另建连接造成两套互不关联的事务。 实际开发的观测 接口变慢可能是等待池中连接，不是 sql 本身慢；分别测排队、执行、结果传输。查询超时、网络超时、池借用超时各自配置。大结果集还需考虑驱动流式策略与 fetchsize，不能假定设置一个数字就总能逐行从网络读取。 参考资料 - java.sql api - preparedstatement api - datasource api 模拟面试问题 1. 【基础】connection、preparedstatement、resultset 各做什么？ 2. 【应用】executeupdate 的返回值与自增主键有什么区别？ 3. 【应用】动态排序列怎样避免 sql 注入？ 4. 【深入】连接池环境为什么仍需要 close？ 5. 【深入】如何区分 sql 慢与等待数据库连接慢？"
  },
  {
    "id": "java-mybatis",
    "version": "cd5fe82506d2",
    "md": "learning/courses/java-data/02-java-mybatis.md",
    "title": "MyBatis 映射与动态 SQL",
    "description": "理解 Mapper 代理、绑定参数和结果映射，保留 SQL 控制力。",
    "subject": "java-data",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "Mapper 代理不等于接口自动理解业务",
        "anchor": "mapper-代理不等于接口自动理解业务",
        "level": 2,
        "text": "  MyBatis 封装 JDBC 样板、参数处理和结果映射，SQL 仍需由开发者设计。Mapper 接口经 MyBatis-Spring 注册代理 Bean，调用方法按 statement 映射执行；只有接口方法名不会让任意复杂查询自动获得实现。  java @Mapper interface OrderMapper { @Select(\"\"\" SELECT id, user_id AS userId, amount FROM orders WHERE id = {id} AND user_id = {userId} \"\"\") OrderRow findOwned(@Param(\"id\") long id, @Param(\"userId\") long userId); }   OrderRow 是应用映射类型，这里明确两个参数名。按当前用户查询能避免只传订单 ID 导致水平越权，但 userId 必须来自可信认证上下文，不能直接信任请求体。 "
      },
      {
        "title": "参数与结果",
        "anchor": "参数与结果",
        "level": 2,
        "text": "  {} 通常转为 JDBC 占位符并绑定值；${} 直接替换文本，不要接收客户端 SQL 片段。SQL 参数化不代替业务授权。字段名不同可用别名、resultMap 或按配置启用下划线转驼峰；不能假定任何项目都默认开启。  XML 的 namespace 对应 Mapper 全限定名，statement id 对应方法映射。resultType 表示一行的目标类型，不是把 List 当作单行类型。复杂构造器、关联与嵌套对象应显式检查映射与查询次数。 "
      },
      {
        "title": "动态 SQL 的业务边界",
        "anchor": "动态-sql-的业务边界",
        "level": 2,
        "text": "  列表筛选可用 if、where、foreach，既避免字符串散落，也要处理空集合、缺条件与更新范围。动态更新不小心省掉 WHERE 会影响整表；set 与 where 标签解决格式，不证明业务正确。  不要把“复杂业务都不能在 SQL”绝对化。数据库擅长集合运算、条件更新和约束；Service 负责组织业务操作与事务边界，SQL 可以准确表达单次数据变更规则。 "
      },
      {
        "title": "实际开发：列表 N+1",
        "anchor": "实际开发列表-n1",
        "level": 2,
        "text": "  先查十条订单，再每条查用户和明细，可能形成几十次请求。按场景选择 JOIN 或批量 IN 查询，并注意连接导致的行重复、分页与聚合语义。一级缓存通常关联 SqlSession，二级缓存需明确配置和一致性边界，不能以“框架有缓存”为由忽略更新可见性。  MyBatis 版本与 Spring Boot Starter 需保持兼容；Boot 3 不直接照搬旧 javax 生态依赖。事务由集成层协调，避免同时手动提交 Spring 管理的 SqlSession。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - MyBatis Mapper XML - MyBatis 动态 SQL - MyBatis Spring Boot Starter "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Mapper 接口没有实现类为什么能被调用？ 2. 【应用】 {} 与 ${} 在输入安全上有什么区别？ 3. 【应用】数据库 user_id 如何映射 Java userId？ 4. 【深入】列表查询为什么会出现 N+1？ 5. 【深入】为什么 Service 与 SQL 的职责不能简单按“复杂不复杂”划分？ "
      }
    ],
    "questions": [
      {
        "id": "b5c8279bb7be2313",
        "text": "【基础】Mapper 接口没有实现类为什么能被调用？"
      },
      {
        "id": "6ccf75ac5e701f8b",
        "text": "【应用】 {} 与 ${} 在输入安全上有什么区别？"
      },
      {
        "id": "1bda435bb1deb7d4",
        "text": "【应用】数据库 user_id 如何映射 Java userId？"
      },
      {
        "id": "88deb348a4b627de",
        "text": "【深入】列表查询为什么会出现 N+1？"
      },
      {
        "id": "41448ca474c29c44",
        "text": "【深入】为什么 Service 与 SQL 的职责不能简单按“复杂不复杂”划分？"
      }
    ],
    "searchText": "mybatis 映射与动态 sql 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 mapper 代理不等于接口自动理解业务 mybatis 封装 jdbc 样板、参数处理和结果映射，sql 仍需由开发者设计。mapper 接口经 mybatis-spring 注册代理 bean，调用方法按 statement 映射执行；只有接口方法名不会让任意复杂查询自动获得实现。 java @mapper interface ordermapper { @select(\"\"\" select id, user_id as userid, amount from orders where id = {id} and user_id = {userid} \"\"\") orderrow findowned(@param(\"id\") long id, @param(\"userid\") long userid); } orderrow 是应用映射类型，这里明确两个参数名。按当前用户查询能避免只传订单 id 导致水平越权，但 userid 必须来自可信认证上下文，不能直接信任请求体。 参数与结果 {} 通常转为 jdbc 占位符并绑定值；${} 直接替换文本，不要接收客户端 sql 片段。sql 参数化不代替业务授权。字段名不同可用别名、resultmap 或按配置启用下划线转驼峰；不能假定任何项目都默认开启。 xml 的 namespace 对应 mapper 全限定名，statement id 对应方法映射。resulttype 表示一行的目标类型，不是把 list 当作单行类型。复杂构造器、关联与嵌套对象应显式检查映射与查询次数。 动态 sql 的业务边界 列表筛选可用 if、where、foreach，既避免字符串散落，也要处理空集合、缺条件与更新范围。动态更新不小心省掉 where 会影响整表；set 与 where 标签解决格式，不证明业务正确。 不要把“复杂业务都不能在 sql”绝对化。数据库擅长集合运算、条件更新和约束；service 负责组织业务操作与事务边界，sql 可以准确表达单次数据变更规则。 实际开发：列表 n+1 先查十条订单，再每条查用户和明细，可能形成几十次请求。按场景选择 join 或批量 in 查询，并注意连接导致的行重复、分页与聚合语义。一级缓存通常关联 sqlsession，二级缓存需明确配置和一致性边界，不能以“框架有缓存”为由忽略更新可见性。 mybatis 版本与 spring boot starter 需保持兼容；boot 3 不直接照搬旧 javax 生态依赖。事务由集成层协调，避免同时手动提交 spring 管理的 sqlsession。 参考资料 - mybatis mapper xml - mybatis 动态 sql - mybatis spring boot starter 模拟面试问题 1. 【基础】mapper 接口没有实现类为什么能被调用？ 2. 【应用】 {} 与 ${} 在输入安全上有什么区别？ 3. 【应用】数据库 user_id 如何映射 java userid？ 4. 【深入】列表查询为什么会出现 n+1？ 5. 【深入】为什么 service 与 sql 的职责不能简单按“复杂不复杂”划分？"
  },
  {
    "id": "java-mybatis-plus",
    "version": "3372e35f2edd",
    "md": "learning/courses/java-data/03-java-mybatis-plus.md",
    "title": "MyBatis-Plus 条件构造器与分页",
    "description": "把方法引用、动态条件与分页的真实前提联系起来。",
    "subject": "java-data",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "在 MyBatis 上减少 CRUD 样板",
        "anchor": "在-mybatis-上减少-crud-样板",
        "level": 2,
        "text": "  BaseMapper 提供约定的通用 CRUD，@Mapper 或 @MapperScan 解决注册。@TableName、@TableId 等描述映射与主键策略，不会自动把任意现有数据库结构改好。  AUTO 通常依靠数据库自增，INPUT 由应用提供，ASSIGN_ID 由框架生成；选择取决于现有表与跨服务 ID 需求。实体到表的命名受全局配置影响，不能声称 UserInfo 映射 user_info 一定要显式 @TableName。 "
      },
      {
        "title": "实际开发：菜品条件查询",
        "anchor": "实际开发菜品条件查询",
        "level": 2,
        "text": "  java LambdaQueryWrapper query = new LambdaQueryWrapper () .eq(Dish::getEnabled, true) .like(keyword != null && !keyword.isBlank(), Dish::getName, keyword) .and(w - w.eq(Dish::getCategory, \"MAIN\") .or().eq(Dish::getCategory, \"SIDE\")) .orderByDesc(Dish::getCreatedAt) .orderByDesc(Dish::getId);   Dish 是需提供对应 getter 的应用实体。方法引用描述属性，框架据元数据解析列名，不是当场从某个 Dish 读取值。like 通常形成两侧带 % 的绑定值；通配符本身会影响匹配语义，若业务要字面匹配还须处理转义。  and 嵌套明确括号，防止 enabled=true AND A OR B 让 B 绕过有效状态限制。条件参数 false 表示不添加，不等于自动替你决定 null 的业务含义。 "
      },
      {
        "title": "分页有基础设施前提",
        "anchor": "分页有基础设施前提",
        "level": 2,
        "text": "  selectPage 需要对应分页插件与兼容依赖，常用 MybatisPlusInterceptor 加 PaginationInnerInterceptor。3.5.9 起相关解析器依赖有拆分，按选用版本文档配置，不要无意识粘贴一个旧配置片段。  Page 的 total 是满足条件的总数，records 是本页数据，count 可能需要额外查询。页码和 pageSize 要校验并设置上限；稳定排序最好加入唯一 ID 消歧。即使排序稳定，偏移分页仍可能受并发插删影响。 "
      },
      {
        "title": "大列表与权限",
        "anchor": "大列表与权限",
        "level": 2,
        "text": "  深 offset 可能扫描并丢弃大量行，可用键集分页：按 created_at 与 id 的复合边界取下一批，并用匹配索引。是否返回精确 total 是 API 产品取舍。  Wrapper 不能直接接受客户端列名、apply/last 的原始 SQL。所有用户和租户条件都需可信构造；逻辑删除、租户插件等会影响生成 SQL，调试时以实际语句为准，不保证永远等于某条固定 SELECT 。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - MyBatis-Plus 条件构造器 - 分页插件 - 注解配置 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】User::getName 在 Lambda Wrapper 中是否立即调用 getter？ 2. 【应用】如何正确表达 A AND (B OR C)？ 3. 【应用】selectPage 为什么可能没有实际分页？ 4. 【深入】稳定排序为什么不能完全消除偏移分页的并发问题？ 5. 【深入】哪些 Wrapper 写法会重新引入原始 SQL 风险？ "
      }
    ],
    "questions": [
      {
        "id": "b34ada7a1b5df35a",
        "text": "【基础】User::getName 在 Lambda Wrapper 中是否立即调用 getter？"
      },
      {
        "id": "6e267e1f0afb1560",
        "text": "【应用】如何正确表达 A AND (B OR C)？"
      },
      {
        "id": "da68bcd9941d265b",
        "text": "【应用】selectPage 为什么可能没有实际分页？"
      },
      {
        "id": "f7f2e7ddd41912f0",
        "text": "【深入】稳定排序为什么不能完全消除偏移分页的并发问题？"
      },
      {
        "id": "36e4b40763bae713",
        "text": "【深入】哪些 Wrapper 写法会重新引入原始 SQL 风险？"
      }
    ],
    "searchText": "mybatis-plus 条件构造器与分页 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 在 mybatis 上减少 crud 样板 basemapper 提供约定的通用 crud，@mapper 或 @mapperscan 解决注册。@tablename、@tableid 等描述映射与主键策略，不会自动把任意现有数据库结构改好。 auto 通常依靠数据库自增，input 由应用提供，assign_id 由框架生成；选择取决于现有表与跨服务 id 需求。实体到表的命名受全局配置影响，不能声称 userinfo 映射 user_info 一定要显式 @tablename。 实际开发：菜品条件查询 java lambdaquerywrapper query = new lambdaquerywrapper () .eq(dish::getenabled, true) .like(keyword != null && !keyword.isblank(), dish::getname, keyword) .and(w - w.eq(dish::getcategory, \"main\") .or().eq(dish::getcategory, \"side\")) .orderbydesc(dish::getcreatedat) .orderbydesc(dish::getid); dish 是需提供对应 getter 的应用实体。方法引用描述属性，框架据元数据解析列名，不是当场从某个 dish 读取值。like 通常形成两侧带 % 的绑定值；通配符本身会影响匹配语义，若业务要字面匹配还须处理转义。 and 嵌套明确括号，防止 enabled=true and a or b 让 b 绕过有效状态限制。条件参数 false 表示不添加，不等于自动替你决定 null 的业务含义。 分页有基础设施前提 selectpage 需要对应分页插件与兼容依赖，常用 mybatisplusinterceptor 加 paginationinnerinterceptor。3.5.9 起相关解析器依赖有拆分，按选用版本文档配置，不要无意识粘贴一个旧配置片段。 page 的 total 是满足条件的总数，records 是本页数据，count 可能需要额外查询。页码和 pagesize 要校验并设置上限；稳定排序最好加入唯一 id 消歧。即使排序稳定，偏移分页仍可能受并发插删影响。 大列表与权限 深 offset 可能扫描并丢弃大量行，可用键集分页：按 created_at 与 id 的复合边界取下一批，并用匹配索引。是否返回精确 total 是 api 产品取舍。 wrapper 不能直接接受客户端列名、apply/last 的原始 sql。所有用户和租户条件都需可信构造；逻辑删除、租户插件等会影响生成 sql，调试时以实际语句为准，不保证永远等于某条固定 select 。 参考资料 - mybatis-plus 条件构造器 - 分页插件 - 注解配置 模拟面试问题 1. 【基础】user::getname 在 lambda wrapper 中是否立即调用 getter？ 2. 【应用】如何正确表达 a and (b or c)？ 3. 【应用】selectpage 为什么可能没有实际分页？ 4. 【深入】稳定排序为什么不能完全消除偏移分页的并发问题？ 5. 【深入】哪些 wrapper 写法会重新引入原始 sql 风险？"
  },
  {
    "id": "java-transactions",
    "version": "67824bc9d244",
    "md": "learning/courses/java-data/04-java-transactions.md",
    "title": "SQL、索引与事务中的业务不变量",
    "description": "用防超卖与转账理解约束、隔离和 Spring 事务边界。",
    "subject": "java-data",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "数据建模先表达规则",
        "anchor": "数据建模先表达规则",
        "level": 2,
        "text": "  用户、商品、订单、明细分别建模，主键标识身份，唯一约束保护不可重复规则，NOT NULL 表达必填。SQL NULL 表示缺失或未知，比较用 IS NULL；WHERE x=NULL 不会得到正常等号预期。LEFT JOIN 右表条件放 WHERE 可能把未匹配行过滤掉。  金额用 DECIMAL 与 BigDecimal 对齐，时间字段约定时区；AUTO_INCREMENT 不保证连续，不能用编号缺口判断订单丢失。 "
      },
      {
        "title": "实际开发：最后一件库存",
        "anchor": "实际开发最后一件库存",
        "level": 2,
        "text": "  sql UPDATE product SET stock = stock - 1 WHERE id = ? AND stock 0;   检查受影响行数是否为 1，再在同一事务中插入订单。先查 stock 0 再无条件更新会竞态；Java 单机锁也拦不住其他实例。  java @Transactional public long createOrder(long productId, long userId) { if (stockMapper.reserve(productId) != 1) { throw new IllegalStateException(\"库存不足\"); } return orderRepository.create(productId, userId); }   这是业务方法片段，Mapper/Repository 需实现并共享事务管理的数据源；真实错误应使用清晰业务异常。事务本身不自动防重复支付，仍需唯一约束、幂等键和状态转换条件。 "
      },
      {
        "title": "ACID 与隔离",
        "anchor": "acid-与隔离",
        "level": 2,
        "text": "  原子性保护事务整体提交或回滚；一致性还依赖应用正确表达规则，不能期待数据库替你发现转账 SQL 写反。隔离级别、锁与 MVCC 决定并发观察；持久性还受日志刷盘与存储配置约束。  InnoDB 的 undo 支持回滚与多版本，redo 支持崩溃恢复，binlog 是服务器层变更日志，三者不能混为“操作历史”。快照读并不意味着永远读到最新提交；锁定读与普通 SELECT 的语义需区分。 "
      },
      {
        "title": "Spring 事务生效条件",
        "anchor": "spring-事务生效条件",
        "level": 2,
        "text": "  代理模式需从适用代理入口进入；内部 this 自调用可能绕过。默认通常 RuntimeException/Error 回滚，受检异常按 rollbackFor 等配置；吞掉异常可能让事务提交。readOnly 多为提示，不是通用写保护。  REQUIRED 加入现有事务，REQUIRES_NEW 使用独立事务并可能额外占连接，要谨慎评估池容量。本地数据库事务不能自动撤销已发出的短信、支付请求或远程服务操作；跨边界需补偿、消息或幂等设计。 "
      },
      {
        "title": "索引与证据",
        "anchor": "索引与证据",
        "level": 2,
        "text": "  为按用户倒序查询订单考虑联合索引 (user_id, created_at, id)，结合 EXPLAIN、行数和真实负载验证。索引占空间并增加写成本，不能为每列都建一个索引。复杂查询是否使用索引、是否回表要以具体执行计划为证据。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - MySQL 8.4 InnoDB 事务模型 - MySQL 8.4 索引 - Spring 6.2 @Transactional - Spring 6.2 回滚规则 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】事务的 ACID 各是什么？ 2. 【应用】最后一件商品如何避免两个请求同时扣减成功？ 3. 【应用】捕获异常后不再抛出，可能怎样影响事务？ 4. 【深入】本地事务为什么不能自动回滚第三方支付？ 5. 【深入】如何为用户订单列表设计并验证联合索引？ "
      }
    ],
    "questions": [
      {
        "id": "7e0be3120cbe123b",
        "text": "【基础】事务的 ACID 各是什么？"
      },
      {
        "id": "4603e4a86b528acd",
        "text": "【应用】最后一件商品如何避免两个请求同时扣减成功？"
      },
      {
        "id": "09ac667f3aed0351",
        "text": "【应用】捕获异常后不再抛出，可能怎样影响事务？"
      },
      {
        "id": "5c00076e2ff8922c",
        "text": "【深入】本地事务为什么不能自动回滚第三方支付？"
      },
      {
        "id": "eea9e891ef201652",
        "text": "【深入】如何为用户订单列表设计并验证联合索引？"
      }
    ],
    "searchText": "sql、索引与事务中的业务不变量 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 数据建模先表达规则 用户、商品、订单、明细分别建模，主键标识身份，唯一约束保护不可重复规则，not null 表达必填。sql null 表示缺失或未知，比较用 is null；where x=null 不会得到正常等号预期。left join 右表条件放 where 可能把未匹配行过滤掉。 金额用 decimal 与 bigdecimal 对齐，时间字段约定时区；auto_increment 不保证连续，不能用编号缺口判断订单丢失。 实际开发：最后一件库存 sql update product set stock = stock - 1 where id = ? and stock 0; 检查受影响行数是否为 1，再在同一事务中插入订单。先查 stock 0 再无条件更新会竞态；java 单机锁也拦不住其他实例。 java @transactional public long createorder(long productid, long userid) { if (stockmapper.reserve(productid) != 1) { throw new illegalstateexception(\"库存不足\"); } return orderrepository.create(productid, userid); } 这是业务方法片段，mapper/repository 需实现并共享事务管理的数据源；真实错误应使用清晰业务异常。事务本身不自动防重复支付，仍需唯一约束、幂等键和状态转换条件。 acid 与隔离 原子性保护事务整体提交或回滚；一致性还依赖应用正确表达规则，不能期待数据库替你发现转账 sql 写反。隔离级别、锁与 mvcc 决定并发观察；持久性还受日志刷盘与存储配置约束。 innodb 的 undo 支持回滚与多版本，redo 支持崩溃恢复，binlog 是服务器层变更日志，三者不能混为“操作历史”。快照读并不意味着永远读到最新提交；锁定读与普通 select 的语义需区分。 spring 事务生效条件 代理模式需从适用代理入口进入；内部 this 自调用可能绕过。默认通常 runtimeexception/error 回滚，受检异常按 rollbackfor 等配置；吞掉异常可能让事务提交。readonly 多为提示，不是通用写保护。 required 加入现有事务，requires_new 使用独立事务并可能额外占连接，要谨慎评估池容量。本地数据库事务不能自动撤销已发出的短信、支付请求或远程服务操作；跨边界需补偿、消息或幂等设计。 索引与证据 为按用户倒序查询订单考虑联合索引 (user_id, created_at, id)，结合 explain、行数和真实负载验证。索引占空间并增加写成本，不能为每列都建一个索引。复杂查询是否使用索引、是否回表要以具体执行计划为证据。 参考资料 - mysql 8.4 innodb 事务模型 - mysql 8.4 索引 - spring 6.2 @transactional - spring 6.2 回滚规则 模拟面试问题 1. 【基础】事务的 acid 各是什么？ 2. 【应用】最后一件商品如何避免两个请求同时扣减成功？ 3. 【应用】捕获异常后不再抛出，可能怎样影响事务？ 4. 【深入】本地事务为什么不能自动回滚第三方支付？ 5. 【深入】如何为用户订单列表设计并验证联合索引？"
  },
  {
    "id": "java-passwords",
    "version": "7d4501d89930",
    "md": "learning/courses/java-engineering/01-java-passwords.md",
    "title": "密码存储、编码与密码学用途",
    "description": "把表示、摘要、加密与身份验证分清，构建合理登录基础。",
    "subject": "java-engineering",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "四种能力不同",
        "anchor": "四种能力不同",
        "level": 2,
        "text": "  Base64 是可逆编码，不保密；普通哈希用于摘要，不能“解密”；对称加密如 AES 使用密钥保护机密性；数字签名通常私钥签、公钥验，HMAC 则双方共享密钥。ECC 是算法家族，不代表某个统一的“加解密接口”。  TLS 还涉及证书身份验证与密钥协商。只做摘要不能阻止有能力重算摘要的攻击者改数据；需要可信摘要来源、MAC 或签名。不要自己实现密码算法或拼凑生产协议。 "
      },
      {
        "title": "实际开发：注册与登录",
        "anchor": "实际开发注册与登录",
        "level": 2,
        "text": "  java String stored = encoder.encode(rawPassword); // 将 stored 保存为密码哈希，避免记录 rawPassword boolean matched = encoder.matches(loginPassword, stored);   PasswordEncoder 是接口，encoder 是已注入实现对象，不是每次 encode 自动 new 的占位符。盐和工作因子通常包含在编码后的格式中；同一密码两次 encode 可能不同，不能比较两个新生成的哈希字符串。  专用密码哈希故意增加计算或内存成本，降低离线猜测速度；裸 SHA-256(password) 即便有盐通常仍太快。按安全需求与库支持选择 Argon2id、bcrypt、PBKDF2 等，工作参数需在目标硬件验证，并保留未来升级能力。 "
      },
      {
        "title": "密码边界不是只有数据库",
        "anchor": "密码边界不是只有数据库",
        "level": 2,
        "text": "  bcrypt 常见实现存在输入字节长度边界，不能只用 Java 字符数判断后就假设任何长密码都完整处理。统一编码与库行为，拒绝不支持的输入，不能静默截断。认证接口还应控制请求速率、失败尝试和账号状态。  日志、异常、DTO.toString、埋点和请求抓取同样可能泄漏密码。不要把哈希当普通资料返回；泄露哈希仍有离线攻击风险。对用户不存在和密码错误的响应可保持一致，减少枚举信息，但内部监控仍要区分故障。 "
      },
      {
        "title": "密钥与盐",
        "anchor": "密钥与盐",
        "level": 2,
        "text": "  盐不需保密，目的是让相同密码不表现为相同哈希并抵抗预计算；密钥必须保密，轮换和分发是不同问题。密钥走环境或专门管理服务，不写进 Git；环境变量也不是绝对防泄漏方案，仍需访问控制与日志管理。  随机重置 Token 可用 SecureRandom 生成足够熵字节，服务端只存其摘要，并设置短有效期与单次使用规则。唯一资源 ID 不自动等于授权凭据。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Spring Security 密码存储 - PasswordEncoder - JCA 安全架构 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Base64、哈希与加密分别解决什么问题？ 2. 【应用】为什么不能比较两次 encode 的字符串验证密码？ 3. 【应用】盐和服务端密钥有什么区别？ 4. 【深入】为什么裸 SHA-256 不适合直接保存用户密码？ 5. 【深入】密码长度限制为何需要注意字节而非只有字符？ "
      }
    ],
    "questions": [
      {
        "id": "2d83b92b5ee17c50",
        "text": "【基础】Base64、哈希与加密分别解决什么问题？"
      },
      {
        "id": "626e870beda11238",
        "text": "【应用】为什么不能比较两次 encode 的字符串验证密码？"
      },
      {
        "id": "34edae33ac4bccb7",
        "text": "【应用】盐和服务端密钥有什么区别？"
      },
      {
        "id": "d8ef72596f3be268",
        "text": "【深入】为什么裸 SHA-256 不适合直接保存用户密码？"
      },
      {
        "id": "2d68e5755dc208f5",
        "text": "【深入】密码长度限制为何需要注意字节而非只有字符？"
      }
    ],
    "searchText": "密码存储、编码与密码学用途 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 四种能力不同 base64 是可逆编码，不保密；普通哈希用于摘要，不能“解密”；对称加密如 aes 使用密钥保护机密性；数字签名通常私钥签、公钥验，hmac 则双方共享密钥。ecc 是算法家族，不代表某个统一的“加解密接口”。 tls 还涉及证书身份验证与密钥协商。只做摘要不能阻止有能力重算摘要的攻击者改数据；需要可信摘要来源、mac 或签名。不要自己实现密码算法或拼凑生产协议。 实际开发：注册与登录 java string stored = encoder.encode(rawpassword); // 将 stored 保存为密码哈希，避免记录 rawpassword boolean matched = encoder.matches(loginpassword, stored); passwordencoder 是接口，encoder 是已注入实现对象，不是每次 encode 自动 new 的占位符。盐和工作因子通常包含在编码后的格式中；同一密码两次 encode 可能不同，不能比较两个新生成的哈希字符串。 专用密码哈希故意增加计算或内存成本，降低离线猜测速度；裸 sha-256(password) 即便有盐通常仍太快。按安全需求与库支持选择 argon2id、bcrypt、pbkdf2 等，工作参数需在目标硬件验证，并保留未来升级能力。 密码边界不是只有数据库 bcrypt 常见实现存在输入字节长度边界，不能只用 java 字符数判断后就假设任何长密码都完整处理。统一编码与库行为，拒绝不支持的输入，不能静默截断。认证接口还应控制请求速率、失败尝试和账号状态。 日志、异常、dto.tostring、埋点和请求抓取同样可能泄漏密码。不要把哈希当普通资料返回；泄露哈希仍有离线攻击风险。对用户不存在和密码错误的响应可保持一致，减少枚举信息，但内部监控仍要区分故障。 密钥与盐 盐不需保密，目的是让相同密码不表现为相同哈希并抵抗预计算；密钥必须保密，轮换和分发是不同问题。密钥走环境或专门管理服务，不写进 git；环境变量也不是绝对防泄漏方案，仍需访问控制与日志管理。 随机重置 token 可用 securerandom 生成足够熵字节，服务端只存其摘要，并设置短有效期与单次使用规则。唯一资源 id 不自动等于授权凭据。 参考资料 - spring security 密码存储 - passwordencoder - jca 安全架构 模拟面试问题 1. 【基础】base64、哈希与加密分别解决什么问题？ 2. 【应用】为什么不能比较两次 encode 的字符串验证密码？ 3. 【应用】盐和服务端密钥有什么区别？ 4. 【深入】为什么裸 sha-256 不适合直接保存用户密码？ 5. 【深入】密码长度限制为何需要注意字节而非只有字符？"
  },
  {
    "id": "java-jwt",
    "version": "e5e8687ebf7e",
    "md": "learning/courses/java-engineering/02-java-jwt.md",
    "title": "JWT 验证、认证与资源授权",
    "description": "避免把可解码声明当可信身份，并明确令牌生命周期。",
    "subject": "java-engineering",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "格式、传输与框架",
        "anchor": "格式传输与框架",
        "level": 2,
        "text": "  JWT 是声明格式，Bearer 是持有凭据的使用方式，Spring Security 是安全框架。常见三段是签名 JWT 的紧凑 JWS，不是所有 JWT 都恰好三段；加密 JWE 有另一种结构。  JWS 的 Header 和 Payload 通常只是 Base64URL 编码，可被读取，不能放密码、密钥或不应公开的隐私。仅解码出 sub=1001 没有建立可信身份，必须验证可信算法、密钥与应用声明。 "
      },
      {
        "title": "验证链路",
        "anchor": "验证链路",
        "level": 2,
        "text": "  接收 Authorization: Bearer token，规范解析前缀，验证签名、exp/nbf、issuer、audience 和令牌用途，再按应用检查撤销与账户状态。不要接受 token 自报的任意算法，也不要从用户提交的 URL 任意下载验证密钥。  JJWT 0.12.x 解析片段：  java Claims claims = Jwts.parser() .verifyWith(trustedKey) .requireIssuer(\"shop-api\") .build() .parseSignedClaims(token) .getPayload();   trustedKey 由服务端可信配置提供；这是验证 API 片段，实际还要按业务校验 audience、要求的声明与算法集合，不能当完整认证模块。模块依赖版本需一致，旧 parserBuilder 等教程 API 不与 0.12.x 混写。HS256 需足够强随机密钥材料，不能把人类短口令随意当密钥。 "
      },
      {
        "title": "实际开发：查询自己的订单",
        "anchor": "实际开发查询自己的订单",
        "level": 2,
        "text": "  sql SELECT id, amount, status FROM orders WHERE id = ? AND user_id = ?;   user_id 从可信认证上下文取得，不能直接由客户端指定后就信任。Token 有效只解决认证，订单归属与管理员权限是授权；否则用户 A 修改 URL 就可能查看用户 B 的订单。  401 表示缺少或没有有效凭据，403 表示拒绝授权等情形；Bearer 方案还应按协议形成适用认证响应头。不要把数据库断线、密钥配置错误等所有异常捕获成 401，系统故障需保留自己的诊断路径。 "
      },
      {
        "title": "撤销、刷新与存储",
        "anchor": "撤销刷新与存储",
        "level": 2,
        "text": "  短期 access token 限制暴露窗口；刷新凭据需独立生命周期、轮换与重放防护。黑名单、版本号或会话状态可支持撤销，但会改变“完全无状态”的假设。JWT 不天然优于服务端 Session。  浏览器 Cookie 与可由脚本读取的存储各有 XSS/CSRF 边界，需按应用架构选择；JWT 本身不防这些攻击。正式 Servlet 项目优先使用 SecurityFilterChain 或成熟资源服务器验证，不只靠 MVC Interceptor 匹配路径。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - RFC 7519 JWT - RFC 8725 JWT 最佳实践 - JJWT 官方说明 - Spring Security JWT 资源服务器 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】JWT、JWS 与 Bearer 分别指什么？ 2. 【应用】Token 验证成功后为什么还要检查订单所属用户？ 3. 【应用】如何测试篡改、过期、错误发行者和撤销令牌？ 4. 【深入】登出如何影响已经签发的自包含 JWT？ 5. 【深入】为什么不能把所有异常统一当成认证失败？ "
      }
    ],
    "questions": [
      {
        "id": "d0fcdef49729e554",
        "text": "【基础】JWT、JWS 与 Bearer 分别指什么？"
      },
      {
        "id": "fbfd9c73299b0317",
        "text": "【应用】Token 验证成功后为什么还要检查订单所属用户？"
      },
      {
        "id": "bdde1e185e249c34",
        "text": "【应用】如何测试篡改、过期、错误发行者和撤销令牌？"
      },
      {
        "id": "cb0522a50fab74bb",
        "text": "【深入】登出如何影响已经签发的自包含 JWT？"
      },
      {
        "id": "3b9fb30cea3b5c54",
        "text": "【深入】为什么不能把所有异常统一当成认证失败？"
      }
    ],
    "searchText": "jwt 验证、认证与资源授权 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 格式、传输与框架 jwt 是声明格式，bearer 是持有凭据的使用方式，spring security 是安全框架。常见三段是签名 jwt 的紧凑 jws，不是所有 jwt 都恰好三段；加密 jwe 有另一种结构。 jws 的 header 和 payload 通常只是 base64url 编码，可被读取，不能放密码、密钥或不应公开的隐私。仅解码出 sub=1001 没有建立可信身份，必须验证可信算法、密钥与应用声明。 验证链路 接收 authorization: bearer token，规范解析前缀，验证签名、exp/nbf、issuer、audience 和令牌用途，再按应用检查撤销与账户状态。不要接受 token 自报的任意算法，也不要从用户提交的 url 任意下载验证密钥。 jjwt 0.12.x 解析片段： java claims claims = jwts.parser() .verifywith(trustedkey) .requireissuer(\"shop-api\") .build() .parsesignedclaims(token) .getpayload(); trustedkey 由服务端可信配置提供；这是验证 api 片段，实际还要按业务校验 audience、要求的声明与算法集合，不能当完整认证模块。模块依赖版本需一致，旧 parserbuilder 等教程 api 不与 0.12.x 混写。hs256 需足够强随机密钥材料，不能把人类短口令随意当密钥。 实际开发：查询自己的订单 sql select id, amount, status from orders where id = ? and user_id = ?; user_id 从可信认证上下文取得，不能直接由客户端指定后就信任。token 有效只解决认证，订单归属与管理员权限是授权；否则用户 a 修改 url 就可能查看用户 b 的订单。 401 表示缺少或没有有效凭据，403 表示拒绝授权等情形；bearer 方案还应按协议形成适用认证响应头。不要把数据库断线、密钥配置错误等所有异常捕获成 401，系统故障需保留自己的诊断路径。 撤销、刷新与存储 短期 access token 限制暴露窗口；刷新凭据需独立生命周期、轮换与重放防护。黑名单、版本号或会话状态可支持撤销，但会改变“完全无状态”的假设。jwt 不天然优于服务端 session。 浏览器 cookie 与可由脚本读取的存储各有 xss/csrf 边界，需按应用架构选择；jwt 本身不防这些攻击。正式 servlet 项目优先使用 securityfilterchain 或成熟资源服务器验证，不只靠 mvc interceptor 匹配路径。 参考资料 - rfc 7519 jwt - rfc 8725 jwt 最佳实践 - jjwt 官方说明 - spring security jwt 资源服务器 模拟面试问题 1. 【基础】jwt、jws 与 bearer 分别指什么？ 2. 【应用】token 验证成功后为什么还要检查订单所属用户？ 3. 【应用】如何测试篡改、过期、错误发行者和撤销令牌？ 4. 【深入】登出如何影响已经签发的自包含 jwt？ 5. 【深入】为什么不能把所有异常统一当成认证失败？"
  },
  {
    "id": "java-context",
    "version": "da577d4a1f09",
    "md": "learning/courses/java-engineering/03-java-context.md",
    "title": "ThreadLocal 与请求上下文的清理",
    "description": "理解线程复用、异步边界及认证信息传播。",
    "subject": "java-engineering",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "ThreadLocal 绑定线程",
        "anchor": "threadlocal-绑定线程",
        "level": 2,
        "text": "  ThreadLocal 给每个线程关联独立值，不是在对象中自动创建全局当前用户，也不等于请求作用域。线程池复用线程，旧请求留下值会被下一个请求看到，因此“当前线程结束自然释放”不适用于长期存活的工作线程。  java try { currentUser.set(verifiedUserId); chain.doFilter(request, response); } finally { currentUser.remove(); }   这是同步 Servlet Filter 内的生命周期片段，currentUser、verifiedUserId 和 chain 来自应用；必须在进入受保护处理前完成认证。finally 包围真正的下游执行，能覆盖业务异常，而不仅依赖某个后续 MVC 回调。 "
      },
      {
        "title": "实际开发：用户串号",
        "anchor": "实际开发用户串号",
        "level": 2,
        "text": "  请求 A 在工作线程 T1 上设置用户 7，异常返回却忘 remove；请求 B 无认证分支复用 T1，若业务只读取旧值，就可能以用户 7 执行操作。解决不只是加一个 null 判断，要让认证、设置、消费和清理形成清晰边界。  ThreadLocalMap 的键弱引用不意味着值立即回收。线程长存活、条目残留或业务仍持有对象引用，都可能保留值。每次使用显式 remove 是生命周期管理，不应寄望某次 GC。 "
      },
      {
        "title": "异步会切断假设",
        "anchor": "异步会切断假设",
        "level": 2,
        "text": "  CompletableFuture、线程池和 Servlet 异步分派可能换线程，普通 ThreadLocal 不自动传播。InheritableThreadLocal 也不适合直接解决线程池复用传播：工作线程创建时继承的值不代表每个提交任务的上下文。  更明确的办法是把必要用户 ID 或不可变上下文作为参数传入任务；必须框架传播时使用其提供的受控机制，并在任务退出时恢复或清理，避免覆盖已有上下文。Spring Security 也有专门的安全上下文传播能力。 "
      },
      {
        "title": "状态最小化",
        "anchor": "状态最小化",
        "level": 2,
        "text": "  不要把完整请求、响应、数据库连接或大用户对象长期塞进 ThreadLocal。它们有独立生命周期和资源所有权。只传明确需要的信息，并在服务边界继续做授权，不能因为某处能读到用户 ID 就认为操作已被允许。  响应式 Web 栈的执行模型不同，不要把同步 Servlet 的 ThreadLocal 模式原样搬过去；需要遵循上下文随任务传播的框架契约。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - ThreadLocal API - InheritableThreadLocal API - Spring Security 并发上下文 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】ThreadLocal 的值与请求还是线程关联？ 2. 【应用】线程池复用为何可能导致用户信息串号？ 3. 【应用】为什么清理应覆盖异常路径？ 4. 【深入】InheritableThreadLocal 为什么不能普遍解决线程池上下文传播？ 5. 【深入】异步调用如何显式传递可信用户身份？ "
      }
    ],
    "questions": [
      {
        "id": "874778cb0ad7b5e7",
        "text": "【基础】ThreadLocal 的值与请求还是线程关联？"
      },
      {
        "id": "d783a2e39c689aca",
        "text": "【应用】线程池复用为何可能导致用户信息串号？"
      },
      {
        "id": "1aec4ab7490d780c",
        "text": "【应用】为什么清理应覆盖异常路径？"
      },
      {
        "id": "9c657faa2f7f7ef9",
        "text": "【深入】InheritableThreadLocal 为什么不能普遍解决线程池上下文传播？"
      },
      {
        "id": "abf0ecf5b5b2b06b",
        "text": "【深入】异步调用如何显式传递可信用户身份？"
      }
    ],
    "searchText": "threadlocal 与请求上下文的清理 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 threadlocal 绑定线程 threadlocal 给每个线程关联独立值，不是在对象中自动创建全局当前用户，也不等于请求作用域。线程池复用线程，旧请求留下值会被下一个请求看到，因此“当前线程结束自然释放”不适用于长期存活的工作线程。 java try { currentuser.set(verifieduserid); chain.dofilter(request, response); } finally { currentuser.remove(); } 这是同步 servlet filter 内的生命周期片段，currentuser、verifieduserid 和 chain 来自应用；必须在进入受保护处理前完成认证。finally 包围真正的下游执行，能覆盖业务异常，而不仅依赖某个后续 mvc 回调。 实际开发：用户串号 请求 a 在工作线程 t1 上设置用户 7，异常返回却忘 remove；请求 b 无认证分支复用 t1，若业务只读取旧值，就可能以用户 7 执行操作。解决不只是加一个 null 判断，要让认证、设置、消费和清理形成清晰边界。 threadlocalmap 的键弱引用不意味着值立即回收。线程长存活、条目残留或业务仍持有对象引用，都可能保留值。每次使用显式 remove 是生命周期管理，不应寄望某次 gc。 异步会切断假设 completablefuture、线程池和 servlet 异步分派可能换线程，普通 threadlocal 不自动传播。inheritablethreadlocal 也不适合直接解决线程池复用传播：工作线程创建时继承的值不代表每个提交任务的上下文。 更明确的办法是把必要用户 id 或不可变上下文作为参数传入任务；必须框架传播时使用其提供的受控机制，并在任务退出时恢复或清理，避免覆盖已有上下文。spring security 也有专门的安全上下文传播能力。 状态最小化 不要把完整请求、响应、数据库连接或大用户对象长期塞进 threadlocal。它们有独立生命周期和资源所有权。只传明确需要的信息，并在服务边界继续做授权，不能因为某处能读到用户 id 就认为操作已被允许。 响应式 web 栈的执行模型不同，不要把同步 servlet 的 threadlocal 模式原样搬过去；需要遵循上下文随任务传播的框架契约。 参考资料 - threadlocal api - inheritablethreadlocal api - spring security 并发上下文 模拟面试问题 1. 【基础】threadlocal 的值与请求还是线程关联？ 2. 【应用】线程池复用为何可能导致用户信息串号？ 3. 【应用】为什么清理应覆盖异常路径？ 4. 【深入】inheritablethreadlocal 为什么不能普遍解决线程池上下文传播？ 5. 【深入】异步调用如何显式传递可信用户身份？"
  },
  {
    "id": "java-delivery",
    "version": "3c27f75a8453",
    "md": "learning/courses/java-engineering/04-java-delivery.md",
    "title": "Maven、测试、Git 与证据式调试",
    "description": "把构建、验证和故障定位组织成可重复的开发流程。",
    "subject": "java-engineering",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "从能启动到能重复构建",
        "anchor": "从能启动到能重复构建",
        "level": 2,
        "text": "  Maven 用 groupId、artifactId、version 标识依赖，POM 描述构建。生命周期阶段与插件 goal 不同：test 执行此前相关阶段，package 生成包，install 放本地仓库，deploy 发布仓库。执行目标失败要看哪个插件、哪一阶段，而不是只看最后 BUILD FAILURE。  dependencyManagement 管版本约束，不等于直接引入所有依赖；Boot parent/BOM 帮助统一兼容版本。冲突通过 dependency:tree、effective-pom 定位，不要随机删 jar。构建使用的 JDK、测试 JDK 与部署 JRE 要一致兼容。 "
      },
      {
        "title": "有意义的测试",
        "anchor": "有意义的测试",
        "level": 2,
        "text": "  java @Test void rejectsNegativeQuantity() { assertThrows(IllegalArgumentException.class, () - validateQuantity(-1)); }   validateQuantity 是被测业务方法。测试应覆盖正常、边界和失败：零库存、重复用户名、恰好到期、无权限订单。单元测试用 Fake 隔离慢外部依赖；集成测试验证真实映射、SQL 与事务，不能用全 Mock 证明数据库正确。  @BeforeEach 每个测试前，@BeforeAll 按测试类级运行；默认生命周期常要求 static，但 PER_CLASS 等配置可例外，原稿“一律必须 static”过于绝对。测试不要依赖固定执行顺序、真实时间流逝或外网稳定性。 "
      },
      {
        "title": "实际开发：定位更新菜品失败",
        "anchor": "实际开发定位更新菜品失败",
        "level": 2,
        "text": "  先记录请求、状态码和关联日志，确认是否进 Controller，再看 DTO、Service、SQL、影响行数及事务提交。断点 Step Over 看当前流程，Step Into 看实现，调用栈定位来路；快捷键随 IDE 可配置，不是语言规范。  调试过程中先提出可证伪假设，例如“数据库未改因为 DTO id 丢失”，检查对象与 SQL，而不是同时修改五个注解碰运气。AI 生成代码也需解释依赖、错误分支与资源生命周期。 "
      },
      {
        "title": "Git 与小范围 Spike",
        "anchor": "git-与小范围-spike",
        "level": 2,
        "text": "  add 暂存，commit 创建本地历史，push 才更新远端；嵌套仓库、子模块各有独立状态。操作前确认根目录、status 和 diff，避免把另一个仓库的变更误当普通目录。本次网站改造禁止提交推送，与学习命令示例无关。  Spike 用时间盒验证一个高不确定问题，例如“分页插件在指定版本是否产生 LIMIT”。记录假设、最小实验、证据与结论，不把探索代码当可直接上线的系统。学习路线按能力验收，而非把“12—17 天”当精通框架的标准。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Maven 生命周期 - Maven 依赖机制 - JUnit 5 用户指南 - Git 文档 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】Maven phase 与 plugin goal 有何不同？ 2. 【应用】如何定位传递依赖版本冲突？ 3. 【应用】同一业务操作需要哪些边界与失败测试？ 4. 【深入】全 Mock 的测试为什么不能证明 SQL 映射正确？ 5. 【深入】如何把一次猜测式排障改为可证伪实验？ "
      }
    ],
    "questions": [
      {
        "id": "99ebaca936daa48e",
        "text": "【基础】Maven phase 与 plugin goal 有何不同？"
      },
      {
        "id": "234f1d3d78e8cef8",
        "text": "【应用】如何定位传递依赖版本冲突？"
      },
      {
        "id": "a8e1e055872de2e1",
        "text": "【应用】同一业务操作需要哪些边界与失败测试？"
      },
      {
        "id": "71137a26bfa4fce2",
        "text": "【深入】全 Mock 的测试为什么不能证明 SQL 映射正确？"
      },
      {
        "id": "687f82360434dfef",
        "text": "【深入】如何把一次猜测式排障改为可证伪实验？"
      }
    ],
    "searchText": "maven、测试、git 与证据式调试 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 从能启动到能重复构建 maven 用 groupid、artifactid、version 标识依赖，pom 描述构建。生命周期阶段与插件 goal 不同：test 执行此前相关阶段，package 生成包，install 放本地仓库，deploy 发布仓库。执行目标失败要看哪个插件、哪一阶段，而不是只看最后 build failure。 dependencymanagement 管版本约束，不等于直接引入所有依赖；boot parent/bom 帮助统一兼容版本。冲突通过 dependency:tree、effective-pom 定位，不要随机删 jar。构建使用的 jdk、测试 jdk 与部署 jre 要一致兼容。 有意义的测试 java @test void rejectsnegativequantity() { assertthrows(illegalargumentexception.class, () - validatequantity(-1)); } validatequantity 是被测业务方法。测试应覆盖正常、边界和失败：零库存、重复用户名、恰好到期、无权限订单。单元测试用 fake 隔离慢外部依赖；集成测试验证真实映射、sql 与事务，不能用全 mock 证明数据库正确。 @beforeeach 每个测试前，@beforeall 按测试类级运行；默认生命周期常要求 static，但 per_class 等配置可例外，原稿“一律必须 static”过于绝对。测试不要依赖固定执行顺序、真实时间流逝或外网稳定性。 实际开发：定位更新菜品失败 先记录请求、状态码和关联日志，确认是否进 controller，再看 dto、service、sql、影响行数及事务提交。断点 step over 看当前流程，step into 看实现，调用栈定位来路；快捷键随 ide 可配置，不是语言规范。 调试过程中先提出可证伪假设，例如“数据库未改因为 dto id 丢失”，检查对象与 sql，而不是同时修改五个注解碰运气。ai 生成代码也需解释依赖、错误分支与资源生命周期。 git 与小范围 spike add 暂存，commit 创建本地历史，push 才更新远端；嵌套仓库、子模块各有独立状态。操作前确认根目录、status 和 diff，避免把另一个仓库的变更误当普通目录。本次网站改造禁止提交推送，与学习命令示例无关。 spike 用时间盒验证一个高不确定问题，例如“分页插件在指定版本是否产生 limit”。记录假设、最小实验、证据与结论，不把探索代码当可直接上线的系统。学习路线按能力验收，而非把“12—17 天”当精通框架的标准。 参考资料 - maven 生命周期 - maven 依赖机制 - junit 5 用户指南 - git 文档 模拟面试问题 1. 【基础】maven phase 与 plugin goal 有何不同？ 2. 【应用】如何定位传递依赖版本冲突？ 3. 【应用】同一业务操作需要哪些边界与失败测试？ 4. 【深入】全 mock 的测试为什么不能证明 sql 映射正确？ 5. 【深入】如何把一次猜测式排障改为可证伪实验？"
  },
  {
    "id": "java-design-agent",
    "version": "72714e83b97a",
    "md": "learning/courses/java-engineering/05-java-design-agent.md",
    "title": "设计模式与 Java 工具型 Agent",
    "description": "从可替换策略到受控工具执行，区分框架、协议与模型决策。",
    "subject": "java-engineering",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "Java",
      "后端"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "设计模式服务具体变化点",
        "anchor": "设计模式服务具体变化点",
        "level": 2,
        "text": "  工厂集中创建策略，Builder 构建参数较多的对象，代理增强访问，装饰器叠加能力，适配器转换接口；策略封装可替换算法，观察者通知订阅者，模板固定骨架并开放步骤。使用模式前先说清“哪个变化导致现在代码难维护”。  单例的唯一性需限定类加载器、容器与实例定义；Spring singleton 不是 GoF 私有构造单例的同义词。JdbcTemplate 体现模板化执行与回调协作，不应把所有名字含 Template 的类机械说成严格继承式 Template Method。 "
      },
      {
        "title": "实际开发：订单只读查询工具",
        "anchor": "实际开发订单只读查询工具",
        "level": 2,
        "text": "  模型提出 lookupOrder(orderId) ，Java 工具层做参数校验、用户授权与数据库查询，再返回最小必要信息。模型不直接执行 SQL，也不能因为它传来 admin=true 就获得权限。工具只接受结构化 ID，不接受任意 SQL、Shell 或跨目录路径。  text 用户目标 → 模型生成工具调用意图 → 应用校验参数与权限 → Java 工具执行并记录结果 → 结果回到模型 → 下一步或结束   执行循环需设置工具次数、总时间和上下文预算；失败区分可重试网络故障与不可重试的无权限，不能无限重试。对会写数据的工具，需要幂等与明确授权边界。 "
      },
      {
        "title": "Function Calling、MCP 与 Java 框架",
        "anchor": "function-callingmcp-与-java-框架",
        "level": 2,
        "text": "  Function Calling 表达模型要调用什么及参数，MCP 标准化应用与外部能力的发现和交互，两者可组合也可独立。MCP 角色包括 Host、Client、Server，Server 可以是本地子进程，不等于远端云主机。协议版本要固定核对，不能把某一版本的传输说成永久不变。  stdio 传输时 stdout 留给协议消息，日志放 stderr；Streamable HTTP 用于相应 HTTP 连接方式。服务端提供工具不代表每个模型或应用都自动授权执行。LangChain4j 是 Java 应用框架，MCP 是协议，Agent/Harness 是行为与运行机制概念，不能互相替代。 "
      },
      {
        "title": "边界与验证",
        "anchor": "边界与验证",
        "level": 2,
        "text": "  外部网页、工具结果和检索文档是数据，可能包含误导指令；不能自动提升为操作授权。最小权限工具、审计日志和可恢复状态比堆砌提示词更可靠。AGENTS.md 记录仓库约定，README 解释使用，架构文档记录决策；是否读取以及层级规则由具体工具决定。  这一章仅拓展原稿已有概念，不包含未经验证的“某框架当前最佳”或模型排行；完整生成式软件工程课程再展开评估、上下文与失效模式。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - MCP 架构 - MCP 传输规范 - LangChain4j 工具调用 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 【基础】策略、工厂和适配器各解决什么变化？ 2. 【应用】订单查询工具为什么不能直接信任模型传入的 userId？ 3. 【应用】模型工具调用失败应如何决定重试？ 4. 【深入】Function Calling 与 MCP 在系统中分别负责什么？ 5. 【深入】stdio 协议为什么要求日志不写 stdout？ "
      }
    ],
    "questions": [
      {
        "id": "b86e5d44d7bc8f9b",
        "text": "【基础】策略、工厂和适配器各解决什么变化？"
      },
      {
        "id": "5a0ccd5bbcf3216c",
        "text": "【应用】订单查询工具为什么不能直接信任模型传入的 userId？"
      },
      {
        "id": "4c360146449a1dbf",
        "text": "【应用】模型工具调用失败应如何决定重试？"
      },
      {
        "id": "63eb2b604e12dfef",
        "text": "【深入】Function Calling 与 MCP 在系统中分别负责什么？"
      },
      {
        "id": "0cfd9c931f984240",
        "text": "【深入】stdio 协议为什么要求日志不写 stdout？"
      }
    ],
    "searchText": "设计模式与 java 工具型 agent 课程基线：java 17＋／spring boot 3.x（涉及 spring 时采用 6.x、jakarta 命名空间）。代码中标注的业务片段需要应用依赖与上下文，不等同于完整生产系统。 设计模式服务具体变化点 工厂集中创建策略，builder 构建参数较多的对象，代理增强访问，装饰器叠加能力，适配器转换接口；策略封装可替换算法，观察者通知订阅者，模板固定骨架并开放步骤。使用模式前先说清“哪个变化导致现在代码难维护”。 单例的唯一性需限定类加载器、容器与实例定义；spring singleton 不是 gof 私有构造单例的同义词。jdbctemplate 体现模板化执行与回调协作，不应把所有名字含 template 的类机械说成严格继承式 template method。 实际开发：订单只读查询工具 模型提出 lookuporder(orderid) ，java 工具层做参数校验、用户授权与数据库查询，再返回最小必要信息。模型不直接执行 sql，也不能因为它传来 admin=true 就获得权限。工具只接受结构化 id，不接受任意 sql、shell 或跨目录路径。 text 用户目标 → 模型生成工具调用意图 → 应用校验参数与权限 → java 工具执行并记录结果 → 结果回到模型 → 下一步或结束 执行循环需设置工具次数、总时间和上下文预算；失败区分可重试网络故障与不可重试的无权限，不能无限重试。对会写数据的工具，需要幂等与明确授权边界。 function calling、mcp 与 java 框架 function calling 表达模型要调用什么及参数，mcp 标准化应用与外部能力的发现和交互，两者可组合也可独立。mcp 角色包括 host、client、server，server 可以是本地子进程，不等于远端云主机。协议版本要固定核对，不能把某一版本的传输说成永久不变。 stdio 传输时 stdout 留给协议消息，日志放 stderr；streamable http 用于相应 http 连接方式。服务端提供工具不代表每个模型或应用都自动授权执行。langchain4j 是 java 应用框架，mcp 是协议，agent/harness 是行为与运行机制概念，不能互相替代。 边界与验证 外部网页、工具结果和检索文档是数据，可能包含误导指令；不能自动提升为操作授权。最小权限工具、审计日志和可恢复状态比堆砌提示词更可靠。agents.md 记录仓库约定，readme 解释使用，架构文档记录决策；是否读取以及层级规则由具体工具决定。 这一章仅拓展原稿已有概念，不包含未经验证的“某框架当前最佳”或模型排行；完整生成式软件工程课程再展开评估、上下文与失效模式。 参考资料 - mcp 架构 - mcp 传输规范 - langchain4j 工具调用 模拟面试问题 1. 【基础】策略、工厂和适配器各解决什么变化？ 2. 【应用】订单查询工具为什么不能直接信任模型传入的 userid？ 3. 【应用】模型工具调用失败应如何决定重试？ 4. 【深入】function calling 与 mcp 在系统中分别负责什么？ 5. 【深入】stdio 协议为什么要求日志不写 stdout？"
  },
  {
    "id": "algo-invariants-search",
    "version": "3f923b73575f",
    "md": "learning/courses/algorithms/invariants-search.md",
    "title": "用不变量理解复杂度、二分与双指针",
    "description": "先定义候选区间，再证明每次排除与状态压缩为什么安全。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "从正确的暴力法出发",
        "anchor": "从正确的暴力法出发",
        "level": 2,
        "text": "  算法优化不是换一个更复杂的数据结构，而是消除重复工作。对十万条订单逐条比较需要约百亿次比较；排序后扫描约为 n log n，但“某个复杂度一定能过”只是经验，还受常数、语言、总数据量与时限影响。分析空间时分别记录输入、输出和辅助空间；Python 切片会复制列表，不能把 prices[1:] 视为零成本。  不变量是循环开始与结束都成立的条件。例如寻找第一个大于等于 x 的位置时，维护半开区间 [lo, hi) ：左侧已知小于 x，右侧已知大于等于 x，答案只在中间。结束时 lo==hi 就是插入边界，而不一定存在等于 x 的元素。  python def lower_bound(a, x): lo, hi = 0, len(a) while lo < hi: mid = lo + (hi - lo) // 2 if a[mid] < x: lo = mid + 1 else: hi = mid return lo   在 [1,3,3,7] 找 3：区间 [0,4) → [0,2) → [0,1) → [1,1) ，结果 1。找 9 返回 4；找空数组返回 0。只有下标在范围内且值相等才能认定查找成功。时间 O(log(n+1))，空间 O(1)。 "
      },
      {
        "title": "两个有序数组的中位数",
        "anchor": "两个有序数组的中位数",
        "level": 2,
        "text": "  在较短数组 A 二分切割 i，由 j=(m+n+1)//2-i 推出 B 的切割。左半总数固定，交叉满足 Aleft <= Bright 和 Bleft <= Aright 即可。若 Aleft 过大向左移，若 Bleft 过大向右移。空侧用无穷边界；两数组都空时拒绝输入，偶数平均前在 Java 中转 long 或 double，避免相加溢出。复杂度 O(log(min(m,n)+1))，不需要把全部数据合并。 "
      },
      {
        "title": "开发场景：有序数据怎样省工作",
        "anchor": "开发场景有序数据怎样省工作",
        "level": 2,
        "text": "  行列分别递增的价格矩阵从右上角搜索：当前值大于目标，整列下方更大，左移；小于目标，当前行左边更小，下移。最多 O(m+n) 步。不能把它直接当一维有序数组；最后一列不一定小于下一行第一列。  三数之和先排序、固定一个下标，再让左右指针夹逼：和过小只需增大左值，和过大只需减小右值。固定值以及命中后的左右值都去重，三处规则解决的是不同重复来源；总计 O(n²)，排序辅助空间按语言实现计算。  单次买卖股票只需保留历史最低买价：先用今天价格计算利润，再更新最低价，保证时间方向。历史完整序列被一个充分统计量替代。空输入返回 0；不能用“全局最大减全局最小”忽略日期顺序。 "
      },
      {
        "title": "适度拓展与自测边界",
        "anchor": "适度拓展与自测边界",
        "level": 2,
        "text": "  二分也可搜索单调可行性，但必须先证明“某个阈值可行后，更大的阈值仍可行”等单调关系。 bisect 查找是对数时间，而 Python 列表中间插入仍需线性搬移；不要把查找加插入整体写成 O(log n)。检查重复值、全部相等、空数组、目标落在两端之外。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python bisect：插入边界与查找成本 - Python 排序指南 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：半开二分区间的不变量和终止条件是什么？ 2. 基础理解：时间复杂度相同的两个实现为什么仍可能表现差很多？ 3. 实际应用：行列分别有序的矩阵为什么不能总是展平后二分？ 4. 实际应用：三数之和的三处去重分别避免什么重复？ 5. 深入追问：两个有序数组中位数为什么只需要在较短数组上二分？"
      }
    ],
    "questions": [
      {
        "id": "a86bc0a8f550b55b",
        "text": "基础理解：半开二分区间的不变量和终止条件是什么？"
      },
      {
        "id": "f74a98ae66b2df5f",
        "text": "基础理解：时间复杂度相同的两个实现为什么仍可能表现差很多？"
      },
      {
        "id": "c804061097376259",
        "text": "实际应用：行列分别有序的矩阵为什么不能总是展平后二分？"
      },
      {
        "id": "c58a509c315fdf01",
        "text": "实际应用：三数之和的三处去重分别避免什么重复？"
      },
      {
        "id": "99cd96e9974672ae",
        "text": "深入追问：两个有序数组中位数为什么只需要在较短数组上二分？"
      }
    ],
    "searchText": "用不变量理解复杂度、二分与双指针 从正确的暴力法出发 算法优化不是换一个更复杂的数据结构，而是消除重复工作。对十万条订单逐条比较需要约百亿次比较；排序后扫描约为 n log n，但“某个复杂度一定能过”只是经验，还受常数、语言、总数据量与时限影响。分析空间时分别记录输入、输出和辅助空间；python 切片会复制列表，不能把 prices[1:] 视为零成本。 不变量是循环开始与结束都成立的条件。例如寻找第一个大于等于 x 的位置时，维护半开区间 [lo, hi) ：左侧已知小于 x，右侧已知大于等于 x，答案只在中间。结束时 lo==hi 就是插入边界，而不一定存在等于 x 的元素。 python def lower_bound(a, x): lo, hi = 0, len(a) while lo < hi: mid = lo + (hi - lo) // 2 if a[mid] < x: lo = mid + 1 else: hi = mid return lo 在 [1,3,3,7] 找 3：区间 0,4) → [0,2) → [0,1) → [1,1) ，结果 1。找 9 返回 4；找空数组返回 0。只有下标在范围内且值相等才能认定查找成功。时间 o(log(n+1))，空间 o(1)。 两个有序数组的中位数 在较短数组 a 二分切割 i，由 j=(m+n+1)//2-i 推出 b 的切割。左半总数固定，交叉满足 aleft <= bright 和 bleft <= aright 即可。若 aleft 过大向左移，若 bleft 过大向右移。空侧用无穷边界；两数组都空时拒绝输入，偶数平均前在 java 中转 long 或 double，避免相加溢出。复杂度 o(log(min(m,n)+1))，不需要把全部数据合并。 开发场景：有序数据怎样省工作 行列分别递增的价格矩阵从右上角搜索：当前值大于目标，整列下方更大，左移；小于目标，当前行左边更小，下移。最多 o(m+n) 步。不能把它直接当一维有序数组；最后一列不一定小于下一行第一列。 三数之和先排序、固定一个下标，再让左右指针夹逼：和过小只需增大左值，和过大只需减小右值。固定值以及命中后的左右值都去重，三处规则解决的是不同重复来源；总计 o(n²)，排序辅助空间按语言实现计算。 单次买卖股票只需保留历史最低买价：先用今天价格计算利润，再更新最低价，保证时间方向。历史完整序列被一个充分统计量替代。空输入返回 0；不能用“全局最大减全局最小”忽略日期顺序。 适度拓展与自测边界 二分也可搜索单调可行性，但必须先证明“某个阈值可行后，更大的阈值仍可行”等单调关系。 bisect 查找是对数时间，而 python 列表中间插入仍需线性搬移；不要把查找加插入整体写成 o(log n)。检查重复值、全部相等、空数组、目标落在两端之外。 参考资料 - [python bisect：插入边界与查找成本 - python 排序指南 模拟面试问题 1. 基础理解：半开二分区间的不变量和终止条件是什么？ 2. 基础理解：时间复杂度相同的两个实现为什么仍可能表现差很多？ 3. 实际应用：行列分别有序的矩阵为什么不能总是展平后二分？ 4. 实际应用：三数之和的三处去重分别避免什么重复？ 5. 深入追问：两个有序数组中位数为什么只需要在较短数组上二分？"
  },
  {
    "id": "algo-merge-radix",
    "version": "2a75c2e381e8",
    "md": "learning/courses/algorithms/merge-radix.md",
    "title": "归并与基数排序：稳定性是一条约束",
    "description": "比较排序与按位排序的前提、推演及真实工程取舍。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "稳定性究竟保持什么",
        "anchor": "稳定性究竟保持什么",
        "level": 2,
        "text": "  相同排序键的记录，排序后相对顺序不变，称为稳定。按提交时间排好的订单再稳定地按用户分组，同一个用户的订单仍保持时间顺序。键是完整记录的一部分，只排序整数常常观察不出稳定性。  归并将数组拆成互不重叠的半开区间，再合并两个有序段。辅助数组避免写回时覆盖未比较的数据；两边值相同时优先取左边，才能保持原来的相对次序。普通数组归并用 O(n) 辅助空间，递归深度 O(log n)，总时间 O(n log n)。链表归并或复杂原地归并是不同实现，不能因此说所有 merge 都必须申请同样的数组。  python def merge_sort(a): if len(a) <= 1: return a[:] m = len(a) // 2 left, right = merge_sort(a[:m]), merge_sort(a[m:]) out = []; i = j = 0 while i < len(left) and j < len(right): if left[i] <= right[j]: out.append(left[i]); i += 1 else: out.append(right[j]); j += 1 out.extend(left[i:]); out.extend(right[j:]) return out   这是便于验证的教学实现；切片和临时列表会增加常数和分配次数。高频排序优先用标准库，手写用于理解与特殊定制。 "
      },
      {
        "title": "按位排序为何需要上一轮的成果",
        "anchor": "按位排序为何需要上一轮的成果",
        "level": 2,
        "text": "  LSD 基数排序从低位到高位，每一轮稳定地按当前位分桶。例 [21,12,11] ：个位稳定排序得到 [21,11,12] ，十位得到 [11,12,21] 。十位相同的 11、12 必须保留上一轮个位顺序。  使用累计桶终点的写法时，从输入末尾向前放置并递减桶终点才能稳定。另一种正确写法是计算各桶起点后从前向后放置并递增起点；因此“基数排序必须倒序遍历输入”过于绝对，必须连同桶下标含义一起说。  LSD 不是唯一基数排序；MSD 从高位递归划分桶，同样可以正确。复杂度为 O(d(n+b))，d 是位数，b 是基数；它突破比较排序下界是因为使用关键字结构，并未违反下界的前提。 "
      },
      {
        "title": "实际开发：批量日志的排序选择",
        "anchor": "实际开发批量日志的排序选择",
        "level": 2,
        "text": "  多个文件各自按时间有序，可以分块排序后再多路归并，控制内存峰值。固定宽度非负事件编号可考虑按字节基数排序，但编号含负数时不能直接用原十进制取位模板；偏移可能在固定宽度整数溢出。处理有符号位的专门实现要说明其位表示和大小顺序。  不要把“归并最坏不退化”推成“所有场景最快”。对象比较成本、缓存、数据接近有序与库实现均影响性能。归并中若顺便数逆序对，在右值小于左值时加上左边尚未取出的数量；相等不算严格逆序。 "
      },
      {
        "title": "边界与修订",
        "anchor": "边界与修订",
        "level": 2,
        "text": "  递归终止使用长度小于等于 1，包含空数组，不能只判断 l==r 却允许空闭区间进入。按位循环还要防止 offset 乘基数溢出；全零数组与重复键可检查稳定性。Python 的中点计算不会发生 Java int 式溢出，不必将固定宽度风险照搬。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Princeton Algorithms 作者的 Merge 实现 - Princeton Algorithms 作者的 LSD 实现 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：稳定性描述的是值相等还是记录相对位置？ 2. 实际应用：归并相等时先取右边会怎样影响订单排序？ 3. 实际应用：累计桶终点和桶起点两种写法应如何选择遍历方向？ 4. 深入追问：MSD 与 LSD 为什么都可以得到正确结果？ 5. 深入追问：基数排序为何没有违反比较排序下界？"
      }
    ],
    "questions": [
      {
        "id": "be2b6abecbae3103",
        "text": "基础理解：稳定性描述的是值相等还是记录相对位置？"
      },
      {
        "id": "5210d35056f1ec02",
        "text": "实际应用：归并相等时先取右边会怎样影响订单排序？"
      },
      {
        "id": "6575ebce6e7af012",
        "text": "实际应用：累计桶终点和桶起点两种写法应如何选择遍历方向？"
      },
      {
        "id": "4cd1f12f4b0fe502",
        "text": "深入追问：MSD 与 LSD 为什么都可以得到正确结果？"
      },
      {
        "id": "a34456167ff81518",
        "text": "深入追问：基数排序为何没有违反比较排序下界？"
      }
    ],
    "searchText": "归并与基数排序：稳定性是一条约束 稳定性究竟保持什么 相同排序键的记录，排序后相对顺序不变，称为稳定。按提交时间排好的订单再稳定地按用户分组，同一个用户的订单仍保持时间顺序。键是完整记录的一部分，只排序整数常常观察不出稳定性。 归并将数组拆成互不重叠的半开区间，再合并两个有序段。辅助数组避免写回时覆盖未比较的数据；两边值相同时优先取左边，才能保持原来的相对次序。普通数组归并用 o(n) 辅助空间，递归深度 o(log n)，总时间 o(n log n)。链表归并或复杂原地归并是不同实现，不能因此说所有 merge 都必须申请同样的数组。 python def merge_sort(a): if len(a) <= 1: return a[:] m = len(a) // 2 left, right = merge_sort(a[:m]), merge_sort(a[m:]) out = []; i = j = 0 while i < len(left) and j < len(right): if left[i] <= right[j]: out.append(left[i]); i += 1 else: out.append(right[j]); j += 1 out.extend(left[i:]); out.extend(right[j:]) return out 这是便于验证的教学实现；切片和临时列表会增加常数和分配次数。高频排序优先用标准库，手写用于理解与特殊定制。 按位排序为何需要上一轮的成果 lsd 基数排序从低位到高位，每一轮稳定地按当前位分桶。例 [21,12,11] ：个位稳定排序得到 [21,11,12] ，十位得到 [11,12,21] 。十位相同的 11、12 必须保留上一轮个位顺序。 使用累计桶终点的写法时，从输入末尾向前放置并递减桶终点才能稳定。另一种正确写法是计算各桶起点后从前向后放置并递增起点；因此“基数排序必须倒序遍历输入”过于绝对，必须连同桶下标含义一起说。 lsd 不是唯一基数排序；msd 从高位递归划分桶，同样可以正确。复杂度为 o(d(n+b))，d 是位数，b 是基数；它突破比较排序下界是因为使用关键字结构，并未违反下界的前提。 实际开发：批量日志的排序选择 多个文件各自按时间有序，可以分块排序后再多路归并，控制内存峰值。固定宽度非负事件编号可考虑按字节基数排序，但编号含负数时不能直接用原十进制取位模板；偏移可能在固定宽度整数溢出。处理有符号位的专门实现要说明其位表示和大小顺序。 不要把“归并最坏不退化”推成“所有场景最快”。对象比较成本、缓存、数据接近有序与库实现均影响性能。归并中若顺便数逆序对，在右值小于左值时加上左边尚未取出的数量；相等不算严格逆序。 边界与修订 递归终止使用长度小于等于 1，包含空数组，不能只判断 l==r 却允许空闭区间进入。按位循环还要防止 offset 乘基数溢出；全零数组与重复键可检查稳定性。python 的中点计算不会发生 java int 式溢出，不必将固定宽度风险照搬。 参考资料 - princeton algorithms 作者的 merge 实现 - princeton algorithms 作者的 lsd 实现 模拟面试问题 1. 基础理解：稳定性描述的是值相等还是记录相对位置？ 2. 实际应用：归并相等时先取右边会怎样影响订单排序？ 3. 实际应用：累计桶终点和桶起点两种写法应如何选择遍历方向？ 4. 深入追问：msd 与 lsd 为什么都可以得到正确结果？ 5. 深入追问：基数排序为何没有违反比较排序下界？"
  },
  {
    "id": "algo-heap-streams",
    "version": "1eb7d0df9b16",
    "md": "learning/courses/algorithms/heap-streams.md",
    "title": "堆、Top K 与多路有序流",
    "description": "区分建堆、排序方向与只保留当前候选的流式归并。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 3,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "堆提供局部顺序",
        "anchor": "堆提供局部顺序",
        "level": 2,
        "text": "  小顶堆保证父节点不大于孩子，因而堆顶最小，但兄弟和其他位置不必有序。零基数组中孩子是 2 i+1 、 2 i+2 ，父下标仅在 i 0 时为 (i-1)//2 。新节点从尾部上浮；弹出堆顶先用尾元素替代，再下沉，与较小孩子交换。  逐个插入 O(n log n)，自底向上下沉建堆 O(n)：高度很高的节点少，所有节点可下沉高度之和是线性的。单次 push/pop O(log n)，peek O(1)。遍历 PriorityQueue 得不到完整排序，要重复 poll 才能按优先级消费。 "
      },
      {
        "title": "两种升序输出为什么使用相反的堆",
        "anchor": "两种升序输出为什么使用相反的堆",
        "level": 2,
        "text": "  把堆顶逐次弹到新数组，升序用小顶堆，最小的先输出。原地堆排序把堆顶换到有效区域尾部，升序应使用大顶堆，最大的先放到最终位置。后者 O(n log n) 时间、迭代下沉 O(1) 辅助空间，通常不稳定；用递归下沉则还需计入调用栈。  原稿保留的 C++ 修复有价值：自由模板函数应在调用可见的位置声明；原地升序不能把选择大顶堆的布尔参数取反。描述修复时区分语言查找规则和排序逻辑，不能单凭输出方向猜编译是否成功。 "
      },
      {
        "title": "开发例子：合并多机日志",
        "anchor": "开发例子合并多机日志",
        "level": 2,
        "text": "  三台服务器分别产生有序时间流 [1,8] 、 [2,4] 、 [3,6] 。先把三个头 1、2、3 入堆；弹出 1 后只补入该流后继 8。之后依次得到 2、3、4、6、8。任何流未消费部分的最小值总在它自己的头部，因此堆最多放 K 个候选即可。  python from heapq import heappush, heappop  def merge_streams(streams): heap = [] for sid, stream in enumerate(streams): it = iter(stream) first = next(it, None) if first is not None: heappush(heap, (first, sid, it)) while heap: value, sid, it = heappop(heap) yield value nxt = next(it, None) if nxt is not None: heappush(heap, (nxt, sid, it))   示例流只含数值，None 用作结束标记。sid 用来在值相等时比较，避免比较不可排序的迭代器。总 N 个元素，O(N log(K+1)) 时间、O(K) 状态；调用方若收集所有输出仍需 O(N) 输出空间。 "
      },
      {
        "title": "Top K 与优先级更新",
        "anchor": "top-k-与优先级更新",
        "level": 2,
        "text": "  保留最大的 K 项，用容量 K 的小顶堆：堆顶是当前入选者中最弱的，新的更大项才替换它。全部取出后仍要排序才是降序列表。K 为 0 时直接返回，不读堆顶。  修改已经入堆对象的优先级不会自动修复堆；可移除后重入，或使用版本号和懒删除，读取时跳过过期项。Java 比较器使用 Integer.compare ，直接相减有溢出风险。Python 3.13 可对数值取负模拟大顶堆；较新版本的最大堆 API 不能直接假设本机已有。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python heapq：堆不变量与优先队列注意事项 - Java 17 PriorityQueue "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：为什么堆顶有序不代表遍历有序？ 2. 基础理解：自底向上建堆为什么是线性时间？ 3. 实际应用：合并 K 个日志流为什么只需保留 K 个头？ 4. 实际应用：原地升序与弹出到新数组的升序分别使用什么堆？ 5. 深入追问：如何处理入堆后优先级变化及过期元素？"
      }
    ],
    "questions": [
      {
        "id": "7f329e76a6bb4a03",
        "text": "基础理解：为什么堆顶有序不代表遍历有序？"
      },
      {
        "id": "4aa0de7dd18b0d7a",
        "text": "基础理解：自底向上建堆为什么是线性时间？"
      },
      {
        "id": "4a20d82a92c8d53d",
        "text": "实际应用：合并 K 个日志流为什么只需保留 K 个头？"
      },
      {
        "id": "3f7d4093ab26ec4e",
        "text": "实际应用：原地升序与弹出到新数组的升序分别使用什么堆？"
      },
      {
        "id": "3dc330c568d55983",
        "text": "深入追问：如何处理入堆后优先级变化及过期元素？"
      }
    ],
    "searchText": "堆、top k 与多路有序流 堆提供局部顺序 小顶堆保证父节点不大于孩子，因而堆顶最小，但兄弟和其他位置不必有序。零基数组中孩子是 2 i+1 、 2 i+2 ，父下标仅在 i 0 时为 (i-1)//2 。新节点从尾部上浮；弹出堆顶先用尾元素替代，再下沉，与较小孩子交换。 逐个插入 o(n log n)，自底向上下沉建堆 o(n)：高度很高的节点少，所有节点可下沉高度之和是线性的。单次 push/pop o(log n)，peek o(1)。遍历 priorityqueue 得不到完整排序，要重复 poll 才能按优先级消费。 两种升序输出为什么使用相反的堆 把堆顶逐次弹到新数组，升序用小顶堆，最小的先输出。原地堆排序把堆顶换到有效区域尾部，升序应使用大顶堆，最大的先放到最终位置。后者 o(n log n) 时间、迭代下沉 o(1) 辅助空间，通常不稳定；用递归下沉则还需计入调用栈。 原稿保留的 c++ 修复有价值：自由模板函数应在调用可见的位置声明；原地升序不能把选择大顶堆的布尔参数取反。描述修复时区分语言查找规则和排序逻辑，不能单凭输出方向猜编译是否成功。 开发例子：合并多机日志 三台服务器分别产生有序时间流 [1,8] 、 [2,4] 、 [3,6] 。先把三个头 1、2、3 入堆；弹出 1 后只补入该流后继 8。之后依次得到 2、3、4、6、8。任何流未消费部分的最小值总在它自己的头部，因此堆最多放 k 个候选即可。 python from heapq import heappush, heappop def merge_streams(streams): heap = [] for sid, stream in enumerate(streams): it = iter(stream) first = next(it, none) if first is not none: heappush(heap, (first, sid, it)) while heap: value, sid, it = heappop(heap) yield value nxt = next(it, none) if nxt is not none: heappush(heap, (nxt, sid, it)) 示例流只含数值，none 用作结束标记。sid 用来在值相等时比较，避免比较不可排序的迭代器。总 n 个元素，o(n log(k+1)) 时间、o(k) 状态；调用方若收集所有输出仍需 o(n) 输出空间。 top k 与优先级更新 保留最大的 k 项，用容量 k 的小顶堆：堆顶是当前入选者中最弱的，新的更大项才替换它。全部取出后仍要排序才是降序列表。k 为 0 时直接返回，不读堆顶。 修改已经入堆对象的优先级不会自动修复堆；可移除后重入，或使用版本号和懒删除，读取时跳过过期项。java 比较器使用 integer.compare ，直接相减有溢出风险。python 3.13 可对数值取负模拟大顶堆；较新版本的最大堆 api 不能直接假设本机已有。 参考资料 - python heapq：堆不变量与优先队列注意事项 - java 17 priorityqueue 模拟面试问题 1. 基础理解：为什么堆顶有序不代表遍历有序？ 2. 基础理解：自底向上建堆为什么是线性时间？ 3. 实际应用：合并 k 个日志流为什么只需保留 k 个头？ 4. 实际应用：原地升序与弹出到新数组的升序分别使用什么堆？ 5. 深入追问：如何处理入堆后优先级变化及过期元素？"
  },
  {
    "id": "algo-linked-list-lru",
    "version": "10cfefbe00ad",
    "md": "learning/courses/algorithms/linked-list-lru.md",
    "title": "链表的边界、原地恢复与 LRU",
    "description": "通过指针角色理解反转、分组、回文和缓存淘汰。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 4,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "每次改边之前先保留入口",
        "anchor": "每次改边之前先保留入口",
        "level": 2,
        "text": "  单链表不能随机向前找前驱。头节点可能变化时使用 dummy；改 cur.next 前保存旧后继；按组操作先确认整组存在，再反转，最后接回前后两段。变量名 pre 不自带含义，必须说清它是“当前前驱”还是“已反转段的新头”。  java ListNode reverse(ListNode head) { ListNode prev = null, cur = head; while (cur != null) { ListNode next = cur.next; cur.next = prev; prev = cur; cur = next; } return prev; }   不变量：prev 是已反转前缀，cur 是未处理后缀入口。空链表直接返回 null。时间 O(n)，额外空间 O(1)；递归反转不能声称 O(1) 空间。 "
      },
      {
        "title": "删除、加法与分组",
        "anchor": "删除加法与分组",
        "level": 2,
        "text": "  删除倒数 n 个节点，fast/slow 都从 dummy 开始，fast 先走 n 步，再同步移动直到 fast.next==null，slow 停在待删除节点前。此模板依赖 1<=n<=长度；一般业务方法应拒绝不合法参数。也可领先 n+1 步并让 fast==null 停止，步数与终止条件必须成对出现。  两数相加的链表若按个位优先存储，直接顺序加即可，循环条件包含两条链未结束或 carry 非零；短链空位视作 0。比如 9→9 与 1 相加得到 0→0→1，不要转换成固定宽度整数再运算。  K 组反转把待处理段写成 pre → [K节点] → nextGroup 。保存旧头（即新尾），用 nextGroup 作为局部反转初始 prev；完成后 pre.next 接新头，pre 移到旧头。不足 K 个保留原样，K<=0 拒绝。两两交换就是 K=2 的特例。 "
      },
      {
        "title": "回文判断需要恢复输入",
        "anchor": "回文判断需要恢复输入",
        "level": 2,
        "text": "  快慢指针找到前半段末尾，反转后半段，比较，再将后半段反转回来接回。不应在首次不同处直接 return，必须统一恢复。奇数中点无需参与比较；比较次数以右半段长度为准。 1→2→3→2→1 比较的是 1/1、2/2。  这是 O(n) 时间、O(1) 辅助空间，但会在函数执行期间暂时修改输入。若多个线程共享链表，恢复之后也不能抹去期间的竞态，需要互斥或使用复制方案。原稿“从中点直接反转也行”的方案须明确较长半段也会比较中心自身，不能与“比较较短后半段”的解释混用。 "
      },
      {
        "title": "LRU：把查找与顺序交给不同结构",
        "anchor": "lru把查找与顺序交给不同结构",
        "level": 2,
        "text": "  后台商品详情缓存需要按键 O(1) 平均查找，也要快速移动“最近访问”位置。哈希表定位节点，双向链表维护顺序：get 命中移到头；put 已存在更新并移头，新增后超容量从尾淘汰，并同时从 map 删除。  用头尾哨兵统一插入删除，封装 remove(node) 和 addFirst(node) ；删除必须同时修正前后两侧指针。容量为 0 时不能误删哨兵。哈希操作平均常数，节点移动常数；总体空间 O(capacity)。  进程内 LRU 不等于分布式缓存，未包含过期时间、内存字节上限、缓存击穿与并发一致性。Java 17 的 LinkedHashMap 可按访问顺序维护，但线程安全仍需另行设计。面试练习手写结构，工程优先评估成熟缓存实现。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Java 17 LinkedHashMap：访问顺序和淘汰钩子 - Python collections：deque 与有序容器 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：反转链表时 prev、cur、next 各自保存什么？ 2. 实际应用：K 组反转后 pre 为什么移到旧头而非新头？ 3. 实际应用：回文判断提前失败时怎样保证输入恢复？ 4. 实际应用：LRU 淘汰为什么必须同步修改哈希表与链表？ 5. 深入追问：原地修改后恢复为何不能天然保证并发安全？"
      }
    ],
    "questions": [
      {
        "id": "af5c8c6af23a22ac",
        "text": "基础理解：反转链表时 prev、cur、next 各自保存什么？"
      },
      {
        "id": "d33800aca5e62503",
        "text": "实际应用：K 组反转后 pre 为什么移到旧头而非新头？"
      },
      {
        "id": "d7b732ef94b66129",
        "text": "实际应用：回文判断提前失败时怎样保证输入恢复？"
      },
      {
        "id": "aa4d78bda63794bc",
        "text": "实际应用：LRU 淘汰为什么必须同步修改哈希表与链表？"
      },
      {
        "id": "1d31f091bb2b2f0d",
        "text": "深入追问：原地修改后恢复为何不能天然保证并发安全？"
      }
    ],
    "searchText": "链表的边界、原地恢复与 lru 每次改边之前先保留入口 单链表不能随机向前找前驱。头节点可能变化时使用 dummy；改 cur.next 前保存旧后继；按组操作先确认整组存在，再反转，最后接回前后两段。变量名 pre 不自带含义，必须说清它是“当前前驱”还是“已反转段的新头”。 java listnode reverse(listnode head) { listnode prev = null, cur = head; while (cur != null) { listnode next = cur.next; cur.next = prev; prev = cur; cur = next; } return prev; } 不变量：prev 是已反转前缀，cur 是未处理后缀入口。空链表直接返回 null。时间 o(n)，额外空间 o(1)；递归反转不能声称 o(1) 空间。 删除、加法与分组 删除倒数 n 个节点，fast/slow 都从 dummy 开始，fast 先走 n 步，再同步移动直到 fast.next==null，slow 停在待删除节点前。此模板依赖 1<=n<=长度；一般业务方法应拒绝不合法参数。也可领先 n+1 步并让 fast==null 停止，步数与终止条件必须成对出现。 两数相加的链表若按个位优先存储，直接顺序加即可，循环条件包含两条链未结束或 carry 非零；短链空位视作 0。比如 9→9 与 1 相加得到 0→0→1，不要转换成固定宽度整数再运算。 k 组反转把待处理段写成 pre → [k节点] → nextgroup 。保存旧头（即新尾），用 nextgroup 作为局部反转初始 prev；完成后 pre.next 接新头，pre 移到旧头。不足 k 个保留原样，k<=0 拒绝。两两交换就是 k=2 的特例。 回文判断需要恢复输入 快慢指针找到前半段末尾，反转后半段，比较，再将后半段反转回来接回。不应在首次不同处直接 return，必须统一恢复。奇数中点无需参与比较；比较次数以右半段长度为准。 1→2→3→2→1 比较的是 1/1、2/2。 这是 o(n) 时间、o(1) 辅助空间，但会在函数执行期间暂时修改输入。若多个线程共享链表，恢复之后也不能抹去期间的竞态，需要互斥或使用复制方案。原稿“从中点直接反转也行”的方案须明确较长半段也会比较中心自身，不能与“比较较短后半段”的解释混用。 lru：把查找与顺序交给不同结构 后台商品详情缓存需要按键 o(1) 平均查找，也要快速移动“最近访问”位置。哈希表定位节点，双向链表维护顺序：get 命中移到头；put 已存在更新并移头，新增后超容量从尾淘汰，并同时从 map 删除。 用头尾哨兵统一插入删除，封装 remove(node) 和 addfirst(node) ；删除必须同时修正前后两侧指针。容量为 0 时不能误删哨兵。哈希操作平均常数，节点移动常数；总体空间 o(capacity)。 进程内 lru 不等于分布式缓存，未包含过期时间、内存字节上限、缓存击穿与并发一致性。java 17 的 linkedhashmap 可按访问顺序维护，但线程安全仍需另行设计。面试练习手写结构，工程优先评估成熟缓存实现。 参考资料 - java 17 linkedhashmap：访问顺序和淘汰钩子 - python collections：deque 与有序容器 模拟面试问题 1. 基础理解：反转链表时 prev、cur、next 各自保存什么？ 2. 实际应用：k 组反转后 pre 为什么移到旧头而非新头？ 3. 实际应用：回文判断提前失败时怎样保证输入恢复？ 4. 实际应用：lru 淘汰为什么必须同步修改哈希表与链表？ 5. 深入追问：原地修改后恢复为何不能天然保证并发安全？"
  },
  {
    "id": "algo-tree-contracts",
    "version": "408acf70e528",
    "md": "learning/courses/algorithms/tree-contracts.md",
    "title": "树形 DFS：返回契约、路径与回溯",
    "description": "区分向上传递的单支贡献、全局答案和当前路径状态。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 5,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 5,
    "outline": [
      {
        "title": "先定义返回值，再选择遍历顺序",
        "anchor": "先定义返回值再选择遍历顺序",
        "level": 2,
        "text": "  DFS 不是某一套代码，而是函数契约。高度依赖左右子树结果，用后序；BST 大小约束由祖先传下来，用参数；路径频次随当前调用栈变化，用回溯。每一层 return 只结束当前调用，需要把答案显式向上传递。  二叉树直径（按边数）可令空树高度为 0，当前高度为 1+max(left,right) ，经过当前点的直径为 left+right。最大路径和也类似，但节点值可为负，返回给父亲只能带一条分支，全局候选可以接左右两条。  python def max_path_sum(root): if root is None: raise ValueError('路径要求至少一个节点') answer = float('-inf') def dfs(node): nonlocal answer if node is None: return 0 left = max(0, dfs(node.left)) right = max(0, dfs(node.right)) answer = max(answer, node.val + left + right) return node.val + max(left, right) dfs(root) return answer   树 -10(9,20(15,7)) 中答案为 15+20+7=42，但 20 子树向父亲只能返回 35。全负树必须保留至少一个负节点，answer 初始为负无穷。每点处理一次 O(n)，栈 O(h)。 "
      },
      {
        "title": "BST 是祖先约束，不是相邻比较",
        "anchor": "bst-是祖先约束不是相邻比较",
        "level": 2,
        "text": "  验证严格 BST 时传开区间 (low,high) ，左子树上界缩成当前值，右子树下界变当前值。根 10 的右孩子 15，其左孩子 6 虽小于 15，却违背根的约束。中序严格递增是等价验证方式；允许重复键的树需要先定义重复放置规则。  迭代中序用栈保存尚待返回的祖先，pop 时才访问节点。查第 k 小可提前终止，O(h+k) 时间、O(h) 栈。平衡树才能保证 h=O(log n)。有序数组建平衡 BST，区间递归必须排除中点，且将返回的子树接到左右指针，构建时间 O(n)。 "
      },
      {
        "title": "当前路径上的前缀和",
        "anchor": "当前路径上的前缀和",
        "level": 2,
        "text": "  向下路径和等于 target，有 cur-prefix=target ，查的是 cur-target 。频次表只包含当前根到节点路径上的历史前缀，先查再加入当前值，退出子树时撤销；空前缀初始化为 1。  python freq = {0: 1} def count_paths(node, cur, target): if node is None: return 0 cur += node.val count = freq.get(cur - target, 0) freq[cur] = freq.get(cur, 0) + 1 count += count_paths(node.left, cur, target) count += count_paths(node.right, cur, target) freq[cur] -= 1 if freq[cur] == 0: del freq[cur] return count   调用前为每棵新树重新创建 freq。删除零频键且用 get 查询，表大小才随当前路径控制在 O(h)；原稿 defaultdict 查询和只减不删可能累积 O(n) 个零值键。算法平均 O(n) 时间；哈希复杂度是平均假设。固定宽度语言前缀和用足够宽的整数，不能覆盖 node.val。 "
      },
      {
        "title": "最近公共祖先与结构修改",
        "anchor": "最近公共祖先与结构修改",
        "level": 2,
        "text": "  LCA 简洁递归：命中 p/q 返回该节点，左右同时命中返回当前节点，否则返回非空一侧。它依赖两个目标确实存在；一般接口须额外验证存在性。比较节点身份，不能只比较可能重复的值。  展开树为先序链时，先保存原右子树入口，明确“已处理节点 left 为空，right 链符合先序”的不变量。开发中的组织树、目录树也可能很深；业务数据常是图或含环，不能直接把二叉树递归模板套到任意关联表。退化树用显式栈，避免只增大 Python 递归上限。 "
      },
      {
        "title": "翻转与镜像不是同一个问题",
        "anchor": "翻转与镜像不是同一个问题",
        "level": 2,
        "text": "  翻转树可先递归处理两侧再交换 left/right；返回原节点作为新子树根，空节点才返回 None，不能把叶子直接丢弃。对称检查则成对传节点 a/b：值相等，且 a.left 与 b.right、a.right 与 b.left 分别镜像；两侧同时空为真，仅一侧空为假。根值相同或左右各自有序都不足以推出镜像。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python 语言参考：nonlocal - Python sys：递归限制与风险 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：最大路径和为什么返回单支、更新答案却可连接双支？ 2. 实际应用：只比较 BST 的直接孩子会漏掉什么错误？ 3. 实际应用：树路径前缀和为什么必须回溯并先查询后插入？ 4. 深入追问：只减频次不删除零键时，空间复杂度如何变化？ 5. 深入追问：目标节点不保证存在时怎样修改 LCA 接口？"
      }
    ],
    "questions": [
      {
        "id": "900d6d1f6f88e281",
        "text": "基础理解：最大路径和为什么返回单支、更新答案却可连接双支？"
      },
      {
        "id": "e503bf21f31c6f3f",
        "text": "实际应用：只比较 BST 的直接孩子会漏掉什么错误？"
      },
      {
        "id": "19a49fbe3a7218d6",
        "text": "实际应用：树路径前缀和为什么必须回溯并先查询后插入？"
      },
      {
        "id": "14f9f5fb1c54442e",
        "text": "深入追问：只减频次不删除零键时，空间复杂度如何变化？"
      },
      {
        "id": "e1e9b3026f9d9aa6",
        "text": "深入追问：目标节点不保证存在时怎样修改 LCA 接口？"
      }
    ],
    "searchText": "树形 dfs：返回契约、路径与回溯 先定义返回值，再选择遍历顺序 dfs 不是某一套代码，而是函数契约。高度依赖左右子树结果，用后序；bst 大小约束由祖先传下来，用参数；路径频次随当前调用栈变化，用回溯。每一层 return 只结束当前调用，需要把答案显式向上传递。 二叉树直径（按边数）可令空树高度为 0，当前高度为 1+max(left,right) ，经过当前点的直径为 left+right。最大路径和也类似，但节点值可为负，返回给父亲只能带一条分支，全局候选可以接左右两条。 python def max_path_sum(root): if root is none: raise valueerror('路径要求至少一个节点') answer = float('-inf') def dfs(node): nonlocal answer if node is none: return 0 left = max(0, dfs(node.left)) right = max(0, dfs(node.right)) answer = max(answer, node.val + left + right) return node.val + max(left, right) dfs(root) return answer 树 -10(9,20(15,7)) 中答案为 15+20+7=42，但 20 子树向父亲只能返回 35。全负树必须保留至少一个负节点，answer 初始为负无穷。每点处理一次 o(n)，栈 o(h)。 bst 是祖先约束，不是相邻比较 验证严格 bst 时传开区间 (low,high) ，左子树上界缩成当前值，右子树下界变当前值。根 10 的右孩子 15，其左孩子 6 虽小于 15，却违背根的约束。中序严格递增是等价验证方式；允许重复键的树需要先定义重复放置规则。 迭代中序用栈保存尚待返回的祖先，pop 时才访问节点。查第 k 小可提前终止，o(h+k) 时间、o(h) 栈。平衡树才能保证 h=o(log n)。有序数组建平衡 bst，区间递归必须排除中点，且将返回的子树接到左右指针，构建时间 o(n)。 当前路径上的前缀和 向下路径和等于 target，有 cur-prefix=target ，查的是 cur-target 。频次表只包含当前根到节点路径上的历史前缀，先查再加入当前值，退出子树时撤销；空前缀初始化为 1。 python freq = {0: 1} def count_paths(node, cur, target): if node is none: return 0 cur += node.val count = freq.get(cur - target, 0) freq[cur] = freq.get(cur, 0) + 1 count += count_paths(node.left, cur, target) count += count_paths(node.right, cur, target) freq[cur] -= 1 if freq[cur] == 0: del freq[cur] return count 调用前为每棵新树重新创建 freq。删除零频键且用 get 查询，表大小才随当前路径控制在 o(h)；原稿 defaultdict 查询和只减不删可能累积 o(n) 个零值键。算法平均 o(n) 时间；哈希复杂度是平均假设。固定宽度语言前缀和用足够宽的整数，不能覆盖 node.val。 最近公共祖先与结构修改 lca 简洁递归：命中 p/q 返回该节点，左右同时命中返回当前节点，否则返回非空一侧。它依赖两个目标确实存在；一般接口须额外验证存在性。比较节点身份，不能只比较可能重复的值。 展开树为先序链时，先保存原右子树入口，明确“已处理节点 left 为空，right 链符合先序”的不变量。开发中的组织树、目录树也可能很深；业务数据常是图或含环，不能直接把二叉树递归模板套到任意关联表。退化树用显式栈，避免只增大 python 递归上限。 翻转与镜像不是同一个问题 翻转树可先递归处理两侧再交换 left/right；返回原节点作为新子树根，空节点才返回 none，不能把叶子直接丢弃。对称检查则成对传节点 a/b：值相等，且 a.left 与 b.right、a.right 与 b.left 分别镜像；两侧同时空为真，仅一侧空为假。根值相同或左右各自有序都不足以推出镜像。 参考资料 - python 语言参考：nonlocal - python sys：递归限制与风险 模拟面试问题 1. 基础理解：最大路径和为什么返回单支、更新答案却可连接双支？ 2. 实际应用：只比较 bst 的直接孩子会漏掉什么错误？ 3. 实际应用：树路径前缀和为什么必须回溯并先查询后插入？ 4. 深入追问：只减频次不删除零键时，空间复杂度如何变化？ 5. 深入追问：目标节点不保证存在时怎样修改 lca 接口？"
  },
  {
    "id": "algo-bfs-grid",
    "version": "6320df6d4428",
    "md": "learning/courses/algorithms/bfs-grid.md",
    "title": "网格搜索与多源 BFS",
    "description": "把格子建模为图，区分全局访问状态和路径枚举状态。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 6,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "什么时候 BFS 能给出最短距离",
        "anchor": "什么时候-bfs-能给出最短距离",
        "level": 2,
        "text": "  无权图或所有边代价相同，先进先出队列使节点按距离层处理。首次发现时记录距离并入队，可保证每个节点至多入队一次。带权边长度不同，普通 BFS 不再保证最短；0/1 权可学双端队列，非负一般权转 Dijkstra。  python from collections import deque  def distances(starts, graph): dist = {} q = deque() for s in starts: if s not in dist: dist[s] = 0; q.append(s) while q: u = q.popleft() for v in graph[u]: if v not in dist: dist[v] = dist[u] + 1 q.append(v) return dist   多个起点同时赋距离 0，就是多源 BFS，不是依次让每个源跑完全图。图有 V 点 E 边，邻接表实现 O(V+E) 时间、O(V) 状态；双向无向边计入两次仍同阶。 "
      },
      {
        "title": "走一遍：多处火源的传播",
        "anchor": "走一遍多处火源的传播",
        "level": 2,
        "text": "  走廊格子 S . . . S 两端起火：距离依次为 0、1、2、1、0。第一层处理两个 S，产生两个距离 1 的格；第二层才产生中间距离 2 的格。逐个源扩散并覆盖时间，会把“最近火源到达”算错。  腐烂橘子题同理，初始腐烂格为第 0 分钟；每次只让新鲜格入队，并立刻改状态。初始无新鲜格返回 0；队列耗尽仍有新鲜格说明不可达。分层循环开始先固定本层队列长度，循环中新入队的是下一层。 "
      },
      {
        "title": "连通块不等于所有路径",
        "anchor": "连通块不等于所有路径",
        "level": 2,
        "text": "  数岛屿时扫描每个未访问陆地，答案加一，再 DFS/BFS 消耗整个连通块。四联通与八联通由题目决定；字符串 '1' 与数字 1 不能混用。空网格先返回，访问下标前判断边界；不能接受 Python 负下标意外绕到最后一行。  遍历可达节点的 visited 是全局、单调增加的，不应返回时撤销。枚举所有简单路径的 visited 表示“当前路径已出现”，必须回溯；混用会导致重复搜索或漏掉路径。 "
      },
      {
        "title": "现实开发中的对应",
        "anchor": "现实开发中的对应",
        "level": 2,
        "text": "  “找最近服务站”可在无权道路抽象上使用多源 BFS；真实道路耗时不同，需按边权改算法。“列出某服务依赖的全部服务”是可达性搜索，要防依赖环；“列出所有依赖路径”可能指数爆炸，应设置规模限制并明确产品需求。  树层序遍历的右视图，正常先左后右时取每层最后一个；DFS 则可先右后左，首次到某深度记录。两种方法都正确，但不能混搭“最后一个”和“右边优先”的解释。 "
      },
      {
        "title": "复杂度与实现边界",
        "anchor": "复杂度与实现边界",
        "level": 2,
        "text": "  R×C 网格每格最多访问一次，O(RC) 时间，队列或栈最坏 O(RC)。DFS 不总比 BFS 省空间，蛇形长路径递归同样达到 RC。队列用 deque.popleft；list.pop(0) 会搬移元素。修改输入作为访问标记能省一个数组，却改变了接口语义，复用输入时需要显式 visited。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python collections.deque - Princeton Algorithms 作者的 BreadthFirstPaths "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：BFS 为什么在等权图中首次发现就能确定最短距离？ 2. 实际应用：多源扩散为什么把所有起点放到第 0 层？ 3. 实际应用：数连通块时为什么不回溯删除 visited？ 4. 深入追问：真实道路导航为什么不能简单使用普通 BFS？ 5. 深入追问：DFS 与 BFS 的最坏空间分别由什么决定？"
      }
    ],
    "questions": [
      {
        "id": "b58c17bf08b0b2e2",
        "text": "基础理解：BFS 为什么在等权图中首次发现就能确定最短距离？"
      },
      {
        "id": "c7204a1b309c047b",
        "text": "实际应用：多源扩散为什么把所有起点放到第 0 层？"
      },
      {
        "id": "49580b3833450387",
        "text": "实际应用：数连通块时为什么不回溯删除 visited？"
      },
      {
        "id": "36f029a78c2c6f04",
        "text": "深入追问：真实道路导航为什么不能简单使用普通 BFS？"
      },
      {
        "id": "bb1e687a722b86e3",
        "text": "深入追问：DFS 与 BFS 的最坏空间分别由什么决定？"
      }
    ],
    "searchText": "网格搜索与多源 bfs 什么时候 bfs 能给出最短距离 无权图或所有边代价相同，先进先出队列使节点按距离层处理。首次发现时记录距离并入队，可保证每个节点至多入队一次。带权边长度不同，普通 bfs 不再保证最短；0/1 权可学双端队列，非负一般权转 dijkstra。 python from collections import deque def distances(starts, graph): dist = {} q = deque() for s in starts: if s not in dist: dist[s] = 0; q.append(s) while q: u = q.popleft() for v in graph[u]: if v not in dist: dist[v] = dist[u] + 1 q.append(v) return dist 多个起点同时赋距离 0，就是多源 bfs，不是依次让每个源跑完全图。图有 v 点 e 边，邻接表实现 o(v+e) 时间、o(v) 状态；双向无向边计入两次仍同阶。 走一遍：多处火源的传播 走廊格子 s . . . s 两端起火：距离依次为 0、1、2、1、0。第一层处理两个 s，产生两个距离 1 的格；第二层才产生中间距离 2 的格。逐个源扩散并覆盖时间，会把“最近火源到达”算错。 腐烂橘子题同理，初始腐烂格为第 0 分钟；每次只让新鲜格入队，并立刻改状态。初始无新鲜格返回 0；队列耗尽仍有新鲜格说明不可达。分层循环开始先固定本层队列长度，循环中新入队的是下一层。 连通块不等于所有路径 数岛屿时扫描每个未访问陆地，答案加一，再 dfs/bfs 消耗整个连通块。四联通与八联通由题目决定；字符串 '1' 与数字 1 不能混用。空网格先返回，访问下标前判断边界；不能接受 python 负下标意外绕到最后一行。 遍历可达节点的 visited 是全局、单调增加的，不应返回时撤销。枚举所有简单路径的 visited 表示“当前路径已出现”，必须回溯；混用会导致重复搜索或漏掉路径。 现实开发中的对应 “找最近服务站”可在无权道路抽象上使用多源 bfs；真实道路耗时不同，需按边权改算法。“列出某服务依赖的全部服务”是可达性搜索，要防依赖环；“列出所有依赖路径”可能指数爆炸，应设置规模限制并明确产品需求。 树层序遍历的右视图，正常先左后右时取每层最后一个；dfs 则可先右后左，首次到某深度记录。两种方法都正确，但不能混搭“最后一个”和“右边优先”的解释。 复杂度与实现边界 r×c 网格每格最多访问一次，o(rc) 时间，队列或栈最坏 o(rc)。dfs 不总比 bfs 省空间，蛇形长路径递归同样达到 rc。队列用 deque.popleft；list.pop(0) 会搬移元素。修改输入作为访问标记能省一个数组，却改变了接口语义，复用输入时需要显式 visited。 参考资料 - python collections.deque - princeton algorithms 作者的 breadthfirstpaths 模拟面试问题 1. 基础理解：bfs 为什么在等权图中首次发现就能确定最短距离？ 2. 实际应用：多源扩散为什么把所有起点放到第 0 层？ 3. 实际应用：数连通块时为什么不回溯删除 visited？ 4. 深入追问：真实道路导航为什么不能简单使用普通 bfs？ 5. 深入追问：dfs 与 bfs 的最坏空间分别由什么决定？"
  },
  {
    "id": "algo-disjoint-sets",
    "version": "f60f31446236",
    "md": "learning/courses/algorithms/disjoint-sets.md",
    "title": "并查集与动态连通性",
    "description": "根代表集合，只有真正合并两个集合时才能减少连通块数。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 7,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "操作语义先于实现",
        "anchor": "操作语义先于实现",
        "level": 2,
        "text": "  并查集维护集合划分：find 返回代表元，union 合并两个集合。树边只是内部父链接，不是原图边，因此不能用 parent 路径还原原图实际道路。初始 parent[x]=x，每个有效节点自成一组。  python class DSU: def __init__(self, n): self.parent = list(range(n)); self.size = [1] n def find(self, x): while x != self.parent[x]: self.parent[x] = self.parent[self.parent[x]] x = self.parent[x] return x def union(self, a, b): ra, rb = self.find(a), self.find(b) if ra == rb: return False if self.size[ra] < self.size[rb]: ra, rb = rb, ra self.parent[rb] = ra self.size[ra] += self.size[rb] return True   路径折半压缩查找路径，按大小合并防止小树挂出深链。二者组合的操作序列具有 O(α(n)) 均摊界，不是每次绝对 O(1)；单次查找仍可能走多条边。没有按秩或大小合并时，不应直接套用同一复杂度结论。 "
      },
      {
        "title": "推演：增量岛屿",
        "anchor": "推演增量岛屿",
        "level": 2,
        "text": "  2×3 网格依次加入 (0,0),(0,1),(1,2),(1,1) 。每新增一个陆地先使 components 加一，检查上下左右已存在陆地，每次 union 成功再减一。数量变化为 1、1、2、1。最后一格同时连接两组，必须合并两次；若邻居本来同组则不减少。  二维坐标映射 id=r cols+c 。水格即使预分配了 parent 也不能当陆地计数。重复加入同一格应直接返回旧数量。静态岛屿一次性统计 DFS/BFS 通常更直观，增量连接时并查集更方便。 "
      },
      {
        "title": "开发例子与不能回答的问题",
        "anchor": "开发例子与不能回答的问题",
        "level": 2,
        "text": "  账号合并可把共享已验证邮箱的用户节点 union，最后按代表元分组；共享标识必须是业务认可的等价关系，不能仅凭相似昵称误合并。分组结果要保留原 ID，代表元可能随合并变化，不适合作为永久业务主键。  普通并查集擅长加边，不支持任意删边后自动拆分。好友关系也未必具有传递性，不能因为 A 认识 B、B 认识 C 就推断 A 与 C 是好友。它只能回答所定义无向关系下的连通性，不能直接判断有向依赖环。 "
      },
      {
        "title": "适度拓展与边界",
        "anchor": "适度拓展与边界",
        "level": 2,
        "text": "  Kruskal 中发现两端已同根，加入该无向边就会成环。带权并查集和回滚并查集解决不同扩展需求；回滚通常避开破坏历史的路径压缩。节点越界应在外层校验；递归 find 在深链首次压缩前可能爆栈，迭代可消除此类调用栈风险。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Princeton Algorithms 作者的 UF：按秩合并与路径压缩 - 加权合并的实现对照 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：union 为什么连接根而不是直接令 parent[a]=b？ 2. 实际应用：动态岛屿为什么只在合并成功时减少计数？ 3. 实际应用：并查集代表元为什么不宜当永久业务主键？ 4. 深入追问：路径压缩的均摊界和单次最坏界有何区别？ 5. 深入追问：普通并查集为什么无法直接处理删边？"
      }
    ],
    "questions": [
      {
        "id": "83f3c5f4ee38ddd7",
        "text": "基础理解：union 为什么连接根而不是直接令 parent[a]=b？"
      },
      {
        "id": "96118aef8f41e7c6",
        "text": "实际应用：动态岛屿为什么只在合并成功时减少计数？"
      },
      {
        "id": "36d593915f16fd41",
        "text": "实际应用：并查集代表元为什么不宜当永久业务主键？"
      },
      {
        "id": "a6ca931280046e52",
        "text": "深入追问：路径压缩的均摊界和单次最坏界有何区别？"
      },
      {
        "id": "b2c73860b1d13567",
        "text": "深入追问：普通并查集为什么无法直接处理删边？"
      }
    ],
    "searchText": "并查集与动态连通性 操作语义先于实现 并查集维护集合划分：find 返回代表元，union 合并两个集合。树边只是内部父链接，不是原图边，因此不能用 parent 路径还原原图实际道路。初始 parent[x]=x，每个有效节点自成一组。 python class dsu: def __init__(self, n): self.parent = list(range(n)); self.size = [1] n def find(self, x): while x != self.parent[x]: self.parent[x] = self.parent[self.parent[x]] x = self.parent[x] return x def union(self, a, b): ra, rb = self.find(a), self.find(b) if ra == rb: return false if self.size[ra] < self.size[rb]: ra, rb = rb, ra self.parent[rb] = ra self.size[ra] += self.size[rb] return true 路径折半压缩查找路径，按大小合并防止小树挂出深链。二者组合的操作序列具有 o(α(n)) 均摊界，不是每次绝对 o(1)；单次查找仍可能走多条边。没有按秩或大小合并时，不应直接套用同一复杂度结论。 推演：增量岛屿 2×3 网格依次加入 (0,0),(0,1),(1,2),(1,1) 。每新增一个陆地先使 components 加一，检查上下左右已存在陆地，每次 union 成功再减一。数量变化为 1、1、2、1。最后一格同时连接两组，必须合并两次；若邻居本来同组则不减少。 二维坐标映射 id=r cols+c 。水格即使预分配了 parent 也不能当陆地计数。重复加入同一格应直接返回旧数量。静态岛屿一次性统计 dfs/bfs 通常更直观，增量连接时并查集更方便。 开发例子与不能回答的问题 账号合并可把共享已验证邮箱的用户节点 union，最后按代表元分组；共享标识必须是业务认可的等价关系，不能仅凭相似昵称误合并。分组结果要保留原 id，代表元可能随合并变化，不适合作为永久业务主键。 普通并查集擅长加边，不支持任意删边后自动拆分。好友关系也未必具有传递性，不能因为 a 认识 b、b 认识 c 就推断 a 与 c 是好友。它只能回答所定义无向关系下的连通性，不能直接判断有向依赖环。 适度拓展与边界 kruskal 中发现两端已同根，加入该无向边就会成环。带权并查集和回滚并查集解决不同扩展需求；回滚通常避开破坏历史的路径压缩。节点越界应在外层校验；递归 find 在深链首次压缩前可能爆栈，迭代可消除此类调用栈风险。 参考资料 - princeton algorithms 作者的 uf：按秩合并与路径压缩 - 加权合并的实现对照 模拟面试问题 1. 基础理解：union 为什么连接根而不是直接令 parent[a]=b？ 2. 实际应用：动态岛屿为什么只在合并成功时减少计数？ 3. 实际应用：并查集代表元为什么不宜当永久业务主键？ 4. 深入追问：路径压缩的均摊界和单次最坏界有何区别？ 5. 深入追问：普通并查集为什么无法直接处理删边？"
  },
  {
    "id": "algo-trie-prefixes",
    "version": "962c881b86e3",
    "md": "learning/courses/algorithms/trie-prefixes.md",
    "title": "Trie：前缀、词频与内存模型",
    "description": "将前缀计数、完整单词计数与字符集边界分开设计。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 8,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "一条路径表示一个前缀",
        "anchor": "一条路径表示一个前缀",
        "level": 2,
        "text": "  Trie 将字符串公共前缀合并成路径：边是字符，根到节点的字符序列是前缀。插入 ab 与 ac 时，只有一条根到 a 的边，a 下再分 b/c。原稿示意图让 ac 从根的 c 边开始，与文字不符，在此更正。  节点通常需要 child、pass 和 end：pass 为经过这个前缀的词次数，end 为恰好结束于此的词次数。插入 app 两次与 apple 一次，前缀 app 的 pass=3，完整 app 的 end=2。这些是次数，不是去重词数，想统计不同词要另行定义。  python class Trie: def __init__(self): self.root = {'children': {}, 'pass': 0, 'end': 0} def insert(self, word): node = self.root; node['pass'] += 1 for ch in word: node = node['children'].setdefault(ch, {'children': {}, 'pass': 0, 'end': 0}) node['pass'] += 1 node['end'] += 1 def prefix_count(self, prefix): node = self.root for ch in prefix: node = node['children'].get(ch) if node is None: return 0 return node['pass']   示例定义允许空词；根 pass 因而表示所有插入次数，查询空前缀返回总次数。业务不允许空词时应入口拒绝，不要靠数据结构偶然行为决定。 "
      },
      {
        "title": "时间与空间不能只看字符串数",
        "anchor": "时间与空间不能只看字符串数",
        "level": 2,
        "text": "  固定数组孩子访问 O(1)，长度 L 的插入/查询 O(L)；用哈希孩子是平均 O(L)。节点数不超过总字符数加一，稠密数组空间 O(节点数×字符集大小)，动态字典只为存在边分配，但每个字典有对象开销。原稿 3000005×65 的 int 表，仅边表就约 780 MB（十进制），不是轻量结构。  原 C++ 清零循环第二维 65，却写到 122，构成越界；ASCII 编码值与映射后的孩子下标是两回事。映射 A-Z、a-z、0-9 时只允许 62 类输入，其他字符必须拒绝或另加映射，不能统一按数字分支处理。 "
      },
      {
        "title": "实际开发：搜索建议",
        "anchor": "实际开发搜索建议",
        "level": 2,
        "text": "  站内输入“并”希望列出“并发”“并查集”。先走到前缀节点，再遍历后代收集 end 0 的词。查到前缀本身 O(L)，返回所有建议还需访问结果子树；不能把“输出任意多条建议”也写成 O(L)。可保存每个节点的 Top K 热门建议，代价是更新与额外空间。  中文采用 Unicode 字符或 UTF-8 字节建边，语义、节点数不同。大小写、全半角与规范化应统一在索引和查询入口；不能仅对查询转小写。需要拼音、模糊匹配或相关性排序时，Trie 不是完整搜索引擎。 "
      },
      {
        "title": "适度拓展",
        "anchor": "适度拓展",
        "level": 2,
        "text": "  删除一个词要先验证 end 0，再沿路径递减 pass 和 end；否则会产生负频次。多组竞赛数据可只清理已使用节点，但应包含根并重置 idx。静态词典可考虑压缩前缀树；任意子串查找则是另一类任务，不能直接用前缀 Trie 替代。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Princeton Algorithms 作者的 TrieST - Unicode 标准规范化 UAX 15 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：pass 与 end 统计什么，重复插入如何影响它们？ 2. 实际应用：前缀匹配和返回全部建议的复杂度为什么不同？ 3. 实际应用：如何发现原稿字符表清零循环的越界问题？ 4. 深入追问：中文 Trie 按字符与按字节建边有何取舍？ 5. 深入追问：怎样安全删除一次词频而不破坏共享前缀？"
      }
    ],
    "questions": [
      {
        "id": "d03101ee3239dc58",
        "text": "基础理解：pass 与 end 统计什么，重复插入如何影响它们？"
      },
      {
        "id": "c6f43e5c91e22b0d",
        "text": "实际应用：前缀匹配和返回全部建议的复杂度为什么不同？"
      },
      {
        "id": "a29ff2ab06680360",
        "text": "实际应用：如何发现原稿字符表清零循环的越界问题？"
      },
      {
        "id": "61f73a996358121b",
        "text": "深入追问：中文 Trie 按字符与按字节建边有何取舍？"
      },
      {
        "id": "911408a05e7fbf10",
        "text": "深入追问：怎样安全删除一次词频而不破坏共享前缀？"
      }
    ],
    "searchText": "trie：前缀、词频与内存模型 一条路径表示一个前缀 trie 将字符串公共前缀合并成路径：边是字符，根到节点的字符序列是前缀。插入 ab 与 ac 时，只有一条根到 a 的边，a 下再分 b/c。原稿示意图让 ac 从根的 c 边开始，与文字不符，在此更正。 节点通常需要 child、pass 和 end：pass 为经过这个前缀的词次数，end 为恰好结束于此的词次数。插入 app 两次与 apple 一次，前缀 app 的 pass=3，完整 app 的 end=2。这些是次数，不是去重词数，想统计不同词要另行定义。 python class trie: def __init__(self): self.root = {'children': {}, 'pass': 0, 'end': 0} def insert(self, word): node = self.root; node['pass'] += 1 for ch in word: node = node['children'].setdefault(ch, {'children': {}, 'pass': 0, 'end': 0}) node['pass'] += 1 node['end'] += 1 def prefix_count(self, prefix): node = self.root for ch in prefix: node = node['children'].get(ch) if node is none: return 0 return node['pass'] 示例定义允许空词；根 pass 因而表示所有插入次数，查询空前缀返回总次数。业务不允许空词时应入口拒绝，不要靠数据结构偶然行为决定。 时间与空间不能只看字符串数 固定数组孩子访问 o(1)，长度 l 的插入/查询 o(l)；用哈希孩子是平均 o(l)。节点数不超过总字符数加一，稠密数组空间 o(节点数×字符集大小)，动态字典只为存在边分配，但每个字典有对象开销。原稿 3000005×65 的 int 表，仅边表就约 780 mb（十进制），不是轻量结构。 原 c++ 清零循环第二维 65，却写到 122，构成越界；ascii 编码值与映射后的孩子下标是两回事。映射 a-z、a-z、0-9 时只允许 62 类输入，其他字符必须拒绝或另加映射，不能统一按数字分支处理。 实际开发：搜索建议 站内输入“并”希望列出“并发”“并查集”。先走到前缀节点，再遍历后代收集 end 0 的词。查到前缀本身 o(l)，返回所有建议还需访问结果子树；不能把“输出任意多条建议”也写成 o(l)。可保存每个节点的 top k 热门建议，代价是更新与额外空间。 中文采用 unicode 字符或 utf-8 字节建边，语义、节点数不同。大小写、全半角与规范化应统一在索引和查询入口；不能仅对查询转小写。需要拼音、模糊匹配或相关性排序时，trie 不是完整搜索引擎。 适度拓展 删除一个词要先验证 end 0，再沿路径递减 pass 和 end；否则会产生负频次。多组竞赛数据可只清理已使用节点，但应包含根并重置 idx。静态词典可考虑压缩前缀树；任意子串查找则是另一类任务，不能直接用前缀 trie 替代。 参考资料 - princeton algorithms 作者的 triest - unicode 标准规范化 uax 15 模拟面试问题 1. 基础理解：pass 与 end 统计什么，重复插入如何影响它们？ 2. 实际应用：前缀匹配和返回全部建议的复杂度为什么不同？ 3. 实际应用：如何发现原稿字符表清零循环的越界问题？ 4. 深入追问：中文 trie 按字符与按字节建边有何取舍？ 5. 深入追问：怎样安全删除一次词频而不破坏共享前缀？"
  },
  {
    "id": "algo-graphs-dependencies-mst",
    "version": "7e53e15afd6a",
    "md": "learning/courses/algorithms/graphs-dependencies-mst.md",
    "title": "依赖排序与最小生成树",
    "description": "区分有向先后关系、无向连通性以及总成本最小化。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 9,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "拓扑序回答先后关系",
        "anchor": "拓扑序回答先后关系",
        "level": 2,
        "text": "  有向边 A→B 表示 A 必须先完成。Kahn 算法统计入度，将所有零入度节点入队；完成一个节点，削减其出边目标的入度，刚降到零才入队。输出数不足 V 说明存在有向环。残余节点也可能只是被环阻塞，不代表每个残余节点自身都在环上。  课程依赖 基础→数据库 、 基础→Web 、 数据库→项目 、 Web→项目 ，合法顺序可为基础、数据库、Web、项目，也可交换中间两项。拓扑序通常不唯一，要求字典序最小时使用小顶堆。普通队列 O(V+E)，小顶堆版本额外考虑堆操作。  python from collections import deque  def topological_order(graph): indegree = {u: 0 for u in graph} for u in graph: for v in graph[u]: indegree[v] += 1 q = deque(u for u, d in indegree.items() if d == 0) order = [] while q: u = q.popleft(); order.append(u) for v in graph[u]: indegree[v] -= 1 if indegree[v] == 0: q.append(v) if len(order) != len(graph): raise ValueError('存在有向依赖环') return order   例子约定所有目标也在 graph 键中，孤立任务也必须登记。Kahn 可以使用队列，但关键是依赖消除，不能把它和按距离分层 BFS 当成完全相同的问题。任务并发执行时，只有实际完成后才算依赖解除。 "
      },
      {
        "title": "最小生成树回答总成本",
        "anchor": "最小生成树回答总成本",
        "level": 2,
        "text": "  连通带权无向图的生成树有 V-1 条边，MST 使总边权最小。Kruskal 全局按边权升序，用并查集跳过已连通两端，加入有效边。Prim 从一个已选点集扩张，每次挑跨割的最低代价边；它的 key 是连接到树的最小边权，不是从起点走来的累计距离。  三角形 A-B=2、B-C=3、A-C=9，Kruskal 选 2 与 3，总成本 5；Prim 从 A 开始也先选 B，再由 B 以 3 连接 C。若只按“离起点 A 最近的直连边”不更新 C，就会错误选择 9。  Kruskal O(E log E) 加并查集成本；Prim 邻接表配可重复候选的二叉堆通常 O(E log E)，常简写 O(E log V) 须说明简单图等假设；稠密图可用 O(V²) 数组版。求和使用足够宽的整数，允许负边权也能求 MST。 "
      },
      {
        "title": "工程例子与常见误区",
        "anchor": "工程例子与常见误区",
        "level": 2,
        "text": "  给机房布线，需要连接全部交换站且总铺设成本最小，是 MST 抽象；为某个站到其他站的访问延迟最小，是最短路，两者目标不同。MST 不保证路径最短，也不保证冗余可靠性，实际网络设计常需额外备用链路约束。  Kruskal 最终不足 V-1 条表示原图不连通，不是“出现环”。不连通时仍可得到最小生成森林；页面应明确任务是返回森林还是报无生成树。边权相同可能存在多棵 MST，不能仅凭结果边集合不一样就判错，可比较总权及树性质。  村庄 ID 稀疏时可用哈希表离散化成连续下标再进并查集，保留反向映射以输出原 ID。孤立村庄也必须从完整顶点清单登记，只扫描边端点会漏掉它们，进而错误地宣称图连通。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python graphlib：拓扑排序与完成通知 - Princeton Algorithms 作者的 KruskalMST - Princeton Algorithms 作者的 LazyPrimMST "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：Kahn 残余节点为什么未必都在环上？ 2. 实际应用：并发任务调度应在开始还是完成时释放后继依赖？ 3. 实际应用：Prim 与 Dijkstra 的状态分别代表什么？ 4. 深入追问：MST 为什么不等于最短路树或高可用网络？ 5. 深入追问：多个相同权值时怎样验证一个候选 MST？"
      }
    ],
    "questions": [
      {
        "id": "3f1e04291d8e818f",
        "text": "基础理解：Kahn 残余节点为什么未必都在环上？"
      },
      {
        "id": "705edef1aa309e48",
        "text": "实际应用：并发任务调度应在开始还是完成时释放后继依赖？"
      },
      {
        "id": "fc0d3499a0d9230e",
        "text": "实际应用：Prim 与 Dijkstra 的状态分别代表什么？"
      },
      {
        "id": "3e478a868eb0db73",
        "text": "深入追问：MST 为什么不等于最短路树或高可用网络？"
      },
      {
        "id": "ad2c9bf4dc18c9fe",
        "text": "深入追问：多个相同权值时怎样验证一个候选 MST？"
      }
    ],
    "searchText": "依赖排序与最小生成树 拓扑序回答先后关系 有向边 a→b 表示 a 必须先完成。kahn 算法统计入度，将所有零入度节点入队；完成一个节点，削减其出边目标的入度，刚降到零才入队。输出数不足 v 说明存在有向环。残余节点也可能只是被环阻塞，不代表每个残余节点自身都在环上。 课程依赖 基础→数据库 、 基础→web 、 数据库→项目 、 web→项目 ，合法顺序可为基础、数据库、web、项目，也可交换中间两项。拓扑序通常不唯一，要求字典序最小时使用小顶堆。普通队列 o(v+e)，小顶堆版本额外考虑堆操作。 python from collections import deque def topological_order(graph): indegree = {u: 0 for u in graph} for u in graph: for v in graph[u]: indegree[v] += 1 q = deque(u for u, d in indegree.items() if d == 0) order = [] while q: u = q.popleft(); order.append(u) for v in graph[u]: indegree[v] -= 1 if indegree[v] == 0: q.append(v) if len(order) != len(graph): raise valueerror('存在有向依赖环') return order 例子约定所有目标也在 graph 键中，孤立任务也必须登记。kahn 可以使用队列，但关键是依赖消除，不能把它和按距离分层 bfs 当成完全相同的问题。任务并发执行时，只有实际完成后才算依赖解除。 最小生成树回答总成本 连通带权无向图的生成树有 v-1 条边，mst 使总边权最小。kruskal 全局按边权升序，用并查集跳过已连通两端，加入有效边。prim 从一个已选点集扩张，每次挑跨割的最低代价边；它的 key 是连接到树的最小边权，不是从起点走来的累计距离。 三角形 a-b=2、b-c=3、a-c=9，kruskal 选 2 与 3，总成本 5；prim 从 a 开始也先选 b，再由 b 以 3 连接 c。若只按“离起点 a 最近的直连边”不更新 c，就会错误选择 9。 kruskal o(e log e) 加并查集成本；prim 邻接表配可重复候选的二叉堆通常 o(e log e)，常简写 o(e log v) 须说明简单图等假设；稠密图可用 o(v²) 数组版。求和使用足够宽的整数，允许负边权也能求 mst。 工程例子与常见误区 给机房布线，需要连接全部交换站且总铺设成本最小，是 mst 抽象；为某个站到其他站的访问延迟最小，是最短路，两者目标不同。mst 不保证路径最短，也不保证冗余可靠性，实际网络设计常需额外备用链路约束。 kruskal 最终不足 v-1 条表示原图不连通，不是“出现环”。不连通时仍可得到最小生成森林；页面应明确任务是返回森林还是报无生成树。边权相同可能存在多棵 mst，不能仅凭结果边集合不一样就判错，可比较总权及树性质。 村庄 id 稀疏时可用哈希表离散化成连续下标再进并查集，保留反向映射以输出原 id。孤立村庄也必须从完整顶点清单登记，只扫描边端点会漏掉它们，进而错误地宣称图连通。 参考资料 - python graphlib：拓扑排序与完成通知 - princeton algorithms 作者的 kruskalmst - princeton algorithms 作者的 lazyprimmst 模拟面试问题 1. 基础理解：kahn 残余节点为什么未必都在环上？ 2. 实际应用：并发任务调度应在开始还是完成时释放后继依赖？ 3. 实际应用：prim 与 dijkstra 的状态分别代表什么？ 4. 深入追问：mst 为什么不等于最短路树或高可用网络？ 5. 深入追问：多个相同权值时怎样验证一个候选 mst？"
  },
  {
    "id": "algo-monotone-structures",
    "version": "48f02eaed466",
    "md": "learning/courses/algorithms/monotone-structures.md",
    "title": "单调结构与前后缀最值",
    "description": "用支配关系解释弹出，用下标管理窗口与重复元素。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 10,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 2,
    "outline": [
      {
        "title": "栈里放尚未解决的候选",
        "anchor": "栈里放尚未解决的候选",
        "level": 2,
        "text": "  求右侧第一个严格更大值，栈中保存尚未遇到答案的下标，对应值从底到顶不增。新值更大时弹出，当前值就是被弹位置首次遇到的严格更大值。例 [2,1,5,6,2,3] 得 [5,5,6,-1,3,-1] 。  python def next_greater(a): ans = [-1] len(a); stack = [] for i, value in enumerate(a): while stack and a[stack[-1]] < value: ans[stack.pop()] = value stack.append(i) return ans   每个下标只入栈一次、出栈一次，嵌套 while 仍是 O(n)。存下标还能计算距离，而只存值无法分清重复值位置。 < 改成 <= 改变了严格性，不能凭记忆替换。 "
      },
      {
        "title": "相等元素不是永远拥有相同答案",
        "anchor": "相等元素不是永远拥有相同答案",
        "level": 2,
        "text": "  原稿“相等元素答案相同”应限定为当前单调栈中同组的候选。序列 [2,1,2] 的两个 2 的左右严格更小位置不同，不能把整个数组的相等值都合并。若一趟同时结算左右严格更小，需维护相等组，左答案取前一个严格更小组中最靠右的下标；也可用两趟分别求左右，降低实现复杂度。 "
      },
      {
        "title": "窗口最值的支配关系",
        "anchor": "窗口最值的支配关系",
        "level": 2,
        "text": "  窗口最小值中，新元素 x 不大于旧队尾 y，且 x 更晚过期：只要 y 还在窗口，x 也在，y 永远不可能优于 x，可安全删除。队尾负责剔除劣候选，队首负责移除过期下标。  python from collections import deque  def sliding_min(a, k): if k len(a): raise ValueError('窗口范围无效') q = deque(); out = [] for i, x in enumerate(a): while q and q[0] <= i-k: q.popleft() while q and a[q[-1]] = x: q.pop() q.append(i) if i = k-1: out.append(a[q[0]]) return out   先过期再维护尾，或先维护尾后过期均可，只要取答案前不变量成立。不能把某一种操作顺序说成唯一正确。时间 O(n)，空间 O(k)。 "
      },
      {
        "title": "从接雨水理解前后缀信息",
        "anchor": "从接雨水理解前后缀信息",
        "level": 2,
        "text": "  每格水量 min(leftMax[i],rightMax[i])-height[i] ，前后缀最大值都含自身。 [3,0,2,0,4] 每格贡献 [0,3,1,3,0] ，总数 7；两端不能存水。先用 O(n) 空间数组实现容易验证，再用左右指针和已知边界压到 O(1) 辅助空间。它是静态柱高模型，不要直接类比有渗透、流速与二维地形的实际洪水。 "
      },
      {
        "title": "开发场景与拓展",
        "anchor": "开发场景与拓展",
        "level": 2,
        "text": "  每分钟统计过去十分钟的最高延迟，可以对等间隔样本维护窗口最大队列。时间戳不等间隔时，过期规则应按时间而非固定下标；分布式乱序数据需要事件时间与迟到处理，单一数组模板不能自动覆盖。柱状图最大矩形还需要在弹出时按左右边界算宽度，重复高度策略应与边界定义一起证明。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python collections.deque：两端操作 - Princeton Algorithms 作者的 Stack "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：嵌套弹栈循环为什么总时间仍为 O(n)？ 2. 实际应用：相等值什么时候能分为一组，什么时候不能？ 3. 实际应用：队尾淘汰与队首过期分别依赖什么证明？ 4. 深入追问：按时间窗口统计与按 K 个样本统计有什么差别？ 5. 深入追问：接雨水如何从前后缀数组压缩为双指针？"
      }
    ],
    "questions": [
      {
        "id": "0613aa6ce62f1706",
        "text": "基础理解：嵌套弹栈循环为什么总时间仍为 O(n)？"
      },
      {
        "id": "e49bcc5a53f2f7a3",
        "text": "实际应用：相等值什么时候能分为一组，什么时候不能？"
      },
      {
        "id": "0f4ae6917863d56f",
        "text": "实际应用：队尾淘汰与队首过期分别依赖什么证明？"
      },
      {
        "id": "306597348ce0c043",
        "text": "深入追问：按时间窗口统计与按 K 个样本统计有什么差别？"
      },
      {
        "id": "67b6f25d99e641b6",
        "text": "深入追问：接雨水如何从前后缀数组压缩为双指针？"
      }
    ],
    "searchText": "单调结构与前后缀最值 栈里放尚未解决的候选 求右侧第一个严格更大值，栈中保存尚未遇到答案的下标，对应值从底到顶不增。新值更大时弹出，当前值就是被弹位置首次遇到的严格更大值。例 [2,1,5,6,2,3] 得 [5,5,6,-1,3,-1] 。 python def next_greater(a): ans = [-1] len(a); stack = [] for i, value in enumerate(a): while stack and a[stack[-1]] len(a): raise valueerror('窗口范围无效') q = deque(); out = [] for i, x in enumerate(a): while q and q[0] = x: q.pop() q.append(i) if i = k-1: out.append(a[q[0]]) return out 先过期再维护尾，或先维护尾后过期均可，只要取答案前不变量成立。不能把某一种操作顺序说成唯一正确。时间 o(n)，空间 o(k)。 从接雨水理解前后缀信息 每格水量 min(leftmax[i],rightmax[i])-height[i] ，前后缀最大值都含自身。 [3,0,2,0,4] 每格贡献 [0,3,1,3,0] ，总数 7；两端不能存水。先用 o(n) 空间数组实现容易验证，再用左右指针和已知边界压到 o(1) 辅助空间。它是静态柱高模型，不要直接类比有渗透、流速与二维地形的实际洪水。 开发场景与拓展 每分钟统计过去十分钟的最高延迟，可以对等间隔样本维护窗口最大队列。时间戳不等间隔时，过期规则应按时间而非固定下标；分布式乱序数据需要事件时间与迟到处理，单一数组模板不能自动覆盖。柱状图最大矩形还需要在弹出时按左右边界算宽度，重复高度策略应与边界定义一起证明。 参考资料 - python collections.deque：两端操作 - princeton algorithms 作者的 stack 模拟面试问题 1. 基础理解：嵌套弹栈循环为什么总时间仍为 o(n)？ 2. 实际应用：相等值什么时候能分为一组，什么时候不能？ 3. 实际应用：队尾淘汰与队首过期分别依赖什么证明？ 4. 深入追问：按时间窗口统计与按 k 个样本统计有什么差别？ 5. 深入追问：接雨水如何从前后缀数组压缩为双指针？"
  },
  {
    "id": "algo-prefix-differences",
    "version": "4c4b6f593ab5",
    "md": "learning/courses/algorithms/prefix-differences.md",
    "title": "前缀和与二阶差分：从公式检查边界",
    "description": "以半开前缀和和统一二阶差分修复单点更新错误。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 11,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "查询与修改的两面",
        "anchor": "查询与修改的两面",
        "level": 2,
        "text": "  定义 pre[0]=0 ， pre[i+1]=pre[i]+a[i] ，半开区间 [l,r) 的和为 pre[r]-pre[l]。预处理 O(n)，静态区间求和 O(1)。若频繁改单点后立即查和，不能继续称每次 O(1)，需更新前缀或改用树状数组。  用数学式看，前缀把重复的累加工作提前完成，查询时相减即可消掉左侧共同部分：  $$ P_k=\\sum_{i=0}^{k-1}a_i,\\qquad \\sum_{i=l}^{r-1}a_i=P_r-P_l $$  一阶差分 d[i]=a[i]-a[i-1] ，数组前补 0。对闭区间 [l,r] 加常数 s，只需 d[l]+=s，d[r+1]-=s，一次前缀和还原。它适合离线批量修改，最后一次恢复。 "
      },
      {
        "title": "等差更新为什么要两次恢复",
        "anchor": "等差更新为什么要两次恢复",
        "level": 2,
        "text": "  对零基 [l,r] 加 s,s+step,...,e ，一次差分后为起点 s、中间 step、末尾之后 -e。再对这个分段数组差分，只剩四个突变：  text dd[l] += s dd[l+1] += step-s dd[r+1] -= e+step dd[r+2] += e   两次前缀和先恢复一阶差分，再恢复原数组增量；原稿两轮注释写反。n 个有效位置外至少留两个哨兵，恢复只取前 n 个结果。  python def apply_progressions(n, updates): dd = [0] (n + 2) for l, r, s, step in updates: if not 0 <= l <= r < n: raise ValueError('区间越界') e = s + (r-l) step dd[l] += s dd[l+1] += step-s dd[r+1] -= e+step dd[r+2] += e first = value = 0; out = [] for i in range(n): first += dd[i] value += first out.append(value) return out   输入明确使用首项与步长，避免末项不能整除的问题。若输入首尾项且长度 1，整数任务必须检查 (e-s)%(r-l)==0 ；单点要求首末项一致。 "
      },
      {
        "title": "修订：单点不能混用一阶表示",
        "anchor": "修订单点不能混用一阶表示",
        "level": 2,
        "text": "  原稿 l==r 分支只改两个点 +s,-s ，但随后仍做两次前缀和，会变成从该点开始一直 +s。反例 n=4，在位置 1 加 5，错误实现得到 [0,5,5,5] ，正确应为 [0,5,0,0] 。  统一公式令 step=0、l=r，重合项自然合并为 dd[l]+=s, dd[l+1]-=2s, dd[l+2]+=s 。这才是二阶差分域中的单点脉冲，无需再用不匹配的一阶特判。  另一个推演：n=5，对 [1,3] 加 [1,2,3] ，dd 的有效变化为 [0,1,0,0,-4,3,0] ，前五位一阶恢复 [0,1,1,1,-3] ，二次恢复 [0,1,2,3,0] 。 "
      },
      {
        "title": "开发场景与边界",
        "anchor": "开发场景与边界",
        "level": 2,
        "text": "  批量为预约日历的区间增加占用数，可以先差分汇总再检查超额日期；逐步递增的活动额度可用二阶差分模拟。在线增删并即时查询则需其他结构，不能每次 O(n) 恢复后仍宣称整体 O(n+m)。固定宽度语言注意多次叠加和等差末项乘法溢出。  公式没有依赖某个缺失题目的异或输出要求，保留为独立可验证工具。建议用 n<=8 的随机输入与逐位置暴力更新交叉验证，覆盖单点、整段、零步长、负步长和相邻更新。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python itertools.accumulate：累积还原 - Python 整数与算术语义 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：前缀和为何是差分的逆运算？ 2. 实际应用：原稿单点分支在两次还原后为什么污染后续位置？ 3. 实际应用：等差区间四个突变点分别来自什么跳变？ 4. 深入追问：从首末项推导整数步长需校验什么条件？ 5. 深入追问：怎样用暴力基准验证边界公式而非只测普通例子？"
      }
    ],
    "questions": [
      {
        "id": "9153d01e16d1c6eb",
        "text": "基础理解：前缀和为何是差分的逆运算？"
      },
      {
        "id": "3ef1c88cb414c716",
        "text": "实际应用：原稿单点分支在两次还原后为什么污染后续位置？"
      },
      {
        "id": "9082bcadd9cce2b2",
        "text": "实际应用：等差区间四个突变点分别来自什么跳变？"
      },
      {
        "id": "cd726b40b8191621",
        "text": "深入追问：从首末项推导整数步长需校验什么条件？"
      },
      {
        "id": "352786a7e47a820f",
        "text": "深入追问：怎样用暴力基准验证边界公式而非只测普通例子？"
      }
    ],
    "searchText": "前缀和与二阶差分：从公式检查边界 查询与修改的两面 定义 pre[0]=0 ， pre[i+1]=pre[i]+a[i] ，半开区间 [l,r) 的和为 pre[r]-pre[l]。预处理 o(n)，静态区间求和 o(1)。若频繁改单点后立即查和，不能继续称每次 o(1)，需更新前缀或改用树状数组。 用数学式看，前缀把重复的累加工作提前完成，查询时相减即可消掉左侧共同部分： $$ p_k=\\sum_{i=0}^{k-1}a_i,\\qquad \\sum_{i=l}^{r-1}a_i=p_r-p_l $$ 一阶差分 d[i]=a[i]-a[i-1] ，数组前补 0。对闭区间 [l,r] 加常数 s，只需 d[l]+=s，d[r+1]-=s，一次前缀和还原。它适合离线批量修改，最后一次恢复。 等差更新为什么要两次恢复 对零基 [l,r] 加 s,s+step,...,e ，一次差分后为起点 s、中间 step、末尾之后 -e。再对这个分段数组差分，只剩四个突变： text dd[l] += s dd[l+1] += step-s dd[r+1] -= e+step dd[r+2] += e 两次前缀和先恢复一阶差分，再恢复原数组增量；原稿两轮注释写反。n 个有效位置外至少留两个哨兵，恢复只取前 n 个结果。 python def apply_progressions(n, updates): dd = [0] (n + 2) for l, r, s, step in updates: if not 0 1，整数任务必须检查 (e-s)%(r-l)==0 ；单点要求首末项一致。 修订：单点不能混用一阶表示 原稿 l==r 分支只改两个点 +s,-s ，但随后仍做两次前缀和，会变成从该点开始一直 +s。反例 n=4，在位置 1 加 5，错误实现得到 [0,5,5,5] ，正确应为 [0,5,0,0] 。 统一公式令 step=0、l=r，重合项自然合并为 dd[l]+=s, dd[l+1]-=2s, dd[l+2]+=s 。这才是二阶差分域中的单点脉冲，无需再用不匹配的一阶特判。 另一个推演：n=5，对 [1,3] 加 [1,2,3] ，dd 的有效变化为 [0,1,0,0,-4,3,0] ，前五位一阶恢复 [0,1,1,1,-3] ，二次恢复 [0,1,2,3,0] 。 开发场景与边界 批量为预约日历的区间增加占用数，可以先差分汇总再检查超额日期；逐步递增的活动额度可用二阶差分模拟。在线增删并即时查询则需其他结构，不能每次 o(n) 恢复后仍宣称整体 o(n+m)。固定宽度语言注意多次叠加和等差末项乘法溢出。 公式没有依赖某个缺失题目的异或输出要求，保留为独立可验证工具。建议用 n<=8 的随机输入与逐位置暴力更新交叉验证，覆盖单点、整段、零步长、负步长和相邻更新。 参考资料 - python itertools.accumulate：累积还原 - python 整数与算术语义 模拟面试问题 1. 基础理解：前缀和为何是差分的逆运算？ 2. 实际应用：原稿单点分支在两次还原后为什么污染后续位置？ 3. 实际应用：等差区间四个突变点分别来自什么跳变？ 4. 深入追问：从首末项推导整数步长需校验什么条件？ 5. 深入追问：怎样用暴力基准验证边界公式而非只测普通例子？"
  },
  {
    "id": "algo-dp-backtracking",
    "version": "02f9821deed0",
    "md": "learning/courses/algorithms/dp-backtracking.md",
    "title": "动态规划与回溯：保留足以转移的信息",
    "description": "用回文、括号和二进制串计数解释状态与剪枝。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 12,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "状态必须决定下一步",
        "anchor": "状态必须决定下一步",
        "level": 2,
        "text": "  最长回文子串若只记录“以 i 结尾的最长回文长度”，下一字符可能需要较短后缀，信息并不足。例如 abbb ，处理 abb 只记 bb，继续得到 bbb 却需要从更短的 b 扩展。  区间 DP 定义 pal[i][j] 为闭区间是否回文：两端相等且内部回文。长度 1/2 是边界，按区间长度递增，或 i 从后往前、j 从前往后，使内部先算。O(n²) 时间与空间。若只求最长串，枚举奇偶中心扩展 O(n²) 时间、O(1) 辅助空间；漏偶中心会漏掉 abba。 "
      },
      {
        "title": "回溯是枚举选择，不是随意递归",
        "anchor": "回溯是枚举选择不是随意递归",
        "level": 2,
        "text": "  电话号码字母组合每层选择当前数字的一种字母，做选择、递归、撤销。空输入按题意返回空列表；保存结果时复制路径，否则所有结果可能共享同一可变对象。最坏每位 4 个选择，长度 n 输出时间 O(n·4^n)，输出规模本身就很大。  括号生成维护 left、right 已使用数量。只允许 left<n 时加左括号，right<left 时加右括号，任意前缀都不能右多于左；此错误无法被后续修复，因而可剪枝。有效括号判定用栈验证嵌套类型，最后栈须为空，仅统计数量无法区分 ([)] 。 "
      },
      {
        "title": "计数 DP：末尾连续 1 决定新增贡献",
        "anchor": "计数-dp末尾连续-1-决定新增贡献",
        "level": 2,
        "text": "  长度 N 的二进制串，所有全 1 连续子区间数等于每段长度 L 的 L(L+1)/2 之和。末尾已有 j 个连续 1，再加 1 新增 j+1 个子区间；加 0 不新增，并把 j 清零。  目标至少 K，可反算“小于 K”的坏串数，再从 2^N 中减去。状态 (s,j) 表示累计贡献 s<K 与末尾连续 1 长度 j；不需要完整历史串。  python def binary_at_least(n, k, mod): if n < 0 or k < 0 or mod <= 0: raise ValueError('参数无效') if k == 0: return pow(2, n, mod) dp = {(0, 0): 1} for _ in range(n): nxt = {} for (s, j), ways in dp.items(): key = (s, 0) nxt[key] = (nxt.get(key, 0) + ways) % mod if s+j+1 < k: key = (s+j+1, j+1) nxt[key] = (nxt.get(key, 0) + ways) % mod dp = nxt return (pow(2, n, mod) - sum(dp.values())) % mod   N=2、K=2，00/01/10 的贡献分别 0/1/1，11 贡献 3，答案 1。稠密上界 O(NK²)、O(K²)，稀疏字典跳过不可达状态；由 j(j+1)/2<=s<K 可进一步限 j。大 K 不适用此状态界，不要只因为用了滚动数组就忽略转移总量。 "
      },
      {
        "title": "开发对应与验证",
        "anchor": "开发对应与验证",
        "level": 2,
        "text": "  生成所有权限组合是枚举问题；判断某种规则是否可行可能是 DP 或搜索；“最优一个”与“全部输出”不能混同。业务限制若只是偏好而非必然非法，不可当成剪枝条件删掉可能答案。  原题模数缺失，本文把 mod 作为显式参数，不声称 10^9+7 就是原题值。Python 二维数组用列表推导创建独立行； [[0] m] n 会共享行引用。用 N<=10 的完整 2^N 枚举核对 DP，可直接验证状态、边界 K=0 与阈值方向。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - MIT 6.006 动态规划课程资料 - Python 复合对象与复制语义 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：DP 状态何时称为足以转移，最长长度为何可能不足？ 2. 实际应用：括号生成剪枝与最终验证有什么差别？ 3. 实际应用：二进制串追加 1 为何恰好新增 j+1 个子区间？ 4. 深入追问：如何用输出规模解释回溯的指数成本？ 5. 深入追问：为什么未知模数应成为接口参数而不是猜测的常量？"
      }
    ],
    "questions": [
      {
        "id": "6e75dfce4890e888",
        "text": "基础理解：DP 状态何时称为足以转移，最长长度为何可能不足？"
      },
      {
        "id": "aa6c72358f5c11af",
        "text": "实际应用：括号生成剪枝与最终验证有什么差别？"
      },
      {
        "id": "9adcb046988a3a46",
        "text": "实际应用：二进制串追加 1 为何恰好新增 j+1 个子区间？"
      },
      {
        "id": "71ed018d428c3515",
        "text": "深入追问：如何用输出规模解释回溯的指数成本？"
      },
      {
        "id": "9c1c9060d4a86ea6",
        "text": "深入追问：为什么未知模数应成为接口参数而不是猜测的常量？"
      }
    ],
    "searchText": "动态规划与回溯：保留足以转移的信息 状态必须决定下一步 最长回文子串若只记录“以 i 结尾的最长回文长度”，下一字符可能需要较短后缀，信息并不足。例如 abbb ，处理 abb 只记 bb，继续得到 bbb 却需要从更短的 b 扩展。 区间 dp 定义 pal[i][j] 为闭区间是否回文：两端相等且内部回文。长度 1/2 是边界，按区间长度递增，或 i 从后往前、j 从前往后，使内部先算。o(n²) 时间与空间。若只求最长串，枚举奇偶中心扩展 o(n²) 时间、o(1) 辅助空间；漏偶中心会漏掉 abba。 回溯是枚举选择，不是随意递归 电话号码字母组合每层选择当前数字的一种字母，做选择、递归、撤销。空输入按题意返回空列表；保存结果时复制路径，否则所有结果可能共享同一可变对象。最坏每位 4 个选择，长度 n 输出时间 o(n·4^n)，输出规模本身就很大。 括号生成维护 left、right 已使用数量。只允许 left<n 时加左括号，right<left 时加右括号，任意前缀都不能右多于左；此错误无法被后续修复，因而可剪枝。有效括号判定用栈验证嵌套类型，最后栈须为空，仅统计数量无法区分 ([)] 。 计数 dp：末尾连续 1 决定新增贡献 长度 n 的二进制串，所有全 1 连续子区间数等于每段长度 l 的 l(l+1)/2 之和。末尾已有 j 个连续 1，再加 1 新增 j+1 个子区间；加 0 不新增，并把 j 清零。 目标至少 k，可反算“小于 k”的坏串数，再从 2^n 中减去。状态 (s,j) 表示累计贡献 s<k 与末尾连续 1 长度 j；不需要完整历史串。 python def binary_at_least(n, k, mod): if n < 0 or k < 0 or mod <= 0: raise valueerror('参数无效') if k == 0: return pow(2, n, mod) dp = {(0, 0): 1} for _ in range(n): nxt = {} for (s, j), ways in dp.items(): key = (s, 0) nxt[key] = (nxt.get(key, 0) + ways) % mod if s+j+1 < k: key = (s+j+1, j+1) nxt[key] = (nxt.get(key, 0) + ways) % mod dp = nxt return (pow(2, n, mod) - sum(dp.values())) % mod n=2、k=2，00/01/10 的贡献分别 0/1/1，11 贡献 3，答案 1。稠密上界 o(nk²)、o(k²)，稀疏字典跳过不可达状态；由 j(j+1)/2<=s<k 可进一步限 j。大 k 不适用此状态界，不要只因为用了滚动数组就忽略转移总量。 开发对应与验证 生成所有权限组合是枚举问题；判断某种规则是否可行可能是 dp 或搜索；“最优一个”与“全部输出”不能混同。业务限制若只是偏好而非必然非法，不可当成剪枝条件删掉可能答案。 原题模数缺失，本文把 mod 作为显式参数，不声称 10^9+7 就是原题值。python 二维数组用列表推导创建独立行； [[0] m] n 会共享行引用。用 n<=10 的完整 2^n 枚举核对 dp，可直接验证状态、边界 k=0 与阈值方向。 参考资料 - mit 6.006 动态规划课程资料 - python 复合对象与复制语义 模拟面试问题 1. 基础理解：dp 状态何时称为足以转移，最长长度为何可能不足？ 2. 实际应用：括号生成剪枝与最终验证有什么差别？ 3. 实际应用：二进制串追加 1 为何恰好新增 j+1 个子区间？ 4. 深入追问：如何用输出规模解释回溯的指数成本？ 5. 深入追问：为什么未知模数应成为接口参数而不是猜测的常量？"
  },
  {
    "id": "algo-counting-python",
    "version": "8018cd7255d5",
    "md": "learning/courses/algorithms/counting-python.md",
    "title": "数学计数与 Python 模板的成本",
    "description": "固定总和压缩变量，用整数边界与小规模穷举验证闭式。",
    "subject": "algorithms",
    "kind": "系统课程",
    "order": 13,
    "date": "2026-10-23",
    "tags": [
      "算法",
      "计算机基础",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "从两个变量到一个区间",
        "anchor": "从两个变量到一个区间",
        "level": 2,
        "text": "  求 0<=x<=A、0<=y<=B 且 x+y 是完全平方数的有序整数对。固定 t=s² 后 y=t-x，x 范围为 [max(0,t-B),min(A,t)] 。若下界不超过上界，数量为上界减下界加一；s 只需 0 到 isqrt(A+B)，不能对正负 s 重复计数同一平方。  例如 A=2、B=1：平方和只能 0、1，分别产生 (0,0) 与 (0,1)/(1,0)，共 3 对。这里是有序对，交换两个坐标未必是同一个结果，且 A/B 范围可能不同。 "
      },
      {
        "title": "分段消掉几百万次循环",
        "anchor": "分段消掉几百万次循环",
        "level": 2,
        "text": "  可先交换 A/B 使 A =B，计数总量不变。固定和 t 的方案数依次为：t<=B 时 t+1；B<t<=A 时 B+1；A<t<=A+B 时 A+B-t+1。定义 S(m)=m(m+1)(2m+1)/6，累加平方可用闭式。  python from math import isqrt  def count_square_pairs(a, b): if a < 0 or b < 0: raise ValueError('上界需非负') if a < b: a, b = b, a low, high, end = isqrt(b), isqrt(a), isqrt(a+b) def sqsum(m): return m (m+1) (2 m+1)//6 return (sqsum(low) + low + 1 + (high-low) (b+1) + (end-high) (a+b+1) - (sqsum(end)-sqsum(high)))   low/high/end 是三个分段的整数平方根端点；全都为 0 时也正确。Python isqrt 是精确整数根，浮点 sqrt 在大整数近平方边界可能舍入出错。闭式用固定次数算术操作，但严格位复杂度仍取决于整数位数，不能在任意大输入下称机器时间绝对常数。 "
      },
      {
        "title": "Python 模板不能掩盖语义",
        "anchor": "python-模板不能掩盖语义",
        "level": 2,
        "text": "  普通 OJ 自行读取输入输出，LeetCode 通常只实现指定方法。 sys.stdin.buffer.readline 返回 bytes，decode 后才是 str；strip 会删除两端空白，若空格是有效字符就不可随意使用。  python import sys from collections import deque, defaultdict, Counter from heapq import heappush, heappop from bisect import bisect_left, bisect_right  def solve(): line = sys.stdin.buffer.readline() if not line: return a, b = map(int, line.split()) print(count_square_pairs(a, b))  if __name__ == '__main__': solve()   字典、集合查找通常按平均 O(1) 分析；排序不保证 O(1) 辅助空间；list.pop(0) 线性，deque.popleft 常数。类方法递归用 self.method，嵌套函数重绑定外层变量用 nonlocal；修改列表内容不等于重绑定。统一 val/value 属性名，Python 动态加属性可能让拼写错误不立即报错。 "
      },
      {
        "title": "把公式变成可信结果",
        "anchor": "把公式变成可信结果",
        "level": 2,
        "text": "  先枚举 A/B 在 0..20 的所有小实例，暴力检查每对 x/y 的和是否满足 isqrt(t)^2==t，对照闭式。再测试 A=B、A=0、平方数恰落在 B/A/A+B 端点的情况。对模数题先做精确整数除法再取模，或者在适用前提下用模逆；不能直接把整数除 6 变成模意义普通除法。  这种“压缩变量—推导边界—分段—核对”的流程也适合优惠金额组合和库存分配计数，但现实业务可能有独立权重或额外条件，公式必须随模型重推。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Python math.isqrt - Python 标准类型与整数 - Python __main__ 入口 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：固定总和为什么能把二维枚举变成区间计数？ 2. 实际应用：平方根分段端点如何避免漏算或重复？ 3. 实际应用：为什么浮点平方根不能可靠替代 isqrt？ 4. 深入追问：固定次数大整数算术为何不代表严格常数位复杂度？ 5. 深入追问：模运算下的除法为什么需要额外条件？"
      }
    ],
    "questions": [
      {
        "id": "14778984554ca262",
        "text": "基础理解：固定总和为什么能把二维枚举变成区间计数？"
      },
      {
        "id": "4da243005ea377a6",
        "text": "实际应用：平方根分段端点如何避免漏算或重复？"
      },
      {
        "id": "d7c85537655dde8a",
        "text": "实际应用：为什么浮点平方根不能可靠替代 isqrt？"
      },
      {
        "id": "4eb9edef78730510",
        "text": "深入追问：固定次数大整数算术为何不代表严格常数位复杂度？"
      },
      {
        "id": "dd40df66803be369",
        "text": "深入追问：模运算下的除法为什么需要额外条件？"
      }
    ],
    "searchText": "数学计数与 python 模板的成本 从两个变量到一个区间 求 0 =b，计数总量不变。固定和 t 的方案数依次为：t<=b 时 t+1；b<t<=a 时 b+1；a<t<=a+b 时 a+b-t+1。定义 s(m)=m(m+1)(2m+1)/6，累加平方可用闭式。 python from math import isqrt def count_square_pairs(a, b): if a < 0 or b < 0: raise valueerror('上界需非负') if a < b: a, b = b, a low, high, end = isqrt(b), isqrt(a), isqrt(a+b) def sqsum(m): return m (m+1) (2 m+1)//6 return (sqsum(low) + low + 1 + (high-low) (b+1) + (end-high) (a+b+1) - (sqsum(end)-sqsum(high))) low/high/end 是三个分段的整数平方根端点；全都为 0 时也正确。python isqrt 是精确整数根，浮点 sqrt 在大整数近平方边界可能舍入出错。闭式用固定次数算术操作，但严格位复杂度仍取决于整数位数，不能在任意大输入下称机器时间绝对常数。 python 模板不能掩盖语义 普通 oj 自行读取输入输出，leetcode 通常只实现指定方法。 sys.stdin.buffer.readline 返回 bytes，decode 后才是 str；strip 会删除两端空白，若空格是有效字符就不可随意使用。 python import sys from collections import deque, defaultdict, counter from heapq import heappush, heappop from bisect import bisect_left, bisect_right def solve(): line = sys.stdin.buffer.readline() if not line: return a, b = map(int, line.split()) print(count_square_pairs(a, b)) if __name__ == '__main__': solve() 字典、集合查找通常按平均 o(1) 分析；排序不保证 o(1) 辅助空间；list.pop(0) 线性，deque.popleft 常数。类方法递归用 self.method，嵌套函数重绑定外层变量用 nonlocal；修改列表内容不等于重绑定。统一 val/value 属性名，python 动态加属性可能让拼写错误不立即报错。 把公式变成可信结果 先枚举 a/b 在 0..20 的所有小实例，暴力检查每对 x/y 的和是否满足 isqrt(t)^2==t，对照闭式。再测试 a=b、a=0、平方数恰落在 b/a/a+b 端点的情况。对模数题先做精确整数除法再取模，或者在适用前提下用模逆；不能直接把整数除 6 变成模意义普通除法。 这种“压缩变量—推导边界—分段—核对”的流程也适合优惠金额组合和库存分配计数，但现实业务可能有独立权重或额外条件，公式必须随模型重推。 参考资料 - python math.isqrt - python 标准类型与整数 - python __main__ 入口 模拟面试问题 1. 基础理解：固定总和为什么能把二维枚举变成区间计数？ 2. 实际应用：平方根分段端点如何避免漏算或重复？ 3. 实际应用：为什么浮点平方根不能可靠替代 isqrt？ 4. 深入追问：固定次数大整数算术为何不代表严格常数位复杂度？ 5. 深入追问：模运算下的除法为什么需要额外条件？"
  },
  {
    "id": "generative-engineering-context-evidence",
    "version": "933964ca4274",
    "md": "learning/courses/generative-engineering/context-evidence.md",
    "title": "模型上下文、注意力与证据边界",
    "description": "把论文事实、模型特定行为和个人使用经验分开记录。",
    "subject": "generative-engineering",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "生成式软件工程",
      "工程实践",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "注意力是计算，不是人的心理资源",
        "anchor": "注意力是计算不是人的心理资源",
        "level": 2,
        "text": "  Transformer 的缩放点积注意力可写为 softmax(QKᵀ/√dₖ)V ，用 query 与 key 的关联分数加权 value。多头、多层、残差和前馈网络共同参与计算，不能只凭一个比喻断言“某类文字一定抢走注意力”。注意力权重也不是输出正确性的直接证明。  原始 Transformer 论文是特定模型结构与任务的研究，不披露所有后续商业模型的内部实现。“GPT5 之后注意力收敛机制完善”“逻辑太强必然污染注意力导致幻觉”没有可核验来源，本课程不将其作为事实，也不以架构术语替代观察证据。  角色描述、示例、格式约束是否有效取决于模型、任务与评价方式。可明确任务对象和验收标准，而不是认定“专家”称号必有用或已永远没用。若要判断提示效果，用同一组任务对照，记录模型版本、输入、设置和指标，避免从一次对话得出普遍规律。 "
      },
      {
        "title": "长上下文研究支持怎样的结论",
        "anchor": "长上下文研究支持怎样的结论",
        "level": 2,
        "text": "  Lost in the Middle 在其所测多文档问答和键值检索任务中观察到信息位置会影响表现，长上下文能力不保证有效使用全部信息。其结果有研究模型、任务和年份范围，不能直接宣称所有当前模型都遵守相同曲线，也不能推出“上下文越短必定越好”。  工程上的合理启发是优先提供相关、可定位资料，删去过期或矛盾记录，并保留必要的约束和证据。这是可测试的工作方法，不是对未知内部机制的确定解释。 "
      },
      {
        "title": "例子：让模型修登录接口",
        "anchor": "例子让模型修登录接口",
        "level": 2,
        "text": "  输入至少包含预期行为、复现请求、实际错误、入口代码及认证链相关实现。仅说“登录坏了”信息不足，把整个仓库和过期讨论全部贴入也不保证解决。先定位 Controller→Service→认证组件的数据流，再补充缺失文件。  可用以下上下文结构：  text 目标：合法凭据返回会话，非法凭据返回约定错误。 复现：具体测试输入、实际响应、环境版本。 约束：密码不得明文保存，保持现有接口兼容。 证据：相关文件路径、日志与最小调用链。 验收：成功、错误密码、锁定账户、会话过期测试。 未知：哪些行为尚未核实，允许通过什么方式核实。   这里是工程示例，不是某产品专用提示语。模型提出修复后仍需检查代码与测试，解释流畅不代表诊断正确。 "
      },
      {
        "title": "读论文时区分作者主张和个人推断",
        "anchor": "读论文时区分作者主张和个人推断",
        "level": 2,
        "text": "  先写问题、既有方法、增量贡献，再检查数据集、指标、对照与消融、限制。请模型指出支持结论的具体章节或表格，再人工核对原文；无法访问全文时不能冒充已经阅读。论文改进某个基准，不等于你的生产任务同样获益。  记录三栏：原文证据、由证据可支持的结论、个人待验证假设。对“强化学习让模型一味附和”的笼统说法，已有研究讨论迎合行为，但单一训练环节不是所有模型所有输出的充分解释，需具体实验。 "
      },
      {
        "title": "长任务的上下文管理",
        "anchor": "长任务的上下文管理",
        "level": 2,
        "text": "  阶段记录保存已完成内容、当前约束、未解问题与下一步证据入口。重复读取巨大材料会增加处理成本，具体费用还取决于输入输出长度、缓存、模型与工具，不能写成固定增长公式。摘要可能丢细节，关键需求仍链接可追溯原文；切换阶段时更新记录，而不是让陈旧判断无限累积。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Attention Is All You Need：原始 Transformer 论文 - Lost in the Middle：研究任务与位置效应 - Simple synthetic data reduces sycophancy：迎合行为研究 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：注意力的 Q、K、V 分别参与什么计算？ 2. 实际应用：为什么不能用注意力比喻证明某种提示总是有效？ 3. 实际应用：修登录接口应提供哪些最小充分上下文？ 4. 深入追问：论文在特定基准上的结论如何迁移到工程任务验证？ 5. 深入追问：阶段摘要怎样保持证据可追溯而避免过期信息？"
      }
    ],
    "questions": [
      {
        "id": "2e2f46b2868e87a9",
        "text": "基础理解：注意力的 Q、K、V 分别参与什么计算？"
      },
      {
        "id": "63e02f417c08945d",
        "text": "实际应用：为什么不能用注意力比喻证明某种提示总是有效？"
      },
      {
        "id": "b3e334e73b01e591",
        "text": "实际应用：修登录接口应提供哪些最小充分上下文？"
      },
      {
        "id": "8c27826ae2da63c3",
        "text": "深入追问：论文在特定基准上的结论如何迁移到工程任务验证？"
      },
      {
        "id": "355eab3c1981ceb1",
        "text": "深入追问：阶段摘要怎样保持证据可追溯而避免过期信息？"
      }
    ],
    "searchText": "模型上下文、注意力与证据边界 注意力是计算，不是人的心理资源 transformer 的缩放点积注意力可写为 softmax(qkᵀ/√dₖ)v ，用 query 与 key 的关联分数加权 value。多头、多层、残差和前馈网络共同参与计算，不能只凭一个比喻断言“某类文字一定抢走注意力”。注意力权重也不是输出正确性的直接证明。 原始 transformer 论文是特定模型结构与任务的研究，不披露所有后续商业模型的内部实现。“gpt5 之后注意力收敛机制完善”“逻辑太强必然污染注意力导致幻觉”没有可核验来源，本课程不将其作为事实，也不以架构术语替代观察证据。 角色描述、示例、格式约束是否有效取决于模型、任务与评价方式。可明确任务对象和验收标准，而不是认定“专家”称号必有用或已永远没用。若要判断提示效果，用同一组任务对照，记录模型版本、输入、设置和指标，避免从一次对话得出普遍规律。 长上下文研究支持怎样的结论 lost in the middle 在其所测多文档问答和键值检索任务中观察到信息位置会影响表现，长上下文能力不保证有效使用全部信息。其结果有研究模型、任务和年份范围，不能直接宣称所有当前模型都遵守相同曲线，也不能推出“上下文越短必定越好”。 工程上的合理启发是优先提供相关、可定位资料，删去过期或矛盾记录，并保留必要的约束和证据。这是可测试的工作方法，不是对未知内部机制的确定解释。 例子：让模型修登录接口 输入至少包含预期行为、复现请求、实际错误、入口代码及认证链相关实现。仅说“登录坏了”信息不足，把整个仓库和过期讨论全部贴入也不保证解决。先定位 controller→service→认证组件的数据流，再补充缺失文件。 可用以下上下文结构： text 目标：合法凭据返回会话，非法凭据返回约定错误。 复现：具体测试输入、实际响应、环境版本。 约束：密码不得明文保存，保持现有接口兼容。 证据：相关文件路径、日志与最小调用链。 验收：成功、错误密码、锁定账户、会话过期测试。 未知：哪些行为尚未核实，允许通过什么方式核实。 这里是工程示例，不是某产品专用提示语。模型提出修复后仍需检查代码与测试，解释流畅不代表诊断正确。 读论文时区分作者主张和个人推断 先写问题、既有方法、增量贡献，再检查数据集、指标、对照与消融、限制。请模型指出支持结论的具体章节或表格，再人工核对原文；无法访问全文时不能冒充已经阅读。论文改进某个基准，不等于你的生产任务同样获益。 记录三栏：原文证据、由证据可支持的结论、个人待验证假设。对“强化学习让模型一味附和”的笼统说法，已有研究讨论迎合行为，但单一训练环节不是所有模型所有输出的充分解释，需具体实验。 长任务的上下文管理 阶段记录保存已完成内容、当前约束、未解问题与下一步证据入口。重复读取巨大材料会增加处理成本，具体费用还取决于输入输出长度、缓存、模型与工具，不能写成固定增长公式。摘要可能丢细节，关键需求仍链接可追溯原文；切换阶段时更新记录，而不是让陈旧判断无限累积。 参考资料 - attention is all you need：原始 transformer 论文 - lost in the middle：研究任务与位置效应 - simple synthetic data reduces sycophancy：迎合行为研究 模拟面试问题 1. 基础理解：注意力的 q、k、v 分别参与什么计算？ 2. 实际应用：为什么不能用注意力比喻证明某种提示总是有效？ 3. 实际应用：修登录接口应提供哪些最小充分上下文？ 4. 深入追问：论文在特定基准上的结论如何迁移到工程任务验证？ 5. 深入追问：阶段摘要怎样保持证据可追溯而避免过期信息？"
  },
  {
    "id": "generative-engineering-verifiable-workflow",
    "version": "4fa32b2853a9",
    "md": "learning/courses/generative-engineering/verifiable-workflow.md",
    "title": "可验证的生成式开发流程",
    "description": "先明确接口和验收，再用多层验证约束生成结果。",
    "subject": "generative-engineering",
    "kind": "系统课程",
    "order": 2,
    "date": "2026-10-23",
    "tags": [
      "生成式软件工程",
      "工程实践",
      "面试"
    ],
    "minutes": 3,
    "outline": [
      {
        "title": "先约束问题，不要先规定唯一架构",
        "anchor": "先约束问题不要先规定唯一架构",
        "level": 2,
        "text": "  原稿“首先对项目约束、前后端分离”是一条项目偏好，不是软件工程普遍定律。静态博客可以直接 HTML/CSS/JS，复杂独立客户端和 API 可能适合分离；要根据部署、权限、团队和维护需求选择。把必须条件写成可检验行为，把偏好写成可讨论取舍。  例如订单查询改造：接口返回字段与权限规则是约束，使用某种缓存是设计选择，响应时间是要在指定负载下验证的指标。模型输出更多代码不代表完成更多有效工作。 "
      },
      {
        "title": "四类验证器的能力边界",
        "anchor": "四类验证器的能力边界",
        "level": 2,
        "text": "  类型 检查方式 可以发现 不能自动保证 --- --- --- --- 规则验证 Schema、静态规则、文件边界 字段缺失、格式错误 业务内容真实正确 程序验证 执行测试、构建、差分比较 已覆盖条件下的错误 未覆盖场景永远正确 模型评审 根据标准提出判断与疑点 部分遗漏、表达与推理问题 独立客观事实与完全可靠性 形式方法 在模型和前提下证明性质 所表达性质的违反 规范正确及所有现实环境匹配  “模型再评一次”可能与生成器共享错误偏差，不能当成已经获得独立证明。训练 verifiers 的研究在特定数学题场景有效，也不等于通用软件验证器已能判定所有程序性质。 "
      },
      {
        "title": "开发例子：订单越权缺陷",
        "anchor": "开发例子订单越权缺陷",
        "level": 2,
        "text": "  目标是用户 A 不能读取 B 的订单。先写测试：合法会话读取自己订单成功；读取别人的订单返回约定拒绝；不存在订单与未登录有独立语义。规则验证确保响应 Schema，程序测试检查授权行为，人工评审追踪 userId 是否来自可信会话而非请求参数。  text 输入：可信会话 subject=A，请求 orderId=属于B的订单。 预期：拒绝，不返回订单明细。 证据：控制器调用 → 服务层所有者校验 → Repository 查询条件。 反例：把 userId=A 改成 userId=B 不应改变授权主体。   只测“返回 200 且 JSON 正确”会错过越权。测试应与风险相关，而不是机械逐行照抄实现。错误修复还需评估其他调用路径是否绕过相同校验。 "
      },
      {
        "title": "把长任务拆成可交付阶段",
        "anchor": "把长任务拆成可交付阶段",
        "level": 2,
        "text": "  先调查现状与边界，再实现最小完整行为，随后运行相关检查、查看差异并记录限制。每阶段保存修改范围、验证结果和未完成项；一个阶段失败时根据证据修复，不靠反复要求模型“更认真”。  代码生成前列出不能动的目录、接口兼容要求和敏感资源边界。生成后检查差异是否越界、是否添加无依据依赖、是否把示例凭据写入代码。工具成功只说明工具动作完成，截图看起来好也不证明交互可用；分别为结果选择合适证据。 "
      },
      {
        "title": "评估与成本",
        "anchor": "评估与成本",
        "level": 2,
        "text": "  构造包含正常、边界、失败和历史回归的任务集，固定评价标准再比较提示或工作流。记录通过率之外的错误类型、人工审核成本与运行时间；重试越多不一定更省钱，也可能重复错误。高影响结果需要更强证据，但小幅可逆文案无需添加繁重形式证明。  自动检查失败时保留原始错误并判断属于实现、环境还是验收标准，不应为了绿灯删除失败测试。形式证明只证明写出的性质；真实需求有误时，一份漂亮证明同样不能交付正确产品。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Training Verifiers to Solve Math Word Problems - JSON Schema 验证规范 - MIT Software Construction：测试的设计 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：规则、程序、模型和形式验证各自有什么能力边界？ 2. 实际应用：订单查询为什么不能只用状态码和 Schema 验收？ 3. 实际应用：如何把模糊的“代码质量好”转成可检查目标？ 4. 深入追问：模型评审为什么可能和生成器共享错误？ 5. 深入追问：阶段记录怎样帮助失败恢复与成本控制？"
      }
    ],
    "questions": [
      {
        "id": "85ab68761f8dc3c0",
        "text": "基础理解：规则、程序、模型和形式验证各自有什么能力边界？"
      },
      {
        "id": "9ca32cbba4310547",
        "text": "实际应用：订单查询为什么不能只用状态码和 Schema 验收？"
      },
      {
        "id": "41f1c32b0df170fb",
        "text": "实际应用：如何把模糊的“代码质量好”转成可检查目标？"
      },
      {
        "id": "fea3ee7390a8bdf4",
        "text": "深入追问：模型评审为什么可能和生成器共享错误？"
      },
      {
        "id": "ea178425c3ab5d02",
        "text": "深入追问：阶段记录怎样帮助失败恢复与成本控制？"
      }
    ],
    "searchText": "可验证的生成式开发流程 先约束问题，不要先规定唯一架构 原稿“首先对项目约束、前后端分离”是一条项目偏好，不是软件工程普遍定律。静态博客可以直接 html/css/js，复杂独立客户端和 api 可能适合分离；要根据部署、权限、团队和维护需求选择。把必须条件写成可检验行为，把偏好写成可讨论取舍。 例如订单查询改造：接口返回字段与权限规则是约束，使用某种缓存是设计选择，响应时间是要在指定负载下验证的指标。模型输出更多代码不代表完成更多有效工作。 四类验证器的能力边界 类型 检查方式 可以发现 不能自动保证 --- --- --- --- 规则验证 schema、静态规则、文件边界 字段缺失、格式错误 业务内容真实正确 程序验证 执行测试、构建、差分比较 已覆盖条件下的错误 未覆盖场景永远正确 模型评审 根据标准提出判断与疑点 部分遗漏、表达与推理问题 独立客观事实与完全可靠性 形式方法 在模型和前提下证明性质 所表达性质的违反 规范正确及所有现实环境匹配 “模型再评一次”可能与生成器共享错误偏差，不能当成已经获得独立证明。训练 verifiers 的研究在特定数学题场景有效，也不等于通用软件验证器已能判定所有程序性质。 开发例子：订单越权缺陷 目标是用户 a 不能读取 b 的订单。先写测试：合法会话读取自己订单成功；读取别人的订单返回约定拒绝；不存在订单与未登录有独立语义。规则验证确保响应 schema，程序测试检查授权行为，人工评审追踪 userid 是否来自可信会话而非请求参数。 text 输入：可信会话 subject=a，请求 orderid=属于b的订单。 预期：拒绝，不返回订单明细。 证据：控制器调用 → 服务层所有者校验 → repository 查询条件。 反例：把 userid=a 改成 userid=b 不应改变授权主体。 只测“返回 200 且 json 正确”会错过越权。测试应与风险相关，而不是机械逐行照抄实现。错误修复还需评估其他调用路径是否绕过相同校验。 把长任务拆成可交付阶段 先调查现状与边界，再实现最小完整行为，随后运行相关检查、查看差异并记录限制。每阶段保存修改范围、验证结果和未完成项；一个阶段失败时根据证据修复，不靠反复要求模型“更认真”。 代码生成前列出不能动的目录、接口兼容要求和敏感资源边界。生成后检查差异是否越界、是否添加无依据依赖、是否把示例凭据写入代码。工具成功只说明工具动作完成，截图看起来好也不证明交互可用；分别为结果选择合适证据。 评估与成本 构造包含正常、边界、失败和历史回归的任务集，固定评价标准再比较提示或工作流。记录通过率之外的错误类型、人工审核成本与运行时间；重试越多不一定更省钱，也可能重复错误。高影响结果需要更强证据，但小幅可逆文案无需添加繁重形式证明。 自动检查失败时保留原始错误并判断属于实现、环境还是验收标准，不应为了绿灯删除失败测试。形式证明只证明写出的性质；真实需求有误时，一份漂亮证明同样不能交付正确产品。 参考资料 - training verifiers to solve math word problems - json schema 验证规范 - mit software construction：测试的设计 模拟面试问题 1. 基础理解：规则、程序、模型和形式验证各自有什么能力边界？ 2. 实际应用：订单查询为什么不能只用状态码和 schema 验收？ 3. 实际应用：如何把模糊的“代码质量好”转成可检查目标？ 4. 深入追问：模型评审为什么可能和生成器共享错误？ 5. 深入追问：阶段记录怎样帮助失败恢复与成本控制？"
  },
  {
    "id": "embedded-stm32-registers",
    "version": "9e8e80aa9978",
    "md": "learning/courses/embedded/stm32-registers.md",
    "title": "STM32、寄存器与 HAL 的正确边界",
    "description": "区分 CPU 寄存器和外设映射，用 GPIO 理解抽象与硬件。",
    "subject": "embedded",
    "kind": "系统课程",
    "order": 1,
    "date": "2026-10-23",
    "tags": [
      "嵌入式与 STM32",
      "工程实践",
      "面试"
    ],
    "minutes": 4,
    "outline": [
      {
        "title": "芯片、内核与产品系列",
        "anchor": "芯片内核与产品系列",
        "level": 2,
        "text": "  MCU 将处理器、存储和外设集成，常用于特定控制任务，但嵌入式系统并不全是单片机，还可使用应用处理器、FPGA 等。STM32 是 ST 的产品家族，本文聚焦常见 Cortex-M 微控制器，不能将所有 STM32 产品都概括为单个 M 内核方案。  Arm 提供处理器架构与内核 IP，ST 集成具体存储、外设与芯片实现。Cortex-M 是内核家族名称，不能仅由品牌推断引脚、Flash、时钟或浮点能力。Cortex-M4 提供 DSP 能力，FPU 为可选；L0 常用 Cortex-M0+，不是把 F0/L0 都写成 M0。多核型号和系列细分应查确切料号数据手册。  课程以 STM32F103/Cortex-M3 的 GPIO 思路说明，不宣称可原样运行在任何 STM32。F1 与 F4 的 GPIO 配置寄存器不同，复制地址和位域可能直接配置错误。 "
      },
      {
        "title": "两类寄存器别混为一谈",
        "anchor": "两类寄存器别混为一谈",
        "level": 2,
        "text": "  CPU 核心寄存器存操作数、PC、SP、状态或控制信息，可经指令和 CMSIS 接口访问；外设寄存器是映射到地址空间的硬件控制、状态或数据接口。外设寄存器不是普通 RAM，读写可能有副作用，例如读清状态或写 1 清除，必须按手册规定操作。  volatile 表达该对象访问不能像普通不变内存那样被随意消除，但它不是线程同步、原子操作或完整内存屏障的替代。硬件所需顺序还可能依赖专门指令与总线语义；不要把一个关键字当成全部并发保证。 "
      },
      {
        "title": "GPIO 点灯的完整依赖",
        "anchor": "gpio-点灯的完整依赖",
        "level": 2,
        "text": "  正确步骤包括确认板上 LED 的引脚和有效电平、使能对应 GPIO 时钟、配置输出模式、写输出状态。LED 可能低电平点亮，写高不等于所有板子都亮。输出电压、电流限制也不能由软件猜测，连接硬件前查板图与电气规格。  c / STM32F1 HAL 教学片段；要求工程已初始化 HAL/时钟，且板卡允许使用 PC13 / __HAL_RCC_GPIOC_CLK_ENABLE(); GPIO_InitTypeDef init = {0}; init.Pin = GPIO_PIN_13; init.Mode = GPIO_MODE_OUTPUT_PP; init.Speed = GPIO_SPEED_FREQ_LOW; HAL_GPIO_Init(GPIOC, &init); HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET);   该片段只演示初始化顺序，不是无需其他工程文件即可编译的完整固件，也未声称在用户硬件上测试。最后一行是否点亮由板卡接线决定。 "
      },
      {
        "title": "HAL 与寄存器不是能力高低排名",
        "anchor": "hal-与寄存器不是能力高低排名",
        "level": 2,
        "text": "  HAL 用具名结构和函数封装寄存器操作，帮助保持初始化与状态处理的一致接口；LL 和直接寄存器也可用于控制具体路径。HAL 不保证任意性能损失，也不保证跨所有型号无改动移植；实际成本由调用、优化、外设模式和业务频率决定，应测量关键路径。  例如 GPIO set/reset 可通过专门 BSRR 寄存器执行，避免读改写 ODR 引起的某些竞争。即使使用单次硬件置复位，整个业务序列仍不自动原子。HAL 已管理的外设若再直接改配置，需要保持句柄状态、DMA、中断等一致，不能让两个层各自认为自己掌控硬件。 "
      },
      {
        "title": "工程连接与学习路径",
        "anchor": "工程连接与学习路径",
        "level": 2,
        "text": "  先用 HAL 做传感器采集与串口发送，再沿源码定位时钟使能、GPIO 模式及写寄存器位置，与该芯片参考手册核对。网络后端接收串口网关上报时，硬件采样周期与 HTTP 请求周期也不同，需考虑缓冲、时间戳和断线处理；不要阻塞中断服务程序等待网络响应。  调试按供电与板图、引脚复用、时钟、模式、电平逐项验证。没有示波器或板上观测就不能把代码编译成功称为硬件功能验证。原稿“高性能、低功耗、性能最大化”改为具体选型与测量问题，避免宣传词代替规格。 "
      },
      {
        "title": "参考资料",
        "anchor": "参考资料",
        "level": 2,
        "text": "  - Arm CMSIS：内核寄存器访问 - ST 官方 STM32F1 GPIO HAL 源码 - ST 官方 STM32F1 GPIO 头文件 "
      },
      {
        "title": "模拟面试问题",
        "anchor": "模拟面试问题",
        "level": 2,
        "text": "  1. 基础理解：CPU 核心寄存器与外设映射寄存器有什么差别？ 2. 实际应用：点灯为什么要先确认时钟、引脚和有效电平？ 3. 实际应用：volatile 为什么不能替代原子操作与同步？ 4. 深入追问：HAL 与裸寄存器混用可能破坏哪些状态约束？ 5. 深入追问：为什么不能只凭 Cortex-M4 名称推断一定有 FPU？"
      }
    ],
    "questions": [
      {
        "id": "f334ffcaa4d686d2",
        "text": "基础理解：CPU 核心寄存器与外设映射寄存器有什么差别？"
      },
      {
        "id": "8cab0a448a8bc1fe",
        "text": "实际应用：点灯为什么要先确认时钟、引脚和有效电平？"
      },
      {
        "id": "e3ac9e087bfd7cc1",
        "text": "实际应用：volatile 为什么不能替代原子操作与同步？"
      },
      {
        "id": "6c612d4cf863cb8b",
        "text": "深入追问：HAL 与裸寄存器混用可能破坏哪些状态约束？"
      },
      {
        "id": "0eb08dc51b0a6e57",
        "text": "深入追问：为什么不能只凭 Cortex-M4 名称推断一定有 FPU？"
      }
    ],
    "searchText": "stm32、寄存器与 hal 的正确边界 芯片、内核与产品系列 mcu 将处理器、存储和外设集成，常用于特定控制任务，但嵌入式系统并不全是单片机，还可使用应用处理器、fpga 等。stm32 是 st 的产品家族，本文聚焦常见 cortex-m 微控制器，不能将所有 stm32 产品都概括为单个 m 内核方案。 arm 提供处理器架构与内核 ip，st 集成具体存储、外设与芯片实现。cortex-m 是内核家族名称，不能仅由品牌推断引脚、flash、时钟或浮点能力。cortex-m4 提供 dsp 能力，fpu 为可选；l0 常用 cortex-m0+，不是把 f0/l0 都写成 m0。多核型号和系列细分应查确切料号数据手册。 课程以 stm32f103/cortex-m3 的 gpio 思路说明，不宣称可原样运行在任何 stm32。f1 与 f4 的 gpio 配置寄存器不同，复制地址和位域可能直接配置错误。 两类寄存器别混为一谈 cpu 核心寄存器存操作数、pc、sp、状态或控制信息，可经指令和 cmsis 接口访问；外设寄存器是映射到地址空间的硬件控制、状态或数据接口。外设寄存器不是普通 ram，读写可能有副作用，例如读清状态或写 1 清除，必须按手册规定操作。 volatile 表达该对象访问不能像普通不变内存那样被随意消除，但它不是线程同步、原子操作或完整内存屏障的替代。硬件所需顺序还可能依赖专门指令与总线语义；不要把一个关键字当成全部并发保证。 gpio 点灯的完整依赖 正确步骤包括确认板上 led 的引脚和有效电平、使能对应 gpio 时钟、配置输出模式、写输出状态。led 可能低电平点亮，写高不等于所有板子都亮。输出电压、电流限制也不能由软件猜测，连接硬件前查板图与电气规格。 c / stm32f1 hal 教学片段；要求工程已初始化 hal/时钟，且板卡允许使用 pc13 / __hal_rcc_gpioc_clk_enable(); gpio_inittypedef init = {0}; init.pin = gpio_pin_13; init.mode = gpio_mode_output_pp; init.speed = gpio_speed_freq_low; hal_gpio_init(gpioc, &init); hal_gpio_writepin(gpioc, gpio_pin_13, gpio_pin_reset); 该片段只演示初始化顺序，不是无需其他工程文件即可编译的完整固件，也未声称在用户硬件上测试。最后一行是否点亮由板卡接线决定。 hal 与寄存器不是能力高低排名 hal 用具名结构和函数封装寄存器操作，帮助保持初始化与状态处理的一致接口；ll 和直接寄存器也可用于控制具体路径。hal 不保证任意性能损失，也不保证跨所有型号无改动移植；实际成本由调用、优化、外设模式和业务频率决定，应测量关键路径。 例如 gpio set/reset 可通过专门 bsrr 寄存器执行，避免读改写 odr 引起的某些竞争。即使使用单次硬件置复位，整个业务序列仍不自动原子。hal 已管理的外设若再直接改配置，需要保持句柄状态、dma、中断等一致，不能让两个层各自认为自己掌控硬件。 工程连接与学习路径 先用 hal 做传感器采集与串口发送，再沿源码定位时钟使能、gpio 模式及写寄存器位置，与该芯片参考手册核对。网络后端接收串口网关上报时，硬件采样周期与 http 请求周期也不同，需考虑缓冲、时间戳和断线处理；不要阻塞中断服务程序等待网络响应。 调试按供电与板图、引脚复用、时钟、模式、电平逐项验证。没有示波器或板上观测就不能把代码编译成功称为硬件功能验证。原稿“高性能、低功耗、性能最大化”改为具体选型与测量问题，避免宣传词代替规格。 参考资料 - arm cmsis：内核寄存器访问 - st 官方 stm32f1 gpio hal 源码 - st 官方 stm32f1 gpio 头文件 模拟面试问题 1. 基础理解：cpu 核心寄存器与外设映射寄存器有什么差别？ 2. 实际应用：点灯为什么要先确认时钟、引脚和有效电平？ 3. 实际应用：volatile 为什么不能替代原子操作与同步？ 4. 深入追问：hal 与裸寄存器混用可能破坏哪些状态约束？ 5. 深入追问：为什么不能只凭 cortex-m4 名称推断一定有 fpu？"
  },
  {
    "id": "project-538ddb941052",
    "version": "7bb7656b1be3",
    "md": "learning/项目学习/README.md",
    "title": "项目学习目录说明",
    "description": "这里是 跟着项目课程学做真实后端项目 的材料区，与根目录的按主题整理的知识笔记（java/、计算机网络/ 等）定位不同： 知识笔记回答\"某个知识点是什么\"，这里回答\"在一个真实项目里怎么落地\"。",
    "subject": "projects",
    "kind": "项目原文",
    "order": 0,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 2,
    "outline": [
      {
        "title": "目录结构",
        "anchor": "目录结构",
        "level": 2,
        "text": "  text 项目学习/ ├── 智能园区点餐功能/ ← 跟着《苍穹外卖》课程做的园区点餐系统（Spring Boot 3 + MySQL + Redis） │ ├── 讲义/讲义/day01 day12/ ← 课程讲义（md + 截图 assets） │ ├── 资料/资料/ ← 课程配套资源（nginx 前端环境、原型、安装包等） │ ├── 登录功能的总结.md ← 自己的实践笔记：登录 + JWT 拦截器落地 │ ├── 启动项目服务流程.md ← 自己的实践笔记：nginx/MySQL/Redis/后端 的启动顺序 │ └── jwt.txt ← 空文件，预留 └── 临时代码试验区/ ← 随手试代码的地方（目前为空）  "
      },
      {
        "title": "与知识笔记的对应关系",
        "anchor": "与知识笔记的对应关系",
        "level": 2,
        "text": "  项目实践 对应主题笔记 --- --- 登录 + JWT 拦截器 + BaseContext java/34-密码安全与JWT鉴权.md Nginx 前端反向代理 java/28-Tomcat与Servlet及Nginx.md Controller/Service/Mapper 分层 java/25 - 31 MySQL 建表 + 索引 java/32-MySQL基础.md "
      },
      {
        "title": "⚠️ 约定",
        "anchor": "约定",
        "level": 2,
        "text": "  - 安装包（.exe）已加入 .gitignore ，不进 GitHub——软件从官网重新下载即可，仓库只存学习材料。 - 数据库密码等敏感信息 不写进任何 md 文件 ； jwt.txt 保持空文件或只放本地临时内容。"
      }
    ],
    "questions": [],
    "searchText": "项目学习目录说明 这里是 跟着项目课程学做真实后端项目 的材料区，与根目录的按主题整理的知识笔记（java/、计算机网络/ 等）定位不同： 知识笔记回答\"某个知识点是什么\"，这里回答\"在一个真实项目里怎么落地\"。 目录结构 text 项目学习/ ├── 智能园区点餐功能/ ← 跟着《苍穹外卖》课程做的园区点餐系统（spring boot 3 + mysql + redis） │ ├── 讲义/讲义/day01 day12/ ← 课程讲义（md + 截图 assets） │ ├── 资料/资料/ ← 课程配套资源（nginx 前端环境、原型、安装包等） │ ├── 登录功能的总结.md ← 自己的实践笔记：登录 + jwt 拦截器落地 │ ├── 启动项目服务流程.md ← 自己的实践笔记：nginx/mysql/redis/后端 的启动顺序 │ └── jwt.txt ← 空文件，预留 └── 临时代码试验区/ ← 随手试代码的地方（目前为空） 与知识笔记的对应关系 项目实践 对应主题笔记 --- --- 登录 + jwt 拦截器 + basecontext java/34-密码安全与jwt鉴权.md nginx 前端反向代理 java/28-tomcat与servlet及nginx.md controller/service/mapper 分层 java/25 - 31 mysql 建表 + 索引 java/32-mysql基础.md ⚠️ 约定 - 安装包（.exe）已加入 .gitignore ，不进 github——软件从官网重新下载即可，仓库只存学习材料。 - 数据库密码等敏感信息 不写进任何 md 文件 ； jwt.txt 保持空文件或只放本地临时内容。"
  },
  {
    "id": "project-275997a26535",
    "version": "2d055be1bfe4",
    "md": "learning/项目学习/智能园区点餐功能/启动项目服务流程.md",
    "title": "项目启动与关闭操作手册",
    "description": "项目：智能园区餐饮 Agent 平台 适用环境：Windows、IntelliJ IDEA、Windows MySQL、Docker Redis、Nginx 整理日期：2026-10-12",
    "subject": "projects",
    "kind": "项目原文",
    "order": 1,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 8,
    "outline": [
      {
        "title": "1. 服务关系",
        "anchor": "1-服务关系",
        "level": 2,
        "text": "  项目运行时涉及以下服务：  text 浏览器 ↓ Nginx（前端静态文件和反向代理） ↓ Spring Boot（127.0.0.1:8080） ├─ MySQL（127.0.0.1:3306） └─ Redis（Docker容器 campus-redis，127.0.0.1:6379）   推荐启动顺序：  text MySQL ↓ Docker Desktop ↓ Redis容器 ↓ Spring Boot后端 ↓ Nginx ↓ 浏览器访问前端  "
      },
      {
        "title": "2. 启动 MySQL",
        "anchor": "2-启动-mysql",
        "level": 2,
        "text": "  以管理员身份打开 PowerShell，查询实际服务名：  powershell Get-Service mysql   假设查询到的服务名是 MySQL80 ：  powershell Start-Service -Name MySQL80   如果实际名称是 MySQL84 或其他名称，请使用查询结果中的 Name 。  确认服务状态：  powershell Get-Service -Name MySQL80   正常状态：  text Running   也可以检查数据库端口：  powershell Test-NetConnection 127.0.0.1 -Port 3306   正常结果包含：  text TcpTestSucceeded : True  "
      },
      {
        "title": "3. 启动 Redis",
        "anchor": "3-启动-redis",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 启动 Docker Desktop",
        "anchor": "31-启动-docker-desktop",
        "level": 3,
        "text": "  打开 Docker Desktop，等待 Docker Engine 完全启动。 "
      },
      {
        "title": "3.2 启动已有 Redis 容器",
        "anchor": "32-启动已有-redis-容器",
        "level": 3,
        "text": "  powershell docker start campus-redis   正常会返回：  text campus-redis  "
      },
      {
        "title": "3.3 验证 Redis",
        "anchor": "33-验证-redis",
        "level": 3,
        "text": "  powershell docker exec campus-redis redis-cli ping   正常返回：  text PONG   不需要再次执行 docker run 。 campus-redis 已经创建，平时只需 start 和 stop 。 "
      },
      {
        "title": "4. 启动 Spring Boot 后端",
        "anchor": "4-启动-spring-boot-后端",
        "level": 2,
        "text": "  使用 IntelliJ IDEA 打开项目：  text YOUR_PROJECT_DIR   在 IDEA 右上角确认运行配置为：  text SkyApplication   点击绿色 Run 按钮。  控制台正常日志应包含：  text The following 1 profile is active: \"local\" Tomcat started on port 8080 Started SkyApplication   后端健康检查地址：  text http://127.0.0.1:8080/api/health   注意：  - 应运行 SkyApplication ； - 不要运行 PasswordGenerator ； - PasswordGenerator 只是用于生成初始 BCrypt 密码哈希的临时工具。 "
      },
      {
        "title": "5. 启动 Nginx",
        "anchor": "5-启动-nginx",
        "level": 2,
        "text": "  打开 PowerShell，进入 Nginx 安装目录：  powershell cd D:\\Nginx\\nginx   检查配置：  powershell .\\nginx.exe -t   正常结果：  text syntax is ok test is successful   启动 Nginx：  powershell .\\nginx.exe   检查进程：  powershell Get-Process nginx -ErrorAction SilentlyContinue   通常会看到两个 Nginx 进程：一个主进程和一个工作进程。  PowerShell 不会默认运行当前目录中的程序，因此必须写：  powershell .\\nginx.exe   不能只写：  powershell nginx.exe  "
      },
      {
        "title": "6. 打开前端并登录",
        "anchor": "6-打开前端并登录",
        "level": 2,
        "text": "  浏览器访问：  text http://127.0.0.1/   管理端测试账号：  text 用户名：admin 密码：admin123   不要使用下面的地址寻找前端页面：  text http://127.0.0.1:8080/   8080 是 Spring Boot 后端端口，而且后端没有定义根路径 / 。 "
      },
      {
        "title": "7. 常用访问地址",
        "anchor": "7-常用访问地址",
        "level": 2,
        "text": "  地址 用途 --- --- http://127.0.0.1/ Nginx托管的前端页面 http://127.0.0.1:8080/api/health 直接检查 Spring Boot POST http://127.0.0.1:8080/api/admin/employee/login 直接访问后端登录接口 POST http://127.0.0.1/api/admin/employee/login 通过 Nginx 访问登录接口  本项目的 Spring Boot 绑定 127.0.0.1 。部分 Windows 环境可能把 localhost 优先解析为 IPv6 的 ::1 ，因此本地调试优先使用 127.0.0.1 。 "
      },
      {
        "title": "8. 快速启动检查表",
        "anchor": "8-快速启动检查表",
        "level": 2,
        "text": "  - [ ] MySQL服务状态为 Running - [ ] Docker Desktop 已启动 - [ ] campus-redis 容器已启动 - [ ] redis-cli ping 返回 PONG - [ ] IDEA运行的是 SkyApplication - [ ] 后端日志出现 Started SkyApplication - [ ] /api/health 可以访问 - [ ] Nginx配置检查成功 - [ ] Nginx进程正在运行 - [ ] http://127.0.0.1/ 可以打开 - [ ] admin / admin123 可以登录 "
      },
      {
        "title": "9. 日常启动时不需要重复的工作",
        "anchor": "9-日常启动时不需要重复的工作",
        "level": 2,
        "text": "  以下工作只在初始化或相关内容变化时执行，日常启动不需要重复：  - 不需要重新执行建表 SQL； - 不需要重新插入管理员账号； - 不需要重新生成 BCrypt 密码； - 不需要重新创建 Redis 容器； - 前端代码没有变化时，不需要重新执行 npm run build ； - Nginx配置没有变化时，不需要重新配置； - 后端依赖没有变化时，不需要重新导入 Maven 项目。  MySQL数据保存在数据库中；停止服务不会删除表。Redis容器停止后仍然存在；再次执行 docker start campus-redis 即可恢复运行。 "
      },
      {
        "title": "10. 推荐关闭顺序",
        "anchor": "10-推荐关闭顺序",
        "level": 2,
        "text": " "
      },
      {
        "title": "10.1 停止 Spring Boot",
        "anchor": "101-停止-spring-boot",
        "level": 3,
        "text": "  在 IDEA 的 Run 窗口点击红色停止按钮，或者按：  text Ctrl + F2  "
      },
      {
        "title": "10.2 停止 Nginx",
        "anchor": "102-停止-nginx",
        "level": 3,
        "text": "  powershell cd D:\\Nginx\\nginx .\\nginx.exe -s quit   如果 logs/nginx.pid 丢失，但 Nginx进程仍然存在：  powershell Stop-Process -Name nginx   确认：  powershell Get-Process nginx -ErrorAction SilentlyContinue   没有输出表示已经停止。 "
      },
      {
        "title": "10.3 停止 Redis",
        "anchor": "103-停止-redis",
        "level": 3,
        "text": "  powershell docker stop campus-redis   这只会停止容器，不会删除容器和数据。 "
      },
      {
        "title": "10.4 停止 MySQL",
        "anchor": "104-停止-mysql",
        "level": 3,
        "text": "  以管理员身份运行 PowerShell。假设服务名为 MySQL80 ：  powershell Stop-Service -Name MySQL80   确认：  powershell Get-Service -Name MySQL80   状态为 Stopped 表示已经关闭。  如果当前位于 mysql 命令行，输入：  sql exit;   只会退出 MySQL客户端，不会停止数据库服务器。 "
      },
      {
        "title": "11. 一页式命令速查",
        "anchor": "11-一页式命令速查",
        "level": 2,
        "text": " "
      },
      {
        "title": "启动",
        "anchor": "启动",
        "level": 3,
        "text": "  powershell 管理员 PowerShell：使用实际 MySQL 服务名 Start-Service -Name MySQL80  Docker Desktop 启动完成后 docker start campus-redis docker exec campus-redis redis-cli ping  在 IDEA 中运行 SkyApplication  普通 PowerShell cd D:\\Nginx\\nginx .\\nginx.exe -t .\\nginx.exe  "
      },
      {
        "title": "关闭",
        "anchor": "关闭",
        "level": 3,
        "text": "  powershell 先在 IDEA 中停止 SkyApplication  cd D:\\Nginx\\nginx .\\nginx.exe -s quit  docker stop campus-redis  管理员 PowerShell：使用实际 MySQL 服务名 Stop-Service -Name MySQL80  "
      }
    ],
    "questions": [],
    "searchText": "项目启动与关闭操作手册 项目：智能园区餐饮 agent 平台 适用环境：windows、intellij idea、windows mysql、docker redis、nginx 整理日期：2026-10-12 1. 服务关系 项目运行时涉及以下服务： text 浏览器 ↓ nginx（前端静态文件和反向代理） ↓ spring boot（127.0.0.1:8080） ├─ mysql（127.0.0.1:3306） └─ redis（docker容器 campus-redis，127.0.0.1:6379） 推荐启动顺序： text mysql ↓ docker desktop ↓ redis容器 ↓ spring boot后端 ↓ nginx ↓ 浏览器访问前端 2. 启动 mysql 以管理员身份打开 powershell，查询实际服务名： powershell get-service mysql 假设查询到的服务名是 mysql80 ： powershell start-service -name mysql80 如果实际名称是 mysql84 或其他名称，请使用查询结果中的 name 。 确认服务状态： powershell get-service -name mysql80 正常状态： text running 也可以检查数据库端口： powershell test-netconnection 127.0.0.1 -port 3306 正常结果包含： text tcptestsucceeded : true 3. 启动 redis 3.1 启动 docker desktop 打开 docker desktop，等待 docker engine 完全启动。 3.2 启动已有 redis 容器 powershell docker start campus-redis 正常会返回： text campus-redis 3.3 验证 redis powershell docker exec campus-redis redis-cli ping 正常返回： text pong 不需要再次执行 docker run 。 campus-redis 已经创建，平时只需 start 和 stop 。 4. 启动 spring boot 后端 使用 intellij idea 打开项目： text your_project_dir 在 idea 右上角确认运行配置为： text skyapplication 点击绿色 run 按钮。 控制台正常日志应包含： text the following 1 profile is active: \"local\" tomcat started on port 8080 started skyapplication 后端健康检查地址： text http://127.0.0.1:8080/api/health 注意： - 应运行 skyapplication ； - 不要运行 passwordgenerator ； - passwordgenerator 只是用于生成初始 bcrypt 密码哈希的临时工具。 5. 启动 nginx 打开 powershell，进入 nginx 安装目录： powershell cd d:\\nginx\\nginx 检查配置： powershell .\\nginx.exe -t 正常结果： text syntax is ok test is successful 启动 nginx： powershell .\\nginx.exe 检查进程： powershell get-process nginx -erroraction silentlycontinue 通常会看到两个 nginx 进程：一个主进程和一个工作进程。 powershell 不会默认运行当前目录中的程序，因此必须写： powershell .\\nginx.exe 不能只写： powershell nginx.exe 6. 打开前端并登录 浏览器访问： text http://127.0.0.1/ 管理端测试账号： text 用户名：admin 密码：admin123 不要使用下面的地址寻找前端页面： text http://127.0.0.1:8080/ 8080 是 spring boot 后端端口，而且后端没有定义根路径 / 。 7. 常用访问地址 地址 用途 --- --- http://127.0.0.1/ nginx托管的前端页面 http://127.0.0.1:8080/api/health 直接检查 spring boot post http://127.0.0.1:8080/api/admin/employee/login 直接访问后端登录接口 post http://127.0.0.1/api/admin/employee/login 通过 nginx 访问登录接口 本项目的 spring boot 绑定 127.0.0.1 。部分 windows 环境可能把 localhost 优先解析为 ipv6 的 ::1 ，因此本地调试优先使用 127.0.0.1 。 8. 快速启动检查表 - [ ] mysql服务状态为 running - [ ] docker desktop 已启动 - [ ] campus-redis 容器已启动 - [ ] redis-cli ping 返回 pong - [ ] idea运行的是 skyapplication - [ ] 后端日志出现 started skyapplication - [ ] /api/health 可以访问 - [ ] nginx配置检查成功 - [ ] nginx进程正在运行 - [ ] http://127.0.0.1/ 可以打开 - [ ] admin / admin123 可以登录 9. 日常启动时不需要重复的工作 以下工作只在初始化或相关内容变化时执行，日常启动不需要重复： - 不需要重新执行建表 sql； - 不需要重新插入管理员账号； - 不需要重新生成 bcrypt 密码； - 不需要重新创建 redis 容器； - 前端代码没有变化时，不需要重新执行 npm run build ； - nginx配置没有变化时，不需要重新配置； - 后端依赖没有变化时，不需要重新导入 maven 项目。 mysql数据保存在数据库中；停止服务不会删除表。redis容器停止后仍然存在；再次执行 docker start campus-redis 即可恢复运行。 10. 推荐关闭顺序 10.1 停止 spring boot 在 idea 的 run 窗口点击红色停止按钮，或者按： text ctrl + f2 10.2 停止 nginx powershell cd d:\\nginx\\nginx .\\nginx.exe -s quit 如果 logs/nginx.pid 丢失，但 nginx进程仍然存在： powershell stop-process -name nginx 确认： powershell get-process nginx -erroraction silentlycontinue 没有输出表示已经停止。 10.3 停止 redis powershell docker stop campus-redis 这只会停止容器，不会删除容器和数据。 10.4 停止 mysql 以管理员身份运行 powershell。假设服务名为 mysql80 ： powershell stop-service -name mysql80 确认： powershell get-service -name mysql80 状态为 stopped 表示已经关闭。 如果当前位于 mysql 命令行，输入： sql exit; 只会退出 mysql客户端，不会停止数据库服务器。 11. 一页式命令速查 启动 powershell 管理员 powershell：使用实际 mysql 服务名 start-service -name mysql80 docker desktop 启动完成后 docker start campus-redis docker exec campus-redis redis-cli ping 在 idea 中运行 skyapplication 普通 powershell cd d:\\nginx\\nginx .\\nginx.exe -t .\\nginx.exe 关闭 powershell 先在 idea 中停止 skyapplication cd d:\\nginx\\nginx .\\nginx.exe -s quit docker stop campus-redis 管理员 powershell：使用实际 mysql 服务名 stop-service -name mysql80"
  },
  {
    "id": "project-54ee19b2c487",
    "version": "45b6af38debb",
    "md": "learning/项目学习/智能园区点餐功能/登录功能的总结.md",
    "title": "管理端登录链路学习笔记",
    "description": "整理日期：2026-10-12 项目：智能园区餐饮 Agent 平台 本阶段目标：让部署在 Nginx 中的前端能够调用 Spring Boot 后端，使用数据库中的管理员账号完成登录并获得 JWT。",
    "subject": "projects",
    "kind": "项目原文",
    "order": 1,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 30,
    "outline": [
      {
        "title": "1. 本阶段完成结果",
        "anchor": "1-本阶段完成结果",
        "level": 2,
        "text": "  目前已经打通以下链路：  mermaid flowchart LR A[前端登录表单] -- POST /api/admin/employee/login B[Nginx] B -- C[EmployeeController] C -- D[EmployeeServiceImpl] D -- E[EmployeeMapper] E -- F[(MySQL employee表)] D -- G[BCrypt密码验证] C -- H[JwtUtil签发JWT] H -- I[EmployeeLoginVO] I -- A   实际测试已经返回：  json { \"code\": 1, \"msg\": \"\", \"data\": { \"id\": 1, \"name\": \"管理员\", \"role\": \"admin\", \"token\": \"eyJ...\" } }   这说明以下环节均已正常工作：  - Spring Boot 监听 127.0.0.1:8080 ； - MyBatis-Plus 可以查询 MySQL； - 数据库中存在启用状态的管理员； - BCrypt 可以验证密码； - JJWT 0.13.0 可以签发 JWT； - Controller 能按前端合同返回统一 JSON。  当前只完成了“登录和签发令牌”。JWT 拦截器、ThreadLocal 用户上下文和其他业务接口尚未实现。 "
      },
      {
        "title": "2. 项目运行与单独运行 Java 类",
        "anchor": "2-项目运行与单独运行-java-类",
        "level": 2,
        "text": "  项目中可以有多个 main() 方法，但运行其中一个不会自动运行其他入口。 "
      },
      {
        "title": "2.1 运行整个后端",
        "anchor": "21-运行整个后端",
        "level": 3,
        "text": "  运行：  java com.sky.SkyApplication.main()   作用：  - 启动 Spring 容器； - 创建 Controller、Service、Mapper、配置类等 Bean； - 启动内嵌 Tomcat； - 监听 8080 端口； - 持续等待 HTTP 请求。  成功日志包含：  text Tomcat started on port 8080 Started SkyApplication  "
      },
      {
        "title": "2.2 单独运行密码生成器",
        "anchor": "22-单独运行密码生成器",
        "level": 3,
        "text": "  运行：  java com.sky.PasswordGenerator.main()   作用：只生成一次 BCrypt 密码哈希，打印完成后进程结束。  它位于：  text backend/sky-server/src/test/java/com/sky/PasswordGenerator.java   启动 SkyApplication 不会自动执行 PasswordGenerator ，因为它们是两个独立的 Java 程序入口。 "
      },
      {
        "title": "3. 环境连接验证",
        "anchor": "3-环境连接验证",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 MySQL",
        "anchor": "31-mysql",
        "level": 3,
        "text": "  Spring Boot 日志中出现以下内容，说明连接池已经取得真实数据库连接：  text HikariPool-1 - Added connection HikariPool-1 - Start completed   数据库使用：  text campus_dining  "
      },
      {
        "title": "3.2 Redis",
        "anchor": "32-redis",
        "level": 3,
        "text": "  Redis 通过 Docker 容器运行时，可以这样检查：  powershell docker exec campus-redis redis-cli ping   正常返回：  text PONG   本阶段的登录接口暂未使用 Redis，但后续缓存、Token 状态或业务数据可能使用。 "
      },
      {
        "title": "4. 准备管理员账号",
        "anchor": "4-准备管理员账号",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 为什么不能保存明文密码",
        "anchor": "41-为什么不能保存明文密码",
        "level": 3,
        "text": "  数据库不应保存：  text admin123   而应保存 BCrypt 生成的哈希：  text $2a$10$...   即使数据库泄露，也不能直接从哈希还原原始密码。 "
      },
      {
        "title": "4.2 BCrypt 配置",
        "anchor": "42-bcrypt-配置",
        "level": 3,
        "text": "  依赖添加在 sky-server/pom.xml ：  xml  org.springframework.security spring-security-crypto    配置类：  java package com.sky.config;  import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; import org.springframework.security.crypto.password.PasswordEncoder;  @Configuration public class PasswordConfiguration {  @Bean public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); } }   @Bean 让 Spring 管理唯一的 PasswordEncoder 对象，Service 可以通过构造方法注入它。 "
      },
      {
        "title": "4.3 生成初始密码哈希",
        "anchor": "43-生成初始密码哈希",
        "level": 3,
        "text": "  java package com.sky;  import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;  public class PasswordGenerator {  public static void main(String[] args) { BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();  String result = encoder.encode(\"admin123\"); System.out.println(result); } }   BCrypt 每次 encode() 都会生成不同结果，因此不能重新编码后用字符串相等比较。  正确验证方式：  java passwordEncoder.matches(rawPassword, storedHash);  "
      },
      {
        "title": "4.4 数据库记录",
        "anchor": "44-数据库记录",
        "level": 3,
        "text": "  先检查账号：  sql SELECT id, name, username, phone, status FROM employee WHERE username = 'admin';   没有账号时插入：  sql INSERT INTO employee (name, username, password, phone, status) VALUES ('管理员', 'admin', '这里填写完整BCrypt哈希', 'PHONE_EXAMPLE', 1);   其中：  - 用户名： admin ； - 登录时输入的原始密码： admin123 ； - 数据库存储：完整 BCrypt 哈希； - status = 1 ：账号启用。 "
      },
      {
        "title": "5. 三个 Maven 模块的职责",
        "anchor": "5-三个-maven-模块的职责",
        "level": 2,
        "text": "  text backend ├─ sky-common 通用返回对象、通用异常等 ├─ sky-pojo Entity、DTO、VO └─ sky-server Controller、Service、Mapper、配置和启动类   本阶段新增内容：  text sky-common └─ com.sky.exception.BusinessException  sky-pojo ├─ com.sky.entity.Employee ├─ com.sky.dto.EmployeeLoginDTO └─ com.sky.vo.EmployeeLoginVO  sky-server ├─ com.sky.config.PasswordConfiguration ├─ com.sky.mapper.EmployeeMapper ├─ com.sky.service.EmployeeService ├─ com.sky.service.impl.EmployeeServiceImpl ├─ com.sky.properties.JwtProperties ├─ com.sky.util.JwtUtil └─ com.sky.controller.admin.EmployeeController  "
      },
      {
        "title": "6. Entity：数据库表在 Java 中的表示",
        "anchor": "6-entity数据库表在-java-中的表示",
        "level": 2,
        "text": "  文件：  text backend/sky-pojo/src/main/java/com/sky/entity/Employee.java   java package com.sky.entity;  import com.baomidou.mybatisplus.annotation.IdType; import com.baomidou.mybatisplus.annotation.TableId; import com.baomidou.mybatisplus.annotation.TableName; import lombok.Data;  import java.time.LocalDateTime;  @Data @TableName(\"employee\") public class Employee {  @TableId(type = IdType.AUTO) private Long id; private String name; private String username; private String password; private String phone; private Integer status; private LocalDateTime createTime; private LocalDateTime updateTime; private Long createUser; private Long updateUser; }   映射关系示例：  Java 属性 数据库字段 --- --- createTime create_time updateTime update_time createUser create_user updateUser update_user  application-local.yml 中的 map-underscore-to-camel-case: true 负责下划线字段与驼峰属性的自动映射。 "
      },
      {
        "title": "7. Mapper：访问数据库",
        "anchor": "7-mapper访问数据库",
        "level": 2,
        "text": "  文件：  text backend/sky-server/src/main/java/com/sky/mapper/EmployeeMapper.java   java package com.sky.mapper;  import com.baomidou.mybatisplus.core.mapper.BaseMapper; import com.sky.entity.Employee; import org.apache.ibatis.annotations.Mapper;  @Mapper public interface EmployeeMapper extends BaseMapper { }   虽然接口中没有手写方法，但 BaseMapper 已提供基本的增删改查方法。MyBatis-Plus 会在程序启动时生成代理实现，不需要创建 EmployeeMapperImpl 。  创建 Mapper 后，原来的启动警告：  text No MyBatis mapper was found in '[com.sky]' package   随之消失。 "
      },
      {
        "title": "8. DTO：接收登录请求",
        "anchor": "8-dto接收登录请求",
        "level": 2,
        "text": "  文件：  text backend/sky-pojo/src/main/java/com/sky/dto/EmployeeLoginDTO.java   java package com.sky.dto;  import jakarta.validation.constraints.NotBlank; import jakarta.validation.constraints.Size; import lombok.Data;  @Data public class EmployeeLoginDTO {  @NotBlank(message = \"用户名不能为空\") @Size(max = 50, message = \"用户名长度不能超过50个字符\") private String username;  @NotBlank(message = \"密码不能为空\") @Size(max = 100, message = \"密码长度不能超过100个字符\") private String password; }   前端请求 JSON：  json { \"username\": \"admin\", \"password\": \"admin123\" }   Spring Boot 3 使用 jakarta.validation ，不是旧项目中的 javax.validation 。 "
      },
      {
        "title": "9. 业务异常和统一异常处理",
        "anchor": "9-业务异常和统一异常处理",
        "level": 2,
        "text": " "
      },
      {
        "title": "9.1 业务异常",
        "anchor": "91-业务异常",
        "level": 3,
        "text": "  文件：  text backend/sky-common/src/main/java/com/sky/exception/BusinessException.java   java package com.sky.exception;  public class BusinessException extends RuntimeException {  public BusinessException(String message) { super(message); } }   业务错误可以这样抛出：  java throw new BusinessException(\"用户名或密码错误\");  "
      },
      {
        "title": "9.2 全局处理",
        "anchor": "92-全局处理",
        "level": 3,
        "text": "  在 GlobalExceptionHandler 中加入：  java @ExceptionHandler(BusinessException.class) public Result business(BusinessException exception) { return Result.error(exception.getMessage()); }   业务失败返回：  json { \"code\": 0, \"msg\": \"用户名或密码错误\", \"data\": null }   导入语句显示为灰色，通常表示“已经导入但暂未使用”，并不代表编译错误。添加异常处理方法后，该导入就会被使用。 "
      },
      {
        "title": "10. Service：登录核心业务",
        "anchor": "10-service登录核心业务",
        "level": 2,
        "text": " "
      },
      {
        "title": "10.1 接口",
        "anchor": "101-接口",
        "level": 3,
        "text": "  java package com.sky.service;  import com.sky.dto.EmployeeLoginDTO; import com.sky.entity.Employee;  public interface EmployeeService {  Employee login(EmployeeLoginDTO loginDTO); }   接口定义能力，实现类负责具体逻辑。 "
      },
      {
        "title": "10.2 实现类",
        "anchor": "102-实现类",
        "level": 3,
        "text": "  java package com.sky.service.impl;  import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper; import com.sky.dto.EmployeeLoginDTO; import com.sky.entity.Employee; import com.sky.exception.BusinessException; import com.sky.mapper.EmployeeMapper; import com.sky.service.EmployeeService; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.stereotype.Service;  @Service public class EmployeeServiceImpl implements EmployeeService {  private final EmployeeMapper employeeMapper; private final PasswordEncoder passwordEncoder;  public EmployeeServiceImpl( EmployeeMapper employeeMapper, PasswordEncoder passwordEncoder) { this.employeeMapper = employeeMapper; this.passwordEncoder = passwordEncoder; }  @Override public Employee login(EmployeeLoginDTO loginDTO) { Employee employee = employeeMapper.selectOne( new LambdaQueryWrapper () .eq( Employee::getUsername, loginDTO.getUsername().trim() ) );  if (employee == null) { throw new BusinessException(\"用户名或密码错误\"); }  boolean passwordCorrect = passwordEncoder.matches( loginDTO.getPassword(), employee.getPassword() );  if (!passwordCorrect) { throw new BusinessException(\"用户名或密码错误\"); }  if (!Integer.valueOf(1).equals(employee.getStatus())) { throw new BusinessException(\"账号已停用\"); }  return employee; } }   执行顺序：  1. 根据用户名查询数据库； 2. 判断账号是否存在； 3. 使用 BCrypt 验证密码； 4. 检查账号是否启用； 5. 返回已经通过验证的 Employee 。 "
      },
      {
        "title": "11. VO：只返回前端需要的数据",
        "anchor": "11-vo只返回前端需要的数据",
        "level": 2,
        "text": "  文件：  text backend/sky-pojo/src/main/java/com/sky/vo/EmployeeLoginVO.java   java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class EmployeeLoginVO {  private Long id; private String name; private String role; private String token; }   不能直接将 Employee 返回给前端，因为 Employee 中包含密码哈希。VO 只保留前端登录会话需要的字段。 "
      },
      {
        "title": "12. JWT 配置",
        "anchor": "12-jwt-配置",
        "level": 2,
        "text": " "
      },
      {
        "title": "12.1 YAML 配置",
        "anchor": "121-yaml-配置",
        "level": 3,
        "text": "  在 application.yml 中加入：  yaml sky: jwt: secret-key: ${JWT_SECRET_KEY:本地开发用的至少32字节密钥} ttl: ${JWT_TTL:2h}   正式部署时应通过 JWT_SECRET_KEY 环境变量提供随机密钥，不应使用本地默认值。 "
      },
      {
        "title": "12.2 配置属性类",
        "anchor": "122-配置属性类",
        "level": 3,
        "text": "  java package com.sky.properties;  import lombok.Data; import org.springframework.boot.context.properties.ConfigurationProperties; import org.springframework.stereotype.Component;  import java.time.Duration;  @Data @Component @ConfigurationProperties(prefix = \"sky.jwt\") public class JwtProperties {  private String secretKey; private Duration ttl = Duration.ofHours(2); }   Spring 自动映射：  text sky.jwt.secret-key → secretKey sky.jwt.ttl → ttl  "
      },
      {
        "title": "13. JwtUtil：签发和解析令牌",
        "anchor": "13-jwtutil签发和解析令牌",
        "level": 2,
        "text": "  java package com.sky.util;  import com.sky.properties.JwtProperties; import io.jsonwebtoken.Claims; import io.jsonwebtoken.JwtParser; import io.jsonwebtoken.Jwts; import io.jsonwebtoken.security.Keys; import org.springframework.stereotype.Component;  import javax.crypto.SecretKey; import java.nio.charset.StandardCharsets; import java.time.Duration; import java.time.Instant; import java.util.Date;  @Component public class JwtUtil {  private static final String ISSUER = \"campus-dining\";  private final SecretKey signingKey; private final Duration ttl; private final JwtParser jwtParser;  public JwtUtil(JwtProperties jwtProperties) { this.signingKey = Keys.hmacShaKeyFor( jwtProperties.getSecretKey() .getBytes(StandardCharsets.UTF_8) );  this.ttl = jwtProperties.getTtl();  this.jwtParser = Jwts.parser() .requireIssuer(ISSUER) .verifyWith(signingKey) .build(); }  public String createToken(Long userId, String role) { Instant now = Instant.now();  return Jwts.builder() .issuer(ISSUER) .subject(userId.toString()) .claim(\"role\", role) .issuedAt(Date.from(now)) .expiration(Date.from(now.plus(ttl))) .signWith(signingKey) .compact(); }  public Claims parseToken(String token) { return jwtParser .parseSignedClaims(token) .getPayload(); } }   JWT中的内容包括：  字段 含义 --- --- iss 签发系统 campus-dining sub 当前登录账号 ID role 身份角色，例如 admin iat 签发时间 exp 过期时间  JWT有签名但负载没有加密，因此不能放入密码、数据库凭证等敏感信息。  本项目当前使用 .signWith(signingKey) ，JJWT 会依据密钥长度选择合适的 HMAC 算法。测试令牌使用 HS384 属于正常现象。 "
      },
      {
        "title": "14. Controller：对外提供登录接口",
        "anchor": "14-controller对外提供登录接口",
        "level": 2,
        "text": "  java package com.sky.controller.admin;  import com.sky.dto.EmployeeLoginDTO; import com.sky.entity.Employee; import com.sky.result.Result; import com.sky.service.EmployeeService; import com.sky.util.JwtUtil; import com.sky.vo.EmployeeLoginVO; import jakarta.validation.Valid; import org.springframework.web.bind.annotation.PostMapping; import org.springframework.web.bind.annotation.RequestBody; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;  @RestController @RequestMapping(\"/api/admin/employee\") public class EmployeeController {  private final EmployeeService employeeService; private final JwtUtil jwtUtil;  public EmployeeController( EmployeeService employeeService, JwtUtil jwtUtil) { this.employeeService = employeeService; this.jwtUtil = jwtUtil; }  @PostMapping(\"/login\") public Result login( @Valid @RequestBody EmployeeLoginDTO loginDTO) {  Employee employee = employeeService.login(loginDTO);  String token = jwtUtil.createToken( employee.getId(), \"admin\" );  EmployeeLoginVO loginVO = EmployeeLoginVO.builder() .id(employee.getId()) .name(employee.getName()) .role(\"admin\") .token(token) .build();  return Result.success(loginVO); } }   最终接口：  text POST /api/admin/employee/login   @Valid 会触发 DTO 字段校验， @RequestBody 会把请求 JSON 转换为 Java 对象。 "
      },
      {
        "title": "15. PowerShell 验证",
        "anchor": "15-powershell-验证",
        "level": 2,
        "text": " "
      },
      {
        "title": "15.1 直接请求 Spring Boot",
        "anchor": "151-直接请求-spring-boot",
        "level": 3,
        "text": "  powershell $body = @{ username = \"admin\" password = \"admin123\" } ConvertTo-Json  $response = Invoke-RestMethod -Uri \"http://127.0.0.1:8080/api/admin/employee/login\" -Method Post -ContentType \"application/json\" -Body $body  $response ConvertTo-Json -Depth 5  "
      },
      {
        "title": "15.2 通过 Nginx 请求",
        "anchor": "152-通过-nginx-请求",
        "level": 3,
        "text": "  powershell $response = Invoke-RestMethod -Uri \"http://127.0.0.1/api/admin/employee/login\" -Method Post -ContentType \"application/json\" -Body $body   第一个请求验证后端本身，第二个请求验证 Nginx 反向代理。 "
      },
      {
        "title": "16. 地址和端口的区别",
        "anchor": "16-地址和端口的区别",
        "level": 2,
        "text": "  地址 用途 --- --- http://127.0.0.1/ Nginx托管的前端页面 http://127.0.0.1:8080/api/health Spring Boot健康检查 POST http://127.0.0.1:8080/api/admin/employee/login 直接访问后端登录接口 POST http://127.0.0.1/api/admin/employee/login 经过Nginx代理访问登录接口  访问：  text http://127.0.0.1:8080/   不会显示前端页面，因为 8080 是后端端口，而且后端没有定义根路径 / 。  浏览器地址栏只能方便地发送 GET 请求，而登录接口要求 POST，因此不能直接在地址栏打开登录接口进行测试。  项目配置绑定：  yaml server: address: 127.0.0.1   部分 Windows 环境会把 localhost 优先解析为 IPv6 的 ::1 ，所以本地测试优先使用 127.0.0.1 。 "
      },
      {
        "title": "17. 常见现象与判断方法",
        "anchor": "17-常见现象与判断方法",
        "level": 2,
        "text": " "
      },
      {
        "title": "17.1 Found 0 Redis repository interfaces",
        "anchor": "171-found-0-redis-repository-interfaces",
        "level": 3,
        "text": "  这只是说明项目没有使用 Spring Data Repository 风格的 Redis 接口，不代表 Redis 连接失败。 "
      },
      {
        "title": "17.2 管理员中文名在旧版 PowerShell 中乱码",
        "anchor": "172-管理员中文名在旧版-powershell-中乱码",
        "level": 3,
        "text": "  如果 PowerShell 显示类似：  text ç®¡ç...   通常是 Windows PowerShell 5.1 对 UTF-8 JSON 的解码问题。数据库记录和浏览器端通常仍然正常，不要因此修改数据库中的中文。 "
      },
      {
        "title": "17.3 接口返回 Token，但其他页面报接口未实现",
        "anchor": "173-接口返回-token但其他页面报接口未实现",
        "level": 3,
        "text": "  这是当前阶段的正常结果。登录完成后，前端还会请求店铺、菜品、套餐或统计接口，而这些接口尚未实现。 "
      },
      {
        "title": "17.4 JWT为什么不能等同于完整鉴权",
        "anchor": "174-jwt为什么不能等同于完整鉴权",
        "level": 3,
        "text": "  当前后端只会签发 JWT。其他接口还没有拦截并验证请求头中的：  text token:   因此目前属于“能登录并取得令牌”，还不是“所有接口已经受身份和权限保护”。 "
      },
      {
        "title": "18. 下一阶段学习顺序",
        "anchor": "18-下一阶段学习顺序",
        "level": 2,
        "text": "  建议继续按照以下顺序实现：  1. 创建管理员 JWT 拦截器； 2. 从请求头 token 读取 JWT； 3. 验证签名、签发者和过期时间； 4. 从 sub 取出管理员 ID； 5. 使用 ThreadLocal 保存当前用户上下文； 6. 请求结束后清理 ThreadLocal； 7. 在 WebMvcConfiguration 注册拦截器，并排除登录接口； 8. 区分 HTTP 401（未登录或令牌失效）与 403（身份无权限）； 9. 编写一个需要登录的简单接口验证鉴权链路； 10. 再实现员工端登录和后续业务模块。  完成这些步骤后，登录链路才会从“签发令牌”升级为“完整身份认证与请求上下文透传”。"
      }
    ],
    "questions": [],
    "searchText": "管理端登录链路学习笔记 整理日期：2026-10-12 项目：智能园区餐饮 agent 平台 本阶段目标：让部署在 nginx 中的前端能够调用 spring boot 后端，使用数据库中的管理员账号完成登录并获得 jwt。 1. 本阶段完成结果 目前已经打通以下链路： mermaid flowchart lr a[前端登录表单] -- post /api/admin/employee/login b[nginx] b -- c[employeecontroller] c -- d[employeeserviceimpl] d -- e[employeemapper] e -- f[(mysql employee表)] d -- g[bcrypt密码验证] c -- h[jwtutil签发jwt] h -- i[employeeloginvo] i -- a 实际测试已经返回： json { \"code\": 1, \"msg\": \"\", \"data\": { \"id\": 1, \"name\": \"管理员\", \"role\": \"admin\", \"token\": \"eyj...\" } } 这说明以下环节均已正常工作： - spring boot 监听 127.0.0.1:8080 ； - mybatis-plus 可以查询 mysql； - 数据库中存在启用状态的管理员； - bcrypt 可以验证密码； - jjwt 0.13.0 可以签发 jwt； - controller 能按前端合同返回统一 json。 当前只完成了“登录和签发令牌”。jwt 拦截器、threadlocal 用户上下文和其他业务接口尚未实现。 2. 项目运行与单独运行 java 类 项目中可以有多个 main() 方法，但运行其中一个不会自动运行其他入口。 2.1 运行整个后端 运行： java com.sky.skyapplication.main() 作用： - 启动 spring 容器； - 创建 controller、service、mapper、配置类等 bean； - 启动内嵌 tomcat； - 监听 8080 端口； - 持续等待 http 请求。 成功日志包含： text tomcat started on port 8080 started skyapplication 2.2 单独运行密码生成器 运行： java com.sky.passwordgenerator.main() 作用：只生成一次 bcrypt 密码哈希，打印完成后进程结束。 它位于： text backend/sky-server/src/test/java/com/sky/passwordgenerator.java 启动 skyapplication 不会自动执行 passwordgenerator ，因为它们是两个独立的 java 程序入口。 3. 环境连接验证 3.1 mysql spring boot 日志中出现以下内容，说明连接池已经取得真实数据库连接： text hikaripool-1 - added connection hikaripool-1 - start completed 数据库使用： text campus_dining 3.2 redis redis 通过 docker 容器运行时，可以这样检查： powershell docker exec campus-redis redis-cli ping 正常返回： text pong 本阶段的登录接口暂未使用 redis，但后续缓存、token 状态或业务数据可能使用。 4. 准备管理员账号 4.1 为什么不能保存明文密码 数据库不应保存： text admin123 而应保存 bcrypt 生成的哈希： text $2a$10$... 即使数据库泄露，也不能直接从哈希还原原始密码。 4.2 bcrypt 配置 依赖添加在 sky-server/pom.xml ： xml org.springframework.security spring-security-crypto 配置类： java package com.sky.config; import org.springframework.context.annotation.bean; import org.springframework.context.annotation.configuration; import org.springframework.security.crypto.bcrypt.bcryptpasswordencoder; import org.springframework.security.crypto.password.passwordencoder; @configuration public class passwordconfiguration { @bean public passwordencoder passwordencoder() { return new bcryptpasswordencoder(); } } @bean 让 spring 管理唯一的 passwordencoder 对象，service 可以通过构造方法注入它。 4.3 生成初始密码哈希 java package com.sky; import org.springframework.security.crypto.bcrypt.bcryptpasswordencoder; public class passwordgenerator { public static void main(string[] args) { bcryptpasswordencoder encoder = new bcryptpasswordencoder(); string result = encoder.encode(\"admin123\"); system.out.println(result); } } bcrypt 每次 encode() 都会生成不同结果，因此不能重新编码后用字符串相等比较。 正确验证方式： java passwordencoder.matches(rawpassword, storedhash); 4.4 数据库记录 先检查账号： sql select id, name, username, phone, status from employee where username = 'admin'; 没有账号时插入： sql insert into employee (name, username, password, phone, status) values ('管理员', 'admin', '这里填写完整bcrypt哈希', 'phone_example', 1); 其中： - 用户名： admin ； - 登录时输入的原始密码： admin123 ； - 数据库存储：完整 bcrypt 哈希； - status = 1 ：账号启用。 5. 三个 maven 模块的职责 text backend ├─ sky-common 通用返回对象、通用异常等 ├─ sky-pojo entity、dto、vo └─ sky-server controller、service、mapper、配置和启动类 本阶段新增内容： text sky-common └─ com.sky.exception.businessexception sky-pojo ├─ com.sky.entity.employee ├─ com.sky.dto.employeelogindto └─ com.sky.vo.employeeloginvo sky-server ├─ com.sky.config.passwordconfiguration ├─ com.sky.mapper.employeemapper ├─ com.sky.service.employeeservice ├─ com.sky.service.impl.employeeserviceimpl ├─ com.sky.properties.jwtproperties ├─ com.sky.util.jwtutil └─ com.sky.controller.admin.employeecontroller 6. entity：数据库表在 java 中的表示 文件： text backend/sky-pojo/src/main/java/com/sky/entity/employee.java java package com.sky.entity; import com.baomidou.mybatisplus.annotation.idtype; import com.baomidou.mybatisplus.annotation.tableid; import com.baomidou.mybatisplus.annotation.tablename; import lombok.data; import java.time.localdatetime; @data @tablename(\"employee\") public class employee { @tableid(type = idtype.auto) private long id; private string name; private string username; private string password; private string phone; private integer status; private localdatetime createtime; private localdatetime updatetime; private long createuser; private long updateuser; } 映射关系示例： java 属性 数据库字段 --- --- createtime create_time updatetime update_time createuser create_user updateuser update_user application-local.yml 中的 map-underscore-to-camel-case: true 负责下划线字段与驼峰属性的自动映射。 7. mapper：访问数据库 文件： text backend/sky-server/src/main/java/com/sky/mapper/employeemapper.java java package com.sky.mapper; import com.baomidou.mybatisplus.core.mapper.basemapper; import com.sky.entity.employee; import org.apache.ibatis.annotations.mapper; @mapper public interface employeemapper extends basemapper { } 虽然接口中没有手写方法，但 basemapper 已提供基本的增删改查方法。mybatis-plus 会在程序启动时生成代理实现，不需要创建 employeemapperimpl 。 创建 mapper 后，原来的启动警告： text no mybatis mapper was found in '[com.sky]' package 随之消失。 8. dto：接收登录请求 文件： text backend/sky-pojo/src/main/java/com/sky/dto/employeelogindto.java java package com.sky.dto; import jakarta.validation.constraints.notblank; import jakarta.validation.constraints.size; import lombok.data; @data public class employeelogindto { @notblank(message = \"用户名不能为空\") @size(max = 50, message = \"用户名长度不能超过50个字符\") private string username; @notblank(message = \"密码不能为空\") @size(max = 100, message = \"密码长度不能超过100个字符\") private string password; } 前端请求 json： json { \"username\": \"admin\", \"password\": \"admin123\" } spring boot 3 使用 jakarta.validation ，不是旧项目中的 javax.validation 。 9. 业务异常和统一异常处理 9.1 业务异常 文件： text backend/sky-common/src/main/java/com/sky/exception/businessexception.java java package com.sky.exception; public class businessexception extends runtimeexception { public businessexception(string message) { super(message); } } 业务错误可以这样抛出： java throw new businessexception(\"用户名或密码错误\"); 9.2 全局处理 在 globalexceptionhandler 中加入： java @exceptionhandler(businessexception.class) public result business(businessexception exception) { return result.error(exception.getmessage()); } 业务失败返回： json { \"code\": 0, \"msg\": \"用户名或密码错误\", \"data\": null } 导入语句显示为灰色，通常表示“已经导入但暂未使用”，并不代表编译错误。添加异常处理方法后，该导入就会被使用。 10. service：登录核心业务 10.1 接口 java package com.sky.service; import com.sky.dto.employeelogindto; import com.sky.entity.employee; public interface employeeservice { employee login(employeelogindto logindto); } 接口定义能力，实现类负责具体逻辑。 10.2 实现类 java package com.sky.service.impl; import com.baomidou.mybatisplus.core.conditions.query.lambdaquerywrapper; import com.sky.dto.employeelogindto; import com.sky.entity.employee; import com.sky.exception.businessexception; import com.sky.mapper.employeemapper; import com.sky.service.employeeservice; import org.springframework.security.crypto.password.passwordencoder; import org.springframework.stereotype.service; @service public class employeeserviceimpl implements employeeservice { private final employeemapper employeemapper; private final passwordencoder passwordencoder; public employeeserviceimpl( employeemapper employeemapper, passwordencoder passwordencoder) { this.employeemapper = employeemapper; this.passwordencoder = passwordencoder; } @override public employee login(employeelogindto logindto) { employee employee = employeemapper.selectone( new lambdaquerywrapper () .eq( employee::getusername, logindto.getusername().trim() ) ); if (employee == null) { throw new businessexception(\"用户名或密码错误\"); } boolean passwordcorrect = passwordencoder.matches( logindto.getpassword(), employee.getpassword() ); if (!passwordcorrect) { throw new businessexception(\"用户名或密码错误\"); } if (!integer.valueof(1).equals(employee.getstatus())) { throw new businessexception(\"账号已停用\"); } return employee; } } 执行顺序： 1. 根据用户名查询数据库； 2. 判断账号是否存在； 3. 使用 bcrypt 验证密码； 4. 检查账号是否启用； 5. 返回已经通过验证的 employee 。 11. vo：只返回前端需要的数据 文件： text backend/sky-pojo/src/main/java/com/sky/vo/employeeloginvo.java java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; @data @builder @noargsconstructor @allargsconstructor public class employeeloginvo { private long id; private string name; private string role; private string token; } 不能直接将 employee 返回给前端，因为 employee 中包含密码哈希。vo 只保留前端登录会话需要的字段。 12. jwt 配置 12.1 yaml 配置 在 application.yml 中加入： yaml sky: jwt: secret-key: ${jwt_secret_key:本地开发用的至少32字节密钥} ttl: ${jwt_ttl:2h} 正式部署时应通过 jwt_secret_key 环境变量提供随机密钥，不应使用本地默认值。 12.2 配置属性类 java package com.sky.properties; import lombok.data; import org.springframework.boot.context.properties.configurationproperties; import org.springframework.stereotype.component; import java.time.duration; @data @component @configurationproperties(prefix = \"sky.jwt\") public class jwtproperties { private string secretkey; private duration ttl = duration.ofhours(2); } spring 自动映射： text sky.jwt.secret-key → secretkey sky.jwt.ttl → ttl 13. jwtutil：签发和解析令牌 java package com.sky.util; import com.sky.properties.jwtproperties; import io.jsonwebtoken.claims; import io.jsonwebtoken.jwtparser; import io.jsonwebtoken.jwts; import io.jsonwebtoken.security.keys; import org.springframework.stereotype.component; import javax.crypto.secretkey; import java.nio.charset.standardcharsets; import java.time.duration; import java.time.instant; import java.util.date; @component public class jwtutil { private static final string issuer = \"campus-dining\"; private final secretkey signingkey; private final duration ttl; private final jwtparser jwtparser; public jwtutil(jwtproperties jwtproperties) { this.signingkey = keys.hmacshakeyfor( jwtproperties.getsecretkey() .getbytes(standardcharsets.utf_8) ); this.ttl = jwtproperties.getttl(); this.jwtparser = jwts.parser() .requireissuer(issuer) .verifywith(signingkey) .build(); } public string createtoken(long userid, string role) { instant now = instant.now(); return jwts.builder() .issuer(issuer) .subject(userid.tostring()) .claim(\"role\", role) .issuedat(date.from(now)) .expiration(date.from(now.plus(ttl))) .signwith(signingkey) .compact(); } public claims parsetoken(string token) { return jwtparser .parsesignedclaims(token) .getpayload(); } } jwt中的内容包括： 字段 含义 --- --- iss 签发系统 campus-dining sub 当前登录账号 id role 身份角色，例如 admin iat 签发时间 exp 过期时间 jwt有签名但负载没有加密，因此不能放入密码、数据库凭证等敏感信息。 本项目当前使用 .signwith(signingkey) ，jjwt 会依据密钥长度选择合适的 hmac 算法。测试令牌使用 hs384 属于正常现象。 14. controller：对外提供登录接口 java package com.sky.controller.admin; import com.sky.dto.employeelogindto; import com.sky.entity.employee; import com.sky.result.result; import com.sky.service.employeeservice; import com.sky.util.jwtutil; import com.sky.vo.employeeloginvo; import jakarta.validation.valid; import org.springframework.web.bind.annotation.postmapping; import org.springframework.web.bind.annotation.requestbody; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; @restcontroller @requestmapping(\"/api/admin/employee\") public class employeecontroller { private final employeeservice employeeservice; private final jwtutil jwtutil; public employeecontroller( employeeservice employeeservice, jwtutil jwtutil) { this.employeeservice = employeeservice; this.jwtutil = jwtutil; } @postmapping(\"/login\") public result login( @valid @requestbody employeelogindto logindto) { employee employee = employeeservice.login(logindto); string token = jwtutil.createtoken( employee.getid(), \"admin\" ); employeeloginvo loginvo = employeeloginvo.builder() .id(employee.getid()) .name(employee.getname()) .role(\"admin\") .token(token) .build(); return result.success(loginvo); } } 最终接口： text post /api/admin/employee/login @valid 会触发 dto 字段校验， @requestbody 会把请求 json 转换为 java 对象。 15. powershell 验证 15.1 直接请求 spring boot powershell $body = @{ username = \"admin\" password = \"admin123\" } convertto-json $response = invoke-restmethod -uri \"http://127.0.0.1:8080/api/admin/employee/login\" -method post -contenttype \"application/json\" -body $body $response convertto-json -depth 5 15.2 通过 nginx 请求 powershell $response = invoke-restmethod -uri \"http://127.0.0.1/api/admin/employee/login\" -method post -contenttype \"application/json\" -body $body 第一个请求验证后端本身，第二个请求验证 nginx 反向代理。 16. 地址和端口的区别 地址 用途 --- --- http://127.0.0.1/ nginx托管的前端页面 http://127.0.0.1:8080/api/health spring boot健康检查 post http://127.0.0.1:8080/api/admin/employee/login 直接访问后端登录接口 post http://127.0.0.1/api/admin/employee/login 经过nginx代理访问登录接口 访问： text http://127.0.0.1:8080/ 不会显示前端页面，因为 8080 是后端端口，而且后端没有定义根路径 / 。 浏览器地址栏只能方便地发送 get 请求，而登录接口要求 post，因此不能直接在地址栏打开登录接口进行测试。 项目配置绑定： yaml server: address: 127.0.0.1 部分 windows 环境会把 localhost 优先解析为 ipv6 的 ::1 ，所以本地测试优先使用 127.0.0.1 。 17. 常见现象与判断方法 17.1 found 0 redis repository interfaces 这只是说明项目没有使用 spring data repository 风格的 redis 接口，不代表 redis 连接失败。 17.2 管理员中文名在旧版 powershell 中乱码 如果 powershell 显示类似： text ç®¡ç... 通常是 windows powershell 5.1 对 utf-8 json 的解码问题。数据库记录和浏览器端通常仍然正常，不要因此修改数据库中的中文。 17.3 接口返回 token，但其他页面报接口未实现 这是当前阶段的正常结果。登录完成后，前端还会请求店铺、菜品、套餐或统计接口，而这些接口尚未实现。 17.4 jwt为什么不能等同于完整鉴权 当前后端只会签发 jwt。其他接口还没有拦截并验证请求头中的： text token: 因此目前属于“能登录并取得令牌”，还不是“所有接口已经受身份和权限保护”。 18. 下一阶段学习顺序 建议继续按照以下顺序实现： 1. 创建管理员 jwt 拦截器； 2. 从请求头 token 读取 jwt； 3. 验证签名、签发者和过期时间； 4. 从 sub 取出管理员 id； 5. 使用 threadlocal 保存当前用户上下文； 6. 请求结束后清理 threadlocal； 7. 在 webmvcconfiguration 注册拦截器，并排除登录接口； 8. 区分 http 401（未登录或令牌失效）与 403（身份无权限）； 9. 编写一个需要登录的简单接口验证鉴权链路； 10. 再实现员工端登录和后续业务模块。 完成这些步骤后，登录链路才会从“签发令牌”升级为“完整身份认证与请求上下文透传”。"
  },
  {
    "id": "project-3a9816df9953",
    "version": "70648242733b",
    "md": "learning/项目学习/智能园区点餐功能/知识点.md",
    "title": "知识点",
    "description": "-dto本质就是请求的传递中转站",
    "subject": "projects",
    "kind": "项目原文",
    "order": 1,
    "date": "2026-10-23",
    "tags": [],
    "minutes": 1,
    "outline": [],
    "questions": [],
    "searchText": "-dto本质就是请求的传递中转站"
  },
  {
    "id": "project-ae9b0b886017",
    "version": "98b623ab4ea1",
    "md": "learning/项目学习/简单记录.md",
    "title": "简单记录",
    "description": "-请求的执行顺序: -tomcat接收请求 -filter过滤 -dispatcherServlet完成请求的分发 -HandlerMapping匹配请求映射 -Interceptor.perHandle() 在contriller之前进行拦截 -解析controller方法参数 @vaild参数检",
    "subject": "projects",
    "kind": "项目原文",
    "order": 1,
    "date": "2026-10-23",
    "tags": [],
    "minutes": 1,
    "outline": [],
    "questions": [],
    "searchText": "-请求的执行顺序: -tomcat接收请求 -filter过滤 -dispatcherservlet完成请求的分发 -handlermapping匹配请求映射 -interceptor.perhandle() 在contriller之前进行拦截 -解析controller方法参数 @vaild参数检验 -springmvc架构层 -vo转json -filter后续拦截处理 -vaild的参数检验检验的是 -trim方法："
  },
  {
    "id": "project-54be93fd61e4",
    "version": "5e61948f3203",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day01/苍穹外卖-day01.md",
    "title": "苍穹外卖-day01",
    "description": "- 软件开发整体介绍 - 苍穹外卖项目介绍 - 开发环境搭建 - 导入接口文档 - Swagger",
    "subject": "projects",
    "kind": "项目原文",
    "order": 11,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 37,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 软件开发整体介绍 - 苍穹外卖项目介绍 - 开发环境搭建 - 导入接口文档 - Swagger    项目整体效果展示：    ​ 管理端-外卖商家使用    ​ 用户端-点餐用户使用  当我们完成该项目的学习，可以培养以下能力：   "
      },
      {
        "title": "1. 软件开发整体介绍",
        "anchor": "1-软件开发整体介绍",
        "level": 2,
        "text": "  作为一名软件开发工程师,我们需要了解在软件开发过程中的开发流程， 以及软件开发过程中涉及到的岗位角色，角色的分工、职责， 并了解软件开发中涉及到的三种软件环境。那么这一小节，我们将从 软件开发流程、角色分工、软件环境 三个方面整体介绍一下软件开发。   "
      },
      {
        "title": "1.1 软件开发流程",
        "anchor": "11-软件开发流程",
        "level": 3,
        "text": "      1). 第1阶段: 需求分析  完成需求规格说明书、产品原型编写。  需求规格说明书， 一般来说就是使用 Word 文档来描述当前项目的各个组成部分，如：系统定义、应用环境、功能规格、性能需求等，都会在文档中描述。 例如：    产品原型，一般是通过网页(html)的形式展示当前的页面展示什么样的数据, 页面的布局是什么样子的，点击某个菜单，打开什么页面，点击某个按钮，出现什么效果，都可以通过产品原型看到。 例如：        2). 第2阶段: 设计  设计的内容包含 UI设计、数据库设计、接口设计。  UI设计：用户界面的设计，主要设计项目的页面效果，小到一个按钮，大到一个页面布局，还有人机交互逻辑的体现。 例如：    数据库设计：需要设计当前项目中涉及到哪些数据库，每一个数据库里面包含哪些表，这些表结构之间的关系是什么样的，表结构中包含哪些字段。 例如：    接口设计：通过分析原型图，首先，粗粒度地分析每个页面有多少接口，然后，再细粒度地分析每个接口的传入参数，返回值参数，同时明确接口路径及请求方式。 例如：      3). 第3阶段: 编码  编写项目代码、并完成单元测试。  项目代码编写：作为软件开发工程师，我们需要对项目的模块功能分析后，进行编码实现。  单元测试：编码实现完毕后，进行单元测试，单元测试通过后再进入到下一阶段。 例如：        4). 第4阶段: 测试  在该阶段中主要由测试人员, 对部署在测试环境的项目进行功能测试, 并出具测试报告。    5). 第5阶段: 上线运维  在项目上线之前， 会由运维人员准备服务器上的软件环境安装、配置， 配置完毕后， 再将我们开发好的项目，部署在服务器上运行。   "
      },
      {
        "title": "1.2 角色分工",
        "anchor": "12-角色分工",
        "level": 3,
        "text": "  在对整个软件开发流程熟悉后， 我们还有必要了解一下在整个软件开发流程中涉及到的岗位角色，以及各个角色的职责分工。  image-20210725234015404  岗位/角色 对应阶段 职责/分工 :---------------------------------- ----------------------------- :----------------------------------------- 项目经理 全阶段 对整个项目负责，任务分配、把控进度 产品经理 需求分析 进行需求调研，输出需求调研文档、产品原型等 UI设计师 设计 根据产品原型输出界面效果图 架构师 设计 项目整体架构设计、技术选型等 开发工程师 编码 功能代码实现 测试工程师 测试 编写测试用例，输出测试报告 运维工程师 上线运维 软件环境搭建、项目上线    上述我们讲解的角色分工, 是在一个项目组中比较标准的角色分工, 但是在实际的项目中, 有一些项目组由于人员配置紧张, 可能并没有专门的架构师或测试人员, 这个时候可能需要有项目经理或者程序员兼任。   "
      },
      {
        "title": "1.3 软件环境",
        "anchor": "13-软件环境",
        "level": 3,
        "text": "  作为软件开发工程师，在编码的过程中就不可避免地会接触多种软件环境，我们主要来分析在工作中经常遇到的三套环境， 分别是: 开发环境、测试环境、生产环境。 接下来，我们分别介绍一下这三套环境的作用和特点。    1). 开发环境(development)  我们作为软件开发人员，在开发阶段使用的环境，就是开发环境，一般外部用户无法访问。  比如，我们在开发中使用的MySQL数据库和其他的一些常用软件，我们可以安装在本地， 也可以安装在一台专门的服务器中， 这些应用软件仅仅在软件开发过程中使用， 项目测试、上线时，我们不会使用这套环境了，这个环境就是开发环境。    2). 测试环境(testing)  当软件开发工程师，将项目的功能模块开发完毕，并且单元测试通过后，就需要将项目部署到测试服务器上，让测试人员对项目进行测试。那这台测试服务器就是专门给测试人员使用的环境， 也就是测试环境，用于项目测试，一般外部用户无法访问。    3). 生产环境(production)  当项目开发完毕，并且由测试人员测试通过之后，就可以上线项目，将项目部署到线上环境，并正式对外提供服务，这个线上环境也称之为生产环境。    ​ 开发环境 测试环境 生产环境  image-20221106182912829    首先，会在开发环境中进行项目开发，往往开发环境大多数都是本地的电脑环境和局域网内的环境，当开发完毕后，然后会把项目部署到测试环境，测试环境一般是一台独立测试服务器的环境，项目测试通过后，最终把项目部署到生产环境，生产环境可以是机房或者云服务器等线上环境。   "
      },
      {
        "title": "2. 苍穹外卖项目介绍",
        "anchor": "2-苍穹外卖项目介绍",
        "level": 2,
        "text": "  在开发苍穹外卖这个项目之前，我们需要全方位的来介绍一下当前我们学习的这个项目。接下来，我们将从项目简介、产品原型、技术选型三个方面来介绍苍穹外卖这个项目。   "
      },
      {
        "title": "2.1 项目介绍",
        "anchor": "21-项目介绍",
        "level": 3,
        "text": "  本项目（苍穹外卖）是专门为餐饮企业（餐厅、饭店）定制的一款软件产品，包括 系统管理后台 和 小程序端应用 两部分。其中系统管理后台主要提供给餐饮企业内部员工使用，可以对餐厅的分类、菜品、套餐、订单、员工等进行管理维护，对餐厅的各类数据进行统计，同时也可进行来单语音播报功能。小程序端主要提供给消费者使用，可以在线浏览菜品、添加购物车、下单、支付、催单等。  image-20221106185252326    接下来，通过功能架构图来展示 管理端 和 用户端 的具体业务功能模块。    1). 管理端功能  员工登录/退出 , 员工信息管理 , 分类管理 , 菜品管理 , 套餐管理 , 菜品口味管理 , 订单管理 ，数据统计，来单提醒。  2). 用户端功能  微信登录 , 收件人地址管理 , 用户历史订单查询 , 菜品规格查询 , 购物车功能 , 下单 , 支付、分类及菜品浏览。   "
      },
      {
        "title": "2.2 产品原型",
        "anchor": "22-产品原型",
        "level": 3,
        "text": "  产品原型 ，用于展示项目的业务功能，一般由产品经理进行设计。  注意事项： 产品原型主要用于展示项目的功能，并不是最终的页面效果。    在课程资料的产品原型文件夹下,提供了两份产品原型。  image-20221106195023552  管理端原型图：    用户端原型图：    1). 管理端  餐饮企业内部员工使用。 主要功能有:  模块 描述 --------- ------------------------------------------------------------ 登录/退出 内部员工必须登录后,才可以访问系统管理后台 员工管理 管理员可以在系统后台对员工信息进行管理，包含查询、新增、编辑、禁用等功能 分类管理 主要对当前餐厅经营的 菜品分类 或 套餐分类 进行管理维护， 包含查询、新增、修改、删除等功能 菜品管理 主要维护各个分类下的菜品信息，包含查询、新增、修改、删除、启售、停售等功能 套餐管理 主要维护当前餐厅中的套餐信息，包含查询、新增、修改、删除、启售、停售等功能 订单管理 主要维护用户在移动端下的订单信息，包含查询、取消、派送、完成，以及订单报表下载等功能 数据统计 主要完成对餐厅的各类数据统计，如营业额、用户数量、订单等    2). 用户端  移动端应用主要提供给消费者使用。主要功能有:  模块 描述 ----------- ------------------------------------------------------------ 登录/退出 用户需要通过微信授权后登录使用小程序进行点餐 点餐-菜单 在点餐界面需要展示出菜品分类/套餐分类, 并根据当前选择的分类加载其中的菜品信息, 供用户查询选择 点餐-购物车 用户选中的菜品就会加入用户的购物车, 主要包含 查询购物车、加入购物车、删除购物车、清空购物车等功能 订单支付 用户选完菜品/套餐后, 可以对购物车菜品进行结算支付, 这时就需要进行订单的支付 个人信息 在个人中心页面中会展示当前用户的基本信息, 用户可以管理收货地址, 也可以查询历史订单数据   "
      },
      {
        "title": "2.3 技术选型",
        "anchor": "23-技术选型",
        "level": 3,
        "text": "  关于本项目的技术选型, 我们将会从 用户层、网关层、应用层、数据层 这几个方面进行介绍，主要用于展示项目中使用到的技术框架和中间件等。  image-20221106185646994    1). 用户层  本项目中在构建系统管理后台的前端页面，我们会用到H5、Vue.js、ElementUI、apache echarts(展示图表)等技术。而在构建移动端应用时，我们会使用到微信小程序。    2). 网关层  Nginx是一个服务器，主要用来作为Http服务器，部署静态资源，访问性能高。在Nginx中还有两个比较重要的作用： 反向代理和负载均衡， 在进行项目部署时，要实现Tomcat的负载均衡，就可以通过Nginx来实现。    3). 应用层  SpringBoot： 快速构建Spring项目, 采用 \"约定优于配置\" 的思想, 简化Spring项目的配置开发。  SpringMVC：SpringMVC是spring框架的一个模块，springmvc和spring无需通过中间整合层进行整合，可以无缝集成。  Spring Task: 由Spring提供的定时任务框架。  httpclient: 主要实现了对http请求的发送。  Spring Cache: 由Spring提供的数据缓存框架  JWT: 用于对应用程序上的用户进行身份验证的标记。  阿里云OSS: 对象存储服务，在项目中主要存储文件，如图片等。  Swagger： 可以自动的帮助开发人员生成接口文档，并对接口进行测试。  POI: 封装了对Excel表格的常用操作。  WebSocket: 一种通信网络协议，使客户端和服务器之间的数据交换更加简单，用于项目的来单、催单功能实现。    4). 数据层  MySQL： 关系型数据库, 本项目的核心业务数据都会采用MySQL进行存储。  Redis： 基于key-value格式存储的内存数据库, 访问速度快, 经常使用它做缓存。  Mybatis： 本项目持久层将会使用Mybatis开发。  pagehelper: 分页插件。  spring data redis: 简化java代码操作Redis的API。    5). 工具  git: 版本控制工具, 在团队协作中, 使用该工具对项目中的代码进行管理。  maven: 项目构建工具。  junit：单元测试工具，开发人员功能实现完毕后，需要通过junit对功能进行单元测试。  postman: 接口测工具，模拟用户发起的各类HTTP请求，获取对应的响应结果。   "
      },
      {
        "title": "3. 开发环境搭建",
        "anchor": "3-开发环境搭建",
        "level": 2,
        "text": "    开发环境搭建主要包含 前端环境 和 后端环境 两部分。作为服务端开发工程师， 我们课程学习的重心应该放在后端的业务代码上， 前端的页面我们只需要导入资料中的nginx， 前端页面的代码我们只需要能看懂即可。   "
      },
      {
        "title": "3.1 前端环境搭建",
        "anchor": "31-前端环境搭建",
        "level": 3,
        "text": "  1). 前端工程基于 nginx  从资料中找到前端运行环境的nginx，移动到 非中文目录 下。  image-20221106202239828  sky 目录中存放了管理端的前端资源，具体如下：    2). 启动nginx，访问测试  双击 nginx.exe 即可启动 nginx 服务，访问端口号为 80  http://localhost:80   "
      },
      {
        "title": "3.2 后端环境搭建",
        "anchor": "32-后端环境搭建",
        "level": 3,
        "text": "  3.2.1 熟悉项目结构  后端工程基于 maven 进行项目构建，并且进行分模块开发。  1). 从当天资料中找到后端初始工程：    2). 用 IDEA 打开初始工程，了解项目的整体结构：    对工程的每个模块作用说明：  序号 名称 说明 -------- ------------ ------------------------------------------------------------ 1 sky-take-out maven父工程，统一管理依赖版本，聚合其他子模块 2 sky-common 子模块，存放公共类，例如：工具类、常量类、异常类等 3 sky-pojo 子模块，存放实体类、VO、DTO等 4 sky-server 子模块，后端服务，存放配置文件、Controller、Service、Mapper等  对项目整体结构了解后，接下来我们详细分析上述的每个子模块：    - sky-common: 模块中存放的是一些公共类，可以供其他模块使用      分析sky-common模块的每个包的作用：  名称 说明 ----------- ------------------------------ constant 存放相关常量类 context 存放上下文类 enumeration 项目的枚举类存储 exception 存放自定义异常类 json 处理json转换的类 properties 存放SpringBoot相关的配置属性类 result 返回结果类的封装 utils 常用工具类    - sky-pojo: 模块中存放的是一些 entity、DTO、VO    分析sky-pojo模块的每个包的作用：  名称 说明 -------- -------------------------------------------- Entity 实体，通常和数据库中的表对应 DTO 数据传输对象，通常用于程序中各层之间传递数据 VO 视图对象，为前端展示数据提供的对象 POJO 普通Java对象，只有属性和对应的getter和setter    - sky-server: 模块中存放的是 配置文件、配置类、拦截器、controller、service、mapper、启动类等    分析sky-server模块的每个包的作用：  名称 说明 -------------- ---------------- config 存放配置类 controller 存放controller类 interceptor 存放拦截器类 mapper 存放mapper接口 service 存放service类 SkyApplication 启动类    3.2.2 Git版本控制  使用Git进行项目代码的版本控制，具体操作：  1). 创建Git本地仓库      当Idea中出现：    说明本地仓库创建成功。    2). 创建Git远程仓库  访问https://gitee.com/，新建仓库    点击 创建      3). 将本地文件推送到Git远程仓库    1. 提交文件至本地仓库  忽略以下类型文件    开始提交    中间出现：点击commit    2. 添加Git远程仓库地址  复制远程地址：    添加地址：      3. 推送    成功推送至远程仓库      3.2.3 数据库环境搭建  1. 从资料中找到sky.sql    直接打开sky.sql文件  image-20221107101238205  通过该sql文件直接可创建数据库，所以不需要提前创建数据库，直接导入该文件执行即可。  2. 执行sky.sql文件    执行完成后，共创建出11张表    每张表的说明：  序号 表名 中文名 -------- ------------- -------------- 1 employee 员工表 2 category 分类表 3 dish 菜品表 4 dish_flavor 菜品口味表 5 setmeal 套餐表 6 setmeal_dish 套餐菜品关系表 7 user 用户表 8 address_book 地址表 9 shopping_cart 购物车表 10 orders 订单表 11 order_detail 订单明细表  我们目前先简单了解大概有哪些表, 每张表存储什么数据, 有一个印象。对于具体的表结构, 以及表结构中的字段, 可以参考资料中的 《数据库设计文档》 ，同时在讲解具体的功能开发时, 我们也会再详细介绍。      3.2.4 前后端联调  后端的初始工程中已经实现了 登录 功能，直接进行前后端联调测试即可  实现思路：    1.Controller层  在sky-server模块中，com.sky.controller.admin.EmployeeController  java / 登录  @param employeeLoginDTO @return / @PostMapping(\"/login\") public Result login(@RequestBody EmployeeLoginDTO employeeLoginDTO) { log.info(\"员工登录：{}\", employeeLoginDTO); //调用service方法查询数据库 Employee employee = employeeService.login(employeeLoginDTO);  //登录成功后，生成jwt令牌 Map claims = new HashMap< (); claims.put(JwtClaimsConstant.EMP_ID, employee.getId()); String token = JwtUtil.createJWT( jwtProperties.getAdminSecretKey(), jwtProperties.getAdminTtl(), claims);  EmployeeLoginVO employeeLoginVO = EmployeeLoginVO.builder() .id(employee.getId()) .userName(employee.getUsername()) .name(employee.getName()) .token(token) .build();  return Result.success(employeeLoginVO); }   2.Service层  在sky-server模块中，com.sky.service.impl.EmployeeServiceImpl  java / 员工登录  @param employeeLoginDTO @return / public Employee login(EmployeeLoginDTO employeeLoginDTO) { String username = employeeLoginDTO.getUsername(); String password = employeeLoginDTO.getPassword();  //1、根据用户名查询数据库中的数据 Employee employee = employeeMapper.getByUsername(username);  //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） if (employee == null) { //账号不存在 throw new AccountNotFoundException(MessageConstant.ACCOUNT_NOT_FOUND); }  //密码比对 if (!password.equals(employee.getPassword())) { //密码错误 throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR); }  if (employee.getStatus() == StatusConstant.DISABLE) { //账号被锁定 throw new AccountLockedException(MessageConstant.ACCOUNT_LOCKED); }  //3、返回实体对象 return employee; }   3.Mapper层  在sky-server模块中，com.sky.mapper.EmployeeMapper  java package com.sky.mapper;  import com.sky.entity.Employee; import org.apache.ibatis.annotations.Mapper; import org.apache.ibatis.annotations.Select;  @Mapper public interface EmployeeMapper {  / 根据用户名查询员工 @param username @return / @Select(\"select from employee where username = {username}\") Employee getByUsername(String username);  }    注：可以通过断点调试跟踪后端程序的执行过程    3.2.5 nginx反向代理和负载均衡  对登录功能测试完毕后，接下来，我们思考一个问题： 前端发送的请求，是如何请求到后端服务的？  前端请求地址：http://localhost/api/employee/login  后端接口地址：http://localhost:8080/admin/employee/login    ​ 前端请求地址 后端接口地址    很明显，两个地址不一致，那是如何请求到后端服务的呢？  image-20221107152041371    1). nginx反向代理  nginx 反向代理 ，就是将前端发送的动态请求由 nginx 转发到后端服务器    那为什么不直接通过浏览器直接请求后台服务端，需要通过nginx反向代理呢？    nginx 反向代理的好处：  - 提高访问速度  因为nginx本身可以进行缓存，如果访问的同一接口，并且做了数据缓存，nginx就直接可把数据返回，不需要真正地访问服务端，从而提高访问速度。  - 进行负载均衡  所谓负载均衡,就是把大量的请求按照我们指定的方式均衡的分配给集群中的每台服务器。  - 保证后端服务安全  因为一般后台服务地址不会暴露，所以使用浏览器不能直接访问，可以把nginx作为请求访问的入口，请求到达nginx后转发到具体的服务中，从而保证后端服务的安全。    nginx 反向代理的配置方式：  nginx server{ listen 80; server_name localhost;  location /api/{ proxy_pass http://localhost:8080/admin/; 反向代理 } }   proxy_pass： 该指令是用来设置代理服务器的地址，可以是主机名称，IP地址加端口号等形式。  如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://localhost:8080/admin/上来。    接下来，进到nginx-1.20.2\\conf，打开nginx配置  nginx 反向代理,处理管理端发送的请求 location /api/ { proxy_pass http://localhost:8080/admin/; proxy_pass http://webservers/admin/; }   当在访问http://localhost/api/employee/login，nginx接收到请求后转到http://localhost:8080/admin/，故最终的请求地址为http://localhost:8080/admin/employee/login，和后台服务的访问地址一致。    2). nginx 负载均衡  当如果服务以集群的方式进行部署时，那nginx在转发请求到服务器时就需要做相应的负载均衡。其实，负载均衡从本质上来说也是基于反向代理来实现的，最终都是转发请求。    nginx 负载均衡的配置方式：  nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; } server{ listen 80; server_name localhost;  location /api/{ proxy_pass http://webservers/admin; 负载均衡 } }   upstream： 如果代理服务器是一组服务器的话，我们可以使用upstream指令配置后端服务器组。  如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://webservers/admin，根据webservers名称找到一组服务器，根据设置的负载均衡策略(默认是轮询)转发到具体的服务器。  注： upstream后面的名称可自定义，但要上下保持一致。    nginx 负载均衡策略：  名称 说明 ---------- ------------------------------------------------------ 轮询 默认方式 weight 权重方式，默认为1，权重越高，被分配的客户端请求就越多 ip_hash 依据ip分配方式，这样每个访客可以固定访问一个后端服务 least_conn 依据最少连接方式，把请求优先分配给连接数少的后端服务 url_hash 依据url分配方式，这样相同的url会被分配到同一个后端服务 fair 依据响应时间方式，响应时间短的服务将会被优先分配  具体配置方式：  轮询：  nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; }   weight:  nginx upstream webservers{ server 192.168.100.128:8080 weight=90; server 192.168.100.129:8080 weight=10; }   ip_hash:  nginx upstream webservers{ ip_hash; server 192.168.100.128:8080; server 192.168.100.129:8080; }   least_conn:  nginx upstream webservers{ least_conn; server 192.168.100.128:8080; server 192.168.100.129:8080; }   url_hash:  nginx upstream webservers{ hash &request_uri; server 192.168.100.128:8080; server 192.168.100.129:8080; }   fair:  nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; fair; }    "
      },
      {
        "title": "3.3 完善登录功能",
        "anchor": "33-完善登录功能",
        "level": 3,
        "text": "  问题： 员工表中的密码是明文存储，安全性太低。  image-20221107160529803  解决思路：  1. 将密码加密后存储，提高安全性    2. 使用MD5加密方式对明文密码加密    实现步骤：  1. 修改数据库中明文密码，改为MD5加密后的密文  打开employee表，修改密码  image-20221107161446710  2. 修改Java代码，前端提交的密码进行MD5加密后再跟数据库中密码比对  打开EmployeeServiceImpl.java，修改比对密码  java / 员工登录  @param employeeLoginDTO @return / public Employee login(EmployeeLoginDTO employeeLoginDTO) {  //1、根据用户名查询数据库中的数据  //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） //....... //密码比对 // TODO 后期需要进行md5加密，然后再进行比对 password = DigestUtils.md5DigestAsHex(password.getBytes()); if (!password.equals(employee.getPassword())) { //密码错误 throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR); }  //........  //3、返回实体对象 return employee; }    "
      },
      {
        "title": "4. 导入接口文档",
        "anchor": "4-导入接口文档",
        "level": 2,
        "text": "  接下来，就要进入到项目的业务开发了，而我们的开发方式就是基本当前企业主流的前后端分离开发方式，那么这种方式就要求我们之前需要先将接口定义好，这样前后端人员才能并行开发，所以，这个章节就需要将接口文档导入到管理平台，为我们后面业务开发做好准备。其实，在真实的企业开发中，接口设计过程其实是一个非常漫长的过程，可能需要多次开会讨论调整，甚至在开发的过程中才会发现某些接口定义还需要再调整，这种情况其实是非常常见的，但是由于项目时间原因，所以选择一次性导入所有的接口，在开发业务功能过程当中，也会带着大家一起来分析一下对应的接口是怎么确定下来的，为什么要这样定义，从而培养同学们的接口设计能力。   "
      },
      {
        "title": "4.1 前后端分离开发流程",
        "anchor": "41-前后端分离开发流程",
        "level": 3,
        "text": "    第一步：定义接口，确定接口的路径、请求方式、传入参数、返回参数。  第二步：前端开发人员和后端开发人员并行开发，同时，也可自测。  第三步：前后端人员进行连调测试。  第四步：提交给测试人员进行最终测试。   "
      },
      {
        "title": "4.2 操作步骤",
        "anchor": "42-操作步骤",
        "level": 3,
        "text": "  将课程资料中提供的项目接口导入YApi。访问地址：http://yapi.smart-xwork.cn/  1). 从资料中找到项目接口文件    2). 导入到YApi平台  在YApi平台创建出两个项目    选择苍穹外卖-管理端接口.json导入    导入成功      另一个用户端json文件也执行相同操作。   "
      },
      {
        "title": "5. Swagger",
        "anchor": "5-swagger",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 介绍",
        "anchor": "51-介绍",
        "level": 3,
        "text": "  Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务( )。 它的主要作用是：  1. 使得前后端分离开发更加方便，有利于团队协作  2. 接口的文档在线自动生成，降低后端开发人员编写接口文档的负担  3. 功能测试  Spring已经将Swagger纳入自身的标准，建立了Spring-swagger项目，现在叫Springfox。通过在项目中引入Springfox ，即可非常简单快捷的使用Swagger。  knife4j是为Java MVC框架集成Swagger生成Api文档的增强解决方案,前身是swagger-bootstrap-ui,取名kni4j是希望它能像一把匕首一样小巧,轻量,并且功能强悍!  目前，一般都使用knife4j框架。   "
      },
      {
        "title": "5.2 使用步骤",
        "anchor": "52-使用步骤",
        "level": 3,
        "text": "  1. 导入 knife4j 的maven坐标  在pom.xml中添加依赖  xml  com.github.xiaoymin knife4j-spring-boot-starter    2. 在配置类中加入 knife4j 相关配置  WebMvcConfiguration.java  java / 通过knife4j生成接口文档 @return / @Bean public Docket docket() { ApiInfo apiInfo = new ApiInfoBuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build(); Docket docket = new Docket(DocumentationType.SWAGGER_2) .apiInfo(apiInfo) .select() .apis(RequestHandlerSelectors.basePackage(\"com.sky.controller\")) .paths(PathSelectors.any()) .build(); return docket; }     3. 设置静态资源映射，否则接口文档页面无法访问  WebMvcConfiguration.java  java / 设置静态资源映射 @param registry / protected void addResourceHandlers(ResourceHandlerRegistry registry) { registry.addResourceHandler(\"/doc.html\").addResourceLocations(\"classpath:/META-INF/resources/\"); registry.addResourceHandler(\"/webjars/ \").addResourceLocations(\"classpath:/META-INF/resources/webjars/\"); }   4. 访问测试  接口文档访问路径为 http://ip:port/doc.html --- http://localhost:8080/doc.html    接口测试:测试登录功能    思考： 通过 Swagger 就可以生成接口文档，那么我们就不需要 Yapi 了？  1、Yapi 是设计阶段使用的工具，管理和维护接口  2、Swagger 在开发阶段使用的框架，帮助后端开发人员做后端的接口测试   "
      },
      {
        "title": "5.3 常用注解",
        "anchor": "53-常用注解",
        "level": 3,
        "text": "  通过注解可以控制生成的接口文档，使接口文档拥有更好的可读性，常用注解如下：  注解 说明 ----------------- ------------------------------------------------------ @Api 用在类上，例如Controller，表示对类的说明 @ApiModel 用在类上，例如entity、DTO、VO @ApiModelProperty 用在属性上，描述属性信息 @ApiOperation 用在方法上，例如Controller的方法，说明方法的用途、作用  接下来，使用上述注解，生成可读性更好的接口文档  在sky-pojo模块中  EmployeeLoginDTO.java  java package com.sky.dto;  import io.swagger.annotations.ApiModel; import io.swagger.annotations.ApiModelProperty; import lombok.Data;  import java.io.Serializable;  @Data @ApiModel(description = \"员工登录时传递的数据模型\") public class EmployeeLoginDTO implements Serializable {  @ApiModelProperty(\"用户名\") private String username;  @ApiModelProperty(\"密码\") private String password;  }    EmployeeLoginVo.java  java package com.sky.vo;  import io.swagger.annotations.ApiModel; import io.swagger.annotations.ApiModelProperty; import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor;  import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor @ApiModel(description = \"员工登录返回的数据格式\") public class EmployeeLoginVO implements Serializable {  @ApiModelProperty(\"主键值\") private Long id;  @ApiModelProperty(\"用户名\") private String userName;  @ApiModelProperty(\"姓名\") private String name;  @ApiModelProperty(\"jwt令牌\") private String token;  }   在sky-server模块中  EmployeeController.java  java package com.sky.controller.admin;  import com.sky.constant.JwtClaimsConstant; import com.sky.dto.EmployeeLoginDTO; import com.sky.entity.Employee; import com.sky.properties.JwtProperties; import com.sky.result.Result; import com.sky.service.EmployeeService; import com.sky.utils.JwtUtil; import com.sky.vo.EmployeeLoginVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.PostMapping; import org.springframework.web.bind.annotation.RequestBody; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;  import java.util.HashMap; import java.util.Map;  / 员工管理 / @RestController @RequestMapping(\"/admin/employee\") @Slf4j @Api(tags = \"员工相关接口\") public class EmployeeController {  @Autowired private EmployeeService employeeService; @Autowired private JwtProperties jwtProperties;  / 登录  @param employeeLoginDTO @return / @PostMapping(\"/login\") @ApiOperation(value = \"员工登录\") public Result login(@RequestBody EmployeeLoginDTO employeeLoginDTO) { //..............   }  / 退出  @return / @PostMapping(\"/logout\") @ApiOperation(\"员工退出\") public Result logout() { return Result.success(); }  }    启动服务：访问http://localhost:8080/doc.html   "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day01 课程内容 - 软件开发整体介绍 - 苍穹外卖项目介绍 - 开发环境搭建 - 导入接口文档 - swagger 项目整体效果展示： ​ 管理端-外卖商家使用 ​ 用户端-点餐用户使用 当我们完成该项目的学习，可以培养以下能力： 1. 软件开发整体介绍 作为一名软件开发工程师,我们需要了解在软件开发过程中的开发流程， 以及软件开发过程中涉及到的岗位角色，角色的分工、职责， 并了解软件开发中涉及到的三种软件环境。那么这一小节，我们将从 软件开发流程、角色分工、软件环境 三个方面整体介绍一下软件开发。 1.1 软件开发流程 1). 第1阶段: 需求分析 完成需求规格说明书、产品原型编写。 需求规格说明书， 一般来说就是使用 word 文档来描述当前项目的各个组成部分，如：系统定义、应用环境、功能规格、性能需求等，都会在文档中描述。 例如： 产品原型，一般是通过网页(html)的形式展示当前的页面展示什么样的数据, 页面的布局是什么样子的，点击某个菜单，打开什么页面，点击某个按钮，出现什么效果，都可以通过产品原型看到。 例如： 2). 第2阶段: 设计 设计的内容包含 ui设计、数据库设计、接口设计。 ui设计：用户界面的设计，主要设计项目的页面效果，小到一个按钮，大到一个页面布局，还有人机交互逻辑的体现。 例如： 数据库设计：需要设计当前项目中涉及到哪些数据库，每一个数据库里面包含哪些表，这些表结构之间的关系是什么样的，表结构中包含哪些字段。 例如： 接口设计：通过分析原型图，首先，粗粒度地分析每个页面有多少接口，然后，再细粒度地分析每个接口的传入参数，返回值参数，同时明确接口路径及请求方式。 例如： 3). 第3阶段: 编码 编写项目代码、并完成单元测试。 项目代码编写：作为软件开发工程师，我们需要对项目的模块功能分析后，进行编码实现。 单元测试：编码实现完毕后，进行单元测试，单元测试通过后再进入到下一阶段。 例如： 4). 第4阶段: 测试 在该阶段中主要由测试人员, 对部署在测试环境的项目进行功能测试, 并出具测试报告。 5). 第5阶段: 上线运维 在项目上线之前， 会由运维人员准备服务器上的软件环境安装、配置， 配置完毕后， 再将我们开发好的项目，部署在服务器上运行。 1.2 角色分工 在对整个软件开发流程熟悉后， 我们还有必要了解一下在整个软件开发流程中涉及到的岗位角色，以及各个角色的职责分工。 image-20210725234015404 岗位/角色 对应阶段 职责/分工 :---------------------------------- ----------------------------- :----------------------------------------- 项目经理 全阶段 对整个项目负责，任务分配、把控进度 产品经理 需求分析 进行需求调研，输出需求调研文档、产品原型等 ui设计师 设计 根据产品原型输出界面效果图 架构师 设计 项目整体架构设计、技术选型等 开发工程师 编码 功能代码实现 测试工程师 测试 编写测试用例，输出测试报告 运维工程师 上线运维 软件环境搭建、项目上线 上述我们讲解的角色分工, 是在一个项目组中比较标准的角色分工, 但是在实际的项目中, 有一些项目组由于人员配置紧张, 可能并没有专门的架构师或测试人员, 这个时候可能需要有项目经理或者程序员兼任。 1.3 软件环境 作为软件开发工程师，在编码的过程中就不可避免地会接触多种软件环境，我们主要来分析在工作中经常遇到的三套环境， 分别是: 开发环境、测试环境、生产环境。 接下来，我们分别介绍一下这三套环境的作用和特点。 1). 开发环境(development) 我们作为软件开发人员，在开发阶段使用的环境，就是开发环境，一般外部用户无法访问。 比如，我们在开发中使用的mysql数据库和其他的一些常用软件，我们可以安装在本地， 也可以安装在一台专门的服务器中， 这些应用软件仅仅在软件开发过程中使用， 项目测试、上线时，我们不会使用这套环境了，这个环境就是开发环境。 2). 测试环境(testing) 当软件开发工程师，将项目的功能模块开发完毕，并且单元测试通过后，就需要将项目部署到测试服务器上，让测试人员对项目进行测试。那这台测试服务器就是专门给测试人员使用的环境， 也就是测试环境，用于项目测试，一般外部用户无法访问。 3). 生产环境(production) 当项目开发完毕，并且由测试人员测试通过之后，就可以上线项目，将项目部署到线上环境，并正式对外提供服务，这个线上环境也称之为生产环境。 ​ 开发环境 测试环境 生产环境 image-20221106182912829 首先，会在开发环境中进行项目开发，往往开发环境大多数都是本地的电脑环境和局域网内的环境，当开发完毕后，然后会把项目部署到测试环境，测试环境一般是一台独立测试服务器的环境，项目测试通过后，最终把项目部署到生产环境，生产环境可以是机房或者云服务器等线上环境。 2. 苍穹外卖项目介绍 在开发苍穹外卖这个项目之前，我们需要全方位的来介绍一下当前我们学习的这个项目。接下来，我们将从项目简介、产品原型、技术选型三个方面来介绍苍穹外卖这个项目。 2.1 项目介绍 本项目（苍穹外卖）是专门为餐饮企业（餐厅、饭店）定制的一款软件产品，包括 系统管理后台 和 小程序端应用 两部分。其中系统管理后台主要提供给餐饮企业内部员工使用，可以对餐厅的分类、菜品、套餐、订单、员工等进行管理维护，对餐厅的各类数据进行统计，同时也可进行来单语音播报功能。小程序端主要提供给消费者使用，可以在线浏览菜品、添加购物车、下单、支付、催单等。 image-20221106185252326 接下来，通过功能架构图来展示 管理端 和 用户端 的具体业务功能模块。 1). 管理端功能 员工登录/退出 , 员工信息管理 , 分类管理 , 菜品管理 , 套餐管理 , 菜品口味管理 , 订单管理 ，数据统计，来单提醒。 2). 用户端功能 微信登录 , 收件人地址管理 , 用户历史订单查询 , 菜品规格查询 , 购物车功能 , 下单 , 支付、分类及菜品浏览。 2.2 产品原型 产品原型 ，用于展示项目的业务功能，一般由产品经理进行设计。 注意事项： 产品原型主要用于展示项目的功能，并不是最终的页面效果。 在课程资料的产品原型文件夹下,提供了两份产品原型。 image-20221106195023552 管理端原型图： 用户端原型图： 1). 管理端 餐饮企业内部员工使用。 主要功能有: 模块 描述 --------- ------------------------------------------------------------ 登录/退出 内部员工必须登录后,才可以访问系统管理后台 员工管理 管理员可以在系统后台对员工信息进行管理，包含查询、新增、编辑、禁用等功能 分类管理 主要对当前餐厅经营的 菜品分类 或 套餐分类 进行管理维护， 包含查询、新增、修改、删除等功能 菜品管理 主要维护各个分类下的菜品信息，包含查询、新增、修改、删除、启售、停售等功能 套餐管理 主要维护当前餐厅中的套餐信息，包含查询、新增、修改、删除、启售、停售等功能 订单管理 主要维护用户在移动端下的订单信息，包含查询、取消、派送、完成，以及订单报表下载等功能 数据统计 主要完成对餐厅的各类数据统计，如营业额、用户数量、订单等 2). 用户端 移动端应用主要提供给消费者使用。主要功能有: 模块 描述 ----------- ------------------------------------------------------------ 登录/退出 用户需要通过微信授权后登录使用小程序进行点餐 点餐-菜单 在点餐界面需要展示出菜品分类/套餐分类, 并根据当前选择的分类加载其中的菜品信息, 供用户查询选择 点餐-购物车 用户选中的菜品就会加入用户的购物车, 主要包含 查询购物车、加入购物车、删除购物车、清空购物车等功能 订单支付 用户选完菜品/套餐后, 可以对购物车菜品进行结算支付, 这时就需要进行订单的支付 个人信息 在个人中心页面中会展示当前用户的基本信息, 用户可以管理收货地址, 也可以查询历史订单数据 2.3 技术选型 关于本项目的技术选型, 我们将会从 用户层、网关层、应用层、数据层 这几个方面进行介绍，主要用于展示项目中使用到的技术框架和中间件等。 image-20221106185646994 1). 用户层 本项目中在构建系统管理后台的前端页面，我们会用到h5、vue.js、elementui、apache echarts(展示图表)等技术。而在构建移动端应用时，我们会使用到微信小程序。 2). 网关层 nginx是一个服务器，主要用来作为http服务器，部署静态资源，访问性能高。在nginx中还有两个比较重要的作用： 反向代理和负载均衡， 在进行项目部署时，要实现tomcat的负载均衡，就可以通过nginx来实现。 3). 应用层 springboot： 快速构建spring项目, 采用 \"约定优于配置\" 的思想, 简化spring项目的配置开发。 springmvc：springmvc是spring框架的一个模块，springmvc和spring无需通过中间整合层进行整合，可以无缝集成。 spring task: 由spring提供的定时任务框架。 httpclient: 主要实现了对http请求的发送。 spring cache: 由spring提供的数据缓存框架 jwt: 用于对应用程序上的用户进行身份验证的标记。 阿里云oss: 对象存储服务，在项目中主要存储文件，如图片等。 swagger： 可以自动的帮助开发人员生成接口文档，并对接口进行测试。 poi: 封装了对excel表格的常用操作。 websocket: 一种通信网络协议，使客户端和服务器之间的数据交换更加简单，用于项目的来单、催单功能实现。 4). 数据层 mysql： 关系型数据库, 本项目的核心业务数据都会采用mysql进行存储。 redis： 基于key-value格式存储的内存数据库, 访问速度快, 经常使用它做缓存。 mybatis： 本项目持久层将会使用mybatis开发。 pagehelper: 分页插件。 spring data redis: 简化java代码操作redis的api。 5). 工具 git: 版本控制工具, 在团队协作中, 使用该工具对项目中的代码进行管理。 maven: 项目构建工具。 junit：单元测试工具，开发人员功能实现完毕后，需要通过junit对功能进行单元测试。 postman: 接口测工具，模拟用户发起的各类http请求，获取对应的响应结果。 3. 开发环境搭建 开发环境搭建主要包含 前端环境 和 后端环境 两部分。作为服务端开发工程师， 我们课程学习的重心应该放在后端的业务代码上， 前端的页面我们只需要导入资料中的nginx， 前端页面的代码我们只需要能看懂即可。 3.1 前端环境搭建 1). 前端工程基于 nginx 从资料中找到前端运行环境的nginx，移动到 非中文目录 下。 image-20221106202239828 sky 目录中存放了管理端的前端资源，具体如下： 2). 启动nginx，访问测试 双击 nginx.exe 即可启动 nginx 服务，访问端口号为 80 http://localhost:80 3.2 后端环境搭建 3.2.1 熟悉项目结构 后端工程基于 maven 进行项目构建，并且进行分模块开发。 1). 从当天资料中找到后端初始工程： 2). 用 idea 打开初始工程，了解项目的整体结构： 对工程的每个模块作用说明： 序号 名称 说明 -------- ------------ ------------------------------------------------------------ 1 sky-take-out maven父工程，统一管理依赖版本，聚合其他子模块 2 sky-common 子模块，存放公共类，例如：工具类、常量类、异常类等 3 sky-pojo 子模块，存放实体类、vo、dto等 4 sky-server 子模块，后端服务，存放配置文件、controller、service、mapper等 对项目整体结构了解后，接下来我们详细分析上述的每个子模块： - sky-common: 模块中存放的是一些公共类，可以供其他模块使用 分析sky-common模块的每个包的作用： 名称 说明 ----------- ------------------------------ constant 存放相关常量类 context 存放上下文类 enumeration 项目的枚举类存储 exception 存放自定义异常类 json 处理json转换的类 properties 存放springboot相关的配置属性类 result 返回结果类的封装 utils 常用工具类 - sky-pojo: 模块中存放的是一些 entity、dto、vo 分析sky-pojo模块的每个包的作用： 名称 说明 -------- -------------------------------------------- entity 实体，通常和数据库中的表对应 dto 数据传输对象，通常用于程序中各层之间传递数据 vo 视图对象，为前端展示数据提供的对象 pojo 普通java对象，只有属性和对应的getter和setter - sky-server: 模块中存放的是 配置文件、配置类、拦截器、controller、service、mapper、启动类等 分析sky-server模块的每个包的作用： 名称 说明 -------------- ---------------- config 存放配置类 controller 存放controller类 interceptor 存放拦截器类 mapper 存放mapper接口 service 存放service类 skyapplication 启动类 3.2.2 git版本控制 使用git进行项目代码的版本控制，具体操作： 1). 创建git本地仓库 当idea中出现： 说明本地仓库创建成功。 2). 创建git远程仓库 访问https://gitee.com/，新建仓库 点击 创建 3). 将本地文件推送到git远程仓库 1. 提交文件至本地仓库 忽略以下类型文件 开始提交 中间出现：点击commit 2. 添加git远程仓库地址 复制远程地址： 添加地址： 3. 推送 成功推送至远程仓库 3.2.3 数据库环境搭建 1. 从资料中找到sky.sql 直接打开sky.sql文件 image-20221107101238205 通过该sql文件直接可创建数据库，所以不需要提前创建数据库，直接导入该文件执行即可。 2. 执行sky.sql文件 执行完成后，共创建出11张表 每张表的说明： 序号 表名 中文名 -------- ------------- -------------- 1 employee 员工表 2 category 分类表 3 dish 菜品表 4 dish_flavor 菜品口味表 5 setmeal 套餐表 6 setmeal_dish 套餐菜品关系表 7 user 用户表 8 address_book 地址表 9 shopping_cart 购物车表 10 orders 订单表 11 order_detail 订单明细表 我们目前先简单了解大概有哪些表, 每张表存储什么数据, 有一个印象。对于具体的表结构, 以及表结构中的字段, 可以参考资料中的 《数据库设计文档》 ，同时在讲解具体的功能开发时, 我们也会再详细介绍。 3.2.4 前后端联调 后端的初始工程中已经实现了 登录 功能，直接进行前后端联调测试即可 实现思路： 1.controller层 在sky-server模块中，com.sky.controller.admin.employeecontroller java / 登录 @param employeelogindto @return / @postmapping(\"/login\") public result login(@requestbody employeelogindto employeelogindto) { log.info(\"员工登录：{}\", employeelogindto); //调用service方法查询数据库 employee employee = employeeservice.login(employeelogindto); //登录成功后，生成jwt令牌 map claims = new hashmap< (); claims.put(jwtclaimsconstant.emp_id, employee.getid()); string token = jwtutil.createjwt( jwtproperties.getadminsecretkey(), jwtproperties.getadminttl(), claims); employeeloginvo employeeloginvo = employeeloginvo.builder() .id(employee.getid()) .username(employee.getusername()) .name(employee.getname()) .token(token) .build(); return result.success(employeeloginvo); } 2.service层 在sky-server模块中，com.sky.service.impl.employeeserviceimpl java / 员工登录 @param employeelogindto @return / public employee login(employeelogindto employeelogindto) { string username = employeelogindto.getusername(); string password = employeelogindto.getpassword(); //1、根据用户名查询数据库中的数据 employee employee = employeemapper.getbyusername(username); //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） if (employee == null) { //账号不存在 throw new accountnotfoundexception(messageconstant.account_not_found); } //密码比对 if (!password.equals(employee.getpassword())) { //密码错误 throw new passworderrorexception(messageconstant.password_error); } if (employee.getstatus() == statusconstant.disable) { //账号被锁定 throw new accountlockedexception(messageconstant.account_locked); } //3、返回实体对象 return employee; } 3.mapper层 在sky-server模块中，com.sky.mapper.employeemapper java package com.sky.mapper; import com.sky.entity.employee; import org.apache.ibatis.annotations.mapper; import org.apache.ibatis.annotations.select; @mapper public interface employeemapper { / 根据用户名查询员工 @param username @return / @select(\"select from employee where username = {username}\") employee getbyusername(string username); } 注：可以通过断点调试跟踪后端程序的执行过程 3.2.5 nginx反向代理和负载均衡 对登录功能测试完毕后，接下来，我们思考一个问题： 前端发送的请求，是如何请求到后端服务的？ 前端请求地址：http://localhost/api/employee/login 后端接口地址：http://localhost:8080/admin/employee/login ​ 前端请求地址 后端接口地址 很明显，两个地址不一致，那是如何请求到后端服务的呢？ image-20221107152041371 1). nginx反向代理 nginx 反向代理 ，就是将前端发送的动态请求由 nginx 转发到后端服务器 那为什么不直接通过浏览器直接请求后台服务端，需要通过nginx反向代理呢？ nginx 反向代理的好处： - 提高访问速度 因为nginx本身可以进行缓存，如果访问的同一接口，并且做了数据缓存，nginx就直接可把数据返回，不需要真正地访问服务端，从而提高访问速度。 - 进行负载均衡 所谓负载均衡,就是把大量的请求按照我们指定的方式均衡的分配给集群中的每台服务器。 - 保证后端服务安全 因为一般后台服务地址不会暴露，所以使用浏览器不能直接访问，可以把nginx作为请求访问的入口，请求到达nginx后转发到具体的服务中，从而保证后端服务的安全。 nginx 反向代理的配置方式： nginx server{ listen 80; server_name localhost; location /api/{ proxy_pass http://localhost:8080/admin/; 反向代理 } } proxy_pass： 该指令是用来设置代理服务器的地址，可以是主机名称，ip地址加端口号等形式。 如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://localhost:8080/admin/上来。 接下来，进到nginx-1.20.2\\conf，打开nginx配置 nginx 反向代理,处理管理端发送的请求 location /api/ { proxy_pass http://localhost:8080/admin/; proxy_pass http://webservers/admin/; } 当在访问http://localhost/api/employee/login，nginx接收到请求后转到http://localhost:8080/admin/，故最终的请求地址为http://localhost:8080/admin/employee/login，和后台服务的访问地址一致。 2). nginx 负载均衡 当如果服务以集群的方式进行部署时，那nginx在转发请求到服务器时就需要做相应的负载均衡。其实，负载均衡从本质上来说也是基于反向代理来实现的，最终都是转发请求。 nginx 负载均衡的配置方式： nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; } server{ listen 80; server_name localhost; location /api/{ proxy_pass http://webservers/admin; 负载均衡 } } upstream： 如果代理服务器是一组服务器的话，我们可以使用upstream指令配置后端服务器组。 如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://webservers/admin，根据webservers名称找到一组服务器，根据设置的负载均衡策略(默认是轮询)转发到具体的服务器。 注： upstream后面的名称可自定义，但要上下保持一致。 nginx 负载均衡策略： 名称 说明 ---------- ------------------------------------------------------ 轮询 默认方式 weight 权重方式，默认为1，权重越高，被分配的客户端请求就越多 ip_hash 依据ip分配方式，这样每个访客可以固定访问一个后端服务 least_conn 依据最少连接方式，把请求优先分配给连接数少的后端服务 url_hash 依据url分配方式，这样相同的url会被分配到同一个后端服务 fair 依据响应时间方式，响应时间短的服务将会被优先分配 具体配置方式： 轮询： nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; } weight: nginx upstream webservers{ server 192.168.100.128:8080 weight=90; server 192.168.100.129:8080 weight=10; } ip_hash: nginx upstream webservers{ ip_hash; server 192.168.100.128:8080; server 192.168.100.129:8080; } least_conn: nginx upstream webservers{ least_conn; server 192.168.100.128:8080; server 192.168.100.129:8080; } url_hash: nginx upstream webservers{ hash &request_uri; server 192.168.100.128:8080; server 192.168.100.129:8080; } fair: nginx upstream webservers{ server 192.168.100.128:8080; server 192.168.100.129:8080; fair; } 3.3 完善登录功能 问题： 员工表中的密码是明文存储，安全性太低。 image-20221107160529803 解决思路： 1. 将密码加密后存储，提高安全性 2. 使用md5加密方式对明文密码加密 实现步骤： 1. 修改数据库中明文密码，改为md5加密后的密文 打开employee表，修改密码 image-20221107161446710 2. 修改java代码，前端提交的密码进行md5加密后再跟数据库中密码比对 打开employeeserviceimpl.java，修改比对密码 java / 员工登录 @param employeelogindto @return / public employee login(employeelogindto employeelogindto) { //1、根据用户名查询数据库中的数据 //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） //....... //密码比对 // todo 后期需要进行md5加密，然后再进行比对 password = digestutils.md5digestashex(password.getbytes()); if (!password.equals(employee.getpassword())) { //密码错误 throw new passworderrorexception(messageconstant.password_error); } //........ //3、返回实体对象 return employee; } 4. 导入接口文档 接下来，就要进入到项目的业务开发了，而我们的开发方式就是基本当前企业主流的前后端分离开发方式，那么这种方式就要求我们之前需要先将接口定义好，这样前后端人员才能并行开发，所以，这个章节就需要将接口文档导入到管理平台，为我们后面业务开发做好准备。其实，在真实的企业开发中，接口设计过程其实是一个非常漫长的过程，可能需要多次开会讨论调整，甚至在开发的过程中才会发现某些接口定义还需要再调整，这种情况其实是非常常见的，但是由于项目时间原因，所以选择一次性导入所有的接口，在开发业务功能过程当中，也会带着大家一起来分析一下对应的接口是怎么确定下来的，为什么要这样定义，从而培养同学们的接口设计能力。 4.1 前后端分离开发流程 第一步：定义接口，确定接口的路径、请求方式、传入参数、返回参数。 第二步：前端开发人员和后端开发人员并行开发，同时，也可自测。 第三步：前后端人员进行连调测试。 第四步：提交给测试人员进行最终测试。 4.2 操作步骤 将课程资料中提供的项目接口导入yapi。访问地址：http://yapi.smart-xwork.cn/ 1). 从资料中找到项目接口文件 2). 导入到yapi平台 在yapi平台创建出两个项目 选择苍穹外卖-管理端接口.json导入 导入成功 另一个用户端json文件也执行相同操作。 5. swagger 5.1 介绍 swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 restful 风格的 web 服务( )。 它的主要作用是： 1. 使得前后端分离开发更加方便，有利于团队协作 2. 接口的文档在线自动生成，降低后端开发人员编写接口文档的负担 3. 功能测试 spring已经将swagger纳入自身的标准，建立了spring-swagger项目，现在叫springfox。通过在项目中引入springfox ，即可非常简单快捷的使用swagger。 knife4j是为java mvc框架集成swagger生成api文档的增强解决方案,前身是swagger-bootstrap-ui,取名kni4j是希望它能像一把匕首一样小巧,轻量,并且功能强悍! 目前，一般都使用knife4j框架。 5.2 使用步骤 1. 导入 knife4j 的maven坐标 在pom.xml中添加依赖 xml com.github.xiaoymin knife4j-spring-boot-starter 2. 在配置类中加入 knife4j 相关配置 webmvcconfiguration.java java / 通过knife4j生成接口文档 @return / @bean public docket docket() { apiinfo apiinfo = new apiinfobuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build(); docket docket = new docket(documentationtype.swagger_2) .apiinfo(apiinfo) .select() .apis(requesthandlerselectors.basepackage(\"com.sky.controller\")) .paths(pathselectors.any()) .build(); return docket; } 3. 设置静态资源映射，否则接口文档页面无法访问 webmvcconfiguration.java java / 设置静态资源映射 @param registry / protected void addresourcehandlers(resourcehandlerregistry registry) { registry.addresourcehandler(\"/doc.html\").addresourcelocations(\"classpath:/meta-inf/resources/\"); registry.addresourcehandler(\"/webjars/ \").addresourcelocations(\"classpath:/meta-inf/resources/webjars/\"); } 4. 访问测试 接口文档访问路径为 http://ip:port/doc.html --- http://localhost:8080/doc.html 接口测试:测试登录功能 思考： 通过 swagger 就可以生成接口文档，那么我们就不需要 yapi 了？ 1、yapi 是设计阶段使用的工具，管理和维护接口 2、swagger 在开发阶段使用的框架，帮助后端开发人员做后端的接口测试 5.3 常用注解 通过注解可以控制生成的接口文档，使接口文档拥有更好的可读性，常用注解如下： 注解 说明 ----------------- ------------------------------------------------------ @api 用在类上，例如controller，表示对类的说明 @apimodel 用在类上，例如entity、dto、vo @apimodelproperty 用在属性上，描述属性信息 @apioperation 用在方法上，例如controller的方法，说明方法的用途、作用 接下来，使用上述注解，生成可读性更好的接口文档 在sky-pojo模块中 employeelogindto.java java package com.sky.dto; import io.swagger.annotations.apimodel; import io.swagger.annotations.apimodelproperty; import lombok.data; import java.io.serializable; @data @apimodel(description = \"员工登录时传递的数据模型\") public class employeelogindto implements serializable { @apimodelproperty(\"用户名\") private string username; @apimodelproperty(\"密码\") private string password; } employeeloginvo.java java package com.sky.vo; import io.swagger.annotations.apimodel; import io.swagger.annotations.apimodelproperty; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor @apimodel(description = \"员工登录返回的数据格式\") public class employeeloginvo implements serializable { @apimodelproperty(\"主键值\") private long id; @apimodelproperty(\"用户名\") private string username; @apimodelproperty(\"姓名\") private string name; @apimodelproperty(\"jwt令牌\") private string token; } 在sky-server模块中 employeecontroller.java java package com.sky.controller.admin; import com.sky.constant.jwtclaimsconstant; import com.sky.dto.employeelogindto; import com.sky.entity.employee; import com.sky.properties.jwtproperties; import com.sky.result.result; import com.sky.service.employeeservice; import com.sky.utils.jwtutil; import com.sky.vo.employeeloginvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.postmapping; import org.springframework.web.bind.annotation.requestbody; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.util.hashmap; import java.util.map; / 员工管理 / @restcontroller @requestmapping(\"/admin/employee\") @slf4j @api(tags = \"员工相关接口\") public class employeecontroller { @autowired private employeeservice employeeservice; @autowired private jwtproperties jwtproperties; / 登录 @param employeelogindto @return / @postmapping(\"/login\") @apioperation(value = \"员工登录\") public result login(@requestbody employeelogindto employeelogindto) { //.............. } / 退出 @return / @postmapping(\"/logout\") @apioperation(\"员工退出\") public result logout() { return result.success(); } } 启动服务：访问http://localhost:8080/doc.html"
  },
  {
    "id": "project-baa4a422189e",
    "version": "04ee57e6eba0",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day02/苍穹外卖-day02.md",
    "title": "苍穹外卖-day02",
    "description": "- 新增员工 - 员工分页查询 - 启用禁用员工账号 - 编辑员工 - 导入分类模块功能代码",
    "subject": "projects",
    "kind": "项目原文",
    "order": 12,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 62,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 新增员工 - 员工分页查询 - 启用禁用员工账号 - 编辑员工 - 导入分类模块功能代码    功能实现： 员工管理、菜品分类管理。  员工管理效果：      菜品分类管理效果：     "
      },
      {
        "title": "1. 新增员工",
        "anchor": "1-新增员工",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 需求分析和设计",
        "anchor": "11-需求分析和设计",
        "level": 3,
        "text": "  1.1.1 产品原型  一般在做需求分析时，往往都是对照着产品原型进行分析，因为产品原型比较直观，便于我们理解业务。  后台系统中可以管理员工信息，通过新增员工来添加后台系统用户。  新增员工原型：      当填写完表单信息, 点击\"保存\"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。  注意事项：  1. 账号必须是唯一的 2. 手机号为合法的11位手机号码 3. 身份证号为合法的18位身份证号码 4. 密码默认为123456    1.1.2 接口设计  找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html    明确新增员工接口的 请求路径、请求方式、请求参数、返回数据 。    本项目约定：  - 管理端 发出的请求，统一使用 /admin 作为前缀。 - 用户端 发出的请求，统一使用 /user 作为前缀。    1.1.3 表设计  新增员工，其实就是将我们新增页面录入的员工数据插入到employee表。  employee表结构：  字段名 数据类型 说明 备注 ----------- ------------ ------------ ----------- id bigint 主键 自增 name varchar(32) 姓名 username varchar(32) 用户名 唯一 password varchar(64) 密码 phone varchar(11) 手机号 sex varchar(2) 性别 id_number varchar(18) 身份证号 status Int 账号状态 1正常 0锁定 create_time Datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id  其中，employee表中的status字段已经设置了默认值1，表示状态正常。  image-20221111180159188   "
      },
      {
        "title": "1.2 代码开发",
        "anchor": "12-代码开发",
        "level": 3,
        "text": "  1.2.1 设计DTO类  根据新增员工接口设计对应的DTO  前端传递参数列表：    思考： 是否可以使用对应的实体类来接收呢？    注意： 当前端提交的数据和实体类中对应的属性差别比较大时，建议使用DTO来封装数据  由于上述传入参数和实体类有较大差别，所以自定义DTO类。  进入sky-pojo模块，在com.sky.dto包下，已定义EmployeeDTO  java package com.sky.dto;  import lombok.Data;  import java.io.Serializable;  @Data public class EmployeeDTO implements Serializable {  private Long id;  private String username;  private String name;  private String phone;  private String sex;  private String idNumber;  }     1.2.2 Controller层  EmployeeController中创建新增员工方法  进入到sky-server模块中，在com.sky.controller.admin包下，在EmployeeController中创建新增员工方法，接收前端提交的参数。  java / 新增员工 @param employeeDTO @return / @PostMapping @ApiOperation(\"新增员工\") public Result save(@RequestBody EmployeeDTO employeeDTO){ log.info(\"新增员工：{}\",employeeDTO); employeeService.save(employeeDTO);//该方法后续步骤会定义 return Result.success(); }   注： Result类定义了后端统一返回结果格式。  进入sky-common模块，在com.sky.result包下定义了Result.java  java package com.sky.result;  import lombok.Data;  import java.io.Serializable;  / 后端统一返回结果 @param / @Data public class Result implements Serializable {  private Integer code; //编码：1成功，0和其它数字为失败 private String msg; //错误信息 private T data; //数据  public static Result success() { Result result = new Result (); result.code = 1; return result; }  public static Result success(T object) { Result result = new Result (); result.data = object; result.code = 1; return result; }  public static Result error(String msg) { Result result = new Result(); result.msg = msg; result.code = 0; return result; }  }     1.2.3 Service层接口  在EmployeeService接口中声明新增员工方法  进入到sky-server模块中,com.sky.server.EmployeeService  java / 新增员工 @param employeeDTO / void save(EmployeeDTO employeeDTO);     1.2.4 Service层实现类  在EmployeeServiceImpl中实现新增员工方法  com.sky.server.impl.EmployeeServiceImpl中创建方法  java / 新增员工  @param employeeDTO / public void save(EmployeeDTO employeeDTO) { Employee employee = new Employee();  //对象属性拷贝 BeanUtils.copyProperties(employeeDTO, employee);  //设置账号的状态，默认正常状态 1表示正常 0表示锁定 employee.setStatus(StatusConstant.ENABLE);  //设置密码，默认密码123456 employee.setPassword(DigestUtils.md5DigestAsHex(PasswordConstant.DEFAULT_PASSWORD.getBytes()));  //设置当前记录的创建时间和修改时间 employee.setCreateTime(LocalDateTime.now()); employee.setUpdateTime(LocalDateTime.now());  //设置当前记录创建人id和修改人id employee.setCreateUser(10L);//目前写个假数据，后期修改 employee.setUpdateUser(10L);  employeeMapper.insert(employee);//后续步骤定义 }     在sky-common模块com.sky.constants包下已定义StatusConstant.java  java package com.sky.constant;  / 状态常量，启用或者禁用 / public class StatusConstant {  //启用 public static final Integer ENABLE = 1;  //禁用 public static final Integer DISABLE = 0; }      1.2.5 Mapper层  在EmployeeMapper中声明insert方法  com.sky.EmployeeMapper中添加方法  java / 插入员工数据 @param employee / @Insert(\"insert into employee (name, username, password, phone, sex, id_number, create_time, update_time, create_user, update_user,status) \" + \"values \" + \"( {name}, {username}, {password}, {phone}, {sex}, {idNumber}, {createTime}, {updateTime}, {createUser}, {updateUser}, {status})\") void insert(Employee employee);     在application.yml中已开启驼峰命名，故id_number和idNumber可对应。  yaml mybatis: configuration: 开启驼峰命名 map-underscore-to-camel-case: true    "
      },
      {
        "title": "1.3 功能测试",
        "anchor": "13-功能测试",
        "level": 3,
        "text": "  代码已经发开发完毕，对新增员工功能进行测试。  功能测试实现方式：  - 通过接口文档测试 - 通前后端联调测试  接下来我们使用上述两种方式分别测试。    1.3.1 接口文档测试  启动服务： 访问http://localhost:8080/doc.html，进入新增员工接口    json数据：  json { \"id\": 0, \"idNumber\": \"111222333444555666\", \"name\": \"xiaozhi\", \"phone\": \"PHONE_EXAMPLE\", \"sex\": \"1\", \"username\": \"小智\" }   响应码：401 报错  通过断点调试： 进入到JwtTokenAdminInterceptor拦截器  java / 校验jwt  @param request @param response @param handler @return @throws Exception / public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception { //判断当前拦截到的是Controller的方法还是其他资源 if (!(handler instanceof HandlerMethod)) { //当前拦截到的不是动态方法，直接放行 return true; }  //1、从请求头中获取令牌 jwtProperties.getAdminTokenName()获取为token String token = request.getHeader(jwtProperties.getAdminTokenName());  //2、校验令牌 try { log.info(\"jwt校验:{}\", token); Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token); Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString()); log.info(\"当前员工id：\", empId); //3、通过，放行 return true; } catch (Exception ex) { //4、不通过，响应401状态码 response.setStatus(401); return false; } }   报错原因： 由于JWT令牌校验失败，导致EmployeeController的save方法没有被调用  解决方法： 调用员工登录接口获得一个合法的JWT令牌  使用admin用户登录获取令牌    添加令牌：  将合法的JWT令牌添加到全局参数中  文档管理-- 全局参数设置-- 添加参数    接口测试：    其中，请求头部含有JWT令牌    查看employee表：  image-20221111191624908  测试成功。    1.3.2 前后端联调测试  启动nginx,访问 http://localhost  登录-- 员工管理-- 添加员工    保存后，查看employee表    测试成功。    注意： 由于开发阶段前端和后端是并行开发的，后端完成某个功能后，此时前端对应的功能可能还没有开发完成， 导致无法进行前后端联调测试。所以在开发阶段，后端测试主要以接口文档测试为主。   "
      },
      {
        "title": "1.4 代码完善",
        "anchor": "14-代码完善",
        "level": 3,
        "text": "  目前，程序存在的问题主要有两个：  - 录入的用户名已存，抛出的异常后没有处理 - 新增员工时，创建人id和修改人id设置为固定值  接下来，我们对上述两个问题依次进行分析和解决。    1.4.1 问题一  描述： 录入的用户名已存，抛出的异常后没有处理  分析：  新增username=zhangsan的用户，若employee表中之前已存在。    后台报错信息：    查看employee表结构：    发现，username已经添加了唯一约束，不能重复。  解决：  通过全局异常处理器来处理。  进入到sky-server模块，com.sky.hander包下，GlobalExceptionHandler.java添加方法  java / 处理SQL异常 @param ex @return / @ExceptionHandler public Result exceptionHandler(SQLIntegrityConstraintViolationException ex){ //Duplicate entry 'zhangsan' for key 'employee.idx_username' String message = ex.getMessage(); if(message.contains(\"Duplicate entry\")){ String[] split = message.split(\" \"); String username = split[2]; String msg = username + MessageConstant.ALREADY_EXISTS; return Result.error(msg); }else{ return Result.error(MessageConstant.UNKNOWN_ERROR); } }   进入到sky-common模块，在MessageConstant.java添加  java public static final String ALREADY_EXISTS = \"已存在\";   再次，接口测试：      1.4.2 问题二  描述 ：新增员工时，创建人id和修改人id设置为固定值  分析：  java / 新增员工  @param employeeDTO / public void save(EmployeeDTO employeeDTO) { Employee employee = new Employee(); //................ //////////当前设置的id为固定值10////////// employee.setCreateUser(10L); employee.setUpdateUser(10L); ////////////////////////////////////// //.................................  employeeMapper.insert(employee);//后续步骤定义 }   解决：  通过某种方式动态获取当前登录员工的id。    员工登录成功后会生成JWT令牌并响应给前端：  在sky-server模块  java package com.sky.controller.admin; / 员工管理 / @RestController @RequestMapping(\"/admin/employee\") @Slf4j @Api(tags = \"员工相关接口\") public class EmployeeController {  @Autowired private EmployeeService employeeService; @Autowired private JwtProperties jwtProperties;  / 登录  @param employeeLoginDTO @return / @PostMapping(\"/login\") @ApiOperation(value = \"员工登录\") public Result login(@RequestBody EmployeeLoginDTO employeeLoginDTO) { //.........  //登录成功后，生成jwt令牌 Map claims = new HashMap< (); claims.put(JwtClaimsConstant.EMP_ID, employee.getId()); String token = JwtUtil.createJWT( jwtProperties.getAdminSecretKey(), jwtProperties.getAdminTtl(), claims);  //............  return Result.success(employeeLoginVO); }  }   后续请求中，前端会携带JWT令牌，通过JWT令牌可以解析出当前登录员工id：  JwtTokenAdminInterceptor.java  java package com.sky.interceptor;  / jwt令牌校验的拦截器 / @Component @Slf4j public class JwtTokenAdminInterceptor implements HandlerInterceptor {  @Autowired private JwtProperties jwtProperties;  / 校验jwt  @param request @param response @param handler @return @throws Exception / public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {  //..............  //1、从请求头中获取令牌 String token = request.getHeader(jwtProperties.getAdminTokenName());  //2、校验令牌 try { log.info(\"jwt校验:{}\", token); Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token); Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString()); log.info(\"当前员工id：\", empId); //3、通过，放行 return true; } catch (Exception ex) { //4、不通过，响应401状态码 response.setStatus(401); return false; } } }   思考： 解析出登录员工id后，如何传递给Service的save方法？  通过ThreadLocal进行传递。    1.4.3 ThreadLocal  介绍：  ThreadLocal 并不是一个Thread，而是Thread的局部变量。 ThreadLocal为每个线程提供单独一份存储空间，具有线程隔离的效果，只有在线程内才能获取到对应的值，线程外则不能访问。  常用方法：  - public void set(T value) 设置当前线程的线程局部变量的值 - public T get() 返回当前线程所对应的线程局部变量的值 - public void remove() 移除当前线程的线程局部变量  对ThreadLocal有了一定认识后，接下来继续解决 问题二    初始工程中已经封装了 ThreadLocal 操作的工具类：  在sky-common模块  java package com.sky.context;  public class BaseContext {  public static ThreadLocal threadLocal = new ThreadLocal< ();  public static void setCurrentId(Long id) { threadLocal.set(id); }  public static Long getCurrentId() { return threadLocal.get(); }  public static void removeCurrentId() { threadLocal.remove(); }  }   在拦截器中解析出当前登录员工id，并放入线程局部变量中：  在sky-server模块中，拦截器：  java package com.sky.interceptor;  / jwt令牌校验的拦截器 / @Component @Slf4j public class JwtTokenAdminInterceptor implements HandlerInterceptor {  @Autowired private JwtProperties jwtProperties;  / 校验jwt  @param request @param response @param handler @return @throws Exception / public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {  //.............................  //2、校验令牌 try { //................. Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token); Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString()); log.info(\"当前员工id：\", empId); /////将用户id存储到ThreadLocal//////// BaseContext.setCurrentId(empId); //////////////////////////////////// //3、通过，放行 return true; } catch (Exception ex) { //...................... } } }   在Service中获取线程局部变量中的值：  java / 新增员工  @param employeeDTO / public void save(EmployeeDTO employeeDTO) { //.............................  //设置当前记录创建人id和修改人id employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改 employee.setUpdateUser(BaseContext.getCurrentId());  employeeMapper.insert(employee); }   测试：使用admin(id=1)用户登录后添加一条记录    查看employee表记录     "
      },
      {
        "title": "1.5 代码提交",
        "anchor": "15-代码提交",
        "level": 3,
        "text": "  点击提交：    提交过程中，出现提示：    继续push:    推送成功：     "
      },
      {
        "title": "2. 员工分页查询",
        "anchor": "2-员工分页查询",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 需求分析和设计",
        "anchor": "21-需求分析和设计",
        "level": 3,
        "text": "  2.1.1 产品原型  系统中的员工很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。而在我们的分页查询页面中, 除了分页条件以外，还有一个查询条件 \"员工姓名\"。  查询员工原型：    业务规则 ：  - 根据页码展示员工信息 - 每页展示10条数据 - 分页查询时可以根据需要，输入员工姓名进行查询    2.1.2 接口设计  找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html    注意事项：  - 请求参数类型为Query，不是json格式提交，在路径后直接拼接。/admin/employee/page?name=zhangsan - 返回数据中records数组中使用Employee实体类对属性进行封装。   "
      },
      {
        "title": "2.2 代码开发",
        "anchor": "22-代码开发",
        "level": 3,
        "text": "  2.2.1 设计DTO类  根据请求参数进行封装，在sky-pojo模块中  java package com.sky.dto;  import lombok.Data;  import java.io.Serializable;  @Data public class EmployeePageQueryDTO implements Serializable {  //员工姓名 private String name;  //页码 private int page;  //每页显示记录数 private int pageSize;  }      2.2.2 封装PageResult  后面所有的分页查询，统一都封装为PageResult对象。  在sky-common模块  java package com.sky.result;  import lombok.AllArgsConstructor; import lombok.Data; import lombok.NoArgsConstructor;  import java.io.Serializable; import java.util.List;  / 封装分页查询结果 / @Data @AllArgsConstructor @NoArgsConstructor public class PageResult implements Serializable {  private long total; //总记录数  private List records; //当前页数据集合  }    员工信息分页查询后端返回的对象类型为: Result  java package com.sky.result;  import lombok.Data;  import java.io.Serializable;  / 后端统一返回结果 @param / @Data public class Result implements Serializable {  private Integer code; //编码：1成功，0和其它数字为失败 private String msg; //错误信息 private T data; //数据  public static Result success() { Result result = new Result (); result.code = 1; return result; }  public static Result success(T object) { Result result = new Result (); result.data = object; result.code = 1; return result; }  public static Result error(String msg) { Result result = new Result(); result.msg = msg; result.code = 0; return result; }  }     2.2.3 Controller层  在sky-server模块中，com.sky.controller.admin.EmployeeController中添加分页查询方法。  java / 员工分页查询 @param employeePageQueryDTO @return / @GetMapping(\"/page\") @ApiOperation(\"员工分页查询\") public Result page(EmployeePageQueryDTO employeePageQueryDTO){ log.info(\"员工分页查询，参数为：{}\", employeePageQueryDTO); PageResult pageResult = employeeService.pageQuery(employeePageQueryDTO);//后续定义 return Result.success(pageResult); }     2.2.4 Service层接口  在EmployeeService接口中声明pageQuery方法：  java / 分页查询 @param employeePageQueryDTO @return / PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO);     2.2.5 Service层实现类  在EmployeeServiceImpl中实现pageQuery方法：  java / 分页查询  @param employeePageQueryDTO @return / public PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO) { // select from employee limit 0,10 //开始分页查询 PageHelper.startPage(employeePageQueryDTO.getPage(), employeePageQueryDTO.getPageSize());  Page page = employeeMapper.pageQuery(employeePageQueryDTO);//后续定义  long total = page.getTotal(); List records = page.getResult();  return new PageResult(total, records); }   注意： 此处使用 mybatis 的分页插件 PageHelper 来简化分页代码的开发。底层基于 mybatis 的拦截器实现。  故在pom.xml文中添加依赖(初始工程已添加)  xml  com.github.pagehelper pagehelper-spring-boot-starter ${pagehelper}      2.2.6 Mapper层  在 EmployeeMapper 中声明 pageQuery 方法：  java / 分页查询 @param employeePageQueryDTO @return / Page pageQuery(EmployeePageQueryDTO employeePageQueryDTO);   在 src/main/resources/mapper/EmployeeMapper.xml 中编写SQL：  sql  select from employee   and name like concat('%', {name},'%')   order by create_time desc     "
      },
      {
        "title": "2.3 功能测试",
        "anchor": "23-功能测试",
        "level": 3,
        "text": "  可以通过接口文档进行测试，也可以进行前后端联调测试。  接下来使用两种方式分别测试：    2.3.1 接口文档测试  重启服务： 访问http://localhost:8080/doc.html，进入员工分页查询    响应结果：      2.3.2 前后端联调测试  点击员工管理      输入员工姓名为zhangsan    不难发现， 最后操作时间格式 不清晰，在 代码完善 中解决。     "
      },
      {
        "title": "2.4 代码完善",
        "anchor": "24-代码完善",
        "level": 3,
        "text": "  问题描述： 操作时间字段显示有问题。      解决方式：  1). 方式一  在属性上加上注解，对日期进行格式化    但这种方式，需要在每个时间属性上都要加上该注解，使用较麻烦，不能全局处理。    2). 方式二（推荐 )  在WebMvcConfiguration中扩展SpringMVC的消息转换器，统一对日期类型进行格式处理  java / 扩展Spring MVC框架的消息转化器 @param converters / protected void extendMessageConverters(List converters) { log.info(\"扩展消息转换器...\"); //创建一个消息转换器对象 MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter(); //需要为消息转换器设置一个对象转换器，对象转换器可以将Java对象序列化为json数据 converter.setObjectMapper(new JacksonObjectMapper()); //将自己的消息转化器加入容器中 converters.add(0,converter); }   添加后，再次测试    时间格式定义，sky-common模块中  java package com.sky.json;  public class JacksonObjectMapper extends ObjectMapper {  //....... public static final String DEFAULT_DATE_TIME_FORMAT = \"yyyy-MM-dd HH:mm\"; //.......  } }  "
      },
      {
        "title": "2.5 代码提交",
        "anchor": "25-代码提交",
        "level": 3,
        "text": "    后续步骤和新增员工代码提交一致，不再赘述。   "
      },
      {
        "title": "3. 启用禁用员工账号",
        "anchor": "3-启用禁用员工账号",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 需求分析与设计",
        "anchor": "31-需求分析与设计",
        "level": 3,
        "text": "  3.1.1 产品原型  在员工管理列表页面，可以对某个员工账号进行启用或者禁用操作。账号禁用的员工不能登录系统，启用后的员工可以正常登录。如果某个员工账号状态为正常，则按钮显示为 \"禁用\"，如果员工账号状态为已禁用，则按钮显示为\"启用\"。  启禁用员工原型：    业务规则：  - 可以对状态为“启用” 的员工账号进行“禁用”操作 - 可以对状态为“禁用”的员工账号进行“启用”操作 - 状态为“禁用”的员工账号不能登录系统    3.1.2 接口设计      1). 路径参数携带状态值。  2). 同时，把id传递过去，明确对哪个用户进行操作。  3). 返回数据code状态是必须，其它是非必须。   "
      },
      {
        "title": "3.2 代码开发",
        "anchor": "32-代码开发",
        "level": 3,
        "text": "  3.2.1 Controller层  在sky-server模块中，根据接口设计中的请求参数形式对应的在 EmployeeController 中创建启用禁用员工账号的方法：  java / 启用禁用员工账号 @param status @param id @return / @PostMapping(\"/status/{status}\") @ApiOperation(\"启用禁用员工账号\") public Result startOrStop(@PathVariable Integer status,Long id){ log.info(\"启用禁用员工账号：{},{}\",status,id); employeeService.startOrStop(status,id);//后绪步骤定义 return Result.success(); }     3.2.2 Service层接口  在 EmployeeService 接口中声明启用禁用员工账号的业务方法：  java / 启用禁用员工账号 @param status @param id / void startOrStop(Integer status, Long id);     3.2.3 Service层实现类  在 EmployeeServiceImpl 中实现启用禁用员工账号的业务方法：  java / 启用禁用员工账号  @param status @param id / public void startOrStop(Integer status, Long id) { Employee employee = Employee.builder() .status(status) .id(id) .build();  employeeMapper.update(employee); }     3.2.4 Mapper层  在 EmployeeMapper 接口中声明 update 方法：  java / 根据主键动态修改属性 @param employee / void update(Employee employee);   在 EmployeeMapper.xml 中编写SQL：  sql  update employee  name = {name}, username = {username}, password = {password}, phone = {phone}, sex = {sex}, id_Number = {idNumber}, update_Time = {updateTime}, update_User = {updateUser}, status = {status},  where id = {id}     "
      },
      {
        "title": "3.3 功能测试",
        "anchor": "33-功能测试",
        "level": 3,
        "text": "  3.3.1 接口文档测试  测试前， 查询employee表中员工账号状态    开始测试    测试完毕后 ，再次查询员工账号状态      3.3.2 前后端联调测试  测试前：    点击启用:     "
      },
      {
        "title": "3.4 代码提交",
        "anchor": "34-代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。   "
      },
      {
        "title": "4. 编辑员工",
        "anchor": "4-编辑员工",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析与设计",
        "anchor": "41-需求分析与设计",
        "level": 3,
        "text": "  4.1.1 产品原型  在员工管理列表页面点击 \"编辑\" 按钮，跳转到编辑页面，在编辑页面回显员工信息并进行修改，最后点击 \"保存\" 按钮完成编辑操作。  员工列表原型：    修改页面原型 ：  注：点击修改时，数据应该正常回显到修改页面。      4.1.2 接口设计  根据上述原型图分析，编辑员工功能涉及到两个接口：  - 根据id查询员工信息 - 编辑员工信息  1). 根据id查询员工信息      2). 编辑员工信息    注:因为是修改功能，请求方式可设置为PUT。   "
      },
      {
        "title": "4.2 代码开发",
        "anchor": "42-代码开发",
        "level": 3,
        "text": "  4.2.1 回显员工信息功能  1). Controller层  在 EmployeeController 中创建 getById 方法：  java / 根据id查询员工信息 @param id @return / @GetMapping(\"/{id}\") @ApiOperation(\"根据id查询员工信息\") public Result getById(@PathVariable Long id){ Employee employee = employeeService.getById(id); return Result.success(employee); }     2). Service层接口  在 EmployeeService 接口中声明 getById 方法：  java / 根据id查询员工 @param id @return / Employee getById(Long id);     3). Service层实现类  在 EmployeeServiceImpl 中实现 getById 方法：  java / 根据id查询员工  @param id @return / public Employee getById(Long id) { Employee employee = employeeMapper.getById(id); employee.setPassword(\" \"); return employee; }     4). Mapper层  在 EmployeeMapper 接口中声明 getById 方法：  java / 根据id查询员工信息 @param id @return / @Select(\"select from employee where id = {id}\") Employee getById(Long id);     4.2.2 修改员工信息功能  1). Controller层  在 EmployeeController 中创建 update 方法：  java / 编辑员工信息 @param employeeDTO @return / @PutMapping @ApiOperation(\"编辑员工信息\") public Result update(@RequestBody EmployeeDTO employeeDTO){ log.info(\"编辑员工信息：{}\", employeeDTO); employeeService.update(employeeDTO); return Result.success(); }     2). Service层接口  在 EmployeeService 接口中声明 update 方法：  java / 编辑员工信息 @param employeeDTO / void update(EmployeeDTO employeeDTO);     3). Service层实现类  在 EmployeeServiceImpl 中实现 update 方法：  java / 编辑员工信息  @param employeeDTO / public void update(EmployeeDTO employeeDTO) { Employee employee = new Employee(); BeanUtils.copyProperties(employeeDTO, employee);  employee.setUpdateTime(LocalDateTime.now()); employee.setUpdateUser(BaseContext.getCurrentId());  employeeMapper.update(employee); }   在实现 启用禁用员工账号 功能时，已实现employeeMapper.update(employee)，在此不需写Mapper层代码。   "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  4.3.1 接口文档测试  分别测试 根据id查询员工信息 和 编辑员工信息 两个接口  1). 根据id查询员工信息  查询employee表中的数据，以id=4的记录为例  image-20221112154253995  开始测试    获取到了id=4的相关员工信息  2). 编辑员工信息  修改id=4的员工信息， name 由 zhangsan 改为 张三丰 ， username 由 张三 改为 zhangsanfeng 。    查看employee表数据  image-20221112155029547    4.3.2 前后端联调测试  进入到员工列表查询    对员工姓名为杰克的员工数据修改，点击修改，数据已回显    修改后，点击保存   "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。   "
      },
      {
        "title": "5. 导入分类模块功能代码",
        "anchor": "5-导入分类模块功能代码",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析与设计",
        "anchor": "51-需求分析与设计",
        "level": 3,
        "text": "  5.1.1 产品原型  后台系统中可以管理分类信息，分类包括两种类型，分别是 菜品分类 和 套餐分类 。  先来分析 菜品分类 相关功能。  新增菜品分类： 当我们在后台系统中添加菜品时需要选择一个菜品分类，在移动端也会按照菜品分类来展示对应的菜品。  菜品分类分页查询： 系统中的分类很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。  根据id删除菜品分类： 在分类管理列表页面，可以对某个分类进行删除操作。需要注意的是当分类关联了菜品或者套餐时，此分类不允许删除。  修改菜品分类： 在分类管理列表页面点击修改按钮，弹出修改窗口，在修改窗口回显分类信息并进行修改，最后点击确定按钮完成修改操作。  启用禁用菜品分类： 在分类管理列表页面，可以对某个分类进行启用或者禁用操作。  分类类型查询： 当点击分类类型下拉框时，从数据库中查询所有的菜品分类数据进行展示。    分类管理原型：    业务规则：  - 分类名称必须是唯一的 - 分类按照类型可以分为菜品分类和套餐分类 - 新添加的分类状态默认为“禁用”    5.1.2 接口设计  根据上述原型图分析，菜品分类模块共涉及6个接口。  - 新增分类 - 分类分页查询 - 根据id删除分类 - 修改分类 - 启用禁用分类 - 根据类型查询分类  接下来，详细地分析每个接口。  找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html  1). 新增分类    2). 分类分页查询    3). 根据id删除分类    4). 修改分类    5). 启用禁用分类    6). 根据类型查询分类    5.1.3 表设计  category表结构：  字段名 数据类型 说明 备注 ----------- ------------ ------------ ------------------- id bigint 主键 自增 name varchar(32) 分类名称 唯一 type int 分类类型 1菜品分类 2套餐分类 sort int 排序字段 用于分类数据的排序 status int 状态 1启用 0禁用 create_time datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id   "
      },
      {
        "title": "5.2 代码导入",
        "anchor": "52-代码导入",
        "level": 3,
        "text": "  导入资料中的分类管理模块功能代码即可    可按照mapper-- service-- controller依次导入，这样代码不会显示相应的报错。  进入到sky-server模块中  5.2.1 Mapper层  DishMapper.java  java package com.sky.mapper;  import org.apache.ibatis.annotations.Mapper; import org.apache.ibatis.annotations.Select;  @Mapper public interface DishMapper {  / 根据分类id查询菜品数量 @param categoryId @return / @Select(\"select count(id) from dish where category_id = {categoryId}\") Integer countByCategoryId(Long categoryId);  }    SetmealMapper.java  java package com.sky.mapper;  import org.apache.ibatis.annotations.Mapper; import org.apache.ibatis.annotations.Select;  @Mapper public interface SetmealMapper {  / 根据分类id查询套餐的数量 @param id @return / @Select(\"select count(id) from setmeal where category_id = {categoryId}\") Integer countByCategoryId(Long id);  }   CategoryMapper.java  java package com.sky.mapper;  import com.github.pagehelper.Page; import com.sky.dto.CategoryPageQueryDTO; import com.sky.entity.Category; import org.apache.ibatis.annotations.Delete; import org.apache.ibatis.annotations.Insert; import org.apache.ibatis.annotations.Mapper;  import java.util.List;  @Mapper public interface CategoryMapper {  / 插入数据 @param category / @Insert(\"insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)\" + \" VALUES\" + \" ( {type}, {name}, {sort}, {status}, {createTime}, {updateTime}, {createUser}, {updateUser})\") void insert(Category category);  / 分页查询 @param categoryPageQueryDTO @return / Page pageQuery(CategoryPageQueryDTO categoryPageQueryDTO);  / 根据id删除分类 @param id / @Delete(\"delete from category where id = {id}\") void deleteById(Long id);  / 根据id修改分类 @param category / void update(Category category);  / 根据类型查询分类 @param type @return / List list(Integer type); }   CategoryMapper.xml ,进入到resources/mapper目录下  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"    select from category   and name like concat('%', {name},'%')   and type = {type}   order by sort asc , create_time desc    update category   type = {type},   name = {name},   sort = {sort},   status = {status},   update_time = {updateTime},   update_user = {updateUser}   where id = {id}    select from category where status = 1  and type = {type}  order by sort asc,create_time desc        5.2.2 Service层  CategoryService.java  java package com.sky.service;  import com.sky.dto.CategoryDTO; import com.sky.dto.CategoryPageQueryDTO; import com.sky.entity.Category; import com.sky.result.PageResult; import java.util.List;  public interface CategoryService {  / 新增分类 @param categoryDTO / void save(CategoryDTO categoryDTO);  / 分页查询 @param categoryPageQueryDTO @return / PageResult pageQuery(CategoryPageQueryDTO categoryPageQueryDTO);  / 根据id删除分类 @param id / void deleteById(Long id);  / 修改分类 @param categoryDTO / void update(CategoryDTO categoryDTO);  / 启用、禁用分类 @param status @param id / void startOrStop(Integer status, Long id);  / 根据类型查询分类 @param type @return / List list(Integer type); }    EmployeeServiceImpl.java  java package com.sky.service.impl;  import com.github.pagehelper.Page; import com.github.pagehelper.PageHelper; import com.sky.constant.MessageConstant; import com.sky.constant.PasswordConstant; import com.sky.constant.StatusConstant; import com.sky.context.BaseContext; import com.sky.dto.EmployeeDTO; import com.sky.dto.EmployeeLoginDTO; import com.sky.dto.EmployeePageQueryDTO; import com.sky.entity.Employee; import com.sky.exception.AccountLockedException; import com.sky.exception.AccountNotFoundException; import com.sky.exception.PasswordErrorException; import com.sky.mapper.EmployeeMapper; import com.sky.result.PageResult; import com.sky.service.EmployeeService; import org.springframework.beans.BeanUtils; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service; import org.springframework.util.DigestUtils;  import java.time.LocalDateTime; import java.util.List;  @Service public class EmployeeServiceImpl implements EmployeeService {  @Autowired private EmployeeMapper employeeMapper;  / 员工登录  @param employeeLoginDTO @return / public Employee login(EmployeeLoginDTO employeeLoginDTO) { String username = employeeLoginDTO.getUsername(); String password = employeeLoginDTO.getPassword();  //1、根据用户名查询数据库中的数据 Employee employee = employeeMapper.getByUsername(username);  //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） if (employee == null) { //账号不存在 throw new AccountNotFoundException(MessageConstant.ACCOUNT_NOT_FOUND); }  //密码比对 // TODO 后期需要进行md5加密，然后再进行比对 password = DigestUtils.md5DigestAsHex(password.getBytes()); if (!password.equals(employee.getPassword())) { //密码错误 throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR); }  if (employee.getStatus() == StatusConstant.DISABLE) { //账号被锁定 throw new AccountLockedException(MessageConstant.ACCOUNT_LOCKED); }  //3、返回实体对象 return employee; }  / 新增员工  @param employeeDTO / public void save(EmployeeDTO employeeDTO) { Employee employee = new Employee();  //对象属性拷贝 BeanUtils.copyProperties(employeeDTO, employee);  //设置账号的状态，默认正常状态 1表示正常 0表示锁定 employee.setStatus(StatusConstant.ENABLE);  //设置密码，默认密码123456 employee.setPassword(DigestUtils.md5DigestAsHex(PasswordConstant.DEFAULT_PASSWORD.getBytes()));  //设置当前记录的创建时间和修改时间 employee.setCreateTime(LocalDateTime.now()); employee.setUpdateTime(LocalDateTime.now());  //设置当前记录创建人id和修改人id employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改 employee.setUpdateUser(BaseContext.getCurrentId());  employeeMapper.insert(employee); }  / 分页查询  @param employeePageQueryDTO @return / public PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO) { // select from employee limit 0,10 //开始分页查询 PageHelper.startPage(employeePageQueryDTO.getPage(), employeePageQueryDTO.getPageSize());  Page page = employeeMapper.pageQuery(employeePageQueryDTO);  long total = page.getTotal(); List records = page.getResult();  return new PageResult(total, records); }  / 启用禁用员工账号  @param status @param id / public void startOrStop(Integer status, Long id) { Employee employee = Employee.builder() .status(status) .id(id) .build();  employeeMapper.update(employee); }  / 根据id查询员工  @param id @return / public Employee getById(Long id) { Employee employee = employeeMapper.getById(id); employee.setPassword(\" \"); return employee; }  / 编辑员工信息  @param employeeDTO / public void update(EmployeeDTO employeeDTO) { Employee employee = new Employee(); BeanUtils.copyProperties(employeeDTO, employee);  employee.setUpdateTime(LocalDateTime.now()); employee.setUpdateUser(BaseContext.getCurrentId());  employeeMapper.update(employee); }  }     5.2.3 Controller层  CategoryController.java  java package com.sky.controller.admin;  import com.sky.dto.CategoryDTO; import com.sky.dto.CategoryPageQueryDTO; import com.sky.entity.Category; import com.sky.result.PageResult; import com.sky.result.Result; import com.sky.service.CategoryService; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation. ; import java.util.List;  / 分类管理 / @RestController @RequestMapping(\"/admin/category\") @Api(tags = \"分类相关接口\") @Slf4j public class CategoryController {  @Autowired private CategoryService categoryService;  / 新增分类 @param categoryDTO @return / @PostMapping @ApiOperation(\"新增分类\") public Result save(@RequestBody CategoryDTO categoryDTO){ log.info(\"新增分类：{}\", categoryDTO); categoryService.save(categoryDTO); return Result.success(); }  / 分类分页查询 @param categoryPageQueryDTO @return / @GetMapping(\"/page\") @ApiOperation(\"分类分页查询\") public Result page(CategoryPageQueryDTO categoryPageQueryDTO){ log.info(\"分页查询：{}\", categoryPageQueryDTO); PageResult pageResult = categoryService.pageQuery(categoryPageQueryDTO); return Result.success(pageResult); }  / 删除分类 @param id @return / @DeleteMapping @ApiOperation(\"删除分类\") public Result deleteById(Long id){ log.info(\"删除分类：{}\", id); categoryService.deleteById(id); return Result.success(); }  / 修改分类 @param categoryDTO @return / @PutMapping @ApiOperation(\"修改分类\") public Result update(@RequestBody CategoryDTO categoryDTO){ categoryService.update(categoryDTO); return Result.success(); }  / 启用、禁用分类 @param status @param id @return / @PostMapping(\"/status/{status}\") @ApiOperation(\"启用禁用分类\") public Result startOrStop(@PathVariable(\"status\") Integer status, Long id){ categoryService.startOrStop(status,id); return Result.success(); }  / 根据类型查询分类 @param type @return / @GetMapping(\"/list\") @ApiOperation(\"根据类型查询分类\") public Result list(Integer type){ List list = categoryService.list(type); return Result.success(list); } }   全部导入完毕后，进行编译   "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  重启服务，访问http://localhost:80,进入分类管理  分页查询：    分类类型：    启用禁用：    点击禁用    修改：  回显    修改后    新增：    点击确定，查询列表    删除：    删除后，查询分类列表    删除成功 "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。     "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day02 课程内容 - 新增员工 - 员工分页查询 - 启用禁用员工账号 - 编辑员工 - 导入分类模块功能代码 功能实现： 员工管理、菜品分类管理。 员工管理效果： 菜品分类管理效果： 1. 新增员工 1.1 需求分析和设计 1.1.1 产品原型 一般在做需求分析时，往往都是对照着产品原型进行分析，因为产品原型比较直观，便于我们理解业务。 后台系统中可以管理员工信息，通过新增员工来添加后台系统用户。 新增员工原型： 当填写完表单信息, 点击\"保存\"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。 注意事项： 1. 账号必须是唯一的 2. 手机号为合法的11位手机号码 3. 身份证号为合法的18位身份证号码 4. 密码默认为123456 1.1.2 接口设计 找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html 明确新增员工接口的 请求路径、请求方式、请求参数、返回数据 。 本项目约定： - 管理端 发出的请求，统一使用 /admin 作为前缀。 - 用户端 发出的请求，统一使用 /user 作为前缀。 1.1.3 表设计 新增员工，其实就是将我们新增页面录入的员工数据插入到employee表。 employee表结构： 字段名 数据类型 说明 备注 ----------- ------------ ------------ ----------- id bigint 主键 自增 name varchar(32) 姓名 username varchar(32) 用户名 唯一 password varchar(64) 密码 phone varchar(11) 手机号 sex varchar(2) 性别 id_number varchar(18) 身份证号 status int 账号状态 1正常 0锁定 create_time datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id 其中，employee表中的status字段已经设置了默认值1，表示状态正常。 image-20221111180159188 1.2 代码开发 1.2.1 设计dto类 根据新增员工接口设计对应的dto 前端传递参数列表： 思考： 是否可以使用对应的实体类来接收呢？ 注意： 当前端提交的数据和实体类中对应的属性差别比较大时，建议使用dto来封装数据 由于上述传入参数和实体类有较大差别，所以自定义dto类。 进入sky-pojo模块，在com.sky.dto包下，已定义employeedto java package com.sky.dto; import lombok.data; import java.io.serializable; @data public class employeedto implements serializable { private long id; private string username; private string name; private string phone; private string sex; private string idnumber; } 1.2.2 controller层 employeecontroller中创建新增员工方法 进入到sky-server模块中，在com.sky.controller.admin包下，在employeecontroller中创建新增员工方法，接收前端提交的参数。 java / 新增员工 @param employeedto @return / @postmapping @apioperation(\"新增员工\") public result save(@requestbody employeedto employeedto){ log.info(\"新增员工：{}\",employeedto); employeeservice.save(employeedto);//该方法后续步骤会定义 return result.success(); } 注： result类定义了后端统一返回结果格式。 进入sky-common模块，在com.sky.result包下定义了result.java java package com.sky.result; import lombok.data; import java.io.serializable; / 后端统一返回结果 @param / @data public class result implements serializable { private integer code; //编码：1成功，0和其它数字为失败 private string msg; //错误信息 private t data; //数据 public static result success() { result result = new result (); result.code = 1; return result; } public static result success(t object) { result result = new result (); result.data = object; result.code = 1; return result; } public static result error(string msg) { result result = new result(); result.msg = msg; result.code = 0; return result; } } 1.2.3 service层接口 在employeeservice接口中声明新增员工方法 进入到sky-server模块中,com.sky.server.employeeservice java / 新增员工 @param employeedto / void save(employeedto employeedto); 1.2.4 service层实现类 在employeeserviceimpl中实现新增员工方法 com.sky.server.impl.employeeserviceimpl中创建方法 java / 新增员工 @param employeedto / public void save(employeedto employeedto) { employee employee = new employee(); //对象属性拷贝 beanutils.copyproperties(employeedto, employee); //设置账号的状态，默认正常状态 1表示正常 0表示锁定 employee.setstatus(statusconstant.enable); //设置密码，默认密码123456 employee.setpassword(digestutils.md5digestashex(passwordconstant.default_password.getbytes())); //设置当前记录的创建时间和修改时间 employee.setcreatetime(localdatetime.now()); employee.setupdatetime(localdatetime.now()); //设置当前记录创建人id和修改人id employee.setcreateuser(10l);//目前写个假数据，后期修改 employee.setupdateuser(10l); employeemapper.insert(employee);//后续步骤定义 } 在sky-common模块com.sky.constants包下已定义statusconstant.java java package com.sky.constant; / 状态常量，启用或者禁用 / public class statusconstant { //启用 public static final integer enable = 1; //禁用 public static final integer disable = 0; } 1.2.5 mapper层 在employeemapper中声明insert方法 com.sky.employeemapper中添加方法 java / 插入员工数据 @param employee / @insert(\"insert into employee (name, username, password, phone, sex, id_number, create_time, update_time, create_user, update_user,status) \" + \"values \" + \"( {name}, {username}, {password}, {phone}, {sex}, {idnumber}, {createtime}, {updatetime}, {createuser}, {updateuser}, {status})\") void insert(employee employee); 在application.yml中已开启驼峰命名，故id_number和idnumber可对应。 yaml mybatis: configuration: 开启驼峰命名 map-underscore-to-camel-case: true 1.3 功能测试 代码已经发开发完毕，对新增员工功能进行测试。 功能测试实现方式： - 通过接口文档测试 - 通前后端联调测试 接下来我们使用上述两种方式分别测试。 1.3.1 接口文档测试 启动服务： 访问http://localhost:8080/doc.html，进入新增员工接口 json数据： json { \"id\": 0, \"idnumber\": \"111222333444555666\", \"name\": \"xiaozhi\", \"phone\": \"phone_example\", \"sex\": \"1\", \"username\": \"小智\" } 响应码：401 报错 通过断点调试： 进入到jwttokenadmininterceptor拦截器 java / 校验jwt @param request @param response @param handler @return @throws exception / public boolean prehandle(httpservletrequest request, httpservletresponse response, object handler) throws exception { //判断当前拦截到的是controller的方法还是其他资源 if (!(handler instanceof handlermethod)) { //当前拦截到的不是动态方法，直接放行 return true; } //1、从请求头中获取令牌 jwtproperties.getadmintokenname()获取为token string token = request.getheader(jwtproperties.getadmintokenname()); //2、校验令牌 try { log.info(\"jwt校验:{}\", token); claims claims = jwtutil.parsejwt(jwtproperties.getadminsecretkey(), token); long empid = long.valueof(claims.get(jwtclaimsconstant.emp_id).tostring()); log.info(\"当前员工id：\", empid); //3、通过，放行 return true; } catch (exception ex) { //4、不通过，响应401状态码 response.setstatus(401); return false; } } 报错原因： 由于jwt令牌校验失败，导致employeecontroller的save方法没有被调用 解决方法： 调用员工登录接口获得一个合法的jwt令牌 使用admin用户登录获取令牌 添加令牌： 将合法的jwt令牌添加到全局参数中 文档管理-- 全局参数设置-- 添加参数 接口测试： 其中，请求头部含有jwt令牌 查看employee表： image-20221111191624908 测试成功。 1.3.2 前后端联调测试 启动nginx,访问 http://localhost 登录-- 员工管理-- 添加员工 保存后，查看employee表 测试成功。 注意： 由于开发阶段前端和后端是并行开发的，后端完成某个功能后，此时前端对应的功能可能还没有开发完成， 导致无法进行前后端联调测试。所以在开发阶段，后端测试主要以接口文档测试为主。 1.4 代码完善 目前，程序存在的问题主要有两个： - 录入的用户名已存，抛出的异常后没有处理 - 新增员工时，创建人id和修改人id设置为固定值 接下来，我们对上述两个问题依次进行分析和解决。 1.4.1 问题一 描述： 录入的用户名已存，抛出的异常后没有处理 分析： 新增username=zhangsan的用户，若employee表中之前已存在。 后台报错信息： 查看employee表结构： 发现，username已经添加了唯一约束，不能重复。 解决： 通过全局异常处理器来处理。 进入到sky-server模块，com.sky.hander包下，globalexceptionhandler.java添加方法 java / 处理sql异常 @param ex @return / @exceptionhandler public result exceptionhandler(sqlintegrityconstraintviolationexception ex){ //duplicate entry 'zhangsan' for key 'employee.idx_username' string message = ex.getmessage(); if(message.contains(\"duplicate entry\")){ string[] split = message.split(\" \"); string username = split[2]; string msg = username + messageconstant.already_exists; return result.error(msg); }else{ return result.error(messageconstant.unknown_error); } } 进入到sky-common模块，在messageconstant.java添加 java public static final string already_exists = \"已存在\"; 再次，接口测试： 1.4.2 问题二 描述 ：新增员工时，创建人id和修改人id设置为固定值 分析： java / 新增员工 @param employeedto / public void save(employeedto employeedto) { employee employee = new employee(); //................ //////////当前设置的id为固定值10////////// employee.setcreateuser(10l); employee.setupdateuser(10l); ////////////////////////////////////// //................................. employeemapper.insert(employee);//后续步骤定义 } 解决： 通过某种方式动态获取当前登录员工的id。 员工登录成功后会生成jwt令牌并响应给前端： 在sky-server模块 java package com.sky.controller.admin; / 员工管理 / @restcontroller @requestmapping(\"/admin/employee\") @slf4j @api(tags = \"员工相关接口\") public class employeecontroller { @autowired private employeeservice employeeservice; @autowired private jwtproperties jwtproperties; / 登录 @param employeelogindto @return / @postmapping(\"/login\") @apioperation(value = \"员工登录\") public result login(@requestbody employeelogindto employeelogindto) { //......... //登录成功后，生成jwt令牌 map claims = new hashmap< (); claims.put(jwtclaimsconstant.emp_id, employee.getid()); string token = jwtutil.createjwt( jwtproperties.getadminsecretkey(), jwtproperties.getadminttl(), claims); //............ return result.success(employeeloginvo); } } 后续请求中，前端会携带jwt令牌，通过jwt令牌可以解析出当前登录员工id： jwttokenadmininterceptor.java java package com.sky.interceptor; / jwt令牌校验的拦截器 / @component @slf4j public class jwttokenadmininterceptor implements handlerinterceptor { @autowired private jwtproperties jwtproperties; / 校验jwt @param request @param response @param handler @return @throws exception / public boolean prehandle(httpservletrequest request, httpservletresponse response, object handler) throws exception { //.............. //1、从请求头中获取令牌 string token = request.getheader(jwtproperties.getadmintokenname()); //2、校验令牌 try { log.info(\"jwt校验:{}\", token); claims claims = jwtutil.parsejwt(jwtproperties.getadminsecretkey(), token); long empid = long.valueof(claims.get(jwtclaimsconstant.emp_id).tostring()); log.info(\"当前员工id：\", empid); //3、通过，放行 return true; } catch (exception ex) { //4、不通过，响应401状态码 response.setstatus(401); return false; } } } 思考： 解析出登录员工id后，如何传递给service的save方法？ 通过threadlocal进行传递。 1.4.3 threadlocal 介绍： threadlocal 并不是一个thread，而是thread的局部变量。 threadlocal为每个线程提供单独一份存储空间，具有线程隔离的效果，只有在线程内才能获取到对应的值，线程外则不能访问。 常用方法： - public void set(t value) 设置当前线程的线程局部变量的值 - public t get() 返回当前线程所对应的线程局部变量的值 - public void remove() 移除当前线程的线程局部变量 对threadlocal有了一定认识后，接下来继续解决 问题二 初始工程中已经封装了 threadlocal 操作的工具类： 在sky-common模块 java package com.sky.context; public class basecontext { public static threadlocal threadlocal = new threadlocal< (); public static void setcurrentid(long id) { threadlocal.set(id); } public static long getcurrentid() { return threadlocal.get(); } public static void removecurrentid() { threadlocal.remove(); } } 在拦截器中解析出当前登录员工id，并放入线程局部变量中： 在sky-server模块中，拦截器： java package com.sky.interceptor; / jwt令牌校验的拦截器 / @component @slf4j public class jwttokenadmininterceptor implements handlerinterceptor { @autowired private jwtproperties jwtproperties; / 校验jwt @param request @param response @param handler @return @throws exception / public boolean prehandle(httpservletrequest request, httpservletresponse response, object handler) throws exception { //............................. //2、校验令牌 try { //................. claims claims = jwtutil.parsejwt(jwtproperties.getadminsecretkey(), token); long empid = long.valueof(claims.get(jwtclaimsconstant.emp_id).tostring()); log.info(\"当前员工id：\", empid); /////将用户id存储到threadlocal//////// basecontext.setcurrentid(empid); //////////////////////////////////// //3、通过，放行 return true; } catch (exception ex) { //...................... } } } 在service中获取线程局部变量中的值： java / 新增员工 @param employeedto / public void save(employeedto employeedto) { //............................. //设置当前记录创建人id和修改人id employee.setcreateuser(basecontext.getcurrentid());//目前写个假数据，后期修改 employee.setupdateuser(basecontext.getcurrentid()); employeemapper.insert(employee); } 测试：使用admin(id=1)用户登录后添加一条记录 查看employee表记录 1.5 代码提交 点击提交： 提交过程中，出现提示： 继续push: 推送成功： 2. 员工分页查询 2.1 需求分析和设计 2.1.1 产品原型 系统中的员工很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。而在我们的分页查询页面中, 除了分页条件以外，还有一个查询条件 \"员工姓名\"。 查询员工原型： 业务规则 ： - 根据页码展示员工信息 - 每页展示10条数据 - 分页查询时可以根据需要，输入员工姓名进行查询 2.1.2 接口设计 找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html 注意事项： - 请求参数类型为query，不是json格式提交，在路径后直接拼接。/admin/employee/page?name=zhangsan - 返回数据中records数组中使用employee实体类对属性进行封装。 2.2 代码开发 2.2.1 设计dto类 根据请求参数进行封装，在sky-pojo模块中 java package com.sky.dto; import lombok.data; import java.io.serializable; @data public class employeepagequerydto implements serializable { //员工姓名 private string name; //页码 private int page; //每页显示记录数 private int pagesize; } 2.2.2 封装pageresult 后面所有的分页查询，统一都封装为pageresult对象。 在sky-common模块 java package com.sky.result; import lombok.allargsconstructor; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; import java.util.list; / 封装分页查询结果 / @data @allargsconstructor @noargsconstructor public class pageresult implements serializable { private long total; //总记录数 private list records; //当前页数据集合 } 员工信息分页查询后端返回的对象类型为: result java package com.sky.result; import lombok.data; import java.io.serializable; / 后端统一返回结果 @param / @data public class result implements serializable { private integer code; //编码：1成功，0和其它数字为失败 private string msg; //错误信息 private t data; //数据 public static result success() { result result = new result (); result.code = 1; return result; } public static result success(t object) { result result = new result (); result.data = object; result.code = 1; return result; } public static result error(string msg) { result result = new result(); result.msg = msg; result.code = 0; return result; } } 2.2.3 controller层 在sky-server模块中，com.sky.controller.admin.employeecontroller中添加分页查询方法。 java / 员工分页查询 @param employeepagequerydto @return / @getmapping(\"/page\") @apioperation(\"员工分页查询\") public result page(employeepagequerydto employeepagequerydto){ log.info(\"员工分页查询，参数为：{}\", employeepagequerydto); pageresult pageresult = employeeservice.pagequery(employeepagequerydto);//后续定义 return result.success(pageresult); } 2.2.4 service层接口 在employeeservice接口中声明pagequery方法： java / 分页查询 @param employeepagequerydto @return / pageresult pagequery(employeepagequerydto employeepagequerydto); 2.2.5 service层实现类 在employeeserviceimpl中实现pagequery方法： java / 分页查询 @param employeepagequerydto @return / public pageresult pagequery(employeepagequerydto employeepagequerydto) { // select from employee limit 0,10 //开始分页查询 pagehelper.startpage(employeepagequerydto.getpage(), employeepagequerydto.getpagesize()); page page = employeemapper.pagequery(employeepagequerydto);//后续定义 long total = page.gettotal(); list records = page.getresult(); return new pageresult(total, records); } 注意： 此处使用 mybatis 的分页插件 pagehelper 来简化分页代码的开发。底层基于 mybatis 的拦截器实现。 故在pom.xml文中添加依赖(初始工程已添加) xml com.github.pagehelper pagehelper-spring-boot-starter ${pagehelper} 2.2.6 mapper层 在 employeemapper 中声明 pagequery 方法： java / 分页查询 @param employeepagequerydto @return / page pagequery(employeepagequerydto employeepagequerydto); 在 src/main/resources/mapper/employeemapper.xml 中编写sql： sql select from employee and name like concat('%', {name},'%') order by create_time desc 2.3 功能测试 可以通过接口文档进行测试，也可以进行前后端联调测试。 接下来使用两种方式分别测试： 2.3.1 接口文档测试 重启服务： 访问http://localhost:8080/doc.html，进入员工分页查询 响应结果： 2.3.2 前后端联调测试 点击员工管理 输入员工姓名为zhangsan 不难发现， 最后操作时间格式 不清晰，在 代码完善 中解决。 2.4 代码完善 问题描述： 操作时间字段显示有问题。 解决方式： 1). 方式一 在属性上加上注解，对日期进行格式化 但这种方式，需要在每个时间属性上都要加上该注解，使用较麻烦，不能全局处理。 2). 方式二（推荐 ) 在webmvcconfiguration中扩展springmvc的消息转换器，统一对日期类型进行格式处理 java / 扩展spring mvc框架的消息转化器 @param converters / protected void extendmessageconverters(list converters) { log.info(\"扩展消息转换器...\"); //创建一个消息转换器对象 mappingjackson2httpmessageconverter converter = new mappingjackson2httpmessageconverter(); //需要为消息转换器设置一个对象转换器，对象转换器可以将java对象序列化为json数据 converter.setobjectmapper(new jacksonobjectmapper()); //将自己的消息转化器加入容器中 converters.add(0,converter); } 添加后，再次测试 时间格式定义，sky-common模块中 java package com.sky.json; public class jacksonobjectmapper extends objectmapper { //....... public static final string default_date_time_format = \"yyyy-mm-dd hh:mm\"; //....... } } 2.5 代码提交 后续步骤和新增员工代码提交一致，不再赘述。 3. 启用禁用员工账号 3.1 需求分析与设计 3.1.1 产品原型 在员工管理列表页面，可以对某个员工账号进行启用或者禁用操作。账号禁用的员工不能登录系统，启用后的员工可以正常登录。如果某个员工账号状态为正常，则按钮显示为 \"禁用\"，如果员工账号状态为已禁用，则按钮显示为\"启用\"。 启禁用员工原型： 业务规则： - 可以对状态为“启用” 的员工账号进行“禁用”操作 - 可以对状态为“禁用”的员工账号进行“启用”操作 - 状态为“禁用”的员工账号不能登录系统 3.1.2 接口设计 1). 路径参数携带状态值。 2). 同时，把id传递过去，明确对哪个用户进行操作。 3). 返回数据code状态是必须，其它是非必须。 3.2 代码开发 3.2.1 controller层 在sky-server模块中，根据接口设计中的请求参数形式对应的在 employeecontroller 中创建启用禁用员工账号的方法： java / 启用禁用员工账号 @param status @param id @return / @postmapping(\"/status/{status}\") @apioperation(\"启用禁用员工账号\") public result startorstop(@pathvariable integer status,long id){ log.info(\"启用禁用员工账号：{},{}\",status,id); employeeservice.startorstop(status,id);//后绪步骤定义 return result.success(); } 3.2.2 service层接口 在 employeeservice 接口中声明启用禁用员工账号的业务方法： java / 启用禁用员工账号 @param status @param id / void startorstop(integer status, long id); 3.2.3 service层实现类 在 employeeserviceimpl 中实现启用禁用员工账号的业务方法： java / 启用禁用员工账号 @param status @param id / public void startorstop(integer status, long id) { employee employee = employee.builder() .status(status) .id(id) .build(); employeemapper.update(employee); } 3.2.4 mapper层 在 employeemapper 接口中声明 update 方法： java / 根据主键动态修改属性 @param employee / void update(employee employee); 在 employeemapper.xml 中编写sql： sql update employee name = {name}, username = {username}, password = {password}, phone = {phone}, sex = {sex}, id_number = {idnumber}, update_time = {updatetime}, update_user = {updateuser}, status = {status}, where id = {id} 3.3 功能测试 3.3.1 接口文档测试 测试前， 查询employee表中员工账号状态 开始测试 测试完毕后 ，再次查询员工账号状态 3.3.2 前后端联调测试 测试前： 点击启用: 3.4 代码提交 后续步骤和上述功能代码提交一致，不再赘述。 4. 编辑员工 4.1 需求分析与设计 4.1.1 产品原型 在员工管理列表页面点击 \"编辑\" 按钮，跳转到编辑页面，在编辑页面回显员工信息并进行修改，最后点击 \"保存\" 按钮完成编辑操作。 员工列表原型： 修改页面原型 ： 注：点击修改时，数据应该正常回显到修改页面。 4.1.2 接口设计 根据上述原型图分析，编辑员工功能涉及到两个接口： - 根据id查询员工信息 - 编辑员工信息 1). 根据id查询员工信息 2). 编辑员工信息 注:因为是修改功能，请求方式可设置为put。 4.2 代码开发 4.2.1 回显员工信息功能 1). controller层 在 employeecontroller 中创建 getbyid 方法： java / 根据id查询员工信息 @param id @return / @getmapping(\"/{id}\") @apioperation(\"根据id查询员工信息\") public result getbyid(@pathvariable long id){ employee employee = employeeservice.getbyid(id); return result.success(employee); } 2). service层接口 在 employeeservice 接口中声明 getbyid 方法： java / 根据id查询员工 @param id @return / employee getbyid(long id); 3). service层实现类 在 employeeserviceimpl 中实现 getbyid 方法： java / 根据id查询员工 @param id @return / public employee getbyid(long id) { employee employee = employeemapper.getbyid(id); employee.setpassword(\" \"); return employee; } 4). mapper层 在 employeemapper 接口中声明 getbyid 方法： java / 根据id查询员工信息 @param id @return / @select(\"select from employee where id = {id}\") employee getbyid(long id); 4.2.2 修改员工信息功能 1). controller层 在 employeecontroller 中创建 update 方法： java / 编辑员工信息 @param employeedto @return / @putmapping @apioperation(\"编辑员工信息\") public result update(@requestbody employeedto employeedto){ log.info(\"编辑员工信息：{}\", employeedto); employeeservice.update(employeedto); return result.success(); } 2). service层接口 在 employeeservice 接口中声明 update 方法： java / 编辑员工信息 @param employeedto / void update(employeedto employeedto); 3). service层实现类 在 employeeserviceimpl 中实现 update 方法： java / 编辑员工信息 @param employeedto / public void update(employeedto employeedto) { employee employee = new employee(); beanutils.copyproperties(employeedto, employee); employee.setupdatetime(localdatetime.now()); employee.setupdateuser(basecontext.getcurrentid()); employeemapper.update(employee); } 在实现 启用禁用员工账号 功能时，已实现employeemapper.update(employee)，在此不需写mapper层代码。 4.3 功能测试 4.3.1 接口文档测试 分别测试 根据id查询员工信息 和 编辑员工信息 两个接口 1). 根据id查询员工信息 查询employee表中的数据，以id=4的记录为例 image-20221112154253995 开始测试 获取到了id=4的相关员工信息 2). 编辑员工信息 修改id=4的员工信息， name 由 zhangsan 改为 张三丰 ， username 由 张三 改为 zhangsanfeng 。 查看employee表数据 image-20221112155029547 4.3.2 前后端联调测试 进入到员工列表查询 对员工姓名为杰克的员工数据修改，点击修改，数据已回显 修改后，点击保存 4.4 代码提交 后续步骤和上述功能代码提交一致，不再赘述。 5. 导入分类模块功能代码 5.1 需求分析与设计 5.1.1 产品原型 后台系统中可以管理分类信息，分类包括两种类型，分别是 菜品分类 和 套餐分类 。 先来分析 菜品分类 相关功能。 新增菜品分类： 当我们在后台系统中添加菜品时需要选择一个菜品分类，在移动端也会按照菜品分类来展示对应的菜品。 菜品分类分页查询： 系统中的分类很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。 根据id删除菜品分类： 在分类管理列表页面，可以对某个分类进行删除操作。需要注意的是当分类关联了菜品或者套餐时，此分类不允许删除。 修改菜品分类： 在分类管理列表页面点击修改按钮，弹出修改窗口，在修改窗口回显分类信息并进行修改，最后点击确定按钮完成修改操作。 启用禁用菜品分类： 在分类管理列表页面，可以对某个分类进行启用或者禁用操作。 分类类型查询： 当点击分类类型下拉框时，从数据库中查询所有的菜品分类数据进行展示。 分类管理原型： 业务规则： - 分类名称必须是唯一的 - 分类按照类型可以分为菜品分类和套餐分类 - 新添加的分类状态默认为“禁用” 5.1.2 接口设计 根据上述原型图分析，菜品分类模块共涉及6个接口。 - 新增分类 - 分类分页查询 - 根据id删除分类 - 修改分类 - 启用禁用分类 - 根据类型查询分类 接下来，详细地分析每个接口。 找到资料-- 项目接口文档-- 苍穹外卖-管理端接口.html 1). 新增分类 2). 分类分页查询 3). 根据id删除分类 4). 修改分类 5). 启用禁用分类 6). 根据类型查询分类 5.1.3 表设计 category表结构： 字段名 数据类型 说明 备注 ----------- ------------ ------------ ------------------- id bigint 主键 自增 name varchar(32) 分类名称 唯一 type int 分类类型 1菜品分类 2套餐分类 sort int 排序字段 用于分类数据的排序 status int 状态 1启用 0禁用 create_time datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id 5.2 代码导入 导入资料中的分类管理模块功能代码即可 可按照mapper-- service-- controller依次导入，这样代码不会显示相应的报错。 进入到sky-server模块中 5.2.1 mapper层 dishmapper.java java package com.sky.mapper; import org.apache.ibatis.annotations.mapper; import org.apache.ibatis.annotations.select; @mapper public interface dishmapper { / 根据分类id查询菜品数量 @param categoryid @return / @select(\"select count(id) from dish where category_id = {categoryid}\") integer countbycategoryid(long categoryid); } setmealmapper.java java package com.sky.mapper; import org.apache.ibatis.annotations.mapper; import org.apache.ibatis.annotations.select; @mapper public interface setmealmapper { / 根据分类id查询套餐的数量 @param id @return / @select(\"select count(id) from setmeal where category_id = {categoryid}\") integer countbycategoryid(long id); } categorymapper.java java package com.sky.mapper; import com.github.pagehelper.page; import com.sky.dto.categorypagequerydto; import com.sky.entity.category; import org.apache.ibatis.annotations.delete; import org.apache.ibatis.annotations.insert; import org.apache.ibatis.annotations.mapper; import java.util.list; @mapper public interface categorymapper { / 插入数据 @param category / @insert(\"insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)\" + \" values\" + \" ( {type}, {name}, {sort}, {status}, {createtime}, {updatetime}, {createuser}, {updateuser})\") void insert(category category); / 分页查询 @param categorypagequerydto @return / page pagequery(categorypagequerydto categorypagequerydto); / 根据id删除分类 @param id / @delete(\"delete from category where id = {id}\") void deletebyid(long id); / 根据id修改分类 @param category / void update(category category); / 根据类型查询分类 @param type @return / list list(integer type); } categorymapper.xml ,进入到resources/mapper目录下 xml select from category and name like concat('%', {name},'%') and type = {type} order by sort asc , create_time desc update category type = {type}, name = {name}, sort = {sort}, status = {status}, update_time = {updatetime}, update_user = {updateuser} where id = {id} select from category where status = 1 and type = {type} order by sort asc,create_time desc 5.2.2 service层 categoryservice.java java package com.sky.service; import com.sky.dto.categorydto; import com.sky.dto.categorypagequerydto; import com.sky.entity.category; import com.sky.result.pageresult; import java.util.list; public interface categoryservice { / 新增分类 @param categorydto / void save(categorydto categorydto); / 分页查询 @param categorypagequerydto @return / pageresult pagequery(categorypagequerydto categorypagequerydto); / 根据id删除分类 @param id / void deletebyid(long id); / 修改分类 @param categorydto / void update(categorydto categorydto); / 启用、禁用分类 @param status @param id / void startorstop(integer status, long id); / 根据类型查询分类 @param type @return / list list(integer type); } employeeserviceimpl.java java package com.sky.service.impl; import com.github.pagehelper.page; import com.github.pagehelper.pagehelper; import com.sky.constant.messageconstant; import com.sky.constant.passwordconstant; import com.sky.constant.statusconstant; import com.sky.context.basecontext; import com.sky.dto.employeedto; import com.sky.dto.employeelogindto; import com.sky.dto.employeepagequerydto; import com.sky.entity.employee; import com.sky.exception.accountlockedexception; import com.sky.exception.accountnotfoundexception; import com.sky.exception.passworderrorexception; import com.sky.mapper.employeemapper; import com.sky.result.pageresult; import com.sky.service.employeeservice; import org.springframework.beans.beanutils; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import org.springframework.util.digestutils; import java.time.localdatetime; import java.util.list; @service public class employeeserviceimpl implements employeeservice { @autowired private employeemapper employeemapper; / 员工登录 @param employeelogindto @return / public employee login(employeelogindto employeelogindto) { string username = employeelogindto.getusername(); string password = employeelogindto.getpassword(); //1、根据用户名查询数据库中的数据 employee employee = employeemapper.getbyusername(username); //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定） if (employee == null) { //账号不存在 throw new accountnotfoundexception(messageconstant.account_not_found); } //密码比对 // todo 后期需要进行md5加密，然后再进行比对 password = digestutils.md5digestashex(password.getbytes()); if (!password.equals(employee.getpassword())) { //密码错误 throw new passworderrorexception(messageconstant.password_error); } if (employee.getstatus() == statusconstant.disable) { //账号被锁定 throw new accountlockedexception(messageconstant.account_locked); } //3、返回实体对象 return employee; } / 新增员工 @param employeedto / public void save(employeedto employeedto) { employee employee = new employee(); //对象属性拷贝 beanutils.copyproperties(employeedto, employee); //设置账号的状态，默认正常状态 1表示正常 0表示锁定 employee.setstatus(statusconstant.enable); //设置密码，默认密码123456 employee.setpassword(digestutils.md5digestashex(passwordconstant.default_password.getbytes())); //设置当前记录的创建时间和修改时间 employee.setcreatetime(localdatetime.now()); employee.setupdatetime(localdatetime.now()); //设置当前记录创建人id和修改人id employee.setcreateuser(basecontext.getcurrentid());//目前写个假数据，后期修改 employee.setupdateuser(basecontext.getcurrentid()); employeemapper.insert(employee); } / 分页查询 @param employeepagequerydto @return / public pageresult pagequery(employeepagequerydto employeepagequerydto) { // select from employee limit 0,10 //开始分页查询 pagehelper.startpage(employeepagequerydto.getpage(), employeepagequerydto.getpagesize()); page page = employeemapper.pagequery(employeepagequerydto); long total = page.gettotal(); list records = page.getresult(); return new pageresult(total, records); } / 启用禁用员工账号 @param status @param id / public void startorstop(integer status, long id) { employee employee = employee.builder() .status(status) .id(id) .build(); employeemapper.update(employee); } / 根据id查询员工 @param id @return / public employee getbyid(long id) { employee employee = employeemapper.getbyid(id); employee.setpassword(\" \"); return employee; } / 编辑员工信息 @param employeedto / public void update(employeedto employeedto) { employee employee = new employee(); beanutils.copyproperties(employeedto, employee); employee.setupdatetime(localdatetime.now()); employee.setupdateuser(basecontext.getcurrentid()); employeemapper.update(employee); } } 5.2.3 controller层 categorycontroller.java java package com.sky.controller.admin; import com.sky.dto.categorydto; import com.sky.dto.categorypagequerydto; import com.sky.entity.category; import com.sky.result.pageresult; import com.sky.result.result; import com.sky.service.categoryservice; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation. ; import java.util.list; / 分类管理 / @restcontroller @requestmapping(\"/admin/category\") @api(tags = \"分类相关接口\") @slf4j public class categorycontroller { @autowired private categoryservice categoryservice; / 新增分类 @param categorydto @return / @postmapping @apioperation(\"新增分类\") public result save(@requestbody categorydto categorydto){ log.info(\"新增分类：{}\", categorydto); categoryservice.save(categorydto); return result.success(); } / 分类分页查询 @param categorypagequerydto @return / @getmapping(\"/page\") @apioperation(\"分类分页查询\") public result page(categorypagequerydto categorypagequerydto){ log.info(\"分页查询：{}\", categorypagequerydto); pageresult pageresult = categoryservice.pagequery(categorypagequerydto); return result.success(pageresult); } / 删除分类 @param id @return / @deletemapping @apioperation(\"删除分类\") public result deletebyid(long id){ log.info(\"删除分类：{}\", id); categoryservice.deletebyid(id); return result.success(); } / 修改分类 @param categorydto @return / @putmapping @apioperation(\"修改分类\") public result update(@requestbody categorydto categorydto){ categoryservice.update(categorydto); return result.success(); } / 启用、禁用分类 @param status @param id @return / @postmapping(\"/status/{status}\") @apioperation(\"启用禁用分类\") public result startorstop(@pathvariable(\"status\") integer status, long id){ categoryservice.startorstop(status,id); return result.success(); } / 根据类型查询分类 @param type @return / @getmapping(\"/list\") @apioperation(\"根据类型查询分类\") public result list(integer type){ list list = categoryservice.list(type); return result.success(list); } } 全部导入完毕后，进行编译 5.3 功能测试 重启服务，访问http://localhost:80,进入分类管理 分页查询： 分类类型： 启用禁用： 点击禁用 修改： 回显 修改后 新增： 点击确定，查询列表 删除： 删除后，查询分类列表 删除成功 5.4 代码提交 后续步骤和上述功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-c3c8022f8cb5",
    "version": "bdd1c8238088",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day03/苍穹外卖-day03.md",
    "title": "苍穹外卖-day03",
    "description": "- 公共字段自动填充 - 新增菜品 - 菜品分页查询 - 删除菜品 - 修改菜品",
    "subject": "projects",
    "kind": "项目原文",
    "order": 13,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 58,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 公共字段自动填充 - 新增菜品 - 菜品分页查询 - 删除菜品 - 修改菜品    功能实现： 菜品管理  菜品管理效果图：       "
      },
      {
        "title": "1. 公共字段自动填充",
        "anchor": "1-公共字段自动填充",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 问题分析",
        "anchor": "11-问题分析",
        "level": 3,
        "text": "  在上一章节我们已经完成了后台系统的 员工管理功能 和 菜品分类功能 的开发，在 新增员工 或者 新增菜品分类 时需要设置创建时间、创建人、修改时间、修改人等字段，在 编辑员工 或者 编辑菜品分类 时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下：  序号 字段名 含义 数据类型 -------- ----------- -------- ------------ 1 create_time 创建时间 datetime 2 create_user 创建人id bigint 3 update_time 修改时间 datetime 4 update_user 修改人id bigint  而针对于这些字段，我们的赋值方式为：  1). 在新增数据时, 将createTime、updateTime 设置为当前时间, createUser、updateUser设置为当前登录用户ID。  2). 在更新数据时, 将updateTime 设置为当前时间, updateUser设置为当前登录用户ID。    目前,在我们的项目中处理这些字段都是在每一个业务方法中进行赋值操作,如下:  新增员工方法：  java / 新增员工  @param employeeDTO / public void save(EmployeeDTO employeeDTO) { //....................... ////////////////////////////////////////// //设置当前记录的创建时间和修改时间 employee.setCreateTime(LocalDateTime.now()); employee.setUpdateTime(LocalDateTime.now());  //设置当前记录创建人id和修改人id employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改 employee.setUpdateUser(BaseContext.getCurrentId()); /////////////////////////////////////////////// employeeMapper.insert(employee); }   编辑员工方法：  java / 编辑员工信息  @param employeeDTO / public void update(EmployeeDTO employeeDTO) { //........................................ /////////////////////////////////////////////// employee.setUpdateTime(LocalDateTime.now()); employee.setUpdateUser(BaseContext.getCurrentId()); ///////////////////////////////////////////////////  employeeMapper.update(employee); }   新增菜品分类方法：  java / 新增分类 @param categoryDTO / public void save(CategoryDTO categoryDTO) { //.................................... ////////////////////////////////////////// //设置创建时间、修改时间、创建人、修改人 category.setCreateTime(LocalDateTime.now()); category.setUpdateTime(LocalDateTime.now()); category.setCreateUser(BaseContext.getCurrentId()); category.setUpdateUser(BaseContext.getCurrentId()); ///////////////////////////////////////////////////  categoryMapper.insert(category); }   修改菜品分类方法：  java / 修改分类 @param categoryDTO / public void update(CategoryDTO categoryDTO) { //....................................  ////////////////////////////////////////////// //设置修改时间、修改人 category.setUpdateTime(LocalDateTime.now()); category.setUpdateUser(BaseContext.getCurrentId()); //////////////////////////////////////////////////  categoryMapper.update(category); }     如果都按照上述的操作方式来处理这些公共字段, 需要在每一个业务方法中进行操作, 编码相对冗余、繁琐，那能不能对于这些公共字段在某个地方统一处理，来简化开发呢？  答案是可以的，我们使用AOP切面编程，实现功能增强，来完成公共字段自动填充功能。   "
      },
      {
        "title": "1.2 实现思路",
        "anchor": "12-实现思路",
        "level": 3,
        "text": "  在实现公共字段自动填充，也就是在插入或者更新的时候为指定字段赋予指定的值，使用它的好处就是可以统一对这些字段进行处理，避免了重复代码。在上述的问题分析中，我们提到有四个公共字段，需要在新增/更新中进行赋值操作, 具体情况如下:  序号 字段名 含义 数据类型 操作类型 -------- ----------- -------- ------------ -------------- 1 create_time 创建时间 datetime insert 2 create_user 创建人id bigint insert 3 update_time 修改时间 datetime insert、update 4 update_user 修改人id bigint insert、update    实现步骤：  1). 自定义注解 AutoFill，用于标识需要进行公共字段自动填充的方法  2). 自定义切面类 AutoFillAspect，统一拦截加入了 AutoFill 注解的方法，通过反射为公共字段赋值  3). 在 Mapper 的方法上加入 AutoFill 注解    若要实现上述步骤，需掌握以下知识(之前课程内容都学过)  技术点： 枚举、注解、AOP、反射   "
      },
      {
        "title": "1.3 代码开发",
        "anchor": "13-代码开发",
        "level": 3,
        "text": "  按照上一小节分析的实现步骤依次实现，共三步。  1.3.1 步骤一  自定义注解 AutoFill  进入到sky-server模块，创建com.sky.annotation包。  java package com.sky.annotation;  import com.sky.enumeration.OperationType; import java.lang.annotation.ElementType; import java.lang.annotation.Retention; import java.lang.annotation.RetentionPolicy; import java.lang.annotation.Target;  / 自定义注解，用于标识某个方法需要进行功能字段自动填充处理 / @Target(ElementType.METHOD) @Retention(RetentionPolicy.RUNTIME) public @interface AutoFill { //数据库操作类型：UPDATE INSERT OperationType value(); }   其中OperationType已在sky-common模块中定义  java package com.sky.enumeration;  / 数据库操作类型 / public enum OperationType {  / 更新操作 / UPDATE,  / 插入操作 / INSERT }     1.3.2 步骤二  自定义切面 AutoFillAspect  在sky-server模块，创建com.sky.aspect包。  java package com.sky.aspect;  / 自定义切面，实现公共字段自动填充处理逻辑 / @Aspect @Component @Slf4j public class AutoFillAspect {  / 切入点 / @Pointcut(\"execution( com.sky.mapper. . (..)) && @annotation(com.sky.annotation.AutoFill)\") public void autoFillPointCut(){}  / 前置通知，在通知中进行公共字段的赋值 / @Before(\"autoFillPointCut()\") public void autoFill(JoinPoint joinPoint){ /////////////////////重要//////////////////////////////////// //可先进行调试，是否能进入该方法 提前在mapper方法添加AutoFill注解 log.info(\"开始进行公共字段自动填充...\");  } }   完善自定义切面 AutoFillAspect 的 autoFill 方法  java package com.sky.aspect;  import com.sky.annotation.AutoFill; import com.sky.constant.AutoFillConstant; import com.sky.context.BaseContext; import com.sky.enumeration.OperationType; import lombok.extern.slf4j.Slf4j; import org.aspectj.lang.JoinPoint; import org.aspectj.lang.annotation.Aspect; import org.aspectj.lang.annotation.Before; import org.aspectj.lang.annotation.Pointcut; import org.aspectj.lang.reflect.MethodSignature; import org.springframework.stereotype.Component; import java.lang.reflect.Method; import java.time.LocalDateTime;  / 自定义切面，实现公共字段自动填充处理逻辑 / @Aspect @Component @Slf4j public class AutoFillAspect {  / 切入点 / @Pointcut(\"execution( com.sky.mapper. . (..)) && @annotation(com.sky.annotation.AutoFill)\") public void autoFillPointCut(){}  / 前置通知，在通知中进行公共字段的赋值 / @Before(\"autoFillPointCut()\") public void autoFill(JoinPoint joinPoint){ log.info(\"开始进行公共字段自动填充...\");  //获取到当前被拦截的方法上的数据库操作类型 MethodSignature signature = (MethodSignature) joinPoint.getSignature();//方法签名对象 AutoFill autoFill = signature.getMethod().getAnnotation(AutoFill.class);//获得方法上的注解对象 OperationType operationType = autoFill.value();//获得数据库操作类型  //获取到当前被拦截的方法的参数--实体对象 Object[] args = joinPoint.getArgs(); if(args == null args.length == 0){ return; }  Object entity = args[0];  //准备赋值的数据 LocalDateTime now = LocalDateTime.now(); Long currentId = BaseContext.getCurrentId();  //根据当前不同的操作类型，为对应的属性通过反射来赋值 if(operationType == OperationType.INSERT){ //为4个公共字段赋值 try { Method setCreateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_TIME, LocalDateTime.class); Method setCreateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_USER, Long.class); Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class); Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);  //通过反射为对象属性赋值 setCreateTime.invoke(entity,now); setCreateUser.invoke(entity,currentId); setUpdateTime.invoke(entity,now); setUpdateUser.invoke(entity,currentId); } catch (Exception e) { e.printStackTrace(); } }else if(operationType == OperationType.UPDATE){ //为2个公共字段赋值 try { Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class); Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);  //通过反射为对象属性赋值 setUpdateTime.invoke(entity,now); setUpdateUser.invoke(entity,currentId); } catch (Exception e) { e.printStackTrace(); } } } }     1.3.3 步骤三  在Mapper接口的方法上加入 AutoFill 注解  以 CategoryMapper 为例，分别在新增和修改方法添加@AutoFill()注解，也需要 EmployeeMapper 做相同操作  java package com.sky.mapper;  @Mapper public interface CategoryMapper { / 插入数据 @param category / @Insert(\"insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)\" + \" VALUES\" + \" ( {type}, {name}, {sort}, {status}, {createTime}, {updateTime}, {createUser}, {updateUser})\") @AutoFill(value = OperationType.INSERT) void insert(Category category); / 根据id修改分类 @param category / @AutoFill(value = OperationType.UPDATE) void update(Category category);  }   同时 ，将业务层为公共字段赋值的代码注释掉。  1). 将员工管理的新增和编辑方法中的公共字段赋值的代码注释。  2). 将菜品分类管理的新增和修改方法中的公共字段赋值的代码注释。   "
      },
      {
        "title": "1.4 功能测试",
        "anchor": "14-功能测试",
        "level": 3,
        "text": "  以 新增菜品分类 为例，进行测试  启动项目和Nginx    查看控制台  通过观察控制台输出的SQL来确定公共字段填充是否完成  image-20221121154841887  查看表  category表中数据  image-20221121155104152  其中create_time,update_time,create_user,update_user字段都已完成自动填充。  由于使用admin(id=1)用户登录进行菜品添加操作,故create_user,update_user都为1.   "
      },
      {
        "title": "1.5 代码提交",
        "anchor": "15-代码提交",
        "level": 3,
        "text": "  点击提交：      提交过程中 ，出现提示：      继续push:    推送成功：     "
      },
      {
        "title": "2. 新增菜品",
        "anchor": "2-新增菜品",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 需求分析与设计",
        "anchor": "21-需求分析与设计",
        "level": 3,
        "text": "  2.1.1 产品原型  后台系统中可以管理菜品信息，通过 新增功能 来添加一个新的菜品，在添加菜品时需要选择当前菜品所属的菜品分类，并且需要上传菜品图片。  新增菜品原型：    当填写完表单信息, 点击\"保存\"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。    业务规则：  - 菜品名称必须是唯一的 - 菜品必须属于某个分类下，不能单独存在 - 新增菜品时可以根据情况选择菜品的口味 - 每个菜品必须对应一张图片    2.1.2 接口设计  根据上述原型图先 粗粒度 设计接口，共包含3个接口。  接口设计：  - 根据类型查询分类（已完成） - 文件上传 - 新增菜品    接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。  1. 根据类型查询分类    2. 文件上传      3. 新增菜品      2.1.3 表设计  通过原型图进行分析：    新增菜品，其实就是将新增页面录入的菜品信息插入到dish表，如果添加了口味做法，还需要向dish_flavor表插入数据。所以在新增菜品时，涉及到两个表：  表名 说明 ----------- ---------- dish 菜品表 dish_flavor 菜品口味表    1). 菜品表:dish  字段名 数据类型 说明 备注 ----------- ------------- ------------ ----------- id bigint 主键 自增 name varchar(32) 菜品名称 唯一 category_id bigint 分类id 逻辑外键 price decimal(10,2) 菜品价格 image varchar(255) 图片路径 description varchar(255) 菜品描述 status int 售卖状态 1起售 0停售 create_time datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id  2). 菜品口味表:dish_flavor  字段名 数据类型 说明 备注 ---------- ------------ -------- -------- id bigint 主键 自增 dish_id bigint 菜品id 逻辑外键 name varchar(32) 口味名称 value varchar(255) 口味值   "
      },
      {
        "title": "2.2 代码开发",
        "anchor": "22-代码开发",
        "level": 3,
        "text": "  2.2.1 文件上传实现  因为在新增菜品时，需要上传菜品对应的图片(文件)，包括后绪其它功能也会使用到文件上传，故要实现通用的文件上传接口。  文件上传，是指将本地图片、视频、音频等文件上传到服务器上，可以供其他用户浏览或下载的过程。文件上传在项目中应用非常广泛，我们经常发抖音、发朋友圈都用到了文件上传功能。  实现文件上传服务，需要有存储的支持，那么我们的解决方案将以下几种：  1. 直接将图片保存到服务的硬盘（springmvc中的文件上传） 1. 优点：开发便捷，成本低 2. 缺点：扩容困难 2. 使用分布式文件系统进行存储 1. 优点：容易实现扩容 2. 缺点：开发复杂度稍大（有成熟的产品可以使用，比如：FastDFS,MinIO） 3. 使用第三方的存储服务（例如OSS） 1. 优点：开发简单，拥有强大功能，免维护 2. 缺点：付费  在本项目选用阿里云的OSS服务进行文件存储。（前面课程已学习过阿里云OSS,不再赘述）    实现步骤：  1). 定义OSS相关配置  在sky-server模块  application-dev.yml  yaml sky: alioss: endpoint: oss-cn-hangzhou.aliyuncs.com ⚠️ 以下为课程演示用密钥，已脱敏；自己的项目请去阿里云控制台重新生成并走环境变量 access-key-id: access-key-secret: bucket-name: sky-take-out   application.yml  yaml spring: profiles: active: dev 设置环境 sky: alioss: endpoint: ${sky.alioss.endpoint} access-key-id: ${sky.alioss.access-key-id} access-key-secret: ${sky.alioss.access-key-secret} bucket-name: ${sky.alioss.bucket-name}      2). 读取OSS配置  在sky-common模块中，已定义  java package com.sky.properties;  import lombok.Data; import org.springframework.boot.context.properties.ConfigurationProperties; import org.springframework.stereotype.Component;  @Component @ConfigurationProperties(prefix = \"sky.alioss\") @Data public class AliOssProperties {  private String endpoint; private String accessKeyId; private String accessKeySecret; private String bucketName;  }     3). 生成OSS工具类对象  在sky-server模块  java package com.sky.config;  import com.sky.properties.AliOssProperties; import com.sky.utils.AliOssUtil; import lombok.extern.slf4j.Slf4j; import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean; import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration;  / 配置类，用于创建AliOssUtil对象 / @Configuration @Slf4j public class OssConfiguration {  @Bean @ConditionalOnMissingBean public AliOssUtil aliOssUtil(AliOssProperties aliOssProperties){ log.info(\"开始创建阿里云文件上传工具类对象：{}\",aliOssProperties); return new AliOssUtil(aliOssProperties.getEndpoint(), aliOssProperties.getAccessKeyId(), aliOssProperties.getAccessKeySecret(), aliOssProperties.getBucketName()); } }   其中，AliOssUtil.java已在sky-common模块中定义  java package com.sky.utils;  import com.aliyun.oss.ClientException; import com.aliyun.oss.OSS; import com.aliyun.oss.OSSClientBuilder; import com.aliyun.oss.OSSException; import lombok.AllArgsConstructor; import lombok.Data; import lombok.extern.slf4j.Slf4j; import java.io.ByteArrayInputStream;  @Data @AllArgsConstructor @Slf4j public class AliOssUtil {  private String endpoint; private String accessKeyId; private String accessKeySecret; private String bucketName;  / 文件上传  @param bytes @param objectName @return / public String upload(byte[] bytes, String objectName) {  // 创建OSSClient实例。 OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);  try { // 创建PutObject请求。 ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(bytes)); } catch (OSSException oe) { System.out.println(\"Caught an OSSException, which means your request made it to OSS, \" + \"but was rejected with an error response for some reason.\"); System.out.println(\"Error Message:\" + oe.getErrorMessage()); System.out.println(\"Error Code:\" + oe.getErrorCode()); System.out.println(\"Request ID:\" + oe.getRequestId()); System.out.println(\"Host ID:\" + oe.getHostId()); } catch (ClientException ce) { System.out.println(\"Caught an ClientException, which means the client encountered \" + \"a serious internal problem while trying to communicate with OSS, \" + \"such as not being able to access the network.\"); System.out.println(\"Error Message:\" + ce.getMessage()); } finally { if (ossClient != null) { ossClient.shutdown(); } }  //文件访问路径规则 https://BucketName.Endpoint/ObjectName StringBuilder stringBuilder = new StringBuilder(\"https://\"); stringBuilder .append(bucketName) .append(\".\") .append(endpoint) .append(\"/\") .append(objectName);  log.info(\"文件上传到:{}\", stringBuilder.toString());  return stringBuilder.toString(); } }     4). 定义文件上传接口  在sky-server模块中定义接口  java package com.sky.controller.admin;  import com.sky.constant.MessageConstant; import com.sky.result.Result; import com.sky.utils.AliOssUtil; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.PostMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import org.springframework.web.multipart.MultipartFile; import java.io.IOException; import java.util.UUID;  / 通用接口 / @RestController @RequestMapping(\"/admin/common\") @Api(tags = \"通用接口\") @Slf4j public class CommonController {  @Autowired private AliOssUtil aliOssUtil;  / 文件上传 @param file @return / @PostMapping(\"/upload\") @ApiOperation(\"文件上传\") public Result upload(MultipartFile file){ log.info(\"文件上传：{}\",file);  try { //原始文件名 String originalFilename = file.getOriginalFilename(); //截取原始文件名的后缀 dfdfdf.png String extension = originalFilename.substring(originalFilename.lastIndexOf(\".\")); //构造新文件名称 String objectName = UUID.randomUUID().toString() + extension;  //文件的请求路径 String filePath = aliOssUtil.upload(file.getBytes(), objectName); return Result.success(filePath); } catch (IOException e) { log.error(\"文件上传失败：{}\", e); }  return Result.error(MessageConstant.UPLOAD_FAILED); } }     2.2.2 新增菜品实现  1). 设计DTO类  在sky-pojo模块中  java package com.sky.dto;  import com.sky.entity.DishFlavor; import lombok.Data; import java.io.Serializable; import java.math.BigDecimal; import java.util.ArrayList; import java.util.List;  @Data public class DishDTO implements Serializable {  private Long id; //菜品名称 private String name; //菜品分类id private Long categoryId; //菜品价格 private BigDecimal price; //图片 private String image; //描述信息 private String description; //0 停售 1 起售 private Integer status; //口味 private List flavors = new ArrayList< (); }     2). Controller层  进入到sky-server模块  java package com.sky.controller.admin;  import com.sky.dto.DishDTO; import com.sky.dto.DishPageQueryDTO; import com.sky.entity.Dish; import com.sky.result.PageResult; import com.sky.result.Result; import com.sky.service.DishService; import com.sky.vo.DishVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation. ; import java.util.List; import java.util.Set;  / 菜品管理 / @RestController @RequestMapping(\"/admin/dish\") @Api(tags = \"菜品相关接口\") @Slf4j public class DishController {  @Autowired private DishService dishService;  / 新增菜品  @param dishDTO @return / @PostMapping @ApiOperation(\"新增菜品\") public Result save(@RequestBody DishDTO dishDTO) { log.info(\"新增菜品：{}\", dishDTO); dishService.saveWithFlavor(dishDTO);//后绪步骤开发 return Result.success(); } }     3). Service层接口  java package com.sky.service;  import com.sky.dto.DishDTO; import com.sky.entity.Dish;  public interface DishService {  / 新增菜品和对应的口味  @param dishDTO / public void saveWithFlavor(DishDTO dishDTO);  }     4). Service层实现类  java package com.sky.service.impl;   @Service @Slf4j public class DishServiceImpl implements DishService {  @Autowired private DishMapper dishMapper; @Autowired private DishFlavorMapper dishFlavorMapper;  / 新增菜品和对应的口味  @param dishDTO / @Transactional public void saveWithFlavor(DishDTO dishDTO) {  Dish dish = new Dish(); BeanUtils.copyProperties(dishDTO, dish);  //向菜品表插入1条数据 dishMapper.insert(dish);//后绪步骤实现  //获取insert语句生成的主键值 Long dishId = dish.getId();  List flavors = dishDTO.getFlavors(); if (flavors != null && flavors.size() 0) { flavors.forEach(dishFlavor - { dishFlavor.setDishId(dishId); }); //向口味表插入n条数据 dishFlavorMapper.insertBatch(flavors);//后绪步骤实现 } }  }     5). Mapper层  DishMapper.java中添加  java / 插入菜品数据  @param dish / @AutoFill(value = OperationType.INSERT) void insert(Dish dish);   在/resources/mapper中创建DishMapper.xml  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"    insert into dish (name, category_id, price, image, description, create_time, update_time, create_user,update_user, status) values ( {name}, {categoryId}, {price}, {image}, {description}, {createTime}, {updateTime}, {createUser}, {updateUser}, {status})      DishFlavorMapper.java  java package com.sky.mapper;  import com.sky.entity.DishFlavor; import java.util.List;  @Mapper public interface DishFlavorMapper { / 批量插入口味数据 @param flavors / void insertBatch(List flavors);  }   在/resources/mapper中创建DishFlavorMapper.xml  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"   insert into dish_flavor (dish_id, name, value) VALUES  ( {df.dishId}, {df.name}, {df.value})       "
      },
      {
        "title": "2.3 功能测试",
        "anchor": "23-功能测试",
        "level": 3,
        "text": "  进入到菜品管理--- 新建菜品    由于没有实现菜品查询功能，所以保存后，暂且在表中查看添加的数据。  dish表：    dish_flavor表：    测试成功。   "
      },
      {
        "title": "2.4代码提交",
        "anchor": "24代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。   "
      },
      {
        "title": "3. 菜品分页查询",
        "anchor": "3-菜品分页查询",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 需求分析和设计",
        "anchor": "31-需求分析和设计",
        "level": 3,
        "text": "  3.1.1 产品原型  系统中的菜品数据很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。  菜品分页原型：    在菜品列表展示时，除了菜品的基本信息(名称、售价、售卖状态、最后操作时间)外，还有两个字段略微特殊，第一个是图片字段 ，我们从数据库查询出来的仅仅是图片的名字，图片要想在表格中回显展示出来，就需要下载这个图片。第二个是菜品分类，这里展示的是分类名称，而不是分类ID，此时我们就需要根据菜品的分类ID，去分类表中查询分类信息，然后在页面展示。  业务规则：  - 根据页码展示菜品信息 - 每页展示10条数据 - 分页查询时可以根据需要输入菜品名称、菜品分类、菜品状态进行查询    3.1.2 接口设计  根据上述原型图，设计出相应的接口。     "
      },
      {
        "title": "3.2 代码开发",
        "anchor": "32-代码开发",
        "level": 3,
        "text": "  3.2.1 设计DTO类  根据菜品分页查询接口定义设计对应的DTO：  在sky-pojo模块中，已定义  java package com.sky.dto;  import lombok.Data; import java.io.Serializable;  @Data public class DishPageQueryDTO implements Serializable {  private int page; private int pageSize; private String name; private Integer categoryId; //分类id private Integer status; //状态 0表示禁用 1表示启用  }     3.2.2 设计VO类  根据菜品分页查询接口定义设计对应的VO：  在sky-pojo模块中，已定义  java package com.sky.vo;  import com.sky.entity.DishFlavor; import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor; import java.io.Serializable; import java.math.BigDecimal; import java.time.LocalDateTime; import java.util.ArrayList; import java.util.List;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class DishVO implements Serializable {  private Long id; //菜品名称 private String name; //菜品分类id private Long categoryId; //菜品价格 private BigDecimal price; //图片 private String image; //描述信息 private String description; //0 停售 1 起售 private Integer status; //更新时间 private LocalDateTime updateTime; //分类名称 private String categoryName; //菜品关联的口味 private List flavors = new ArrayList< (); }     3.2.3 Controller层  根据接口定义创建DishController的page分页查询方法：  java / 菜品分页查询  @param dishPageQueryDTO @return / @GetMapping(\"/page\") @ApiOperation(\"菜品分页查询\") public Result page(DishPageQueryDTO dishPageQueryDTO) { log.info(\"菜品分页查询:{}\", dishPageQueryDTO); PageResult pageResult = dishService.pageQuery(dishPageQueryDTO);//后绪步骤定义 return Result.success(pageResult); }     3.2.4 Service层接口  在 DishService 中扩展分页查询方法：  java / 菜品分页查询  @param dishPageQueryDTO @return / PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO);     3.2.5 Service层实现类  在 DishServiceImpl 中实现分页查询方法：  java / 菜品分页查询  @param dishPageQueryDTO @return / public PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO) { PageHelper.startPage(dishPageQueryDTO.getPage(), dishPageQueryDTO.getPageSize()); Page page = dishMapper.pageQuery(dishPageQueryDTO);//后绪步骤实现 return new PageResult(page.getTotal(), page.getResult()); }     3.2.6 Mapper层  在 DishMapper 接口中声明 pageQuery 方法：  java / 菜品分页查询  @param dishPageQueryDTO @return / Page pageQuery(DishPageQueryDTO dishPageQueryDTO);   在 DishMapper.xml 中编写SQL：  xml  select d. , c.name as categoryName from dish d left outer join category c on d.category_id = c.id   and d.name like concat('%', {name},'%')   and d.category_id = {categoryId}   and d.status = {status}   order by d.create_time desc     "
      },
      {
        "title": "3.3 功能测试",
        "anchor": "33-功能测试",
        "level": 3,
        "text": "  3.3.1 接口文档测试  启动服务： 访问http://localhost:8080/doc.html，进入菜品分页查询接口  注意： 使用admin用户登录重新获取token，防止token失效。    点击发送：      3.3.2 前后端联调测试  启动nginx,访问 http://localhost  点击菜品管理    数据成功查出。   "
      },
      {
        "title": "4. 删除菜品",
        "anchor": "4-删除菜品",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析和设计",
        "anchor": "41-需求分析和设计",
        "level": 3,
        "text": "  4.1.1 产品原型  在菜品列表页面，每个菜品后面对应的操作分别为 修改 、 删除 、 停售 ，可通过删除功能完成对菜品及相关的数据进行删除。  删除菜品原型：      业务规则：  - 可以一次删除一个菜品，也可以批量删除菜品 - 起售中的菜品不能删除 - 被套餐关联的菜品不能删除 - 删除菜品后，关联的口味数据也需要删除掉    4.1.2 接口设计  根据上述原型图，设计出相应的接口。    注意： 删除一个菜品和批量删除菜品共用一个接口，故ids可包含多个菜品id,之间用逗号分隔。    4.1.3 表设计  在进行删除菜品操作时，会涉及到以下三张表。    注意事项：  - 在dish表中删除菜品基本数据时，同时，也要把关联在dish_flavor表中的数据一块删除。 - setmeal_dish表为菜品和套餐关联的中间表。 - 若删除的菜品数据关联着某个套餐，此时，删除失败。 - 若要删除套餐关联的菜品数据，先解除两者关联，再对菜品进行删除。   "
      },
      {
        "title": "4.2 代码开发",
        "anchor": "42-代码开发",
        "level": 3,
        "text": "  4.1.2 Controller层  根据删除菜品的接口定义在DishController中创建方法：  java / 菜品批量删除  @param ids @return / @DeleteMapping @ApiOperation(\"菜品批量删除\") public Result delete(@RequestParam List ids) { log.info(\"菜品批量删除：{}\", ids); dishService.deleteBatch(ids);//后绪步骤实现 return Result.success(); }     4.2.2 Service层接口  在DishService接口中声明deleteBatch方法：  java / 菜品批量删除  @param ids / void deleteBatch(List ids);     4.2.3 Service层实现类  在DishServiceImpl中实现deleteBatch方法：  java @Autowired private SetmealDishMapper setmealDishMapper; / 菜品批量删除  @param ids / @Transactional//事务 public void deleteBatch(List ids) { //判断当前菜品是否能够删除---是否存在起售中的菜品？？ for (Long id : ids) { Dish dish = dishMapper.getById(id);//后绪步骤实现 if (dish.getStatus() == StatusConstant.ENABLE) { //当前菜品处于起售中，不能删除 throw new DeletionNotAllowedException(MessageConstant.DISH_ON_SALE); } }  //判断当前菜品是否能够删除---是否被套餐关联了？？ List setmealIds = setmealDishMapper.getSetmealIdsByDishIds(ids); if (setmealIds != null && setmealIds.size() 0) { //当前菜品被套餐关联了，不能删除 throw new DeletionNotAllowedException(MessageConstant.DISH_BE_RELATED_BY_SETMEAL); }  //删除菜品表中的菜品数据 for (Long id : ids) { dishMapper.deleteById(id);//后绪步骤实现 //删除菜品关联的口味数据 dishFlavorMapper.deleteByDishId(id);//后绪步骤实现 } }     4.2.4 Mapper层  在DishMapper中声明getById方法，并配置SQL：  java / 根据主键查询菜品  @param id @return / @Select(\"select from dish where id = {id}\") Dish getById(Long id);   创建SetmealDishMapper，声明getSetmealIdsByDishIds方法，并在xml文件中编写SQL：  java package com.sky.mapper;  import com.sky.entity.SetmealDish; import org.apache.ibatis.annotations.Delete; import org.apache.ibatis.annotations.Mapper; import java.util.List;  @Mapper public interface SetmealDishMapper { / 根据菜品id查询对应的套餐id  @param dishIds @return / //select setmeal_id from setmeal_dish where dish_id in (1,2,3,4) List getSetmealIdsByDishIds(List dishIds); }    SetmealDishMapper.xml  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"   select setmeal_id from setmeal_dish where dish_id in  {dishId}      在DishMapper.java中声明deleteById方法并配置SQL：  java / 根据主键删除菜品数据  @param id / @Delete(\"delete from dish where id = {id}\") void deleteById(Long id);   在DishFlavorMapper中声明deleteByDishId方法并配置SQL：  java / 根据菜品id删除对应的口味数据 @param dishId / @Delete(\"delete from dish_flavor where dish_id = {dishId}\") void deleteByDishId(Long dishId);    "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  既可以通过Swagger接口文档进行测试，也可以通过前后端联调测试，接下来，我们直接使用 前后端联调测试 。  进入到菜品列表查询页面    对测试菜品进行删除操作    同时，进到dish表和dish_flavor两个表查看 测试菜品 的相关数据都已被成功删除。    再次，删除状态为启售的菜品    点击批量删除    删除失败，因为起售中的菜品不能删除。 "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。   "
      },
      {
        "title": "5. 修改菜品",
        "anchor": "5-修改菜品",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析和设计",
        "anchor": "51-需求分析和设计",
        "level": 3,
        "text": "  5.1.1 产品原型  在菜品管理列表页面点击修改按钮，跳转到修改菜品页面，在修改页面回显菜品相关信息并进行修改，最后点击保存按钮完成修改操作。  修改菜品原型：      5.1.2 接口设计  通过对上述原型图进行分析，该页面共涉及4个接口。  接口：  - 根据id查询菜品 - 根据类型查询分类(已实现) - 文件上传(已实现) - 修改菜品  我们只需要实现 根据id查询菜品 和 修改菜品 两个接口，接下来，我们来重点分析这两个接口。  1). 根据id查询菜品    2). 修改菜品        注:因为是修改功能，请求方式可设置为PUT。   "
      },
      {
        "title": "5.2 代码开发",
        "anchor": "52-代码开发",
        "level": 3,
        "text": "  5.2.1 根据id查询菜品实现  1). Controller层  根据id查询菜品的接口定义在DishController中创建方法：  java / 根据id查询菜品  @param id @return / @GetMapping(\"/{id}\") @ApiOperation(\"根据id查询菜品\") public Result getById(@PathVariable Long id) { log.info(\"根据id查询菜品：{}\", id); DishVO dishVO = dishService.getByIdWithFlavor(id);//后绪步骤实现 return Result.success(dishVO); }     2). Service层接口  在DishService接口中声明getByIdWithFlavor方法：  java / 根据id查询菜品和对应的口味数据  @param id @return / DishVO getByIdWithFlavor(Long id);     3). Service层实现类  在DishServiceImpl中实现getByIdWithFlavor方法：  java / 根据id查询菜品和对应的口味数据  @param id @return / public DishVO getByIdWithFlavor(Long id) { //根据id查询菜品数据 Dish dish = dishMapper.getById(id);  //根据菜品id查询口味数据 List dishFlavors = dishFlavorMapper.getByDishId(id);//后绪步骤实现  //将查询到的数据封装到VO DishVO dishVO = new DishVO(); BeanUtils.copyProperties(dish, dishVO); dishVO.setFlavors(dishFlavors);  return dishVO; }     4). Mapper层  在DishFlavorMapper中声明getByDishId方法，并配置SQL：  java / 根据菜品id查询对应的口味数据 @param dishId @return / @Select(\"select from dish_flavor where dish_id = {dishId}\") List getByDishId(Long dishId);     5.2.1 修改菜品实现  1). Controller层  根据修改菜品的接口定义在DishController中创建方法：  java / 修改菜品  @param dishDTO @return / @PutMapping @ApiOperation(\"修改菜品\") public Result update(@RequestBody DishDTO dishDTO) { log.info(\"修改菜品：{}\", dishDTO); dishService.updateWithFlavor(dishDTO); return Result.success(); }     2). Service层接口  在DishService接口中声明updateWithFlavor方法：  java / 根据id修改菜品基本信息和对应的口味信息  @param dishDTO / void updateWithFlavor(DishDTO dishDTO);     3). Service层实现类  在DishServiceImpl中实现updateWithFlavor方法：  java / 根据id修改菜品基本信息和对应的口味信息  @param dishDTO / public void updateWithFlavor(DishDTO dishDTO) { Dish dish = new Dish(); BeanUtils.copyProperties(dishDTO, dish);  //修改菜品表基本信息 dishMapper.update(dish);  //删除原有的口味数据 dishFlavorMapper.deleteByDishId(dishDTO.getId());  //重新插入口味数据 List flavors = dishDTO.getFlavors(); if (flavors != null && flavors.size() 0) { flavors.forEach(dishFlavor - { dishFlavor.setDishId(dishDTO.getId()); }); //向口味表插入n条数据 dishFlavorMapper.insertBatch(flavors); } }     4). Mapper层  在DishMapper中，声明update方法：  java / 根据id动态修改菜品数据  @param dish / @AutoFill(value = OperationType.UPDATE) void update(Dish dish);   并在DishMapper.xml文件中编写SQL:  xml  update dish  name = {name}, category_id = {categoryId}, price = {price}, image = {image}, description = {description}, status = {status}, update_time = {updateTime}, update_user = {updateUser},  where id = {id}     "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  本次测试直接通过 前后端联调测试 ，可使用Debug方式启动项目，观察运行中步骤。  进入菜品列表查询页面，对第一个菜品的价格进行修改    点击修改，回显成功    菜品价格修改后，点击保存    修改成功   "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "    后续步骤和上述功能代码提交一致，不再赘述。 "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day03 课程内容 - 公共字段自动填充 - 新增菜品 - 菜品分页查询 - 删除菜品 - 修改菜品 功能实现： 菜品管理 菜品管理效果图： 1. 公共字段自动填充 1.1 问题分析 在上一章节我们已经完成了后台系统的 员工管理功能 和 菜品分类功能 的开发，在 新增员工 或者 新增菜品分类 时需要设置创建时间、创建人、修改时间、修改人等字段，在 编辑员工 或者 编辑菜品分类 时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下： 序号 字段名 含义 数据类型 -------- ----------- -------- ------------ 1 create_time 创建时间 datetime 2 create_user 创建人id bigint 3 update_time 修改时间 datetime 4 update_user 修改人id bigint 而针对于这些字段，我们的赋值方式为： 1). 在新增数据时, 将createtime、updatetime 设置为当前时间, createuser、updateuser设置为当前登录用户id。 2). 在更新数据时, 将updatetime 设置为当前时间, updateuser设置为当前登录用户id。 目前,在我们的项目中处理这些字段都是在每一个业务方法中进行赋值操作,如下: 新增员工方法： java / 新增员工 @param employeedto / public void save(employeedto employeedto) { //....................... ////////////////////////////////////////// //设置当前记录的创建时间和修改时间 employee.setcreatetime(localdatetime.now()); employee.setupdatetime(localdatetime.now()); //设置当前记录创建人id和修改人id employee.setcreateuser(basecontext.getcurrentid());//目前写个假数据，后期修改 employee.setupdateuser(basecontext.getcurrentid()); /////////////////////////////////////////////// employeemapper.insert(employee); } 编辑员工方法： java / 编辑员工信息 @param employeedto / public void update(employeedto employeedto) { //........................................ /////////////////////////////////////////////// employee.setupdatetime(localdatetime.now()); employee.setupdateuser(basecontext.getcurrentid()); /////////////////////////////////////////////////// employeemapper.update(employee); } 新增菜品分类方法： java / 新增分类 @param categorydto / public void save(categorydto categorydto) { //.................................... ////////////////////////////////////////// //设置创建时间、修改时间、创建人、修改人 category.setcreatetime(localdatetime.now()); category.setupdatetime(localdatetime.now()); category.setcreateuser(basecontext.getcurrentid()); category.setupdateuser(basecontext.getcurrentid()); /////////////////////////////////////////////////// categorymapper.insert(category); } 修改菜品分类方法： java / 修改分类 @param categorydto / public void update(categorydto categorydto) { //.................................... ////////////////////////////////////////////// //设置修改时间、修改人 category.setupdatetime(localdatetime.now()); category.setupdateuser(basecontext.getcurrentid()); ////////////////////////////////////////////////// categorymapper.update(category); } 如果都按照上述的操作方式来处理这些公共字段, 需要在每一个业务方法中进行操作, 编码相对冗余、繁琐，那能不能对于这些公共字段在某个地方统一处理，来简化开发呢？ 答案是可以的，我们使用aop切面编程，实现功能增强，来完成公共字段自动填充功能。 1.2 实现思路 在实现公共字段自动填充，也就是在插入或者更新的时候为指定字段赋予指定的值，使用它的好处就是可以统一对这些字段进行处理，避免了重复代码。在上述的问题分析中，我们提到有四个公共字段，需要在新增/更新中进行赋值操作, 具体情况如下: 序号 字段名 含义 数据类型 操作类型 -------- ----------- -------- ------------ -------------- 1 create_time 创建时间 datetime insert 2 create_user 创建人id bigint insert 3 update_time 修改时间 datetime insert、update 4 update_user 修改人id bigint insert、update 实现步骤： 1). 自定义注解 autofill，用于标识需要进行公共字段自动填充的方法 2). 自定义切面类 autofillaspect，统一拦截加入了 autofill 注解的方法，通过反射为公共字段赋值 3). 在 mapper 的方法上加入 autofill 注解 若要实现上述步骤，需掌握以下知识(之前课程内容都学过) 技术点： 枚举、注解、aop、反射 1.3 代码开发 按照上一小节分析的实现步骤依次实现，共三步。 1.3.1 步骤一 自定义注解 autofill 进入到sky-server模块，创建com.sky.annotation包。 java package com.sky.annotation; import com.sky.enumeration.operationtype; import java.lang.annotation.elementtype; import java.lang.annotation.retention; import java.lang.annotation.retentionpolicy; import java.lang.annotation.target; / 自定义注解，用于标识某个方法需要进行功能字段自动填充处理 / @target(elementtype.method) @retention(retentionpolicy.runtime) public @interface autofill { //数据库操作类型：update insert operationtype value(); } 其中operationtype已在sky-common模块中定义 java package com.sky.enumeration; / 数据库操作类型 / public enum operationtype { / 更新操作 / update, / 插入操作 / insert } 1.3.2 步骤二 自定义切面 autofillaspect 在sky-server模块，创建com.sky.aspect包。 java package com.sky.aspect; / 自定义切面，实现公共字段自动填充处理逻辑 / @aspect @component @slf4j public class autofillaspect { / 切入点 / @pointcut(\"execution( com.sky.mapper. . (..)) && @annotation(com.sky.annotation.autofill)\") public void autofillpointcut(){} / 前置通知，在通知中进行公共字段的赋值 / @before(\"autofillpointcut()\") public void autofill(joinpoint joinpoint){ /////////////////////重要//////////////////////////////////// //可先进行调试，是否能进入该方法 提前在mapper方法添加autofill注解 log.info(\"开始进行公共字段自动填充...\"); } } 完善自定义切面 autofillaspect 的 autofill 方法 java package com.sky.aspect; import com.sky.annotation.autofill; import com.sky.constant.autofillconstant; import com.sky.context.basecontext; import com.sky.enumeration.operationtype; import lombok.extern.slf4j.slf4j; import org.aspectj.lang.joinpoint; import org.aspectj.lang.annotation.aspect; import org.aspectj.lang.annotation.before; import org.aspectj.lang.annotation.pointcut; import org.aspectj.lang.reflect.methodsignature; import org.springframework.stereotype.component; import java.lang.reflect.method; import java.time.localdatetime; / 自定义切面，实现公共字段自动填充处理逻辑 / @aspect @component @slf4j public class autofillaspect { / 切入点 / @pointcut(\"execution( com.sky.mapper. . (..)) && @annotation(com.sky.annotation.autofill)\") public void autofillpointcut(){} / 前置通知，在通知中进行公共字段的赋值 / @before(\"autofillpointcut()\") public void autofill(joinpoint joinpoint){ log.info(\"开始进行公共字段自动填充...\"); //获取到当前被拦截的方法上的数据库操作类型 methodsignature signature = (methodsignature) joinpoint.getsignature();//方法签名对象 autofill autofill = signature.getmethod().getannotation(autofill.class);//获得方法上的注解对象 operationtype operationtype = autofill.value();//获得数据库操作类型 //获取到当前被拦截的方法的参数--实体对象 object[] args = joinpoint.getargs(); if(args == null args.length == 0){ return; } object entity = args[0]; //准备赋值的数据 localdatetime now = localdatetime.now(); long currentid = basecontext.getcurrentid(); //根据当前不同的操作类型，为对应的属性通过反射来赋值 if(operationtype == operationtype.insert){ //为4个公共字段赋值 try { method setcreatetime = entity.getclass().getdeclaredmethod(autofillconstant.set_create_time, localdatetime.class); method setcreateuser = entity.getclass().getdeclaredmethod(autofillconstant.set_create_user, long.class); method setupdatetime = entity.getclass().getdeclaredmethod(autofillconstant.set_update_time, localdatetime.class); method setupdateuser = entity.getclass().getdeclaredmethod(autofillconstant.set_update_user, long.class); //通过反射为对象属性赋值 setcreatetime.invoke(entity,now); setcreateuser.invoke(entity,currentid); setupdatetime.invoke(entity,now); setupdateuser.invoke(entity,currentid); } catch (exception e) { e.printstacktrace(); } }else if(operationtype == operationtype.update){ //为2个公共字段赋值 try { method setupdatetime = entity.getclass().getdeclaredmethod(autofillconstant.set_update_time, localdatetime.class); method setupdateuser = entity.getclass().getdeclaredmethod(autofillconstant.set_update_user, long.class); //通过反射为对象属性赋值 setupdatetime.invoke(entity,now); setupdateuser.invoke(entity,currentid); } catch (exception e) { e.printstacktrace(); } } } } 1.3.3 步骤三 在mapper接口的方法上加入 autofill 注解 以 categorymapper 为例，分别在新增和修改方法添加@autofill()注解，也需要 employeemapper 做相同操作 java package com.sky.mapper; @mapper public interface categorymapper { / 插入数据 @param category / @insert(\"insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)\" + \" values\" + \" ( {type}, {name}, {sort}, {status}, {createtime}, {updatetime}, {createuser}, {updateuser})\") @autofill(value = operationtype.insert) void insert(category category); / 根据id修改分类 @param category / @autofill(value = operationtype.update) void update(category category); } 同时 ，将业务层为公共字段赋值的代码注释掉。 1). 将员工管理的新增和编辑方法中的公共字段赋值的代码注释。 2). 将菜品分类管理的新增和修改方法中的公共字段赋值的代码注释。 1.4 功能测试 以 新增菜品分类 为例，进行测试 启动项目和nginx 查看控制台 通过观察控制台输出的sql来确定公共字段填充是否完成 image-20221121154841887 查看表 category表中数据 image-20221121155104152 其中create_time,update_time,create_user,update_user字段都已完成自动填充。 由于使用admin(id=1)用户登录进行菜品添加操作,故create_user,update_user都为1. 1.5 代码提交 点击提交： 提交过程中 ，出现提示： 继续push: 推送成功： 2. 新增菜品 2.1 需求分析与设计 2.1.1 产品原型 后台系统中可以管理菜品信息，通过 新增功能 来添加一个新的菜品，在添加菜品时需要选择当前菜品所属的菜品分类，并且需要上传菜品图片。 新增菜品原型： 当填写完表单信息, 点击\"保存\"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。 业务规则： - 菜品名称必须是唯一的 - 菜品必须属于某个分类下，不能单独存在 - 新增菜品时可以根据情况选择菜品的口味 - 每个菜品必须对应一张图片 2.1.2 接口设计 根据上述原型图先 粗粒度 设计接口，共包含3个接口。 接口设计： - 根据类型查询分类（已完成） - 文件上传 - 新增菜品 接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。 1. 根据类型查询分类 2. 文件上传 3. 新增菜品 2.1.3 表设计 通过原型图进行分析： 新增菜品，其实就是将新增页面录入的菜品信息插入到dish表，如果添加了口味做法，还需要向dish_flavor表插入数据。所以在新增菜品时，涉及到两个表： 表名 说明 ----------- ---------- dish 菜品表 dish_flavor 菜品口味表 1). 菜品表:dish 字段名 数据类型 说明 备注 ----------- ------------- ------------ ----------- id bigint 主键 自增 name varchar(32) 菜品名称 唯一 category_id bigint 分类id 逻辑外键 price decimal(10,2) 菜品价格 image varchar(255) 图片路径 description varchar(255) 菜品描述 status int 售卖状态 1起售 0停售 create_time datetime 创建时间 update_time datetime 最后修改时间 create_user bigint 创建人id update_user bigint 最后修改人id 2). 菜品口味表:dish_flavor 字段名 数据类型 说明 备注 ---------- ------------ -------- -------- id bigint 主键 自增 dish_id bigint 菜品id 逻辑外键 name varchar(32) 口味名称 value varchar(255) 口味值 2.2 代码开发 2.2.1 文件上传实现 因为在新增菜品时，需要上传菜品对应的图片(文件)，包括后绪其它功能也会使用到文件上传，故要实现通用的文件上传接口。 文件上传，是指将本地图片、视频、音频等文件上传到服务器上，可以供其他用户浏览或下载的过程。文件上传在项目中应用非常广泛，我们经常发抖音、发朋友圈都用到了文件上传功能。 实现文件上传服务，需要有存储的支持，那么我们的解决方案将以下几种： 1. 直接将图片保存到服务的硬盘（springmvc中的文件上传） 1. 优点：开发便捷，成本低 2. 缺点：扩容困难 2. 使用分布式文件系统进行存储 1. 优点：容易实现扩容 2. 缺点：开发复杂度稍大（有成熟的产品可以使用，比如：fastdfs,minio） 3. 使用第三方的存储服务（例如oss） 1. 优点：开发简单，拥有强大功能，免维护 2. 缺点：付费 在本项目选用阿里云的oss服务进行文件存储。（前面课程已学习过阿里云oss,不再赘述） 实现步骤： 1). 定义oss相关配置 在sky-server模块 application-dev.yml yaml sky: alioss: endpoint: oss-cn-hangzhou.aliyuncs.com ⚠️ 以下为课程演示用密钥，已脱敏；自己的项目请去阿里云控制台重新生成并走环境变量 access-key-id: access-key-secret: bucket-name: sky-take-out application.yml yaml spring: profiles: active: dev 设置环境 sky: alioss: endpoint: ${sky.alioss.endpoint} access-key-id: ${sky.alioss.access-key-id} access-key-secret: ${sky.alioss.access-key-secret} bucket-name: ${sky.alioss.bucket-name} 2). 读取oss配置 在sky-common模块中，已定义 java package com.sky.properties; import lombok.data; import org.springframework.boot.context.properties.configurationproperties; import org.springframework.stereotype.component; @component @configurationproperties(prefix = \"sky.alioss\") @data public class aliossproperties { private string endpoint; private string accesskeyid; private string accesskeysecret; private string bucketname; } 3). 生成oss工具类对象 在sky-server模块 java package com.sky.config; import com.sky.properties.aliossproperties; import com.sky.utils.aliossutil; import lombok.extern.slf4j.slf4j; import org.springframework.boot.autoconfigure.condition.conditionalonmissingbean; import org.springframework.context.annotation.bean; import org.springframework.context.annotation.configuration; / 配置类，用于创建aliossutil对象 / @configuration @slf4j public class ossconfiguration { @bean @conditionalonmissingbean public aliossutil aliossutil(aliossproperties aliossproperties){ log.info(\"开始创建阿里云文件上传工具类对象：{}\",aliossproperties); return new aliossutil(aliossproperties.getendpoint(), aliossproperties.getaccesskeyid(), aliossproperties.getaccesskeysecret(), aliossproperties.getbucketname()); } } 其中，aliossutil.java已在sky-common模块中定义 java package com.sky.utils; import com.aliyun.oss.clientexception; import com.aliyun.oss.oss; import com.aliyun.oss.ossclientbuilder; import com.aliyun.oss.ossexception; import lombok.allargsconstructor; import lombok.data; import lombok.extern.slf4j.slf4j; import java.io.bytearrayinputstream; @data @allargsconstructor @slf4j public class aliossutil { private string endpoint; private string accesskeyid; private string accesskeysecret; private string bucketname; / 文件上传 @param bytes @param objectname @return / public string upload(byte[] bytes, string objectname) { // 创建ossclient实例。 oss ossclient = new ossclientbuilder().build(endpoint, accesskeyid, accesskeysecret); try { // 创建putobject请求。 ossclient.putobject(bucketname, objectname, new bytearrayinputstream(bytes)); } catch (ossexception oe) { system.out.println(\"caught an ossexception, which means your request made it to oss, \" + \"but was rejected with an error response for some reason.\"); system.out.println(\"error message:\" + oe.geterrormessage()); system.out.println(\"error code:\" + oe.geterrorcode()); system.out.println(\"request id:\" + oe.getrequestid()); system.out.println(\"host id:\" + oe.gethostid()); } catch (clientexception ce) { system.out.println(\"caught an clientexception, which means the client encountered \" + \"a serious internal problem while trying to communicate with oss, \" + \"such as not being able to access the network.\"); system.out.println(\"error message:\" + ce.getmessage()); } finally { if (ossclient != null) { ossclient.shutdown(); } } //文件访问路径规则 https://bucketname.endpoint/objectname stringbuilder stringbuilder = new stringbuilder(\"https://\"); stringbuilder .append(bucketname) .append(\".\") .append(endpoint) .append(\"/\") .append(objectname); log.info(\"文件上传到:{}\", stringbuilder.tostring()); return stringbuilder.tostring(); } } 4). 定义文件上传接口 在sky-server模块中定义接口 java package com.sky.controller.admin; import com.sky.constant.messageconstant; import com.sky.result.result; import com.sky.utils.aliossutil; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.postmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import org.springframework.web.multipart.multipartfile; import java.io.ioexception; import java.util.uuid; / 通用接口 / @restcontroller @requestmapping(\"/admin/common\") @api(tags = \"通用接口\") @slf4j public class commoncontroller { @autowired private aliossutil aliossutil; / 文件上传 @param file @return / @postmapping(\"/upload\") @apioperation(\"文件上传\") public result upload(multipartfile file){ log.info(\"文件上传：{}\",file); try { //原始文件名 string originalfilename = file.getoriginalfilename(); //截取原始文件名的后缀 dfdfdf.png string extension = originalfilename.substring(originalfilename.lastindexof(\".\")); //构造新文件名称 string objectname = uuid.randomuuid().tostring() + extension; //文件的请求路径 string filepath = aliossutil.upload(file.getbytes(), objectname); return result.success(filepath); } catch (ioexception e) { log.error(\"文件上传失败：{}\", e); } return result.error(messageconstant.upload_failed); } } 2.2.2 新增菜品实现 1). 设计dto类 在sky-pojo模块中 java package com.sky.dto; import com.sky.entity.dishflavor; import lombok.data; import java.io.serializable; import java.math.bigdecimal; import java.util.arraylist; import java.util.list; @data public class dishdto implements serializable { private long id; //菜品名称 private string name; //菜品分类id private long categoryid; //菜品价格 private bigdecimal price; //图片 private string image; //描述信息 private string description; //0 停售 1 起售 private integer status; //口味 private list flavors = new arraylist< (); } 2). controller层 进入到sky-server模块 java package com.sky.controller.admin; import com.sky.dto.dishdto; import com.sky.dto.dishpagequerydto; import com.sky.entity.dish; import com.sky.result.pageresult; import com.sky.result.result; import com.sky.service.dishservice; import com.sky.vo.dishvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation. ; import java.util.list; import java.util.set; / 菜品管理 / @restcontroller @requestmapping(\"/admin/dish\") @api(tags = \"菜品相关接口\") @slf4j public class dishcontroller { @autowired private dishservice dishservice; / 新增菜品 @param dishdto @return / @postmapping @apioperation(\"新增菜品\") public result save(@requestbody dishdto dishdto) { log.info(\"新增菜品：{}\", dishdto); dishservice.savewithflavor(dishdto);//后绪步骤开发 return result.success(); } } 3). service层接口 java package com.sky.service; import com.sky.dto.dishdto; import com.sky.entity.dish; public interface dishservice { / 新增菜品和对应的口味 @param dishdto / public void savewithflavor(dishdto dishdto); } 4). service层实现类 java package com.sky.service.impl; @service @slf4j public class dishserviceimpl implements dishservice { @autowired private dishmapper dishmapper; @autowired private dishflavormapper dishflavormapper; / 新增菜品和对应的口味 @param dishdto / @transactional public void savewithflavor(dishdto dishdto) { dish dish = new dish(); beanutils.copyproperties(dishdto, dish); //向菜品表插入1条数据 dishmapper.insert(dish);//后绪步骤实现 //获取insert语句生成的主键值 long dishid = dish.getid(); list flavors = dishdto.getflavors(); if (flavors != null && flavors.size() 0) { flavors.foreach(dishflavor - { dishflavor.setdishid(dishid); }); //向口味表插入n条数据 dishflavormapper.insertbatch(flavors);//后绪步骤实现 } } } 5). mapper层 dishmapper.java中添加 java / 插入菜品数据 @param dish / @autofill(value = operationtype.insert) void insert(dish dish); 在/resources/mapper中创建dishmapper.xml xml insert into dish (name, category_id, price, image, description, create_time, update_time, create_user,update_user, status) values ( {name}, {categoryid}, {price}, {image}, {description}, {createtime}, {updatetime}, {createuser}, {updateuser}, {status}) dishflavormapper.java java package com.sky.mapper; import com.sky.entity.dishflavor; import java.util.list; @mapper public interface dishflavormapper { / 批量插入口味数据 @param flavors / void insertbatch(list flavors); } 在/resources/mapper中创建dishflavormapper.xml xml insert into dish_flavor (dish_id, name, value) values ( {df.dishid}, {df.name}, {df.value}) 2.3 功能测试 进入到菜品管理--- 新建菜品 由于没有实现菜品查询功能，所以保存后，暂且在表中查看添加的数据。 dish表： dish_flavor表： 测试成功。 2.4代码提交 后续步骤和上述功能代码提交一致，不再赘述。 3. 菜品分页查询 3.1 需求分析和设计 3.1.1 产品原型 系统中的菜品数据很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。 菜品分页原型： 在菜品列表展示时，除了菜品的基本信息(名称、售价、售卖状态、最后操作时间)外，还有两个字段略微特殊，第一个是图片字段 ，我们从数据库查询出来的仅仅是图片的名字，图片要想在表格中回显展示出来，就需要下载这个图片。第二个是菜品分类，这里展示的是分类名称，而不是分类id，此时我们就需要根据菜品的分类id，去分类表中查询分类信息，然后在页面展示。 业务规则： - 根据页码展示菜品信息 - 每页展示10条数据 - 分页查询时可以根据需要输入菜品名称、菜品分类、菜品状态进行查询 3.1.2 接口设计 根据上述原型图，设计出相应的接口。 3.2 代码开发 3.2.1 设计dto类 根据菜品分页查询接口定义设计对应的dto： 在sky-pojo模块中，已定义 java package com.sky.dto; import lombok.data; import java.io.serializable; @data public class dishpagequerydto implements serializable { private int page; private int pagesize; private string name; private integer categoryid; //分类id private integer status; //状态 0表示禁用 1表示启用 } 3.2.2 设计vo类 根据菜品分页查询接口定义设计对应的vo： 在sky-pojo模块中，已定义 java package com.sky.vo; import com.sky.entity.dishflavor; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; import java.math.bigdecimal; import java.time.localdatetime; import java.util.arraylist; import java.util.list; @data @builder @noargsconstructor @allargsconstructor public class dishvo implements serializable { private long id; //菜品名称 private string name; //菜品分类id private long categoryid; //菜品价格 private bigdecimal price; //图片 private string image; //描述信息 private string description; //0 停售 1 起售 private integer status; //更新时间 private localdatetime updatetime; //分类名称 private string categoryname; //菜品关联的口味 private list flavors = new arraylist< (); } 3.2.3 controller层 根据接口定义创建dishcontroller的page分页查询方法： java / 菜品分页查询 @param dishpagequerydto @return / @getmapping(\"/page\") @apioperation(\"菜品分页查询\") public result page(dishpagequerydto dishpagequerydto) { log.info(\"菜品分页查询:{}\", dishpagequerydto); pageresult pageresult = dishservice.pagequery(dishpagequerydto);//后绪步骤定义 return result.success(pageresult); } 3.2.4 service层接口 在 dishservice 中扩展分页查询方法： java / 菜品分页查询 @param dishpagequerydto @return / pageresult pagequery(dishpagequerydto dishpagequerydto); 3.2.5 service层实现类 在 dishserviceimpl 中实现分页查询方法： java / 菜品分页查询 @param dishpagequerydto @return / public pageresult pagequery(dishpagequerydto dishpagequerydto) { pagehelper.startpage(dishpagequerydto.getpage(), dishpagequerydto.getpagesize()); page page = dishmapper.pagequery(dishpagequerydto);//后绪步骤实现 return new pageresult(page.gettotal(), page.getresult()); } 3.2.6 mapper层 在 dishmapper 接口中声明 pagequery 方法： java / 菜品分页查询 @param dishpagequerydto @return / page pagequery(dishpagequerydto dishpagequerydto); 在 dishmapper.xml 中编写sql： xml select d. , c.name as categoryname from dish d left outer join category c on d.category_id = c.id and d.name like concat('%', {name},'%') and d.category_id = {categoryid} and d.status = {status} order by d.create_time desc 3.3 功能测试 3.3.1 接口文档测试 启动服务： 访问http://localhost:8080/doc.html，进入菜品分页查询接口 注意： 使用admin用户登录重新获取token，防止token失效。 点击发送： 3.3.2 前后端联调测试 启动nginx,访问 http://localhost 点击菜品管理 数据成功查出。 4. 删除菜品 4.1 需求分析和设计 4.1.1 产品原型 在菜品列表页面，每个菜品后面对应的操作分别为 修改 、 删除 、 停售 ，可通过删除功能完成对菜品及相关的数据进行删除。 删除菜品原型： 业务规则： - 可以一次删除一个菜品，也可以批量删除菜品 - 起售中的菜品不能删除 - 被套餐关联的菜品不能删除 - 删除菜品后，关联的口味数据也需要删除掉 4.1.2 接口设计 根据上述原型图，设计出相应的接口。 注意： 删除一个菜品和批量删除菜品共用一个接口，故ids可包含多个菜品id,之间用逗号分隔。 4.1.3 表设计 在进行删除菜品操作时，会涉及到以下三张表。 注意事项： - 在dish表中删除菜品基本数据时，同时，也要把关联在dish_flavor表中的数据一块删除。 - setmeal_dish表为菜品和套餐关联的中间表。 - 若删除的菜品数据关联着某个套餐，此时，删除失败。 - 若要删除套餐关联的菜品数据，先解除两者关联，再对菜品进行删除。 4.2 代码开发 4.1.2 controller层 根据删除菜品的接口定义在dishcontroller中创建方法： java / 菜品批量删除 @param ids @return / @deletemapping @apioperation(\"菜品批量删除\") public result delete(@requestparam list ids) { log.info(\"菜品批量删除：{}\", ids); dishservice.deletebatch(ids);//后绪步骤实现 return result.success(); } 4.2.2 service层接口 在dishservice接口中声明deletebatch方法： java / 菜品批量删除 @param ids / void deletebatch(list ids); 4.2.3 service层实现类 在dishserviceimpl中实现deletebatch方法： java @autowired private setmealdishmapper setmealdishmapper; / 菜品批量删除 @param ids / @transactional//事务 public void deletebatch(list ids) { //判断当前菜品是否能够删除---是否存在起售中的菜品？？ for (long id : ids) { dish dish = dishmapper.getbyid(id);//后绪步骤实现 if (dish.getstatus() == statusconstant.enable) { //当前菜品处于起售中，不能删除 throw new deletionnotallowedexception(messageconstant.dish_on_sale); } } //判断当前菜品是否能够删除---是否被套餐关联了？？ list setmealids = setmealdishmapper.getsetmealidsbydishids(ids); if (setmealids != null && setmealids.size() 0) { //当前菜品被套餐关联了，不能删除 throw new deletionnotallowedexception(messageconstant.dish_be_related_by_setmeal); } //删除菜品表中的菜品数据 for (long id : ids) { dishmapper.deletebyid(id);//后绪步骤实现 //删除菜品关联的口味数据 dishflavormapper.deletebydishid(id);//后绪步骤实现 } } 4.2.4 mapper层 在dishmapper中声明getbyid方法，并配置sql： java / 根据主键查询菜品 @param id @return / @select(\"select from dish where id = {id}\") dish getbyid(long id); 创建setmealdishmapper，声明getsetmealidsbydishids方法，并在xml文件中编写sql： java package com.sky.mapper; import com.sky.entity.setmealdish; import org.apache.ibatis.annotations.delete; import org.apache.ibatis.annotations.mapper; import java.util.list; @mapper public interface setmealdishmapper { / 根据菜品id查询对应的套餐id @param dishids @return / //select setmeal_id from setmeal_dish where dish_id in (1,2,3,4) list getsetmealidsbydishids(list dishids); } setmealdishmapper.xml xml select setmeal_id from setmeal_dish where dish_id in {dishid} 在dishmapper.java中声明deletebyid方法并配置sql： java / 根据主键删除菜品数据 @param id / @delete(\"delete from dish where id = {id}\") void deletebyid(long id); 在dishflavormapper中声明deletebydishid方法并配置sql： java / 根据菜品id删除对应的口味数据 @param dishid / @delete(\"delete from dish_flavor where dish_id = {dishid}\") void deletebydishid(long dishid); 4.3 功能测试 既可以通过swagger接口文档进行测试，也可以通过前后端联调测试，接下来，我们直接使用 前后端联调测试 。 进入到菜品列表查询页面 对测试菜品进行删除操作 同时，进到dish表和dish_flavor两个表查看 测试菜品 的相关数据都已被成功删除。 再次，删除状态为启售的菜品 点击批量删除 删除失败，因为起售中的菜品不能删除。 4.4 代码提交 后续步骤和上述功能代码提交一致，不再赘述。 5. 修改菜品 5.1 需求分析和设计 5.1.1 产品原型 在菜品管理列表页面点击修改按钮，跳转到修改菜品页面，在修改页面回显菜品相关信息并进行修改，最后点击保存按钮完成修改操作。 修改菜品原型： 5.1.2 接口设计 通过对上述原型图进行分析，该页面共涉及4个接口。 接口： - 根据id查询菜品 - 根据类型查询分类(已实现) - 文件上传(已实现) - 修改菜品 我们只需要实现 根据id查询菜品 和 修改菜品 两个接口，接下来，我们来重点分析这两个接口。 1). 根据id查询菜品 2). 修改菜品 注:因为是修改功能，请求方式可设置为put。 5.2 代码开发 5.2.1 根据id查询菜品实现 1). controller层 根据id查询菜品的接口定义在dishcontroller中创建方法： java / 根据id查询菜品 @param id @return / @getmapping(\"/{id}\") @apioperation(\"根据id查询菜品\") public result getbyid(@pathvariable long id) { log.info(\"根据id查询菜品：{}\", id); dishvo dishvo = dishservice.getbyidwithflavor(id);//后绪步骤实现 return result.success(dishvo); } 2). service层接口 在dishservice接口中声明getbyidwithflavor方法： java / 根据id查询菜品和对应的口味数据 @param id @return / dishvo getbyidwithflavor(long id); 3). service层实现类 在dishserviceimpl中实现getbyidwithflavor方法： java / 根据id查询菜品和对应的口味数据 @param id @return / public dishvo getbyidwithflavor(long id) { //根据id查询菜品数据 dish dish = dishmapper.getbyid(id); //根据菜品id查询口味数据 list dishflavors = dishflavormapper.getbydishid(id);//后绪步骤实现 //将查询到的数据封装到vo dishvo dishvo = new dishvo(); beanutils.copyproperties(dish, dishvo); dishvo.setflavors(dishflavors); return dishvo; } 4). mapper层 在dishflavormapper中声明getbydishid方法，并配置sql： java / 根据菜品id查询对应的口味数据 @param dishid @return / @select(\"select from dish_flavor where dish_id = {dishid}\") list getbydishid(long dishid); 5.2.1 修改菜品实现 1). controller层 根据修改菜品的接口定义在dishcontroller中创建方法： java / 修改菜品 @param dishdto @return / @putmapping @apioperation(\"修改菜品\") public result update(@requestbody dishdto dishdto) { log.info(\"修改菜品：{}\", dishdto); dishservice.updatewithflavor(dishdto); return result.success(); } 2). service层接口 在dishservice接口中声明updatewithflavor方法： java / 根据id修改菜品基本信息和对应的口味信息 @param dishdto / void updatewithflavor(dishdto dishdto); 3). service层实现类 在dishserviceimpl中实现updatewithflavor方法： java / 根据id修改菜品基本信息和对应的口味信息 @param dishdto / public void updatewithflavor(dishdto dishdto) { dish dish = new dish(); beanutils.copyproperties(dishdto, dish); //修改菜品表基本信息 dishmapper.update(dish); //删除原有的口味数据 dishflavormapper.deletebydishid(dishdto.getid()); //重新插入口味数据 list flavors = dishdto.getflavors(); if (flavors != null && flavors.size() 0) { flavors.foreach(dishflavor - { dishflavor.setdishid(dishdto.getid()); }); //向口味表插入n条数据 dishflavormapper.insertbatch(flavors); } } 4). mapper层 在dishmapper中，声明update方法： java / 根据id动态修改菜品数据 @param dish / @autofill(value = operationtype.update) void update(dish dish); 并在dishmapper.xml文件中编写sql: xml update dish name = {name}, category_id = {categoryid}, price = {price}, image = {image}, description = {description}, status = {status}, update_time = {updatetime}, update_user = {updateuser}, where id = {id} 5.3 功能测试 本次测试直接通过 前后端联调测试 ，可使用debug方式启动项目，观察运行中步骤。 进入菜品列表查询页面，对第一个菜品的价格进行修改 点击修改，回显成功 菜品价格修改后，点击保存 修改成功 5.4 代码提交 后续步骤和上述功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-2b9ad61124d4",
    "version": "8a57847bdd42",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day05/苍穹外卖-day05.md",
    "title": "苍穹外卖-day05",
    "description": "- Redis入门 - Redis数据类型 - Redis常用命令 - 在Java中操作Redis - 店铺营业状态设置",
    "subject": "projects",
    "kind": "项目原文",
    "order": 15,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 31,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - Redis入门 - Redis数据类型 - Redis常用命令 - 在Java中操作Redis - 店铺营业状态设置    功能实现： 营业状态设置  效果图：    选择 营业中 ，客户可在小程序端下单：    选择 打烊中 ，客户无法在小程序端下单：       "
      },
      {
        "title": "1. Redis入门",
        "anchor": "1-redis入门",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 Redis简介",
        "anchor": "11-redis简介",
        "level": 3,
        "text": "  Redis是一个基于 内存 的key-value结构数据库。Redis 是互联网技术领域使用最为广泛的 存储中间件 。  官网： https://redis.io 中文网： https://www.redis.net.cn/  key-value结构存储：  image-20221130173459174  主要特点：  - 基于内存存储，读写性能高 - 适合存储热点数据（热点商品、资讯、新闻） - 企业应用广泛  Redis是用C语言开发的一个开源的高性能键值对(key-value)数据库，官方提供的数据是可以达到100000+的QPS（每秒内查询次数）。它存储的value类型比较丰富，也被称为结构化的NoSql数据库。  NoSql（Not Only SQL），不仅仅是SQL，泛指 非关系型数据库 。NoSql数据库并不是要取代关系型数据库，而是关系型数据库的补充。  关系型数据库(RDBMS)：  - Mysql - Oracle - DB2 - SQLServer  非关系型数据库(NoSql)：  - Redis - Mongo db - MemCached   "
      },
      {
        "title": "1.2 Redis下载与安装",
        "anchor": "12-redis下载与安装",
        "level": 3,
        "text": "  1.2.1 Redis下载  Redis安装包分为windows版和Linux版：  - Windows版下载地址：https://github.com/microsoftarchive/redis/releases - Linux版下载地址： https://download.redis.io/releases/  资料中已提供好的安装包：  image-20210927092053283    1.2.2 Redis安装  1）在Windows中安装Redis(项目中使用)  Redis的Windows版属于绿色软件，直接解压即可使用，解压后目录结构如下：      2）在Linux中安装Redis(简单了解)  在Linux系统安装Redis步骤：  1. 将Redis安装包上传到Linux 2. 解压安装包，命令：tar -zxvf redis-4.0.0.tar.gz -C /usr/local 3. 安装Redis的依赖环境gcc，命令：yum install gcc-c++ 4. 进入/usr/local/redis-4.0.0，进行编译，命令：make 5. 进入redis的src目录进行安装，命令：make install  安装后重点文件说明：  - /usr/local/redis-4.0.0/src/redis-server：Redis服务启动脚本 - /usr/local/redis-4.0.0/src/redis-cli：Redis客户端脚本 - /usr/local/redis-4.0.0/redis.conf：Redis配置文件   "
      },
      {
        "title": "1.3 Redis服务启动与停止",
        "anchor": "13-redis服务启动与停止",
        "level": 3,
        "text": "  以window版Redis进行演示：  1.3.1 服务启动命令  redis-server.exe redis.windows.conf    Redis服务默认端口号为 6379 ，通过快捷键 Ctrl + C 即可停止Redis服务  当Redis服务启动成功后，可通过客户端进行连接。    1.3.2 客户端连接命令  redis-cli.exe    通过redis-cli.exe命令默认连接的是本地的redis服务，并且使用默认6379端口。也可以通过指定如下参数连接：  - -h ip地址 - -p 端口号 - -a 密码（如果需要）    1.3.3 修改Redis配置文件  设置Redis服务密码，修改redis.windows.conf   requirepass 123456   注意：  - 修改密码后需要重启Redis服务才能生效 - Redis配置文件中 表示注释  重启Redis后，再次连接Redis时，需加上密码，否则连接失败。   redis-cli.exe -h localhost -p 6379 -a 123456     此时，-h 和 -p 参数可省略不写。    1.3.4 Redis客户端图形工具  默认提供的客户端连接工具界面不太友好，同时操作也较为麻烦，接下来，引入一个Redis客户端图形工具。  在当天资料中已提供安装包，直接安装即可。    安装完毕后，直接双击启动  新建连接    连接成功       "
      },
      {
        "title": "2. Redis数据类型",
        "anchor": "2-redis数据类型",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 五种常用数据类型介绍",
        "anchor": "21-五种常用数据类型介绍",
        "level": 3,
        "text": "  Redis存储的是key-value结构的数据，其中key是字符串类型，value有5种常用的数据类型：  - 字符串 string - 哈希 hash - 列表 list - 集合 set - 有序集合 sorted set / zset   "
      },
      {
        "title": "2.2 各种数据类型特点",
        "anchor": "22-各种数据类型特点",
        "level": 3,
        "text": "    解释说明：  - 字符串(string)：普通字符串，Redis中最简单的数据类型 - 哈希(hash)：也叫散列，类似于Java中的HashMap结构 - 列表(list)：按照插入顺序排序，可以有重复元素，类似于Java中的LinkedList - 集合(set)：无序集合，没有重复元素，类似于Java中的HashSet - 有序集合(sorted set/zset)：集合中每个元素关联一个分数(score)，根据分数升序排序，没有重复元素   "
      },
      {
        "title": "3. Redis常用命令",
        "anchor": "3-redis常用命令",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 字符串操作命令",
        "anchor": "31-字符串操作命令",
        "level": 3,
        "text": "  Redis 中字符串类型常用命令：  - SET key value 设置指定key的值 - GET key 获取指定key的值 - SETEX key seconds value 设置指定key的值，并将 key 的过期时间设为 seconds 秒 - SETNX key value 只有在 key 不存在时设置 key 的值  更多命令可以参考Redis中文网：https://www.redis.net.cn   "
      },
      {
        "title": "3.2 哈希操作命令",
        "anchor": "32-哈希操作命令",
        "level": 3,
        "text": "  Redis hash 是一个string类型的 field 和 value 的映射表，hash特别适合用于存储对象，常用命令：  - HSET key field value 将哈希表 key 中的字段 field 的值设为 value - HGET key field 获取存储在哈希表中指定字段的值 - HDEL key field 删除存储在哈希表中的指定字段 - HKEYS key 获取哈希表中所有字段 - HVALS key 获取哈希表中所有值     "
      },
      {
        "title": "3.3 列表操作命令",
        "anchor": "33-列表操作命令",
        "level": 3,
        "text": "  Redis 列表是简单的字符串列表，按照插入顺序排序，常用命令：  - LPUSH key value1 [value2] 将一个或多个值插入到列表头部 - LRANGE key start stop 获取列表指定范围内的元素 - RPOP key 移除并获取列表最后一个元素 - LLEN key 获取列表长度 - BRPOP key1 [key2 ] timeout 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超 时或发现可弹出元素为止     "
      },
      {
        "title": "3.4 集合操作命令",
        "anchor": "34-集合操作命令",
        "level": 3,
        "text": "  Redis set 是string类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据，常用命令：  - SADD key member1 [member2] 向集合添加一个或多个成员 - SMEMBERS key 返回集合中的所有成员 - SCARD key 获取集合的成员数 - SINTER key1 [key2] 返回给定所有集合的交集 - SUNION key1 [key2] 返回所有给定集合的并集 - SREM key member1 [member2] 移除集合中一个或多个成员     "
      },
      {
        "title": "3.5 有序集合操作命令",
        "anchor": "35-有序集合操作命令",
        "level": 3,
        "text": "  Redis有序集合是string类型元素的集合，且不允许有重复成员。每个元素都会关联一个double类型的分数。常用命令：  常用命令：  - ZADD key score1 member1 [score2 member2] 向有序集合添加一个或多个成员 - ZRANGE key start stop [WITHSCORES] 通过索引区间返回有序集合中指定区间内的成员 - ZINCRBY key increment member 有序集合中对指定成员的分数加上增量 increment - ZREM key member [member ...] 移除有序集合中的一个或多个成员     "
      },
      {
        "title": "3.6 通用命令",
        "anchor": "36-通用命令",
        "level": 3,
        "text": "  Redis的通用命令是不分数据类型的，都可以使用的命令：  - KEYS pattern 查找所有符合给定模式( pattern)的 key - EXISTS key 检查给定 key 是否存在 - TYPE key 返回 key 所储存的值的类型 - DEL key 该命令用于在 key 存在是删除 key   "
      },
      {
        "title": "4.在Java中操作Redis",
        "anchor": "4在java中操作redis",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 Redis的Java客户端",
        "anchor": "41-redis的java客户端",
        "level": 3,
        "text": "  前面我们讲解了Redis的常用命令，这些命令是我们操作Redis的基础，那么我们在java程序中应该如何操作Redis呢？这就需要使用Redis的Java客户端，就如同我们使用JDBC操作MySQL数据库一样。  Redis 的 Java 客户端很多，常用的几种：  - Jedis - Lettuce - Spring Data Redis  Spring 对 Redis 客户端进行了整合，提供了 Spring Data Redis，在Spring Boot项目中还提供了对应的Starter，即 spring-boot-starter-data-redis。  我们重点学习 Spring Data Redis 。   "
      },
      {
        "title": "4.2 Spring Data Redis使用方式",
        "anchor": "42-spring-data-redis使用方式",
        "level": 3,
        "text": "  4.2.1 介绍  Spring Data Redis 是 Spring 的一部分，提供了在 Spring 应用中通过简单的配置就可以访问 Redis 服务，对 Redis 底层开发包进行了高度封装。在 Spring 项目中，可以使用Spring Data Redis来简化 Redis 操作。  网址：https://spring.io/projects/spring-data-redis    Spring Boot提供了对应的Starter，maven坐标：  xml  org.springframework.boot spring-boot-starter-data-redis    Spring Data Redis中提供了一个高度封装的类： RedisTemplate ，对相关api进行了归类封装,将同一类型操作封装为operation接口，具体分类如下：  - ValueOperations：string数据操作 - SetOperations：set类型数据操作 - ZSetOperations：zset类型数据操作 - HashOperations：hash类型的数据操作 - ListOperations：list类型的数据操作    4.2.2 环境搭建  进入到sky-server模块  1). 导入Spring Data Redis的maven坐标(已完成)  xml  org.springframework.boot spring-boot-starter-data-redis      2). 配置Redis数据源  在application-dev.yml中添加  yaml sky: redis: host: localhost port: 6379 password: 123456 database: 10   解释说明：  database:指定使用Redis的哪个数据库，Redis服务启动后默认有16个数据库，编号分别是从0到15。  可以通过修改Redis配置文件来指定数据库的数量。  在application.yml中添加读取application-dev.yml中的相关Redis配置  yaml spring: profiles: active: dev redis: host: ${sky.redis.host} port: ${sky.redis.port} password: ${sky.redis.password} database: ${sky.redis.database}     3). 编写配置类，创建RedisTemplate对象  java package com.sky.config;  import lombok.extern.slf4j.Slf4j; import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.data.redis.connection.RedisConnectionFactory; import org.springframework.data.redis.core.RedisTemplate; import org.springframework.data.redis.serializer.StringRedisSerializer;  @Configuration @Slf4j public class RedisConfiguration {  @Bean public RedisTemplate redisTemplate(RedisConnectionFactory redisConnectionFactory){ log.info(\"开始创建redis模板对象...\"); RedisTemplate redisTemplate = new RedisTemplate(); //设置redis的连接工厂对象 redisTemplate.setConnectionFactory(redisConnectionFactory); //设置redis key的序列化器 redisTemplate.setKeySerializer(new StringRedisSerializer()); return redisTemplate; } }   解释说明：  当前配置类不是必须的，因为 Spring Boot 框架会自动装配 RedisTemplate 对象，但是默认的key序列化器为  JdkSerializationRedisSerializer，导致我们存到Redis中后的数据和原始数据有差别，故设置为  StringRedisSerializer序列化器。    4). 通过RedisTemplate对象操作Redis  在test下新建测试类  java package com.sky.test;  import org.junit.jupiter.api.Test; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.boot.test.context.SpringBootTest; import org.springframework.data.redis.core. ;  @SpringBootTest public class SpringDataRedisTest { @Autowired private RedisTemplate redisTemplate;  @Test public void testRedisTemplate(){ System.out.println(redisTemplate); //string数据操作 ValueOperations valueOperations = redisTemplate.opsForValue(); //hash类型的数据操作 HashOperations hashOperations = redisTemplate.opsForHash(); //list类型的数据操作 ListOperations listOperations = redisTemplate.opsForList(); //set类型数据操作 SetOperations setOperations = redisTemplate.opsForSet(); //zset类型数据操作 ZSetOperations zSetOperations = redisTemplate.opsForZSet(); } }   测试：    说明RedisTemplate对象注入成功，并且通过该RedisTemplate对象获取操作5种数据类型相关对象。  上述环境搭建完毕后，接下来，我们就来具体对常见5种数据类型进行操作。    4.2.3 操作常见类型数据  1). 操作字符串类型数据  java / 操作字符串类型的数据 / @Test public void testString(){ // set get setex setnx redisTemplate.opsForValue().set(\"name\",\"小明\"); String city = (String) redisTemplate.opsForValue().get(\"name\"); System.out.println(city); redisTemplate.opsForValue().set(\"code\",\"1234\",3, TimeUnit.MINUTES); redisTemplate.opsForValue().setIfAbsent(\"lock\",\"1\"); redisTemplate.opsForValue().setIfAbsent(\"lock\",\"2\"); }     2). 操作哈希类型数据  java / 操作哈希类型的数据 / @Test public void testHash(){ //hset hget hdel hkeys hvals HashOperations hashOperations = redisTemplate.opsForHash();  hashOperations.put(\"100\",\"name\",\"tom\"); hashOperations.put(\"100\",\"age\",\"20\");  String name = (String) hashOperations.get(\"100\", \"name\"); System.out.println(name);  Set keys = hashOperations.keys(\"100\"); System.out.println(keys);  List values = hashOperations.values(\"100\"); System.out.println(values);  hashOperations.delete(\"100\",\"age\"); }     3). 操作列表类型数据  java / 操作列表类型的数据 / @Test public void testList(){ //lpush lrange rpop llen ListOperations listOperations = redisTemplate.opsForList();  listOperations.leftPushAll(\"mylist\",\"a\",\"b\",\"c\"); listOperations.leftPush(\"mylist\",\"d\");  List mylist = listOperations.range(\"mylist\", 0, -1); System.out.println(mylist);  listOperations.rightPop(\"mylist\");  Long size = listOperations.size(\"mylist\"); System.out.println(size); }     4). 操作集合类型数据  java / 操作集合类型的数据 / @Test public void testSet(){ //sadd smembers scard sinter sunion srem SetOperations setOperations = redisTemplate.opsForSet();  setOperations.add(\"set1\",\"a\",\"b\",\"c\",\"d\"); setOperations.add(\"set2\",\"a\",\"b\",\"x\",\"y\");  Set members = setOperations.members(\"set1\"); System.out.println(members);  Long size = setOperations.size(\"set1\"); System.out.println(size);  Set intersect = setOperations.intersect(\"set1\", \"set2\"); System.out.println(intersect);  Set union = setOperations.union(\"set1\", \"set2\"); System.out.println(union);  setOperations.remove(\"set1\",\"a\",\"b\"); }     5). 操作有序集合类型数据  java / 操作有序集合类型的数据 / @Test public void testZset(){ //zadd zrange zincrby zrem ZSetOperations zSetOperations = redisTemplate.opsForZSet();  zSetOperations.add(\"zset1\",\"a\",10); zSetOperations.add(\"zset1\",\"b\",12); zSetOperations.add(\"zset1\",\"c\",9);  Set zset1 = zSetOperations.range(\"zset1\", 0, -1); System.out.println(zset1);  zSetOperations.incrementScore(\"zset1\",\"c\",10);  zSetOperations.remove(\"zset1\",\"a\",\"b\"); }     6). 通用命令操作  java / 通用命令操作 / @Test public void testCommon(){ //keys exists type del Set keys = redisTemplate.keys(\" \"); System.out.println(keys);  Boolean name = redisTemplate.hasKey(\"name\"); Boolean set1 = redisTemplate.hasKey(\"set1\");  for (Object key : keys) { DataType type = redisTemplate.type(key); System.out.println(type.name()); }  redisTemplate.delete(\"mylist\"); }    "
      },
      {
        "title": "5. 店铺营业状态设置",
        "anchor": "5-店铺营业状态设置",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析和设计",
        "anchor": "51-需求分析和设计",
        "level": 3,
        "text": "  5.1.1 产品原型  进到苍穹外卖后台，显示餐厅的营业状态，营业状态分为 营业中 和 打烊中 ，若当前餐厅处于营业状态，自动接收任何订单，客户可在小程序进行下单操作；若当前餐厅处于打烊状态，不接受任何订单，客户便无法在小程序进行下单操作。    点击 营业状态 按钮时，弹出更改营业状态    选择营业，设置餐厅为 营业中 状态  选择打烊，设置餐厅为 打烊中 状态  状态说明：      5.1.2 接口设计  根据上述原型图设计接口，共包含3个接口。  接口设计：  - 设置营业状态 - 管理端查询营业状态 - 用户端查询营业状态  注： 从技术层面分析，其实管理端和用户端查询营业状态时，可通过一个接口去实现即可。因为营业状态是一致的。但是，本项目约定：  - 管理端 发出的请求，统一使用/admin作为前缀。 - 用户端 发出的请求，统一使用/user作为前缀。  因为访问路径不一致，故分为两个接口实现。  1). 设置营业状态      2). 管理端营业状态      3). 用户端营业状态      5.1.3 营业状态存储方式  虽然，可以通过一张表来存储营业状态数据，但整个表中只有一个字段，所以意义不大。  营业状态数据存储方式：基于Redis的字符串来进行存储    约定： 1表示营业 0表示打烊   "
      },
      {
        "title": "5.2 代码开发",
        "anchor": "52-代码开发",
        "level": 3,
        "text": "  5.2.1 设置营业状态  在sky-server模块中，创建ShopController.java  根据接口定义创建ShopController的setStatus设置营业状态方法：  java package com.sky.controller.admin;  import com.sky.result.Result; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.data.redis.core.RedisTemplate; import org.springframework.web.bind.annotation.PathVariable; import org.springframework.web.bind.annotation.PutMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;  @RestController(\"adminShopController\") @RequestMapping(\"/admin/shop\") @Api(tags = \"店铺相关接口\") @Slf4j public class ShopController {  public static final String KEY = \"SHOP_STATUS\";  @Autowired private RedisTemplate redisTemplate;  / 设置店铺的营业状态 @param status @return / @PutMapping(\"/{status}\") @ApiOperation(\"设置店铺的营业状态\") public Result setStatus(@PathVariable Integer status){ log.info(\"设置店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); redisTemplate.opsForValue().set(KEY,status); return Result.success(); } }     5.2.2 管理端查询营业状态  根据接口定义创建ShopController的getStatus查询营业状态方法：  java / 获取店铺的营业状态 @return / @GetMapping(\"/status\") @ApiOperation(\"获取店铺的营业状态\") public Result getStatus(){ Integer status = (Integer) redisTemplate.opsForValue().get(KEY); log.info(\"获取到店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); return Result.success(status); }     5.2.3 用户端查询营业状态  创建com.sky.controller.user包，在该包下创建ShopController.java  根据接口定义创建ShopController的getStatus查询营业状态方法：  java package com.sky.controller.user;  import com.sky.result.Result; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.data.redis.core.RedisTemplate; import org.springframework.web.bind.annotation. ;  @RestController(\"userShopController\") @RequestMapping(\"/user/shop\") @Api(tags = \"店铺相关接口\") @Slf4j public class ShopController {  public static final String KEY = \"SHOP_STATUS\";  @Autowired private RedisTemplate redisTemplate;  / 获取店铺的营业状态 @return / @GetMapping(\"/status\") @ApiOperation(\"获取店铺的营业状态\") public Result getStatus(){ Integer status = (Integer) redisTemplate.opsForValue().get(KEY); log.info(\"获取到店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); return Result.success(status); } }    "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  5.3.1 接口文档测试  启动服务： 访问http://localhost:8080/doc.html，打开店铺相关接口  注意： 使用admin用户登录重新获取token，防止token失效。  设置营业状态：    点击发送    查看Idea控制台日志    查看Redis中数据      管理端查询营业状态：      用户端查询营业状态：      5.3.2 接口分组展示  在上述接口文档测试中，管理端和用户端的接口放在一起，不方便区分。    接下来，我们要实现管理端和用户端接口进行区分。  在WebMvcConfiguration.java中，分别扫描\"com.sky.controller.admin\"和\"com.sky.controller.user\"这两个包。  java @Bean public Docket docket1(){ log.info(\"准备生成接口文档...\"); ApiInfo apiInfo = new ApiInfoBuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build();  Docket docket = new Docket(DocumentationType.SWAGGER_2) .groupName(\"管理端接口\") .apiInfo(apiInfo) .select() //指定生成接口需要扫描的包 .apis(RequestHandlerSelectors.basePackage(\"com.sky.controller.admin\")) .paths(PathSelectors.any()) .build();  return docket; }  @Bean public Docket docket2(){ log.info(\"准备生成接口文档...\"); ApiInfo apiInfo = new ApiInfoBuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build();  Docket docket = new Docket(DocumentationType.SWAGGER_2) .groupName(\"用户端接口\") .apiInfo(apiInfo) .select() //指定生成接口需要扫描的包 .apis(RequestHandlerSelectors.basePackage(\"com.sky.controller.user\")) .paths(PathSelectors.any()) .build();  return docket; }   重启服务器，再次访问接口文档，可进行选择 用户端接口 或者 管理端接口      5.3.3 前后端联调测试  启动nginx,访问 http://localhost  进入后台，状态为 营业中    点击 营业状态设置 ，修改状态为 打烊中    再次查看状态，状态已为 打烊中     "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "  点击提交：    提交过程中 ，出现提示：    继续push:    推送成功：   "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day05 课程内容 - redis入门 - redis数据类型 - redis常用命令 - 在java中操作redis - 店铺营业状态设置 功能实现： 营业状态设置 效果图： 选择 营业中 ，客户可在小程序端下单： 选择 打烊中 ，客户无法在小程序端下单： 1. redis入门 1.1 redis简介 redis是一个基于 内存 的key-value结构数据库。redis 是互联网技术领域使用最为广泛的 存储中间件 。 官网： https://redis.io 中文网： https://www.redis.net.cn/ key-value结构存储： image-20221130173459174 主要特点： - 基于内存存储，读写性能高 - 适合存储热点数据（热点商品、资讯、新闻） - 企业应用广泛 redis是用c语言开发的一个开源的高性能键值对(key-value)数据库，官方提供的数据是可以达到100000+的qps（每秒内查询次数）。它存储的value类型比较丰富，也被称为结构化的nosql数据库。 nosql（not only sql），不仅仅是sql，泛指 非关系型数据库 。nosql数据库并不是要取代关系型数据库，而是关系型数据库的补充。 关系型数据库(rdbms)： - mysql - oracle - db2 - sqlserver 非关系型数据库(nosql)： - redis - mongo db - memcached 1.2 redis下载与安装 1.2.1 redis下载 redis安装包分为windows版和linux版： - windows版下载地址：https://github.com/microsoftarchive/redis/releases - linux版下载地址： https://download.redis.io/releases/ 资料中已提供好的安装包： image-20210927092053283 1.2.2 redis安装 1）在windows中安装redis(项目中使用) redis的windows版属于绿色软件，直接解压即可使用，解压后目录结构如下： 2）在linux中安装redis(简单了解) 在linux系统安装redis步骤： 1. 将redis安装包上传到linux 2. 解压安装包，命令：tar -zxvf redis-4.0.0.tar.gz -c /usr/local 3. 安装redis的依赖环境gcc，命令：yum install gcc-c++ 4. 进入/usr/local/redis-4.0.0，进行编译，命令：make 5. 进入redis的src目录进行安装，命令：make install 安装后重点文件说明： - /usr/local/redis-4.0.0/src/redis-server：redis服务启动脚本 - /usr/local/redis-4.0.0/src/redis-cli：redis客户端脚本 - /usr/local/redis-4.0.0/redis.conf：redis配置文件 1.3 redis服务启动与停止 以window版redis进行演示： 1.3.1 服务启动命令 redis-server.exe redis.windows.conf redis服务默认端口号为 6379 ，通过快捷键 ctrl + c 即可停止redis服务 当redis服务启动成功后，可通过客户端进行连接。 1.3.2 客户端连接命令 redis-cli.exe 通过redis-cli.exe命令默认连接的是本地的redis服务，并且使用默认6379端口。也可以通过指定如下参数连接： - -h ip地址 - -p 端口号 - -a 密码（如果需要） 1.3.3 修改redis配置文件 设置redis服务密码，修改redis.windows.conf requirepass 123456 注意： - 修改密码后需要重启redis服务才能生效 - redis配置文件中 表示注释 重启redis后，再次连接redis时，需加上密码，否则连接失败。 redis-cli.exe -h localhost -p 6379 -a 123456 此时，-h 和 -p 参数可省略不写。 1.3.4 redis客户端图形工具 默认提供的客户端连接工具界面不太友好，同时操作也较为麻烦，接下来，引入一个redis客户端图形工具。 在当天资料中已提供安装包，直接安装即可。 安装完毕后，直接双击启动 新建连接 连接成功 2. redis数据类型 2.1 五种常用数据类型介绍 redis存储的是key-value结构的数据，其中key是字符串类型，value有5种常用的数据类型： - 字符串 string - 哈希 hash - 列表 list - 集合 set - 有序集合 sorted set / zset 2.2 各种数据类型特点 解释说明： - 字符串(string)：普通字符串，redis中最简单的数据类型 - 哈希(hash)：也叫散列，类似于java中的hashmap结构 - 列表(list)：按照插入顺序排序，可以有重复元素，类似于java中的linkedlist - 集合(set)：无序集合，没有重复元素，类似于java中的hashset - 有序集合(sorted set/zset)：集合中每个元素关联一个分数(score)，根据分数升序排序，没有重复元素 3. redis常用命令 3.1 字符串操作命令 redis 中字符串类型常用命令： - set key value 设置指定key的值 - get key 获取指定key的值 - setex key seconds value 设置指定key的值，并将 key 的过期时间设为 seconds 秒 - setnx key value 只有在 key 不存在时设置 key 的值 更多命令可以参考redis中文网：https://www.redis.net.cn 3.2 哈希操作命令 redis hash 是一个string类型的 field 和 value 的映射表，hash特别适合用于存储对象，常用命令： - hset key field value 将哈希表 key 中的字段 field 的值设为 value - hget key field 获取存储在哈希表中指定字段的值 - hdel key field 删除存储在哈希表中的指定字段 - hkeys key 获取哈希表中所有字段 - hvals key 获取哈希表中所有值 3.3 列表操作命令 redis 列表是简单的字符串列表，按照插入顺序排序，常用命令： - lpush key value1 [value2] 将一个或多个值插入到列表头部 - lrange key start stop 获取列表指定范围内的元素 - rpop key 移除并获取列表最后一个元素 - llen key 获取列表长度 - brpop key1 [key2 ] timeout 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超 时或发现可弹出元素为止 3.4 集合操作命令 redis set 是string类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据，常用命令： - sadd key member1 [member2] 向集合添加一个或多个成员 - smembers key 返回集合中的所有成员 - scard key 获取集合的成员数 - sinter key1 [key2] 返回给定所有集合的交集 - sunion key1 [key2] 返回所有给定集合的并集 - srem key member1 [member2] 移除集合中一个或多个成员 3.5 有序集合操作命令 redis有序集合是string类型元素的集合，且不允许有重复成员。每个元素都会关联一个double类型的分数。常用命令： 常用命令： - zadd key score1 member1 [score2 member2] 向有序集合添加一个或多个成员 - zrange key start stop [withscores] 通过索引区间返回有序集合中指定区间内的成员 - zincrby key increment member 有序集合中对指定成员的分数加上增量 increment - zrem key member [member ...] 移除有序集合中的一个或多个成员 3.6 通用命令 redis的通用命令是不分数据类型的，都可以使用的命令： - keys pattern 查找所有符合给定模式( pattern)的 key - exists key 检查给定 key 是否存在 - type key 返回 key 所储存的值的类型 - del key 该命令用于在 key 存在是删除 key 4.在java中操作redis 4.1 redis的java客户端 前面我们讲解了redis的常用命令，这些命令是我们操作redis的基础，那么我们在java程序中应该如何操作redis呢？这就需要使用redis的java客户端，就如同我们使用jdbc操作mysql数据库一样。 redis 的 java 客户端很多，常用的几种： - jedis - lettuce - spring data redis spring 对 redis 客户端进行了整合，提供了 spring data redis，在spring boot项目中还提供了对应的starter，即 spring-boot-starter-data-redis。 我们重点学习 spring data redis 。 4.2 spring data redis使用方式 4.2.1 介绍 spring data redis 是 spring 的一部分，提供了在 spring 应用中通过简单的配置就可以访问 redis 服务，对 redis 底层开发包进行了高度封装。在 spring 项目中，可以使用spring data redis来简化 redis 操作。 网址：https://spring.io/projects/spring-data-redis spring boot提供了对应的starter，maven坐标： xml org.springframework.boot spring-boot-starter-data-redis spring data redis中提供了一个高度封装的类： redistemplate ，对相关api进行了归类封装,将同一类型操作封装为operation接口，具体分类如下： - valueoperations：string数据操作 - setoperations：set类型数据操作 - zsetoperations：zset类型数据操作 - hashoperations：hash类型的数据操作 - listoperations：list类型的数据操作 4.2.2 环境搭建 进入到sky-server模块 1). 导入spring data redis的maven坐标(已完成) xml org.springframework.boot spring-boot-starter-data-redis 2). 配置redis数据源 在application-dev.yml中添加 yaml sky: redis: host: localhost port: 6379 password: 123456 database: 10 解释说明： database:指定使用redis的哪个数据库，redis服务启动后默认有16个数据库，编号分别是从0到15。 可以通过修改redis配置文件来指定数据库的数量。 在application.yml中添加读取application-dev.yml中的相关redis配置 yaml spring: profiles: active: dev redis: host: ${sky.redis.host} port: ${sky.redis.port} password: ${sky.redis.password} database: ${sky.redis.database} 3). 编写配置类，创建redistemplate对象 java package com.sky.config; import lombok.extern.slf4j.slf4j; import org.springframework.context.annotation.bean; import org.springframework.context.annotation.configuration; import org.springframework.data.redis.connection.redisconnectionfactory; import org.springframework.data.redis.core.redistemplate; import org.springframework.data.redis.serializer.stringredisserializer; @configuration @slf4j public class redisconfiguration { @bean public redistemplate redistemplate(redisconnectionfactory redisconnectionfactory){ log.info(\"开始创建redis模板对象...\"); redistemplate redistemplate = new redistemplate(); //设置redis的连接工厂对象 redistemplate.setconnectionfactory(redisconnectionfactory); //设置redis key的序列化器 redistemplate.setkeyserializer(new stringredisserializer()); return redistemplate; } } 解释说明： 当前配置类不是必须的，因为 spring boot 框架会自动装配 redistemplate 对象，但是默认的key序列化器为 jdkserializationredisserializer，导致我们存到redis中后的数据和原始数据有差别，故设置为 stringredisserializer序列化器。 4). 通过redistemplate对象操作redis 在test下新建测试类 java package com.sky.test; import org.junit.jupiter.api.test; import org.springframework.beans.factory.annotation.autowired; import org.springframework.boot.test.context.springboottest; import org.springframework.data.redis.core. ; @springboottest public class springdataredistest { @autowired private redistemplate redistemplate; @test public void testredistemplate(){ system.out.println(redistemplate); //string数据操作 valueoperations valueoperations = redistemplate.opsforvalue(); //hash类型的数据操作 hashoperations hashoperations = redistemplate.opsforhash(); //list类型的数据操作 listoperations listoperations = redistemplate.opsforlist(); //set类型数据操作 setoperations setoperations = redistemplate.opsforset(); //zset类型数据操作 zsetoperations zsetoperations = redistemplate.opsforzset(); } } 测试： 说明redistemplate对象注入成功，并且通过该redistemplate对象获取操作5种数据类型相关对象。 上述环境搭建完毕后，接下来，我们就来具体对常见5种数据类型进行操作。 4.2.3 操作常见类型数据 1). 操作字符串类型数据 java / 操作字符串类型的数据 / @test public void teststring(){ // set get setex setnx redistemplate.opsforvalue().set(\"name\",\"小明\"); string city = (string) redistemplate.opsforvalue().get(\"name\"); system.out.println(city); redistemplate.opsforvalue().set(\"code\",\"1234\",3, timeunit.minutes); redistemplate.opsforvalue().setifabsent(\"lock\",\"1\"); redistemplate.opsforvalue().setifabsent(\"lock\",\"2\"); } 2). 操作哈希类型数据 java / 操作哈希类型的数据 / @test public void testhash(){ //hset hget hdel hkeys hvals hashoperations hashoperations = redistemplate.opsforhash(); hashoperations.put(\"100\",\"name\",\"tom\"); hashoperations.put(\"100\",\"age\",\"20\"); string name = (string) hashoperations.get(\"100\", \"name\"); system.out.println(name); set keys = hashoperations.keys(\"100\"); system.out.println(keys); list values = hashoperations.values(\"100\"); system.out.println(values); hashoperations.delete(\"100\",\"age\"); } 3). 操作列表类型数据 java / 操作列表类型的数据 / @test public void testlist(){ //lpush lrange rpop llen listoperations listoperations = redistemplate.opsforlist(); listoperations.leftpushall(\"mylist\",\"a\",\"b\",\"c\"); listoperations.leftpush(\"mylist\",\"d\"); list mylist = listoperations.range(\"mylist\", 0, -1); system.out.println(mylist); listoperations.rightpop(\"mylist\"); long size = listoperations.size(\"mylist\"); system.out.println(size); } 4). 操作集合类型数据 java / 操作集合类型的数据 / @test public void testset(){ //sadd smembers scard sinter sunion srem setoperations setoperations = redistemplate.opsforset(); setoperations.add(\"set1\",\"a\",\"b\",\"c\",\"d\"); setoperations.add(\"set2\",\"a\",\"b\",\"x\",\"y\"); set members = setoperations.members(\"set1\"); system.out.println(members); long size = setoperations.size(\"set1\"); system.out.println(size); set intersect = setoperations.intersect(\"set1\", \"set2\"); system.out.println(intersect); set union = setoperations.union(\"set1\", \"set2\"); system.out.println(union); setoperations.remove(\"set1\",\"a\",\"b\"); } 5). 操作有序集合类型数据 java / 操作有序集合类型的数据 / @test public void testzset(){ //zadd zrange zincrby zrem zsetoperations zsetoperations = redistemplate.opsforzset(); zsetoperations.add(\"zset1\",\"a\",10); zsetoperations.add(\"zset1\",\"b\",12); zsetoperations.add(\"zset1\",\"c\",9); set zset1 = zsetoperations.range(\"zset1\", 0, -1); system.out.println(zset1); zsetoperations.incrementscore(\"zset1\",\"c\",10); zsetoperations.remove(\"zset1\",\"a\",\"b\"); } 6). 通用命令操作 java / 通用命令操作 / @test public void testcommon(){ //keys exists type del set keys = redistemplate.keys(\" \"); system.out.println(keys); boolean name = redistemplate.haskey(\"name\"); boolean set1 = redistemplate.haskey(\"set1\"); for (object key : keys) { datatype type = redistemplate.type(key); system.out.println(type.name()); } redistemplate.delete(\"mylist\"); } 5. 店铺营业状态设置 5.1 需求分析和设计 5.1.1 产品原型 进到苍穹外卖后台，显示餐厅的营业状态，营业状态分为 营业中 和 打烊中 ，若当前餐厅处于营业状态，自动接收任何订单，客户可在小程序进行下单操作；若当前餐厅处于打烊状态，不接受任何订单，客户便无法在小程序进行下单操作。 点击 营业状态 按钮时，弹出更改营业状态 选择营业，设置餐厅为 营业中 状态 选择打烊，设置餐厅为 打烊中 状态 状态说明： 5.1.2 接口设计 根据上述原型图设计接口，共包含3个接口。 接口设计： - 设置营业状态 - 管理端查询营业状态 - 用户端查询营业状态 注： 从技术层面分析，其实管理端和用户端查询营业状态时，可通过一个接口去实现即可。因为营业状态是一致的。但是，本项目约定： - 管理端 发出的请求，统一使用/admin作为前缀。 - 用户端 发出的请求，统一使用/user作为前缀。 因为访问路径不一致，故分为两个接口实现。 1). 设置营业状态 2). 管理端营业状态 3). 用户端营业状态 5.1.3 营业状态存储方式 虽然，可以通过一张表来存储营业状态数据，但整个表中只有一个字段，所以意义不大。 营业状态数据存储方式：基于redis的字符串来进行存储 约定： 1表示营业 0表示打烊 5.2 代码开发 5.2.1 设置营业状态 在sky-server模块中，创建shopcontroller.java 根据接口定义创建shopcontroller的setstatus设置营业状态方法： java package com.sky.controller.admin; import com.sky.result.result; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.data.redis.core.redistemplate; import org.springframework.web.bind.annotation.pathvariable; import org.springframework.web.bind.annotation.putmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; @restcontroller(\"adminshopcontroller\") @requestmapping(\"/admin/shop\") @api(tags = \"店铺相关接口\") @slf4j public class shopcontroller { public static final string key = \"shop_status\"; @autowired private redistemplate redistemplate; / 设置店铺的营业状态 @param status @return / @putmapping(\"/{status}\") @apioperation(\"设置店铺的营业状态\") public result setstatus(@pathvariable integer status){ log.info(\"设置店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); redistemplate.opsforvalue().set(key,status); return result.success(); } } 5.2.2 管理端查询营业状态 根据接口定义创建shopcontroller的getstatus查询营业状态方法： java / 获取店铺的营业状态 @return / @getmapping(\"/status\") @apioperation(\"获取店铺的营业状态\") public result getstatus(){ integer status = (integer) redistemplate.opsforvalue().get(key); log.info(\"获取到店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); return result.success(status); } 5.2.3 用户端查询营业状态 创建com.sky.controller.user包，在该包下创建shopcontroller.java 根据接口定义创建shopcontroller的getstatus查询营业状态方法： java package com.sky.controller.user; import com.sky.result.result; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.data.redis.core.redistemplate; import org.springframework.web.bind.annotation. ; @restcontroller(\"usershopcontroller\") @requestmapping(\"/user/shop\") @api(tags = \"店铺相关接口\") @slf4j public class shopcontroller { public static final string key = \"shop_status\"; @autowired private redistemplate redistemplate; / 获取店铺的营业状态 @return / @getmapping(\"/status\") @apioperation(\"获取店铺的营业状态\") public result getstatus(){ integer status = (integer) redistemplate.opsforvalue().get(key); log.info(\"获取到店铺的营业状态为：{}\",status == 1 ? \"营业中\" : \"打烊中\"); return result.success(status); } } 5.3 功能测试 5.3.1 接口文档测试 启动服务： 访问http://localhost:8080/doc.html，打开店铺相关接口 注意： 使用admin用户登录重新获取token，防止token失效。 设置营业状态： 点击发送 查看idea控制台日志 查看redis中数据 管理端查询营业状态： 用户端查询营业状态： 5.3.2 接口分组展示 在上述接口文档测试中，管理端和用户端的接口放在一起，不方便区分。 接下来，我们要实现管理端和用户端接口进行区分。 在webmvcconfiguration.java中，分别扫描\"com.sky.controller.admin\"和\"com.sky.controller.user\"这两个包。 java @bean public docket docket1(){ log.info(\"准备生成接口文档...\"); apiinfo apiinfo = new apiinfobuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build(); docket docket = new docket(documentationtype.swagger_2) .groupname(\"管理端接口\") .apiinfo(apiinfo) .select() //指定生成接口需要扫描的包 .apis(requesthandlerselectors.basepackage(\"com.sky.controller.admin\")) .paths(pathselectors.any()) .build(); return docket; } @bean public docket docket2(){ log.info(\"准备生成接口文档...\"); apiinfo apiinfo = new apiinfobuilder() .title(\"苍穹外卖项目接口文档\") .version(\"2.0\") .description(\"苍穹外卖项目接口文档\") .build(); docket docket = new docket(documentationtype.swagger_2) .groupname(\"用户端接口\") .apiinfo(apiinfo) .select() //指定生成接口需要扫描的包 .apis(requesthandlerselectors.basepackage(\"com.sky.controller.user\")) .paths(pathselectors.any()) .build(); return docket; } 重启服务器，再次访问接口文档，可进行选择 用户端接口 或者 管理端接口 5.3.3 前后端联调测试 启动nginx,访问 http://localhost 进入后台，状态为 营业中 点击 营业状态设置 ，修改状态为 打烊中 再次查看状态，状态已为 打烊中 5.4 代码提交 点击提交： 提交过程中 ，出现提示： 继续push: 推送成功："
  },
  {
    "id": "project-ececfc70d805",
    "version": "69e4dbfe2426",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day06/苍穹外卖-day06.md",
    "title": "苍穹外卖-day06",
    "description": "- HttpClient - 微信小程序开发 - 微信登录 - 导入商品浏览功能代码",
    "subject": "projects",
    "kind": "项目原文",
    "order": 16,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 48,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - HttpClient - 微信小程序开发 - 微信登录 - 导入商品浏览功能代码    功能实现： 微信登录 、 商品浏览  微信登录效果图：      商品浏览效果图：     "
      },
      {
        "title": "1. HttpClient",
        "anchor": "1-httpclient",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 介绍",
        "anchor": "11-介绍",
        "level": 3,
        "text": "  HttpClient 是Apache Jakarta Common 下的子项目，可以用来提供高效的、最新的、功能丰富的支持 HTTP 协议的客户端编程工具包，并且它支持 HTTP 协议最新的版本和建议。    HttpClient作用：  - 发送HTTP请求 - 接收响应数据  为什么要在Java程序中发送Http请求？有哪些应用场景呢？  HttpClient应用场景：  当我们在使用扫描支付、查看地图、获取验证码、查看天气等功能时      其实，应用程序本身并未实现这些功能，都是在应用程序里访问提供这些功能的服务，访问这些服务需要发送HTTP请求，并且接收响应数据，可通过HttpClient来实现。    HttpClient的maven坐标：  xml  org.apache.httpcomponents httpclient 4.5.13    HttpClient的核心API：  - HttpClient：Http客户端对象类型，使用该类型对象可发起Http请求。 - HttpClients：可认为是构建器，可创建HttpClient对象。 - CloseableHttpClient：实现类，实现了HttpClient接口。 - HttpGet：Get方式请求类型。 - HttpPost：Post方式请求类型。  HttpClient发送请求步骤：  - 创建HttpClient对象 - 创建Http请求对象 - 调用HttpClient的execute方法发送请求   "
      },
      {
        "title": "1.2 入门案例",
        "anchor": "12-入门案例",
        "level": 3,
        "text": "  对HttpClient编程工具包有了一定了解后，那么，我们使用HttpClient在Java程序当中来构造Http的请求，并且把请求发送出去，接下来，就通过入门案例分别发送 GET请求 和 POST请求 ，具体来学习一下它的使用方法。  1.2.1 GET方式请求  正常来说，首先，应该导入HttpClient相关的坐标，但在项目中，就算不导入，也可以使用相关的API。  因为在项目中已经引入了aliyun-sdk-oss坐标：  xml  com.aliyun.oss aliyun-sdk-oss    上述依赖的底层已经包含了HttpClient相关依赖。    故选择导入或者不导入均可。  进入到sky-server模块，编写测试代码，发送GET请求。  实现步骤：  1. 创建HttpClient对象 2. 创建请求对象 3. 发送请求，接受响应结果 4. 解析结果 5. 关闭资源  java package com.sky.test;  import org.apache.http.HttpEntity; import org.apache.http.client.methods.CloseableHttpResponse; import org.apache.http.client.methods.HttpGet; import org.apache.http.impl.client.CloseableHttpClient; import org.apache.http.impl.client.HttpClients; import org.apache.http.util.EntityUtils; import org.junit.jupiter.api.Test; import org.springframework.boot.test.context.SpringBootTest;  @SpringBootTest public class HttpClientTest {  / 测试通过httpclient发送GET方式的请求 / @Test public void testGET() throws Exception{ //创建httpclient对象 CloseableHttpClient httpClient = HttpClients.createDefault();  //创建请求对象 HttpGet httpGet = new HttpGet(\"http://localhost:8080/user/shop/status\");  //发送请求，接受响应结果 CloseableHttpResponse response = httpClient.execute(httpGet);  //获取服务端返回的状态码 int statusCode = response.getStatusLine().getStatusCode(); System.out.println(\"服务端返回的状态码为：\" + statusCode);  HttpEntity entity = response.getEntity(); String body = EntityUtils.toString(entity); System.out.println(\"服务端返回的数据为：\" + body);  //关闭资源 response.close(); httpClient.close(); } }   在访问http://localhost:8080/user/shop/status请求时，需要提前启动项目。  测试结果：      1.2.2 POST方式请求  在HttpClientTest中添加POST方式请求方法，相比GET请求来说，POST请求若携带参数需要封装请求体对象，并将该对象设置在请求对象中。  实现步骤：  1. 创建HttpClient对象 2. 创建请求对象 3. 发送请求，接收响应结果 4. 解析响应结果 5. 关闭资源  java / 测试通过httpclient发送POST方式的请求 / @Test public void testPOST() throws Exception{ // 创建httpclient对象 CloseableHttpClient httpClient = HttpClients.createDefault();  //创建请求对象 HttpPost httpPost = new HttpPost(\"http://localhost:8080/admin/employee/login\");  JSONObject jsonObject = new JSONObject(); jsonObject.put(\"username\",\"admin\"); jsonObject.put(\"password\",\"123456\");  StringEntity entity = new StringEntity(jsonObject.toString()); //指定请求编码方式 entity.setContentEncoding(\"utf-8\"); //数据格式 entity.setContentType(\"application/json\"); httpPost.setEntity(entity);  //发送请求 CloseableHttpResponse response = httpClient.execute(httpPost);  //解析返回结果 int statusCode = response.getStatusLine().getStatusCode(); System.out.println(\"响应码为：\" + statusCode);  HttpEntity entity1 = response.getEntity(); String body = EntityUtils.toString(entity1); System.out.println(\"响应数据为：\" + body);  //关闭资源 response.close(); httpClient.close(); }   测试结果：     "
      },
      {
        "title": "2. 微信小程序开发",
        "anchor": "2-微信小程序开发",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 介绍",
        "anchor": "21-介绍",
        "level": 3,
        "text": "  小程序是一种新的开放能力，开发者可以快速地开发一个小程序。可以在微信内被便捷地获取和传播，同时具有出色的使用体验。    官方网址： https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN    小程序主要运行微信内部，可通过上述网站来整体了解微信小程序的开发。  首先， 在进行小程序开发时，需要先去注册一个小程序，在注册的时候，它实际上又分成了不同的注册的主体。我们可以以个人的身份来注册一个小程序，当然，也可以以企业政府、媒体或者其他组织的方式来注册小程序。那么，不同的主体注册小程序，最终开放的权限也是不一样的。比如以个人身份来注册小程序，是无法开通支付权限的。若要提供支付功能，必须是企业、政府或者其它组织等。所以，不同的主体注册小程序后，可开发的功能是不一样的。      然后， 微信小程序我们提供的一些开发的支持，实际上微信的官方是提供了一系列的工具来帮助开发者快速的接入 并且完成小程序的开发，提供了完善的开发文档，并且专门提供了一个开发者工具，还提供了相应的设计指南，同时也提供了一些小程序体验DEMO，可以快速的体验小程序实现的功能。    最后， 开发完一个小程序要上线，也给我们提供了详细地接入流程。     "
      },
      {
        "title": "2.2 准备工作",
        "anchor": "22-准备工作",
        "level": 3,
        "text": "  开发微信小程序之前需要做如下准备工作：  - 注册小程序 - 完善小程序信息 - 下载开发者工具  1). 注册小程序  注册地址：https://mp.weixin.qq.com/wxopen/waregister?action=step1      2). 完善小程序信息  登录小程序后台：https://mp.weixin.qq.com/  两种登录方式选其一即可    完善小程序信息、小程序类目    查看小程序的 AppID      3). 下载开发者工具  资料中已提供，无需下载，熟悉下载步骤即可。  下载地址： https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html    扫描登录开发者工具    创建小程序项目    熟悉开发者工具布局    设置不校验合法域名    注： 开发阶段，小程序发出请求到后端的Tomcat服务器，若不勾选，请求发送失败。   "
      },
      {
        "title": "2.3 入门案例",
        "anchor": "23-入门案例",
        "level": 3,
        "text": "  实际上，小程序的开发本质上属于前端开发，主要使用JavaScript开发，咱们现在的定位主要还是在后端，所以，对于小程序开发简单了解即可。  2.3.1 小程序目录结构  小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：    文件说明：    app.js： 必须存在，主要存放小程序的逻辑代码  app.json： 必须存在，小程序配置文件，主要存放小程序的公共配置  app.wxss: 非必须存在，主要存放小程序公共样式表，类似于前端的CSS样式  对小程序主体三个文件了解后，其实一个小程序又有多个页面。比如说，有商品浏览页面、购物车的页面、订单支付的页面、商品的详情页面等等。那这些页面会放在哪呢？ 会存放在pages目录。  每个小程序页面主要由四个文件组成：    文件说明：    js文件： 必须存在，存放页面业务逻辑代码，编写的js代码。  wxml文件： 必须存在，存放页面结构，主要是做页面布局，页面效果展示的，类似于HTML页面。  json文件： 非必须，存放页面相关的配置。  wxss文件： 非必须，存放页面样式表，相当于CSS文件。    2.3.2 编写和编译小程序  1). 编写  进入到index.wxml，编写页面布局  xml  {{msg}}  获取用户信息  {{nickName}}   微信登录 授权码：{{code}}   发送请求 响应结果：{{result}}     进入到index.js，编写业务逻辑代码  javascript Page({ data:{ msg:'hello world', avatarUrl:'', nickName:'', code:'', result:'' }, getUserInfo:function(){ wx.getUserProfile({ desc: '获取用户信息', success:(res) = { console.log(res) this.setData({ avatarUrl:res.userInfo.avatarUrl, nickName:res.userInfo.nickName }) } }) }, wxlogin:function(){ wx.login({ success: (res) = { console.log(\"授权码：\"+res.code) this.setData({ code:res.code }) } }) }, sendRequest:function(){ wx.request({ url: 'http://localhost:8080/user/shop/status', method:'GET', success:(res) = { console.log(\"响应结果：\" + res.data.data) this.setData({ result:res.data.data }) } }) }})     2). 编译  点击编译按钮      3). 运行效果      点击 获取用户信息      点击 微信登录      点击 发送请求  因为请求http://localhost:8080/user/shop/status，先要启动后台项目。    注： 设置不校验合法域名，若不勾选，请求发送失败。    2.3.3 发布小程序  小程序的代码都已经开发完毕，要将小程序发布上线，让所有的用户都能使用到这个小程序。  点击上传按钮：    指定版本号：    上传成功：    把代码上传到微信服务器就表示小程序已经发布了吗？ 其实并不是。 当前小程序版本只是一个开发版本。  进到微信公众平台，打开版本管理页面。    需提交审核，变成审核版本，审核通过后，进行发布，变成线上版本。  一旦成为线上版本，这就说明小程序就已经发布上线了，微信用户就可以在微信里面去搜索和使用这个小程序了。   "
      },
      {
        "title": "3. 微信登录",
        "anchor": "3-微信登录",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 导入小程序代码",
        "anchor": "31-导入小程序代码",
        "level": 3,
        "text": "  开发微信小程序，本质上是属于前端的开发，我们的重点其实还是后端代码开发。所以，小程序的代码已经提供好了，直接导入到微信开发者工具当中，直接来使用就可以了。  1). 找到资料      2). 导入代码    AppID：使用自己的AppID      3). 查看项目结构  主体的文件:app.js app.json app.wxss 项目的页面比较多，主要存放在pages目录。      4). 修改配置  因为小程序要请求后端服务，需要修改为自己后端服务的ip地址和端口号(默认不需要修改)  common-- vendor.js-- 搜索(ctrl+f)-- baseUri     "
      },
      {
        "title": "3.2 微信登录流程",
        "anchor": "32-微信登录流程",
        "level": 3,
        "text": "  微信登录：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html  流程图：      步骤分析：  1. 小程序端，调用wx.login()获取code，就是授权码。 2. 小程序端，调用wx.request()发送请求并携带code，请求开发者服务器(自己编写的后端服务)。 3. 开发者服务端，通过HttpClient向微信接口服务发送请求，并携带appId+appsecret+code三个参数。 4. 开发者服务端，接收微信接口服务返回的数据，session_key+opendId等。opendId是微信用户的唯一标识。 5. 开发者服务端，自定义登录态，生成令牌(token)和openid等数据返回给小程序端，方便后绪请求身份校验。 6. 小程序端，收到自定义登录态，存储storage。 7. 小程序端，后绪通过wx.request()发起业务请求时，携带token。 8. 开发者服务端，收到请求后，通过携带的token，解析当前登录用户的id。 9. 开发者服务端，身份校验通过后，继续相关的业务逻辑处理，最终返回业务数据。    接下来，我们使用Postman进行测试。  说明：  1. 调用 wx.login() 获取 临时登录凭证code ，并回传到开发者服务器。 2. 调用 auth.code2Session 接口，换取 用户唯一标识 OpenID 、 用户在微信开放平台帐号下的 唯一标识UnionID （若当前小程序已绑定到微信开放平台帐号） 和 会话密钥 session_key 。  之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。  实现步骤：  1). 获取授权码  点击确定按钮，获取授权码，每个授权码只能使用一次，每次测试，需重新获取。      2). 明确请求接口  请求方式、请求路径、请求参数      3). 发送请求  获取session_key和openid    若出现code been used错误提示，说明授权码已被使用过，请重新获取     "
      },
      {
        "title": "3.3 需求分析和设计",
        "anchor": "33-需求分析和设计",
        "level": 3,
        "text": "  3.3.1 产品原型  用户进入到小程序的时候，微信授权登录之后才能点餐。需要获取当前微信用户的相关信息，比如昵称、头像等，这样才能够进入到小程序进行下单操作。是基于微信登录来实现小程序的登录功能，没有采用传统账户密码登录的方式。若第一次使用小程序来点餐，就是一个新用户，需要把这个新的用户保存到数据库当中完成自动注册。  登录功能原型图：      业务规则：  - 基于微信登录实现小程序的登录功能 - 如果是新用户需要自动完成注册    3.3.2 接口设计  通过微信登录的流程，如果要完成微信登录的话，最终就要获得微信用户的openid。在小程序端获取授权码后，向后端服务发送请求，并携带授权码，这样后端服务在收到授权码后，就可以去请求微信接口服务。最终，后端向小程序返回openid和token等数据。  基于上述的登录流程，就可以设计出该接口的 请求参数 和 返回数据 。    说明： 请求路径/user/user/login,第一个user代表用户端，第二个user代表用户模块。    3.3.3 表设计  当用户第一次使用小程序时，会完成自动注册，把用户信息存储到 user 表中。  字段名 数据类型 说明 备注 ----------- ------------ ------------------ -------- id bigint 主键 自增 openid varchar(45) 微信用户的唯一标识 name varchar(32) 用户姓名 phone varchar(11) 手机号 sex varchar(2) 性别 id_number varchar(18) 身份证号 avatar varchar(500) 微信用户头像路径 create_time datetime 注册时间  说明： 手机号字段比较特殊，个人身份注册的小程序没有权限获取到微信用户的手机号。如果是以企业的资质 注册的小程序就能够拿到微信用户的手机号。   "
      },
      {
        "title": "3.4 代码开发",
        "anchor": "34-代码开发",
        "level": 3,
        "text": "  3.4.1 定义相关配置  配置微信登录所需配置项：  application-dev.yml  yaml sky: wechat: appid: wxffb3637a228223b8 secret: 84311df9199ecacdf4f12d27b6b9522d   application.yml  yaml sky: wechat: appid: ${sky.wechat.appid} secret: ${sky.wechat.secret}   配置为微信用户生成jwt令牌时使用的配置项：  application.yml  yaml sky: jwt: 设置jwt签名加密时使用的秘钥 admin-secret-key: itcast 设置jwt过期时间 admin-ttl: 7200000 设置前端传递过来的令牌名称 admin-token-name: token user-secret-key: itheima user-ttl: 7200000 user-token-name: authentication     3.4.2 DTO设计  根据传入参数设计DTO类：    在sky-pojo模块，UserLoginDTO.java已定义  java package com.sky.dto;  import lombok.Data;  import java.io.Serializable;  / C端用户登录 / @Data public class UserLoginDTO implements Serializable {  private String code;  }     3.4.3 VO设计  根据返回数据设计VO类：    在sky-pojo模块，UserLoginVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor;  import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class UserLoginVO implements Serializable {  private Long id; private String openid; private String token;  }     3.4.4 Controller层  根据接口定义创建UserController的login方法：  java package com.sky.controller.user;  import com.sky.constant.JwtClaimsConstant; import com.sky.dto.UserLoginDTO; import com.sky.entity.User; import com.sky.properties.JwtProperties; import com.sky.result.Result; import com.sky.service.UserService; import com.sky.utils.JwtUtil; import com.sky.vo.UserLoginVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.PostMapping; import org.springframework.web.bind.annotation.RequestBody; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.util.HashMap; import java.util.Map;  @RestController @RequestMapping(\"/user/user\") @Api(tags = \"C端用户相关接口\") @Slf4j public class UserController {  @Autowired private UserService userService; @Autowired private JwtProperties jwtProperties;  / 微信登录 @param userLoginDTO @return / @PostMapping(\"/login\") @ApiOperation(\"微信登录\") public Result login(@RequestBody UserLoginDTO userLoginDTO){ log.info(\"微信用户登录：{}\",userLoginDTO.getCode());  //微信登录 User user = userService.wxLogin(userLoginDTO);//后绪步骤实现  //为微信用户生成jwt令牌 Map claims = new HashMap< (); claims.put(JwtClaimsConstant.USER_ID,user.getId()); String token = JwtUtil.createJWT(jwtProperties.getUserSecretKey(), jwtProperties.getUserTtl(), claims);  UserLoginVO userLoginVO = UserLoginVO.builder() .id(user.getId()) .openid(user.getOpenid()) .token(token) .build(); return Result.success(userLoginVO); } }   其中，JwtClaimsConstant.USER_ID常量已定义。    3.4.5 Service层接口  创建UserService接口：  java package com.sky.service;  import com.sky.dto.UserLoginDTO; import com.sky.entity.User;  public interface UserService {  / 微信登录 @param userLoginDTO @return / User wxLogin(UserLoginDTO userLoginDTO); }     3.4.6 Service层实现类  创建UserServiceImpl实现类： 实现获取微信用户的openid和微信登录功能  java package com.sky.service.impl;  import com.alibaba.fastjson.JSON; import com.alibaba.fastjson.JSONObject; import com.sky.constant.MessageConstant; import com.sky.dto.UserLoginDTO; import com.sky.entity.User; import com.sky.exception.LoginFailedException; import com.sky.mapper.UserMapper; import com.sky.properties.WeChatProperties; import com.sky.service.UserService; import com.sky.utils.HttpClientUtil; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service;  import java.time.LocalDateTime; import java.util.HashMap; import java.util.Map;  @Service @Slf4j public class UserServiceImpl implements UserService {  //微信服务接口地址 public static final String WX_LOGIN = \"https://api.weixin.qq.com/sns/jscode2session\";  @Autowired private WeChatProperties weChatProperties; @Autowired private UserMapper userMapper;  / 微信登录 @param userLoginDTO @return / public User wxLogin(UserLoginDTO userLoginDTO) { String openid = getOpenid(userLoginDTO.getCode());  //判断openid是否为空，如果为空表示登录失败，抛出业务异常 if(openid == null){ throw new LoginFailedException(MessageConstant.LOGIN_FAILED); }  //判断当前用户是否为新用户 User user = userMapper.getByOpenid(openid);  //如果是新用户，自动完成注册 if(user == null){ user = User.builder() .openid(openid) .createTime(LocalDateTime.now()) .build(); userMapper.insert(user);//后绪步骤实现 }  //返回这个用户对象 return user; }  / 调用微信接口服务，获取微信用户的openid @param code @return / private String getOpenid(String code){ //调用微信接口服务，获得当前微信用户的openid Map map = new HashMap< (); map.put(\"appid\",weChatProperties.getAppid()); map.put(\"secret\",weChatProperties.getSecret()); map.put(\"js_code\",code); map.put(\"grant_type\",\"authorization_code\"); String json = HttpClientUtil.doGet(WX_LOGIN, map);  JSONObject jsonObject = JSON.parseObject(json); String openid = jsonObject.getString(\"openid\"); return openid; } }     3.4.7 Mapper层  创建UserMapper接口：  java package com.sky.mapper;  import com.sky.entity.User; import org.apache.ibatis.annotations.Mapper; import org.apache.ibatis.annotations.Select;  @Mapper public interface UserMapper {  / 根据openid查询用户 @param openid @return / @Select(\"select from user where openid = {openid}\") User getByOpenid(String openid);  / 插入数据 @param user / void insert(User user); }   创建UserMapper.xml映射文件：  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"    insert into user (openid, name, phone, sex, id_number, avatar, create_time) values ( {openid}, {name}, {phone}, {sex}, {idNumber}, {avatar}, {createTime})        3.4.8 编写拦截器  编写拦截器JwtTokenUserInterceptor： 统一拦截用户端发送的请求并进行jwt校验  java package com.sky.interceptor;  import com.sky.constant.JwtClaimsConstant; import com.sky.context.BaseContext; import com.sky.properties.JwtProperties; import com.sky.utils.JwtUtil; import io.jsonwebtoken.Claims; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Component; import org.springframework.web.method.HandlerMethod; import org.springframework.web.servlet.HandlerInterceptor;  import javax.servlet.http.HttpServletRequest; import javax.servlet.http.HttpServletResponse;  / jwt令牌校验的拦截器 / @Component @Slf4j public class JwtTokenUserInterceptor implements HandlerInterceptor {  @Autowired private JwtProperties jwtProperties;  / 校验jwt  @param request @param response @param handler @return @throws Exception / public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception { //判断当前拦截到的是Controller的方法还是其他资源 if (!(handler instanceof HandlerMethod)) { //当前拦截到的不是动态方法，直接放行 return true; }  //1、从请求头中获取令牌 String token = request.getHeader(jwtProperties.getUserTokenName());  //2、校验令牌 try { log.info(\"jwt校验:{}\", token); Claims claims = JwtUtil.parseJWT(jwtProperties.getUserSecretKey(), token); Long userId = Long.valueOf(claims.get(JwtClaimsConstant.USER_ID).toString()); log.info(\"当前用户的id：\", userId); BaseContext.setCurrentId(userId); //3、通过，放行 return true; } catch (Exception ex) { //4、不通过，响应401状态码 response.setStatus(401); return false; } } }   在WebMvcConfiguration配置类中注册拦截器：  java @Autowired private JwtTokenUserInterceptor jwtTokenUserInterceptor; / 注册自定义拦截器 @param registry / protected void addInterceptors(InterceptorRegistry registry) { log.info(\"开始注册自定义拦截器...\"); //.........  registry.addInterceptor(jwtTokenUserInterceptor) .addPathPatterns(\"/user/ \") .excludePathPatterns(\"/user/user/login\") .excludePathPatterns(\"/user/shop/status\"); }    "
      },
      {
        "title": "3.5 功能测试",
        "anchor": "35-功能测试",
        "level": 3,
        "text": "  重新编译小程序，进行登录，获取到openid和token数据    查看后台日志    查看数据库user表，第一次登录，会自动注册     "
      },
      {
        "title": "4. 导入商品浏览功能代码",
        "anchor": "4-导入商品浏览功能代码",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析和设计",
        "anchor": "41-需求分析和设计",
        "level": 3,
        "text": "  4.1.1 产品原型  用户登录成功后跳转到系统首页，在首页需要根据分类来展示菜品和套餐。如果菜品设置了口味信息，需要展示 按钮，否则显示 按钮。  ​ 菜品列表效果图 菜品口味效果图    ​ 套餐列表效果图 套餐详情效果图      4.1.2 接口设计  根据上述原型图先 粗粒度 设计接口，共包含4个接口。  接口设计：  - 查询分类 - 根据分类id查询菜品 - 根据分类id查询套餐 - 根据套餐id查询包含的菜品    接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。  1). 查询分类      2). 根据分类id查询菜品      3). 根据分类id查询套餐      4). 根据套餐id查询包含的菜品     "
      },
      {
        "title": "4.2 代码导入",
        "anchor": "42-代码导入",
        "level": 3,
        "text": "  导入资料中的商品浏览功能代码即可    可按照mapper-- service-- controller依次导入，这样代码不会显示相应的报错。  进入到sky-server模块中  4.2.1 Mapper层  在SetmealMapper.java中添加list和getDishItemBySetmealId两个方法  java / 动态条件查询套餐 @param setmeal @return / List list(Setmeal setmeal);  / 根据套餐id查询菜品选项 @param setmealId @return / @Select(\"select sd.name, sd.copies, d.image, d.description \" + \"from setmeal_dish sd left join dish d on sd.dish_id = d.id \" + \"where sd.setmeal_id = {setmealId}\") List getDishItemBySetmealId(Long setmealId);   创建SetmealMapper.xml文件  xml  <!DOCTYPE mapper PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\" \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\"    select from setmeal   and name like concat('%', {name},'%')   and category_id = {categoryId}   and status = {status}         4.2.2 Service层  创建SetmealService.java  java package com.sky.service;  import com.sky.dto.SetmealDTO; import com.sky.dto.SetmealPageQueryDTO; import com.sky.entity.Setmeal; import com.sky.result.PageResult; import com.sky.vo.DishItemVO; import com.sky.vo.SetmealVO; import java.util.List;  public interface SetmealService {  / 条件查询 @param setmeal @return / List list(Setmeal setmeal);  / 根据id查询菜品选项 @param id @return / List getDishItemById(Long id);  }   创建SetmealServiceImpl.java  java package com.sky.service.impl;  import com.sky.entity.Setmeal; import com.sky.mapper.DishMapper; import com.sky.mapper.SetmealDishMapper; import com.sky.mapper.SetmealMapper; import com.sky.service.SetmealService; import com.sky.vo.DishItemVO; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service;  import java.util.List;  / 套餐业务实现 / @Service @Slf4j public class SetmealServiceImpl implements SetmealService {  @Autowired private SetmealMapper setmealMapper; @Autowired private SetmealDishMapper setmealDishMapper; @Autowired private DishMapper dishMapper;  / 条件查询 @param setmeal @return / public List list(Setmeal setmeal) { List list = setmealMapper.list(setmeal); return list; }  / 根据id查询菜品选项 @param id @return / public List getDishItemById(Long id) { return setmealMapper.getDishItemBySetmealId(id); } }   在DishService.java中添加listWithFlavor方法定义  java / 条件查询菜品和口味 @param dish @return / List listWithFlavor(Dish dish);   在DishServiceImpl.java中实现listWithFlavor方法  java / 条件查询菜品和口味 @param dish @return / public List listWithFlavor(Dish dish) { List dishList = dishMapper.list(dish);  List dishVOList = new ArrayList< ();  for (Dish d : dishList) { DishVO dishVO = new DishVO(); BeanUtils.copyProperties(d,dishVO);  //根据菜品id查询对应的口味 List flavors = dishFlavorMapper.getByDishId(d.getId());  dishVO.setFlavors(flavors); dishVOList.add(dishVO); }  return dishVOList; }     4.2.3 Controller层  创建DishController.java  java package com.sky.controller.user;  import com.sky.constant.StatusConstant; import com.sky.entity.Dish; import com.sky.result.Result; import com.sky.service.DishService; import com.sky.vo.DishVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.util.List;  @RestController(\"userDishController\") @RequestMapping(\"/user/dish\") @Slf4j @Api(tags = \"C端-菜品浏览接口\") public class DishController { @Autowired private DishService dishService;  / 根据分类id查询菜品  @param categoryId @return / @GetMapping(\"/list\") @ApiOperation(\"根据分类id查询菜品\") public Result list(Long categoryId) { Dish dish = new Dish(); dish.setCategoryId(categoryId); dish.setStatus(StatusConstant.ENABLE);//查询起售中的菜品  List list = dishService.listWithFlavor(dish);  return Result.success(list); }  }   创建CategoryController.java  java package com.sky.controller.user;  import com.sky.entity.Category; import com.sky.result.Result; import com.sky.service.CategoryService; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.util.List;  @RestController(\"userCategoryController\") @RequestMapping(\"/user/category\") @Api(tags = \"C端-分类接口\") public class CategoryController {  @Autowired private CategoryService categoryService;  / 查询分类 @param type @return / @GetMapping(\"/list\") @ApiOperation(\"查询分类\") public Result list(Integer type) { List list = categoryService.list(type); return Result.success(list); } }   创建SetmealController.java  java package com.sky.controller.user;  import com.sky.constant.StatusConstant; import com.sky.entity.Setmeal; import com.sky.result.Result; import com.sky.service.SetmealService; import com.sky.vo.DishItemVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.PathVariable; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.util.List;  @RestController(\"userSetmealController\") @RequestMapping(\"/user/setmeal\") @Api(tags = \"C端-套餐浏览接口\") public class SetmealController { @Autowired private SetmealService setmealService;  / 条件查询  @param categoryId @return / @GetMapping(\"/list\") @ApiOperation(\"根据分类id查询套餐\") public Result list(Long categoryId) { Setmeal setmeal = new Setmeal(); setmeal.setCategoryId(categoryId); setmeal.setStatus(StatusConstant.ENABLE);  List list = setmealService.list(setmeal); return Result.success(list); }  / 根据套餐id查询包含的菜品列表  @param id @return / @GetMapping(\"/dish/{id}\") @ApiOperation(\"根据套餐id查询包含的菜品列表\") public Result dishList(@PathVariable(\"id\") Long id) { List list = setmealService.getDishItemById(id); return Result.success(list); } }    "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  重启服务器、重新编译小程序  微信登录进入首页  菜品和套餐分类查询：    具体分类下的菜品查询：    菜品口味查询：     "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。"
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day06 课程内容 - httpclient - 微信小程序开发 - 微信登录 - 导入商品浏览功能代码 功能实现： 微信登录 、 商品浏览 微信登录效果图： 商品浏览效果图： 1. httpclient 1.1 介绍 httpclient 是apache jakarta common 下的子项目，可以用来提供高效的、最新的、功能丰富的支持 http 协议的客户端编程工具包，并且它支持 http 协议最新的版本和建议。 httpclient作用： - 发送http请求 - 接收响应数据 为什么要在java程序中发送http请求？有哪些应用场景呢？ httpclient应用场景： 当我们在使用扫描支付、查看地图、获取验证码、查看天气等功能时 其实，应用程序本身并未实现这些功能，都是在应用程序里访问提供这些功能的服务，访问这些服务需要发送http请求，并且接收响应数据，可通过httpclient来实现。 httpclient的maven坐标： xml org.apache.httpcomponents httpclient 4.5.13 httpclient的核心api： - httpclient：http客户端对象类型，使用该类型对象可发起http请求。 - httpclients：可认为是构建器，可创建httpclient对象。 - closeablehttpclient：实现类，实现了httpclient接口。 - httpget：get方式请求类型。 - httppost：post方式请求类型。 httpclient发送请求步骤： - 创建httpclient对象 - 创建http请求对象 - 调用httpclient的execute方法发送请求 1.2 入门案例 对httpclient编程工具包有了一定了解后，那么，我们使用httpclient在java程序当中来构造http的请求，并且把请求发送出去，接下来，就通过入门案例分别发送 get请求 和 post请求 ，具体来学习一下它的使用方法。 1.2.1 get方式请求 正常来说，首先，应该导入httpclient相关的坐标，但在项目中，就算不导入，也可以使用相关的api。 因为在项目中已经引入了aliyun-sdk-oss坐标： xml com.aliyun.oss aliyun-sdk-oss 上述依赖的底层已经包含了httpclient相关依赖。 故选择导入或者不导入均可。 进入到sky-server模块，编写测试代码，发送get请求。 实现步骤： 1. 创建httpclient对象 2. 创建请求对象 3. 发送请求，接受响应结果 4. 解析结果 5. 关闭资源 java package com.sky.test; import org.apache.http.httpentity; import org.apache.http.client.methods.closeablehttpresponse; import org.apache.http.client.methods.httpget; import org.apache.http.impl.client.closeablehttpclient; import org.apache.http.impl.client.httpclients; import org.apache.http.util.entityutils; import org.junit.jupiter.api.test; import org.springframework.boot.test.context.springboottest; @springboottest public class httpclienttest { / 测试通过httpclient发送get方式的请求 / @test public void testget() throws exception{ //创建httpclient对象 closeablehttpclient httpclient = httpclients.createdefault(); //创建请求对象 httpget httpget = new httpget(\"http://localhost:8080/user/shop/status\"); //发送请求，接受响应结果 closeablehttpresponse response = httpclient.execute(httpget); //获取服务端返回的状态码 int statuscode = response.getstatusline().getstatuscode(); system.out.println(\"服务端返回的状态码为：\" + statuscode); httpentity entity = response.getentity(); string body = entityutils.tostring(entity); system.out.println(\"服务端返回的数据为：\" + body); //关闭资源 response.close(); httpclient.close(); } } 在访问http://localhost:8080/user/shop/status请求时，需要提前启动项目。 测试结果： 1.2.2 post方式请求 在httpclienttest中添加post方式请求方法，相比get请求来说，post请求若携带参数需要封装请求体对象，并将该对象设置在请求对象中。 实现步骤： 1. 创建httpclient对象 2. 创建请求对象 3. 发送请求，接收响应结果 4. 解析响应结果 5. 关闭资源 java / 测试通过httpclient发送post方式的请求 / @test public void testpost() throws exception{ // 创建httpclient对象 closeablehttpclient httpclient = httpclients.createdefault(); //创建请求对象 httppost httppost = new httppost(\"http://localhost:8080/admin/employee/login\"); jsonobject jsonobject = new jsonobject(); jsonobject.put(\"username\",\"admin\"); jsonobject.put(\"password\",\"123456\"); stringentity entity = new stringentity(jsonobject.tostring()); //指定请求编码方式 entity.setcontentencoding(\"utf-8\"); //数据格式 entity.setcontenttype(\"application/json\"); httppost.setentity(entity); //发送请求 closeablehttpresponse response = httpclient.execute(httppost); //解析返回结果 int statuscode = response.getstatusline().getstatuscode(); system.out.println(\"响应码为：\" + statuscode); httpentity entity1 = response.getentity(); string body = entityutils.tostring(entity1); system.out.println(\"响应数据为：\" + body); //关闭资源 response.close(); httpclient.close(); } 测试结果： 2. 微信小程序开发 2.1 介绍 小程序是一种新的开放能力，开发者可以快速地开发一个小程序。可以在微信内被便捷地获取和传播，同时具有出色的使用体验。 官方网址： https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_cn 小程序主要运行微信内部，可通过上述网站来整体了解微信小程序的开发。 首先， 在进行小程序开发时，需要先去注册一个小程序，在注册的时候，它实际上又分成了不同的注册的主体。我们可以以个人的身份来注册一个小程序，当然，也可以以企业政府、媒体或者其他组织的方式来注册小程序。那么，不同的主体注册小程序，最终开放的权限也是不一样的。比如以个人身份来注册小程序，是无法开通支付权限的。若要提供支付功能，必须是企业、政府或者其它组织等。所以，不同的主体注册小程序后，可开发的功能是不一样的。 然后， 微信小程序我们提供的一些开发的支持，实际上微信的官方是提供了一系列的工具来帮助开发者快速的接入 并且完成小程序的开发，提供了完善的开发文档，并且专门提供了一个开发者工具，还提供了相应的设计指南，同时也提供了一些小程序体验demo，可以快速的体验小程序实现的功能。 最后， 开发完一个小程序要上线，也给我们提供了详细地接入流程。 2.2 准备工作 开发微信小程序之前需要做如下准备工作： - 注册小程序 - 完善小程序信息 - 下载开发者工具 1). 注册小程序 注册地址：https://mp.weixin.qq.com/wxopen/waregister?action=step1 2). 完善小程序信息 登录小程序后台：https://mp.weixin.qq.com/ 两种登录方式选其一即可 完善小程序信息、小程序类目 查看小程序的 appid 3). 下载开发者工具 资料中已提供，无需下载，熟悉下载步骤即可。 下载地址： https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html 扫描登录开发者工具 创建小程序项目 熟悉开发者工具布局 设置不校验合法域名 注： 开发阶段，小程序发出请求到后端的tomcat服务器，若不勾选，请求发送失败。 2.3 入门案例 实际上，小程序的开发本质上属于前端开发，主要使用javascript开发，咱们现在的定位主要还是在后端，所以，对于小程序开发简单了解即可。 2.3.1 小程序目录结构 小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下： 文件说明： app.js： 必须存在，主要存放小程序的逻辑代码 app.json： 必须存在，小程序配置文件，主要存放小程序的公共配置 app.wxss: 非必须存在，主要存放小程序公共样式表，类似于前端的css样式 对小程序主体三个文件了解后，其实一个小程序又有多个页面。比如说，有商品浏览页面、购物车的页面、订单支付的页面、商品的详情页面等等。那这些页面会放在哪呢？ 会存放在pages目录。 每个小程序页面主要由四个文件组成： 文件说明： js文件： 必须存在，存放页面业务逻辑代码，编写的js代码。 wxml文件： 必须存在，存放页面结构，主要是做页面布局，页面效果展示的，类似于html页面。 json文件： 非必须，存放页面相关的配置。 wxss文件： 非必须，存放页面样式表，相当于css文件。 2.3.2 编写和编译小程序 1). 编写 进入到index.wxml，编写页面布局 xml {{msg}} 获取用户信息 {{nickname}} 微信登录 授权码：{{code}} 发送请求 响应结果：{{result}} 进入到index.js，编写业务逻辑代码 javascript page({ data:{ msg:'hello world', avatarurl:'', nickname:'', code:'', result:'' }, getuserinfo:function(){ wx.getuserprofile({ desc: '获取用户信息', success:(res) = { console.log(res) this.setdata({ avatarurl:res.userinfo.avatarurl, nickname:res.userinfo.nickname }) } }) }, wxlogin:function(){ wx.login({ success: (res) = { console.log(\"授权码：\"+res.code) this.setdata({ code:res.code }) } }) }, sendrequest:function(){ wx.request({ url: 'http://localhost:8080/user/shop/status', method:'get', success:(res) = { console.log(\"响应结果：\" + res.data.data) this.setdata({ result:res.data.data }) } }) }}) 2). 编译 点击编译按钮 3). 运行效果 点击 获取用户信息 点击 微信登录 点击 发送请求 因为请求http://localhost:8080/user/shop/status，先要启动后台项目。 注： 设置不校验合法域名，若不勾选，请求发送失败。 2.3.3 发布小程序 小程序的代码都已经开发完毕，要将小程序发布上线，让所有的用户都能使用到这个小程序。 点击上传按钮： 指定版本号： 上传成功： 把代码上传到微信服务器就表示小程序已经发布了吗？ 其实并不是。 当前小程序版本只是一个开发版本。 进到微信公众平台，打开版本管理页面。 需提交审核，变成审核版本，审核通过后，进行发布，变成线上版本。 一旦成为线上版本，这就说明小程序就已经发布上线了，微信用户就可以在微信里面去搜索和使用这个小程序了。 3. 微信登录 3.1 导入小程序代码 开发微信小程序，本质上是属于前端的开发，我们的重点其实还是后端代码开发。所以，小程序的代码已经提供好了，直接导入到微信开发者工具当中，直接来使用就可以了。 1). 找到资料 2). 导入代码 appid：使用自己的appid 3). 查看项目结构 主体的文件:app.js app.json app.wxss 项目的页面比较多，主要存放在pages目录。 4). 修改配置 因为小程序要请求后端服务，需要修改为自己后端服务的ip地址和端口号(默认不需要修改) common-- vendor.js-- 搜索(ctrl+f)-- baseuri 3.2 微信登录流程 微信登录：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html 流程图： 步骤分析： 1. 小程序端，调用wx.login()获取code，就是授权码。 2. 小程序端，调用wx.request()发送请求并携带code，请求开发者服务器(自己编写的后端服务)。 3. 开发者服务端，通过httpclient向微信接口服务发送请求，并携带appid+appsecret+code三个参数。 4. 开发者服务端，接收微信接口服务返回的数据，session_key+opendid等。opendid是微信用户的唯一标识。 5. 开发者服务端，自定义登录态，生成令牌(token)和openid等数据返回给小程序端，方便后绪请求身份校验。 6. 小程序端，收到自定义登录态，存储storage。 7. 小程序端，后绪通过wx.request()发起业务请求时，携带token。 8. 开发者服务端，收到请求后，通过携带的token，解析当前登录用户的id。 9. 开发者服务端，身份校验通过后，继续相关的业务逻辑处理，最终返回业务数据。 接下来，我们使用postman进行测试。 说明： 1. 调用 wx.login() 获取 临时登录凭证code ，并回传到开发者服务器。 2. 调用 auth.code2session 接口，换取 用户唯一标识 openid 、 用户在微信开放平台帐号下的 唯一标识unionid （若当前小程序已绑定到微信开放平台帐号） 和 会话密钥 session_key 。 之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。 实现步骤： 1). 获取授权码 点击确定按钮，获取授权码，每个授权码只能使用一次，每次测试，需重新获取。 2). 明确请求接口 请求方式、请求路径、请求参数 3). 发送请求 获取session_key和openid 若出现code been used错误提示，说明授权码已被使用过，请重新获取 3.3 需求分析和设计 3.3.1 产品原型 用户进入到小程序的时候，微信授权登录之后才能点餐。需要获取当前微信用户的相关信息，比如昵称、头像等，这样才能够进入到小程序进行下单操作。是基于微信登录来实现小程序的登录功能，没有采用传统账户密码登录的方式。若第一次使用小程序来点餐，就是一个新用户，需要把这个新的用户保存到数据库当中完成自动注册。 登录功能原型图： 业务规则： - 基于微信登录实现小程序的登录功能 - 如果是新用户需要自动完成注册 3.3.2 接口设计 通过微信登录的流程，如果要完成微信登录的话，最终就要获得微信用户的openid。在小程序端获取授权码后，向后端服务发送请求，并携带授权码，这样后端服务在收到授权码后，就可以去请求微信接口服务。最终，后端向小程序返回openid和token等数据。 基于上述的登录流程，就可以设计出该接口的 请求参数 和 返回数据 。 说明： 请求路径/user/user/login,第一个user代表用户端，第二个user代表用户模块。 3.3.3 表设计 当用户第一次使用小程序时，会完成自动注册，把用户信息存储到 user 表中。 字段名 数据类型 说明 备注 ----------- ------------ ------------------ -------- id bigint 主键 自增 openid varchar(45) 微信用户的唯一标识 name varchar(32) 用户姓名 phone varchar(11) 手机号 sex varchar(2) 性别 id_number varchar(18) 身份证号 avatar varchar(500) 微信用户头像路径 create_time datetime 注册时间 说明： 手机号字段比较特殊，个人身份注册的小程序没有权限获取到微信用户的手机号。如果是以企业的资质 注册的小程序就能够拿到微信用户的手机号。 3.4 代码开发 3.4.1 定义相关配置 配置微信登录所需配置项： application-dev.yml yaml sky: wechat: appid: wxffb3637a228223b8 secret: 84311df9199ecacdf4f12d27b6b9522d application.yml yaml sky: wechat: appid: ${sky.wechat.appid} secret: ${sky.wechat.secret} 配置为微信用户生成jwt令牌时使用的配置项： application.yml yaml sky: jwt: 设置jwt签名加密时使用的秘钥 admin-secret-key: itcast 设置jwt过期时间 admin-ttl: 7200000 设置前端传递过来的令牌名称 admin-token-name: token user-secret-key: itheima user-ttl: 7200000 user-token-name: authentication 3.4.2 dto设计 根据传入参数设计dto类： 在sky-pojo模块，userlogindto.java已定义 java package com.sky.dto; import lombok.data; import java.io.serializable; / c端用户登录 / @data public class userlogindto implements serializable { private string code; } 3.4.3 vo设计 根据返回数据设计vo类： 在sky-pojo模块，userloginvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor public class userloginvo implements serializable { private long id; private string openid; private string token; } 3.4.4 controller层 根据接口定义创建usercontroller的login方法： java package com.sky.controller.user; import com.sky.constant.jwtclaimsconstant; import com.sky.dto.userlogindto; import com.sky.entity.user; import com.sky.properties.jwtproperties; import com.sky.result.result; import com.sky.service.userservice; import com.sky.utils.jwtutil; import com.sky.vo.userloginvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.postmapping; import org.springframework.web.bind.annotation.requestbody; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.util.hashmap; import java.util.map; @restcontroller @requestmapping(\"/user/user\") @api(tags = \"c端用户相关接口\") @slf4j public class usercontroller { @autowired private userservice userservice; @autowired private jwtproperties jwtproperties; / 微信登录 @param userlogindto @return / @postmapping(\"/login\") @apioperation(\"微信登录\") public result login(@requestbody userlogindto userlogindto){ log.info(\"微信用户登录：{}\",userlogindto.getcode()); //微信登录 user user = userservice.wxlogin(userlogindto);//后绪步骤实现 //为微信用户生成jwt令牌 map claims = new hashmap< (); claims.put(jwtclaimsconstant.user_id,user.getid()); string token = jwtutil.createjwt(jwtproperties.getusersecretkey(), jwtproperties.getuserttl(), claims); userloginvo userloginvo = userloginvo.builder() .id(user.getid()) .openid(user.getopenid()) .token(token) .build(); return result.success(userloginvo); } } 其中，jwtclaimsconstant.user_id常量已定义。 3.4.5 service层接口 创建userservice接口： java package com.sky.service; import com.sky.dto.userlogindto; import com.sky.entity.user; public interface userservice { / 微信登录 @param userlogindto @return / user wxlogin(userlogindto userlogindto); } 3.4.6 service层实现类 创建userserviceimpl实现类： 实现获取微信用户的openid和微信登录功能 java package com.sky.service.impl; import com.alibaba.fastjson.json; import com.alibaba.fastjson.jsonobject; import com.sky.constant.messageconstant; import com.sky.dto.userlogindto; import com.sky.entity.user; import com.sky.exception.loginfailedexception; import com.sky.mapper.usermapper; import com.sky.properties.wechatproperties; import com.sky.service.userservice; import com.sky.utils.httpclientutil; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import java.time.localdatetime; import java.util.hashmap; import java.util.map; @service @slf4j public class userserviceimpl implements userservice { //微信服务接口地址 public static final string wx_login = \"https://api.weixin.qq.com/sns/jscode2session\"; @autowired private wechatproperties wechatproperties; @autowired private usermapper usermapper; / 微信登录 @param userlogindto @return / public user wxlogin(userlogindto userlogindto) { string openid = getopenid(userlogindto.getcode()); //判断openid是否为空，如果为空表示登录失败，抛出业务异常 if(openid == null){ throw new loginfailedexception(messageconstant.login_failed); } //判断当前用户是否为新用户 user user = usermapper.getbyopenid(openid); //如果是新用户，自动完成注册 if(user == null){ user = user.builder() .openid(openid) .createtime(localdatetime.now()) .build(); usermapper.insert(user);//后绪步骤实现 } //返回这个用户对象 return user; } / 调用微信接口服务，获取微信用户的openid @param code @return / private string getopenid(string code){ //调用微信接口服务，获得当前微信用户的openid map map = new hashmap< (); map.put(\"appid\",wechatproperties.getappid()); map.put(\"secret\",wechatproperties.getsecret()); map.put(\"js_code\",code); map.put(\"grant_type\",\"authorization_code\"); string json = httpclientutil.doget(wx_login, map); jsonobject jsonobject = json.parseobject(json); string openid = jsonobject.getstring(\"openid\"); return openid; } } 3.4.7 mapper层 创建usermapper接口： java package com.sky.mapper; import com.sky.entity.user; import org.apache.ibatis.annotations.mapper; import org.apache.ibatis.annotations.select; @mapper public interface usermapper { / 根据openid查询用户 @param openid @return / @select(\"select from user where openid = {openid}\") user getbyopenid(string openid); / 插入数据 @param user / void insert(user user); } 创建usermapper.xml映射文件： xml insert into user (openid, name, phone, sex, id_number, avatar, create_time) values ( {openid}, {name}, {phone}, {sex}, {idnumber}, {avatar}, {createtime}) 3.4.8 编写拦截器 编写拦截器jwttokenuserinterceptor： 统一拦截用户端发送的请求并进行jwt校验 java package com.sky.interceptor; import com.sky.constant.jwtclaimsconstant; import com.sky.context.basecontext; import com.sky.properties.jwtproperties; import com.sky.utils.jwtutil; import io.jsonwebtoken.claims; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.component; import org.springframework.web.method.handlermethod; import org.springframework.web.servlet.handlerinterceptor; import javax.servlet.http.httpservletrequest; import javax.servlet.http.httpservletresponse; / jwt令牌校验的拦截器 / @component @slf4j public class jwttokenuserinterceptor implements handlerinterceptor { @autowired private jwtproperties jwtproperties; / 校验jwt @param request @param response @param handler @return @throws exception / public boolean prehandle(httpservletrequest request, httpservletresponse response, object handler) throws exception { //判断当前拦截到的是controller的方法还是其他资源 if (!(handler instanceof handlermethod)) { //当前拦截到的不是动态方法，直接放行 return true; } //1、从请求头中获取令牌 string token = request.getheader(jwtproperties.getusertokenname()); //2、校验令牌 try { log.info(\"jwt校验:{}\", token); claims claims = jwtutil.parsejwt(jwtproperties.getusersecretkey(), token); long userid = long.valueof(claims.get(jwtclaimsconstant.user_id).tostring()); log.info(\"当前用户的id：\", userid); basecontext.setcurrentid(userid); //3、通过，放行 return true; } catch (exception ex) { //4、不通过，响应401状态码 response.setstatus(401); return false; } } } 在webmvcconfiguration配置类中注册拦截器： java @autowired private jwttokenuserinterceptor jwttokenuserinterceptor; / 注册自定义拦截器 @param registry / protected void addinterceptors(interceptorregistry registry) { log.info(\"开始注册自定义拦截器...\"); //......... registry.addinterceptor(jwttokenuserinterceptor) .addpathpatterns(\"/user/ \") .excludepathpatterns(\"/user/user/login\") .excludepathpatterns(\"/user/shop/status\"); } 3.5 功能测试 重新编译小程序，进行登录，获取到openid和token数据 查看后台日志 查看数据库user表，第一次登录，会自动注册 4. 导入商品浏览功能代码 4.1 需求分析和设计 4.1.1 产品原型 用户登录成功后跳转到系统首页，在首页需要根据分类来展示菜品和套餐。如果菜品设置了口味信息，需要展示 按钮，否则显示 按钮。 ​ 菜品列表效果图 菜品口味效果图 ​ 套餐列表效果图 套餐详情效果图 4.1.2 接口设计 根据上述原型图先 粗粒度 设计接口，共包含4个接口。 接口设计： - 查询分类 - 根据分类id查询菜品 - 根据分类id查询套餐 - 根据套餐id查询包含的菜品 接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。 1). 查询分类 2). 根据分类id查询菜品 3). 根据分类id查询套餐 4). 根据套餐id查询包含的菜品 4.2 代码导入 导入资料中的商品浏览功能代码即可 可按照mapper-- service-- controller依次导入，这样代码不会显示相应的报错。 进入到sky-server模块中 4.2.1 mapper层 在setmealmapper.java中添加list和getdishitembysetmealid两个方法 java / 动态条件查询套餐 @param setmeal @return / list list(setmeal setmeal); / 根据套餐id查询菜品选项 @param setmealid @return / @select(\"select sd.name, sd.copies, d.image, d.description \" + \"from setmeal_dish sd left join dish d on sd.dish_id = d.id \" + \"where sd.setmeal_id = {setmealid}\") list getdishitembysetmealid(long setmealid); 创建setmealmapper.xml文件 xml select from setmeal and name like concat('%', {name},'%') and category_id = {categoryid} and status = {status} 4.2.2 service层 创建setmealservice.java java package com.sky.service; import com.sky.dto.setmealdto; import com.sky.dto.setmealpagequerydto; import com.sky.entity.setmeal; import com.sky.result.pageresult; import com.sky.vo.dishitemvo; import com.sky.vo.setmealvo; import java.util.list; public interface setmealservice { / 条件查询 @param setmeal @return / list list(setmeal setmeal); / 根据id查询菜品选项 @param id @return / list getdishitembyid(long id); } 创建setmealserviceimpl.java java package com.sky.service.impl; import com.sky.entity.setmeal; import com.sky.mapper.dishmapper; import com.sky.mapper.setmealdishmapper; import com.sky.mapper.setmealmapper; import com.sky.service.setmealservice; import com.sky.vo.dishitemvo; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import java.util.list; / 套餐业务实现 / @service @slf4j public class setmealserviceimpl implements setmealservice { @autowired private setmealmapper setmealmapper; @autowired private setmealdishmapper setmealdishmapper; @autowired private dishmapper dishmapper; / 条件查询 @param setmeal @return / public list list(setmeal setmeal) { list list = setmealmapper.list(setmeal); return list; } / 根据id查询菜品选项 @param id @return / public list getdishitembyid(long id) { return setmealmapper.getdishitembysetmealid(id); } } 在dishservice.java中添加listwithflavor方法定义 java / 条件查询菜品和口味 @param dish @return / list listwithflavor(dish dish); 在dishserviceimpl.java中实现listwithflavor方法 java / 条件查询菜品和口味 @param dish @return / public list listwithflavor(dish dish) { list dishlist = dishmapper.list(dish); list dishvolist = new arraylist< (); for (dish d : dishlist) { dishvo dishvo = new dishvo(); beanutils.copyproperties(d,dishvo); //根据菜品id查询对应的口味 list flavors = dishflavormapper.getbydishid(d.getid()); dishvo.setflavors(flavors); dishvolist.add(dishvo); } return dishvolist; } 4.2.3 controller层 创建dishcontroller.java java package com.sky.controller.user; import com.sky.constant.statusconstant; import com.sky.entity.dish; import com.sky.result.result; import com.sky.service.dishservice; import com.sky.vo.dishvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.getmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.util.list; @restcontroller(\"userdishcontroller\") @requestmapping(\"/user/dish\") @slf4j @api(tags = \"c端-菜品浏览接口\") public class dishcontroller { @autowired private dishservice dishservice; / 根据分类id查询菜品 @param categoryid @return / @getmapping(\"/list\") @apioperation(\"根据分类id查询菜品\") public result list(long categoryid) { dish dish = new dish(); dish.setcategoryid(categoryid); dish.setstatus(statusconstant.enable);//查询起售中的菜品 list list = dishservice.listwithflavor(dish); return result.success(list); } } 创建categorycontroller.java java package com.sky.controller.user; import com.sky.entity.category; import com.sky.result.result; import com.sky.service.categoryservice; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.getmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.util.list; @restcontroller(\"usercategorycontroller\") @requestmapping(\"/user/category\") @api(tags = \"c端-分类接口\") public class categorycontroller { @autowired private categoryservice categoryservice; / 查询分类 @param type @return / @getmapping(\"/list\") @apioperation(\"查询分类\") public result list(integer type) { list list = categoryservice.list(type); return result.success(list); } } 创建setmealcontroller.java java package com.sky.controller.user; import com.sky.constant.statusconstant; import com.sky.entity.setmeal; import com.sky.result.result; import com.sky.service.setmealservice; import com.sky.vo.dishitemvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.getmapping; import org.springframework.web.bind.annotation.pathvariable; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.util.list; @restcontroller(\"usersetmealcontroller\") @requestmapping(\"/user/setmeal\") @api(tags = \"c端-套餐浏览接口\") public class setmealcontroller { @autowired private setmealservice setmealservice; / 条件查询 @param categoryid @return / @getmapping(\"/list\") @apioperation(\"根据分类id查询套餐\") public result list(long categoryid) { setmeal setmeal = new setmeal(); setmeal.setcategoryid(categoryid); setmeal.setstatus(statusconstant.enable); list list = setmealservice.list(setmeal); return result.success(list); } / 根据套餐id查询包含的菜品列表 @param id @return / @getmapping(\"/dish/{id}\") @apioperation(\"根据套餐id查询包含的菜品列表\") public result dishlist(@pathvariable(\"id\") long id) { list list = setmealservice.getdishitembyid(id); return result.success(list); } } 4.3 功能测试 重启服务器、重新编译小程序 微信登录进入首页 菜品和套餐分类查询： 具体分类下的菜品查询： 菜品口味查询： 4.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-a4d3c23cf292",
    "version": "2e7d7d309967",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day07/苍穹外卖-day07.md",
    "title": "苍穹外卖-day07",
    "description": "- 缓存菜品 - 缓存套餐 - 添加购物车 - 查看购物车 - 清空购物车",
    "subject": "projects",
    "kind": "项目原文",
    "order": 17,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 36,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 缓存菜品 - 缓存套餐 - 添加购物车 - 查看购物车 - 清空购物车    功能实现： 缓存商品 、 购物车  效果图：     "
      },
      {
        "title": "1. 缓存菜品",
        "anchor": "1-缓存菜品",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 问题说明",
        "anchor": "11-问题说明",
        "level": 3,
        "text": "  用户端小程序展示的菜品数据都是通过查询数据库获得，如果用户端访问量比较大，数据库访问压力随之增大。    结果： 系统响应慢、用户体验差   "
      },
      {
        "title": "1.2 实现思路",
        "anchor": "12-实现思路",
        "level": 3,
        "text": "  通过Redis来缓存菜品数据，减少数据库查询操作。    缓存逻辑分析：  - 每个分类下的菜品保存一份缓存数据 - 数据库中菜品数据有变更时清理缓存数据     "
      },
      {
        "title": "1.3 代码开发",
        "anchor": "13-代码开发",
        "level": 3,
        "text": "  修改用户端接口 DishController 的 list 方法，加入缓存处理逻辑：  java @Autowired private RedisTemplate redisTemplate; / 根据分类id查询菜品  @param categoryId @return / @GetMapping(\"/list\") @ApiOperation(\"根据分类id查询菜品\") public Result list(Long categoryId) {  //构造redis中的key，规则：dish_分类id String key = \"dish_\" + categoryId;  //查询redis中是否存在菜品数据 List list = (List ) redisTemplate.opsForValue().get(key); if(list != null && list.size() 0){ //如果存在，直接返回，无须查询数据库 return Result.success(list); } //////////////////////////////////////////////////////// Dish dish = new Dish(); dish.setCategoryId(categoryId); dish.setStatus(StatusConstant.ENABLE);//查询起售中的菜品  //如果不存在，查询数据库，将查询到的数据放入redis中 list = dishService.listWithFlavor(dish); //////////////////////////////////////////////////////// redisTemplate.opsForValue().set(key, list);  return Result.success(list); }   为了保证 数据库 和 Redis 中的数据保持一致，修改 管理端接口 DishController 的相关方法，加入清理缓存逻辑。  需要改造的方法：  - 新增菜品 - 修改菜品 - 批量删除菜品 - 起售、停售菜品  抽取清理缓存的方法：  在管理端DishController中添加  java @Autowired private RedisTemplate redisTemplate; / 清理缓存数据 @param pattern / private void cleanCache(String pattern){ Set keys = redisTemplate.keys(pattern); redisTemplate.delete(keys); }   调用清理缓存的方法，保证数据一致性：  1). 新增菜品优化  java / 新增菜品  @param dishDTO @return / @PostMapping @ApiOperation(\"新增菜品\") public Result save(@RequestBody DishDTO dishDTO) { log.info(\"新增菜品：{}\", dishDTO); dishService.saveWithFlavor(dishDTO);  //清理缓存数据 String key = \"dish_\" + dishDTO.getCategoryId(); cleanCache(key); return Result.success(); }   2). 菜品批量删除优化  java / 菜品批量删除  @param ids @return / @DeleteMapping @ApiOperation(\"菜品批量删除\") public Result delete(@RequestParam List ids) { log.info(\"菜品批量删除：{}\", ids); dishService.deleteBatch(ids);  //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleanCache(\"dish_ \");  return Result.success(); }   3). 修改菜品优化  java / 修改菜品  @param dishDTO @return / @PutMapping @ApiOperation(\"修改菜品\") public Result update(@RequestBody DishDTO dishDTO) { log.info(\"修改菜品：{}\", dishDTO); dishService.updateWithFlavor(dishDTO);  //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleanCache(\"dish_ \");  return Result.success(); }   4). 菜品起售停售优化  java / 菜品起售停售  @param status @param id @return / @PostMapping(\"/status/{status}\") @ApiOperation(\"菜品起售停售\") public Result startOrStop(@PathVariable Integer status, Long id) { dishService.startOrStop(status, id);  //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleanCache(\"dish_ \");  return Result.success(); }    "
      },
      {
        "title": "1.4 功能测试",
        "anchor": "14-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 查看控制台sql - 前后端联调 - 查看Redis中的缓存数据  以 加入缓存 、 菜品修改 两个功能测试为例，通过前后端联调方式，查看控制台sql的打印和Redis中的缓存数据变化。    1). 加入缓存  当第一次查询某个分类的菜品时，会从数据为中进行查询，同时将查询的结果存储到Redis中，在后绪的访问，若查询相同分类的菜品时，直接从Redis缓存中查询，不再查询数据库。  登录小程序： 选择蜀味牛蛙(id=17)    查看控制台sql： 有查询语句，说明是从数据库中进行查询    查看Redis中的缓存数据： 说明缓存成功    再次访问： 选择蜀味牛蛙(id=17)    说明是从Redis中查询的数据。    2). 菜品修改  当在后台修改菜品数据时，为了保证Redis缓存中的数据和数据库中的数据时刻保持一致，当修改后，需要清空对应的缓存数据。用户再次访问时，还是先从数据库中查询，同时再把查询的结果存储到Redis中，这样，就能保证缓存和数据库的数据保持一致。  进入后台： 修改蜀味牛蛙分类下的任意一个菜品，当前分类的菜品数据已在Redis中缓存    修改：    查看Redis中的缓存数据： 说明修改时，已清空缓存    用户再次访问同一个菜品分类时，需要先查询数据库，再把结果同步到Redis中，保证了两者数据一致性。  其它功能测试步骤基本一致，自已测试即可。   "
      },
      {
        "title": "1.5 代码提交",
        "anchor": "15-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "2. 缓存套餐",
        "anchor": "2-缓存套餐",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 Spring Cache",
        "anchor": "21-spring-cache",
        "level": 3,
        "text": "  2.1.1 介绍  Spring Cache 是一个框架，实现了基于注解的缓存功能，只需要简单地加一个注解，就能实现缓存功能。  Spring Cache 提供了一层抽象，底层可以切换不同的缓存实现，例如：  - EHCache - Caffeine - Redis(常用)  起步依赖：  xml  org.springframework.boot spring-boot-starter-cache 2.7.3      2.1.2 常用注解  在SpringCache中提供了很多缓存操作的注解，常见的是以下的几个：  注解 说明 -------------- ------------------------------------------------------------ @EnableCaching 开启缓存注解功能，通常加在启动类上 @Cacheable 在方法执行前先查询缓存中是否有数据，如果有数据，则直接返回缓存数据；如果没有缓存数据，调用方法并将方法返回值放到缓存中 @CachePut 将方法的返回值放到缓存中 @CacheEvict 将一条或多条数据从缓存中删除  在spring boot项目中，使用缓存技术只需在项目中导入相关缓存技术的依赖包，并在启动类上使用@EnableCaching开启缓存支持即可。  例如，使用Redis作为缓存技术，只需要导入Spring data Redis的maven坐标即可。    2.1.3 入门案例  1). 环境准备  导入基础工程: 底层已使用Redis缓存实现  基础环境的代码，在我们今天的资料中已经准备好了， 大家只需要将这个工程导入进来就可以了。导入进来的工程结构如下：    数据库准备:  创建名为spring_cache_demo数据库，将springcachedemo.sql脚本直接导入数据库中。    引导类上加@EnableCaching:  java package com.itheima;  import lombok.extern.slf4j.Slf4j; import org.springframework.boot.SpringApplication; import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.cache.annotation.EnableCaching;  @Slf4j @SpringBootApplication @EnableCaching//开启缓存注解功能 public class CacheDemoApplication { public static void main(String[] args) { SpringApplication.run(CacheDemoApplication.class,args); log.info(\"项目启动成功...\"); } }     2). @CachePut注解  @CachePut 说明：  ​ 作用: 将方法返回值，放入缓存  ​ value: 缓存的名称, 每个缓存名称下面可以有很多key  ​ key: 缓存的key ---------- 支持Spring的表达式语言SPEL语法    在save方法上加注解@CachePut  当前UserController的save方法是用来保存用户信息的，我们希望在该用户信息保存到数据库的同时，也往缓存中缓存一份数据，我们可以在save方法上加上注解 @CachePut，用法如下：  java / CachePut：将方法返回值放入缓存 value：缓存的名称，每个缓存名称下面可以有多个key key：缓存的key / @PostMapping @CachePut(value = \"userCache\", key = \" user.id\")//key的生成：userCache::1 public User save(@RequestBody User user){ userMapper.insert(user); return user; }   说明： key的写法如下  user.id : user指的是方法形参的名称, id指的是user的id属性 , 也就是使用user的id属性作为key ;  result.id : result代表方法返回值，该表达式 代表以返回对象的id属性作为key ；  p0.id： p0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ;  a0.id： a0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ;  root.args[0].id: root.args[0]指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数  的id属性作为key ;  启动服务,通过swagger接口文档测试，访问UserController的save()方法  因为id是自增，所以不需要设置id属性    查看user表中的数据    查看Redis中的数据      3). @Cacheable注解  @Cacheable 说明:  ​ 作用: 在方法执行前，spring先查看缓存中是否有数据，如果有数据，则直接返回缓存数据；若没有数据，调用方法并将方法返回值放到缓存中  ​ value: 缓存的名称，每个缓存名称下面可以有多个key  ​ key: 缓存的key ---------- 支持Spring的表达式语言SPEL语法    在getById上加注解@Cacheable  java / Cacheable：在方法执行前spring先查看缓存中是否有数据，如果有数据，则直接返回缓存数据；若没有数据， 调用方法并将方法返回值放到缓存中 value：缓存的名称，每个缓存名称下面可以有多个key key：缓存的key / @GetMapping @Cacheable(cacheNames = \"userCache\",key=\" id\") public User getById(Long id){ User user = userMapper.getById(id); return user; }   重启服务,通过swagger接口文档测试，访问UserController的getById()方法  第一次访问，会请求我们controller的方法，查询数据库。后面再查询相同的id，就直接从Redis中查询数据，不用再查询数据库了，就说明缓存生效了。  提前在redis中手动删除掉id=1的用户数据    查看控制台sql语句： 说明从数据库查询的用户数据    查看Redis中的缓存数据： 说明已成功缓存    再次查询相同id的数据时，直接从redis中直接获取，不再查询数据库。    4). @CacheEvict注解  @CacheEvict 说明：  ​ 作用: 清理指定缓存  ​ value: 缓存的名称，每个缓存名称下面可以有多个key  ​ key: 缓存的key ---------- 支持Spring的表达式语言SPEL语法    在 delete 方法上加注解@CacheEvict  java @DeleteMapping @CacheEvict(cacheNames = \"userCache\",key = \" id\")//删除某个key对应的缓存数据 public void deleteById(Long id){ userMapper.deleteById(id); }  @DeleteMapping(\"/delAll\") @CacheEvict(cacheNames = \"userCache\",allEntries = true)//删除userCache下所有的缓存数据 public void deleteAll(){ userMapper.deleteAll(); }   重启服务,通过swagger接口文档测试，访问UserController的deleteAll()方法    查看user表： 数据清空    查询Redis缓存数据     "
      },
      {
        "title": "2.2 实现思路",
        "anchor": "22-实现思路",
        "level": 3,
        "text": "  实现步骤：  1). 导入Spring Cache和Redis相关maven坐标  2). 在启动类上加入@EnableCaching注解，开启缓存注解功能  3). 在用户端接口SetmealController的 list 方法上加入@Cacheable注解  4). 在管理端接口SetmealController的 save、delete、update、startOrStop等方法上加入CacheEvict注解   "
      },
      {
        "title": "2.3 代码开发",
        "anchor": "23-代码开发",
        "level": 3,
        "text": "  按照上述实现步骤：  1). 导入Spring Cache和Redis相关maven坐标(已实现)  xml  org.springframework.boot spring-boot-starter-data-redis    org.springframework.boot spring-boot-starter-cache      2). 在启动类上加入@EnableCaching注解，开启缓存注解功能  java package com.sky;  import lombok.extern.slf4j.Slf4j; import org.springframework.boot.SpringApplication; import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.cache.annotation.EnableCaching; import org.springframework.transaction.annotation.EnableTransactionManagement;  @SpringBootApplication @EnableTransactionManagement //开启注解方式的事务管理 @Slf4j @EnableCaching public class SkyApplication { public static void main(String[] args) { SpringApplication.run(SkyApplication.class, args); log.info(\"server started\"); } }     3). 在用户端接口SetmealController的 list 方法上加入@Cacheable注解  java / 条件查询  @param categoryId @return / @GetMapping(\"/list\") @ApiOperation(\"根据分类id查询套餐\") @Cacheable(cacheNames = \"setmealCache\",key = \" categoryId\") //key: setmealCache::100 public Result list(Long categoryId) { Setmeal setmeal = new Setmeal(); setmeal.setCategoryId(categoryId); setmeal.setStatus(StatusConstant.ENABLE);  List list = setmealService.list(setmeal); return Result.success(list); }     4). 在管理端接口SetmealController的 save、delete、update、startOrStop等方法上加入CacheEvict注解  java / 新增套餐  @param setmealDTO @return / @PostMapping @ApiOperation(\"新增套餐\") @CacheEvict(cacheNames = \"setmealCache\",key = \" setmealDTO.categoryId\")//key: setmealCache::100 public Result save(@RequestBody SetmealDTO setmealDTO) { setmealService.saveWithDish(setmealDTO); return Result.success(); } / 批量删除套餐  @param ids @return / @DeleteMapping @ApiOperation(\"批量删除套餐\") @CacheEvict(cacheNames = \"setmealCache\",allEntries = true) public Result delete(@RequestParam List ids) { setmealService.deleteBatch(ids); return Result.success(); } / 修改套餐  @param setmealDTO @return / @PutMapping @ApiOperation(\"修改套餐\") @CacheEvict(cacheNames = \"setmealCache\",allEntries = true) public Result update(@RequestBody SetmealDTO setmealDTO) { setmealService.update(setmealDTO); return Result.success(); }  / 套餐起售停售  @param status @param id @return / @PostMapping(\"/status/{status}\") @ApiOperation(\"套餐起售停售\") @CacheEvict(cacheNames = \"setmealCache\",allEntries = true) public Result startOrStop(@PathVariable Integer status, Long id) { setmealService.startOrStop(status, id); return Result.success(); }    "
      },
      {
        "title": "2.4 功能测试",
        "anchor": "24-功能测试",
        "level": 3,
        "text": "  通过前后端联调方式来进行测试，同时观察redis中缓存的套餐数据。和 缓存菜品 功能测试基本一致，不再赘述。   "
      },
      {
        "title": "2.5 代码提交",
        "anchor": "25-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "3. 添加购物车",
        "anchor": "3-添加购物车",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 需求分析和设计",
        "anchor": "31-需求分析和设计",
        "level": 3,
        "text": "  3.1.1 产品原型  用户可以将菜品或者套餐添加到购物车。对于菜品来说，如果设置了口味信息，则需要选择规格后才能加入购物车;对于套餐来说，可以直接点击 将当前套餐加入购物车。在购物车中可以修改菜品和套餐的数量，也可以清空购物车。  效果图：      3.1.2 接口设计  通过上述原型图，设计出对应的添加购物车接口。    说明： 添加购物车时，有可能添加菜品，也有可能添加套餐。故传入参数要么是菜品id，要么是套餐id。    3.1.3 表设计  用户的购物车数据，也是需要保存在数据库中的，购物车对应的数据表为shopping_cart表，具体表结构如下：  字段名 数据类型 说明 备注 ----------- ------------- ------------ -------- id bigint 主键 自增 name varchar(32) 商品名称 冗余字段 image varchar(255) 商品图片路径 冗余字段 user_id bigint 用户id 逻辑外键 dish_id bigint 菜品id 逻辑外键 setmeal_id bigint 套餐id 逻辑外键 dish_flavor varchar(50) 菜品口味 number int 商品数量 amount decimal(10,2) 商品单价 冗余字段 create_time datetime 创建时间  说明：  - 购物车数据是关联用户的，在表结构中，我们需要记录，每一个用户的购物车数据是哪些 - 菜品列表展示出来的既有套餐，又有菜品，如果用户选择的是套餐，就保存套餐ID(setmeal_id)，如果用户选择的是菜品，就保存菜品ID(dish_id) - 对同一个菜品/套餐，如果选择多份不需要添加多条记录，增加数量number即可   "
      },
      {
        "title": "3.2 代码开发",
        "anchor": "32-代码开发",
        "level": 3,
        "text": "  3.2.1 DTO设计  根据添加购物车接口的参数设计DTO：    在sky-pojo模块，ShoppingCartDTO.java已定义  java package com.sky.dto;  import lombok.Data; import java.io.Serializable;  @Data public class ShoppingCartDTO implements Serializable {  private Long dishId; private Long setmealId; private String dishFlavor;  }     3.2.2 Controller层  根据添加购物车接口创建ShoppingCartController：  java package com.sky.controller.user;   import com.sky.dto.ShoppingCartDTO; import com.sky.result.Result; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.PostMapping; import org.springframework.web.bind.annotation.RequestBody; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;  / 购物车 / @RestController @RequestMapping(\"/user/shoppingCart\") @Slf4j @Api(tags = \"C端-购物车接口\") public class ShoppingCartController {  @Autowired private ShoppingCartService shoppingCartService;  / 添加购物车 @param shoppingCartDTO @return / @PostMapping(\"/add\") @ApiOperation(\"添加购物车\") public Result add(@RequestBody ShoppingCartDTO shoppingCartDTO){ log.info(\"添加购物车：{}\", shoppingCartDTO); shoppingCartService.addShoppingCart(shoppingCartDTO);//后绪步骤实现 return Result.success(); } }     3.2.3 Service层接口  创建ShoppingCartService接口：  java package com.sky.service;  import com.sky.dto.ShoppingCartDTO; import com.sky.entity.ShoppingCart; import java.util.List;  public interface ShoppingCartService {  / 添加购物车 @param shoppingCartDTO / void addShoppingCart(ShoppingCartDTO shoppingCartDTO); }     3.2.4 Service层实现类  创建ShoppingCartServiceImpl实现类，并实现add方法：  java package com.sky.service.impl;   import com.sky.context.BaseContext; import com.sky.dto.ShoppingCartDTO; import com.sky.entity.Dish; import com.sky.entity.Setmeal; import com.sky.entity.ShoppingCart; import com.sky.mapper.DishMapper; import com.sky.mapper.SetmealMapper; import com.sky.service.ShoppingCartService; import org.springframework.beans.BeanUtils; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service; import java.time.LocalDateTime; import java.util.List;  @Service public class ShoppingCartServiceImpl implements ShoppingCartService {  @Autowired private ShoppingCartMapper shoppingCartMapper; @Autowired private DishMapper dishMapper; @Autowired private SetmealMapper setmealMapper;  / 添加购物车  @param shoppingCartDTO / public void addShoppingCart(ShoppingCartDTO shoppingCartDTO) { ShoppingCart shoppingCart = new ShoppingCart(); BeanUtils.copyProperties(shoppingCartDTO, shoppingCart); //只能查询自己的购物车数据 shoppingCart.setUserId(BaseContext.getCurrentId());  //判断当前商品是否在购物车中 List shoppingCartList = shoppingCartMapper.list(shoppingCart);  if (shoppingCartList != null && shoppingCartList.size() == 1) { //如果已经存在，就更新数量，数量加1 shoppingCart = shoppingCartList.get(0); shoppingCart.setNumber(shoppingCart.getNumber() + 1); shoppingCartMapper.updateNumberById(shoppingCart); } else { //如果不存在，插入数据，数量就是1  //判断当前添加到购物车的是菜品还是套餐 Long dishId = shoppingCartDTO.getDishId(); if (dishId != null) { //添加到购物车的是菜品 Dish dish = dishMapper.getById(dishId); shoppingCart.setName(dish.getName()); shoppingCart.setImage(dish.getImage()); shoppingCart.setAmount(dish.getPrice()); } else { //添加到购物车的是套餐 Setmeal setmeal = setmealMapper.getById(shoppingCartDTO.getSetmealId()); shoppingCart.setName(setmeal.getName()); shoppingCart.setImage(setmeal.getImage()); shoppingCart.setAmount(setmeal.getPrice()); } shoppingCart.setNumber(1); shoppingCart.setCreateTime(LocalDateTime.now()); shoppingCartMapper.insert(shoppingCart); } } }     3.2.5 Mapper层  创建ShoppingCartMapper接口:  java package com.sky.mapper;  import com.sky.entity.ShoppingCart; import org.apache.ibatis.annotations.Delete; import org.apache.ibatis.annotations.Insert; import org.apache.ibatis.annotations.Mapper; import org.apache.ibatis.annotations.Update; import java.util.List;  @Mapper public interface ShoppingCartMapper { / 条件查询  @param shoppingCart @return / List list(ShoppingCart shoppingCart);  / 更新商品数量  @param shoppingCart / @Update(\"update shopping_cart set number = {number} where id = {id}\") void updateNumberById(ShoppingCart shoppingCart);  / 插入购物车数据  @param shoppingCart / @Insert(\"insert into shopping_cart (name, user_id, dish_id, setmeal_id, dish_flavor, number, amount, image, create_time) \" + \" values ( {name}, {userId}, {dishId}, {setmealId}, {dishFlavor}, {number}, {amount}, {image}, {createTime})\") void insert(ShoppingCart shoppingCart);  }   创建ShoppingCartMapper.xml：  xml     select from shopping_cart   and user_id = {userId}   and dish_id = {dishId}   and setmeal_id = {setmealId}   and dish_flavor = {dishFlavor}   order by create_time desc      "
      },
      {
        "title": "3.3 功能测试",
        "anchor": "33-功能测试",
        "level": 3,
        "text": "  进入小程序，添加菜品    加入购物车，查询数据库    因为现在没有实现查看购物车功能，所以只能在表中进行查看。  在前后联调时，后台可通断点方式启动，查看运行的每一步。   "
      },
      {
        "title": "3.4 代码提交",
        "anchor": "34-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "4. 查看购物车",
        "anchor": "4-查看购物车",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析和设计",
        "anchor": "41-需求分析和设计",
        "level": 3,
        "text": "  4.1.1 产品原型  当用户添加完菜品和套餐后，可进入到购物车中，查看购物中的菜品和套餐。      4.1.2 接口设计     "
      },
      {
        "title": "4.2 代码开发",
        "anchor": "42-代码开发",
        "level": 3,
        "text": "  4.2.1 Controller层  在ShoppingCartController中创建查看购物车的方法：  java / 查看购物车 @return / @GetMapping(\"/list\") @ApiOperation(\"查看购物车\") public Result list(){ return Result.success(shoppingCartService.showShoppingCart()); }     4.2.2 Service层接口  在ShoppingCartService接口中声明查看购物车的方法：  java / 查看购物车 @return / List showShoppingCart();     4.2.3 Service层实现类  在ShoppingCartServiceImpl中实现查看购物车的方法：  java / 查看购物车 @return / public List showShoppingCart() { return shoppingCartMapper.list(ShoppingCart. builder(). userId(BaseContext.getCurrentId()). build()); }    "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  当进入小程序时，就会发起查看购物车的请求    点击购物车图标    测试成功。   "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "5. 清空购物车",
        "anchor": "5-清空购物车",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析和设计",
        "anchor": "51-需求分析和设计",
        "level": 3,
        "text": "  5.1.1 产品原型  当点击清空按钮时，会把购物车中的数据全部清空。      5.1.2 接口设计     "
      },
      {
        "title": "5.2 代码开发",
        "anchor": "52-代码开发",
        "level": 3,
        "text": "  5.2.1 Controller层  在ShoppingCartController中创建清空购物车的方法：  java / 清空购物车商品 @return / @DeleteMapping(\"/clean\") @ApiOperation(\"清空购物车商品\") public Result clean(){ shoppingCartService.cleanShoppingCart(); return Result.success(); }     5.2.2 Service层接口  在ShoppingCartService接口中声明清空购物车的方法：  java / 清空购物车商品 / void cleanShoppingCart();     5.2.3 Service层实现类  在ShoppingCartServiceImpl中实现清空购物车的方法：  java / 清空购物车商品 / public void cleanShoppingCart() { shoppingCartMapper.deleteByUserId(BaseContext.getCurrentId()); }     5.2.4 Mapper层  在ShoppingCartMapper接口中创建删除购物车数据的方法：  java / 根据用户id删除购物车数据  @param userId / @Delete(\"delete from shopping_cart where user_id = {userId}\") void deleteByUserId(Long userId);    "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  进入到购物车页面    点击清空    查看数据库中的数据    说明当前用户的购物车数据已全部删除。   "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。"
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day07 课程内容 - 缓存菜品 - 缓存套餐 - 添加购物车 - 查看购物车 - 清空购物车 功能实现： 缓存商品 、 购物车 效果图： 1. 缓存菜品 1.1 问题说明 用户端小程序展示的菜品数据都是通过查询数据库获得，如果用户端访问量比较大，数据库访问压力随之增大。 结果： 系统响应慢、用户体验差 1.2 实现思路 通过redis来缓存菜品数据，减少数据库查询操作。 缓存逻辑分析： - 每个分类下的菜品保存一份缓存数据 - 数据库中菜品数据有变更时清理缓存数据 1.3 代码开发 修改用户端接口 dishcontroller 的 list 方法，加入缓存处理逻辑： java @autowired private redistemplate redistemplate; / 根据分类id查询菜品 @param categoryid @return / @getmapping(\"/list\") @apioperation(\"根据分类id查询菜品\") public result list(long categoryid) { //构造redis中的key，规则：dish_分类id string key = \"dish_\" + categoryid; //查询redis中是否存在菜品数据 list list = (list ) redistemplate.opsforvalue().get(key); if(list != null && list.size() 0){ //如果存在，直接返回，无须查询数据库 return result.success(list); } //////////////////////////////////////////////////////// dish dish = new dish(); dish.setcategoryid(categoryid); dish.setstatus(statusconstant.enable);//查询起售中的菜品 //如果不存在，查询数据库，将查询到的数据放入redis中 list = dishservice.listwithflavor(dish); //////////////////////////////////////////////////////// redistemplate.opsforvalue().set(key, list); return result.success(list); } 为了保证 数据库 和 redis 中的数据保持一致，修改 管理端接口 dishcontroller 的相关方法，加入清理缓存逻辑。 需要改造的方法： - 新增菜品 - 修改菜品 - 批量删除菜品 - 起售、停售菜品 抽取清理缓存的方法： 在管理端dishcontroller中添加 java @autowired private redistemplate redistemplate; / 清理缓存数据 @param pattern / private void cleancache(string pattern){ set keys = redistemplate.keys(pattern); redistemplate.delete(keys); } 调用清理缓存的方法，保证数据一致性： 1). 新增菜品优化 java / 新增菜品 @param dishdto @return / @postmapping @apioperation(\"新增菜品\") public result save(@requestbody dishdto dishdto) { log.info(\"新增菜品：{}\", dishdto); dishservice.savewithflavor(dishdto); //清理缓存数据 string key = \"dish_\" + dishdto.getcategoryid(); cleancache(key); return result.success(); } 2). 菜品批量删除优化 java / 菜品批量删除 @param ids @return / @deletemapping @apioperation(\"菜品批量删除\") public result delete(@requestparam list ids) { log.info(\"菜品批量删除：{}\", ids); dishservice.deletebatch(ids); //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleancache(\"dish_ \"); return result.success(); } 3). 修改菜品优化 java / 修改菜品 @param dishdto @return / @putmapping @apioperation(\"修改菜品\") public result update(@requestbody dishdto dishdto) { log.info(\"修改菜品：{}\", dishdto); dishservice.updatewithflavor(dishdto); //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleancache(\"dish_ \"); return result.success(); } 4). 菜品起售停售优化 java / 菜品起售停售 @param status @param id @return / @postmapping(\"/status/{status}\") @apioperation(\"菜品起售停售\") public result startorstop(@pathvariable integer status, long id) { dishservice.startorstop(status, id); //将所有的菜品缓存数据清理掉，所有以dish_开头的key cleancache(\"dish_ \"); return result.success(); } 1.4 功能测试 可以通过如下方式进行测试： - 查看控制台sql - 前后端联调 - 查看redis中的缓存数据 以 加入缓存 、 菜品修改 两个功能测试为例，通过前后端联调方式，查看控制台sql的打印和redis中的缓存数据变化。 1). 加入缓存 当第一次查询某个分类的菜品时，会从数据为中进行查询，同时将查询的结果存储到redis中，在后绪的访问，若查询相同分类的菜品时，直接从redis缓存中查询，不再查询数据库。 登录小程序： 选择蜀味牛蛙(id=17) 查看控制台sql： 有查询语句，说明是从数据库中进行查询 查看redis中的缓存数据： 说明缓存成功 再次访问： 选择蜀味牛蛙(id=17) 说明是从redis中查询的数据。 2). 菜品修改 当在后台修改菜品数据时，为了保证redis缓存中的数据和数据库中的数据时刻保持一致，当修改后，需要清空对应的缓存数据。用户再次访问时，还是先从数据库中查询，同时再把查询的结果存储到redis中，这样，就能保证缓存和数据库的数据保持一致。 进入后台： 修改蜀味牛蛙分类下的任意一个菜品，当前分类的菜品数据已在redis中缓存 修改： 查看redis中的缓存数据： 说明修改时，已清空缓存 用户再次访问同一个菜品分类时，需要先查询数据库，再把结果同步到redis中，保证了两者数据一致性。 其它功能测试步骤基本一致，自已测试即可。 1.5 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 2. 缓存套餐 2.1 spring cache 2.1.1 介绍 spring cache 是一个框架，实现了基于注解的缓存功能，只需要简单地加一个注解，就能实现缓存功能。 spring cache 提供了一层抽象，底层可以切换不同的缓存实现，例如： - ehcache - caffeine - redis(常用) 起步依赖： xml org.springframework.boot spring-boot-starter-cache 2.7.3 2.1.2 常用注解 在springcache中提供了很多缓存操作的注解，常见的是以下的几个： 注解 说明 -------------- ------------------------------------------------------------ @enablecaching 开启缓存注解功能，通常加在启动类上 @cacheable 在方法执行前先查询缓存中是否有数据，如果有数据，则直接返回缓存数据；如果没有缓存数据，调用方法并将方法返回值放到缓存中 @cacheput 将方法的返回值放到缓存中 @cacheevict 将一条或多条数据从缓存中删除 在spring boot项目中，使用缓存技术只需在项目中导入相关缓存技术的依赖包，并在启动类上使用@enablecaching开启缓存支持即可。 例如，使用redis作为缓存技术，只需要导入spring data redis的maven坐标即可。 2.1.3 入门案例 1). 环境准备 导入基础工程: 底层已使用redis缓存实现 基础环境的代码，在我们今天的资料中已经准备好了， 大家只需要将这个工程导入进来就可以了。导入进来的工程结构如下： 数据库准备: 创建名为spring_cache_demo数据库，将springcachedemo.sql脚本直接导入数据库中。 引导类上加@enablecaching: java package com.itheima; import lombok.extern.slf4j.slf4j; import org.springframework.boot.springapplication; import org.springframework.boot.autoconfigure.springbootapplication; import org.springframework.cache.annotation.enablecaching; @slf4j @springbootapplication @enablecaching//开启缓存注解功能 public class cachedemoapplication { public static void main(string[] args) { springapplication.run(cachedemoapplication.class,args); log.info(\"项目启动成功...\"); } } 2). @cacheput注解 @cacheput 说明： ​ 作用: 将方法返回值，放入缓存 ​ value: 缓存的名称, 每个缓存名称下面可以有很多key ​ key: 缓存的key ---------- 支持spring的表达式语言spel语法 在save方法上加注解@cacheput 当前usercontroller的save方法是用来保存用户信息的，我们希望在该用户信息保存到数据库的同时，也往缓存中缓存一份数据，我们可以在save方法上加上注解 @cacheput，用法如下： java / cacheput：将方法返回值放入缓存 value：缓存的名称，每个缓存名称下面可以有多个key key：缓存的key / @postmapping @cacheput(value = \"usercache\", key = \" user.id\")//key的生成：usercache::1 public user save(@requestbody user user){ usermapper.insert(user); return user; } 说明： key的写法如下 user.id : user指的是方法形参的名称, id指的是user的id属性 , 也就是使用user的id属性作为key ; result.id : result代表方法返回值，该表达式 代表以返回对象的id属性作为key ； p0.id： p0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ; a0.id： a0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ; root.args[0].id: root.args[0]指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数 的id属性作为key ; 启动服务,通过swagger接口文档测试，访问usercontroller的save()方法 因为id是自增，所以不需要设置id属性 查看user表中的数据 查看redis中的数据 3). @cacheable注解 @cacheable 说明: ​ 作用: 在方法执行前，spring先查看缓存中是否有数据，如果有数据，则直接返回缓存数据；若没有数据，调用方法并将方法返回值放到缓存中 ​ value: 缓存的名称，每个缓存名称下面可以有多个key ​ key: 缓存的key ---------- 支持spring的表达式语言spel语法 在getbyid上加注解@cacheable java / cacheable：在方法执行前spring先查看缓存中是否有数据，如果有数据，则直接返回缓存数据；若没有数据， 调用方法并将方法返回值放到缓存中 value：缓存的名称，每个缓存名称下面可以有多个key key：缓存的key / @getmapping @cacheable(cachenames = \"usercache\",key=\" id\") public user getbyid(long id){ user user = usermapper.getbyid(id); return user; } 重启服务,通过swagger接口文档测试，访问usercontroller的getbyid()方法 第一次访问，会请求我们controller的方法，查询数据库。后面再查询相同的id，就直接从redis中查询数据，不用再查询数据库了，就说明缓存生效了。 提前在redis中手动删除掉id=1的用户数据 查看控制台sql语句： 说明从数据库查询的用户数据 查看redis中的缓存数据： 说明已成功缓存 再次查询相同id的数据时，直接从redis中直接获取，不再查询数据库。 4). @cacheevict注解 @cacheevict 说明： ​ 作用: 清理指定缓存 ​ value: 缓存的名称，每个缓存名称下面可以有多个key ​ key: 缓存的key ---------- 支持spring的表达式语言spel语法 在 delete 方法上加注解@cacheevict java @deletemapping @cacheevict(cachenames = \"usercache\",key = \" id\")//删除某个key对应的缓存数据 public void deletebyid(long id){ usermapper.deletebyid(id); } @deletemapping(\"/delall\") @cacheevict(cachenames = \"usercache\",allentries = true)//删除usercache下所有的缓存数据 public void deleteall(){ usermapper.deleteall(); } 重启服务,通过swagger接口文档测试，访问usercontroller的deleteall()方法 查看user表： 数据清空 查询redis缓存数据 2.2 实现思路 实现步骤： 1). 导入spring cache和redis相关maven坐标 2). 在启动类上加入@enablecaching注解，开启缓存注解功能 3). 在用户端接口setmealcontroller的 list 方法上加入@cacheable注解 4). 在管理端接口setmealcontroller的 save、delete、update、startorstop等方法上加入cacheevict注解 2.3 代码开发 按照上述实现步骤： 1). 导入spring cache和redis相关maven坐标(已实现) xml org.springframework.boot spring-boot-starter-data-redis org.springframework.boot spring-boot-starter-cache 2). 在启动类上加入@enablecaching注解，开启缓存注解功能 java package com.sky; import lombok.extern.slf4j.slf4j; import org.springframework.boot.springapplication; import org.springframework.boot.autoconfigure.springbootapplication; import org.springframework.cache.annotation.enablecaching; import org.springframework.transaction.annotation.enabletransactionmanagement; @springbootapplication @enabletransactionmanagement //开启注解方式的事务管理 @slf4j @enablecaching public class skyapplication { public static void main(string[] args) { springapplication.run(skyapplication.class, args); log.info(\"server started\"); } } 3). 在用户端接口setmealcontroller的 list 方法上加入@cacheable注解 java / 条件查询 @param categoryid @return / @getmapping(\"/list\") @apioperation(\"根据分类id查询套餐\") @cacheable(cachenames = \"setmealcache\",key = \" categoryid\") //key: setmealcache::100 public result list(long categoryid) { setmeal setmeal = new setmeal(); setmeal.setcategoryid(categoryid); setmeal.setstatus(statusconstant.enable); list list = setmealservice.list(setmeal); return result.success(list); } 4). 在管理端接口setmealcontroller的 save、delete、update、startorstop等方法上加入cacheevict注解 java / 新增套餐 @param setmealdto @return / @postmapping @apioperation(\"新增套餐\") @cacheevict(cachenames = \"setmealcache\",key = \" setmealdto.categoryid\")//key: setmealcache::100 public result save(@requestbody setmealdto setmealdto) { setmealservice.savewithdish(setmealdto); return result.success(); } / 批量删除套餐 @param ids @return / @deletemapping @apioperation(\"批量删除套餐\") @cacheevict(cachenames = \"setmealcache\",allentries = true) public result delete(@requestparam list ids) { setmealservice.deletebatch(ids); return result.success(); } / 修改套餐 @param setmealdto @return / @putmapping @apioperation(\"修改套餐\") @cacheevict(cachenames = \"setmealcache\",allentries = true) public result update(@requestbody setmealdto setmealdto) { setmealservice.update(setmealdto); return result.success(); } / 套餐起售停售 @param status @param id @return / @postmapping(\"/status/{status}\") @apioperation(\"套餐起售停售\") @cacheevict(cachenames = \"setmealcache\",allentries = true) public result startorstop(@pathvariable integer status, long id) { setmealservice.startorstop(status, id); return result.success(); } 2.4 功能测试 通过前后端联调方式来进行测试，同时观察redis中缓存的套餐数据。和 缓存菜品 功能测试基本一致，不再赘述。 2.5 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 3. 添加购物车 3.1 需求分析和设计 3.1.1 产品原型 用户可以将菜品或者套餐添加到购物车。对于菜品来说，如果设置了口味信息，则需要选择规格后才能加入购物车;对于套餐来说，可以直接点击 将当前套餐加入购物车。在购物车中可以修改菜品和套餐的数量，也可以清空购物车。 效果图： 3.1.2 接口设计 通过上述原型图，设计出对应的添加购物车接口。 说明： 添加购物车时，有可能添加菜品，也有可能添加套餐。故传入参数要么是菜品id，要么是套餐id。 3.1.3 表设计 用户的购物车数据，也是需要保存在数据库中的，购物车对应的数据表为shopping_cart表，具体表结构如下： 字段名 数据类型 说明 备注 ----------- ------------- ------------ -------- id bigint 主键 自增 name varchar(32) 商品名称 冗余字段 image varchar(255) 商品图片路径 冗余字段 user_id bigint 用户id 逻辑外键 dish_id bigint 菜品id 逻辑外键 setmeal_id bigint 套餐id 逻辑外键 dish_flavor varchar(50) 菜品口味 number int 商品数量 amount decimal(10,2) 商品单价 冗余字段 create_time datetime 创建时间 说明： - 购物车数据是关联用户的，在表结构中，我们需要记录，每一个用户的购物车数据是哪些 - 菜品列表展示出来的既有套餐，又有菜品，如果用户选择的是套餐，就保存套餐id(setmeal_id)，如果用户选择的是菜品，就保存菜品id(dish_id) - 对同一个菜品/套餐，如果选择多份不需要添加多条记录，增加数量number即可 3.2 代码开发 3.2.1 dto设计 根据添加购物车接口的参数设计dto： 在sky-pojo模块，shoppingcartdto.java已定义 java package com.sky.dto; import lombok.data; import java.io.serializable; @data public class shoppingcartdto implements serializable { private long dishid; private long setmealid; private string dishflavor; } 3.2.2 controller层 根据添加购物车接口创建shoppingcartcontroller： java package com.sky.controller.user; import com.sky.dto.shoppingcartdto; import com.sky.result.result; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.postmapping; import org.springframework.web.bind.annotation.requestbody; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; / 购物车 / @restcontroller @requestmapping(\"/user/shoppingcart\") @slf4j @api(tags = \"c端-购物车接口\") public class shoppingcartcontroller { @autowired private shoppingcartservice shoppingcartservice; / 添加购物车 @param shoppingcartdto @return / @postmapping(\"/add\") @apioperation(\"添加购物车\") public result add(@requestbody shoppingcartdto shoppingcartdto){ log.info(\"添加购物车：{}\", shoppingcartdto); shoppingcartservice.addshoppingcart(shoppingcartdto);//后绪步骤实现 return result.success(); } } 3.2.3 service层接口 创建shoppingcartservice接口： java package com.sky.service; import com.sky.dto.shoppingcartdto; import com.sky.entity.shoppingcart; import java.util.list; public interface shoppingcartservice { / 添加购物车 @param shoppingcartdto / void addshoppingcart(shoppingcartdto shoppingcartdto); } 3.2.4 service层实现类 创建shoppingcartserviceimpl实现类，并实现add方法： java package com.sky.service.impl; import com.sky.context.basecontext; import com.sky.dto.shoppingcartdto; import com.sky.entity.dish; import com.sky.entity.setmeal; import com.sky.entity.shoppingcart; import com.sky.mapper.dishmapper; import com.sky.mapper.setmealmapper; import com.sky.service.shoppingcartservice; import org.springframework.beans.beanutils; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import java.time.localdatetime; import java.util.list; @service public class shoppingcartserviceimpl implements shoppingcartservice { @autowired private shoppingcartmapper shoppingcartmapper; @autowired private dishmapper dishmapper; @autowired private setmealmapper setmealmapper; / 添加购物车 @param shoppingcartdto / public void addshoppingcart(shoppingcartdto shoppingcartdto) { shoppingcart shoppingcart = new shoppingcart(); beanutils.copyproperties(shoppingcartdto, shoppingcart); //只能查询自己的购物车数据 shoppingcart.setuserid(basecontext.getcurrentid()); //判断当前商品是否在购物车中 list shoppingcartlist = shoppingcartmapper.list(shoppingcart); if (shoppingcartlist != null && shoppingcartlist.size() == 1) { //如果已经存在，就更新数量，数量加1 shoppingcart = shoppingcartlist.get(0); shoppingcart.setnumber(shoppingcart.getnumber() + 1); shoppingcartmapper.updatenumberbyid(shoppingcart); } else { //如果不存在，插入数据，数量就是1 //判断当前添加到购物车的是菜品还是套餐 long dishid = shoppingcartdto.getdishid(); if (dishid != null) { //添加到购物车的是菜品 dish dish = dishmapper.getbyid(dishid); shoppingcart.setname(dish.getname()); shoppingcart.setimage(dish.getimage()); shoppingcart.setamount(dish.getprice()); } else { //添加到购物车的是套餐 setmeal setmeal = setmealmapper.getbyid(shoppingcartdto.getsetmealid()); shoppingcart.setname(setmeal.getname()); shoppingcart.setimage(setmeal.getimage()); shoppingcart.setamount(setmeal.getprice()); } shoppingcart.setnumber(1); shoppingcart.setcreatetime(localdatetime.now()); shoppingcartmapper.insert(shoppingcart); } } } 3.2.5 mapper层 创建shoppingcartmapper接口: java package com.sky.mapper; import com.sky.entity.shoppingcart; import org.apache.ibatis.annotations.delete; import org.apache.ibatis.annotations.insert; import org.apache.ibatis.annotations.mapper; import org.apache.ibatis.annotations.update; import java.util.list; @mapper public interface shoppingcartmapper { / 条件查询 @param shoppingcart @return / list list(shoppingcart shoppingcart); / 更新商品数量 @param shoppingcart / @update(\"update shopping_cart set number = {number} where id = {id}\") void updatenumberbyid(shoppingcart shoppingcart); / 插入购物车数据 @param shoppingcart / @insert(\"insert into shopping_cart (name, user_id, dish_id, setmeal_id, dish_flavor, number, amount, image, create_time) \" + \" values ( {name}, {userid}, {dishid}, {setmealid}, {dishflavor}, {number}, {amount}, {image}, {createtime})\") void insert(shoppingcart shoppingcart); } 创建shoppingcartmapper.xml： xml select from shopping_cart and user_id = {userid} and dish_id = {dishid} and setmeal_id = {setmealid} and dish_flavor = {dishflavor} order by create_time desc 3.3 功能测试 进入小程序，添加菜品 加入购物车，查询数据库 因为现在没有实现查看购物车功能，所以只能在表中进行查看。 在前后联调时，后台可通断点方式启动，查看运行的每一步。 3.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 4. 查看购物车 4.1 需求分析和设计 4.1.1 产品原型 当用户添加完菜品和套餐后，可进入到购物车中，查看购物中的菜品和套餐。 4.1.2 接口设计 4.2 代码开发 4.2.1 controller层 在shoppingcartcontroller中创建查看购物车的方法： java / 查看购物车 @return / @getmapping(\"/list\") @apioperation(\"查看购物车\") public result list(){ return result.success(shoppingcartservice.showshoppingcart()); } 4.2.2 service层接口 在shoppingcartservice接口中声明查看购物车的方法： java / 查看购物车 @return / list showshoppingcart(); 4.2.3 service层实现类 在shoppingcartserviceimpl中实现查看购物车的方法： java / 查看购物车 @return / public list showshoppingcart() { return shoppingcartmapper.list(shoppingcart. builder(). userid(basecontext.getcurrentid()). build()); } 4.3 功能测试 当进入小程序时，就会发起查看购物车的请求 点击购物车图标 测试成功。 4.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 5. 清空购物车 5.1 需求分析和设计 5.1.1 产品原型 当点击清空按钮时，会把购物车中的数据全部清空。 5.1.2 接口设计 5.2 代码开发 5.2.1 controller层 在shoppingcartcontroller中创建清空购物车的方法： java / 清空购物车商品 @return / @deletemapping(\"/clean\") @apioperation(\"清空购物车商品\") public result clean(){ shoppingcartservice.cleanshoppingcart(); return result.success(); } 5.2.2 service层接口 在shoppingcartservice接口中声明清空购物车的方法： java / 清空购物车商品 / void cleanshoppingcart(); 5.2.3 service层实现类 在shoppingcartserviceimpl中实现清空购物车的方法： java / 清空购物车商品 / public void cleanshoppingcart() { shoppingcartmapper.deletebyuserid(basecontext.getcurrentid()); } 5.2.4 mapper层 在shoppingcartmapper接口中创建删除购物车数据的方法： java / 根据用户id删除购物车数据 @param userid / @delete(\"delete from shopping_cart where user_id = {userid}\") void deletebyuserid(long userid); 5.3 功能测试 进入到购物车页面 点击清空 查看数据库中的数据 说明当前用户的购物车数据已全部删除。 5.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-801de7efc7e9",
    "version": "6a30918b429c",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day08/苍穹外卖-day08.md",
    "title": "苍穹外卖-day08",
    "description": "- 导入地址簿功能代码 - 用户下单 - 订单支付",
    "subject": "projects",
    "kind": "项目原文",
    "order": 18,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 53,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 导入地址簿功能代码 - 用户下单 - 订单支付    功能实现： 用户下单 、 订单支付  用户下单效果图：      订单支付效果图：     "
      },
      {
        "title": "1. 导入地址簿功能代码",
        "anchor": "1-导入地址簿功能代码",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 需求分析和设计",
        "anchor": "11-需求分析和设计",
        "level": 3,
        "text": "  1.1.1 产品原型  地址簿，指的是消费者用户的地址信息，用户登录成功后可以维护自己的地址信息。同一个用户可以有多个地址信息，但是只能有一个 默认地址 。  效果图：    对于地址簿管理，我们需要实现以下几个功能：  - 查询地址列表 - 新增地址 - 修改地址 - 删除地址 - 设置默认地址 - 查询默认地址    1.1.2 接口设计  根据上述原型图先 粗粒度 设计接口，共包含7个接口。  接口设计：  - 新增地址 - 查询登录用户所有地址 - 查询默认地址 - 根据id修改地址 - 根据id删除地址 - 根据id查询地址 - 设置默认地址  接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。    1). 新增地址      2). 查询登录用户所有地址      3). 查询默认地址      4). 修改地址      5). 根据id删除地址      6). 根据id查询地址      7). 设置默认地址        1.1.3 表设计  用户的地址信息会存储在address_book表，即地址簿表中。具体表结构如下：  字段名 数据类型 说明 备注 ------------- ------------ ------------ -------------- id bigint 主键 自增 user_id bigint 用户id 逻辑外键 consignee varchar(50) 收货人 sex varchar(2) 性别 phone varchar(11) 手机号 province_code varchar(12) 省份编码 province_name varchar(32) 省份名称 city_code varchar(12) 城市编码 city_name varchar(32) 城市名称 district_code varchar(12) 区县编码 district_name varchar(32) 区县名称 detail varchar(200) 详细地址信息 具体到门牌号 label varchar(100) 标签 公司、家、学校 is_default tinyint(1) 是否默认地址 1是 0否  这里面有一个字段is_default，实际上我们在设置默认地址时，只需要更新这个字段就可以了。   "
      },
      {
        "title": "1.2 代码导入",
        "anchor": "12-代码导入",
        "level": 3,
        "text": "  对于这一类的单表的增删改查，我们已经写过很多了，基本的开发思路都是一样的，那么本小节的用户地址簿管理的增删改查功能，我们就不再一一实现了，基本的代码我们都已经提供了，直接导入进来，做一个测试即可。  导入课程资料中的地址簿模块功能代码：    进入到sky-server模块中  1.2.1 Mapper层  创建AddressBookMapper.java  java package com.sky.mapper;  import com.sky.entity.AddressBook; import org.apache.ibatis.annotations. ; import java.util.List;  @Mapper public interface AddressBookMapper {  / 条件查询 @param addressBook @return / List list(AddressBook addressBook);  / 新增 @param addressBook / @Insert(\"insert into address_book\" + \" (user_id, consignee, phone, sex, province_code, province_name, city_code, city_name, district_code,\" + \" district_name, detail, label, is_default)\" + \" values ( {userId}, {consignee}, {phone}, {sex}, {provinceCode}, {provinceName}, {cityCode}, {cityName},\" + \" {districtCode}, {districtName}, {detail}, {label}, {isDefault})\") void insert(AddressBook addressBook);  / 根据id查询 @param id @return / @Select(\"select from address_book where id = {id}\") AddressBook getById(Long id);  / 根据id修改 @param addressBook / void update(AddressBook addressBook);  / 根据 用户id修改 是否默认地址 @param addressBook / @Update(\"update address_book set is_default = {isDefault} where user_id = {userId}\") void updateIsDefaultByUserId(AddressBook addressBook);  / 根据id删除地址 @param id / @Delete(\"delete from address_book where id = {id}\") void deleteById(Long id);  }   创建AddressBookMapper.xml  xml      select from address_book   and user_id = {userId}   and phone = {phone}   and is_default = {isDefault}      update address_book   consignee = {consignee},   sex = {sex},   phone = {phone},   detail = {detail},   label = {label},   is_default = {isDefault},   where id = {id}        1.2.2 Service层  创建AddressBookService.java  java package com.sky.service;  import com.sky.entity.AddressBook; import java.util.List;  public interface AddressBookService {  List list(AddressBook addressBook);  void save(AddressBook addressBook);  AddressBook getById(Long id);  void update(AddressBook addressBook);  void setDefault(AddressBook addressBook);  void deleteById(Long id);  }   创建AddressBookServiceImpl.java  java package com.sky.service.impl;  import com.sky.context.BaseContext; import com.sky.entity.AddressBook; import com.sky.mapper.AddressBookMapper; import com.sky.service.AddressBookService; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service; import org.springframework.transaction.annotation.Transactional; import java.util.List;  @Service @Slf4j public class AddressBookServiceImpl implements AddressBookService { @Autowired private AddressBookMapper addressBookMapper;  / 条件查询  @param addressBook @return / public List list(AddressBook addressBook) { return addressBookMapper.list(addressBook); }  / 新增地址  @param addressBook / public void save(AddressBook addressBook) { addressBook.setUserId(BaseContext.getCurrentId()); addressBook.setIsDefault(0); addressBookMapper.insert(addressBook); }  / 根据id查询  @param id @return / public AddressBook getById(Long id) { AddressBook addressBook = addressBookMapper.getById(id); return addressBook; }  / 根据id修改地址  @param addressBook / public void update(AddressBook addressBook) { addressBookMapper.update(addressBook); }  / 设置默认地址  @param addressBook / @Transactional public void setDefault(AddressBook addressBook) { //1、将当前用户的所有地址修改为非默认地址 update address_book set is_default = ? where user_id = ? addressBook.setIsDefault(0); addressBook.setUserId(BaseContext.getCurrentId()); addressBookMapper.updateIsDefaultByUserId(addressBook);  //2、将当前地址改为默认地址 update address_book set is_default = ? where id = ? addressBook.setIsDefault(1); addressBookMapper.update(addressBook); }  / 根据id删除地址  @param id / public void deleteById(Long id) { addressBookMapper.deleteById(id); }  }     1.2.3 Controller层  java package com.sky.controller.user;  import com.sky.context.BaseContext; import com.sky.entity.AddressBook; import com.sky.result.Result; import com.sky.service.AddressBookService; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation. ; import java.util.List;  @RestController @RequestMapping(\"/user/addressBook\") @Api(tags = \"C端地址簿接口\") public class AddressBookController {  @Autowired private AddressBookService addressBookService;  / 查询当前登录用户的所有地址信息  @return / @GetMapping(\"/list\") @ApiOperation(\"查询当前登录用户的所有地址信息\") public Result list() { AddressBook addressBook = new AddressBook(); addressBook.setUserId(BaseContext.getCurrentId()); List list = addressBookService.list(addressBook); return Result.success(list); }  / 新增地址  @param addressBook @return / @PostMapping @ApiOperation(\"新增地址\") public Result save(@RequestBody AddressBook addressBook) { addressBookService.save(addressBook); return Result.success(); }  @GetMapping(\"/{id}\") @ApiOperation(\"根据id查询地址\") public Result getById(@PathVariable Long id) { AddressBook addressBook = addressBookService.getById(id); return Result.success(addressBook); }  / 根据id修改地址  @param addressBook @return / @PutMapping @ApiOperation(\"根据id修改地址\") public Result update(@RequestBody AddressBook addressBook) { addressBookService.update(addressBook); return Result.success(); }  / 设置默认地址  @param addressBook @return / @PutMapping(\"/default\") @ApiOperation(\"设置默认地址\") public Result setDefault(@RequestBody AddressBook addressBook) { addressBookService.setDefault(addressBook); return Result.success(); }  / 根据id删除地址  @param id @return / @DeleteMapping @ApiOperation(\"根据id删除地址\") public Result deleteById(Long id) { addressBookService.deleteById(id); return Result.success(); }  / 查询默认地址 / @GetMapping(\"default\") @ApiOperation(\"查询默认地址\") public Result getDefault() { //SQL:select from address_book where user_id = ? and is_default = 1 AddressBook addressBook = new AddressBook(); addressBook.setIsDefault(1); addressBook.setUserId(BaseContext.getCurrentId()); List list = addressBookService.list(addressBook);  if (list != null && list.size() == 1) { return Result.success(list.get(0)); }  return Result.error(\"没有查询到默认地址\"); }  }    "
      },
      {
        "title": "1.3 功能测试",
        "anchor": "13-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 查看控制台sql和数据库中的数据变化 - Swagger接口文档测试 - 前后端联调  我们直接使用 前后端联调 测试：  启动后台服务，编译小程序  登录进入首页-- 进入个人中心-- 进入地址管理      1). 新增收货地址  添加两条收货地址：      查看收货地址：      查看数据库：      2). 设置默认收货地址  设置默认地址：    查看数据库：      3). 删除收货地址  进行编辑：    删除地址：    查看数据库：     "
      },
      {
        "title": "1.4 代码提交",
        "anchor": "14-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "2. 用户下单",
        "anchor": "2-用户下单",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 需求分析和设计",
        "anchor": "21-需求分析和设计",
        "level": 3,
        "text": "  2.1.1 产品原型  用户下单业务说明： 在电商系统中，用户是通过下单的方式通知商家，用户已经购买了商品，需要商家进行备货和发货。 用户下单后会产生订单相关数据，订单数据需要能够体现如下信息：    用户将菜品或者套餐加入购物车后，可以点击购物车中的 \"去结算\" 按钮，页面跳转到订单确认页面，点击 \"去支付\" 按钮则完成下单操作。  用户点餐业务流程(效果图)：        2.1.2 接口设计  接口分析：      接口设计：      2.1.3 表设计  用户下单业务对应的数据表为orders表和order_detail表(一对多关系,一个订单关联多个订单明细)：  表名 含义 说明 ------------ ---------- ------------------------------------------------------------ orders 订单表 主要存储订单的基本信息(如: 订单号、状态、金额、支付方式、下单用户、收件地址等) order_detail 订单明细表 主要存储订单详情信息(如: 该订单关联的套餐及菜品的信息)  具体的表结构如下:  1). orders订单表  字段名 数据类型 说明 备注 ----------------------- ------------- ------------ ----------------------------------------------- id bigint 主键 自增 number varchar(50) 订单号 status int 订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消 user_id bigint 用户id 逻辑外键 address_book_id bigint 地址id 逻辑外键 order_time datetime 下单时间 checkout_time datetime 付款时间 pay_method int 支付方式 1微信支付 2支付宝支付 pay_status tinyint 支付状态 0未支付 1已支付 2退款 amount decimal(10,2) 订单金额 remark varchar(100) 备注信息 phone varchar(11) 手机号 冗余字段 address varchar(255) 详细地址信息 冗余字段 consignee varchar(32) 收货人 冗余字段 cancel_reason varchar(255) 订单取消原因 rejection_reason varchar(255) 拒单原因 cancel_time datetime 订单取消时间 estimated_delivery_time datetime 预计送达时间 delivery_status tinyint 配送状态 1立即送出 0选择具体时间 delivery_time datetime 送达时间 pack_amount int 打包费 tableware_number int 餐具数量 tableware_status tinyint 餐具数量状态 1按餐量提供 0选择具体数量    2). order_detail订单明细表  字段名 数据类型 说明 备注 ----------- ------------- ------------ -------- id bigint 主键 自增 name varchar(32) 商品名称 冗余字段 image varchar(255) 商品图片路径 冗余字段 order_id bigint 订单id 逻辑外键 dish_id bigint 菜品id 逻辑外键 setmeal_id bigint 套餐id 逻辑外键 dish_flavor varchar(50) 菜品口味 number int 商品数量 amount decimal(10,2) 商品单价  说明： 用户提交订单时，需要往订单表orders中插入一条记录，并且需要往order_detail中插入一条或多条记录。   "
      },
      {
        "title": "2.2 代码开发",
        "anchor": "22-代码开发",
        "level": 3,
        "text": "  2.2.1 DTO设计  根据用户下单接口的参数设计DTO：    在sky-pojo模块，OrdersSubmitDTO.java已定义  java package com.sky.dto;  import com.fasterxml.jackson.annotation.JsonFormat; import lombok.Data; import java.io.Serializable; import java.math.BigDecimal; import java.time.LocalDateTime;  @Data public class OrdersSubmitDTO implements Serializable { //地址簿id private Long addressBookId; //付款方式 private int payMethod; //备注 private String remark; //预计送达时间 @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = \"yyyy-MM-dd HH:mm:ss\") private LocalDateTime estimatedDeliveryTime; //配送状态 1立即送出 0选择具体时间 private Integer deliveryStatus; //餐具数量 private Integer tablewareNumber; //餐具数量状态 1按餐量提供 0选择具体数量 private Integer tablewareStatus; //打包费 private Integer packAmount; //总金额 private BigDecimal amount; }     2.2.2 VO设计  根据用户下单接口的返回结果设计VO：    在sky-pojo模块，OrderSubmitVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor; import java.io.Serializable; import java.math.BigDecimal; import java.time.LocalDateTime;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class OrderSubmitVO implements Serializable { //订单id private Long id; //订单号 private String orderNumber; //订单金额 private BigDecimal orderAmount; //下单时间 private LocalDateTime orderTime; }     2.2.3 Controller层  创建OrderController并提供用户下单方法：  java package com.sky.controller.user;  import com.sky.dto.OrdersPaymentDTO; import com.sky.dto.OrdersSubmitDTO; import com.sky.result.PageResult; import com.sky.result.Result; import com.sky.service.OrderService; import com.sky.vo.OrderPaymentVO; import com.sky.vo.OrderSubmitVO; import com.sky.vo.OrderVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation. ;  / 订单 / @RestController(\"userOrderController\") @RequestMapping(\"/user/order\") @Slf4j @Api(tags = \"C端-订单接口\") public class OrderController {  @Autowired private OrderService orderService;  / 用户下单  @param ordersSubmitDTO @return / @PostMapping(\"/submit\") @ApiOperation(\"用户下单\") public Result submit(@RequestBody OrdersSubmitDTO ordersSubmitDTO) { log.info(\"用户下单：{}\", ordersSubmitDTO); OrderSubmitVO orderSubmitVO = orderService.submitOrder(ordersSubmitDTO); return Result.success(orderSubmitVO); }  }     2.2.4 Service层接口  创建OrderService接口，并声明用户下单方法：  java package com.sky.service;  import com.sky.dto. ; import com.sky.vo.OrderSubmitVO;  public interface OrderService {  / 用户下单 @param ordersSubmitDTO @return / OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO); }     2.2.5 Service层实现类  创建OrderServiceImpl实现OrderService接口：  java package com.sky.service.impl;  / 订单 / @Service @Slf4j public class OrderServiceImpl implements OrderService { @Autowired private OrderMapper orderMapper; @Autowired private OrderDetailMapper orderDetailMapper; @Autowired private ShoppingCartMapper shoppingCartMapper; @Autowired private AddressBookMapper addressBookMapper;   / 用户下单  @param ordersSubmitDTO @return / @Transactional public OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO) { //异常情况的处理（收货地址为空、超出配送范围、购物车为空） AddressBook addressBook = addressBookMapper.getById(ordersSubmitDTO.getAddressBookId()); if (addressBook == null) { throw new AddressBookBusinessException(MessageConstant.ADDRESS_BOOK_IS_NULL); }  Long userId = BaseContext.getCurrentId(); ShoppingCart shoppingCart = new ShoppingCart(); shoppingCart.setUserId(userId);  //查询当前用户的购物车数据 List shoppingCartList = shoppingCartMapper.list(shoppingCart); if (shoppingCartList == null shoppingCartList.size() == 0) { throw new ShoppingCartBusinessException(MessageConstant.SHOPPING_CART_IS_NULL); }  //构造订单数据 Orders order = new Orders(); BeanUtils.copyProperties(ordersSubmitDTO,order); order.setPhone(addressBook.getPhone()); order.setAddress(addressBook.getDetail()); order.setConsignee(addressBook.getConsignee()); order.setNumber(String.valueOf(System.currentTimeMillis())); order.setUserId(userId); order.setStatus(Orders.PENDING_PAYMENT); order.setPayStatus(Orders.UN_PAID); order.setOrderTime(LocalDateTime.now());  //向订单表插入1条数据 orderMapper.insert(order);  //订单明细数据 List orderDetailList = new ArrayList< (); for (ShoppingCart cart : shoppingCartList) { OrderDetail orderDetail = new OrderDetail(); BeanUtils.copyProperties(cart, orderDetail); orderDetail.setOrderId(order.getId()); orderDetailList.add(orderDetail); }  //向明细表插入n条数据 orderDetailMapper.insertBatch(orderDetailList);  //清理购物车中的数据 shoppingCartMapper.deleteByUserId(userId);  //封装返回结果 OrderSubmitVO orderSubmitVO = OrderSubmitVO.builder() .id(order.getId()) .orderNumber(order.getNumber()) .orderAmount(order.getAmount()) .orderTime(order.getOrderTime()) .build();  return orderSubmitVO; }  }     2.2.6 Mapper层  创建OrderMapper接口和对应的xml映射文件：  OrderMapper.java  java package com.sky.mapper;  @Mapper public interface OrderMapper { / 插入订单数据 @param order / void insert(Orders order); }    OrderMapper.xml  xml      insert into orders (number, status, user_id, address_book_id, order_time, checkout_time, pay_method, pay_status, amount, remark, phone, address, consignee, estimated_delivery_time, delivery_status, pack_amount, tableware_number, tableware_status) values ( {number}, {status}, {userId}, {addressBookId}, {orderTime}, {checkoutTime}, {payMethod}, {payStatus}, {amount}, {remark}, {phone}, {address}, {consignee}, {estimatedDeliveryTime}, {deliveryStatus}, {packAmount}, {tablewareNumber}, {tablewareStatus})      创建OrderDetailMapper接口和对应的xml映射文件：  OrderDetailMapper.java  java package com.sky.mapper;  import com.sky.entity.OrderDetail; import java.util.List;  @Mapper public interface OrderDetailMapper {  / 批量插入订单明细数据 @param orderDetails / void insertBatch(List orderDetails);  }   OrderDetailMapper.xml  xml      insert into order_detail (name, order_id, dish_id, setmeal_id, dish_flavor, number, amount, image) values  ( {od.name}, {od.orderId}, {od.dishId}, {od.setmealId}, {od.dishFlavor}, {od.number}, {od.amount}, {od.image})        "
      },
      {
        "title": "2.3 功能测试",
        "anchor": "23-功能测试",
        "level": 3,
        "text": "  登录小程序，完成下单操作  下单操作时，同时会删除购物车中的数据    查看shopping_cart表：    去结算-- 去支付      查看orders表：  image-20221214215116451  查看order_detail表：    同时，购物车表中数据删除：     "
      },
      {
        "title": "2.4 代码提交",
        "anchor": "24-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "3. 订单支付",
        "anchor": "3-订单支付",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 微信支付介绍",
        "anchor": "31-微信支付介绍",
        "level": 3,
        "text": "  前面的课程已经实现了用户下单，那接下来就是订单支付，就是完成付款功能。支付大家应该都不陌生了，在现实生活中经常购买商品并且使用支付功能来付款，在付款的时候可能使用比较多的就是微信支付和支付宝支付了。在苍穹外卖项目中，选择的就是 微信支付 这种支付方式。  要实现微信支付就需要注册微信支付的一个商户号，这个商户号是必须要有一家企业并且有正规的营业执照。只有具备了这些资质之后，才可以去注册商户号，才能开通支付权限。  个人不具备这种资质，所以我们在学习微信支付时，最重要的是了解微信支付的流程，并且能够阅读微信官方提供的接口文档，能够和第三方支付平台对接起来就可以了。  微信支付产品：    本项目选择 小程序支付  参考：https://pay.weixin.qq.com/static/product/product_index.shtml    微信支付接入流程：      微信小程序支付时序图：      微信支付相关接口：  JSAPI下单： 商户系统调用该接口在微信支付服务后台生成预支付交易单(对应时序图的第5步)  image-20221214224409174    微信小程序调起支付： 通过JSAPI下单接口获取到发起支付的必要参数prepay_id，然后使用微信支付提供的小程序方法调起小程序支付(对应时序图的第10步)     "
      },
      {
        "title": "3.2 微信支付准备工作",
        "anchor": "32-微信支付准备工作",
        "level": 3,
        "text": "  3.2.1 如何保证数据安全？  完成微信支付有两个关键的步骤：  第一个 就是需要在商户系统当中调用微信后台的一个下单接口，就是生成预支付交易单。  第二个 就是支付成功之后微信后台会给推送消息。  这两个接口数据的安全性，要求其实是非常高的。  解决： 微信提供的方式就是对数据进行加密、解密、签名多种方式。要完成数据加密解密，需要提前准备相应的一些文件，其实就是一些证书。  获取微信支付平台证书、商户私钥文件：    在后绪程序开发过程中，就会使用到这两个文件，需要提前把这两个文件准备好。    3.2.2 如何调用到商户系统？  微信后台会调用到商户系统给推送支付的结果，在这里我们就会遇到一个问题，就是微信后台怎么就能调用到我们这个商户系统呢？因为这个调用过程，其实本质上也是一个HTTP请求。  目前，商户系统它的ip地址就是当前自己电脑的ip地址，只是一个局域网内的ip地址，微信后台无法调用到。  解决： 内网穿透。通过 cpolar软件 可以获得一个临时域名，而这个临时域名是一个公网ip，这样，微信后台就可以请求到商户系统了。  cpolar软件的使用：  1). 下载与安装  下载地址：https://dashboard.cpolar.com/get-started    在资料中已提供，可无需下载。    安装过程中，一直下一步即可，不再演示。  2). cpolar指定authtoken  复制authtoken：    执行命令：      3). 获取临时域名  执行命令：    获取域名：      4). 验证临时域名有效性  访问接口文档  使用localhost:8080访问    使用临时域名访问    证明临时域名生效。   "
      },
      {
        "title": "3.3 代码导入",
        "anchor": "33-代码导入",
        "level": 3,
        "text": "  导入资料中的微信支付功能代码即可    3.3.1 微信支付相关配置  application-dev.yml  yaml sky: wechat: appid: wxcd2e39f677fd30ba secret: 84fbfdf5ea288f0c432d829599083637 mchid : 1561414331 mchSerialNo: 4B3B3DC35414AD50B1B755BAF8DE9CC7CF407606 privateKeyFilePath: D:\\apiclient_key.pem apiV3Key: CZBK51236435wxpay435434323FFDuv3 weChatPayCertFilePath: D:\\wechatpay_166D96F876F45C7D07CE98952A96EC980368ACFC.pem notifyUrl: https://www.weixin.qq.com/wxpay/pay.php refundNotifyUrl: https://www.weixin.qq.com/wxpay/pay.php   application.yml  yaml sky: wechat: appid: ${sky.wechat.appid} secret: ${sky.wechat.secret} mchid : ${sky.wechat.mchid} mchSerialNo: ${sky.wechat.mchSerialNo} privateKeyFilePath: ${sky.wechat.privateKeyFilePath} apiV3Key: ${sky.wechat.apiV3Key} weChatPayCertFilePath: ${sky.wechat.weChatPayCertFilePath} notifyUrl: ${sky.wechat.notifyUrl} refundNotifyUrl: ${sky.wechat.refundNotifyUrl}    WeChatProperties.java：读取配置(已定义)  java package com.sky.properties;  import lombok.Data; import org.springframework.beans.factory.annotation.Value; import org.springframework.boot.context.properties.ConfigurationProperties; import org.springframework.stereotype.Component;  @Component @ConfigurationProperties(prefix = \"sky.wechat\") @Data public class WeChatProperties {  private String appid; //小程序的appid private String secret; //小程序的秘钥 private String mchid; //商户号 private String mchSerialNo; //商户API证书的证书序列号 private String privateKeyFilePath; //商户私钥文件 private String apiV3Key; //证书解密的密钥 private String weChatPayCertFilePath; //平台证书 private String notifyUrl; //支付成功的回调地址 private String refundNotifyUrl; //退款成功的回调地址 }     3.3.2 Mapper层  在OrderMapper.java中添加getByNumberAndUserId和update两个方法  java / 根据订单号和用户id查询订单 @param orderNumber @param userId / @Select(\"select from orders where number = {orderNumber} and user_id= {userId}\") Orders getByNumberAndUserId(String orderNumber, Long userId);  / 修改订单信息 @param orders / void update(Orders orders);   在OrderMapper.xml中添加  xml  update orders   cancel_reason= {cancelReason},   rejection_reason= {rejectionReason},   cancel_time= {cancelTime},   pay_status= {payStatus},   pay_method= {payMethod},   checkout_time= {checkoutTime},   status = {status},   delivery_time = {deliveryTime}   where id = {id}      3.3.3 Service层  在OrderService.java中添加payment和paySuccess两个方法定义  java / 订单支付 @param ordersPaymentDTO @return / OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) throws Exception;  / 支付成功，修改订单状态 @param outTradeNo / void paySuccess(String outTradeNo);   在OrderServiceImpl.java中实现payment和paySuccess两个方法  java @Autowired private UserMapper userMapper; @Autowired private WeChatPayUtil weChatPayUtil; / 订单支付  @param ordersPaymentDTO @return / public OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) throws Exception { // 当前登录用户id Long userId = BaseContext.getCurrentId(); User user = userMapper.getById(userId);  //调用微信支付接口，生成预支付交易单 JSONObject jsonObject = weChatPayUtil.pay( ordersPaymentDTO.getOrderNumber(), //商户订单号 new BigDecimal(0.01), //支付金额，单位 元 \"苍穹外卖订单\", //商品描述 user.getOpenid() //微信用户的openid );  if (jsonObject.getString(\"code\") != null && jsonObject.getString(\"code\").equals(\"ORDERPAID\")) { throw new OrderBusinessException(\"该订单已支付\"); }  OrderPaymentVO vo = jsonObject.toJavaObject(OrderPaymentVO.class); vo.setPackageStr(jsonObject.getString(\"package\"));  return vo; }  / 支付成功，修改订单状态  @param outTradeNo / public void paySuccess(String outTradeNo) { // 当前登录用户id Long userId = BaseContext.getCurrentId();  // 根据订单号查询当前用户的订单 Orders ordersDB = orderMapper.getByNumberAndUserId(outTradeNo, userId);  // 根据订单id更新订单的状态、支付方式、支付状态、结账时间 Orders orders = Orders.builder() .id(ordersDB.getId()) .status(Orders.TO_BE_CONFIRMED) .payStatus(Orders.PAID) .checkoutTime(LocalDateTime.now()) .build();  orderMapper.update(orders); }     3.3.4 Controller层  在OrderController.java中添加payment方法  java / 订单支付  @param ordersPaymentDTO @return / @PutMapping(\"/payment\") @ApiOperation(\"订单支付\") public Result payment(@RequestBody OrdersPaymentDTO ordersPaymentDTO) throws Exception { log.info(\"订单支付：{}\", ordersPaymentDTO); OrderPaymentVO orderPaymentVO = orderService.payment(ordersPaymentDTO); log.info(\"生成预支付交易单：{}\", orderPaymentVO); return Result.success(orderPaymentVO); }   PayNotifyController.java  java package com.sky.controller.notify;  import com.alibaba.druid.support.json.JSONUtils; import com.alibaba.fastjson.JSON; import com.alibaba.fastjson.JSONObject; import com.sky.annotation.IgnoreToken; import com.sky.properties.WeChatProperties; import com.sky.service.OrderService; import com.wechat.pay.contrib.apache.httpclient.util.AesUtil; import lombok.extern.slf4j.Slf4j; import org.apache.http.entity.ContentType; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import javax.servlet.http.HttpServletRequest; import javax.servlet.http.HttpServletResponse; import java.io.BufferedReader; import java.nio.charset.StandardCharsets; import java.util.HashMap;  / 支付回调相关接口 / @RestController @RequestMapping(\"/notify\") @Slf4j public class PayNotifyController { @Autowired private OrderService orderService; @Autowired private WeChatProperties weChatProperties;  / 支付成功回调  @param request / @RequestMapping(\"/paySuccess\") public void paySuccessNotify(HttpServletRequest request, HttpServletResponse response) throws Exception { //读取数据 String body = readData(request); log.info(\"支付成功回调：{}\", body);  //数据解密 String plainText = decryptData(body); log.info(\"解密后的文本：{}\", plainText);  JSONObject jsonObject = JSON.parseObject(plainText); String outTradeNo = jsonObject.getString(\"out_trade_no\");//商户平台订单号 String transactionId = jsonObject.getString(\"transaction_id\");//微信支付交易号  log.info(\"商户平台订单号：{}\", outTradeNo); log.info(\"微信支付交易号：{}\", transactionId);  //业务处理，修改订单状态、来单提醒 orderService.paySuccess(outTradeNo);  //给微信响应 responseToWeixin(response); }  / 读取数据  @param request @return @throws Exception / private String readData(HttpServletRequest request) throws Exception { BufferedReader reader = request.getReader(); StringBuilder result = new StringBuilder(); String line = null; while ((line = reader.readLine()) != null) { if (result.length() 0) { result.append(\"\\n\"); } result.append(line); } return result.toString(); }  / 数据解密  @param body @return @throws Exception / private String decryptData(String body) throws Exception { JSONObject resultObject = JSON.parseObject(body); JSONObject resource = resultObject.getJSONObject(\"resource\"); String ciphertext = resource.getString(\"ciphertext\"); String nonce = resource.getString(\"nonce\"); String associatedData = resource.getString(\"associated_data\");  AesUtil aesUtil = new AesUtil(weChatProperties.getApiV3Key().getBytes(StandardCharsets.UTF_8)); //密文解密 String plainText = aesUtil.decryptToString(associatedData.getBytes(StandardCharsets.UTF_8), nonce.getBytes(StandardCharsets.UTF_8), ciphertext);  return plainText; }  / 给微信响应 @param response / private void responseToWeixin(HttpServletResponse response) throws Exception{ response.setStatus(200); HashMap map = new HashMap< (); map.put(\"code\", \"SUCCESS\"); map.put(\"message\", \"SUCCESS\"); response.setHeader(\"Content-type\", ContentType.APPLICATION_JSON.toString()); response.getOutputStream().write(JSONUtils.toJSONString(map).getBytes(StandardCharsets.UTF_8)); response.flushBuffer(); } }    "
      },
      {
        "title": "3.4 功能测试",
        "anchor": "34-功能测试",
        "level": 3,
        "text": "  测试过程中，可通过断点方式查看后台每一步执行情况。  下单：    去支付：    确认支付：    进行扫码支付即可。   "
      },
      {
        "title": "3.5 代码提交",
        "anchor": "35-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。     "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day08 课程内容 - 导入地址簿功能代码 - 用户下单 - 订单支付 功能实现： 用户下单 、 订单支付 用户下单效果图： 订单支付效果图： 1. 导入地址簿功能代码 1.1 需求分析和设计 1.1.1 产品原型 地址簿，指的是消费者用户的地址信息，用户登录成功后可以维护自己的地址信息。同一个用户可以有多个地址信息，但是只能有一个 默认地址 。 效果图： 对于地址簿管理，我们需要实现以下几个功能： - 查询地址列表 - 新增地址 - 修改地址 - 删除地址 - 设置默认地址 - 查询默认地址 1.1.2 接口设计 根据上述原型图先 粗粒度 设计接口，共包含7个接口。 接口设计： - 新增地址 - 查询登录用户所有地址 - 查询默认地址 - 根据id修改地址 - 根据id删除地址 - 根据id查询地址 - 设置默认地址 接下来 细粒度 分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。 1). 新增地址 2). 查询登录用户所有地址 3). 查询默认地址 4). 修改地址 5). 根据id删除地址 6). 根据id查询地址 7). 设置默认地址 1.1.3 表设计 用户的地址信息会存储在address_book表，即地址簿表中。具体表结构如下： 字段名 数据类型 说明 备注 ------------- ------------ ------------ -------------- id bigint 主键 自增 user_id bigint 用户id 逻辑外键 consignee varchar(50) 收货人 sex varchar(2) 性别 phone varchar(11) 手机号 province_code varchar(12) 省份编码 province_name varchar(32) 省份名称 city_code varchar(12) 城市编码 city_name varchar(32) 城市名称 district_code varchar(12) 区县编码 district_name varchar(32) 区县名称 detail varchar(200) 详细地址信息 具体到门牌号 label varchar(100) 标签 公司、家、学校 is_default tinyint(1) 是否默认地址 1是 0否 这里面有一个字段is_default，实际上我们在设置默认地址时，只需要更新这个字段就可以了。 1.2 代码导入 对于这一类的单表的增删改查，我们已经写过很多了，基本的开发思路都是一样的，那么本小节的用户地址簿管理的增删改查功能，我们就不再一一实现了，基本的代码我们都已经提供了，直接导入进来，做一个测试即可。 导入课程资料中的地址簿模块功能代码： 进入到sky-server模块中 1.2.1 mapper层 创建addressbookmapper.java java package com.sky.mapper; import com.sky.entity.addressbook; import org.apache.ibatis.annotations. ; import java.util.list; @mapper public interface addressbookmapper { / 条件查询 @param addressbook @return / list list(addressbook addressbook); / 新增 @param addressbook / @insert(\"insert into address_book\" + \" (user_id, consignee, phone, sex, province_code, province_name, city_code, city_name, district_code,\" + \" district_name, detail, label, is_default)\" + \" values ( {userid}, {consignee}, {phone}, {sex}, {provincecode}, {provincename}, {citycode}, {cityname},\" + \" {districtcode}, {districtname}, {detail}, {label}, {isdefault})\") void insert(addressbook addressbook); / 根据id查询 @param id @return / @select(\"select from address_book where id = {id}\") addressbook getbyid(long id); / 根据id修改 @param addressbook / void update(addressbook addressbook); / 根据 用户id修改 是否默认地址 @param addressbook / @update(\"update address_book set is_default = {isdefault} where user_id = {userid}\") void updateisdefaultbyuserid(addressbook addressbook); / 根据id删除地址 @param id / @delete(\"delete from address_book where id = {id}\") void deletebyid(long id); } 创建addressbookmapper.xml xml select from address_book and user_id = {userid} and phone = {phone} and is_default = {isdefault} update address_book consignee = {consignee}, sex = {sex}, phone = {phone}, detail = {detail}, label = {label}, is_default = {isdefault}, where id = {id} 1.2.2 service层 创建addressbookservice.java java package com.sky.service; import com.sky.entity.addressbook; import java.util.list; public interface addressbookservice { list list(addressbook addressbook); void save(addressbook addressbook); addressbook getbyid(long id); void update(addressbook addressbook); void setdefault(addressbook addressbook); void deletebyid(long id); } 创建addressbookserviceimpl.java java package com.sky.service.impl; import com.sky.context.basecontext; import com.sky.entity.addressbook; import com.sky.mapper.addressbookmapper; import com.sky.service.addressbookservice; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import org.springframework.transaction.annotation.transactional; import java.util.list; @service @slf4j public class addressbookserviceimpl implements addressbookservice { @autowired private addressbookmapper addressbookmapper; / 条件查询 @param addressbook @return / public list list(addressbook addressbook) { return addressbookmapper.list(addressbook); } / 新增地址 @param addressbook / public void save(addressbook addressbook) { addressbook.setuserid(basecontext.getcurrentid()); addressbook.setisdefault(0); addressbookmapper.insert(addressbook); } / 根据id查询 @param id @return / public addressbook getbyid(long id) { addressbook addressbook = addressbookmapper.getbyid(id); return addressbook; } / 根据id修改地址 @param addressbook / public void update(addressbook addressbook) { addressbookmapper.update(addressbook); } / 设置默认地址 @param addressbook / @transactional public void setdefault(addressbook addressbook) { //1、将当前用户的所有地址修改为非默认地址 update address_book set is_default = ? where user_id = ? addressbook.setisdefault(0); addressbook.setuserid(basecontext.getcurrentid()); addressbookmapper.updateisdefaultbyuserid(addressbook); //2、将当前地址改为默认地址 update address_book set is_default = ? where id = ? addressbook.setisdefault(1); addressbookmapper.update(addressbook); } / 根据id删除地址 @param id / public void deletebyid(long id) { addressbookmapper.deletebyid(id); } } 1.2.3 controller层 java package com.sky.controller.user; import com.sky.context.basecontext; import com.sky.entity.addressbook; import com.sky.result.result; import com.sky.service.addressbookservice; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation. ; import java.util.list; @restcontroller @requestmapping(\"/user/addressbook\") @api(tags = \"c端地址簿接口\") public class addressbookcontroller { @autowired private addressbookservice addressbookservice; / 查询当前登录用户的所有地址信息 @return / @getmapping(\"/list\") @apioperation(\"查询当前登录用户的所有地址信息\") public result list() { addressbook addressbook = new addressbook(); addressbook.setuserid(basecontext.getcurrentid()); list list = addressbookservice.list(addressbook); return result.success(list); } / 新增地址 @param addressbook @return / @postmapping @apioperation(\"新增地址\") public result save(@requestbody addressbook addressbook) { addressbookservice.save(addressbook); return result.success(); } @getmapping(\"/{id}\") @apioperation(\"根据id查询地址\") public result getbyid(@pathvariable long id) { addressbook addressbook = addressbookservice.getbyid(id); return result.success(addressbook); } / 根据id修改地址 @param addressbook @return / @putmapping @apioperation(\"根据id修改地址\") public result update(@requestbody addressbook addressbook) { addressbookservice.update(addressbook); return result.success(); } / 设置默认地址 @param addressbook @return / @putmapping(\"/default\") @apioperation(\"设置默认地址\") public result setdefault(@requestbody addressbook addressbook) { addressbookservice.setdefault(addressbook); return result.success(); } / 根据id删除地址 @param id @return / @deletemapping @apioperation(\"根据id删除地址\") public result deletebyid(long id) { addressbookservice.deletebyid(id); return result.success(); } / 查询默认地址 / @getmapping(\"default\") @apioperation(\"查询默认地址\") public result getdefault() { //sql:select from address_book where user_id = ? and is_default = 1 addressbook addressbook = new addressbook(); addressbook.setisdefault(1); addressbook.setuserid(basecontext.getcurrentid()); list list = addressbookservice.list(addressbook); if (list != null && list.size() == 1) { return result.success(list.get(0)); } return result.error(\"没有查询到默认地址\"); } } 1.3 功能测试 可以通过如下方式进行测试： - 查看控制台sql和数据库中的数据变化 - swagger接口文档测试 - 前后端联调 我们直接使用 前后端联调 测试： 启动后台服务，编译小程序 登录进入首页-- 进入个人中心-- 进入地址管理 1). 新增收货地址 添加两条收货地址： 查看收货地址： 查看数据库： 2). 设置默认收货地址 设置默认地址： 查看数据库： 3). 删除收货地址 进行编辑： 删除地址： 查看数据库： 1.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 2. 用户下单 2.1 需求分析和设计 2.1.1 产品原型 用户下单业务说明： 在电商系统中，用户是通过下单的方式通知商家，用户已经购买了商品，需要商家进行备货和发货。 用户下单后会产生订单相关数据，订单数据需要能够体现如下信息： 用户将菜品或者套餐加入购物车后，可以点击购物车中的 \"去结算\" 按钮，页面跳转到订单确认页面，点击 \"去支付\" 按钮则完成下单操作。 用户点餐业务流程(效果图)： 2.1.2 接口设计 接口分析： 接口设计： 2.1.3 表设计 用户下单业务对应的数据表为orders表和order_detail表(一对多关系,一个订单关联多个订单明细)： 表名 含义 说明 ------------ ---------- ------------------------------------------------------------ orders 订单表 主要存储订单的基本信息(如: 订单号、状态、金额、支付方式、下单用户、收件地址等) order_detail 订单明细表 主要存储订单详情信息(如: 该订单关联的套餐及菜品的信息) 具体的表结构如下: 1). orders订单表 字段名 数据类型 说明 备注 ----------------------- ------------- ------------ ----------------------------------------------- id bigint 主键 自增 number varchar(50) 订单号 status int 订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消 user_id bigint 用户id 逻辑外键 address_book_id bigint 地址id 逻辑外键 order_time datetime 下单时间 checkout_time datetime 付款时间 pay_method int 支付方式 1微信支付 2支付宝支付 pay_status tinyint 支付状态 0未支付 1已支付 2退款 amount decimal(10,2) 订单金额 remark varchar(100) 备注信息 phone varchar(11) 手机号 冗余字段 address varchar(255) 详细地址信息 冗余字段 consignee varchar(32) 收货人 冗余字段 cancel_reason varchar(255) 订单取消原因 rejection_reason varchar(255) 拒单原因 cancel_time datetime 订单取消时间 estimated_delivery_time datetime 预计送达时间 delivery_status tinyint 配送状态 1立即送出 0选择具体时间 delivery_time datetime 送达时间 pack_amount int 打包费 tableware_number int 餐具数量 tableware_status tinyint 餐具数量状态 1按餐量提供 0选择具体数量 2). order_detail订单明细表 字段名 数据类型 说明 备注 ----------- ------------- ------------ -------- id bigint 主键 自增 name varchar(32) 商品名称 冗余字段 image varchar(255) 商品图片路径 冗余字段 order_id bigint 订单id 逻辑外键 dish_id bigint 菜品id 逻辑外键 setmeal_id bigint 套餐id 逻辑外键 dish_flavor varchar(50) 菜品口味 number int 商品数量 amount decimal(10,2) 商品单价 说明： 用户提交订单时，需要往订单表orders中插入一条记录，并且需要往order_detail中插入一条或多条记录。 2.2 代码开发 2.2.1 dto设计 根据用户下单接口的参数设计dto： 在sky-pojo模块，orderssubmitdto.java已定义 java package com.sky.dto; import com.fasterxml.jackson.annotation.jsonformat; import lombok.data; import java.io.serializable; import java.math.bigdecimal; import java.time.localdatetime; @data public class orderssubmitdto implements serializable { //地址簿id private long addressbookid; //付款方式 private int paymethod; //备注 private string remark; //预计送达时间 @jsonformat(shape = jsonformat.shape.string, pattern = \"yyyy-mm-dd hh:mm:ss\") private localdatetime estimateddeliverytime; //配送状态 1立即送出 0选择具体时间 private integer deliverystatus; //餐具数量 private integer tablewarenumber; //餐具数量状态 1按餐量提供 0选择具体数量 private integer tablewarestatus; //打包费 private integer packamount; //总金额 private bigdecimal amount; } 2.2.2 vo设计 根据用户下单接口的返回结果设计vo： 在sky-pojo模块，ordersubmitvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; import java.math.bigdecimal; import java.time.localdatetime; @data @builder @noargsconstructor @allargsconstructor public class ordersubmitvo implements serializable { //订单id private long id; //订单号 private string ordernumber; //订单金额 private bigdecimal orderamount; //下单时间 private localdatetime ordertime; } 2.2.3 controller层 创建ordercontroller并提供用户下单方法： java package com.sky.controller.user; import com.sky.dto.orderspaymentdto; import com.sky.dto.orderssubmitdto; import com.sky.result.pageresult; import com.sky.result.result; import com.sky.service.orderservice; import com.sky.vo.orderpaymentvo; import com.sky.vo.ordersubmitvo; import com.sky.vo.ordervo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation. ; / 订单 / @restcontroller(\"userordercontroller\") @requestmapping(\"/user/order\") @slf4j @api(tags = \"c端-订单接口\") public class ordercontroller { @autowired private orderservice orderservice; / 用户下单 @param orderssubmitdto @return / @postmapping(\"/submit\") @apioperation(\"用户下单\") public result submit(@requestbody orderssubmitdto orderssubmitdto) { log.info(\"用户下单：{}\", orderssubmitdto); ordersubmitvo ordersubmitvo = orderservice.submitorder(orderssubmitdto); return result.success(ordersubmitvo); } } 2.2.4 service层接口 创建orderservice接口，并声明用户下单方法： java package com.sky.service; import com.sky.dto. ; import com.sky.vo.ordersubmitvo; public interface orderservice { / 用户下单 @param orderssubmitdto @return / ordersubmitvo submitorder(orderssubmitdto orderssubmitdto); } 2.2.5 service层实现类 创建orderserviceimpl实现orderservice接口： java package com.sky.service.impl; / 订单 / @service @slf4j public class orderserviceimpl implements orderservice { @autowired private ordermapper ordermapper; @autowired private orderdetailmapper orderdetailmapper; @autowired private shoppingcartmapper shoppingcartmapper; @autowired private addressbookmapper addressbookmapper; / 用户下单 @param orderssubmitdto @return / @transactional public ordersubmitvo submitorder(orderssubmitdto orderssubmitdto) { //异常情况的处理（收货地址为空、超出配送范围、购物车为空） addressbook addressbook = addressbookmapper.getbyid(orderssubmitdto.getaddressbookid()); if (addressbook == null) { throw new addressbookbusinessexception(messageconstant.address_book_is_null); } long userid = basecontext.getcurrentid(); shoppingcart shoppingcart = new shoppingcart(); shoppingcart.setuserid(userid); //查询当前用户的购物车数据 list shoppingcartlist = shoppingcartmapper.list(shoppingcart); if (shoppingcartlist == null shoppingcartlist.size() == 0) { throw new shoppingcartbusinessexception(messageconstant.shopping_cart_is_null); } //构造订单数据 orders order = new orders(); beanutils.copyproperties(orderssubmitdto,order); order.setphone(addressbook.getphone()); order.setaddress(addressbook.getdetail()); order.setconsignee(addressbook.getconsignee()); order.setnumber(string.valueof(system.currenttimemillis())); order.setuserid(userid); order.setstatus(orders.pending_payment); order.setpaystatus(orders.un_paid); order.setordertime(localdatetime.now()); //向订单表插入1条数据 ordermapper.insert(order); //订单明细数据 list orderdetaillist = new arraylist< (); for (shoppingcart cart : shoppingcartlist) { orderdetail orderdetail = new orderdetail(); beanutils.copyproperties(cart, orderdetail); orderdetail.setorderid(order.getid()); orderdetaillist.add(orderdetail); } //向明细表插入n条数据 orderdetailmapper.insertbatch(orderdetaillist); //清理购物车中的数据 shoppingcartmapper.deletebyuserid(userid); //封装返回结果 ordersubmitvo ordersubmitvo = ordersubmitvo.builder() .id(order.getid()) .ordernumber(order.getnumber()) .orderamount(order.getamount()) .ordertime(order.getordertime()) .build(); return ordersubmitvo; } } 2.2.6 mapper层 创建ordermapper接口和对应的xml映射文件： ordermapper.java java package com.sky.mapper; @mapper public interface ordermapper { / 插入订单数据 @param order / void insert(orders order); } ordermapper.xml xml insert into orders (number, status, user_id, address_book_id, order_time, checkout_time, pay_method, pay_status, amount, remark, phone, address, consignee, estimated_delivery_time, delivery_status, pack_amount, tableware_number, tableware_status) values ( {number}, {status}, {userid}, {addressbookid}, {ordertime}, {checkouttime}, {paymethod}, {paystatus}, {amount}, {remark}, {phone}, {address}, {consignee}, {estimateddeliverytime}, {deliverystatus}, {packamount}, {tablewarenumber}, {tablewarestatus}) 创建orderdetailmapper接口和对应的xml映射文件： orderdetailmapper.java java package com.sky.mapper; import com.sky.entity.orderdetail; import java.util.list; @mapper public interface orderdetailmapper { / 批量插入订单明细数据 @param orderdetails / void insertbatch(list orderdetails); } orderdetailmapper.xml xml insert into order_detail (name, order_id, dish_id, setmeal_id, dish_flavor, number, amount, image) values ( {od.name}, {od.orderid}, {od.dishid}, {od.setmealid}, {od.dishflavor}, {od.number}, {od.amount}, {od.image}) 2.3 功能测试 登录小程序，完成下单操作 下单操作时，同时会删除购物车中的数据 查看shopping_cart表： 去结算-- 去支付 查看orders表： image-20221214215116451 查看order_detail表： 同时，购物车表中数据删除： 2.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 3. 订单支付 3.1 微信支付介绍 前面的课程已经实现了用户下单，那接下来就是订单支付，就是完成付款功能。支付大家应该都不陌生了，在现实生活中经常购买商品并且使用支付功能来付款，在付款的时候可能使用比较多的就是微信支付和支付宝支付了。在苍穹外卖项目中，选择的就是 微信支付 这种支付方式。 要实现微信支付就需要注册微信支付的一个商户号，这个商户号是必须要有一家企业并且有正规的营业执照。只有具备了这些资质之后，才可以去注册商户号，才能开通支付权限。 个人不具备这种资质，所以我们在学习微信支付时，最重要的是了解微信支付的流程，并且能够阅读微信官方提供的接口文档，能够和第三方支付平台对接起来就可以了。 微信支付产品： 本项目选择 小程序支付 参考：https://pay.weixin.qq.com/static/product/product_index.shtml 微信支付接入流程： 微信小程序支付时序图： 微信支付相关接口： jsapi下单： 商户系统调用该接口在微信支付服务后台生成预支付交易单(对应时序图的第5步) image-20221214224409174 微信小程序调起支付： 通过jsapi下单接口获取到发起支付的必要参数prepay_id，然后使用微信支付提供的小程序方法调起小程序支付(对应时序图的第10步) 3.2 微信支付准备工作 3.2.1 如何保证数据安全？ 完成微信支付有两个关键的步骤： 第一个 就是需要在商户系统当中调用微信后台的一个下单接口，就是生成预支付交易单。 第二个 就是支付成功之后微信后台会给推送消息。 这两个接口数据的安全性，要求其实是非常高的。 解决： 微信提供的方式就是对数据进行加密、解密、签名多种方式。要完成数据加密解密，需要提前准备相应的一些文件，其实就是一些证书。 获取微信支付平台证书、商户私钥文件： 在后绪程序开发过程中，就会使用到这两个文件，需要提前把这两个文件准备好。 3.2.2 如何调用到商户系统？ 微信后台会调用到商户系统给推送支付的结果，在这里我们就会遇到一个问题，就是微信后台怎么就能调用到我们这个商户系统呢？因为这个调用过程，其实本质上也是一个http请求。 目前，商户系统它的ip地址就是当前自己电脑的ip地址，只是一个局域网内的ip地址，微信后台无法调用到。 解决： 内网穿透。通过 cpolar软件 可以获得一个临时域名，而这个临时域名是一个公网ip，这样，微信后台就可以请求到商户系统了。 cpolar软件的使用： 1). 下载与安装 下载地址：https://dashboard.cpolar.com/get-started 在资料中已提供，可无需下载。 安装过程中，一直下一步即可，不再演示。 2). cpolar指定authtoken 复制authtoken： 执行命令： 3). 获取临时域名 执行命令： 获取域名： 4). 验证临时域名有效性 访问接口文档 使用localhost:8080访问 使用临时域名访问 证明临时域名生效。 3.3 代码导入 导入资料中的微信支付功能代码即可 3.3.1 微信支付相关配置 application-dev.yml yaml sky: wechat: appid: wxcd2e39f677fd30ba secret: 84fbfdf5ea288f0c432d829599083637 mchid : 1561414331 mchserialno: 4b3b3dc35414ad50b1b755baf8de9cc7cf407606 privatekeyfilepath: d:\\apiclient_key.pem apiv3key: czbk51236435wxpay435434323ffduv3 wechatpaycertfilepath: d:\\wechatpay_166d96f876f45c7d07ce98952a96ec980368acfc.pem notifyurl: https://www.weixin.qq.com/wxpay/pay.php refundnotifyurl: https://www.weixin.qq.com/wxpay/pay.php application.yml yaml sky: wechat: appid: ${sky.wechat.appid} secret: ${sky.wechat.secret} mchid : ${sky.wechat.mchid} mchserialno: ${sky.wechat.mchserialno} privatekeyfilepath: ${sky.wechat.privatekeyfilepath} apiv3key: ${sky.wechat.apiv3key} wechatpaycertfilepath: ${sky.wechat.wechatpaycertfilepath} notifyurl: ${sky.wechat.notifyurl} refundnotifyurl: ${sky.wechat.refundnotifyurl} wechatproperties.java：读取配置(已定义) java package com.sky.properties; import lombok.data; import org.springframework.beans.factory.annotation.value; import org.springframework.boot.context.properties.configurationproperties; import org.springframework.stereotype.component; @component @configurationproperties(prefix = \"sky.wechat\") @data public class wechatproperties { private string appid; //小程序的appid private string secret; //小程序的秘钥 private string mchid; //商户号 private string mchserialno; //商户api证书的证书序列号 private string privatekeyfilepath; //商户私钥文件 private string apiv3key; //证书解密的密钥 private string wechatpaycertfilepath; //平台证书 private string notifyurl; //支付成功的回调地址 private string refundnotifyurl; //退款成功的回调地址 } 3.3.2 mapper层 在ordermapper.java中添加getbynumberanduserid和update两个方法 java / 根据订单号和用户id查询订单 @param ordernumber @param userid / @select(\"select from orders where number = {ordernumber} and user_id= {userid}\") orders getbynumberanduserid(string ordernumber, long userid); / 修改订单信息 @param orders / void update(orders orders); 在ordermapper.xml中添加 xml update orders cancel_reason= {cancelreason}, rejection_reason= {rejectionreason}, cancel_time= {canceltime}, pay_status= {paystatus}, pay_method= {paymethod}, checkout_time= {checkouttime}, status = {status}, delivery_time = {deliverytime} where id = {id} 3.3.3 service层 在orderservice.java中添加payment和paysuccess两个方法定义 java / 订单支付 @param orderspaymentdto @return / orderpaymentvo payment(orderspaymentdto orderspaymentdto) throws exception; / 支付成功，修改订单状态 @param outtradeno / void paysuccess(string outtradeno); 在orderserviceimpl.java中实现payment和paysuccess两个方法 java @autowired private usermapper usermapper; @autowired private wechatpayutil wechatpayutil; / 订单支付 @param orderspaymentdto @return / public orderpaymentvo payment(orderspaymentdto orderspaymentdto) throws exception { // 当前登录用户id long userid = basecontext.getcurrentid(); user user = usermapper.getbyid(userid); //调用微信支付接口，生成预支付交易单 jsonobject jsonobject = wechatpayutil.pay( orderspaymentdto.getordernumber(), //商户订单号 new bigdecimal(0.01), //支付金额，单位 元 \"苍穹外卖订单\", //商品描述 user.getopenid() //微信用户的openid ); if (jsonobject.getstring(\"code\") != null && jsonobject.getstring(\"code\").equals(\"orderpaid\")) { throw new orderbusinessexception(\"该订单已支付\"); } orderpaymentvo vo = jsonobject.tojavaobject(orderpaymentvo.class); vo.setpackagestr(jsonobject.getstring(\"package\")); return vo; } / 支付成功，修改订单状态 @param outtradeno / public void paysuccess(string outtradeno) { // 当前登录用户id long userid = basecontext.getcurrentid(); // 根据订单号查询当前用户的订单 orders ordersdb = ordermapper.getbynumberanduserid(outtradeno, userid); // 根据订单id更新订单的状态、支付方式、支付状态、结账时间 orders orders = orders.builder() .id(ordersdb.getid()) .status(orders.to_be_confirmed) .paystatus(orders.paid) .checkouttime(localdatetime.now()) .build(); ordermapper.update(orders); } 3.3.4 controller层 在ordercontroller.java中添加payment方法 java / 订单支付 @param orderspaymentdto @return / @putmapping(\"/payment\") @apioperation(\"订单支付\") public result payment(@requestbody orderspaymentdto orderspaymentdto) throws exception { log.info(\"订单支付：{}\", orderspaymentdto); orderpaymentvo orderpaymentvo = orderservice.payment(orderspaymentdto); log.info(\"生成预支付交易单：{}\", orderpaymentvo); return result.success(orderpaymentvo); } paynotifycontroller.java java package com.sky.controller.notify; import com.alibaba.druid.support.json.jsonutils; import com.alibaba.fastjson.json; import com.alibaba.fastjson.jsonobject; import com.sky.annotation.ignoretoken; import com.sky.properties.wechatproperties; import com.sky.service.orderservice; import com.wechat.pay.contrib.apache.httpclient.util.aesutil; import lombok.extern.slf4j.slf4j; import org.apache.http.entity.contenttype; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import javax.servlet.http.httpservletrequest; import javax.servlet.http.httpservletresponse; import java.io.bufferedreader; import java.nio.charset.standardcharsets; import java.util.hashmap; / 支付回调相关接口 / @restcontroller @requestmapping(\"/notify\") @slf4j public class paynotifycontroller { @autowired private orderservice orderservice; @autowired private wechatproperties wechatproperties; / 支付成功回调 @param request / @requestmapping(\"/paysuccess\") public void paysuccessnotify(httpservletrequest request, httpservletresponse response) throws exception { //读取数据 string body = readdata(request); log.info(\"支付成功回调：{}\", body); //数据解密 string plaintext = decryptdata(body); log.info(\"解密后的文本：{}\", plaintext); jsonobject jsonobject = json.parseobject(plaintext); string outtradeno = jsonobject.getstring(\"out_trade_no\");//商户平台订单号 string transactionid = jsonobject.getstring(\"transaction_id\");//微信支付交易号 log.info(\"商户平台订单号：{}\", outtradeno); log.info(\"微信支付交易号：{}\", transactionid); //业务处理，修改订单状态、来单提醒 orderservice.paysuccess(outtradeno); //给微信响应 responsetoweixin(response); } / 读取数据 @param request @return @throws exception / private string readdata(httpservletrequest request) throws exception { bufferedreader reader = request.getreader(); stringbuilder result = new stringbuilder(); string line = null; while ((line = reader.readline()) != null) { if (result.length() 0) { result.append(\"\\n\"); } result.append(line); } return result.tostring(); } / 数据解密 @param body @return @throws exception / private string decryptdata(string body) throws exception { jsonobject resultobject = json.parseobject(body); jsonobject resource = resultobject.getjsonobject(\"resource\"); string ciphertext = resource.getstring(\"ciphertext\"); string nonce = resource.getstring(\"nonce\"); string associateddata = resource.getstring(\"associated_data\"); aesutil aesutil = new aesutil(wechatproperties.getapiv3key().getbytes(standardcharsets.utf_8)); //密文解密 string plaintext = aesutil.decrypttostring(associateddata.getbytes(standardcharsets.utf_8), nonce.getbytes(standardcharsets.utf_8), ciphertext); return plaintext; } / 给微信响应 @param response / private void responsetoweixin(httpservletresponse response) throws exception{ response.setstatus(200); hashmap map = new hashmap< (); map.put(\"code\", \"success\"); map.put(\"message\", \"success\"); response.setheader(\"content-type\", contenttype.application_json.tostring()); response.getoutputstream().write(jsonutils.tojsonstring(map).getbytes(standardcharsets.utf_8)); response.flushbuffer(); } } 3.4 功能测试 测试过程中，可通过断点方式查看后台每一步执行情况。 下单： 去支付： 确认支付： 进行扫码支付即可。 3.5 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-ea081c3d7022",
    "version": "75779b24fbcd",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day10/苍穹外卖-day10.md",
    "title": "苍穹外卖-day10",
    "description": "- Spring Task - 订单状态定时处理 - WebSocket - 来单提醒 - 客户催单",
    "subject": "projects",
    "kind": "项目原文",
    "order": 20,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 26,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - Spring Task - 订单状态定时处理 - WebSocket - 来单提醒 - 客户催单    功能实现： 订单状态定时处理 、 来单提醒 和 客户催单  订单状态定时处理：      来单提醒：      客户催单：     "
      },
      {
        "title": "1. Spring Task",
        "anchor": "1-spring-task",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 介绍",
        "anchor": "11-介绍",
        "level": 3,
        "text": "  Spring Task 是Spring框架提供的任务调度工具，可以按照约定的时间自动执行某个代码逻辑。  定位： 定时任务框架  作用： 定时自动执行某段Java代码    为什么要在Java程序中使用Spring Task？  应用场景：  1). 信用卡每月还款提醒      2). 银行贷款每月还款提醒      3). 火车票售票系统处理未支付订单      4). 入职纪念日为用户发送通知      强调： 只要是需要定时处理的场景都可以使用Spring Task   "
      },
      {
        "title": "1.2 cron表达式",
        "anchor": "12-cron表达式",
        "level": 3,
        "text": "  cron表达式 其实就是一个字符串，通过cron表达式可以 定义任务触发的时间  构成规则： 分为6或7个域，由空格分隔开，每个域代表一个含义  每个域的含义分别为：秒、分钟、小时、日、月、周、年(可选)  举例：  2022年10月12日上午9点整 对应的cron表达式为： 0 0 9 12 10 ? 2022    说明： 一般 日 和 周 的值不同时设置，其中一个设置，另一个用？表示。    比如： 描述2月份的最后一天，最后一天具体是几号呢？可能是28号，也有可能是29号，所以就不能写具体数字。  为了描述这些信息，提供一些特殊的字符。这些具体的细节，我们就不用自己去手写，因为这个cron表达式，它其实有在线生成器。  cron表达式在线生成器：https://cron.qqe2.com/      可以直接在这个网站上面，只要根据自己的要求去生成corn表达式即可。所以一般就不用自己去编写这个表达式。  通配符：  \\ 表示所有值；  ? 表示未说明的值，即不关心它为何值；  \\- 表示一个指定的范围；  , 表示附加一个可能值；  / 符号前表示开始时间，符号后表示每次递增的值；  cron表达式案例：  /5 ? 每隔5秒执行一次  0 /1 ? 每隔1分钟执行一次  0 0 5-15 ? 每天5-15点整点触发  0 0/3 ? 每三分钟触发一次  0 0-5 14 ? 在每天下午2点到下午2:05期间的每1分钟触发  0 0/5 14 ? 在每天下午2点到下午2:55期间的每5分钟触发  0 0/5 14,18 ? 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发  0 0/30 9-17 ? 朝九晚五工作时间内每半小时  0 0 10,14,16 ? 每天上午10点，下午2点，4点   "
      },
      {
        "title": "1.3 入门案例",
        "anchor": "13-入门案例",
        "level": 3,
        "text": "  1.3.1 Spring Task使用步骤  1). 导入maven坐标 spring-context（已存在）    2). 启动类添加注解 @EnableScheduling 开启任务调度  3). 自定义定时任务类    1.3.2 代码开发  编写定时任务类：  进入sky-server模块中  java package com.sky.task;  import lombok.extern.slf4j.Slf4j; import org.springframework.scheduling.annotation.Scheduled; import org.springframework.stereotype.Component;  import java.util.Date;  / 自定义定时任务类 / @Component @Slf4j public class MyTask {  / 定时任务 每隔5秒触发一次 / @Scheduled(cron = \"0/5 ?\") public void executeTask(){ log.info(\"定时任务开始执行：{}\",new Date()); } }   开启任务调度：  启动类添加注解 @EnableScheduling  java package com.sky;  import lombok.extern.slf4j.Slf4j; import org.springframework.boot.SpringApplication; import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.cache.annotation.EnableCaching; import org.springframework.scheduling.annotation.EnableScheduling; import org.springframework.transaction.annotation.EnableTransactionManagement;  @SpringBootApplication @EnableTransactionManagement //开启注解方式的事务管理 @Slf4j @EnableCaching @EnableScheduling public class SkyApplication { public static void main(String[] args) { SpringApplication.run(SkyApplication.class, args); log.info(\"server started\"); } }     1.3.3 功能测试  启动服务，查看日志    每隔5秒执行一次。   "
      },
      {
        "title": "2.订单状态定时处理",
        "anchor": "2订单状态定时处理",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 需求分析",
        "anchor": "21-需求分析",
        "level": 3,
        "text": "  用户下单后可能存在的情况：  - 下单后未支付，订单一直处于 “待支付” 状态 - 用户收货后管理端未点击完成按钮，订单一直处于 “派送中” 状态    支付超时的订单如何处理？ 派送中的订单一直不点击完成如何处理？    对于上面两种情况需要通过 定时任务 来修改订单状态，具体逻辑为：  - 通过定时任务每分钟检查一次是否存在支付超时订单（下单后超过15分钟仍未支付则判定为支付超时订单），如果存在则修改订单状态为“已取消” - 通过定时任务每天凌晨1点检查一次是否存在“派送中”的订单，如果存在则修改订单状态为“已完成”   "
      },
      {
        "title": "2.2 代码开发",
        "anchor": "22-代码开发",
        "level": 3,
        "text": "  1). 自定义定时任务类OrderTask（待完善）：  java package com.sky.task;  / 自定义定时任务，实现订单状态定时处理 / @Component @Slf4j public class OrderTask {  @Autowired private OrderMapper orderMapper;  / 处理支付超时订单 / @Scheduled(cron = \"0 ?\") public void processTimeoutOrder(){ log.info(\"处理支付超时订单：{}\", new Date()); }  / 处理“派送中”状态的订单 / @Scheduled(cron = \"0 0 1 ?\") public void processDeliveryOrder(){ log.info(\"处理派送中订单：{}\", new Date()); }  }     2). 在OrderMapper接口中扩展方法:  java / 根据状态和下单时间查询订单 @param status @param orderTime / @Select(\"select from orders where status = {status} and order_time < {orderTime}\") List getByStatusAndOrdertimeLT(Integer status, LocalDateTime orderTime);     3). 完善定时任务类的processTimeoutOrder方法：  java / 处理支付超时订单 / @Scheduled(cron = \"0 ?\") public void processTimeoutOrder(){ log.info(\"处理支付超时订单：{}\", new Date());  LocalDateTime time = LocalDateTime.now().plusMinutes(-15);  // select from orders where status = 1 and order_time < 当前时间-15分钟 List ordersList = orderMapper.getByStatusAndOrdertimeLT(Orders.PENDING_PAYMENT, time); if(ordersList != null && ordersList.size() 0){ ordersList.forEach(order - { order.setStatus(Orders.CANCELLED); order.setCancelReason(\"支付超时，自动取消\"); order.setCancelTime(LocalDateTime.now()); orderMapper.update(order); }); } }     4). 完善定时任务类的processDeliveryOrder方法：  java / 处理“派送中”状态的订单 / @Scheduled(cron = \"0 0 1 ?\") public void processDeliveryOrder(){ log.info(\"处理派送中订单：{}\", new Date()); // select from orders where status = 4 and order_time < 当前时间-1小时 LocalDateTime time = LocalDateTime.now().plusMinutes(-60); List ordersList = orderMapper.getByStatusAndOrdertimeLT(Orders.DELIVERY_IN_PROGRESS, time);  if(ordersList != null && ordersList.size() 0){ ordersList.forEach(order - { order.setStatus(Orders.COMPLETED); orderMapper.update(order); }); } }    "
      },
      {
        "title": "2.3 功能测试",
        "anchor": "23-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 查看控制台sql - 查看数据库中数据变化    支付超时的订单测试：  1). 查看订单表  有一条订单，状态为1。订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消      2). 开启定时任务  启动服务，观察控制台日志。处理支付超时订单任务每隔1分钟执行一次。      3). 再次查看订单表  状态已更改为6，已取消。    证明定时任务已生效。  处理“派送中”状态的订单任务 测试自已完成，测试步骤和上述一致。可适当修改cron表达式，改变任务执行频率，方便测试。   "
      },
      {
        "title": "3. WebSocket",
        "anchor": "3-websocket",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 介绍",
        "anchor": "31-介绍",
        "level": 3,
        "text": "  WebSocket 是基于 TCP 的一种新的 网络协议 。它实现了浏览器与服务器全双工通信——浏览器和服务器只需要完成一次握手，两者之间就可以创建 持久性 的连接， 并进行 双向 数据传输。  HTTP协议和WebSocket协议对比：  - HTTP是 短连接 - WebSocket是 长连接 - HTTP通信是 单向 的，基于请求响应模式 - WebSocket支持 双向 通信 - HTTP和WebSocket底层都是TCP连接    思考： 既然WebSocket支持双向通信，功能看似比HTTP强大，那么我们是不是可以基于WebSocket开发所有的业务功能？  WebSocket缺点：  服务器长期维护长连接需要一定的成本 各个浏览器支持程度不一 WebSocket 是长连接，受网络限制比较大，需要处理好重连  结论： WebSocket并不能完全取代HTTP，它只适合在特定的场景下使用    WebSocket应用场景：  1). 视频弹幕  v    2). 网页聊天      3). 体育实况更新      4). 股票基金报价实时更新     "
      },
      {
        "title": "3.2 入门案例",
        "anchor": "32-入门案例",
        "level": 3,
        "text": "  3.2.1 案例分析  需求： 实现浏览器与服务器全双工通信。浏览器既可以向服务器发送消息，服务器也可主动向浏览器推送消息。  效果展示：    实现步骤：  1). 直接使用websocket.html页面作为WebSocket客户端  2). 导入WebSocket的maven坐标  3). 导入WebSocket服务端组件WebSocketServer，用于和客户端通信  4). 导入配置类WebSocketConfiguration，注册WebSocket的服务端组件  5). 导入定时任务类WebSocketTask，定时向客户端推送数据    3.2.2 代码开发  1). 定义websocket.html页面(资料中已提供)  html     WebSocket Demo    发送消息 关闭连接     var websocket = null; var clientId = Math.random().toString(36).substr(2);  //判断当前浏览器是否支持WebSocket if('WebSocket' in window){ //连接WebSocket节点 websocket = new WebSocket(\"ws://localhost:8080/ws/\"+clientId); } else{ alert('Not support websocket') }  //连接发生错误的回调方法 websocket.onerror = function(){ setMessageInnerHTML(\"error\"); };  //连接成功建立的回调方法 websocket.onopen = function(){ setMessageInnerHTML(\"连接成功\"); }  //接收到消息的回调方法 websocket.onmessage = function(event){ setMessageInnerHTML(event.data); }  //连接关闭的回调方法 websocket.onclose = function(){ setMessageInnerHTML(\"close\"); }  //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。 window.onbeforeunload = function(){ websocket.close(); }  //将消息显示在网页上 function setMessageInnerHTML(innerHTML){ document.getElementById('message').innerHTML += innerHTML + ' '; }  //发送消息 function send(){ var message = document.getElementById('text').value; websocket.send(message); }  //关闭连接 function closeWebSocket() { websocket.close(); }       2). 导入maven坐标  在sky-server模块pom.xml中已定义  xml  org.springframework.boot spring-boot-starter-websocket      3). 定义WebSocket服务端组件(资料中已提供)  直接导入到sky-server模块即可  java package com.sky.websocket;  import org.springframework.stereotype.Component; import javax.websocket.OnClose; import javax.websocket.OnMessage; import javax.websocket.OnOpen; import javax.websocket.Session; import javax.websocket.server.PathParam; import javax.websocket.server.ServerEndpoint; import java.util.Collection; import java.util.HashMap; import java.util.Map;  / WebSocket服务 / @Component @ServerEndpoint(\"/ws/{sid}\") public class WebSocketServer {  //存放会话对象 private static Map sessionMap = new HashMap();  / 连接建立成功调用的方法 / @OnOpen public void onOpen(Session session, @PathParam(\"sid\") String sid) { System.out.println(\"客户端：\" + sid + \"建立连接\"); sessionMap.put(sid, session); }  / 收到客户端消息后调用的方法  @param message 客户端发送过来的消息 / @OnMessage public void onMessage(String message, @PathParam(\"sid\") String sid) { System.out.println(\"收到来自客户端：\" + sid + \"的信息:\" + message); }  / 连接关闭调用的方法  @param sid / @OnClose public void onClose(@PathParam(\"sid\") String sid) { System.out.println(\"连接断开:\" + sid); sessionMap.remove(sid); }  / 群发  @param message / public void sendToAllClient(String message) { Collection sessions = sessionMap.values(); for (Session session : sessions) { try { //服务器向客户端发送消息 session.getBasicRemote().sendText(message); } catch (Exception e) { e.printStackTrace(); } } }  }     4). 定义配置类，注册WebSocket的服务端组件(从资料中直接导入即可)  java package com.sky.config;  import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.web.socket.server.standard.ServerEndpointExporter;  / WebSocket配置类，用于注册WebSocket的Bean / @Configuration public class WebSocketConfiguration {  @Bean public ServerEndpointExporter serverEndpointExporter() { return new ServerEndpointExporter(); }  }     5). 定义定时任务类，定时向客户端推送数据(从资料中直接导入即可)  java package com.sky.task;  import com.sky.websocket.WebSocketServer; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.scheduling.annotation.Scheduled; import org.springframework.stereotype.Component; import java.time.LocalDateTime; import java.time.format.DateTimeFormatter;  @Component public class WebSocketTask { @Autowired private WebSocketServer webSocketServer;  / 通过WebSocket每隔5秒向客户端发送消息 / @Scheduled(cron = \"0/5 ?\") public void sendMessageToClient() { webSocketServer.sendToAllClient(\"这是来自服务端的消息：\" + DateTimeFormatter.ofPattern(\"HH:mm:ss\").format(LocalDateTime.now())); } }     3.2.3 功能测试  启动服务，打开websocket.html页面  浏览器向服务器发送数据：      服务器向浏览器间隔5秒推送数据：     "
      },
      {
        "title": "4. 来单提醒",
        "anchor": "4-来单提醒",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析和设计",
        "anchor": "41-需求分析和设计",
        "level": 3,
        "text": "  用户下单并且支付成功后，需要第一时间通知外卖商家。通知的形式有如下两种：  - 语音播报 - 弹出提示框      设计思路：  - 通过WebSocket实现管理端页面和服务端保持长连接状态 - 当客户支付后，调用WebSocket的相关API实现服务端向客户端推送消息 - 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报 - 约定服务端发送给客户端浏览器的数据格式为JSON，字段包括：type，orderId，content - type 为消息类型，1为来单提醒 2为客户催单 - orderId 为订单id - content 为消息内容   "
      },
      {
        "title": "4.2 代码开发",
        "anchor": "42-代码开发",
        "level": 3,
        "text": "  在OrderServiceImpl中注入WebSocketServer对象，修改paySuccess方法，加入如下代码：  java @Autowired private WebSocketServer webSocketServer; / 支付成功，修改订单状态  @param outTradeNo / public void paySuccess(String outTradeNo) { // 当前登录用户id Long userId = BaseContext.getCurrentId();  // 根据订单号查询当前用户的订单 Orders ordersDB = orderMapper.getByNumberAndUserId(outTradeNo, userId);  // 根据订单id更新订单的状态、支付方式、支付状态、结账时间 Orders orders = Orders.builder() .id(ordersDB.getId()) .status(Orders.TO_BE_CONFIRMED) .payStatus(Orders.PAID) .checkoutTime(LocalDateTime.now()) .build();  orderMapper.update(orders); ////////////////////////////////////////////// Map map = new HashMap(); map.put(\"type\", 1);//消息类型，1表示来单提醒 map.put(\"orderId\", orders.getId()); map.put(\"content\", \"订单号：\" + outTradeNo);  //通过WebSocket实现来单提醒，向客户端浏览器推送消息 webSocketServer.sendToAllClient(JSON.toJSONString(map)); /////////////////////////////////////////////////// }    "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 查看浏览器调试工具数据交互过程 - 前后端联调  1). 登录管理端后台  登录成功后，浏览器与服务器建立长连接    查看控制台日志      2). 小程序端下单支付  修改回调地址，利用内网穿透获取域名      下单支付      3). 查看来单提醒  支付成功后，后台收到来单提醒，并有语音播报     "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "5. 客户催单",
        "anchor": "5-客户催单",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析和设计",
        "anchor": "51-需求分析和设计",
        "level": 3,
        "text": "  用户在小程序中点击催单按钮后，需要第一时间通知外卖商家。通知的形式有如下两种：  - 语音播报 - 弹出提示框      设计思路：  - 通过WebSocket实现管理端页面和服务端保持长连接状态 - 当用户点击催单按钮后，调用WebSocket的相关API实现服务端向客户端推送消息 - 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报 约定服务端发送给客户端浏览器的数据格式为JSON，字段包括：type，orderId，content - type 为消息类型，1为来单提醒 2为客户催单 - orderId 为订单id - content 为消息内容    当用户点击催单按钮时，向服务端发送请求。  接口设计(催单)：     "
      },
      {
        "title": "5.2 代码开发",
        "anchor": "52-代码开发",
        "level": 3,
        "text": "  5.2.1 Controller层  根据用户催单的接口定义，在user/OrderController中创建催单方法：  java / 用户催单  @param id @return / @GetMapping(\"/reminder/{id}\") @ApiOperation(\"用户催单\") public Result reminder(@PathVariable(\"id\") Long id) { orderService.reminder(id); return Result.success(); }     5.2.2 Service层接口  在OrderService接口中声明reminder方法：  java / 用户催单 @param id / void reminder(Long id);     5.2.3 Service层实现类  在OrderServiceImpl中实现reminder方法：  java / 用户催单  @param id / public void reminder(Long id) { // 查询订单是否存在 Orders orders = orderMapper.getById(id); if (orders == null) { throw new OrderBusinessException(MessageConstant.ORDER_NOT_FOUND); }  //基于WebSocket实现催单 Map map = new HashMap(); map.put(\"type\", 2);//2代表用户催单 map.put(\"orderId\", id); map.put(\"content\", \"订单号：\" + orders.getNumber()); webSocketServer.sendToAllClient(JSON.toJSONString(map)); }     5.2.4 Mapper层  在OrderMapper中添加getById：  java / 根据id查询订单 @param id / @Select(\"select from orders where id= {id}\") Orders getById(Long id);    "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 查看浏览器调试工具数据交互过程 - 前后端联调  1). 登录管理端后台  登录成功后，浏览器与服务器建立长连接    查看控制台日志      2). 用户进行催单  用户可在订单列表或者订单详情，进行催单      3). 查看催单提醒  既有催单弹窗，同时语音播报     "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。"
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day10 课程内容 - spring task - 订单状态定时处理 - websocket - 来单提醒 - 客户催单 功能实现： 订单状态定时处理 、 来单提醒 和 客户催单 订单状态定时处理： 来单提醒： 客户催单： 1. spring task 1.1 介绍 spring task 是spring框架提供的任务调度工具，可以按照约定的时间自动执行某个代码逻辑。 定位： 定时任务框架 作用： 定时自动执行某段java代码 为什么要在java程序中使用spring task？ 应用场景： 1). 信用卡每月还款提醒 2). 银行贷款每月还款提醒 3). 火车票售票系统处理未支付订单 4). 入职纪念日为用户发送通知 强调： 只要是需要定时处理的场景都可以使用spring task 1.2 cron表达式 cron表达式 其实就是一个字符串，通过cron表达式可以 定义任务触发的时间 构成规则： 分为6或7个域，由空格分隔开，每个域代表一个含义 每个域的含义分别为：秒、分钟、小时、日、月、周、年(可选) 举例： 2022年10月12日上午9点整 对应的cron表达式为： 0 0 9 12 10 ? 2022 说明： 一般 日 和 周 的值不同时设置，其中一个设置，另一个用？表示。 比如： 描述2月份的最后一天，最后一天具体是几号呢？可能是28号，也有可能是29号，所以就不能写具体数字。 为了描述这些信息，提供一些特殊的字符。这些具体的细节，我们就不用自己去手写，因为这个cron表达式，它其实有在线生成器。 cron表达式在线生成器：https://cron.qqe2.com/ 可以直接在这个网站上面，只要根据自己的要求去生成corn表达式即可。所以一般就不用自己去编写这个表达式。 通配符： \\ 表示所有值； ? 表示未说明的值，即不关心它为何值； \\- 表示一个指定的范围； , 表示附加一个可能值； / 符号前表示开始时间，符号后表示每次递增的值； cron表达式案例： /5 ? 每隔5秒执行一次 0 /1 ? 每隔1分钟执行一次 0 0 5-15 ? 每天5-15点整点触发 0 0/3 ? 每三分钟触发一次 0 0-5 14 ? 在每天下午2点到下午2:05期间的每1分钟触发 0 0/5 14 ? 在每天下午2点到下午2:55期间的每5分钟触发 0 0/5 14,18 ? 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发 0 0/30 9-17 ? 朝九晚五工作时间内每半小时 0 0 10,14,16 ? 每天上午10点，下午2点，4点 1.3 入门案例 1.3.1 spring task使用步骤 1). 导入maven坐标 spring-context（已存在） 2). 启动类添加注解 @enablescheduling 开启任务调度 3). 自定义定时任务类 1.3.2 代码开发 编写定时任务类： 进入sky-server模块中 java package com.sky.task; import lombok.extern.slf4j.slf4j; import org.springframework.scheduling.annotation.scheduled; import org.springframework.stereotype.component; import java.util.date; / 自定义定时任务类 / @component @slf4j public class mytask { / 定时任务 每隔5秒触发一次 / @scheduled(cron = \"0/5 ?\") public void executetask(){ log.info(\"定时任务开始执行：{}\",new date()); } } 开启任务调度： 启动类添加注解 @enablescheduling java package com.sky; import lombok.extern.slf4j.slf4j; import org.springframework.boot.springapplication; import org.springframework.boot.autoconfigure.springbootapplication; import org.springframework.cache.annotation.enablecaching; import org.springframework.scheduling.annotation.enablescheduling; import org.springframework.transaction.annotation.enabletransactionmanagement; @springbootapplication @enabletransactionmanagement //开启注解方式的事务管理 @slf4j @enablecaching @enablescheduling public class skyapplication { public static void main(string[] args) { springapplication.run(skyapplication.class, args); log.info(\"server started\"); } } 1.3.3 功能测试 启动服务，查看日志 每隔5秒执行一次。 2.订单状态定时处理 2.1 需求分析 用户下单后可能存在的情况： - 下单后未支付，订单一直处于 “待支付” 状态 - 用户收货后管理端未点击完成按钮，订单一直处于 “派送中” 状态 支付超时的订单如何处理？ 派送中的订单一直不点击完成如何处理？ 对于上面两种情况需要通过 定时任务 来修改订单状态，具体逻辑为： - 通过定时任务每分钟检查一次是否存在支付超时订单（下单后超过15分钟仍未支付则判定为支付超时订单），如果存在则修改订单状态为“已取消” - 通过定时任务每天凌晨1点检查一次是否存在“派送中”的订单，如果存在则修改订单状态为“已完成” 2.2 代码开发 1). 自定义定时任务类ordertask（待完善）： java package com.sky.task; / 自定义定时任务，实现订单状态定时处理 / @component @slf4j public class ordertask { @autowired private ordermapper ordermapper; / 处理支付超时订单 / @scheduled(cron = \"0 ?\") public void processtimeoutorder(){ log.info(\"处理支付超时订单：{}\", new date()); } / 处理“派送中”状态的订单 / @scheduled(cron = \"0 0 1 ?\") public void processdeliveryorder(){ log.info(\"处理派送中订单：{}\", new date()); } } 2). 在ordermapper接口中扩展方法: java / 根据状态和下单时间查询订单 @param status @param ordertime / @select(\"select from orders where status = {status} and order_time getbystatusandordertimelt(integer status, localdatetime ordertime); 3). 完善定时任务类的processtimeoutorder方法： java / 处理支付超时订单 / @scheduled(cron = \"0 ?\") public void processtimeoutorder(){ log.info(\"处理支付超时订单：{}\", new date()); localdatetime time = localdatetime.now().plusminutes(-15); // select from orders where status = 1 and order_time orderslist = ordermapper.getbystatusandordertimelt(orders.pending_payment, time); if(orderslist != null && orderslist.size() 0){ orderslist.foreach(order - { order.setstatus(orders.cancelled); order.setcancelreason(\"支付超时，自动取消\"); order.setcanceltime(localdatetime.now()); ordermapper.update(order); }); } } 4). 完善定时任务类的processdeliveryorder方法： java / 处理“派送中”状态的订单 / @scheduled(cron = \"0 0 1 ?\") public void processdeliveryorder(){ log.info(\"处理派送中订单：{}\", new date()); // select from orders where status = 4 and order_time orderslist = ordermapper.getbystatusandordertimelt(orders.delivery_in_progress, time); if(orderslist != null && orderslist.size() 0){ orderslist.foreach(order - { order.setstatus(orders.completed); ordermapper.update(order); }); } } 2.3 功能测试 可以通过如下方式进行测试： - 查看控制台sql - 查看数据库中数据变化 支付超时的订单测试： 1). 查看订单表 有一条订单，状态为1。订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消 2). 开启定时任务 启动服务，观察控制台日志。处理支付超时订单任务每隔1分钟执行一次。 3). 再次查看订单表 状态已更改为6，已取消。 证明定时任务已生效。 处理“派送中”状态的订单任务 测试自已完成，测试步骤和上述一致。可适当修改cron表达式，改变任务执行频率，方便测试。 3. websocket 3.1 介绍 websocket 是基于 tcp 的一种新的 网络协议 。它实现了浏览器与服务器全双工通信——浏览器和服务器只需要完成一次握手，两者之间就可以创建 持久性 的连接， 并进行 双向 数据传输。 http协议和websocket协议对比： - http是 短连接 - websocket是 长连接 - http通信是 单向 的，基于请求响应模式 - websocket支持 双向 通信 - http和websocket底层都是tcp连接 思考： 既然websocket支持双向通信，功能看似比http强大，那么我们是不是可以基于websocket开发所有的业务功能？ websocket缺点： 服务器长期维护长连接需要一定的成本 各个浏览器支持程度不一 websocket 是长连接，受网络限制比较大，需要处理好重连 结论： websocket并不能完全取代http，它只适合在特定的场景下使用 websocket应用场景： 1). 视频弹幕 v 2). 网页聊天 3). 体育实况更新 4). 股票基金报价实时更新 3.2 入门案例 3.2.1 案例分析 需求： 实现浏览器与服务器全双工通信。浏览器既可以向服务器发送消息，服务器也可主动向浏览器推送消息。 效果展示： 实现步骤： 1). 直接使用websocket.html页面作为websocket客户端 2). 导入websocket的maven坐标 3). 导入websocket服务端组件websocketserver，用于和客户端通信 4). 导入配置类websocketconfiguration，注册websocket的服务端组件 5). 导入定时任务类websockettask，定时向客户端推送数据 3.2.2 代码开发 1). 定义websocket.html页面(资料中已提供) html websocket demo 发送消息 关闭连接 var websocket = null; var clientid = math.random().tostring(36).substr(2); //判断当前浏览器是否支持websocket if('websocket' in window){ //连接websocket节点 websocket = new websocket(\"ws://localhost:8080/ws/\"+clientid); } else{ alert('not support websocket') } //连接发生错误的回调方法 websocket.onerror = function(){ setmessageinnerhtml(\"error\"); }; //连接成功建立的回调方法 websocket.onopen = function(){ setmessageinnerhtml(\"连接成功\"); } //接收到消息的回调方法 websocket.onmessage = function(event){ setmessageinnerhtml(event.data); } //连接关闭的回调方法 websocket.onclose = function(){ setmessageinnerhtml(\"close\"); } //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。 window.onbeforeunload = function(){ websocket.close(); } //将消息显示在网页上 function setmessageinnerhtml(innerhtml){ document.getelementbyid('message').innerhtml += innerhtml + ' '; } //发送消息 function send(){ var message = document.getelementbyid('text').value; websocket.send(message); } //关闭连接 function closewebsocket() { websocket.close(); } 2). 导入maven坐标 在sky-server模块pom.xml中已定义 xml org.springframework.boot spring-boot-starter-websocket 3). 定义websocket服务端组件(资料中已提供) 直接导入到sky-server模块即可 java package com.sky.websocket; import org.springframework.stereotype.component; import javax.websocket.onclose; import javax.websocket.onmessage; import javax.websocket.onopen; import javax.websocket.session; import javax.websocket.server.pathparam; import javax.websocket.server.serverendpoint; import java.util.collection; import java.util.hashmap; import java.util.map; / websocket服务 / @component @serverendpoint(\"/ws/{sid}\") public class websocketserver { //存放会话对象 private static map sessionmap = new hashmap(); / 连接建立成功调用的方法 / @onopen public void onopen(session session, @pathparam(\"sid\") string sid) { system.out.println(\"客户端：\" + sid + \"建立连接\"); sessionmap.put(sid, session); } / 收到客户端消息后调用的方法 @param message 客户端发送过来的消息 / @onmessage public void onmessage(string message, @pathparam(\"sid\") string sid) { system.out.println(\"收到来自客户端：\" + sid + \"的信息:\" + message); } / 连接关闭调用的方法 @param sid / @onclose public void onclose(@pathparam(\"sid\") string sid) { system.out.println(\"连接断开:\" + sid); sessionmap.remove(sid); } / 群发 @param message / public void sendtoallclient(string message) { collection sessions = sessionmap.values(); for (session session : sessions) { try { //服务器向客户端发送消息 session.getbasicremote().sendtext(message); } catch (exception e) { e.printstacktrace(); } } } } 4). 定义配置类，注册websocket的服务端组件(从资料中直接导入即可) java package com.sky.config; import org.springframework.context.annotation.bean; import org.springframework.context.annotation.configuration; import org.springframework.web.socket.server.standard.serverendpointexporter; / websocket配置类，用于注册websocket的bean / @configuration public class websocketconfiguration { @bean public serverendpointexporter serverendpointexporter() { return new serverendpointexporter(); } } 5). 定义定时任务类，定时向客户端推送数据(从资料中直接导入即可) java package com.sky.task; import com.sky.websocket.websocketserver; import org.springframework.beans.factory.annotation.autowired; import org.springframework.scheduling.annotation.scheduled; import org.springframework.stereotype.component; import java.time.localdatetime; import java.time.format.datetimeformatter; @component public class websockettask { @autowired private websocketserver websocketserver; / 通过websocket每隔5秒向客户端发送消息 / @scheduled(cron = \"0/5 ?\") public void sendmessagetoclient() { websocketserver.sendtoallclient(\"这是来自服务端的消息：\" + datetimeformatter.ofpattern(\"hh:mm:ss\").format(localdatetime.now())); } } 3.2.3 功能测试 启动服务，打开websocket.html页面 浏览器向服务器发送数据： 服务器向浏览器间隔5秒推送数据： 4. 来单提醒 4.1 需求分析和设计 用户下单并且支付成功后，需要第一时间通知外卖商家。通知的形式有如下两种： - 语音播报 - 弹出提示框 设计思路： - 通过websocket实现管理端页面和服务端保持长连接状态 - 当客户支付后，调用websocket的相关api实现服务端向客户端推送消息 - 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报 - 约定服务端发送给客户端浏览器的数据格式为json，字段包括：type，orderid，content - type 为消息类型，1为来单提醒 2为客户催单 - orderid 为订单id - content 为消息内容 4.2 代码开发 在orderserviceimpl中注入websocketserver对象，修改paysuccess方法，加入如下代码： java @autowired private websocketserver websocketserver; / 支付成功，修改订单状态 @param outtradeno / public void paysuccess(string outtradeno) { // 当前登录用户id long userid = basecontext.getcurrentid(); // 根据订单号查询当前用户的订单 orders ordersdb = ordermapper.getbynumberanduserid(outtradeno, userid); // 根据订单id更新订单的状态、支付方式、支付状态、结账时间 orders orders = orders.builder() .id(ordersdb.getid()) .status(orders.to_be_confirmed) .paystatus(orders.paid) .checkouttime(localdatetime.now()) .build(); ordermapper.update(orders); ////////////////////////////////////////////// map map = new hashmap(); map.put(\"type\", 1);//消息类型，1表示来单提醒 map.put(\"orderid\", orders.getid()); map.put(\"content\", \"订单号：\" + outtradeno); //通过websocket实现来单提醒，向客户端浏览器推送消息 websocketserver.sendtoallclient(json.tojsonstring(map)); /////////////////////////////////////////////////// } 4.3 功能测试 可以通过如下方式进行测试： - 查看浏览器调试工具数据交互过程 - 前后端联调 1). 登录管理端后台 登录成功后，浏览器与服务器建立长连接 查看控制台日志 2). 小程序端下单支付 修改回调地址，利用内网穿透获取域名 下单支付 3). 查看来单提醒 支付成功后，后台收到来单提醒，并有语音播报 4.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 5. 客户催单 5.1 需求分析和设计 用户在小程序中点击催单按钮后，需要第一时间通知外卖商家。通知的形式有如下两种： - 语音播报 - 弹出提示框 设计思路： - 通过websocket实现管理端页面和服务端保持长连接状态 - 当用户点击催单按钮后，调用websocket的相关api实现服务端向客户端推送消息 - 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报 约定服务端发送给客户端浏览器的数据格式为json，字段包括：type，orderid，content - type 为消息类型，1为来单提醒 2为客户催单 - orderid 为订单id - content 为消息内容 当用户点击催单按钮时，向服务端发送请求。 接口设计(催单)： 5.2 代码开发 5.2.1 controller层 根据用户催单的接口定义，在user/ordercontroller中创建催单方法： java / 用户催单 @param id @return / @getmapping(\"/reminder/{id}\") @apioperation(\"用户催单\") public result reminder(@pathvariable(\"id\") long id) { orderservice.reminder(id); return result.success(); } 5.2.2 service层接口 在orderservice接口中声明reminder方法： java / 用户催单 @param id / void reminder(long id); 5.2.3 service层实现类 在orderserviceimpl中实现reminder方法： java / 用户催单 @param id / public void reminder(long id) { // 查询订单是否存在 orders orders = ordermapper.getbyid(id); if (orders == null) { throw new orderbusinessexception(messageconstant.order_not_found); } //基于websocket实现催单 map map = new hashmap(); map.put(\"type\", 2);//2代表用户催单 map.put(\"orderid\", id); map.put(\"content\", \"订单号：\" + orders.getnumber()); websocketserver.sendtoallclient(json.tojsonstring(map)); } 5.2.4 mapper层 在ordermapper中添加getbyid： java / 根据id查询订单 @param id / @select(\"select from orders where id= {id}\") orders getbyid(long id); 5.3 功能测试 可以通过如下方式进行测试： - 查看浏览器调试工具数据交互过程 - 前后端联调 1). 登录管理端后台 登录成功后，浏览器与服务器建立长连接 查看控制台日志 2). 用户进行催单 用户可在订单列表或者订单详情，进行催单 3). 查看催单提醒 既有催单弹窗，同时语音播报 5.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-16efc3a90743",
    "version": "40d0a69c9940",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day11/苍穹外卖-day11.md",
    "title": "苍穹外卖-day11",
    "description": "- Apache ECharts - 营业额统计 - 用户统计 - 订单统计 - 销量排名Top10",
    "subject": "projects",
    "kind": "项目原文",
    "order": 21,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 28,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - Apache ECharts - 营业额统计 - 用户统计 - 订单统计 - 销量排名Top10    功能实现： 数据统计  数据统计效果图：     "
      },
      {
        "title": "1. Apache ECharts",
        "anchor": "1-apache-echarts",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 介绍",
        "anchor": "11-介绍",
        "level": 3,
        "text": "  Apache ECharts 是一款基于 Javascript 的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。 官网地址：https://echarts.apache.org/zh/index.html      常见效果展示：  1). 柱形图      2). 饼形图      3). 折线图      总结： 不管是哪种形式的图形，最本质的东西实际上是数据，它其实是对数据的一种可视化展示。   "
      },
      {
        "title": "1.2 入门案例",
        "anchor": "12-入门案例",
        "level": 3,
        "text": "  Apache Echarts官方提供的快速入门：https://echarts.apache.org/handbook/zh/get-started/  效果展示：      实现步骤：  1). 引入echarts.js 文件(当天资料已提供)  2). 为 ECharts 准备一个设置宽高的 DOM  3). 初始化echarts实例  4). 指定图表的配置项和数据  5). 使用指定的配置项和数据显示图表    代码开发：  html     ECharts        // 基于准备好的dom，初始化echarts实例 var myChart = echarts.init(document.getElementById('main'));  // 指定图表的配置项和数据 var option = { title: { text: 'ECharts 入门示例' }, tooltip: {}, legend: { data: ['销量'] }, xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] }, yAxis: {}, series: [ { name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] } ] };  // 使用刚指定的配置项和数据显示图表。 myChart.setOption(option);        测试： (当天资料中已提供)    使用浏览器方式打开即可。    总结： 使用Echarts，重点在于研究当前图表所需的数据格式。通常是需要后端提供符合格式要求的动态数据，然后响应给前端来展示图表。   "
      },
      {
        "title": "2. 营业额统计",
        "anchor": "2-营业额统计",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 需求分析和设计",
        "anchor": "21-需求分析和设计",
        "level": 3,
        "text": "  2.1.1 产品原型  营业额统计是基于折现图来展现，并且按照天来展示的。实际上，就是某一个时间范围之内的每一天的营业额。同时，不管光标放在哪个点上，那么它就会把具体的数值展示出来。并且还需要注意日期并不是固定写死的，是由上边时间选择器来决定。比如选择是近7天、或者是近30日，或者是本周，就会把相应这个时间段之内的每一天日期通过横坐标展示。  原型图：      业务规则：  - 营业额指订单状态为已完成的订单金额合计 - 基于可视化报表的折线图展示营业额数据，X轴为日期，Y轴为营业额 - 根据时间选择区间，展示每天的营业额数据    2.1.2 接口设计  通过上述原型图，设计出对应的接口。        注意： 具体返回数据一般由前端来决定，前端展示图表，具体折现图对应数据是什么格式，是有固定的要求的。 所以说，后端需要去适应前端，它需要什么格式的数据，我们就给它返回什么格式的数据。   "
      },
      {
        "title": "2.2 代码开发",
        "anchor": "22-代码开发",
        "level": 3,
        "text": "  2.2.1 VO设计  根据接口定义设计对应的VO：    在sky-pojo模块，TurnoverReportVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor;  import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class TurnoverReportVO implements Serializable {  //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private String dateList;  //营业额，以逗号分隔，例如：406.0,1520.0,75.0 private String turnoverList;  }     2.2.2 Controller层  根据接口定义创建ReportController：  java package com.sky.controller.admin;  import com.sky.result.Result; import com.sky.service.ReportService; import com.sky.vo.TurnoverReportVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.format.annotation.DateTimeFormat; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.time.LocalDate;  / 报表 / @RestController @RequestMapping(\"/admin/report\") @Slf4j @Api(tags = \"统计报表相关接口\") public class ReportController {  @Autowired private ReportService reportService;  / 营业额数据统计  @param begin @param end @return / @GetMapping(\"/turnoverStatistics\") @ApiOperation(\"营业额数据统计\") public Result turnoverStatistics( @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate begin, @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate end) { return Result.success(reportService.getTurnover(begin, end)); }  }     2.2.3 Service层接口  创建ReportService接口，声明getTurnover方法：  java package com.sky.service;  import com.sky.vo.TurnoverReportVO; import java.time.LocalDate;  public interface ReportService {  / 根据时间区间统计营业额 @param beginTime @param endTime @return / TurnoverReportVO getTurnover(LocalDate beginTime, LocalDate endTime); }     2.2.4 Service层实现类  创建ReportServiceImpl实现类，实现getTurnover方法:  java package com.sky.service.impl;  import com.sky.entity.Orders; import com.sky.mapper.OrderMapper; import com.sky.service.ReportService; import com.sky.vo.TurnoverReportVO; import lombok.extern.slf4j.Slf4j; import org.apache.commons.lang.StringUtils; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service; import java.time.LocalDate; import java.time.LocalDateTime; import java.time.LocalTime; import java.util.ArrayList; import java.util.HashMap; import java.util.List; import java.util.Map;  @Service @Slf4j public class ReportServiceImpl implements ReportService {  @Autowired private OrderMapper orderMapper;  / 根据时间区间统计营业额 @param begin @param end @return / public TurnoverReportVO getTurnover(LocalDate begin, LocalDate end) { List dateList = new ArrayList< (); dateList.add(begin);  while (!begin.equals(end)){ begin = begin.plusDays(1);//日期计算，获得指定日期后1天的日期 dateList.add(begin); }  List turnoverList = new ArrayList< (); for (LocalDate date : dateList) { LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN); LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX); Map map = new HashMap(); map.put(\"status\", Orders.COMPLETED); map.put(\"begin\",beginTime); map.put(\"end\", endTime); Double turnover = orderMapper.sumByMap(map); turnover = turnover == null ? 0.0 : turnover; turnoverList.add(turnover); }  //数据封装 return TurnoverReportVO.builder() .dateList(StringUtils.join(dateList,\",\")) .turnoverList(StringUtils.join(turnoverList,\",\")) .build(); } }     2.2.5 Mapper层  在OrderMapper接口声明sumByMap方法：  java / 根据动态条件统计营业额 @param map / Double sumByMap(Map map);   在OrderMapper.xml文件中编写动态SQL：  xml  select sum(amount) from orders   and status = {status}   and order_time &gt;= {begin}   and order_time &lt;= {end}       "
      },
      {
        "title": "2.3 功能测试",
        "anchor": "23-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 接口文档测试 - 前后端联调测试  启动服务器，启动nginx，直接采用前后端联调测试。  进入数据统计模块  1). 查看近7日营业额统计    进入开发者模式，查看返回数据      2). 查看近30日营业额统计    进入开发者模式，查看返回数据    也可通过断点方式启动，查看每步执行情况。   "
      },
      {
        "title": "2.4 代码提交",
        "anchor": "24-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "3. 用户统计",
        "anchor": "3-用户统计",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 需求分析和设计",
        "anchor": "31-需求分析和设计",
        "level": 3,
        "text": "  3.1.1 产品原型  所谓用户统计，实际上统计的是用户的数量。通过折线图来展示，上面这根蓝色线代表的是用户总量，下边这根绿色线代表的是新增用户数量，是具体到每一天。所以说用户统计主要统计 两个数据 ，一个是 总的用户数量 ，另外一个是 新增用户数量 。  原型图：    业务规则：  - 基于可视化报表的折线图展示用户数据，X轴为日期，Y轴为用户数 - 根据时间选择区间，展示每天的用户总量和新增用户量数据    3.1.2 接口设计  根据上述原型图设计接口。     "
      },
      {
        "title": "3.2 代码开发",
        "anchor": "32-代码开发",
        "level": 3,
        "text": "  3.2.1 VO设计  根据用户统计接口的返回结果设计VO：    在sky-pojo模块，UserReportVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor; import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class UserReportVO implements Serializable {  //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private String dateList;  //用户总量，以逗号分隔，例如：200,210,220 private String totalUserList;  //新增用户，以逗号分隔，例如：20,21,10 private String newUserList;  }     3.2.2 Controller层  根据接口定义，在ReportController中创建userStatistics方法：  java / 用户数据统计 @param begin @param end @return / @GetMapping(\"/userStatistics\") @ApiOperation(\"用户数据统计\") public Result userStatistics( @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate begin, @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate end){  return Result.success(reportService.getUserStatistics(begin,end)); }     3.2.3 Service层接口  在ReportService接口中声明getUserStatistics方法：  java / 根据时间区间统计用户数量 @param begin @param end @return / UserReportVO getUserStatistics(LocalDate begin, LocalDate end);     3.2.4 Service层实现类  在ReportServiceImpl实现类中实现getUserStatistics方法：  java @Override public UserReportVO getUserStatistics(LocalDate begin, LocalDate end) { List dateList = new ArrayList< (); dateList.add(begin);  while (!begin.equals(end)){ begin = begin.plusDays(1); dateList.add(begin); } List newUserList = new ArrayList< (); //新增用户数 List totalUserList = new ArrayList< (); //总用户数  for (LocalDate date : dateList) { LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN); LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX); //新增用户数量 select count(id) from user where create_time ? and create_time < ? Integer newUser = getUserCount(beginTime, endTime); //总用户数量 select count(id) from user where create_time < ? Integer totalUser = getUserCount(null, endTime);  newUserList.add(newUser); totalUserList.add(totalUser); }  return UserReportVO.builder() .dateList(StringUtils.join(dateList,\",\")) .newUserList(StringUtils.join(newUserList,\",\")) .totalUserList(StringUtils.join(totalUserList,\",\")) .build(); }   在ReportServiceImpl实现类中创建私有方法getUserCount：  java / 根据时间区间统计用户数量 @param beginTime @param endTime @return / private Integer getUserCount(LocalDateTime beginTime, LocalDateTime endTime) { Map map = new HashMap(); map.put(\"begin\",beginTime); map.put(\"end\", endTime); return userMapper.countByMap(map); }     3.2.5 Mapper层  在UserMapper接口中声明countByMap方法：  java / 根据动态条件统计用户数量 @param map @return / Integer countByMap(Map map);   在UserMapper.xml文件中编写动态SQL：  java  select count(id) from user   and create_time &gt;= {begin}   and create_time &lt;= {end}       "
      },
      {
        "title": "3.3 功能测试",
        "anchor": "33-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 接口文档测试 - 前后端联调测试  进入数据统计模块  1). 查看近7日用户统计    进入开发者模式，查看返回数据      2). 查看近30日用户统计    进入开发者模式，查看返回数据    也可通过断点方式启动，查看每步执行情况。   "
      },
      {
        "title": "3.4 代码提交",
        "anchor": "34-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "4. 订单统计",
        "anchor": "4-订单统计",
        "level": 2,
        "text": " "
      },
      {
        "title": "4.1 需求分析和设计",
        "anchor": "41-需求分析和设计",
        "level": 3,
        "text": "  4.1.1 产品原型  订单统计通过一个折现图来展现，折线图上有两根线，这根蓝色的线代表的是订单总数，而下边这根绿色的线代表的是有效订单数，指的就是状态是已完成的订单就属于有效订单，分别反映的是每一天的数据。上面还有3个数字，分别是订单总数、有效订单、订单完成率，它指的是整个时间区间之内总的数据。  原型图：    业务规则：  - 有效订单指状态为 “已完成” 的订单 - 基于可视化报表的折线图展示订单数据，X轴为日期，Y轴为订单数量 - 根据时间选择区间，展示每天的订单总数和有效订单数 - 展示所选时间区间内的有效订单数、总订单数、订单完成率，订单完成率 = 有效订单数 / 总订单数 100%    4.1.2 接口设计  根据上述原型图设计接口。     "
      },
      {
        "title": "4.2 代码开发",
        "anchor": "42-代码开发",
        "level": 3,
        "text": "  4.2.1 VO设计  根据订单统计接口的返回结果设计VO：    在sky-pojo模块，OrderReportVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor; import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class OrderReportVO implements Serializable {  //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private String dateList;  //每日订单数，以逗号分隔，例如：260,210,215 private String orderCountList;  //每日有效订单数，以逗号分隔，例如：20,21,10 private String validOrderCountList;  //订单总数 private Integer totalOrderCount;  //有效订单数 private Integer validOrderCount;  //订单完成率 private Double orderCompletionRate;  }     4.2.2 Controller层  在ReportController中根据订单统计接口创建orderStatistics方法：  java / 订单数据统计 @param begin @param end @return / @GetMapping(\"/ordersStatistics\") @ApiOperation(\"用户数据统计\") public Result orderStatistics( @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate begin, @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate end){  return Result.success(reportService.getOrderStatistics(begin,end)); }     4.2.3 Service层接口  在ReportService接口中声明getOrderStatistics方法：  java / 根据时间区间统计订单数量 @param begin @param end @return / OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end);     4.2.4 Service层实现类  在ReportServiceImpl实现类中实现getOrderStatistics方法：  java / 根据时间区间统计订单数量 @param begin @param end @return / public OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end){ List dateList = new ArrayList< (); dateList.add(begin);  while (!begin.equals(end)){ begin = begin.plusDays(1); dateList.add(begin); } //每天订单总数集合 List orderCountList = new ArrayList< (); //每天有效订单数集合 List validOrderCountList = new ArrayList< (); for (LocalDate date : dateList) { LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN); LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX); //查询每天的总订单数 select count(id) from orders where order_time ? and order_time < ? Integer orderCount = getOrderCount(beginTime, endTime, null);  //查询每天的有效订单数 select count(id) from orders where order_time ? and order_time < ? and status = ? Integer validOrderCount = getOrderCount(beginTime, endTime, Orders.COMPLETED);  orderCountList.add(orderCount); validOrderCountList.add(validOrderCount); }  //时间区间内的总订单数 Integer totalOrderCount = orderCountList.stream().reduce(Integer::sum).get(); //时间区间内的总有效订单数 Integer validOrderCount = validOrderCountList.stream().reduce(Integer::sum).get(); //订单完成率 Double orderCompletionRate = 0.0; if(totalOrderCount != 0){ orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount; } return OrderReportVO.builder() .dateList(StringUtils.join(dateList, \",\")) .orderCountList(StringUtils.join(orderCountList, \",\")) .validOrderCountList(StringUtils.join(validOrderCountList, \",\")) .totalOrderCount(totalOrderCount) .validOrderCount(validOrderCount) .orderCompletionRate(orderCompletionRate) .build();  }   在ReportServiceImpl实现类中提供私有方法getOrderCount：  java / 根据时间区间统计指定状态的订单数量 @param beginTime @param endTime @param status @return / private Integer getOrderCount(LocalDateTime beginTime, LocalDateTime endTime, Integer status) { Map map = new HashMap(); map.put(\"status\", status); map.put(\"begin\",beginTime); map.put(\"end\", endTime); return orderMapper.countByMap(map); }     4.2.5 Mapper层  在OrderMapper接口中声明countByMap方法：  java / 根据动态条件统计订单数量 @param map / Integer countByMap(Map map);   在OrderMapper.xml文件中编写动态SQL：  java  select count(id) from orders   and status = {status}   and order_time &gt;= {begin}   and order_time &lt;= {end}       "
      },
      {
        "title": "4.3 功能测试",
        "anchor": "43-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 接口文档测试 - 前后端联调  重启服务，直接采用前后端联调测试。  进入数据统计模块  1). 查看近7日订单统计    进入开发者模式，查看返回数据      2). 查看近30日订单统计    进入开发者模式，查看返回数据    也可通过断点方式启动，查看每步执行情况。   "
      },
      {
        "title": "4.4 代码提交",
        "anchor": "44-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "5. 销量排名Top10",
        "anchor": "5-销量排名top10",
        "level": 2,
        "text": " "
      },
      {
        "title": "5.1 需求分析和设计",
        "anchor": "51-需求分析和设计",
        "level": 3,
        "text": "  5.1.1 产品原型  所谓销量排名，销量指的是商品销售的数量。项目当中的商品主要包含两类：一个是 套餐 ，一个是 菜品 ，所以销量排名其实指的就是菜品和套餐销售的数量排名。通过柱形图来展示销量排名，这些销量是按照降序来排列，并且只需要统计销量排名前十的商品。  原型图：    业务规则：  - 根据时间选择区间，展示销量前10的商品（包括菜品和套餐） - 基于可视化报表的柱状图降序展示商品销量 - 此处的销量为商品销售的份数    5.1.2 接口设计  根据上述原型图设计接口。     "
      },
      {
        "title": "5.2 代码开发",
        "anchor": "52-代码开发",
        "level": 3,
        "text": "  5.2.1 VO设计  根据销量排名接口的返回结果设计VO：    在sky-pojo模块，SalesTop10ReportVO.java已定义  java package com.sky.vo;  import lombok.AllArgsConstructor; import lombok.Builder; import lombok.Data; import lombok.NoArgsConstructor; import java.io.Serializable;  @Data @Builder @NoArgsConstructor @AllArgsConstructor public class SalesTop10ReportVO implements Serializable {  //商品名称列表，以逗号分隔，例如：鱼香肉丝,宫保鸡丁,水煮鱼 private String nameList;  //销量列表，以逗号分隔，例如：260,215,200 private String numberList;  }     5.2.2 Controller层  在ReportController中根据销量排名接口创建top10方法：  java / 销量排名统计 @param begin @param end @return / @GetMapping(\"/top10\") @ApiOperation(\"销量排名统计\") public Result top10( @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate begin, @DateTimeFormat(pattern = \"yyyy-MM-dd\") LocalDate end){ return Result.success(reportService.getSalesTop10(begin,end)); }     5.2.3 Service层接口  在ReportService接口中声明getSalesTop10方法：  java / 查询指定时间区间内的销量排名top10 @param begin @param end @return / SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end);     5.2.4 Service层实现类  在ReportServiceImpl实现类中实现getSalesTop10方法：  java / 查询指定时间区间内的销量排名top10 @param begin @param end @return / public SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end){ LocalDateTime beginTime = LocalDateTime.of(begin, LocalTime.MIN); LocalDateTime endTime = LocalDateTime.of(end, LocalTime.MAX); List goodsSalesDTOList = orderMapper.getSalesTop10(beginTime, endTime);  String nameList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getName).collect(Collectors.toList()),\",\"); String numberList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getNumber).collect(Collectors.toList()),\",\");  return SalesTop10ReportVO.builder() .nameList(nameList) .numberList(numberList) .build(); }     5.2.5 Mapper层  在OrderMapper接口中声明getSalesTop10方法：  java / 查询商品销量排名 @param begin @param end / List getSalesTop10(LocalDateTime begin, LocalDateTime end);   在OrderMapper.xml文件中编写动态SQL：  xml  select od.name name,sum(od.number) number from order_detail od ,orders o where od.order_id = o.id and o.status = 5  and order_time &gt;= {begin}   and order_time &lt;= {end}  group by name order by number desc limit 0, 10     "
      },
      {
        "title": "5.3 功能测试",
        "anchor": "53-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 接口文档测试 - 前后端联调  重启服务，直接采用前后端联调测试。  查看近30日销量排名Top10统计  若查询的某一段时间没有销量数据，则显示不出效果。    进入开发者模式，查看返回数据    也可通过断点方式启动，查看每步执行情况。   "
      },
      {
        "title": "5.4 代码提交",
        "anchor": "54-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。 "
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day11 课程内容 - apache echarts - 营业额统计 - 用户统计 - 订单统计 - 销量排名top10 功能实现： 数据统计 数据统计效果图： 1. apache echarts 1.1 介绍 apache echarts 是一款基于 javascript 的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。 官网地址：https://echarts.apache.org/zh/index.html 常见效果展示： 1). 柱形图 2). 饼形图 3). 折线图 总结： 不管是哪种形式的图形，最本质的东西实际上是数据，它其实是对数据的一种可视化展示。 1.2 入门案例 apache echarts官方提供的快速入门：https://echarts.apache.org/handbook/zh/get-started/ 效果展示： 实现步骤： 1). 引入echarts.js 文件(当天资料已提供) 2). 为 echarts 准备一个设置宽高的 dom 3). 初始化echarts实例 4). 指定图表的配置项和数据 5). 使用指定的配置项和数据显示图表 代码开发： html echarts // 基于准备好的dom，初始化echarts实例 var mychart = echarts.init(document.getelementbyid('main')); // 指定图表的配置项和数据 var option = { title: { text: 'echarts 入门示例' }, tooltip: {}, legend: { data: ['销量'] }, xaxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] }, yaxis: {}, series: [ { name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] } ] }; // 使用刚指定的配置项和数据显示图表。 mychart.setoption(option); 测试： (当天资料中已提供) 使用浏览器方式打开即可。 总结： 使用echarts，重点在于研究当前图表所需的数据格式。通常是需要后端提供符合格式要求的动态数据，然后响应给前端来展示图表。 2. 营业额统计 2.1 需求分析和设计 2.1.1 产品原型 营业额统计是基于折现图来展现，并且按照天来展示的。实际上，就是某一个时间范围之内的每一天的营业额。同时，不管光标放在哪个点上，那么它就会把具体的数值展示出来。并且还需要注意日期并不是固定写死的，是由上边时间选择器来决定。比如选择是近7天、或者是近30日，或者是本周，就会把相应这个时间段之内的每一天日期通过横坐标展示。 原型图： 业务规则： - 营业额指订单状态为已完成的订单金额合计 - 基于可视化报表的折线图展示营业额数据，x轴为日期，y轴为营业额 - 根据时间选择区间，展示每天的营业额数据 2.1.2 接口设计 通过上述原型图，设计出对应的接口。 注意： 具体返回数据一般由前端来决定，前端展示图表，具体折现图对应数据是什么格式，是有固定的要求的。 所以说，后端需要去适应前端，它需要什么格式的数据，我们就给它返回什么格式的数据。 2.2 代码开发 2.2.1 vo设计 根据接口定义设计对应的vo： 在sky-pojo模块，turnoverreportvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor public class turnoverreportvo implements serializable { //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private string datelist; //营业额，以逗号分隔，例如：406.0,1520.0,75.0 private string turnoverlist; } 2.2.2 controller层 根据接口定义创建reportcontroller： java package com.sky.controller.admin; import com.sky.result.result; import com.sky.service.reportservice; import com.sky.vo.turnoverreportvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.format.annotation.datetimeformat; import org.springframework.web.bind.annotation.getmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.time.localdate; / 报表 / @restcontroller @requestmapping(\"/admin/report\") @slf4j @api(tags = \"统计报表相关接口\") public class reportcontroller { @autowired private reportservice reportservice; / 营业额数据统计 @param begin @param end @return / @getmapping(\"/turnoverstatistics\") @apioperation(\"营业额数据统计\") public result turnoverstatistics( @datetimeformat(pattern = \"yyyy-mm-dd\") localdate begin, @datetimeformat(pattern = \"yyyy-mm-dd\") localdate end) { return result.success(reportservice.getturnover(begin, end)); } } 2.2.3 service层接口 创建reportservice接口，声明getturnover方法： java package com.sky.service; import com.sky.vo.turnoverreportvo; import java.time.localdate; public interface reportservice { / 根据时间区间统计营业额 @param begintime @param endtime @return / turnoverreportvo getturnover(localdate begintime, localdate endtime); } 2.2.4 service层实现类 创建reportserviceimpl实现类，实现getturnover方法: java package com.sky.service.impl; import com.sky.entity.orders; import com.sky.mapper.ordermapper; import com.sky.service.reportservice; import com.sky.vo.turnoverreportvo; import lombok.extern.slf4j.slf4j; import org.apache.commons.lang.stringutils; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import java.time.localdate; import java.time.localdatetime; import java.time.localtime; import java.util.arraylist; import java.util.hashmap; import java.util.list; import java.util.map; @service @slf4j public class reportserviceimpl implements reportservice { @autowired private ordermapper ordermapper; / 根据时间区间统计营业额 @param begin @param end @return / public turnoverreportvo getturnover(localdate begin, localdate end) { list datelist = new arraylist< (); datelist.add(begin); while (!begin.equals(end)){ begin = begin.plusdays(1);//日期计算，获得指定日期后1天的日期 datelist.add(begin); } list turnoverlist = new arraylist< (); for (localdate date : datelist) { localdatetime begintime = localdatetime.of(date, localtime.min); localdatetime endtime = localdatetime.of(date, localtime.max); map map = new hashmap(); map.put(\"status\", orders.completed); map.put(\"begin\",begintime); map.put(\"end\", endtime); double turnover = ordermapper.sumbymap(map); turnover = turnover == null ? 0.0 : turnover; turnoverlist.add(turnover); } //数据封装 return turnoverreportvo.builder() .datelist(stringutils.join(datelist,\",\")) .turnoverlist(stringutils.join(turnoverlist,\",\")) .build(); } } 2.2.5 mapper层 在ordermapper接口声明sumbymap方法： java / 根据动态条件统计营业额 @param map / double sumbymap(map map); 在ordermapper.xml文件中编写动态sql： xml select sum(amount) from orders and status = {status} and order_time &gt;= {begin} and order_time &lt;= {end} 2.3 功能测试 可以通过如下方式进行测试： - 接口文档测试 - 前后端联调测试 启动服务器，启动nginx，直接采用前后端联调测试。 进入数据统计模块 1). 查看近7日营业额统计 进入开发者模式，查看返回数据 2). 查看近30日营业额统计 进入开发者模式，查看返回数据 也可通过断点方式启动，查看每步执行情况。 2.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 3. 用户统计 3.1 需求分析和设计 3.1.1 产品原型 所谓用户统计，实际上统计的是用户的数量。通过折线图来展示，上面这根蓝色线代表的是用户总量，下边这根绿色线代表的是新增用户数量，是具体到每一天。所以说用户统计主要统计 两个数据 ，一个是 总的用户数量 ，另外一个是 新增用户数量 。 原型图： 业务规则： - 基于可视化报表的折线图展示用户数据，x轴为日期，y轴为用户数 - 根据时间选择区间，展示每天的用户总量和新增用户量数据 3.1.2 接口设计 根据上述原型图设计接口。 3.2 代码开发 3.2.1 vo设计 根据用户统计接口的返回结果设计vo： 在sky-pojo模块，userreportvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor public class userreportvo implements serializable { //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private string datelist; //用户总量，以逗号分隔，例如：200,210,220 private string totaluserlist; //新增用户，以逗号分隔，例如：20,21,10 private string newuserlist; } 3.2.2 controller层 根据接口定义，在reportcontroller中创建userstatistics方法： java / 用户数据统计 @param begin @param end @return / @getmapping(\"/userstatistics\") @apioperation(\"用户数据统计\") public result userstatistics( @datetimeformat(pattern = \"yyyy-mm-dd\") localdate begin, @datetimeformat(pattern = \"yyyy-mm-dd\") localdate end){ return result.success(reportservice.getuserstatistics(begin,end)); } 3.2.3 service层接口 在reportservice接口中声明getuserstatistics方法： java / 根据时间区间统计用户数量 @param begin @param end @return / userreportvo getuserstatistics(localdate begin, localdate end); 3.2.4 service层实现类 在reportserviceimpl实现类中实现getuserstatistics方法： java @override public userreportvo getuserstatistics(localdate begin, localdate end) { list datelist = new arraylist< (); datelist.add(begin); while (!begin.equals(end)){ begin = begin.plusdays(1); datelist.add(begin); } list newuserlist = new arraylist< (); //新增用户数 list totaluserlist = new arraylist< (); //总用户数 for (localdate date : datelist) { localdatetime begintime = localdatetime.of(date, localtime.min); localdatetime endtime = localdatetime.of(date, localtime.max); //新增用户数量 select count(id) from user where create_time ? and create_time select count(id) from user and create_time &gt;= {begin} and create_time &lt;= {end} 3.3 功能测试 可以通过如下方式进行测试： - 接口文档测试 - 前后端联调测试 进入数据统计模块 1). 查看近7日用户统计 进入开发者模式，查看返回数据 2). 查看近30日用户统计 进入开发者模式，查看返回数据 也可通过断点方式启动，查看每步执行情况。 3.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 4. 订单统计 4.1 需求分析和设计 4.1.1 产品原型 订单统计通过一个折现图来展现，折线图上有两根线，这根蓝色的线代表的是订单总数，而下边这根绿色的线代表的是有效订单数，指的就是状态是已完成的订单就属于有效订单，分别反映的是每一天的数据。上面还有3个数字，分别是订单总数、有效订单、订单完成率，它指的是整个时间区间之内总的数据。 原型图： 业务规则： - 有效订单指状态为 “已完成” 的订单 - 基于可视化报表的折线图展示订单数据，x轴为日期，y轴为订单数量 - 根据时间选择区间，展示每天的订单总数和有效订单数 - 展示所选时间区间内的有效订单数、总订单数、订单完成率，订单完成率 = 有效订单数 / 总订单数 100% 4.1.2 接口设计 根据上述原型图设计接口。 4.2 代码开发 4.2.1 vo设计 根据订单统计接口的返回结果设计vo： 在sky-pojo模块，orderreportvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor public class orderreportvo implements serializable { //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03 private string datelist; //每日订单数，以逗号分隔，例如：260,210,215 private string ordercountlist; //每日有效订单数，以逗号分隔，例如：20,21,10 private string validordercountlist; //订单总数 private integer totalordercount; //有效订单数 private integer validordercount; //订单完成率 private double ordercompletionrate; } 4.2.2 controller层 在reportcontroller中根据订单统计接口创建orderstatistics方法： java / 订单数据统计 @param begin @param end @return / @getmapping(\"/ordersstatistics\") @apioperation(\"用户数据统计\") public result orderstatistics( @datetimeformat(pattern = \"yyyy-mm-dd\") localdate begin, @datetimeformat(pattern = \"yyyy-mm-dd\") localdate end){ return result.success(reportservice.getorderstatistics(begin,end)); } 4.2.3 service层接口 在reportservice接口中声明getorderstatistics方法： java / 根据时间区间统计订单数量 @param begin @param end @return / orderreportvo getorderstatistics(localdate begin, localdate end); 4.2.4 service层实现类 在reportserviceimpl实现类中实现getorderstatistics方法： java / 根据时间区间统计订单数量 @param begin @param end @return / public orderreportvo getorderstatistics(localdate begin, localdate end){ list datelist = new arraylist< (); datelist.add(begin); while (!begin.equals(end)){ begin = begin.plusdays(1); datelist.add(begin); } //每天订单总数集合 list ordercountlist = new arraylist< (); //每天有效订单数集合 list validordercountlist = new arraylist< (); for (localdate date : datelist) { localdatetime begintime = localdatetime.of(date, localtime.min); localdatetime endtime = localdatetime.of(date, localtime.max); //查询每天的总订单数 select count(id) from orders where order_time ? and order_time ? and order_time select count(id) from orders and status = {status} and order_time &gt;= {begin} and order_time &lt;= {end} 4.3 功能测试 可以通过如下方式进行测试： - 接口文档测试 - 前后端联调 重启服务，直接采用前后端联调测试。 进入数据统计模块 1). 查看近7日订单统计 进入开发者模式，查看返回数据 2). 查看近30日订单统计 进入开发者模式，查看返回数据 也可通过断点方式启动，查看每步执行情况。 4.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 5. 销量排名top10 5.1 需求分析和设计 5.1.1 产品原型 所谓销量排名，销量指的是商品销售的数量。项目当中的商品主要包含两类：一个是 套餐 ，一个是 菜品 ，所以销量排名其实指的就是菜品和套餐销售的数量排名。通过柱形图来展示销量排名，这些销量是按照降序来排列，并且只需要统计销量排名前十的商品。 原型图： 业务规则： - 根据时间选择区间，展示销量前10的商品（包括菜品和套餐） - 基于可视化报表的柱状图降序展示商品销量 - 此处的销量为商品销售的份数 5.1.2 接口设计 根据上述原型图设计接口。 5.2 代码开发 5.2.1 vo设计 根据销量排名接口的返回结果设计vo： 在sky-pojo模块，salestop10reportvo.java已定义 java package com.sky.vo; import lombok.allargsconstructor; import lombok.builder; import lombok.data; import lombok.noargsconstructor; import java.io.serializable; @data @builder @noargsconstructor @allargsconstructor public class salestop10reportvo implements serializable { //商品名称列表，以逗号分隔，例如：鱼香肉丝,宫保鸡丁,水煮鱼 private string namelist; //销量列表，以逗号分隔，例如：260,215,200 private string numberlist; } 5.2.2 controller层 在reportcontroller中根据销量排名接口创建top10方法： java / 销量排名统计 @param begin @param end @return / @getmapping(\"/top10\") @apioperation(\"销量排名统计\") public result top10( @datetimeformat(pattern = \"yyyy-mm-dd\") localdate begin, @datetimeformat(pattern = \"yyyy-mm-dd\") localdate end){ return result.success(reportservice.getsalestop10(begin,end)); } 5.2.3 service层接口 在reportservice接口中声明getsalestop10方法： java / 查询指定时间区间内的销量排名top10 @param begin @param end @return / salestop10reportvo getsalestop10(localdate begin, localdate end); 5.2.4 service层实现类 在reportserviceimpl实现类中实现getsalestop10方法： java / 查询指定时间区间内的销量排名top10 @param begin @param end @return / public salestop10reportvo getsalestop10(localdate begin, localdate end){ localdatetime begintime = localdatetime.of(begin, localtime.min); localdatetime endtime = localdatetime.of(end, localtime.max); list goodssalesdtolist = ordermapper.getsalestop10(begintime, endtime); string namelist = stringutils.join(goodssalesdtolist.stream().map(goodssalesdto::getname).collect(collectors.tolist()),\",\"); string numberlist = stringutils.join(goodssalesdtolist.stream().map(goodssalesdto::getnumber).collect(collectors.tolist()),\",\"); return salestop10reportvo.builder() .namelist(namelist) .numberlist(numberlist) .build(); } 5.2.5 mapper层 在ordermapper接口中声明getsalestop10方法： java / 查询商品销量排名 @param begin @param end / list getsalestop10(localdatetime begin, localdatetime end); 在ordermapper.xml文件中编写动态sql： xml select od.name name,sum(od.number) number from order_detail od ,orders o where od.order_id = o.id and o.status = 5 and order_time &gt;= {begin} and order_time &lt;= {end} group by name order by number desc limit 0, 10 5.3 功能测试 可以通过如下方式进行测试： - 接口文档测试 - 前后端联调 重启服务，直接采用前后端联调测试。 查看近30日销量排名top10统计 若查询的某一段时间没有销量数据，则显示不出效果。 进入开发者模式，查看返回数据 也可通过断点方式启动，查看每步执行情况。 5.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  },
  {
    "id": "project-33feb8d93621",
    "version": "0a5a5c7b7c6b",
    "md": "learning/项目学习/智能园区点餐功能/讲义/讲义/day12/苍穹外卖-day12.md",
    "title": "苍穹外卖-day12",
    "description": "- 工作台 - Apache POI - 导出运营数据Excel报表",
    "subject": "projects",
    "kind": "项目原文",
    "order": 22,
    "date": "2026-10-15",
    "tags": [],
    "minutes": 26,
    "outline": [
      {
        "title": "课程内容",
        "anchor": "课程内容",
        "level": 2,
        "text": "  - 工作台 - Apache POI - 导出运营数据Excel报表    功能实现： 工作台 、 数据导出  工作台效果图：      数据导出效果图：    在数据统计页面点击 数据导出 ：生成Excel报表     "
      },
      {
        "title": "1. 工作台",
        "anchor": "1-工作台",
        "level": 2,
        "text": " "
      },
      {
        "title": "1.1 需求分析和设计",
        "anchor": "11-需求分析和设计",
        "level": 3,
        "text": "  1.1.1 产品原型  工作台是系统运营的数据看板，并提供快捷操作入口，可以有效提高商家的工作效率。  工作台展示的数据：  - 今日数据 - 订单管理 - 菜品总览 - 套餐总览 - 订单信息    原型图：      名词解释：  - 营业额：已完成订单的总金额 - 有效订单：已完成订单的数量 - 订单完成率：有效订单数 / 总订单数 100% - 平均客单价：营业额 / 有效订单数 - 新增用户：新增用户的数量    1.1.2 接口设计  通过上述原型图分析，共包含6个接口。  接口设计：  - 今日数据接口 - 订单管理接口 - 菜品总览接口 - 套餐总览接口 - 订单搜索（已完成） - 各个状态的订单数量统计（已完成）    1). 今日数据的接口设计    2). 订单管理的接口设计      3). 菜品总览的接口设计      4). 套餐总览的接口设计     "
      },
      {
        "title": "1.2 代码导入",
        "anchor": "12-代码导入",
        "level": 3,
        "text": "  直接导入课程资料中的工作台模块功能代码即可：    1.2.1 Controller层  添加WorkSpaceController.java  java package com.sky.controller.admin;  import com.sky.result.Result; import com.sky.service.WorkspaceService; import com.sky.vo.BusinessDataVO; import com.sky.vo.DishOverViewVO; import com.sky.vo.OrderOverViewVO; import com.sky.vo.SetmealOverViewVO; import io.swagger.annotations.Api; import io.swagger.annotations.ApiOperation; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController; import java.time.LocalDateTime; import java.time.LocalTime;  / 工作台 / @RestController @RequestMapping(\"/admin/workspace\") @Slf4j @Api(tags = \"工作台相关接口\") public class WorkSpaceController {  @Autowired private WorkspaceService workspaceService;  / 工作台今日数据查询 @return / @GetMapping(\"/businessData\") @ApiOperation(\"工作台今日数据查询\") public Result businessData(){ //获得当天的开始时间 LocalDateTime begin = LocalDateTime.now().with(LocalTime.MIN); //获得当天的结束时间 LocalDateTime end = LocalDateTime.now().with(LocalTime.MAX);  BusinessDataVO businessDataVO = workspaceService.getBusinessData(begin, end); return Result.success(businessDataVO); }  / 查询订单管理数据 @return / @GetMapping(\"/overviewOrders\") @ApiOperation(\"查询订单管理数据\") public Result orderOverView(){ return Result.success(workspaceService.getOrderOverView()); }  / 查询菜品总览 @return / @GetMapping(\"/overviewDishes\") @ApiOperation(\"查询菜品总览\") public Result dishOverView(){ return Result.success(workspaceService.getDishOverView()); }  / 查询套餐总览 @return / @GetMapping(\"/overviewSetmeals\") @ApiOperation(\"查询套餐总览\") public Result setmealOverView(){ return Result.success(workspaceService.getSetmealOverView()); } }     1.2.2 Service层接口  添加WorkspaceService.java  java package com.sky.service;  import com.sky.vo.BusinessDataVO; import com.sky.vo.DishOverViewVO; import com.sky.vo.OrderOverViewVO; import com.sky.vo.SetmealOverViewVO; import java.time.LocalDateTime;  public interface WorkspaceService {  / 根据时间段统计营业数据 @param begin @param end @return / BusinessDataVO getBusinessData(LocalDateTime begin, LocalDateTime end);  / 查询订单管理数据 @return / OrderOverViewVO getOrderOverView();  / 查询菜品总览 @return / DishOverViewVO getDishOverView();  / 查询套餐总览 @return / SetmealOverViewVO getSetmealOverView();  }     1.2.3 Service层实现类  添加WorkspaceServiceImpl.java  java package com.sky.service.impl;  import com.sky.constant.StatusConstant; import com.sky.entity.Orders; import com.sky.mapper.DishMapper; import com.sky.mapper.OrderMapper; import com.sky.mapper.SetmealMapper; import com.sky.mapper.UserMapper; import com.sky.service.WorkspaceService; import com.sky.vo.BusinessDataVO; import com.sky.vo.DishOverViewVO; import com.sky.vo.OrderOverViewVO; import com.sky.vo.SetmealOverViewVO; import lombok.extern.slf4j.Slf4j; import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Service; import java.time.LocalDateTime; import java.time.LocalTime; import java.util.HashMap; import java.util.Map;  @Service @Slf4j public class WorkspaceServiceImpl implements WorkspaceService {  @Autowired private OrderMapper orderMapper; @Autowired private UserMapper userMapper; @Autowired private DishMapper dishMapper; @Autowired private SetmealMapper setmealMapper;  / 根据时间段统计营业数据 @param begin @param end @return / public BusinessDataVO getBusinessData(LocalDateTime begin, LocalDateTime end) { / 营业额：当日已完成订单的总金额 有效订单：当日已完成订单的数量 订单完成率：有效订单数 / 总订单数 平均客单价：营业额 / 有效订单数 新增用户：当日新增用户的数量 /  Map map = new HashMap(); map.put(\"begin\",begin); map.put(\"end\",end);  //查询总订单数 Integer totalOrderCount = orderMapper.countByMap(map);  map.put(\"status\", Orders.COMPLETED); //营业额 Double turnover = orderMapper.sumByMap(map); turnover = turnover == null? 0.0 : turnover;  //有效订单数 Integer validOrderCount = orderMapper.countByMap(map);  Double unitPrice = 0.0;  Double orderCompletionRate = 0.0; if(totalOrderCount != 0 && validOrderCount != 0){ //订单完成率 orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount; //平均客单价 unitPrice = turnover / validOrderCount; }  //新增用户数 Integer newUsers = userMapper.countByMap(map);  return BusinessDataVO.builder() .turnover(turnover) .validOrderCount(validOrderCount) .orderCompletionRate(orderCompletionRate) .unitPrice(unitPrice) .newUsers(newUsers) .build(); }   / 查询订单管理数据  @return / public OrderOverViewVO getOrderOverView() { Map map = new HashMap(); map.put(\"begin\", LocalDateTime.now().with(LocalTime.MIN)); map.put(\"status\", Orders.TO_BE_CONFIRMED);  //待接单 Integer waitingOrders = orderMapper.countByMap(map);  //待派送 map.put(\"status\", Orders.CONFIRMED); Integer deliveredOrders = orderMapper.countByMap(map);  //已完成 map.put(\"status\", Orders.COMPLETED); Integer completedOrders = orderMapper.countByMap(map);  //已取消 map.put(\"status\", Orders.CANCELLED); Integer cancelledOrders = orderMapper.countByMap(map);  //全部订单 map.put(\"status\", null); Integer allOrders = orderMapper.countByMap(map);  return OrderOverViewVO.builder() .waitingOrders(waitingOrders) .deliveredOrders(deliveredOrders) .completedOrders(completedOrders) .cancelledOrders(cancelledOrders) .allOrders(allOrders) .build(); }  / 查询菜品总览  @return / public DishOverViewVO getDishOverView() { Map map = new HashMap(); map.put(\"status\", StatusConstant.ENABLE); Integer sold = dishMapper.countByMap(map);  map.put(\"status\", StatusConstant.DISABLE); Integer discontinued = dishMapper.countByMap(map);  return DishOverViewVO.builder() .sold(sold) .discontinued(discontinued) .build(); }  / 查询套餐总览  @return / public SetmealOverViewVO getSetmealOverView() { Map map = new HashMap(); map.put(\"status\", StatusConstant.ENABLE); Integer sold = setmealMapper.countByMap(map);  map.put(\"status\", StatusConstant.DISABLE); Integer discontinued = setmealMapper.countByMap(map);  return SetmealOverViewVO.builder() .sold(sold) .discontinued(discontinued) .build(); } }     1.2.4 Mapper层  在SetmealMapper中添加countByMap方法定义  java / 根据条件统计套餐数量 @param map @return / Integer countByMap(Map map);   在SetmealMapper.xml中添加对应SQL实现  xml  select count(id) from setmeal   and status = {status}   and category_id = {categoryId}        在DishMapper中添加countByMap方法定义  java / 根据条件统计菜品数量 @param map @return / Integer countByMap(Map map);   在DishMapper.xml中添加对应SQL实现  xml  select count(id) from dish   and status = {status}   and category_id = {categoryId}       "
      },
      {
        "title": "1.3 功能测试",
        "anchor": "13-功能测试",
        "level": 3,
        "text": "  可以通过如下方式进行测试：  - 通过接口文档测试 - 前后端联调测试  接下来我们使用上述两种方式分别测试。  1.3.1 接口文档测试  启动服务 ，访问http://localhost:8080/doc.html，进入工作台相关接口  注意： 使用admin用户登录重新获取token，在全局参数设置中添加，防止token失效。  1). 今日数据查询      2). 菜品总览查询      3). 订单管理数据查询      4). 套餐总览查询      1.3.2 前后端联调测试  启动nginx ,访问 http://localhost，进入工作台    进入开发者模式，分别查看今日数据、订单管理、菜品总览、套餐总览  1). 今日数据查询      2). 订单管理数据查询      3). 菜品总览查询      4). 套餐总览查询     "
      },
      {
        "title": "1.4 代码提交",
        "anchor": "14-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。   "
      },
      {
        "title": "2. Apache POI",
        "anchor": "2-apache-poi",
        "level": 2,
        "text": " "
      },
      {
        "title": "2.1 介绍",
        "anchor": "21-介绍",
        "level": 3,
        "text": "  Apache POI 是一个处理Miscrosoft Office各种文件格式的开源项目。简单来说就是，我们可以使用 POI 在 Java 程序中对Miscrosoft Office各种文件进行读写操作。 一般情况下，POI 都是用于操作 Excel 文件。    Apache POI 的应用场景：  - 银行网银系统导出交易明细    - 各种业务系统导出Excel报表    - 批量导入业务数据     "
      },
      {
        "title": "2.2 入门案例",
        "anchor": "22-入门案例",
        "level": 3,
        "text": "  Apache POI既可以将数据写入Excel文件，也可以读取Excel文件中的数据，接下来分别进行实现。  Apache POI的maven坐标： (项目中已导入)  xml  org.apache.poi poi 3.16   org.apache.poi poi-ooxml 3.16      2.2.1 将数据写入Excel文件  1). 代码开发  java package com.sky.test;  import org.apache.poi.xssf.usermodel.XSSFCell; import org.apache.poi.xssf.usermodel.XSSFRow; import org.apache.poi.xssf.usermodel.XSSFSheet; import org.apache.poi.xssf.usermodel.XSSFWorkbook; import java.io.File; import java.io.FileInputStream; import java.io.FileOutputStream;  public class POITest {  / 基于POI向Excel文件写入数据 @throws Exception / public static void write() throws Exception{ //在内存中创建一个Excel文件对象 XSSFWorkbook excel = new XSSFWorkbook(); //创建Sheet页 XSSFSheet sheet = excel.createSheet(\"itcast\");  //在Sheet页中创建行，0表示第1行 XSSFRow row1 = sheet.createRow(0); //创建单元格并在单元格中设置值，单元格编号也是从0开始，1表示第2个单元格 row1.createCell(1).setCellValue(\"姓名\"); row1.createCell(2).setCellValue(\"城市\");  XSSFRow row2 = sheet.createRow(1); row2.createCell(1).setCellValue(\"张三\"); row2.createCell(2).setCellValue(\"北京\");  XSSFRow row3 = sheet.createRow(2); row3.createCell(1).setCellValue(\"李四\"); row3.createCell(2).setCellValue(\"上海\");  FileOutputStream out = new FileOutputStream(new File(\"D:\\\\itcast.xlsx\")); //通过输出流将内存中的Excel文件写入到磁盘上 excel.write(out);  //关闭资源 out.flush(); out.close(); excel.close(); } public static void main(String[] args) throws Exception { write(); } }   2). 实现效果  在D盘中生成itcast.xlsx文件，创建名称为itcast的Sheet页，同时将内容成功写入。      2.2.2 读取Excel文件中的数据  1). 代码开发  java package com.sky.test;  import org.apache.poi.xssf.usermodel.XSSFCell; import org.apache.poi.xssf.usermodel.XSSFRow; import org.apache.poi.xssf.usermodel.XSSFSheet; import org.apache.poi.xssf.usermodel.XSSFWorkbook; import java.io.File; import java.io.FileInputStream; import java.io.FileOutputStream;  public class POITest { / 基于POI读取Excel文件 @throws Exception / public static void read() throws Exception{ FileInputStream in = new FileInputStream(new File(\"D:\\\\itcast.xlsx\")); //通过输入流读取指定的Excel文件 XSSFWorkbook excel = new XSSFWorkbook(in); //获取Excel文件的第1个Sheet页 XSSFSheet sheet = excel.getSheetAt(0);  //获取Sheet页中的最后一行的行号 int lastRowNum = sheet.getLastRowNum();  for (int i = 0; i <= lastRowNum; i++) { //获取Sheet页中的行 XSSFRow titleRow = sheet.getRow(i); //获取行的第2个单元格 XSSFCell cell1 = titleRow.getCell(1); //获取单元格中的文本内容 String cellValue1 = cell1.getStringCellValue(); //获取行的第3个单元格 XSSFCell cell2 = titleRow.getCell(2); //获取单元格中的文本内容 String cellValue2 = cell2.getStringCellValue();  System.out.println(cellValue1 + \" \" +cellValue2); }  //关闭资源 in.close(); excel.close(); }  public static void main(String[] args) throws Exception { read(); } }      2). 实现效果  将itcast.xlsx文件中的数据进行读取     "
      },
      {
        "title": "3. 导出运营数据Excel报表",
        "anchor": "3-导出运营数据excel报表",
        "level": 2,
        "text": " "
      },
      {
        "title": "3.1 需求分析和设计",
        "anchor": "31-需求分析和设计",
        "level": 3,
        "text": "  3.1.1 产品原型  在数据统计页面，有一个数据导出的按钮，点击该按钮时，其实就会下载一个文件。这个文件实际上是一个Excel形式的文件，文件中主要包含最近30日运营相关的数据。表格的形式已经固定，主要由概览数据和明细数据两部分组成。真正导出这个报表之后，相对应的数字就会填充在表格中，就可以进行存档。  原型图：    导出的Excel报表格式：      业务规则：  - 导出Excel形式的报表文件 - 导出最近30天的运营数据    3.1.2 接口设计  通过上述原型图设计对应的接口。    注意：  - 当前接口没有传递参数，因为导出的是最近30天的运营数据，后端计算即可，所以不需要任何参数  - 当前接口没有返回数据，因为报表导出功能本质上是文件下载，服务端会通过输出流将Excel文件下载到客户端浏览器   "
      },
      {
        "title": "3.2 代码开发",
        "anchor": "32-代码开发",
        "level": 3,
        "text": "  3.2.1 实现步骤  1). 设计Excel模板文件  2). 查询近30天的运营数据  3). 将查询到的运营数据写入模板文件  4). 通过输出流将Excel文件下载到客户端浏览器    3.2.2 Controller层  根据接口定义，在ReportController中创建export方法：  java / 导出运营数据报表 @param response / @GetMapping(\"/export\") @ApiOperation(\"导出运营数据报表\") public void export(HttpServletResponse response){ reportService.exportBusinessData(response); }     3.2.3 Service层接口  在ReportService接口中声明导出运营数据报表的方法：  java / 导出近30天的运营数据报表 @param response / void exportBusinessData(HttpServletResponse response);     3.2.4 Service层实现类  在ReportServiceImpl实现类中实现导出运营数据报表的方法:  提前将资料中的 运营数据报表模板.xlsx 拷贝到项目的resources/template目录中  java / 导出近30天的运营数据报表 @param response / public void exportBusinessData(HttpServletResponse response) { LocalDate begin = LocalDate.now().minusDays(30); LocalDate end = LocalDate.now().minusDays(1); //查询概览运营数据，提供给Excel模板文件 BusinessDataVO businessData = workspaceService.getBusinessData(LocalDateTime.of(begin,LocalTime.MIN), LocalDateTime.of(end, LocalTime.MAX)); InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream(\"template/运营数据报表模板.xlsx\"); try { //基于提供好的模板文件创建一个新的Excel表格对象 XSSFWorkbook excel = new XSSFWorkbook(inputStream); //获得Excel文件中的一个Sheet页 XSSFSheet sheet = excel.getSheet(\"Sheet1\");  sheet.getRow(1).getCell(1).setCellValue(begin + \"至\" + end); //获得第4行 XSSFRow row = sheet.getRow(3); //获取单元格 row.getCell(2).setCellValue(businessData.getTurnover()); row.getCell(4).setCellValue(businessData.getOrderCompletionRate()); row.getCell(6).setCellValue(businessData.getNewUsers()); row = sheet.getRow(4); row.getCell(2).setCellValue(businessData.getValidOrderCount()); row.getCell(4).setCellValue(businessData.getUnitPrice()); for (int i = 0; i < 30; i++) { LocalDate date = begin.plusDays(i); //准备明细数据 businessData = workspaceService.getBusinessData(LocalDateTime.of(date,LocalTime.MIN), LocalDateTime.of(date, LocalTime.MAX)); row = sheet.getRow(7 + i); row.getCell(1).setCellValue(date.toString()); row.getCell(2).setCellValue(businessData.getTurnover()); row.getCell(3).setCellValue(businessData.getValidOrderCount()); row.getCell(4).setCellValue(businessData.getOrderCompletionRate()); row.getCell(5).setCellValue(businessData.getUnitPrice()); row.getCell(6).setCellValue(businessData.getNewUsers()); } //通过输出流将文件下载到客户端浏览器中 ServletOutputStream out = response.getOutputStream(); excel.write(out); //关闭资源 out.flush(); out.close(); excel.close();  }catch (IOException e){ e.printStackTrace(); } }    "
      },
      {
        "title": "3.3 功能测试",
        "anchor": "33-功能测试",
        "level": 3,
        "text": "  直接使用前后端联调测试。  进入数据统计    点击数据导出 ：Excel报表下载成功     "
      },
      {
        "title": "3.4 代码提交",
        "anchor": "34-代码提交",
        "level": 3,
        "text": "    后续步骤和其它功能代码提交一致，不再赘述。"
      }
    ],
    "questions": [],
    "searchText": "苍穹外卖-day12 课程内容 - 工作台 - apache poi - 导出运营数据excel报表 功能实现： 工作台 、 数据导出 工作台效果图： 数据导出效果图： 在数据统计页面点击 数据导出 ：生成excel报表 1. 工作台 1.1 需求分析和设计 1.1.1 产品原型 工作台是系统运营的数据看板，并提供快捷操作入口，可以有效提高商家的工作效率。 工作台展示的数据： - 今日数据 - 订单管理 - 菜品总览 - 套餐总览 - 订单信息 原型图： 名词解释： - 营业额：已完成订单的总金额 - 有效订单：已完成订单的数量 - 订单完成率：有效订单数 / 总订单数 100% - 平均客单价：营业额 / 有效订单数 - 新增用户：新增用户的数量 1.1.2 接口设计 通过上述原型图分析，共包含6个接口。 接口设计： - 今日数据接口 - 订单管理接口 - 菜品总览接口 - 套餐总览接口 - 订单搜索（已完成） - 各个状态的订单数量统计（已完成） 1). 今日数据的接口设计 2). 订单管理的接口设计 3). 菜品总览的接口设计 4). 套餐总览的接口设计 1.2 代码导入 直接导入课程资料中的工作台模块功能代码即可： 1.2.1 controller层 添加workspacecontroller.java java package com.sky.controller.admin; import com.sky.result.result; import com.sky.service.workspaceservice; import com.sky.vo.businessdatavo; import com.sky.vo.dishoverviewvo; import com.sky.vo.orderoverviewvo; import com.sky.vo.setmealoverviewvo; import io.swagger.annotations.api; import io.swagger.annotations.apioperation; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.web.bind.annotation.getmapping; import org.springframework.web.bind.annotation.requestmapping; import org.springframework.web.bind.annotation.restcontroller; import java.time.localdatetime; import java.time.localtime; / 工作台 / @restcontroller @requestmapping(\"/admin/workspace\") @slf4j @api(tags = \"工作台相关接口\") public class workspacecontroller { @autowired private workspaceservice workspaceservice; / 工作台今日数据查询 @return / @getmapping(\"/businessdata\") @apioperation(\"工作台今日数据查询\") public result businessdata(){ //获得当天的开始时间 localdatetime begin = localdatetime.now().with(localtime.min); //获得当天的结束时间 localdatetime end = localdatetime.now().with(localtime.max); businessdatavo businessdatavo = workspaceservice.getbusinessdata(begin, end); return result.success(businessdatavo); } / 查询订单管理数据 @return / @getmapping(\"/overvieworders\") @apioperation(\"查询订单管理数据\") public result orderoverview(){ return result.success(workspaceservice.getorderoverview()); } / 查询菜品总览 @return / @getmapping(\"/overviewdishes\") @apioperation(\"查询菜品总览\") public result dishoverview(){ return result.success(workspaceservice.getdishoverview()); } / 查询套餐总览 @return / @getmapping(\"/overviewsetmeals\") @apioperation(\"查询套餐总览\") public result setmealoverview(){ return result.success(workspaceservice.getsetmealoverview()); } } 1.2.2 service层接口 添加workspaceservice.java java package com.sky.service; import com.sky.vo.businessdatavo; import com.sky.vo.dishoverviewvo; import com.sky.vo.orderoverviewvo; import com.sky.vo.setmealoverviewvo; import java.time.localdatetime; public interface workspaceservice { / 根据时间段统计营业数据 @param begin @param end @return / businessdatavo getbusinessdata(localdatetime begin, localdatetime end); / 查询订单管理数据 @return / orderoverviewvo getorderoverview(); / 查询菜品总览 @return / dishoverviewvo getdishoverview(); / 查询套餐总览 @return / setmealoverviewvo getsetmealoverview(); } 1.2.3 service层实现类 添加workspaceserviceimpl.java java package com.sky.service.impl; import com.sky.constant.statusconstant; import com.sky.entity.orders; import com.sky.mapper.dishmapper; import com.sky.mapper.ordermapper; import com.sky.mapper.setmealmapper; import com.sky.mapper.usermapper; import com.sky.service.workspaceservice; import com.sky.vo.businessdatavo; import com.sky.vo.dishoverviewvo; import com.sky.vo.orderoverviewvo; import com.sky.vo.setmealoverviewvo; import lombok.extern.slf4j.slf4j; import org.springframework.beans.factory.annotation.autowired; import org.springframework.stereotype.service; import java.time.localdatetime; import java.time.localtime; import java.util.hashmap; import java.util.map; @service @slf4j public class workspaceserviceimpl implements workspaceservice { @autowired private ordermapper ordermapper; @autowired private usermapper usermapper; @autowired private dishmapper dishmapper; @autowired private setmealmapper setmealmapper; / 根据时间段统计营业数据 @param begin @param end @return / public businessdatavo getbusinessdata(localdatetime begin, localdatetime end) { / 营业额：当日已完成订单的总金额 有效订单：当日已完成订单的数量 订单完成率：有效订单数 / 总订单数 平均客单价：营业额 / 有效订单数 新增用户：当日新增用户的数量 / map map = new hashmap(); map.put(\"begin\",begin); map.put(\"end\",end); //查询总订单数 integer totalordercount = ordermapper.countbymap(map); map.put(\"status\", orders.completed); //营业额 double turnover = ordermapper.sumbymap(map); turnover = turnover == null? 0.0 : turnover; //有效订单数 integer validordercount = ordermapper.countbymap(map); double unitprice = 0.0; double ordercompletionrate = 0.0; if(totalordercount != 0 && validordercount != 0){ //订单完成率 ordercompletionrate = validordercount.doublevalue() / totalordercount; //平均客单价 unitprice = turnover / validordercount; } //新增用户数 integer newusers = usermapper.countbymap(map); return businessdatavo.builder() .turnover(turnover) .validordercount(validordercount) .ordercompletionrate(ordercompletionrate) .unitprice(unitprice) .newusers(newusers) .build(); } / 查询订单管理数据 @return / public orderoverviewvo getorderoverview() { map map = new hashmap(); map.put(\"begin\", localdatetime.now().with(localtime.min)); map.put(\"status\", orders.to_be_confirmed); //待接单 integer waitingorders = ordermapper.countbymap(map); //待派送 map.put(\"status\", orders.confirmed); integer deliveredorders = ordermapper.countbymap(map); //已完成 map.put(\"status\", orders.completed); integer completedorders = ordermapper.countbymap(map); //已取消 map.put(\"status\", orders.cancelled); integer cancelledorders = ordermapper.countbymap(map); //全部订单 map.put(\"status\", null); integer allorders = ordermapper.countbymap(map); return orderoverviewvo.builder() .waitingorders(waitingorders) .deliveredorders(deliveredorders) .completedorders(completedorders) .cancelledorders(cancelledorders) .allorders(allorders) .build(); } / 查询菜品总览 @return / public dishoverviewvo getdishoverview() { map map = new hashmap(); map.put(\"status\", statusconstant.enable); integer sold = dishmapper.countbymap(map); map.put(\"status\", statusconstant.disable); integer discontinued = dishmapper.countbymap(map); return dishoverviewvo.builder() .sold(sold) .discontinued(discontinued) .build(); } / 查询套餐总览 @return / public setmealoverviewvo getsetmealoverview() { map map = new hashmap(); map.put(\"status\", statusconstant.enable); integer sold = setmealmapper.countbymap(map); map.put(\"status\", statusconstant.disable); integer discontinued = setmealmapper.countbymap(map); return setmealoverviewvo.builder() .sold(sold) .discontinued(discontinued) .build(); } } 1.2.4 mapper层 在setmealmapper中添加countbymap方法定义 java / 根据条件统计套餐数量 @param map @return / integer countbymap(map map); 在setmealmapper.xml中添加对应sql实现 xml select count(id) from setmeal and status = {status} and category_id = {categoryid} 在dishmapper中添加countbymap方法定义 java / 根据条件统计菜品数量 @param map @return / integer countbymap(map map); 在dishmapper.xml中添加对应sql实现 xml select count(id) from dish and status = {status} and category_id = {categoryid} 1.3 功能测试 可以通过如下方式进行测试： - 通过接口文档测试 - 前后端联调测试 接下来我们使用上述两种方式分别测试。 1.3.1 接口文档测试 启动服务 ，访问http://localhost:8080/doc.html，进入工作台相关接口 注意： 使用admin用户登录重新获取token，在全局参数设置中添加，防止token失效。 1). 今日数据查询 2). 菜品总览查询 3). 订单管理数据查询 4). 套餐总览查询 1.3.2 前后端联调测试 启动nginx ,访问 http://localhost，进入工作台 进入开发者模式，分别查看今日数据、订单管理、菜品总览、套餐总览 1). 今日数据查询 2). 订单管理数据查询 3). 菜品总览查询 4). 套餐总览查询 1.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。 2. apache poi 2.1 介绍 apache poi 是一个处理miscrosoft office各种文件格式的开源项目。简单来说就是，我们可以使用 poi 在 java 程序中对miscrosoft office各种文件进行读写操作。 一般情况下，poi 都是用于操作 excel 文件。 apache poi 的应用场景： - 银行网银系统导出交易明细 - 各种业务系统导出excel报表 - 批量导入业务数据 2.2 入门案例 apache poi既可以将数据写入excel文件，也可以读取excel文件中的数据，接下来分别进行实现。 apache poi的maven坐标： (项目中已导入) xml org.apache.poi poi 3.16 org.apache.poi poi-ooxml 3.16 2.2.1 将数据写入excel文件 1). 代码开发 java package com.sky.test; import org.apache.poi.xssf.usermodel.xssfcell; import org.apache.poi.xssf.usermodel.xssfrow; import org.apache.poi.xssf.usermodel.xssfsheet; import org.apache.poi.xssf.usermodel.xssfworkbook; import java.io.file; import java.io.fileinputstream; import java.io.fileoutputstream; public class poitest { / 基于poi向excel文件写入数据 @throws exception / public static void write() throws exception{ //在内存中创建一个excel文件对象 xssfworkbook excel = new xssfworkbook(); //创建sheet页 xssfsheet sheet = excel.createsheet(\"itcast\"); //在sheet页中创建行，0表示第1行 xssfrow row1 = sheet.createrow(0); //创建单元格并在单元格中设置值，单元格编号也是从0开始，1表示第2个单元格 row1.createcell(1).setcellvalue(\"姓名\"); row1.createcell(2).setcellvalue(\"城市\"); xssfrow row2 = sheet.createrow(1); row2.createcell(1).setcellvalue(\"张三\"); row2.createcell(2).setcellvalue(\"北京\"); xssfrow row3 = sheet.createrow(2); row3.createcell(1).setcellvalue(\"李四\"); row3.createcell(2).setcellvalue(\"上海\"); fileoutputstream out = new fileoutputstream(new file(\"d:\\\\itcast.xlsx\")); //通过输出流将内存中的excel文件写入到磁盘上 excel.write(out); //关闭资源 out.flush(); out.close(); excel.close(); } public static void main(string[] args) throws exception { write(); } } 2). 实现效果 在d盘中生成itcast.xlsx文件，创建名称为itcast的sheet页，同时将内容成功写入。 2.2.2 读取excel文件中的数据 1). 代码开发 java package com.sky.test; import org.apache.poi.xssf.usermodel.xssfcell; import org.apache.poi.xssf.usermodel.xssfrow; import org.apache.poi.xssf.usermodel.xssfsheet; import org.apache.poi.xssf.usermodel.xssfworkbook; import java.io.file; import java.io.fileinputstream; import java.io.fileoutputstream; public class poitest { / 基于poi读取excel文件 @throws exception / public static void read() throws exception{ fileinputstream in = new fileinputstream(new file(\"d:\\\\itcast.xlsx\")); //通过输入流读取指定的excel文件 xssfworkbook excel = new xssfworkbook(in); //获取excel文件的第1个sheet页 xssfsheet sheet = excel.getsheetat(0); //获取sheet页中的最后一行的行号 int lastrownum = sheet.getlastrownum(); for (int i = 0; i 3. 导出运营数据excel报表 3.1 需求分析和设计 3.1.1 产品原型 在数据统计页面，有一个数据导出的按钮，点击该按钮时，其实就会下载一个文件。这个文件实际上是一个excel形式的文件，文件中主要包含最近30日运营相关的数据。表格的形式已经固定，主要由概览数据和明细数据两部分组成。真正导出这个报表之后，相对应的数字就会填充在表格中，就可以进行存档。 原型图： 导出的excel报表格式： 业务规则： - 导出excel形式的报表文件 - 导出最近30天的运营数据 3.1.2 接口设计 通过上述原型图设计对应的接口。 注意： - 当前接口没有传递参数，因为导出的是最近30天的运营数据，后端计算即可，所以不需要任何参数 - 当前接口没有返回数据，因为报表导出功能本质上是文件下载，服务端会通过输出流将excel文件下载到客户端浏览器 3.2 代码开发 3.2.1 实现步骤 1). 设计excel模板文件 2). 查询近30天的运营数据 3). 将查询到的运营数据写入模板文件 4). 通过输出流将excel文件下载到客户端浏览器 3.2.2 controller层 根据接口定义，在reportcontroller中创建export方法： java / 导出运营数据报表 @param response / @getmapping(\"/export\") @apioperation(\"导出运营数据报表\") public void export(httpservletresponse response){ reportservice.exportbusinessdata(response); } 3.2.3 service层接口 在reportservice接口中声明导出运营数据报表的方法： java / 导出近30天的运营数据报表 @param response / void exportbusinessdata(httpservletresponse response); 3.2.4 service层实现类 在reportserviceimpl实现类中实现导出运营数据报表的方法: 提前将资料中的 运营数据报表模板.xlsx 拷贝到项目的resources/template目录中 java / 导出近30天的运营数据报表 @param response / public void exportbusinessdata(httpservletresponse response) { localdate begin = localdate.now().minusdays(30); localdate end = localdate.now().minusdays(1); //查询概览运营数据，提供给excel模板文件 businessdatavo businessdata = workspaceservice.getbusinessdata(localdatetime.of(begin,localtime.min), localdatetime.of(end, localtime.max)); inputstream inputstream = this.getclass().getclassloader().getresourceasstream(\"template/运营数据报表模板.xlsx\"); try { //基于提供好的模板文件创建一个新的excel表格对象 xssfworkbook excel = new xssfworkbook(inputstream); //获得excel文件中的一个sheet页 xssfsheet sheet = excel.getsheet(\"sheet1\"); sheet.getrow(1).getcell(1).setcellvalue(begin + \"至\" + end); //获得第4行 xssfrow row = sheet.getrow(3); //获取单元格 row.getcell(2).setcellvalue(businessdata.getturnover()); row.getcell(4).setcellvalue(businessdata.getordercompletionrate()); row.getcell(6).setcellvalue(businessdata.getnewusers()); row = sheet.getrow(4); row.getcell(2).setcellvalue(businessdata.getvalidordercount()); row.getcell(4).setcellvalue(businessdata.getunitprice()); for (int i = 0; i 点击数据导出 ：excel报表下载成功 3.4 代码提交 后续步骤和其它功能代码提交一致，不再赘述。"
  }
];

var learningSubjects = [
  {
    "id": "java-basics",
    "name": "Java 基础与进阶",
    "description": "建立类型、对象、集合、函数式处理与资源管理的可验证基础。",
    "prerequisites": [],
    "count": 11,
    "entry": "learning/courses/java-basics/01-java-types.md"
  },
  {
    "id": "java-concurrency",
    "name": "Java 并发与 JVM",
    "description": "从共享状态、线程池到运行时排障与网络 IO。",
    "prerequisites": [
      "java-basics"
    ],
    "count": 6,
    "entry": "learning/courses/java-concurrency/01-java-threads.md"
  },
  {
    "id": "networks",
    "name": "计算机网络",
    "description": "从一条请求到地址、安全、性能与实时传输。",
    "prerequisites": [],
    "count": 5,
    "entry": "learning/courses/networks/layers-addresses.md"
  },
  {
    "id": "operating-systems",
    "name": "操作系统基础",
    "description": "执行现场、调度、构建过程与资源等待的工程解释。",
    "prerequisites": [],
    "count": 3,
    "entry": "learning/courses/operating-systems/processes-scheduling.md"
  },
  {
    "id": "java-web",
    "name": "Spring Web 与应用装配",
    "description": "以 Boot 3.x 运行环境串联 IoC、代理与 HTTP 请求处理。",
    "prerequisites": [
      "java-basics"
    ],
    "count": 6,
    "entry": "learning/courses/java-web/01-java-boot.md"
  },
  {
    "id": "java-data",
    "name": "数据库与 Java 持久层",
    "description": "理解 JDBC、MyBatis、条件查询与业务事务。",
    "prerequisites": [
      "java-basics",
      "java-web"
    ],
    "count": 4,
    "entry": "learning/courses/java-data/01-java-jdbc.md"
  },
  {
    "id": "java-engineering",
    "name": "安全与工程实践",
    "description": "落实认证授权、上下文生命周期、测试与工具调用边界。",
    "prerequisites": [
      "java-web",
      "java-data"
    ],
    "count": 5,
    "entry": "learning/courses/java-engineering/01-java-passwords.md"
  },
  {
    "id": "algorithms",
    "name": "算法与数据结构",
    "description": "以不变量、状态和复杂度串联刷题与工程例子。",
    "prerequisites": [],
    "count": 13,
    "entry": "learning/courses/algorithms/invariants-search.md"
  },
  {
    "id": "generative-engineering",
    "name": "生成式软件工程",
    "description": "把可验证任务、证据与上下文管理作为协作基础。",
    "prerequisites": [],
    "count": 2,
    "entry": "learning/courses/generative-engineering/context-evidence.md"
  },
  {
    "id": "embedded",
    "name": "嵌入式与 STM32",
    "description": "用具体芯片边界理解内核、外设寄存器和 HAL。",
    "prerequisites": [
      "operating-systems"
    ],
    "count": 1,
    "entry": "learning/courses/embedded/stm32-registers.md"
  },
  {
    "id": "projects",
    "name": "项目学习 · 原文资料",
    "description": "保留的项目笔记与课程讲义；正文未经本次重写。",
    "prerequisites": [],
    "count": 15,
    "entry": "learning/项目学习/README.md"
  }
];

var courseMap = {
  "version": 1,
  "baseline": "Java 17+ / Spring Boot 3.x",
  "courses": [
    {
      "id": "java-basics",
      "title": "Java 基础与进阶",
      "description": "建立类型、对象、集合、函数式处理与资源管理的可验证基础。",
      "prerequisites": [],
      "chapters": [
        {
          "id": "java-types",
          "md": "learning/courses/java-basics/01-java-types.md",
          "title": "运行平台、类型与数值边界",
          "order": 1,
          "sources": [
            "learning/java/01-基础语法与类型.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-packages",
          "md": "learning/courses/java-basics/02-java-packages.md",
          "title": "包、导入与项目边界",
          "order": 2,
          "sources": [
            "learning/java/02-包与导入.md",
            "learning/java/00-总览与速记.md"
          ]
        },
        {
          "id": "java-strings",
          "md": "learning/courses/java-basics/03-java-strings.md",
          "title": "字符串、Unicode 与控制流",
          "order": 3,
          "sources": [
            "learning/java/03-字符串与构建器.md",
            "learning/java/04-控制流.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-objects",
          "md": "learning/courses/java-basics/04-java-objects.md",
          "title": "对象、继承与接口契约",
          "order": 4,
          "sources": [
            "learning/java/05-面向对象.md",
            "learning/java/06-抽象类与接口.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-lambda",
          "md": "learning/courses/java-basics/05-java-lambda.md",
          "title": "内部类、Lambda 与回调",
          "order": 5,
          "sources": [
            "learning/java/07-内部类.md",
            "learning/java/Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-exceptions",
          "md": "learning/courses/java-basics/06-java-exceptions.md",
          "title": "异常传播与资源清理",
          "order": 6,
          "sources": [
            "learning/java/08-异常.md",
            "learning/java/13-IO与资源管理.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-collections",
          "md": "learning/courses/java-basics/07-java-collections.md",
          "title": "集合选择与相等性",
          "order": 7,
          "sources": [
            "learning/java/11-集合框架.md",
            "learning/java/12-泛型.md"
          ]
        },
        {
          "id": "java-generics",
          "md": "learning/courses/java-basics/08-java-generics.md",
          "title": "泛型、通配符与类型擦除",
          "order": 8,
          "sources": [
            "learning/java/12-泛型.md",
            "learning/java/11-集合框架.md"
          ]
        },
        {
          "id": "java-streams",
          "md": "learning/courses/java-basics/09-java-streams.md",
          "title": "Stream 与展示模型转换",
          "order": 9,
          "sources": [
            "learning/java/Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-reflection",
          "md": "learning/courses/java-basics/10-java-reflection.md",
          "title": "JavaBean、record 与反射",
          "order": 10,
          "sources": [
            "learning/java/09-JavaBean与反射.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md"
          ]
        },
        {
          "id": "java-time",
          "md": "learning/courses/java-basics/11-java-time.md",
          "title": "时间、正则与边界输入",
          "order": 11,
          "sources": [
            "learning/java/15-日期时间与正则.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        }
      ]
    },
    {
      "id": "java-concurrency",
      "title": "Java 并发与 JVM",
      "description": "从共享状态、线程池到运行时排障与网络 IO。",
      "prerequisites": [
        "java-basics"
      ],
      "chapters": [
        {
          "id": "java-threads",
          "md": "learning/courses/java-concurrency/01-java-threads.md",
          "title": "线程、锁与协作取消",
          "order": 1,
          "sources": [
            "learning/java/14-多线程与锁.md",
            "learning/java/17-JUC并发工具.md"
          ]
        },
        {
          "id": "java-jmm",
          "md": "learning/courses/java-concurrency/02-java-jmm.md",
          "title": "JMM、happens-before 与 volatile",
          "order": 2,
          "sources": [
            "learning/java/19-JMM与内存可见性.md",
            "learning/java/20-volatile.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md"
          ]
        },
        {
          "id": "java-juc",
          "md": "learning/courses/java-concurrency/03-java-juc.md",
          "title": "原子类、并发容器与限流协作",
          "order": 3,
          "sources": [
            "learning/java/17-JUC并发工具.md"
          ]
        },
        {
          "id": "java-executors",
          "md": "learning/courses/java-concurrency/04-java-executors.md",
          "title": "线程池、Future 与异步编排",
          "order": 4,
          "sources": [
            "learning/java/21-线程池与异步编程.md",
            "learning/java/17-JUC并发工具.md"
          ]
        },
        {
          "id": "java-jvm",
          "md": "learning/courses/java-concurrency/05-java-jvm.md",
          "title": "类加载、栈帧与运行时排障",
          "order": 5,
          "sources": [
            "learning/java/22-类加载机制.md",
            "learning/java/23-JVM字节码与栈帧.md"
          ]
        },
        {
          "id": "java-sockets",
          "md": "learning/courses/java-concurrency/06-java-sockets.md",
          "title": "Socket、协议边界与 NIO",
          "order": 6,
          "sources": [
            "learning/java/18-网络编程基础.md",
            "learning/java/24-Socket进阶与NIO.md"
          ]
        }
      ]
    },
    {
      "id": "networks",
      "title": "计算机网络",
      "description": "从一条请求到地址、安全、性能与实时传输。",
      "prerequisites": [],
      "chapters": [
        {
          "id": "net-layers-addresses",
          "md": "learning/courses/networks/layers-addresses.md",
          "title": "分层、地址与一次发包",
          "order": 1,
          "sources": [
            "learning/计算机网络/00-总览与速记.md",
            "learning/计算机网络/01-网络概述与体系结构.md",
            "learning/计算机网络/02-网络体系与地址.md",
            "learning/计算机网络/互联网网络安全与代理原理学习笔记.md"
          ]
        },
        {
          "id": "net-dns-request-diagnosis",
          "md": "learning/courses/networks/dns-request-diagnosis.md",
          "title": "DNS、TCP 与面向服务的排障",
          "order": 2,
          "sources": [
            "learning/计算机网络/03-应用层服务与排障.md",
            "learning/计算机网络/互联网网络安全与代理原理学习笔记.md",
            "learning/计算机网络/00-总览与速记.md"
          ]
        },
        {
          "id": "net-tls-proxy-boundaries",
          "md": "learning/courses/networks/tls-proxy-boundaries.md",
          "title": "TLS、代理与信任边界",
          "order": 3,
          "sources": [
            "learning/计算机网络/互联网网络安全与代理原理学习笔记.md",
            "learning/计算机网络/03-应用层服务与排障.md"
          ]
        },
        {
          "id": "net-performance",
          "md": "learning/courses/networks/performance.md",
          "title": "性能指标与排队：带宽不是响应速度",
          "order": 4,
          "sources": [
            "learning/计算机网络/04-网络性能指标.md",
            "learning/计算机网络/00-总览与速记.md"
          ]
        },
        {
          "id": "net-p2p-transfer",
          "md": "learning/courses/networks/p2p-transfer.md",
          "title": "P2P、ICE 与可靠文件传输",
          "order": 5,
          "sources": [
            "learning/计算机网络/05-传输技术与P2P.md",
            "learning/计算机网络/00-总览与速记.md"
          ]
        }
      ]
    },
    {
      "id": "operating-systems",
      "title": "操作系统基础",
      "description": "执行现场、调度、构建过程与资源等待的工程解释。",
      "prerequisites": [],
      "chapters": [
        {
          "id": "os-processes-scheduling",
          "md": "learning/courses/operating-systems/processes-scheduling.md",
          "title": "进程、线程与调度：谁在等待什么",
          "order": 1,
          "sources": [
            "learning/os/00-总览与速记.md",
            "learning/os/01-操作系统基础概念.md",
            "learning/os/03-线程与处理机调度.md"
          ]
        },
        {
          "id": "os-compile-link",
          "md": "learning/courses/operating-systems/compile-link.md",
          "title": "从源码到运行：编译、链接与诊断",
          "order": 2,
          "sources": [
            "learning/os/00-总览与速记.md",
            "learning/os/02-从源码到可执行文件.md"
          ]
        },
        {
          "id": "os-deadlocks",
          "md": "learning/courses/operating-systems/deadlocks.md",
          "title": "死锁、资源顺序与安全状态",
          "order": 3,
          "sources": [
            "learning/os/00-总览与速记.md",
            "learning/os/04-死锁.md",
            "learning/os/03-线程与处理机调度.md"
          ]
        }
      ]
    },
    {
      "id": "java-web",
      "title": "Spring Web 与应用装配",
      "description": "以 Boot 3.x 运行环境串联 IoC、代理与 HTTP 请求处理。",
      "prerequisites": [
        "java-basics"
      ],
      "chapters": [
        {
          "id": "java-boot",
          "md": "learning/courses/java-web/01-java-boot.md",
          "title": "Spring Boot 3：启动、Starter 与自动配置",
          "order": 1,
          "sources": [
            "learning/java/27-SpringBoot快速入门.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md",
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md"
          ]
        },
        {
          "id": "java-ioc",
          "md": "learning/courses/java-web/02-java-ioc.md",
          "title": "IoC、DI、Bean 作用域与生命周期",
          "order": 2,
          "sources": [
            "learning/java/25-Spring核心与IoC-DI-AOP.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md",
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md"
          ]
        },
        {
          "id": "java-aop",
          "md": "learning/courses/java-web/03-java-aop.md",
          "title": "AOP 代理与横切关注点",
          "order": 3,
          "sources": [
            "learning/java/25-Spring核心与IoC-DI-AOP.md",
            "learning/java/29-常用设计模式.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md"
          ]
        },
        {
          "id": "java-mvc",
          "md": "learning/courses/java-web/04-java-mvc.md",
          "title": "从 HTTP 到 Controller：MVC 请求链",
          "order": 4,
          "sources": [
            "learning/java/26-SpringMVC与请求处理.md",
            "learning/java/28-Tomcat与Servlet及Nginx.md",
            "learning/java/SpringMVC_Tomcat_Servlet_三层架构_核对学习笔记.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md",
            "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-validation",
          "md": "learning/courses/java-web/05-java-validation.md",
          "title": "DTO、校验与统一错误响应",
          "order": 5,
          "sources": [
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md",
            "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-filters",
          "md": "learning/courses/java-web/06-java-filters.md",
          "title": "Filter、Interceptor 与部署接入",
          "order": 6,
          "sources": [
            "learning/java/26-SpringMVC与请求处理.md",
            "learning/java/28-Tomcat与Servlet及Nginx.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
            "learning/java/SpringMVC_Tomcat_Servlet_三层架构_核对学习笔记.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md"
          ]
        }
      ]
    },
    {
      "id": "java-data",
      "title": "数据库与 Java 持久层",
      "description": "理解 JDBC、MyBatis、条件查询与业务事务。",
      "prerequisites": [
        "java-basics",
        "java-web"
      ],
      "chapters": [
        {
          "id": "java-jdbc",
          "md": "learning/courses/java-data/01-java-jdbc.md",
          "title": "JDBC、参数绑定与连接生命周期",
          "order": 1,
          "sources": [
            "learning/java/30-JDBC与数据库访问.md",
            "learning/java/31-MyBatis基础.md"
          ]
        },
        {
          "id": "java-mybatis",
          "md": "learning/courses/java-data/02-java-mybatis.md",
          "title": "MyBatis 映射与动态 SQL",
          "order": 2,
          "sources": [
            "learning/java/31-MyBatis基础.md",
            "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md"
          ]
        },
        {
          "id": "java-mybatis-plus",
          "md": "learning/courses/java-data/03-java-mybatis-plus.md",
          "title": "MyBatis-Plus 条件构造器与分页",
          "order": 3,
          "sources": [
            "learning/java/Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md",
            "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md",
            "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md"
          ]
        },
        {
          "id": "java-transactions",
          "md": "learning/courses/java-data/04-java-transactions.md",
          "title": "SQL、索引与事务中的业务不变量",
          "order": 4,
          "sources": [
            "learning/java/32-MySQL基础.md",
            "learning/java/25-Spring核心与IoC-DI-AOP.md",
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md"
          ]
        }
      ]
    },
    {
      "id": "java-engineering",
      "title": "安全与工程实践",
      "description": "落实认证授权、上下文生命周期、测试与工具调用边界。",
      "prerequisites": [
        "java-web",
        "java-data"
      ],
      "chapters": [
        {
          "id": "java-passwords",
          "md": "learning/courses/java-engineering/01-java-passwords.md",
          "title": "密码存储、编码与密码学用途",
          "order": 1,
          "sources": [
            "learning/java/16-单元测试与安全基础.md",
            "learning/java/34-密码安全与JWT鉴权.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md"
          ]
        },
        {
          "id": "java-jwt",
          "md": "learning/courses/java-engineering/02-java-jwt.md",
          "title": "JWT 验证、认证与资源授权",
          "order": 2,
          "sources": [
            "learning/java/34-密码安全与JWT鉴权.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md"
          ]
        },
        {
          "id": "java-context",
          "md": "learning/courses/java-engineering/03-java-context.md",
          "title": "ThreadLocal 与请求上下文的清理",
          "order": 3,
          "sources": [
            "learning/java/34-密码安全与JWT鉴权.md",
            "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
            "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md"
          ]
        },
        {
          "id": "java-delivery",
          "md": "learning/courses/java-engineering/04-java-delivery.md",
          "title": "Maven、测试、Git 与证据式调试",
          "order": 4,
          "sources": [
            "learning/java/00-总览与速记.md",
            "learning/java/10-学习方法与重点.md",
            "learning/java/16-单元测试与安全基础.md",
            "learning/java/33-Maven与依赖管理.md",
            "learning/java/35-工程实践Git调试与Spike.md",
            "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md",
            "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md"
          ]
        },
        {
          "id": "java-design-agent",
          "md": "learning/courses/java-engineering/05-java-design-agent.md",
          "title": "设计模式与 Java 工具型 Agent",
          "order": 5,
          "sources": [
            "learning/java/29-常用设计模式.md",
            "learning/java/36-Agent开发与MCP.md",
            "learning/java/35-工程实践Git调试与Spike.md"
          ]
        }
      ]
    },
    {
      "id": "algorithms",
      "title": "算法与数据结构",
      "description": "以不变量、状态和复杂度串联刷题与工程例子。",
      "prerequisites": [],
      "chapters": [
        {
          "id": "algo-invariants-search",
          "md": "learning/courses/algorithms/invariants-search.md",
          "title": "用不变量理解复杂度、二分与双指针",
          "order": 1,
          "sources": [
            "learning/算法/00-总览与速记.md",
            "learning/算法/算法学习笔记_思想与模板.md",
            "learning/算法/算法刷题知识总结.md",
            "learning/算法/算法思想与技巧复盘.md"
          ]
        },
        {
          "id": "algo-merge-radix",
          "md": "learning/courses/algorithms/merge-radix.md",
          "title": "归并与基数排序：稳定性是一条约束",
          "order": 2,
          "sources": [
            "learning/算法/01-归并排序.md",
            "learning/算法/03-基数排序.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-heap-streams",
          "md": "learning/courses/algorithms/heap-streams.md",
          "title": "堆、Top K 与多路有序流",
          "order": 3,
          "sources": [
            "learning/算法/02-堆与堆排序.md",
            "learning/算法/算法刷题知识总结.md",
            "learning/算法/算法学习笔记_思想与模板.md"
          ]
        },
        {
          "id": "algo-linked-list-lru",
          "md": "learning/courses/algorithms/linked-list-lru.md",
          "title": "链表的边界、原地恢复与 LRU",
          "order": 4,
          "sources": [
            "learning/算法/链表算法学习笔记_重思想轻代码.md",
            "learning/算法/回文链表_O1空间_算法学习笔记.md",
            "learning/算法/算法学习笔记_思想与模板.md",
            "learning/算法/算法刷题知识总结.md"
          ]
        },
        {
          "id": "algo-tree-contracts",
          "md": "learning/courses/algorithms/tree-contracts.md",
          "title": "树形 DFS：返回契约、路径与回溯",
          "order": 5,
          "sources": [
            "learning/算法/算法思想与技巧复盘.md",
            "learning/算法/算法刷题知识总结.md",
            "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md"
          ]
        },
        {
          "id": "algo-bfs-grid",
          "md": "learning/courses/algorithms/bfs-grid.md",
          "title": "网格搜索与多源 BFS",
          "order": 6,
          "sources": [
            "learning/算法/算法思想与技巧复盘.md",
            "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md"
          ]
        },
        {
          "id": "algo-disjoint-sets",
          "md": "learning/courses/algorithms/disjoint-sets.md",
          "title": "并查集与动态连通性",
          "order": 7,
          "sources": [
            "learning/算法/04-并查集.md",
            "learning/算法/算法思想与技巧复盘.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-trie-prefixes",
          "md": "learning/courses/algorithms/trie-prefixes.md",
          "title": "Trie：前缀、词频与内存模型",
          "order": 8,
          "sources": [
            "learning/算法/05-前缀树Trie.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-graphs-dependencies-mst",
          "md": "learning/courses/algorithms/graphs-dependencies-mst.md",
          "title": "依赖排序与最小生成树",
          "order": 9,
          "sources": [
            "learning/算法/06-拓扑排序.md",
            "learning/算法/07-最小生成树.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-monotone-structures",
          "md": "learning/courses/algorithms/monotone-structures.md",
          "title": "单调结构与前后缀最值",
          "order": 10,
          "sources": [
            "learning/算法/08-单调栈与单调队列.md",
            "learning/算法/算法刷题知识总结.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-prefix-differences",
          "md": "learning/courses/algorithms/prefix-differences.md",
          "title": "前缀和与二阶差分：从公式检查边界",
          "order": 11,
          "sources": [
            "learning/算法/09-差分.md",
            "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md",
            "learning/算法/00-总览与速记.md"
          ]
        },
        {
          "id": "algo-dp-backtracking",
          "md": "learning/courses/algorithms/dp-backtracking.md",
          "title": "动态规划与回溯：保留足以转移的信息",
          "order": 12,
          "sources": [
            "learning/算法/算法学习笔记_思想与模板.md",
            "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md"
          ]
        },
        {
          "id": "algo-counting-python",
          "md": "learning/courses/algorithms/counting-python.md",
          "title": "数学计数与 Python 模板的成本",
          "order": 13,
          "sources": [
            "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md",
            "learning/算法/算法刷题知识总结.md",
            "learning/算法/算法思想与技巧复盘.md"
          ]
        }
      ]
    },
    {
      "id": "generative-engineering",
      "title": "生成式软件工程",
      "description": "把可验证任务、证据与上下文管理作为协作基础。",
      "prerequisites": [],
      "chapters": [
        {
          "id": "generative-engineering-context-evidence",
          "md": "learning/courses/generative-engineering/context-evidence.md",
          "title": "模型上下文、注意力与证据边界",
          "order": 1,
          "sources": [
            "learning/生成式软件工程笔记/jyy/提示词工程.md"
          ]
        },
        {
          "id": "generative-engineering-verifiable-workflow",
          "md": "learning/courses/generative-engineering/verifiable-workflow.md",
          "title": "可验证的生成式开发流程",
          "order": 2,
          "sources": [
            "learning/生成式软件工程笔记/MattNote.md",
            "learning/生成式软件工程笔记/jyy/提示词工程.md"
          ]
        }
      ]
    },
    {
      "id": "embedded",
      "title": "嵌入式与 STM32",
      "description": "用具体芯片边界理解内核、外设寄存器和 HAL。",
      "prerequisites": [
        "operating-systems"
      ],
      "chapters": [
        {
          "id": "embedded-stm32-registers",
          "md": "learning/courses/embedded/stm32-registers.md",
          "title": "STM32、寄存器与 HAL 的正确边界",
          "order": 1,
          "sources": [
            "learning/嵌入式学习/01-嵌入式与STM32基础.md"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "path": "learning/java/00-总览与速记.md",
      "chapterIds": [
        "java-packages",
        "java-delivery"
      ],
      "disposition": "overview-replaced",
      "reason": "旧主题导航由课程图取代；速记中不准确的绝对表述由各章修正，旧档案路径留原文。"
    },
    {
      "path": "learning/java/01-基础语法与类型.md",
      "chapterIds": [
        "java-types"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/02-包与导入.md",
      "chapterIds": [
        "java-packages"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/03-字符串与构建器.md",
      "chapterIds": [
        "java-strings"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/04-控制流.md",
      "chapterIds": [
        "java-strings"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/05-面向对象.md",
      "chapterIds": [
        "java-objects"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/06-抽象类与接口.md",
      "chapterIds": [
        "java-objects"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/07-内部类.md",
      "chapterIds": [
        "java-lambda"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/08-异常.md",
      "chapterIds": [
        "java-exceptions"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/09-JavaBean与反射.md",
      "chapterIds": [
        "java-reflection"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/10-学习方法与重点.md",
      "chapterIds": [
        "java-delivery"
      ],
      "disposition": "merged-guidance",
      "reason": "将学习循环与能力验收并入工程实践，不保留固定课时或背口诀即掌握的判断。"
    },
    {
      "path": "learning/java/11-集合框架.md",
      "chapterIds": [
        "java-collections",
        "java-generics"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/12-泛型.md",
      "chapterIds": [
        "java-collections",
        "java-generics"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/13-IO与资源管理.md",
      "chapterIds": [
        "java-exceptions"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/14-多线程与锁.md",
      "chapterIds": [
        "java-threads"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/15-日期时间与正则.md",
      "chapterIds": [
        "java-time"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/16-单元测试与安全基础.md",
      "chapterIds": [
        "java-passwords",
        "java-delivery"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/17-JUC并发工具.md",
      "chapterIds": [
        "java-threads",
        "java-juc",
        "java-executors"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/18-网络编程基础.md",
      "chapterIds": [
        "java-sockets"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/19-JMM与内存可见性.md",
      "chapterIds": [
        "java-jmm"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/20-volatile.md",
      "chapterIds": [
        "java-jmm"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/21-线程池与异步编程.md",
      "chapterIds": [
        "java-executors"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/22-类加载机制.md",
      "chapterIds": [
        "java-jvm"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/23-JVM字节码与栈帧.md",
      "chapterIds": [
        "java-jvm"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/24-Socket进阶与NIO.md",
      "chapterIds": [
        "java-sockets"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/25-Spring核心与IoC-DI-AOP.md",
      "chapterIds": [
        "java-ioc",
        "java-aop",
        "java-transactions"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/26-SpringMVC与请求处理.md",
      "chapterIds": [
        "java-mvc",
        "java-filters"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/27-SpringBoot快速入门.md",
      "chapterIds": [
        "java-boot"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/28-Tomcat与Servlet及Nginx.md",
      "chapterIds": [
        "java-mvc",
        "java-filters"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/29-常用设计模式.md",
      "chapterIds": [
        "java-aop",
        "java-design-agent"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/30-JDBC与数据库访问.md",
      "chapterIds": [
        "java-jdbc"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/31-MyBatis基础.md",
      "chapterIds": [
        "java-jdbc",
        "java-mybatis"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/32-MySQL基础.md",
      "chapterIds": [
        "java-transactions"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/33-Maven与依赖管理.md",
      "chapterIds": [
        "java-delivery"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/34-密码安全与JWT鉴权.md",
      "chapterIds": [
        "java-passwords",
        "java-jwt",
        "java-context"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/35-工程实践Git调试与Spike.md",
      "chapterIds": [
        "java-delivery",
        "java-design-agent"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/36-Agent开发与MCP.md",
      "chapterIds": [
        "java-design-agent"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md",
      "chapterIds": [
        "java-lambda",
        "java-streams",
        "java-mybatis-plus"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md",
      "chapterIds": [
        "java-objects",
        "java-ioc",
        "java-filters",
        "java-passwords",
        "java-jwt",
        "java-context"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md",
      "chapterIds": [
        "java-boot",
        "java-ioc",
        "java-mvc",
        "java-validation",
        "java-transactions",
        "java-delivery"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md",
      "chapterIds": [
        "java-types",
        "java-strings",
        "java-objects",
        "java-lambda",
        "java-exceptions",
        "java-streams",
        "java-time",
        "java-boot",
        "java-ioc",
        "java-mvc",
        "java-validation",
        "java-mybatis-plus"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md",
      "chapterIds": [
        "java-reflection",
        "java-ioc",
        "java-mvc",
        "java-filters",
        "java-jwt",
        "java-context"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md",
      "chapterIds": [
        "java-mvc",
        "java-validation",
        "java-mybatis",
        "java-mybatis-plus"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/SpringMVC_Tomcat_Servlet_三层架构_核对学习笔记.md",
      "chapterIds": [
        "java-mvc",
        "java-filters"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md",
      "chapterIds": [
        "java-jmm",
        "java-boot",
        "java-ioc",
        "java-aop",
        "java-mvc",
        "java-filters",
        "java-mybatis",
        "java-transactions",
        "java-delivery"
      ],
      "disposition": "merged-and-corrected",
      "reason": "按知识主题合并重复对话，保留关键疑问与开发场景，规范版本和适用前提；原稿原位保留。"
    },
    {
      "path": "learning/os/00-总览与速记.md",
      "chapterIds": [
        "os-processes-scheduling",
        "os-compile-link",
        "os-deadlocks"
      ],
      "disposition": "merged",
      "reason": "总览和速记合并为课程顺序与各章复习入口，原稿原位保留。"
    },
    {
      "path": "learning/os/01-操作系统基础概念.md",
      "chapterIds": [
        "os-processes-scheduling"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/os/02-从源码到可执行文件.md",
      "chapterIds": [
        "os-compile-link"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/os/03-线程与处理机调度.md",
      "chapterIds": [
        "os-processes-scheduling",
        "os-deadlocks"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/os/04-死锁.md",
      "chapterIds": [
        "os-deadlocks"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/嵌入式学习/01-嵌入式与STM32基础.md",
      "chapterIds": [
        "embedded-stm32-registers"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/生成式软件工程笔记/jyy/提示词工程.md",
      "chapterIds": [
        "generative-engineering-context-evidence",
        "generative-engineering-verifiable-workflow"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/生成式软件工程笔记/MattNote.md",
      "chapterIds": [
        "generative-engineering-verifiable-workflow"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/00-总览与速记.md",
      "chapterIds": [
        "algo-invariants-search",
        "algo-merge-radix",
        "algo-disjoint-sets",
        "algo-trie-prefixes",
        "algo-graphs-dependencies-mst",
        "algo-monotone-structures",
        "algo-prefix-differences"
      ],
      "disposition": "merged",
      "reason": "总览和速记合并为课程顺序与各章复习入口，原稿原位保留。"
    },
    {
      "path": "learning/算法/01-归并排序.md",
      "chapterIds": [
        "algo-merge-radix"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/02-堆与堆排序.md",
      "chapterIds": [
        "algo-heap-streams"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/03-基数排序.md",
      "chapterIds": [
        "algo-merge-radix"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/04-并查集.md",
      "chapterIds": [
        "algo-disjoint-sets"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/05-前缀树Trie.md",
      "chapterIds": [
        "algo-trie-prefixes"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/06-拓扑排序.md",
      "chapterIds": [
        "algo-graphs-dependencies-mst"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/07-最小生成树.md",
      "chapterIds": [
        "algo-graphs-dependencies-mst"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/08-单调栈与单调队列.md",
      "chapterIds": [
        "algo-monotone-structures"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/09-差分.md",
      "chapterIds": [
        "algo-prefix-differences"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/回文链表_O1空间_算法学习笔记.md",
      "chapterIds": [
        "algo-linked-list-lru"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/算法刷题知识总结.md",
      "chapterIds": [
        "algo-invariants-search",
        "algo-heap-streams",
        "algo-linked-list-lru",
        "algo-tree-contracts",
        "algo-monotone-structures",
        "algo-counting-python"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/算法学习笔记_思想与模板.md",
      "chapterIds": [
        "algo-invariants-search",
        "algo-heap-streams",
        "algo-linked-list-lru",
        "algo-dp-backtracking"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/算法思想与技巧复盘.md",
      "chapterIds": [
        "algo-invariants-search",
        "algo-tree-contracts",
        "algo-bfs-grid",
        "algo-disjoint-sets",
        "algo-counting-python"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md",
      "chapterIds": [
        "algo-tree-contracts",
        "algo-bfs-grid",
        "algo-prefix-differences",
        "algo-dp-backtracking",
        "algo-counting-python"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/算法/链表算法学习笔记_重思想轻代码.md",
      "chapterIds": [
        "algo-linked-list-lru"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/00-总览与速记.md",
      "chapterIds": [
        "net-layers-addresses",
        "net-dns-request-diagnosis",
        "net-performance",
        "net-p2p-transfer"
      ],
      "disposition": "merged",
      "reason": "总览和速记合并为课程顺序与各章复习入口，原稿原位保留。"
    },
    {
      "path": "learning/计算机网络/01-网络概述与体系结构.md",
      "chapterIds": [
        "net-layers-addresses"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/02-网络体系与地址.md",
      "chapterIds": [
        "net-layers-addresses"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/03-应用层服务与排障.md",
      "chapterIds": [
        "net-dns-request-diagnosis",
        "net-tls-proxy-boundaries"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/04-网络性能指标.md",
      "chapterIds": [
        "net-performance"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/05-传输技术与P2P.md",
      "chapterIds": [
        "net-p2p-transfer"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    },
    {
      "path": "learning/计算机网络/互联网网络安全与代理原理学习笔记.md",
      "chapterIds": [
        "net-layers-addresses",
        "net-dns-request-diagnosis",
        "net-tls-proxy-boundaries"
      ],
      "disposition": "merged",
      "reason": "按概念与先修关系重新编写，保留原稿；纠错、实例和引用见课程及知识审校记录。"
    }
  ]
};

var sourceMappings = {
  "learning/java/00-总览与速记.md": [
    "java-packages",
    "java-delivery"
  ],
  "learning/java/01-基础语法与类型.md": [
    "java-types"
  ],
  "learning/java/02-包与导入.md": [
    "java-packages"
  ],
  "learning/java/03-字符串与构建器.md": [
    "java-strings"
  ],
  "learning/java/04-控制流.md": [
    "java-strings"
  ],
  "learning/java/05-面向对象.md": [
    "java-objects"
  ],
  "learning/java/06-抽象类与接口.md": [
    "java-objects"
  ],
  "learning/java/07-内部类.md": [
    "java-lambda"
  ],
  "learning/java/08-异常.md": [
    "java-exceptions"
  ],
  "learning/java/09-JavaBean与反射.md": [
    "java-reflection"
  ],
  "learning/java/10-学习方法与重点.md": [
    "java-delivery"
  ],
  "learning/java/11-集合框架.md": [
    "java-collections",
    "java-generics"
  ],
  "learning/java/12-泛型.md": [
    "java-collections",
    "java-generics"
  ],
  "learning/java/13-IO与资源管理.md": [
    "java-exceptions"
  ],
  "learning/java/14-多线程与锁.md": [
    "java-threads"
  ],
  "learning/java/15-日期时间与正则.md": [
    "java-time"
  ],
  "learning/java/16-单元测试与安全基础.md": [
    "java-passwords",
    "java-delivery"
  ],
  "learning/java/17-JUC并发工具.md": [
    "java-threads",
    "java-juc",
    "java-executors"
  ],
  "learning/java/18-网络编程基础.md": [
    "java-sockets"
  ],
  "learning/java/19-JMM与内存可见性.md": [
    "java-jmm"
  ],
  "learning/java/20-volatile.md": [
    "java-jmm"
  ],
  "learning/java/21-线程池与异步编程.md": [
    "java-executors"
  ],
  "learning/java/22-类加载机制.md": [
    "java-jvm"
  ],
  "learning/java/23-JVM字节码与栈帧.md": [
    "java-jvm"
  ],
  "learning/java/24-Socket进阶与NIO.md": [
    "java-sockets"
  ],
  "learning/java/25-Spring核心与IoC-DI-AOP.md": [
    "java-ioc",
    "java-aop",
    "java-transactions"
  ],
  "learning/java/26-SpringMVC与请求处理.md": [
    "java-mvc",
    "java-filters"
  ],
  "learning/java/27-SpringBoot快速入门.md": [
    "java-boot"
  ],
  "learning/java/28-Tomcat与Servlet及Nginx.md": [
    "java-mvc",
    "java-filters"
  ],
  "learning/java/29-常用设计模式.md": [
    "java-aop",
    "java-design-agent"
  ],
  "learning/java/30-JDBC与数据库访问.md": [
    "java-jdbc"
  ],
  "learning/java/31-MyBatis基础.md": [
    "java-jdbc",
    "java-mybatis"
  ],
  "learning/java/32-MySQL基础.md": [
    "java-transactions"
  ],
  "learning/java/33-Maven与依赖管理.md": [
    "java-delivery"
  ],
  "learning/java/34-密码安全与JWT鉴权.md": [
    "java-passwords",
    "java-jwt",
    "java-context"
  ],
  "learning/java/35-工程实践Git调试与Spike.md": [
    "java-delivery",
    "java-design-agent"
  ],
  "learning/java/36-Agent开发与MCP.md": [
    "java-design-agent"
  ],
  "learning/java/Java_Lambda与MyBatis-Plus_聊天核对学习笔记.md": [
    "java-lambda",
    "java-streams",
    "java-mybatis-plus"
  ],
  "learning/java/Java_Spring基础与JWT拦截器_核对版学习笔记.md": [
    "java-objects",
    "java-ioc",
    "java-filters",
    "java-passwords",
    "java-jwt",
    "java-context"
  ],
  "learning/java/Java后端_SSM与SpringMVC_聊天核对学习笔记_2026-10-23.md": [
    "java-boot",
    "java-ioc",
    "java-mvc",
    "java-validation",
    "java-transactions",
    "java-delivery"
  ],
  "learning/java/Java后端_SpringBoot聊天核对与学习笔记.md": [
    "java-types",
    "java-strings",
    "java-objects",
    "java-lambda",
    "java-exceptions",
    "java-streams",
    "java-time",
    "java-boot",
    "java-ioc",
    "java-mvc",
    "java-validation",
    "java-mybatis-plus"
  ],
  "learning/java/Java后端五大基础_校订学习笔记_2026-10-23.md": [
    "java-reflection",
    "java-ioc",
    "java-mvc",
    "java-filters",
    "java-jwt",
    "java-context"
  ],
  "learning/java/SpringBoot后端开发基础_聊天核对与学习笔记.md": [
    "java-mvc",
    "java-validation",
    "java-mybatis",
    "java-mybatis-plus"
  ],
  "learning/java/SpringMVC_Tomcat_Servlet_三层架构_核对学习笔记.md": [
    "java-mvc",
    "java-filters"
  ],
  "learning/java/Spring_Boot_使用与底层执行原理_核对版_2026-10-23.md": [
    "java-jmm",
    "java-boot",
    "java-ioc",
    "java-aop",
    "java-mvc",
    "java-filters",
    "java-mybatis",
    "java-transactions",
    "java-delivery"
  ],
  "learning/os/00-总览与速记.md": [
    "os-processes-scheduling",
    "os-compile-link",
    "os-deadlocks"
  ],
  "learning/os/01-操作系统基础概念.md": [
    "os-processes-scheduling"
  ],
  "learning/os/02-从源码到可执行文件.md": [
    "os-compile-link"
  ],
  "learning/os/03-线程与处理机调度.md": [
    "os-processes-scheduling",
    "os-deadlocks"
  ],
  "learning/os/04-死锁.md": [
    "os-deadlocks"
  ],
  "learning/嵌入式学习/01-嵌入式与STM32基础.md": [
    "embedded-stm32-registers"
  ],
  "learning/生成式软件工程笔记/jyy/提示词工程.md": [
    "generative-engineering-context-evidence",
    "generative-engineering-verifiable-workflow"
  ],
  "learning/生成式软件工程笔记/MattNote.md": [
    "generative-engineering-verifiable-workflow"
  ],
  "learning/算法/00-总览与速记.md": [
    "algo-invariants-search",
    "algo-merge-radix",
    "algo-disjoint-sets",
    "algo-trie-prefixes",
    "algo-graphs-dependencies-mst",
    "algo-monotone-structures",
    "algo-prefix-differences"
  ],
  "learning/算法/01-归并排序.md": [
    "algo-merge-radix"
  ],
  "learning/算法/02-堆与堆排序.md": [
    "algo-heap-streams"
  ],
  "learning/算法/03-基数排序.md": [
    "algo-merge-radix"
  ],
  "learning/算法/04-并查集.md": [
    "algo-disjoint-sets"
  ],
  "learning/算法/05-前缀树Trie.md": [
    "algo-trie-prefixes"
  ],
  "learning/算法/06-拓扑排序.md": [
    "algo-graphs-dependencies-mst"
  ],
  "learning/算法/07-最小生成树.md": [
    "algo-graphs-dependencies-mst"
  ],
  "learning/算法/08-单调栈与单调队列.md": [
    "algo-monotone-structures"
  ],
  "learning/算法/09-差分.md": [
    "algo-prefix-differences"
  ],
  "learning/算法/回文链表_O1空间_算法学习笔记.md": [
    "algo-linked-list-lru"
  ],
  "learning/算法/算法刷题知识总结.md": [
    "algo-invariants-search",
    "algo-heap-streams",
    "algo-linked-list-lru",
    "algo-tree-contracts",
    "algo-monotone-structures",
    "algo-counting-python"
  ],
  "learning/算法/算法学习笔记_思想与模板.md": [
    "algo-invariants-search",
    "algo-heap-streams",
    "algo-linked-list-lru",
    "algo-dp-backtracking"
  ],
  "learning/算法/算法思想与技巧复盘.md": [
    "algo-invariants-search",
    "algo-tree-contracts",
    "algo-bfs-grid",
    "algo-disjoint-sets",
    "algo-counting-python"
  ],
  "learning/算法/算法知识总结_树形DFS_前缀和_DP_Python模板.md": [
    "algo-tree-contracts",
    "algo-bfs-grid",
    "algo-prefix-differences",
    "algo-dp-backtracking",
    "algo-counting-python"
  ],
  "learning/算法/链表算法学习笔记_重思想轻代码.md": [
    "algo-linked-list-lru"
  ],
  "learning/计算机网络/00-总览与速记.md": [
    "net-layers-addresses",
    "net-dns-request-diagnosis",
    "net-performance",
    "net-p2p-transfer"
  ],
  "learning/计算机网络/01-网络概述与体系结构.md": [
    "net-layers-addresses"
  ],
  "learning/计算机网络/02-网络体系与地址.md": [
    "net-layers-addresses"
  ],
  "learning/计算机网络/03-应用层服务与排障.md": [
    "net-dns-request-diagnosis",
    "net-tls-proxy-boundaries"
  ],
  "learning/计算机网络/04-网络性能指标.md": [
    "net-performance"
  ],
  "learning/计算机网络/05-传输技术与P2P.md": [
    "net-p2p-transfer"
  ],
  "learning/计算机网络/互联网网络安全与代理原理学习笔记.md": [
    "net-layers-addresses",
    "net-dns-request-diagnosis",
    "net-tls-proxy-boundaries"
  ]
};
