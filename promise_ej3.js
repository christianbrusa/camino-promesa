const request = require("request-promise");

const obtenerSellerNickname = (sellerId) =>{
	let options = {
		url: `https://api.mercadolibre.com/users/${sellerId}`,
        method: "GET",
        headers: {
            Authorization: "Bearer APP_USR-2010260036191127-062017-2c6b129525f4964a9a71977d73059c97-138427624"
        },
        json: true
	}
	return request(options);
}

const imprimirSellerNickname = (sellerId) => obtenerSellerNickname(sellerId).then(respuesta => {
	console.log("el nickname del user es: "+ respuesta.nickname);
})

imprimirSellerNickname(138427624);