const request = require("request-promise");

const obtenerSeller = (sellerId) =>{
    let options = {
        url: `https://api.mercadolibre.com/users/${sellerId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070816-25a4de716b0b47ea00da9e0acbfde96c-138427624"
        },
        json: true
    }
    return request(options);
}

const imprimirSellerNickname = (sellerId) => obtenerSellerNickname(sellerId).then(respuesta => {
    console.log("el nickname del user es: "+ respuesta.nickname);
})

imprimirSellerNickname(138427624);