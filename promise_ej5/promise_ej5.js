const obtenerItem = require("./obtenerItem");
const obtenerSeller = require("./obtenerSeller");
const request = require("request-promise");

const obtenerSellerNickname = (itemId) => {
    obtenerItem(itemId).then(item => {
        obtenerSeller(item.seller_id).then(seller => {
            return {
                SellerNickname: seller.nickname
            }
        }).tap(resultado => console.log(resultado.SellerNickname));
    })
}

obtenerSellerNickname("MLA1132828285");