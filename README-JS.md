
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

任务：
1. 阅读 通过除2取余的方法来把十进制整数转化为二进制，然后做一个小练习
<br>实现当点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的p标签内
<br>转化显示后的二进制数为bin-bit中输入的数字宽度，例如
<br>dec-number为5，bin-bit为5，则转化后数字为00101
<br>如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错

2. 3的小游戏，练习使用循环和条件语句，实现如下需求：
<br>从1到100，以此在console输出各数字，但是，当数字为3的倍数或者含有3的时候，输出“PA”
<br>比如：1,2,PA,4,5,PA,……,11,PA,PA,14,PA……
<br>提示：if、for、String.match

3. 小练习，练习使用循环实现一个九九乘法表
<br>第一步，最低要求：在Console中按行输出 n * m = t
<br>然后，尝试在网页中，使用table来实现一个九九乘法表
<br>提示：createElement、appendChild

4. 在你的简历中，实现一个，当用户访问页面的时候，根据当前时间，在页面中输出不同的问候语。
<br>比如早上的时候，输出早上好，晚上的时候是晚上好。
<br>提示：Date对象

问题：day16/task/resume.html
``` js
    var date = new Date();
    if (date.getHours() < 12) {
        // 暂时没有解决，遗留
        // alert在点击确定前，整个页面都是白色的
        window.onload = function () {
            alert("上午好");
        };
    } else if (date.getHours() < 18) {
        window.onload = function () {
            alert("下午好");
        };
    } else {
        window.onload = function () {
            alert("晚上好");
        };
    }
```

***

day19:
目标：掌握 JavaScript 的核心之一：DOM，能够熟悉DOM相关操作，了解JavaScript事件机制


day20、day21:
目标：掌握 JavaScript 事件的概念，并能写出基本的事件相关的代码。掌握如何通过 JavaScript 操作 DOM 的样式

问题：js-21.html
```js
    // trans = 1,
    // trans -= 0.2 计算不准确
    // 放大成整数计算
    var trans = 10;
```

day22、day23、day24:
目标：掌握 JavaScript 中的各个数据类型、对象的概念及常用方法，

```js
sort() 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

  如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
  如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
  如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
```

day25、day26、day27:
目标：学习 JavaScript 的函数，学习如何使用和封装函数，学习Date对象

问题：
```js
    //setInterval只执行1次
    //只需要写abc,不需要写abc().后面的括号不需要。如果要加括号，需要加上引号'abc()'
    setInterval("updateTime()", 1000);
```

day28、day29、day30:
目标：掌握如何分解问题、解决问题，在这个过程中如何设计自己的代码结构，如何优化及重构。

问题：
```js
    //将提示内容添加到email-sug-wrapper中
    function updateEmailSugList(lists) {
        var ulEle = document.getElementById("email-sug-wrapper");
        var liEle, index;

        // 删除ul下所有li节点,不然一直追加li节点
        // 方法1
        // ulEle.innerHTML = "";
        // 方法2    
        for (index = ulEle.childNodes.length; index > 0; index--) {
            ulEle.removeChild(ulEle.childNodes[index - 1]);
        }

        if (lists.length > 0) {
            for (index = 0; index < lists.length; index++) {
                liEle = document.createElement("li");
                liEle.textContent = lists[index];
                ulEle.appendChild(liEle);
            }
        }

    }
```

``` js
    function handleClickEvent(event) {
        // 事件委托，给ul下每个li项绑定click事件
        if (event.target && event.target.nodeName == "LI") {
            emailInput.value = event.target.textContent;
            hideOrDisplayEmailSug(true);
            setInputFocus();
        }
    }
```

``` js
    switch (event.keyCode) {
        case 13: // Enter
            setLiBgColor();
            emailInput.value = document.querySelectorAll("li")[liEleSelectedIndex].textContent;
            hideOrDisplayEmailSug(true);
            return;
            break;

        case 27: // ESC
            // 用户按ESC键的时候，对用户输入进行全选
            emailInput.select();
            break;

        case 38: // 上
            // 光标会回到文本开头
            event.preventDefault();
            liEleSelectedIndex--;
            break;
```


day31、day32、day33:


day42、day43:

