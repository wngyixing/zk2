define(["jquery", "handlebars"], function($, Handlebars) {
    return function(id, data, parent) {
        var tpl = $(id).html();
        var template = Handlebars.compile(tpl);
        var html = template(data);
        if (parent) {
            return $(parent).html(html)
        } else {
            return html;
        }

    }
})