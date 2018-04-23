require(["jquery", "text"], function($, text) {
    $.ajax({
        url: '/api/get_home_data',
        tyle: "get",
        dataType: 'json',
        success: function(data) {
            console.log(data[0])

            index("#tpl", {

            }, ".list");
        }
    })
})