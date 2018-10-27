
// 初始情况：
//     商品：手机 默认选中，
//     地区：华东 默认选中

function init() {
    var regions = regionContainer.querySelectorAll("input");
    var products = productContainer.querySelectorAll("input");

    var regKeyValue = getCheckedData(regions);
    var proKeyValue = getCheckedData(products);

    var table = createTable(getFilterData(proKeyValue, regKeyValue), proKeyValue.length, regKeyValue.length);
    tableContainer.appendChild(table);
}

init();