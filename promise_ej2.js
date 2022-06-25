const request = require("request-promise");

const obtenerItem = (item) => {
    let options = {
        url: `https://api.mercadolibre.com/items/${item}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-062516-cc3eb705610c6b4618655b8902e0547f-138427624"
        },
        json: true
    }
    return request(options);
}


const obtenerSellerIdConItemId = (item) => {

    obtenerItem(item).then(respuesta => {
        return {
            idVendedor: respuesta.seller_id,
            idItem: respuesta.id
        }
    }).tap(resultado => console.log({
        "idVendedor": resultado.idVendedor,
        "idItem": resultado.idItem
    }))
}

obtenerSellerIdConItemId("MLA1132828285");