const request = require("request-promise");

const obtenerSeller = (sellerId) => {
    let options = {
        url: `https://api.mercadolibre.com/users/${sellerId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070916-86513ef013cb9fcec5c8cb3508c9d9eb-138427624"
        },
        json: true
    }
    return request(options);
}

module.exports = obtenerSeller;