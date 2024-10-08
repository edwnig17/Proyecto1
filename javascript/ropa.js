console.log(ropaCamisetas);
console.log(ropaSudaderas);
document.addEventListener('DOMContentLoaded', () =>{
    showCamisetas(ropaCamisetas)
    showSudaderas(ropaSudaderas)
    showMedias(ropaMedias)
})
function showCamisetas(ropaCamisetas){
    const contenedorCamisetas = document.querySelector(`.obj`)
    ropaCamisetas.forEach((camiseta)=>{
        const camisetaHtml = document.createElement('div')
        camisetaHtml.classList.add(`card`)
       camisetaHtml.innerHTML = `
        
       <a target="_blank" href="https://www.redbubble.com/es/i/sudadera/para-jugadores-de-kalman69/71486787.LEP2X">
       <img class="it" src="img7/${camiseta.imagen}" alt=""></a>
       <a href="#" class="text-decoration-none carro3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <p><strong>${camiseta.nombre}</strong></p></a>
             <p><strong>${camiseta.precio}</strong></p>
       
       <!-- Modal -->
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
           <div class="modal-content bg-dark">
             <div class="modal-header">
             <h1 class="modal-title fs-5 tituloname text-light" id="exampleModalLabel"></h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body mymodal">
               ...
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               
             </div>
           </div>
         </div>
       </div>`

       const detailsButton = camisetaHtml .querySelector('.carro3');
       detailsButton.addEventListener('click', () => {
       const tituloname=document.querySelector('.tituloname')
       tituloname.textContent=`${camiseta.nombre}`
       const mymodal=document.querySelector('.mymodal')
       mymodal.innerHTML=`
       <div class="table-responsive bg-dark">
         <table class="table table-striped table-bordered">
           <thead class="table">
             <tr>
               <th rowspan="3" ><img src="img7/${camiseta.imagen}" width="300px"  alt=""></th>
               <th class="align-middle text-light">${camiseta.nombre}</th>
               <th class="align-middle text-light">${camiseta.precio}</th>
               <th class="align-middle text-light">Descripción</th>
               
             </tr>
           </thead>
           <tbody>
             <tr>
             <td class="align-middle text-light"><span style="color:purple">Material:</span> ${camiseta.material}</td>
             <td class="align-middle text-light"><span style="color:purple">Tallas:</span>${camiseta.talla}</td>
             <td class="align-middle text-light">${camiseta.garantia} </td>
             <td class="align-middle text-light"><span style="color:purple">Características especiales:</span>${camiseta.descripcion}</td>
             </tr>
           </tbody>
        </table>
      </div>`
       })
   
       contenedorCamisetas.appendChild(camisetaHtml)    
})

// `<div class="contenido">
//         <a target="_blank" href="https://www.redbubble.com/es/i/camiseta/Controlador-de-ne%C3%B3n-N64-de-khatii/33012008.IJ6L0.XYZ">  
//           <img class="it" src="img7/${camiseta.imagen}" alt=""></a>
//         <p><strong>${camiseta.nombre}</strong></p>
//         <p><strong>${camiseta.precio}</strong></p>
//       </div>`  
    
//    contenedorCamisetas.appendChild(camisetaHtml)
// })
}

function showSudaderas(ropaSudaderas){
    const contenedorSudadera = document.querySelector(`.obj1`)
    ropaSudaderas.forEach((Sudadera)=>{
        const sudaderaHtml = document.createElement('div')
        sudaderaHtml.classList.add(`contenido`)
        sudaderaHtml.innerHTML =
        `
        
        <a target="_blank" href="https://www.redbubble.com/es/i/sudadera/para-jugadores-de-kalman69/71486787.LEP2X">
        <img class="it3" src="img7/${Sudadera.imagen}" alt=""></a>
        <a href="#" class="text-decoration-none carro2" data-bs-toggle="modal" data-bs-target="#exampleModal"><p><strong>${Sudadera.nombre}</strong></p></a>
              <p><strong>${Sudadera.precio}</strong></p>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 tituloname" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body mymodal">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>`

        const detailsButton = sudaderaHtml .querySelector('.carro2');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${Sudadera.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive bg-dark">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="img7/${Sudadera.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-light">${Sudadera.nombre}</th>
                <th class="align-middle text-light">${Sudadera.precio}</th>
                <th class="align-middle text-light">Descripción</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="align-middle text-light"><span style="color:purple">Material:</span> ${Sudadera.material}</td>
             <td class="align-middle text-light"><span style="color:purple">Tallas:</span>${Sudadera.talla}</td>
             <td class="align-middle text-light">${Sudadera.garantia} </td>
             <td class="align-middle text-light"><span style="color:purple">Características especiales:</span>${Sudadera.descripcion}</td>
              </tr>
            </tbody>
         </table>
       </div>`
        })
    
        contenedorSudadera.appendChild(sudaderaHtml)    
})
}
        
//         `
        
        
//         <a target="_blank" href="https://www.redbubble.com/es/i/sudadera/para-jugadores-de-kalman69/71486787.LEP2X">
//           <img class="it3" src="img7/${Sudadera.imagen}" alt=""></a>
//         <p><strong>${Sudadera.nombre}</strong></p>
//         <p><strong>${Sudadera.precio}</strong></p>`
    
//    contenedorSudadera.appendChild(sudaderaHtml)
// })
// }

function showMedias(ropaMedias){
    const contenedorMedias = document.querySelector(`.obj2`)
    ropaMedias.forEach((media)=>{
        const mediasHtml = document.createElement('div')
        mediasHtml.classList.add(`contenido`)
        mediasHtml.innerHTML =`
        
        <a target="_blank" href="https://www.redbubble.com/es/i/sudadera/para-jugadores-de-kalman69/71486787.LEP2X">
          <img class="it3" src="img7/${media.imagen}" alt=""></a>
        <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal"> <p   class="carro1" ><strong>${media.nombre} </strong></p></a>
        <p><strong>${media.precio}</strong></p>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 tituloname"   id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body mymodal">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>`

        const detailsButton = mediasHtml.querySelector('.carro1');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${media.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive bg-dark">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="img7/${media.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-light ">${media.nombre}</th>
                <th class="align-middle text-light">${media.precio}</th>
                <th class="align-middle text-light">Descripción</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="align-middle text-light"><span style="color:purple">Material:</span> ${media.material}</td>
              <td class="align-middle text-light"><span style="color:purple">Tallas:</span>${media.talla}</td>
              <td class="align-middle text-light">${media.garantia} </td>
              <td class="align-middle text-light"><span style="color:purple">Características especiales:</span>${media.descripcion}</td>
              </tr>
            </tbody>
         </table>
       </div>`
        })
    
   contenedorMedias.appendChild(mediasHtml)
})
}
