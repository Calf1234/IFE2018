// 只考虑有一组数据的情况

// 绘制一个柱状图
function drawBarChart(data) {
    var sales = getSalesFromData(data);
    // console.log(sales);
    // console.log("3,");
    var maxValue = getMaxValue(sales);
    var dataLength = sales.length;
    var index = 0;

    // 参数设置
    // 柱间距和柱宽度
    var barGroupWidth = 40;
    var barSpacing = 15;
    var barWidth = barGroupWidth;
    // var barWidth = barGroupWidth / sales.length;
    // 横坐标和纵坐标长度
    var hLength = (barGroupWidth + barSpacing) * dataLength + barSpacing;
    var vLength = Math.ceil(maxValue / 100) * 100;
    // 横轴和纵轴刻度间距
    var xfirstScalePos = barSpacing + barGroupWidth / 2;
    var hScaleSpacing = barGroupWidth + barSpacing;
    var vScaleNum = 5;
    var vScaleSpacing = vLength / vScaleNum;
    var scaleLength = 5;
    // 高度的缩放比例
    var radtio = 300 / vLength;
    // 绘图区域的高度和宽度
    var barChartWidth = 1000;
    var barChartHeight = 400;
    // 横坐标和纵坐标轴颜色
    var axisColor = "black";
    var hSectionLineColor = "gray";
    // 柱子的颜色
    var barColor = "black";


    var nameSpace = "http://www.w3.org/2000/svg";
    var barChart = document.createElementNS(nameSpace, "svg");
    barChart.setAttribute("width", barChartWidth);
    barChart.setAttribute("height", barChartHeight);
    barChart.setAttribute("version", "1.1");

    // 坐标原点
    var zeroPoint = "M 40 " + (vLength * radtio + 30);
    // x轴
    var xAxis = document.createElementNS(nameSpace, "path");
    var xAxisPath = zeroPoint + " h " + hLength;
    xAxis.setAttribute("d", xAxisPath);
    xAxis.setAttribute("stroke", axisColor);
    barChart.appendChild(xAxis);
    // y轴
    var yAxis = document.createElementNS(nameSpace, "path");
    var yAxisPath = zeroPoint + " v " + (-vLength * radtio);
    yAxis.setAttribute("d", yAxisPath);
    yAxis.setAttribute("stroke", axisColor);
    barChart.appendChild(yAxis);
    // x轴刻度
    var xAxisScale = document.createElementNS(nameSpace, "path");
    var xScales = " m " + xfirstScalePos + " 0" + " v " + scaleLength + " m 0 " + (-scaleLength);
    for (index = 1; index < dataLength; index++) {
        xScales = xScales + " m " + hScaleSpacing + " 0" + " v " + scaleLength + " m 0 " + (-scaleLength);
    }
    var xAxisScalePath = zeroPoint + xScales;
    xAxisScale.setAttribute("d", xAxisScalePath);
    xAxisScale.setAttribute("stroke", axisColor);
    barChart.appendChild(xAxisScale);
    // x轴坐标
    var xText = document.createElementNS(nameSpace, "text");
    xText.setAttribute("x", xfirstScalePos + 25);
    xText.setAttribute("y", vLength * radtio + 52);
    xText.textContent = "1月";
    xText.setAttribute("stroke", axisColor);
    barChart.appendChild(xText);
    for (var i = 1; i < 12; i++) {
        var xText = document.createElementNS(nameSpace, "text");
        xText.setAttribute("x", xfirstScalePos + 25 + i * hScaleSpacing);
        xText.setAttribute("y", vLength * radtio + 52);
        xText.textContent = (i + 1) + "月";
        xText.setAttribute("stroke", axisColor);
        barChart.appendChild(xText);
    }
    // y轴刻度
    var yAxisScale = document.createElementNS(nameSpace, "path");
    var yScales = "";
    for (var i = 0; i < vScaleNum; i++) {
        yScales = yScales + " m 0 " + (-vScaleSpacing * radtio) + " h " + -scaleLength + " m " + scaleLength + " 0";
    }
    var yAxisScalePath = zeroPoint + yScales;
    yAxisScale.setAttribute("d", yAxisScalePath);
    yAxisScale.setAttribute("stroke", axisColor);
    barChart.appendChild(yAxisScale);
    // y轴坐标
    for (var i = 0; i < vScaleNum + 1; i++) {
        var yText = document.createElementNS(nameSpace, "text");
        yText.setAttribute("x", 8);
        yText.setAttribute("y", vLength * radtio + 36 - i * vScaleSpacing * radtio);
        yText.textContent = i * vScaleSpacing;
        yText.setAttribute("stroke", axisColor);
        barChart.appendChild(yText);
    }
    // 水平分区线
    var hSectionLine = document.createElementNS(nameSpace, "path");
    var hSectionLinePath = "";
    for (var i = 0; i < vScaleNum; i++) {
        hSectionLinePath = hSectionLinePath + " m 0" + (-vScaleSpacing * radtio) + " h " + hLength + " m " + (-hLength) + " 0";
    }
    var hSectionLinesPath = zeroPoint + hSectionLinePath;
    hSectionLine.setAttribute("d", hSectionLinesPath);
    hSectionLine.setAttribute("stroke", hSectionLineColor);
    barChart.appendChild(hSectionLine);

    // 绘制分组柱子
    for (var i = 0; i < 1; i++) {
        // 设置不同商品和地区柱子的颜色
        barColor = setColor(data);
        // 绘制图例
        var graphLegend = document.createElementNS(nameSpace, "circle");
        graphLegend.setAttribute("cx", hLength + 40 + 20);
        graphLegend.setAttribute("cy", 30 + i * 25);
        graphLegend.setAttribute("r", 5);
        graphLegend.setAttribute("fill", barColor);
        graphLegend.setAttribute("stroke", barColor);
        barChart.appendChild(graphLegend);
        var graphLegendText = document.createElementNS(nameSpace, "text");
        graphLegendText.setAttribute("x", hLength + 40 + 30);
        graphLegendText.setAttribute("y", 35 + i * 25);
        graphLegendText.textContent = data[0].product + "-" + data[0].region;
        graphLegendText.setAttribute("stroke", "gray");
        barChart.appendChild(graphLegendText);
        // 绘制长柱
        var bar = document.createElementNS(nameSpace, "path");
        var barPath = "";
        console.log("4,");
        console.log(sales);
        for (var j = 1; j < 12; j++) {
            barPath = barPath + " m " + (barGroupWidth - barWidth + barSpacing) + " 0" + " v " + (-sales[j] * radtio) + " h " + barWidth + " v " + (sales[j] * radtio);
        }
        var barsPath = zeroPoint + " m 0 -1" + " m " + (barSpacing + i * barWidth) + " 0" + " v " + (-sales[0] * radtio) + " h " + barWidth + " v " + (sales[0] * radtio) + barPath;
        bar.setAttribute("d", barsPath);
        bar.setAttribute("fill", barColor);
        bar.setAttribute("stroke", barColor);
        barChart.appendChild(bar);
    }
    return barChart;
}


