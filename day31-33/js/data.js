function saveData() {

    var tableData = extractDataFromTable();

    //  转换成和sourceData一样的格式
    var storageData = transformData(tableData);

    // 保存到localStorage中, 只能存字符串
    // console.log(storageData.toString());
    // localStorage.setItem("storageData", storageData.toString());
}

function transformData(dataArr) {
    var tableObjArray = [];

    for (var index = 0; index < dataArr.length; index++) {
        var dataObj = {};
        var sales = [];

        dataObj["product"] = dataArr[index][0];
        dataObj["region"] = dataArr[index][1];

        for (var i = 2; i < dataArr[index].length; i++) {
            sales.push(dataArr[index][i]);
        }

        dataObj["sale"] = sales;

        tableObjArray.push(dataObj);
    }

    console.log(tableObjArray);
    return tableObjArray;
}

function extractDataFromTable() {
    var product, region;
    var index;
    // true: 第一列是商品; false: 第一列是地区
    var firstColoum;
    var arrTr = document.querySelectorAll("table tr");


    if (arrTr[0].childNodes[0].textContent === "地区") {
        firstColoum = false;
    } else if (arrTr[0].childNodes[0].textContent === "商品") {
        firstColoum = true;
    }

    // 商品、地区、12个月份销售数据
    var tableData = [];
    for (index = 1; index < arrTr.length; index++) {
        var childData = [];

        if (arrTr[index].childNodes.length === 14) {
            if (firstColoum) {
                product = arrTr[index].childNodes[0].textContent;
                region = arrTr[index].childNodes[1].textContent;
            } else {
                product = arrTr[index].childNodes[1].textContent;
                region = arrTr[index].childNodes[0].textContent;
            }
        } else if (arrTr[index].childNodes.length === 13) {
            if (firstColoum) {
                region = arrTr[index].childNodes[0].textContent;
            } else {
                product = arrTr[index].childNodes[0].textContent;
            }
        } else {
            continue;
        }

        childData.push(product);
        childData.push(region);

        for (let i = arrTr[index].childNodes.length - 12; i < arrTr[index].childNodes.length; i++) {
            childData.push(arrTr[index].childNodes[i].textContent);
        }

        tableData.push(childData);
    }

    // console.log("extract data from table");
    // console.log(tableData);
    return tableData;
}

function clearLocalStorage() {
    localStorage.clear();
}