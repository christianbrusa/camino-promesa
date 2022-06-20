const request = require("request-promise");

function ejercicio1 (item){
    let options = {
        url: `https://api.mercadolibre.com/items/${item}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-061809-1d73012437e4adaf13dc5068d2564a2e-138427624"
        },
        json: true
    }
    return request(options);
}

ejercicio1("MLA1132828285").then(respuesta => {
    console.log("El sellerId es: " + respuesta.seller_id)
})



