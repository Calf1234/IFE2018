
// 初始情况：
//     商品：手机 默认选中，
//     地区：华东 默认选中

function init() {
    var regions = regionContainer.querySelectorAll("input");
    var products = productContainer.querySelectorAll("input");

    var regKeyValue = getCheckedData(regions);
    var proKeyValue = getCheckedData(products);
    var data = getFilterData(proKeyValue, regKeyValue);

    // 表格
    var table = createTable(data, proKeyValue.length, regKeyValue.length);
    tableContainer.appendChild(table);

    // 柱状图
    var container = document.getElementById("svg-wrapper");
    var barChart = drawBarChart(data);
    container.appendChild(barChart);

    // 折线图
    drawLineChart(data);

}

init();