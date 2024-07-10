let producto = '';
let precio = 0;
let madera = '';
let cantidad = 0;
let cantidadFinal = 0;
let continuarComprando = true;
let precioFinal = 0;

alert('Bienvenido al Workerrs, un lugar donde encontrarás el mueble que tu hogar necesita');

function seleccionarProducto() {
    producto = prompt('Selecciona el producto: (mesa, silla, estanteria o puerta)');
    if (producto !== 'mesa' && producto !== 'silla' && producto !== 'estanteria' && producto !== 'puerta') {
        alert('Producto no válido');
        return false;
    }
    return true;
}

function seleccionarMadera() {
    madera = prompt('Selecciona el tipo de madera: (roble, pino o nogal)');
    if (madera !== 'roble' && madera !== 'pino' && madera !== 'nogal') {
        alert('Tipo de madera no válido');
        return false;
    }
    return true;
}

function seleccionarCantidad() {
    cantidad = parseInt(prompt('Selecciona la cantidad: (la cantidad maxima es de 25)'));
    while (isNaN(cantidad) || cantidad <= 0 || cantidad > 25) {
        alert('Selecciona una cantidad valida');
        cantidad = parseInt(prompt('Selecciona la cantidad: (la cantidad maxima es de 25)'));
    }
}

function calcularPrecio() {
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
            }
            break;
    }
}

function finalizarCompra() {
    alert('Has comprado un total de ' + cantidadFinal + ' producto(s)' + ' por un total de $' + precioFinal + '. ' + ' ¡Gracias por tu compra!');
}

function manejarCompra() {
    let precioTotalProducto = precio * cantidad;
    precioFinal += precioTotalProducto;
    cantidadFinal += cantidad;

    alert('Agregaste ' + cantidad + ' ' + producto + '(s)' + ' al carrito. Total a pagar: $' + precioTotalProducto);
    continuarComprando = confirm("¿Querés agregar otro producto?");
    if (!continuarComprando) {
        if (confirm("¿Desea finalizar la compra?")) {
            finalizarCompra();
        } else {
            alert("Esperamos volver a verte pronto. ¡Hasta luego!");
        }
    }
}

do {
    if (seleccionarProducto() && seleccionarMadera()) {
        seleccionarCantidad();
        calcularPrecio();
        manejarCompra();
    }
} while (continuarComprando);
