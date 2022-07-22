const stockActual  = [
    {
        titulo: "Abrigo",
        precio: 100,
        cantidad: 10,
    },
    {
        titulo: "Campera",
        precio: 90,
        cantidad: 30,
    }
]

const nuevoArticulo = {
    titulo: prompt ('Cual es el titulo del nuevo articulo?'),
    precio: +prompt ('Cual es el precio del nuevo articulo?'),
    cantidad: parseInt (prompt ('Cual es la cantidad de articulos ingresados?')),
}

const agregarNuevoArticulo = (articulo, stock) => {
    return stock = stock.push(articulo)
}

const mostrarNombresDeArticulos = (stock) => {
    for (let i = 0; i < stock.length; i++) {
        console.log(stock[i].titulo + " - " +stock[i].cantidad)
    }
}


agregarNuevoArticulo(nuevoArticulo, stockActual)
console.log(stockActual)

mostrarNombresDeArticulos(stockActual)