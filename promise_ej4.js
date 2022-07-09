const request = require("request-promise");

const obtenerAPI = (resource, id) => {
    let options = {
        url: `https://api.mercadolibre.com/${resource}/${id}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070916-86513ef013cb9fcec5c8cb3508c9d9eb-138427624"
        },
        json: true
    }
    return request(options);
}

const obtenerSellerDeItem = (itemId) => {
    return obtenerAPI("items", itemId)
    .then(item => obtenerAPI("users", item.seller_id))
}

const obtenerSellerNickname = (itemId) => {
    return obtenerSellerDeItem(itemId)
    .then(seller => seller.nickname)
    .tap(nickname => console.log(nickname))
}

obtenerSellerNickname("MLA1132828285");