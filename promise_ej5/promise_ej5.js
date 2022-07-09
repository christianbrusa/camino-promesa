const obtenerItem = require("./obtenerItem");
const obtenerSeller = require("./obtenerSeller");
const request = require("request-promise");

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