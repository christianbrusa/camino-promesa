const request = require("request-promise");

const obtenerSellerIdConItemId = (item) =>{
    let options = {
        url: `https://api.mercadolibre.com/items/${item}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-062017-2c6b129525f4964a9a71977d73059c97-138427624"
        },
        json: true
    }
    return request(options);
}

obtenerSellerIdConItemId("MLA1132828285").then(respuesta => {
    console.log({
        "idVendedor": respuesta.seller_id,
        "idItem":respuesta.id
        /*"idItem2": obtenerSellerIdConItemId("MLA1132828285")._rp_options.url.split("/")[4]*/
    })
})



