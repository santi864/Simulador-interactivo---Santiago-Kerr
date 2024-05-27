let producto = '';
let precio = 0;
let madera = '';
let cantidad = 0;
let cantidadFinal = 0;
let continuarComprando = true;
let precioFinal = 0;

alert('Bienvenido al Workerrs, un lugar donde encontrarás el mueble que tu hogar necesita');

//ingreso de datos
do {
    producto = prompt('Selecciona el producto: (mesa, silla, estanteria o puerta)');

    madera = prompt('Selecciona el tipo de madera: (roble, pino o nogal)');

    cantidad = parseInt(prompt('Selecciona la cantidad: (la cantidad maxima es de 25)'));

    while (isNaN(cantidad) || cantidad <= 0 || cantidad > 25) {
        alert('Selecciona una cantidad valida');
        cantidad = parseInt(prompt('Selecciona la cantidad: (la cantidad maxima es de 25)'));
    }

    switch (producto) {
        case 'mesa':
            switch (madera) {
                case 'roble':
                    precio = 150;
                    break;
                case 'pino':
                    precio = 100;
                    break;
                case 'nogal':
                    precio = 200;
                    break;
                default:
                    alert('Tipo de madera no válido');
                    break;
            }
            break;
        case 'silla':
            switch (madera) {
                case 'roble':
                    precio = 50;
                    break;
                case 'pino':
                    precio = 30;
                    break;
                case 'nogal':
                    precio = 70;
                    break;
                default:
                    alert('Tipo de madera no válido');
                    break;
            }
            break;
        case 'estanteria':
            switch (madera) {
                case 'roble':
                    precio = 120;
                    break;
                case 'pino':
                    precio = 80;
                    break;
                case 'nogal':
                    precio = 160;
                    break;
                default:
                    alert('Tipo de madera no válido');
                    break;
            }
            break;
        case 'puerta':
            switch (madera) {
                case 'roble':
                    precio = 200;
                    break;
                case 'pino':
                    precio = 150;
                    break;
                case 'nogal':
                    precio = 250;
                    break;
                default:
                    alert('Tipo de madera no válido');
                    break;
            }
        default:
            alert('Producto no válido');
            break;
    }


    let precioTotalProducto = precio * cantidad;
    precioFinal += precioTotalProducto;
    cantidadFinal += cantidad;

    alert('Agregaste '+cantidad+' '+producto+'(s)'+' al carrito. Total a pagar: $'+precioTotalProducto);

    continuarComprando = confirm("¿Querés agregar otro producto?");

    if (!continuarComprando) {
      let finalizarCompra = confirm("¿Desea finalizar la compra?");

      if (finalizarCompra = true) {
        alert('Has comprado un total de '+cantidadFinal+' producto(s)'+' por un total de $'+precioFinal+'. '+' ¡Gracias por tu compra!');
      } else {
        alert("Esperamos volver a verte pronto. ¡Hasta luego!");
      }
    }
} while (continuarComprando)
