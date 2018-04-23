var data = require("../data/data.json");
var mockApi = {
    "/api/get_home_data": data
}
module.exports = function(url) {
    return mockApi[url]
}