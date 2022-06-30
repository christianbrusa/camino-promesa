const request = require("request-promise");

const obtenerItem = (itemId) => {
    let options = {
        url: `https://api.mercadolibre.com/items/${itemId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-063015-d31c3b675cc9369b195af8a057f7a65d-138427624"
        },
        json: true
    }
    return request(options);
}

module.exports = obtenerItem;