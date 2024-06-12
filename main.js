const muebles = [
    { nombre: "Sillon", precio: 30000, enStock: true },
    { nombre: "Mesa", precio: 40000, enStock: true },
    { nombre: "Cama", precio: 20000, enStock: true },
    { nombre: "Silla", precio: 10000, enStock: true },
    { nombre: "Estantería", precio: 15000, enStock: true },
];

const filtrarEnStock = () => muebles.filter(mueble => mueble.enStock);
const calcularTotal = (carrito) => carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

const simuladorDeCompra = () => {
    let carrito = [];
    let continuarComprando = true;

    let mensajeBienvenida = alert('Bienvenido/a a The Workerrs, un lugar donde encontrarás el mueble que tu hogar necesita');

    while (continuarComprando) {
        const disponibles = filtrarEnStock();

        let mensaje = "Muebles disponibles en stock:\n";
        disponibles.forEach((mueble, index) => {
            mensaje += `${index + 1}. ${mueble.nombre} - $${mueble.precio}\n`;
        });

        const seleccion = parseInt(prompt(mensaje + "Selecciona un mueble por su número:")) - 1;

        //condicional
        if (seleccion < 0 || seleccion >= disponibles.length) {
            alert("Selección inválida. Por favor, intenta de nuevo.");
            continue;
        }

        const muebleSeleccionado = disponibles[seleccion];
        const cantidad = parseInt(prompt(`¿Cuántos ${muebleSeleccionado.nombre}s deseas comprar?`));

        //condicional
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida. Por favor, intenta de nuevo.");
            continue;
        }

        carrito.push({ ...muebleSeleccionado, cantidad });

        continuarComprando = confirm("¿Deseas agregar otro mueble al carrito?");
    }

    const total = calcularTotal(carrito);

    let resumen = "Resumen de tu compra:\n";
    carrito.forEach(item => {
        resumen += `${item.cantidad}x ${item.nombre} - $${item.precio} cada uno\n`;
    });
    resumen += `Total: $${total}`;

    alert(resumen);
    alert('¡Gracias por tu compra!');
};

simuladorDeCompra();
