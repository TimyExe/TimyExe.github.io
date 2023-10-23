
/* *************************************************** */
/* ****************** FRONTPAGE ********************** */
/* *************************************************** */

function viewTableList() {
    var $playedList = $("#played-list");
    var tablesLookup={};
    var listUl =$('<ul data-role="listview" data-split-theme="a" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">');
    for (var key in playedTables) {
        var tableElement = playedTables[key];
        var liColor = tableElement["color"];
        var id = generateId(tableElement["table"]);
        var listLi = $('<li class="ui-li-has-alt ui-li-has-thumb listview-background-li ' + liColor + '">');
        listLi.attr("id",id);
        if (tableElement.animate==true) {
            playedTables[key].animate=false;
            updateStoredTables()
            listLi.addClass("hidden");	
            newItemAdded = true;
            
        }
        var listIconRight = $('<div class="listview-icon-right"><i class="fa fa-chevron-right"></i></div>');
        var listContent = $('<a href="javascript: void(0)" class="ui-btn listview-background start-game">');
        $(listContent).attr("tableID", id);
        var listIconLeft = $('<div class="listview-icon-left"><i class="fa fa-play-circle"></i></div>');
        var listTitle = $(document.createElement('h2'));
        listTitle.text(nameTable(id));
        $(listTitle).addClass("list-title");
        $(listContent).append(listIconLeft);
        $(listContent).append(listTitle);
        if (tableElement["played"] == 0) {
            $(listTitle).addClass("oneline");
            var notPlayed =  $(document.createElement('p')).text("Ikke spillet endnu");
            $(listContent).append(notPlayed);
        } else {
            var listRecord =  $(document.createElement('p'));
            var listPlayed =  $(document.createElement('p'));
            listRecord.text("Rekord: " + time(tableElement["highscore"]));
            var timeOrTimes = tableElement["played"]>1 ? "gange" : "gang";
            listPlayed.text("Spillet " + tableElement["played"] + " " + timeOrTimes);
            $(listContent).append(listRecord);
            $(listContent).append( listPlayed);
        }

        var listButtons = $('<div class="ui-put">');
        listTrash = $('<a href="#" class="btn-listview delete-game btn-listview-top fa fa-trash-o fa-fw"></a>');
        listTrash.attr("tableID",id);
        listStats = $('<a href="#" class="btn-listview btn-listview-bottom stat-game fa fa-bar-chart-o fa-fw"></a>');
        listStats.attr("tableID",id);
        if (key != generateId([1,9,1,9,true])) {
            $(listButtons).append(listTrash);
        } else {
            listStats.addClass("first");
        }
        $(listButtons).append(listStats);
        $(listLi).append(listIconRight);
        $(listLi).append(listContent);
        $(listLi).append(listButtons);
        $(listUl).append(listLi);
        tablesLookup[id] = tableElement["table"];
    };
    $(".start-game", listUl).click(function() {
        id = $(this).attr('tableID');
        newGame(id);
        $("body").pagecontainer("change", $pageGame, {transition: 'none'});
    });
    $(".delete-game", listUl).click( function() {
        openDialog("delete-dialog");
        deleteID = $(this).attr('tableID');
        $("#deleteTableName",$deleteDialog).text(nameTable(deleteID));
        var deleteButton = $("#delete-table",$deleteDialog);
        addTableColor(deleteButton,deleteID);		
    });
    $(".stat-game", listUl).click( function() {
        statID = $(this).attr('tableID');
        if(playedTables[statID].played<2) {
            openDialog("stat-dialog");
            playFirstMessage(statID);
            return;	
        }
        $("body").pagecontainer("change", $pageStats, {});
        makeChart(statID);
    });
    $("#listContainer").append(listUl);
    
   
}

function reloadTableList() {
    $("#listContainer",$pageHome).empty();
    viewTableList();
}

$(document).ready(function() {
    
    $($pageHome).on( "pagebeforeshow", function( event ) {
        // Sikrer, at der ikke er tilfælde hvor gameIsActive = true udenfor spil
        if(gameIsActive) {
            resetGame();
        }
        if (!tableDeleted) {
            // Reload table list to update highscore/played times and new tables
            reloadTableList();
        } else {
       
            tableDeleted = false;
            
        }
        if (newItemAdded == true) {
            newItemAdded = false;
            // Ensures new-table dosent animate
            var listContainer = $("#listContainer",$pageHome);
            var last_li = $("li:last-child",listContainer);
            var newTableLi = $("#new-table-li",$pageHome);
            $.mobile.silentScroll(newTableLi.offset().top);
         
            last_li.addClass("animated flipInX");
            last_li.removeClass("hidden");
            function removeAnimation() {
                // Removes animation class so not triggered again
                last_li.removeClass("animated flipInX");	
            }
            setTimeout(removeAnimation,2000);
        }
    });
    $("#delete-table",$deleteDialog).on("tap", function() {
        deleteTable(deleteID, function() {
        });
    });
     
});


/* Delete table dialog */

