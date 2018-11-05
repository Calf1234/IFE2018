var regionContainer = document.querySelector("#region-radio-wrapper");
var productContainer = document.querySelector("#product-radio-wrapper");
var tableContainer = document.getElementById("table-wrapper");

regionContainer.addEventListener("change", handleChangeEvent);
productContainer.addEventListener("change", handleChangeEvent);

function handleChangeEvent(event) {
    // console.log("recv change event: " + event.target.name);

    var regions = regionContainer.querySelectorAll("input");
    var products = productContainer.querySelectorAll("input");

    // 停止 事件冒泡
    event.stopPropagation();

    if (event.target.name === "region") {
        // var regions = regionContainer.querySelectorAll("input");
        updateCheckBox(regions, event.target);

    } else if (event.target.name === "product") {
        // var products = productContainer.querySelectorAll("input");
        updateCheckBox(products, event.target);

    } else {
        console.log("event not belongs to region or product");
    }

    var proRegData = getCheckedData(products);
    var regRegData = getCheckedData(regions);
    var dataRecv = getFilterData(proRegData, regRegData);

    tableContainer.appendChild(createTable(dataRecv, proRegData.length, regRegData.length));
}

function updateCheckBox(inputs, curInput) {
    var checkedNum = 0;

    if (curInput.value === "全选") {
        for (var index = 0; index < inputs.length; index++) {
            inputs[index].checked = true;
        }

    } else {
        inputs.forEach(element => {
            if (element.checked) {
                checkedNum++;
            }
        });

        if (checkedNum === 3) {
            // 两种可能：全选checkbox 取反
            //    1. 接收点击事件前 是4个选项全选的，现在前面3个选项中有1个被取消了，所以全选checkbox也要被取消
            //    2. 接受点击事件前 是2个选项被选中的，现在又加了1个，所以全选checkbox也要选山
            inputs[inputs.length - 1].checked = !inputs[inputs.length - 1].checked;
        } else if (checkedNum === 0) {
            curInput.checked = true;
        }
    }
}

function getCheckedData(inputs) {
    var regData = [];

    inputs.forEach(element => {
        if (element.checked && (element.value !== "全选")) {
            regData.push(element.value);
        }
    });

    return regData;
}

function getFilterData(prodRegData, regRegData) {
    var filterData = [];
    var tmp = sourceData;

    if (prodRegData.length > 0) {
        sourceData.forEach(item => {
            for (var index = 0; index < prodRegData.length; index++) {
                if (prodRegData[index] === item.product) {
                    filterData.push(item);
                }
            }
        });
    }

    // 二次过滤数据，
    // 若product有过滤出来数据，则从filterData数据中再过滤
    // 若product没有过滤出来，则从sourceData数据中过滤
    if (regRegData.length > 0) {
        if (filterData.length > 0) {
            tmp = filterData;
            // filterData 数组清空
            filterData = [];
        }

        tmp.forEach(item => {
            for (var index = 0; index < regRegData.length; index++) {
                if (regRegData[index] === item.region) {
                    filterData.push(item);
                }
            }
        });
    }

    return filterData;
}