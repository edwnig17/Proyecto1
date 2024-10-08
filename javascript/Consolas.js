console.log(consolaXbox);

document.addEventListener('DOMContentLoaded', ()=>{
    showXbox(consolaXbox)
    showPlay(consolaPlay)
    showNintendo(consolaNintendo)
})

function showXbox(consolaX){
    const constedorXbox = document.querySelector(`.v`)
    consolaX.forEach((consol)=>{
        const xboxHtml = document.createElement(`div`)
        xboxHtml.classList.add(`card`)
        xboxHtml.style.backgroundColor = ("#313131")
        xboxHtml.innerHTML = `
        <img class="img" src="imgConsolas/${consol.imagen}"  alt="">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
           <g>
            <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill-rule="nonzero" fill="#343434"></polygon>
            <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" fill-rule="nonzero" fill="#3C3C3B"></polygon>
            <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" fill-rule="nonzero" fill="#141414"></polygon>
            <polygon points="0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#393939"></polygon>
           </g>
          </g>
         </g>
        </svg>
          <div class="textBox">
            <p class="text head">${consol.nombre}</p>
            <p class="text price">${consol.precio}</p>
            <div>
                <button class="carro2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
              </div>
          </div>
          <!--  inicio modal -->
              
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content bg-dark">
                <div class="modal-header bg-success">
                  <h1 class="modal-title fs-5 tituloname " id="exampleModalLabel"></h1>
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
        const detailsButton = xboxHtml.querySelector('.carro2');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${consol.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="imgConsolas/${consol.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-light">${consol.nombre}</th>
                <th class="align-middle text-light">${consol.precio}</th>
                <th class="align-middle text-light"><span style="color:#009304  ">Detalles:</span></th>
                
              </tr>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle text-light"><span style="color:#009304  ">Dimensiones:</span> ${consol.dimensiones}</td>
              <td class="align-middle text-light"><span style="color:#009304  ">Almacenamiento:</span>${consol.almacenamiento}</td>
              <td class="align-middle text-light"><span style="color:#009304  ">Peso:</span>${consol.peso} </td>
              <td class="align-middle text-light"><span style="color:##009304 ">Características especiales:</span>${consol.detalle}</td>
          </tr>
            </tbody>
         </table>
        </div>`
        })

        constedorXbox.appendChild(xboxHtml)
    })
}


//------------------------------------------------------------------

function showPlay(consolaP){
    const contendorPlay = document.querySelector(`.v1`)
    consolaP.forEach((consolP)=>{
        const playHtml = document.createElement(`div`)
        playHtml.classList.add(`card`)
        playHtml.style.backgroundColor = ("#313131")
        playHtml.innerHTML = `
        <img class="img" src="imgConsolas/${consolP.imagen}"  alt="">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
           <g>
            <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill-rule="nonzero" fill="#343434"></polygon>
            <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" fill-rule="nonzero" fill="#3C3C3B"></polygon>
            <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" fill-rule="nonzero" fill="#141414"></polygon>
            <polygon points="0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#393939"></polygon>
           </g>
          </g>
         </g>
        </svg>
          <div class="textBox">
            <p class="text head">${consolP.nombre}</p>
            <p class="text price">${consolP.precio}</p>
            <div>
                <button class="carro1" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
              </div>
          </div>
          <!--  inicio modal -->
              
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content bg-dark">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 tituloname text-danger" id="exampleModalLabel"></h1>
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
        const detailsButton = playHtml.querySelector('.carro1');
detailsButton.addEventListener('click', () => {
const tituloname=document.querySelector('.tituloname')
tituloname.textContent=`${consolP.nombre}`
const mymodal=document.querySelector('.mymodal')
mymodal.innerHTML=`
<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead class="table">
      <tr>
        <th rowspan="3" ><img src="imgConsolas/${consolP.imagen}" width="300px"  alt=""></th>
        <th class="align-middle text-light">${consolP.nombre}</th>
        <th class="align-middle text-light">${consolP.precio}</th>
        <th class="align-middle text-light">Detalles</th>
        
      </tr>
    </thead>
    <tbody>
    <tr>
      <td class="align-middle text-light"><span style="color:#3A3DF1 ">Dimensiones:</span> ${consolP.dimensiones}</td>
      <td class="align-middle text-light"><span style="color:#3A3DF1 ">Almacenamiento:</span>${consolP.almacenamiento}</td>
      <td class="align-middle text-light"><span style="color:#3A3DF1 ">Peso:</span>${consolP.peso} </td>
      <td class="align-middle text-light"><span style="color:#3A3DF1 ">Características especiales:</span>${consolP.detalle}</td>
  </tr>
    </tbody>
 </table>
</div>`
})
        
         contendorPlay.appendChild(playHtml)
    })
}


//------------------------------------------------------------------

function showNintendo(consolaN){
    const contenedorNintendo = document.querySelector(`.v2`)
    consolaN.forEach((consolN)=>{
        const ninHtml = document.createElement(`div`)
        ninHtml.classList.add(`card`)
        ninHtml.style.backgroundColor = ("#313131")
        ninHtml.innerHTML = `
        <img class="img" src="imgConsolas/${consolN.imagen}"  alt="">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
           <g>
            <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill-rule="nonzero" fill="#343434"></polygon>
            <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" fill-rule="nonzero" fill="#3C3C3B"></polygon>
            <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" fill-rule="nonzero" fill="#8C8C8C"></polygon>
            <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" fill-rule="nonzero" fill="#141414"></polygon>
            <polygon points="0,650.54 392.07,882.29 392.07,472.33" fill-rule="nonzero" fill="#393939"></polygon>
           </g>
          </g>
         </g>
        </svg>
          <div class="textBox">
            <p class="text head">${consolN.nombre}</p>
            <p class="text price">${consolN.precio}</p>
            <div>
                <button class="carro" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
              </div>
          </div>
          <!--  inicio modal -->
              
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content bg-dark">
                <div class="modal-header bg-danger">
                  <h1 class="modal-title fs-5 tituloname text-danger" id="exampleModalLabel"></h1>
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
        const detailsButton = ninHtml.querySelector('.carro');
detailsButton.addEventListener('click', () => {
const tituloname=document.querySelector('.tituloname')
tituloname.textContent=`${consolN.nombre}`
const mymodal=document.querySelector('.mymodal')
mymodal.innerHTML=`
<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead class="table">
      <tr>
        <th rowspan="3" ><img src="imgConsolas/${consolN.imagen}" width="300px"  alt=""></th>
        <th class="align-middle text-light">${consolN.nombre}</th>
        <th class="align-middle text-light">${consolN.precio}</th>
        <th class="align-middle text-light">Detalles</th>
        
      </tr>
    </thead>
    <tbody>
    <tr>
      <td class="align-middle text-light"><span style="color:#3AF1CB ">Dimensiones:</span> ${consolN.dimensiones}</td>
      <td class="align-middle text-light"><span style="color:#3AF1CB ">Almacenamiento:</span>${consolN.almacenamiento}</td>
      <td class="align-middle text-light"><span style="color:#3AF1CB ">Peso:</span>${consolN.peso} </td>
      <td class="align-middle text-light"><span style="color:#3AF1CB ">Características especiales:</span>${consolN.detalle}</td>
    </tr>
    </tbody>
 </table>
</div>`
})
        
         contenedorNintendo.appendChild(ninHtml)
    })
}