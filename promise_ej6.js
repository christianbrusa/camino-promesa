const request = require("request-promise");
const Promise = require("bluebird");

const obtenerItem = (item) => {
    let options = {
        url: `https://api.mercadolibre.com/items/${item}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-070417-ceede6fcc29ec89a7d89fb91dc0d6b10-138427624"
        },
        json: true
    }
    return request(options);
}

const compararSellers = (mla1, mla2) => {
    Promise.all([obtenerItem(mla1), obtenerItem(mla2)]).then(([item1, item2]) => {
        if (item1.seller_id !== item2.seller_id) {
            console.log(`Los seller_id de los usuarios dueños del ${[item1.id]} y ${[item2.id]} no son iguales`);
        } else {
            console.log(`Los seller_id de los usuarios dueños del ${[item1.id]} y ${[item2.id]} son iguales`);
        }
    })
}

compararSellers("MLA1132828285", "MLA1132828284");