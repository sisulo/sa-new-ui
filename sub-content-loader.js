$.getScript("menu-dataset.js", function() {
    function renderMenu(menuItems) {
        var i;
        var menuItemResult = "";
        $(".to-remove").remove();
        for (x in menuItems){
            var menuItem = menuItems[x];
            menuItemResult = " <li class=\"treeview to-remove\">\n" +
            "          <a href=\"#\"><i class=\"fa fa-gears\"></i> <span>" + x + "</span>\n" +
            "            <span class=\"pull-right-container\">\n" +
            "                <i class=\"fa fa-angle-left pull-right\"></i>\n" +
            "              </span>\n" +
            "          </a>\n" +
            "          <ul class=\"treeview-menu\">\n";
            for (i in menuItem) {
    
                menuItemResult = menuItemResult + " <li class=\"treeview to-remove\">\n" +
                    "          <a href=\"#\"><i class=\"fa fa-gears\"></i> <span>" + menuItem[i].name + "</span>\n" +
                    "            <span class=\"pull-right-container\">\n" +
                    "                <i class=\"fa fa-angle-left pull-right\"></i>\n" +
                    "              </span>\n" +
                    "          </a>\n" +
                    "          <ul class=\"treeview-menu\">\n" +
                    "            <li><a href=\"" + menuItem[i].id + "1%20Dash%20Board/Dash%20Board.html\" target=\"main-content\">Dash Board</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "2%20Server%20Board/index.html\" target=\"main-content\">Server board</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "4%20DP%20Pool%20Board%20and%20SLA/index.html\" target=\"main-content\">DP Pool Board and SLA</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "7%20Deep%20Analysis/index.html\" target=\"main-content\">Deep Analysis</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "8%20Cache%20Board/index.html\" target=\"main-content\">Cache Board</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "8%20CHA%20Adapters%20Board/index.html\" target=\"main-content\">CHA Adapters Board</a></li>\n" +
                    "            <li><a href=\"" + menuItem[i].id + "8%20Trends/Trends.html\" target=\"main-content\">Trends</a></li>\n" +
                    "          </ul>\n" +
                    "          \n" +
                    "        </li>";
                
            }
            menuItemResult = menuItemResult + "</ul>";
            $("#main-menu").append(menuItemResult);
        }
    }
    $(document).ready(renderMenu(menuItems));
    $(document).ready(function () {
        $("#menu-search-input").on("input", filterMenu).on("submit", filterMenu);
        if(document.getElementById('form-iframe') != null){
            var iframeWin = document.getElementById('form-iframe').contentWindow;
            // $(iframeWin).on('resize', function(){
            //     document.getElementById("form-iframe").style.height = document.getElementById("form-iframe").contentWindow.document.body.scrollHeight + "px"; 
            // });
        }
    });
    function filterMenu() {

        var searchValue = $("#menu-search-input").val().toLowerCase();
        var result = {};
        for(var x in menuItems){
            var item = menuItems[x];
            for(var i in item) {
                if (item[i].name.toLowerCase().indexOf(searchValue) > -1) {
                    if(result[x] == undefined){
                        result[x] = [];
                    }
                    result[x].push(item[i]);
                }
            }
        }
        renderMenu(result);
    
    }
    
});

