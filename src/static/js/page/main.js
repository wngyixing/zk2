require(["jquery", "../common/template"], function($, template) {

    $.ajax({
        url: "/api/get_home_data",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log(data);
            console.log(data[0].name);
            template("#tpl", {
                data: data
            }, ".wrap")
            $('ul>li').click(function() {
                var index = $(this).index();
                var html = $('ul>li>span').eq(index).html();
                if (html === "+") {
                    $('ul>li>span').eq(index).html('-');
                    $('ul>li>div').eq(index).show();
                    $('ul>li>div>ol>li>span').click(function() {
                        var index = $(this).index();
                        var html = $('ul>li>div>ol>li>span').eq(index).html();
                        if (html === "+") {
                            $('ul>li>div>ol>li>span').eq(index).html('-');
                            $('ul>li>div>ol>li>div').eq(index).show();

                        } else {
                            $('ul>li>div>ol>li>span').eq(index).html('+');
                            $('ul>li>div>ol>li>div').eq(index).hide();
                        }

                    })
                } else {
                    $('ul>li>span').eq(index).html('+');
                    $('ul>li>div').eq(index).hide();
                }
            })
        }
    })

})