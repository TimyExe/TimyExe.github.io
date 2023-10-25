/* *************************************************** */
/* ***************** statDialog ********************** */
/* *************************************************** */
var statID;
function playFirstMessage(id) {
    statID = id;
    var message = document.createElement("div");
    $(message).text("id");
    $(message).attr("id","canvas");
    $(statContainer).append(message);
    addTableColor($("#stat-play",$statDialog),id);
}

/* *************************************************** */
/* ***************** Page-stats ********************** */
/* *************************************************** */
var statScore = [];
var statErrors = [];
var statDate=[];
var statContainer = $("#canvascontainer",$pageStats);
var statCanvas;
var statNumber = [];
var ctx;

function chartResponsive() {
    //var marginBottom = $("#stat-footer",$pageStats).actual("height")+6; // Height + 6 px padding
    var marginBottom = 60;
    var width = $(window).width()-10;
    var height = $(window).height()-60-marginBottom-15-60; // 5px margin top&bottom	
    $(statCanvas).attr("width",Math.min(width,maxWidth));
    $(statCanvas).attr("height",height);
}

function drawLineChart(color) {
    var rgba = color.replace(')', ', 0.45)').replace('rgb', 'rgba');
    var lineChartData = {
        labels : statNumber,
        datasets : [
            {
                label: "My Second dataset",
                fillColor : color.replace(')', ', 0.2)').replace('rgb', 'rgba'),
                strokeColor : color,
                pointColor : "#ddd",
                scaleGridLineColor : "rgba(0,0,0,.05)",
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipTitleFontColor: "#fff",
                pointStrokeColor : "#1f2739",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : statScore
            }
        ]
    }
    ctx = document.getElementById("canvas").getContext("2d");
    // Get orginal canvas size before drawing, to fix problem with dubling in size
    ctx.canvas.originalwidth = ctx.canvas.width;
    ctx.canvas.originalheight = ctx.canvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Set canvas size to original before drawing
    ctx.canvas.width = ctx.canvas.originalwidth;
    ctx.canvas.height = ctx.canvas.originalheight;
    window.myLine = new Chart(ctx).Line(lineChartData, {
        showTooltips: true,
        scaleFontColor: "#ddd",
        scaleLabel : "<%= timeShort(value) %>",
        scaleGridLineColor : "#2C3446",
        tooltipTemplate: "<%if (label){%><%=statDate[index]%>: <%=time(statScore[index])%>, <%=statErrors[index]%> fejl<%}%>"
    });
}

function formatDate(date) {
    var d = new Date(date);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var formattedDate = curr_date + "-" + curr_month + "-" + curr_year;
    return formattedDate;
}

//$($pageStats).on( "pagebeforeshow", function( event ) {
function makeChart(id) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Statistik',
      eventAction: 'Vis statistik',
      eventLabel: id
    });
    //var id = "table1-2-1-1-true";
    $(statContainer).empty();
    // Create canvas
    statCanvas = document.createElement("canvas");
    $(statCanvas).attr("id","canvas");
    $(statContainer).append(statCanvas);
    $(statCanvas).parents("*").css("overflow", "visible");
    // Retrieve data from local storage
    var tableData;
    retrieveTableScores(id, function(scores) {
        tableData = scores;
        statScore = [];
        statNumber = [];
        statErrors = [];
        statDate=[];
        var time = 0;
        $(scores).each(function(index, element) {
            statScore.push(element[0]);
            statErrors.push(element[1].length);
            statDate.push(formatDate(element[2]));
            statNumber.push(index+1);
        });
        // Get color of current table in rgb
    var color = $("#"+id,$pageHome).css('backgroundColor');
    $("#stats-title",$pageStats).text(nameTable(id));viewTableList();
        chartResponsive();
        drawLineChart(color);
    });
    
}


