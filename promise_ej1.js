const request = require("request-promise");

const obtenerItem = (item) => {
    let options = {
        url: `https://api.mercadolibre.com/items/${item}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-062421-19af77531e88f5201e098cb3abeb11dd-138427624"
        },
        json: true
    }
    return request(options);
}

const obtenerSellerId = (item) => {
    obtenerItem(item).then(respuesta => {
        return {
            sellerId: respuesta.seller_id
        }
    }).tap(resultado => console.log(resultado.sellerId))
}

obtenerSellerId("MLA1132828285");