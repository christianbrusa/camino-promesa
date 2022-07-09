const request = require("request-promise");

const obtenerSeller = (sellerId) =>{
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

const obtenerSellerNickname = (sellerId) => {
    return obtenerSeller(sellerId)
    .then(seller => seller.nickname)
}

const imprimirSellerNickname = (sellerId) => obtenerSellerNickname(sellerId)
    .then(nickname => console.log("el nickname del user es: " + nickname));

imprimirSellerNickname(138427624);