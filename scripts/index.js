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

const vestidos = {
    titulo: "Vestido",
    precio: 70,
    cantidad: 50,
}

const agregarNuevoArticulo = (articulo, stock) => {
    return stock = stock.push(articulo)
}

const mostrarNombresDeArticulos = (stock) => {
    for (let i = 0; i < stock.length; i++) {
        console.log(stock[i].titulo + " - " +stock[i].cantidad)
    }
}


agregarNuevoArticulo(vestidos, stockActual)
console.log(stockActual)

mostrarNombresDeArticulos(stockActual)