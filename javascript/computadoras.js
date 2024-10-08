console.log(computadoras);

document.addEventListener('DOMContentLoaded', () =>{
    showPc(computadoras)
})

function showPc(computadora){
    const contedorComputadoras = document.querySelector(`.v`)
    computadora.forEach((comp) =>{
        const compuHtml = document.createElement(`div`)
        compuHtml.classList.add(`objecartas`)
        compuHtml.innerHTML = `
        <img class="tamañocard" src="${comp.imagen}" width="300px" alt="NO FOUND">
        <div class="text5">
            <h4>${comp.nombre}</h4>
            <h4>${comp.precio}</h4>
            <div>
                <button class="btn carro" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
              </div>
        </div>
      
              <!--  inicio modal -->
              
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content bg-dark">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 tituloname text-primary" id="exampleModalLabel"></h1>
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
              </div>
        </div>

        `
        

const detailsButton = compuHtml.querySelector('.carro');
detailsButton.addEventListener('click', () => {
const tituloname=document.querySelector('.tituloname')
tituloname.textContent=`${comp.nombre}`
const mymodal=document.querySelector('.mymodal')
mymodal.innerHTML=`
<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead class="table">
      <tr>
        <th rowspan="3" ><img src="${comp.imagen}" width="300px"  alt=""></th>
        <th class="align-middle text-primary">${comp.nombre}</th>
        <th class="align-middle text-primary">${comp.precio}</th>
        <th class="align-middle text-light">Descripción</th>
        
      </tr>
    </thead>
    <tbody>
        <tr>
        <td class="align-middle text-light"><span style="color:#0d6efd">Sistema:</span> ${comp.sistema}</td>
        <td class="align-middle text-light"><span style="color:#0d6efd">Refrigeracion:</span>${comp.refrigeracion}</td>
        <td class="align-middle text-light"><span style="color:#0d6efd">Marca:</span>${comp.marca} </td>
        <td class="align-middle text-light"><span style="color:#0d6efd">Características especiales:</span>${comp.descripcion}</td>
        </tr>
    </tbody>
 </table>
</div>`
})
contedorComputadoras.appendChild(compuHtml)
})

    //     contedorComputadoras.appendChild(compuHtml)
    // })
}