function getSalesFromData(data) {
    var arr = [];

    if (data === "") {
        console.log("data is null. we can not get sales from data.");
        return arr;
    }

    data[0].sale.forEach(member => {
        arr.push(member);
    });

    // console.log(data);
    // console.log(data.sale);
    // console.log("1,");
    // console.log(arr);
    // console.log("2,");

    return arr;
}

function getMaxValue(arr) {
    // 深拷贝
    var tmp = arr.concat();

    if (arr === "") {
        console.log("arr is null. we can not get max value.");
        return;
    }

    // sort排序影响自身，即arr数组
    // =：是属于浅拷贝，
    // tmp = arr.sort(function compare(a, b) {
    //     return (b - a);
    // });

    tmp.sort(function compare(a, b) {
        return (b - a);
    });

    return tmp[0];
}


// 设置数据点颜色
function setColor(data) {
    var barColor;
    var pSearchStr, rSearchStr;

    barColorArr = [{ name: "p1r1_barColor", value: "#ffc0cb" },
    { name: "p1r2_barColor", value: "#ff7d93" },
    { name: "p1r3_barColor", value: "#ff4161" },
    { name: "p2r1_barColor", value: "#c1fff6" },
    { name: "p2r2_barColor", value: "#7dffec" },
    { name: "p2r3_barColor", value: "#41ffe4" },
    { name: "p3r1_barColor", value: "#f2ffc1" },
    { name: "p3r2_barColor", value: "#e3ff7d" },
    { name: "p3r3_barColor", value: "#d6ff41" }]

    switch (data[0].product) {
        case "手机":
            pSearchStr = "p1";
            break;
        case "笔记本":
            pSearchStr = "p2";
            break;
        case "智能音箱":
            pSearchStr = "p3";
            break;
        default:
            break;
    }
    switch (data[0].region) {
        case "华东":
            rSearchStr = "r1";
            break;
        case "华北":
            rSearchStr = "r2";
            break;
        case "华南":
            rSearchStr = "r3";
            break;
        default:
            break;
    }
    for (var j = 0; j < barColorArr.length; j++) {
        const barColorObj = barColorArr[j];
        if (barColorObj.name.indexOf(pSearchStr) != -1 && barColorObj.name.indexOf(rSearchStr) != -1) {
            barColor = barColorObj.value;
        }
    }
    return barColor;
}