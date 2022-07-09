const request = require("request-promise");

const obtenerItem = (itemId) => {
    let options = {
        url: `https://api.mercadolibre.com/items/${itemId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070822-89376ce593ee1e880166060d4eafffba-138427624"
        },
        json: true
    }
    return request(options);
}

const obtenerSeller = (sellerId) => {
    let options = {
        url: `https://api.mercadolibre.com/users/${sellerId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070822-89376ce593ee1e880166060d4eafffba-138427624"
        },
        json: true
    }
    return request(options);
}

const obtenerSellerDeItem = (itemId) => {
    return obtenerItem(itemId)
    .then(item => obtenerSeller(item.seller_id))
}

const obtenerSellerNickname = (itemId) => {
    return obtenerSellerDeItem(itemId)
    .then(seller => seller.nickname)
    .tap(nickname => console.log(nickname))
}

obtenerSellerNickname("MLA1132828285");