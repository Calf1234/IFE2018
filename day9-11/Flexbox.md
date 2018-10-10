# W3C Flexbox笔记

笔记内容多翻译自 <a href="https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/">W3C标准文档</a>。

## introduction
Flexbox是一种优化过后的css box model，适用于更复杂的布局场景。在这个box中，盒中的子元素按照某个方向来排列，且大小适应，比如会填充些无用的空间 亦或收缩防止溢出父容器。

css 2.1 前定义了四种box model：
1. <strong>block layout</strong>, designed for laying out documents
2. <strong>inline layout</strong>, designed for laying out text
3. **table layout**, designed for laying out 2D data in a tabular format
4. **positioned layout**, designed for very explicit positioning without much regard for other elements in the document

MDN上关于Flexbox一些属性的小<a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox">练习</a>。

相比block和positioned布局，Flexbox很容易就实现下面的几个场景：
- 在父内容里面垂直居中一个块内容。
- 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
- 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

## flex layout box model
<img src="https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/images/flex-direction-terms.svg" alt="row flex container" title="row flex 模型">

## display: flex
flex和block布局在使用上也有差异：
1. block布局支持float，clear属性，而这两个属性在flex中无用
2. flex布局不支持vertical-align属性
3. ::first-line，::first-letter 同样不支持
>A flex container establishes a new flex formatting context for its contents. This is the same as establishing a block formatting context, except that flex layout is used instead of block layout. For example, floats do not intrude into the flex container, and the flex container’s margins do not collapse with the margins of its contents. Flex containers form a containing block for their contents exactly like block containers do. [CSS21] The overflow property applies to flex containers.
>
>Flex containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of flex layout. In particular:
>
>- float and clear do not create floating or clearance of flex item, and do not take it out-of-flow.
>
>- vertical-align has no effect on a flex item.
>
>- the ::first-line and ::first-letter pseudo-elements do not apply to flex containers, and flex containers do not contribute a first formatted line or first letter to their ancestors.

## flex items
flex项排序，order属性有点类似 z-index。

配合visibility: collapse 使用，形成可折叠的flex项。

