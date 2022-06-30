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

const obtenerSeller = (sellerId) => {
    let options = {
        url: `https://api.mercadolibre.com/users/${sellerId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-063015-d31c3b675cc9369b195af8a057f7a65d-138427624"
        },
        json: true
    }
    return request(options);
}


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