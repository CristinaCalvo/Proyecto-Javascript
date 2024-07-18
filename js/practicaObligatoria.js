const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);


  //CATEGORIAS
  gestor.categorias = categorias; 

  for(let categoria of categorias){ //Recorremos categorias y por cada una añadimos una opcion de esta
    let opcion = '<option name="'+ "categoria" +'">' + categoria + "</option>";
    frmControles.categorias.innerHTML += opcion;
  }

    //console.log(catalogo);

  //COMERCIALES Y CLIENTES

  gestor.comerciales = comerciales;
 

for(let i=0; i < comerciales.length; i++){
  gestor.clientes[i] = [];
  for(let cliente of clientes[i]){
    let nuevoCliente = {};
    nuevoCliente.nombre = cliente;
    nuevoCliente.cuentaAbierta = false;
    gestor.clientes[i].push(nuevoCliente);
    }
  }
  

  for(let comercial of comerciales){ 
    let opcion = '<option name="'+ "comercial" +'">' + comercial + "</option>";
    frmComercial.comerciales.innerHTML += opcion;
  }

  manejarClientes(); //Para que cargue la primera vez
  manejarProductos(); //Para cargar productos

  frmComercial.comerciales.addEventListener("change", manejarClientes); 
  frmControles.categorias.addEventListener("change", manejarProductos);
  nuevoDiv.addEventListener("click", guardadoCliente);
  document.getElementById("teclado").addEventListener("click", guardadoUnidades);
 
  }

  let tituloCliente = document.createElement("h2");
  document.getElementById("pedido").append(tituloCliente);

  //let tablapedido = document.createElement("table");
  //document.getElementById("pedido").append(tablapedido);

  let divCliente = document.getElementById("clientes");
  let nuevoDiv = document.createElement("div");
  let cliente;


  //MANEJAR CLIENTES
  function manejarClientes(){
   // console.log(frmComercial.comerciales.selectedIndex);
    nuevoDiv.innerHTML = "";
    let div;
    let clienteDivId = [gestor.comercialActual] + "-" +[gestor.clienteActual]; //Cliente antiguo antes de que se cambie, para borrar tabla

    comercialActual = frmComercial.comerciales.selectedIndex; //Cogemos el indice del comercial actual
    gestor.comercialActual = comercialActual;
    console.log(gestor);
    gestor.clienteActual = 0; //Dejamos por defecto el primero
   
          let clientesComercial = gestor.clientes[comercialActual]; //Los clientes son iguales al array del indice del comercial
          for(let i = 0; i < clientesComercial.length; i++){
            let cliente = clientesComercial[i];
            if(cliente.cuentaAbierta){
              div = '<div class="cliente pendiente" id=cliente' + [gestor.comercialActual] + "-" + [i] +'>'+ cliente.nombre + "</div>";
            }else{
              div = '<div class="cliente pagado" id=cliente' + [gestor.comercialActual] + "-" + [i] +'>'+ cliente.nombre + "</div>";
            }
            nuevoDiv.innerHTML += div; 
            divCliente.append(nuevoDiv);
            
            //console.log(cliente);
        }   
        
        tituloCliente.innerHTML = "Cliente " + clientes[gestor.comercialActual][0];
        console.log(clientes[gestor.comercialActual][0]);

        let tabla = pedido.querySelector("#tabla_pedidos"+clienteDivId); //Buscamos el id tabla_pedidos
        if (tabla) {
          tabla.remove();
        }

        let total = document.getElementById("total");
        if (total) {
          total.remove();
        }

        let boton = document.getElementById("boton");
          if (boton) {
        boton.remove();
        }

        cliente = document.getElementById("cliente" + [gestor.comercialActual] + "-0");

        crearTabla();

        //console.log(gestor.clienteActual);
        //console.log(gestor.comercialActual);
        //console.log(cliente);
      }
      
     
  
  //MANEJAR PRODUCTOS
  function manejarProductos(){
    //console.log(frmControles.categorias.selectedIndex);
    frmControles.productos.innerHTML = "";

    let categoriaActual = frmControles.categorias.selectedIndex; //Cogemos la categoria Actual

    for(let producto of catalogo.productos){ //Recorremos los productos del catalogo
      if(producto.idCategoria === categoriaActual){ //Si el idCat es igual a la categoriaActual
          let opcion = '<option name="'+ "producto" +'">' + producto.nombreProducto + "</option>";
          frmControles.productos.innerHTML += opcion;
        }
      }
    } 



  //GUARDADO CLIENTE
  function guardadoCliente(event){
    cliente = event.target;
    let clienteDivId = [gestor.comercialActual] + "-" +[gestor.clienteActual]; //Cliente antiguo antes de que se cambie
    //cliente.classList.add("pendiente");

    let cont = -1;
  
    comercialActual = frmComercial.comerciales.selectedIndex;
    let clientesComercial = clientes[comercialActual]; 

        for(let i = 0; i < clientesComercial.length; i++){ //Recorremos los clientes del comercialActual
          let clienteRecorrido = clientesComercial[i];
          cont++;
            //console.log(clienteRecorrido);
              if(cliente.innerText == clienteRecorrido){
                gestor.clienteActual = cont;
              // console.log(gestor.clienteActual);
              // console.log(gestor.comercialActual);
              }  
          } 
      
      
      tituloCliente.innerHTML = "Cliente " + clientes[gestor.comercialActual][gestor.clienteActual];
      //tablapedido.innerHTML = document.getElementById([gestor.comercialActual] + "-" +[gestor.clienteActual]);



    //PARA BORRAR TABLA Y BOTON
    let tabla = document.getElementById("tabla_pedidos"+clienteDivId); //Buscamos el id tabla_pedidos
    if (tabla) {
      tabla.remove();
    }

    let total = document.getElementById("total");
    if (total) {
      total.remove();
    }

    let boton = document.getElementById("boton");
    if (boton) {
      boton.remove();
    }

    crearTabla();
    }

    


  //GUARDAR UNIDADES
  function guardadoUnidades(event){
    unidad = parseInt(event.target.value);
    if(event.target.value == undefined){
      return;
    }
    producto = frmControles.productos.value;

    for(let p of catalogo.productos){
      if(producto == p.nombreProducto){
        precio = p.precioUnidad;
        id = p.idProducto;
        }
      }

      //console.log(producto)
      //console.log(unidad);
      //console.log(precio);
      //console.log(id);

      crearPedido(unidad,id);

    }

  function crearPedido(unidad,id){
    let pedido = new LineaPedido;
    pedido = {unidades: unidad, idProducto: id};
    
    if(pedido.unidades != null){ //Si las unidades no son nulas
    if (!gestor.pedidos[comercialActual]) {
      gestor.pedidos[comercialActual] = [];
  }
  
    if (!gestor.pedidos[comercialActual][gestor.clienteActual]) {
      gestor.pedidos[comercialActual][gestor.clienteActual] = [];
  }

    let pedidoExistente = gestor.pedidos[comercialActual][gestor.clienteActual].filter(p => p.idProducto == id).length == 1; //Se compara con idProducto ya que es el nombre que le dimos

    if (pedidoExistente) {
      alert("Ya existe este producto en el pedido, si quiere modificar la cantidad utilice los controles de la cuenta.");
  }  else {
      gestor.pedidos[comercialActual][gestor.clienteActual].push(pedido);

      cliente.setAttribute("class","cliente pendiente");

      for(let c of gestor.clientes[comercialActual]){ //Buscamos el cliente por nombre para poner true
        if(c.nombre == cliente.innerText)
        c.cuentaAbierta = true;
      }
      crearTabla();
      }
}else{
  alert("Las unidades son nulas");
}

    console.log(gestor);

  }


  function crearTabla() {
   
    let clienteDivId = [gestor.comercialActual] + "-" +[gestor.clienteActual]; //id unico
    let clienteDiv = document.getElementById(clienteDivId); //Se hace un div con se id 

    if (!clienteDiv) { //Si no existe el div para este cliente
        clienteDiv = document.createElement("div"); //creamos did
        clienteDiv.id = clienteDivId; //metemos como id
        document.getElementById("pedido").appendChild(clienteDiv); //lo creamos como hijo de pedido
    }

    let tabla = document.createElement("table"); //Creamos la tabla
    tabla.setAttribute("id","tabla_pedidos" + clienteDivId); //como id tabla_pedidos

    // Eliminar todas las filas existentes en la tabla
    while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
    }

    if(gestor.pedidos[comercialActual] == undefined){
      return; //salimos de la funcion si el comercial no tiene pedidos
    }


    let pedidosCliente = gestor.pedidos[comercialActual][gestor.clienteActual]; //Cogemos el comercialAct y e cliente 

    if(pedidosCliente == undefined){
      return;
    }

    let total = 0;

    if (pedidosCliente.length > 0) {
        // Si hay pedidos para este cliente, crear la tabla y agregarla al div del cliente
        let encabezado = tabla.createTHead().insertRow();
        encabezado.insertCell().textContent = "Modificar";
        encabezado.insertCell().textContent = "Uds.";
        encabezado.insertCell().textContent = "Id.";
        encabezado.insertCell().textContent = "Producto";
        encabezado.insertCell().textContent = "Precio";


        for (let pedido of pedidosCliente) {
            let fila = tabla.insertRow();
            let botonSumar = document.createElement("input");
            botonSumar.classList.add("modificador");
            botonSumar.value = "+";
            botonSumar.type = "button";
            botonSumar.addEventListener("click", sumar);

            let botonRestar = document.createElement("input");
            botonRestar.classList.add("modificador");
            botonRestar.value = "-";
            botonRestar.type = "button";
            botonRestar.addEventListener("click", restar);

            //Guardamos en el boton la infomracion y como es una referencia tmb lo actualiza
            botonSumar.pedido = pedido;
            botonRestar.pedido = pedido;
        
            fila.insertCell().append(botonSumar, botonRestar);

            
            fila.insertCell().textContent = pedido.unidades;
            fila.insertCell().textContent = pedido.idProducto;

            for(let p of catalogo.productos) //Recorremos todos los productos
                if(p.idProducto == pedido.idProducto){ //si el idProducto es igual al id del pedido
                  let pedxun =  p.precioUnidad * pedido.unidades;
                  fila.insertCell().textContent = p.nombreProducto;
                  fila.insertCell().textContent = pedxun.toFixed(2); //* pedido.unidades;
                  total += pedxun;
            }
          }
        }

        clienteDiv.innerHTML = ""; // Limpiar el contenido anterior del div
  
       
        let h2Total = document.createElement("h2");
        h2Total.id = "total";
        let boton = document.createElement("button");
        boton.id = "boton";
       
        h2Total.textContent = "TOTAL: " + total.toFixed(2) + "€";
        clienteDiv.append(h2Total);
       

        boton.textContent = "PEDIDO ENVIADO Y COBRADO";
        boton.classList.add("boton");
        boton.addEventListener("click", funcionBoton);
        clienteDiv.append(boton);

        clienteDiv.appendChild(tabla); // Agregar la tabla al div del cliente
    }


    function funcionBoton() {
      let confirmacion = window.confirm("¿Quieres borrar tu pedido?");
      if (confirmacion) {
        let clienteDivId = gestor.comercialActual + "-" + gestor.clienteActual;
        let tabla = document.getElementById("tabla_pedidos" + clienteDivId);
        if (tabla) {
          tabla.parentNode.removeChild(tabla); //Elimina la tabla entera
        }
    
        gestor.pedidos[comercialActual][gestor.clienteActual] = []; //Elimina los pedidos dentro de gestor
        crearTabla();
    
        if (gestor.pedidos[comercialActual][gestor.clienteActual].length == 0) { //si no hay pedidos
          cliente.setAttribute("class", "cliente pagado");
          for (let c of gestor.clientes[comercialActual]) {
            if (c.nombre == cliente.innerText) {
              c.cuentaAbierta = false;
              let h2Total = document.getElementById("total");
              if (h2Total) {
                h2Total.remove(); 
              }
              let boton = document.getElementById("boton");
              if (boton) {
                boton.remove(); 
              }
            }
          }
        }
      }
    }
  
  function sumar(event){
    event.target.pedido.unidades += 1;
    //console.log(event.target.pedido);
    crearTabla();
  }

  function restar(event){
    if(event.target.pedido.unidades > 1){
    event.target.pedido.unidades -= 1;
    crearTabla();
  }else{
    let confirmacion = window.confirm("¿Quieres borrar este producto de tu pedido?");
    if(confirmacion){
      let p = gestor.pedidos[comercialActual][gestor.clienteActual].indexOf(event.target.pedido); //Posicion del array del elemento
      if(p == -1){
        return; //No existe
      }else{
        gestor.pedidos[comercialActual][gestor.clienteActual].splice(p,1); //Borra (por posicionamiento) el numero de elementos que pones en el segundo "1"
        crearTabla();
        if(gestor.pedidos[comercialActual][gestor.clienteActual].length == 0){
          let clienteDivId = [gestor.comercialActual] + "-" +[gestor.clienteActual];
          document.getElementById("tabla_pedidos" + clienteDivId).remove();
        }
      }
    }
  }
}


    

  //console.log(cliente);
  

cargaDatosIniciales();
//console.log(gestor);
console.log(catalogo);
//console.log(clientes);
//console.log(comerciales);
//console.log(frmControles.categorias);