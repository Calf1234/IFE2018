
## day16:
目标：初步了解 JavaScript/ECMAScript 是什么，开始学习基本的语法

任务：在简历中增加一些按钮，比如和你打招呼，点开看看我的特殊爱好，然后点了按钮以后，在Console或者是页面某个节点来展示一段特殊内容

问题：js-16.html
 ``` js
    // 在异步调用中，有时候要在某个统计数字上加1，而直接用"+"号相连，必定得不到想要的结果，因为默认是两个字符串相连。
    // document.getElementById("result").innerHTML = num1 + num2;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
```

``` js
    // 在设置onclick属性前获取到的num1 num2都是设置的初始值0
    // num1 = document.getElementById("first-number").value;
    // num2 = docuum1 = document.getElementById("first-number").value;ment.getElementById("second-number").value;
```

``` js
    // 在head部分加载js时，会出现无法获取add-btn元素，原因是js加载延迟
    <script>
        //获取的obj为null，这样设置onclick会出现异常
        var obj = document.getElementById("add-btn");
        alert(obj);
    </script>
```

***


day17、day18:
    目标：继续学习 JavaScript 的一些基本知识，比如if如果判断，for循环等

    任务：在你的简历中，实现一个，当用户访问页面的时候，根据当前时间，在页面中输出不同的问候语。比如早上的时候，输出早上好，晚上的时候是晚上好。


day19:
    目标：掌握 JavaScript 的核心之一：DOM，能够熟悉DOM相关操作，了解JavaScript事件机制


day20、day21:
    目标：掌握 JavaScript 事件的概念，并能写出基本的事件相关的代码。掌握如何通过 JavaScript 操作 DOM 的样式


day22、day23、day24:
    目标：掌握 JavaScript 中的各个数据类型、对象的概念及常用方法，


day25、day26、day27:
    目标：学习 JavaScript 的函数，学习如何使用和封装函数，学习Date对象


day28、day29、day30:
    目标：掌握如何分解问题、解决问题，在这个过程中如何设计自己的代码结构，如何优化及重构。


day31、day32、day33:
day34、day35、day36:
    目标：MIS系统


day42、day43:
day44、day45、day46:
day47、day49、day49:
day50、day51、day52、day53:


day54、day55、day56:
day58、day59、day60、day61、day62:
day63、day64、da65、day66: