function drawLineChart(data) {
    var canvas = document.querySelector("canvas");

    var sales = getSalesFromData(data);
    var maxValue = getMaxValue(sales);
    var dataLength = sales.length;
    var index = 0;

    // 两个数据点之间的横向间隔距离
    var groupWidth = 55;

    // 折线图绘制区域的高度，宽度，轴的高度，宽度
    var lineChartWidth = 1000;
    var lineChartHeight = 400;
    var hLength = groupWidth * dataLength + groupWidth;
    var vLength = Math.ceil(maxValue / 100) * 100;

    // 数据点的直径，颜色，线的颜色，宽度 
    var piontRadius = 5;
    var pointColor = "red";
    var lineColor = "pink";
    var lineWidth = 2;

    // 高度的缩放比例
    var radtio = 300 / vLength;


    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();

        // 绘制横轴及纵轴
        ctx.moveTo(40, Number(50 + vLength * radtio));
        // ctx.lineWidth = lineWidth;
        // ctx.fillStyle = lineColor;
        ctx.lineTo(Number(40 + hLength), Number(50 + vLength * radtio));

        ctx.moveTo(40, Number(50 + vLength * radtio));
        ctx.lineTo(40, 50);

        for (index = 1; index <= 5; index++) {
            ctx.moveTo(40 - 5, Number(50 + 60 * (5 - index)));
            ctx.lineTo(Number(40 + hLength), Number(50 + 60 * (5 - index)));
        }

        for (index = 0; index <= 5; index++) {
            ctx.fillText(Number(60 * index).toString(), 16, Number(50 + 60 * (5 - index) + 5));
        }

        for (index = 1; index <= 12; index++) {
            ctx.fillText(index + "月", (groupWidth * index + 40 - 10), (50 + 300 + 16));
        }

        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.moveTo(40 + groupWidth, Number(50 + 300 - (sales[0] * radtio)));
        for (index = 1; index < sales.length; index++) {
            ctx.lineTo(40 + groupWidth * (index + 1), Number(50 + 300 - (sales[index] * radtio)));
        }
        ctx.stroke();
        ctx.closePath();

        // 数据圆点
        for (index = 0; index < sales.length; index++) {
            ctx.beginPath();
            ctx.fillStyle = pointColor;
            ctx.arc(40 + groupWidth * (index + 1), Number(50 + 300 - (sales[index] * radtio)), 5, 0, Math.PI * 2);

            ctx.closePath();
            ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = pointColor;
        ctx.globalAlpha = 0.5;
        ctx.arc(40 + groupWidth * dataLength + groupWidth + 20, 50, 5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText("手机-华东", 40 + groupWidth * dataLength + groupWidth + 30, 50 + 5);
        ctx.closePath();

    } else {
        console.log("the browser does not support canvas");
    }
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
