var homeData = require("./data/data.json")

var mockApi = {
    "/api/get_home_data": homeData
}
module.exports = function(url) {
    return mockApi[url]
}