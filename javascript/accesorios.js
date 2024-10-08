console.log(accesoriosMouse);

document.addEventListener('DOMContentLoaded', () =>{
    showJuegos(accesoriosMouse)
    showAudio(accesoriosAudio)
    showTeclados(accesoriosKeyboard)
})

function showJuegos(accesoriosMouse){
    const contenedorMouses = document.querySelector(`.obj`)
    accesoriosMouse.forEach((mous)=>{
      const{imagen}=accesoriosMouse
        const mouseHtml = document.createElement('div')
        mouseHtml.classList.add(`card`)
        mouseHtml.innerHTML = `
        <div class="card-img"> <img src="img3/${mous.imagen}" width="300px"  alt=""></div>
              <div class="card-info">
  
                <p class="text-title">${mous.nombre}</p>
                <p class="textoo" style="color: white;"><strong>${mous.precio}</strong></p>
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
              </div>
         

        `
        const detailsButton = mouseHtml.querySelector('.carro');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${mous.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="img3/${mous.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-secondary">${mous.nombre}</th>
                <th class="align-middle text-secondary">${mous.precio}</th>
                <th class="align-middle text-secondary">Descripcion</th>
                
              </tr>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle text-light"><span class="text-secondary">Conectividad:</span> ${mous.conectividad}</td>
              <td class="align-middle text-light"><span class="text-secondary">botones:</span>${mous.botones}</td>
              <td class="align-middle text-light"><span class="text-secondary">Sensor:</span> ${mous.sensor}</td>
              <td class="align-middle text-light">${mous.descripcion}</td>
            </tr>
            </tbody>
         </table>
       </div>`
        })
        contenedorMouses.appendChild(mouseHtml)
    })
}

function showAudio(accesoriosAudio){
    const contenedorAudifonos = document.querySelector(`.obj2`)
    accesoriosAudio.forEach((audio)=>{
        const audioHtml = document.createElement(`div`)
        audioHtml.classList.add(`card`)
        audioHtml.innerHTML = `
        <div class="card-img"> <img src="img3/${audio.imagen}" width="300px"  alt=""></div>
              <div class="card-info">
  
                <p class="text-title">${audio.nombre}</p>
                <p class="textoo" style="color: white;"><strong>${audio.precio}</strong></p>
                <div>
                  <button class="btn carro1" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
                </div>
        </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 tituloname" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body mymodal">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        `
        const detailsButton = audioHtml.querySelector('.carro1');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${audio.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="img3/${audio.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-primary">${audio.nombre}</th>
                <th class="align-middle text-primary">${audio.precio}</th>
                <th class="align-middle text-primary">Descripcion:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="align-middle text-light"><span class="text-primary">Garantia:</span> ${audio.garantia}</td>
              <td class="align-middle text-light"><span class="text-primary">Compatibilidad con plataformas:</span>${audio.compatibilidad}</td>
              <td class="align-middle text-light"><span class="text-primary">Respuesta de frecuencia:</span> ${audio.frecuencia}</td>
              <td class="align-middle text-light">${audio.descripcion}</td>
              </tr>
            </tbody>
         </table>
       </div>`
        })
        contenedorAudifonos.appendChild(audioHtml)
    })
}

function showTeclados(accesoriosKeyboard){
    const contenedorTeclados = document.querySelector(`.obj3`)
    accesoriosKeyboard.forEach((teclado)=>{
        const tecladoHtml = document.createElement(`div`)
        tecladoHtml.classList.add(`card2`)
        tecladoHtml.innerHTML = `
        <div class="card2-img"> <img src="img3/${teclado.imagen}" width="300px"  alt=""></div>
                <div class="card2-info">
                  <p class="text-title">${teclado.marca}</p>
                  <p class="textoo" style="color: white;"><strong>${teclado.precio}</strong></p>
                  <div>
                  <div>
                    <button class="btn carro2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Details</button>
                  </div>
                <div>
        </div>
        <!--  inicio modal -->
              
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 tituloname text-light" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body mymodal">
                .
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
        `
        const detailsButton = tecladoHtml.querySelector('.carro2');
        detailsButton.addEventListener('click', () => {
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${teclado.marca}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table">
              <tr>
                <th rowspan="3" ><img src="img3/${teclado.imagen}" width="300px"  alt=""></th>
                <th class="align-middle text-success">${teclado.marca}</th>
                <th class="align-middle text-success">${teclado.precio}</th>
                <th class="align-middle text-success">Descripcion</th>
                
                
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="align-middle text-light"><span class="text-success">Numero de teclas:</span> ${teclado.numeroTeclas}</td>
              <td class="align-middle text-light"><span class="text-success">material:</span>${teclado.material}</td>
              <td class="align-middle text-light"><span class="text-success">Características especiales:</span> ${teclado.caracteristica}</td>
              <td class="align-middle text-light">${teclado.descripcion}</td>
              </tr>
            </tbody>
         </table>
       </div>`
        })
        contenedorTeclados.appendChild(tecladoHtml)
    })
}

