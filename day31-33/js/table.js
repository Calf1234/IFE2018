// type: 1.
//      当商品选择了一个，地区选择了多个的时候，商品作为第一列，地区作为第二列，并且把商品这一列的单元格做一个合并，只保留一个商品名称
// type: 2.
//      当地区选择了一个，商品选择了多个的时候，地区作为第一列，商品作为第二列，并且把地区这一列的单元格做一个合并，只保留一个地区名称
// type: 3.
//      当商品和地区都选择了多于一个的情况下，以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并
// type: 4.
//      当商品和地区都只选择一个的情况下，以商品为第一列，地区为第二列

function createTable(data, proRegDataLength, regRegDataLength) {
    // console.log("in table.js, proRegDataLength: " + proRegDataLength
    //     + ", regRegDataLength: " + regRegDataLength + ", data.length: " + data.length);
    // console.log(data);

    clearTable();

    var table = document.createElement("table");
    var row, col, content;

    if ((regRegDataLength === 1) && proRegDataLength > 1) {
        table.appendChild(createTableHeader(true));

        row = document.createElement("tr");
        col = document.createElement("td");
        content = document.createTextNode(data[0].region);

        col.setAttribute("rowspan", proRegDataLength);
        col.appendChild(content);
        row.appendChild(col);

        data.forEach(item => {
            col = document.createElement("td");
            content = document.createTextNode(item.product);
            col.appendChild(content);
            row.appendChild(col);

            item.sale.forEach(value => {
                col = document.createElement("td");
                content = document.createTextNode(value);
                col.appendChild(content);
                row.appendChild(col);
            });

            table.appendChild(row);
            row = document.createElement("tr");
        });

    } else {
        table.appendChild(createTableHeader(false));

        for (var index = 0; index < proRegDataLength; index++) {
            row = document.createElement("tr");
            col = document.createElement("td");
            content = document.createTextNode(data[index * regRegDataLength].product);

            col.setAttribute("rowspan", regRegDataLength);
            col.appendChild(content);
            row.appendChild(col);

            for (var i = 0; i < regRegDataLength; i++) {
                col = document.createElement("td");
                content = document.createTextNode(data[i].region);
                col.appendChild(content);
                row.appendChild(col);

                for (var j = 0; j < 12; j++) {
                    col = document.createElement("td");
                    content = document.createTextNode(data[i * index].sale[j]);
                    col.appendChild(content);
                    row.appendChild(col);
                }

                table.appendChild(row);
                row = document.createElement("tr");
            }
            table.appendChild(row);
            row = document.createElement("tr");
        }
    }

    table.addEventListener("mouseover", handleMouseOverEvent);
    table.addEventListener("click", handleClickEvent);

    return table;
}

function handleMouseOverEvent(e) {
    var target = e.target;

    if (target.nodeName === "TD" && target.parentNode.nodeName === "TR") {
        e.stopPropagation();
        if (!isNaN(target.textContent)) {
            // css3 content结合 attr()
            target.setAttribute("data-attr", "编辑");
        }
    }
}

var originSale;

function handleClickEvent(e) {
    var target = e.target;

    if (target.nodeName === "TD" && target.parentNode.nodeName === "TR") {
        e.stopPropagation();

        var editPre = document.querySelector("#edit");

        // 查看下前面有没有编辑状态，但是没有处理完成的情况
        if (editPre) {
            var content = editPre.querySelector("input").value;

            if (isNaN(content)) {
                alert("输入内容不是数字，请更正");
            } else {
                editPre.innerHTML = content;
                editPre.id = "";
            }

            return;
        } else {

            if (isNaN(target.textContent)) {
                return;
            }

            target.setAttribute("data-attr", "");
            originSale = target.textContent;
            target.id = "edit";
            target.innerHTML = "<input type='text' value='" + originSale
                + "'><button id='confirm'>确定</button><button id='cancel'>取消</button>";

            var element = target.querySelector("input");
            // element.setfocus();
            element.addEventListener("keydown", handleKeyDownEvent);

            return;
        }
    }

    if (target.id === "confirm") {
        var content = target.parentNode.querySelector("input").value;

        if (isNaN(content)) {
            alert("输入内容不是数字，请更正");
        } else {
            target.parentNode.id = "";
            target.parentNode.innerHTML = content;
        }

    } else if (target.id === "cancel") {

        target.parentNode.id = "";
        target.parentNode.innerHTML = originSale;
    }

    return;
}

function handleKeyDownEvent(e) {
    e.stopPropagation();
    var target = e.target;

    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 13:
            // enter
            if (isNaN(target.value)) {
                alert("输入内容不是数字，请更正");
            } else {
                target.parentNode.id = "";
                target.parentNode.innerHTML = target.value;
            }
            break;

        case 27:
            // esc
            // keypress中不接收esc按键
            target.parentNode.id = "";
            target.parentNode.innerHTML = originSale;
            break;

        default:
            break;
    }
}

function clearTable() {
    var table = document.querySelector("table");
    if (table) {
        table.childNodes.forEach(node => {
            table.removeChild(node);
        });

        table.parentNode.removeChild(table);
    }
}

function createTableHeader(flag) {
    var tr1 = document.createElement("tr");
    var item1 = document.createTextNode("商品");
    var item2 = document.createTextNode("地区");
    var item3 = document.createTextNode("1月");
    var item4 = document.createTextNode("2月");
    var item5 = document.createTextNode("3月");
    var item6 = document.createTextNode("4月");
    var item7 = document.createTextNode("5月");
    var item8 = document.createTextNode("6月");
    var item9 = document.createTextNode("7月");
    var item10 = document.createTextNode("8月");
    var item11 = document.createTextNode("9月");
    var item12 = document.createTextNode("10月");
    var item13 = document.createTextNode("11月");
    var item14 = document.createTextNode("12月");

    var item;
    if (flag) {
        item = [item2, item1, item3, item4, item5, item6,
            item7, item8, item9, item10, item11, item12, item13, item14];
    } else {
        item = [item1, item2, item3, item4, item5, item6,
            item7, item8, item9, item10, item11, item12, item13, item14];
    }

    for (var index = 0; index < 14; index++) {
        var th = document.createElement("th")
        th.appendChild(item[index])
        tr1.appendChild(th)
    }
    return tr1;
}
