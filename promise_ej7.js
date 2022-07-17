const request = require('request-promise');
const Promise = require('bluebird');

const obtenerVenta = (order) => {
  let options = {
    url: `https://api.producteca.com/salesorders/${order}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer 517de029335bcc86728af14559d0f945d208dbbf',
    },
    json: true,
  };
  return request(options);
};

const obtenerProducto = (id) => {
  let options = {
    url: `https://api.producteca.com/products/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer 517de029335bcc86728af14559d0f945d208dbbf',
    },
    json: true,
  };
  return request(options);
};

const linesDeVenta = (order) => {
  return obtenerVenta(order)
  .then(order => order.lines)
};

const productosEnLines = (order) => {
	return linesDeVenta(order)
  .then(lines => lines.map(line => line.product.id))
};

const detalleProductosDeVenta = (order) => {
	return productosEnLines(order)
  	.then(lines => {
  		Promise.map(lines, (id) => {
      		return obtenerProducto(id)
        	.then(producto => {
        		return {
		          sku: producto.variations[0].sku,
		          MLA: producto.integrations[0].integrationId,
		          productId: producto.id
        		}
        	}).tap(infoProducto => console.log(infoProducto))
      	})
    })
};

detalleProductosDeVenta(82717782);
//company 105965