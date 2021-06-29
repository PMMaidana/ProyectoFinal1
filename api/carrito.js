class Carrito{
    constructor(){
        this.carrito = [];
    }

    listarPorId(id){
        let carrito = this.carrito.find(e => e.id === id);
        if(carrito==undefined){
            carrito = 'Producto no encontrado';
        }
        return carrito;
    }

    guardar(carrito){
        const largo = this.carrito.length;
        this.carrito.push({...carrito,id:largo+1, timestamp : Date.now()});
        return this.carrito[largo];
    }
       
    borrar(id){
        try {
            const carritoborrar = this.carrito.find(item => item.id == id);
            this.carrito = this.carrito.filter(a => a.id != id);
            return carritoborrar;
        } catch (error) {
            return [{
                error: error
            }];
        }
    }
}

module.exports = new Carrito();