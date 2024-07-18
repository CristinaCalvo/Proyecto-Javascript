class Producto{

    _idProducto;
    _nombreProducto;
    _precioUnidad;
    _idCategoria;

    constructor(idProducto, nombreProducto, precioUnidad, idCategoria){
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCategoria = idCategoria;
    }

    get idProducto() {
        return this._idProducto;
    }
    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    get nombreProducto() {
        return this._nombreProducto;
    }
    set nombreProducto(nombreProducto) {
        this._nombreProducto = nombreProducto;
    }

    get precioUnidad() {
        return this._precioUnidad;
    }
    set precioUnidad(precioUnidad) {
        this._precioUnidad = precioUnidad;
    }

    get idCategoria() {
        return this._idCategoria;
    }
    set idCategoria(idCategoria) {
        this._idCategoria = idCategoria;
    }

}

class Catalogo{

    _productos;
    
    constructor(){
        this._productos = []; //Al ser array se pone asi
    }
    
    get productos() {
        return this._productos;
    }
    set productos(productos) {
        this._productos = productos;
    }

    addProducto(idProducto, nombreProducto, precioUnidad, idCategoria){
        
        let producto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria); //Creamos el producto para poder compararlo

        let encontrado = this.productos.filter((elem) => elem.idProducto == producto.idProducto).length == 1; //Si llega a ver uno igual
      if (!encontrado) {
        this.productos.push(producto);
        return true;
      } else {
        return false;
      }
    }
}


class LineaPedido{

    _unidades;
    _idProducto;

    constructor(unidades, idProducto){
        this._unidades = unidades;
        this._idProducto = idProducto;
    }


    get unidades() {
        return this._unidades;
    }
    set unidades(unidades) {
        this._unidades = unidades;
    }

    get idProducto() {
        return this._idProducto;
    }
    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

}


class Cliente{
    
    _nombre;
    _cuentaAbierta;
   
    constructor(nombre, cuentaAbierta){
        this._nombre = nombre;
        this._cuentaAbierta = cuentaAbierta;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get cuentaAbierta() {
        return this._cuentaAbierta;
    }
    set cuentaAbierta(cuentaAbierta) {
        this._cuentaAbierta = cuentaAbierta;
    }

}


class Gestor{

    _categorias;
    _comerciales;
    _clientes;
    _comercialActual;
    _clienteActual;
    _pedidos;
    

    constructor(comercialActual, clienteActual){
        this._categorias = [];
        this._comerciales = [];
        this._clientes = [];
        this._comercialActual = comercialActual;
        this._clienteActual = clienteActual;
        this._pedidos = [];
    }
    
    get categorias() {
        return this._categorias;
    }
    set categorias(categorias) {
        this._categorias = categorias;
    }

    get comerciales() {
        return this._comerciales;
    }
    set comerciales(comerciales) {
        this._comerciales = comerciales;
    }

    get clientes() {
        return this._clientes;
    }
    set clientes(clientes) {
        this._clientes = clientes;
    }

    get comercialActual() {
        return this._comercialActual;
    }
    set comercialActual(comercialActual) {
        this._comercialActual = comercialActual;
    }

    get clienteActual() {
        return this._clienteActual;
    }
    set clienteActual(clienteActual) {
        this._clienteActual = clienteActual;
    }

    get pedidos() {
        return this._pedidos;
    }
    set pedidos(pedidos) {
        this._pedidos = pedidos;
    }

    
}
   


