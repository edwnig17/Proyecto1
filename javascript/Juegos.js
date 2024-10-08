console.log(juegos);

const precioJuego = document.querySelector(`#precio`)
const generoJuego = document.querySelector(`#genero`)
const nombreJuego=document.querySelector('#buscarJuegos')
const parametros = {
    precio: "",
    genero: "",
    nombre:""
}
//Precio juegos
juegos.forEach((precioJuegos) => {
    const opcion = document.createElement("option");
    opcion.value = precioJuegos.precio;
    opcion.textContent = precioJuegos.precio;
    document.querySelector("#precio").appendChild(opcion);
  });
  

// listener filters

document.addEventListener('DOMContentLoaded',()=>{
    arraycards=JSON.parse(localStorage.getItem('carrito')) || [];
    inyectandoJUego()
})

precioJuego.addEventListener('input', e=>{
    parametros.precio = e.target.value
    filtrarTodo()
})

generoJuego.addEventListener(`input`, e=>{
    parametros.genero = e.target.value
    filtrarTodo();
})
nombreJuego.addEventListener('input',e=>{
    parametros.nombre=e.target.value
    filtrarTodo();
})

//

document.addEventListener('DOMContentLoaded', ()=>{
    showJuegos(juegos)
    selectJuego()
    console.log(parametros);
} )

// inyectar cartas

function showJuegos(juegos){
    const contenedorCards = document.querySelector('#ventaJuegos')
    limpiar()
    juegos.forEach((juego) => {
        const {id,precio,nombre,genero,imagen}=juego
        const juegoHTML = document.createElement('div')
        juegoHTML.classList.add('objecartas')
        juegoHTML.innerHTML = `
            <div class="padre">
                <img class="tamañocard" src="img2/${imagen} " alt="NO FOUND">
                <div class="text5">
                    <h3>${nombre}</h3>
                    <h2>${precio}</h2>
                    <p>${genero}</p>

                    
                    <button class="ole"style="border-radius:  50px;" id="${id}">
                        <div class="" style="padding  20px;"
                        <div class="default-btn" imagen="${imagen}" nombre="${nombre}" genero="${genero}" precio="${precio}">
                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="white" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        </div>
                  
                        <div class="hover-btn boton">
                            Agregar
                        </div>
                    </div>        
                  </button>
                
                </div>
             </div>   

                
        `;
        console.log(nombre);
        contenedorCards.appendChild(juegoHTML)
        limpiarJuegos()
    });
}

// declaracion de funcion de alto nivel

function filtrarTodo(){
    const resultado = juegos
    .filter(filtrarGenero)
    .filter(filtrarnombre)
    .filter(filtrarPrecio)

    if (resultado.length) {
        showJuegos(resultado);
      }
      else{
        Noencontrado()
      }
    console.log(resultado);
    showJuegos(resultado)

}
// Filtrando por Nombre
function filtrarnombre(juego) {
    if(juego.nombre.toLowerCase().includes(parametros.nombre.toLocaleLowerCase())||parametros.nombre==undefined){
        return  juego
    }
    return juego.nombre===parametros.nombre
}
function filtrarGenero(gener){
    if(parametros.genero){
    return gener.genero === parametros.genero

    }
    return gener
}
function filtrarPrecio(juego) {
    if (parametros.precio) {
        console.log(parametros.precio);
        return juego.precio===parametros.precio
        
    }
    return  juego
}

function limpiar(){
    let m = document.querySelectorAll(`.objecartas`)
    for(let a = 0;a<m.length ; a++){
        m[a].remove()
    }
}
//FUncion para juegos no encontrados
function Noencontrado() {
    limpiarJuegos()
    limpiar()
    const noEncontrado= document.createElement('p')
    noEncontrado.classList.add('hola')
    noEncontrado.innerHTML=`
    
 <div class="card text-bg-secondary mb-3 lol">
 <div class="card-header">
  0 Resultados de ${juegos.length}
 </div>
 <div class="card-body">
   <h5 class="card-title">Tu Busqueda ha obtenido 0 Resultados</h5>
   <p class="card-text">En el momento no tenemos el juego que estas buscando</p>
   <a href="#" class="btn btn-dark">Volver a inicio</a>
 </div>
</div> `

document.querySelector("#ventaJuegos").appendChild(noEncontrado)
  }


  function limpiarJuegos(){
    let m = document.querySelectorAll('.hola')
    for(let a = 0;a<m.length ; a++){
        m[a].remove()
    }
}

//Nuevo
const cards = document.querySelector('.venta')
const tbodie=document.querySelector('#tbodie') 
let arraycards=[]
const deletelistCard=document.querySelector('#deletelistCard')
const cleanCard = document.querySelector("#cleanCard")


cards.addEventListener('click',selectJuego)
deletelistCard.addEventListener('click',deletecard)
cleanCard.addEventListener("click",limpiarCarrito)

function selectJuego(e) {
    e.preventDefault()
    if(e.target.classList.contains("boton")){
        const select= e.target.parentElement.parentElement.parentElement
        console.log(select);
        detail(select)
    }
}
function detail(select) {
    const juegoDetail = {
        imagen:select.querySelector('img').src,
        nombre:select.querySelector('h3').textContent,
        precio:select.querySelector('h2').textContent,
        genero:select.querySelector('p').textContent,
        id:select.querySelector('.ole').getAttribute("id")
        
    }
    console.log(juegoDetail);
    arraycards=[...arraycards,juegoDetail]
    console.log(arraycards);
    inyectandoJUego()
}
function deletecard(e){
    if(e.target.classList.contains("deleteCard")){
        const cardToDelete=e.target.getAttribute("id")
        console.log(cardToDelete);
        arraycards=arraycards.filter((cd)=>cd.id !== cardToDelete)
        inyectandoJUego()
    }
}



function inyectandoJUego() {
    clearJuego()
   arraycards.forEach((arraycard)=>{
    const {imagen,nombre,id,genero,precio}=arraycard
    const row = document.createElement("tr")
    row.innerHTML=`
    <td>
            <img src="${imagen}" width="160px"
    </td>
    <td>
    ${nombre}
    </td>
    <td>
    ${genero}
    </td>
    <td>
    ${precio}
    </td>
    <td>
    <a href="#tienda" class="deleteCard btn btn-danger" id=${id}>X</a>
    </td>
    `
    tbodie.appendChild(row)
    })
    addstorage()
}

function limpiarCarrito(){
    arraycards=[]
    clearJuego()
}
function clearJuego() {
    tbodie.innerHTML="";
}
//Nuevo

function addstorage() {
    localStorage.setItem('carrito',JSON.stringify(arraycards))
}
