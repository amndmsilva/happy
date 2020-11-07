// create map
const map = L.map('mapid').setView([-19.9244387,-43.941956], 15);

//create and add titeLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add markers
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}) 
    .addTo(map)
})


// add camp of photos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar  .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //clone da ultima imagem adicionadas
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    //limpar o campo antes de adicionar imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o campo
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove();

    
}

//select yes or no
function toggleSelect(event) {
    // retirar a class .active(dos botões selecionado)
    document.querySelectorAll('.button-select button') // função simplificada ((button) => ('.button-select button').forEach )
    .forEach(function(button) {
        button.classList.remove('active')  
    })

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

// function validate(event) {

//     //validar se lat e lng estão preenchidos - DESAFIO
//     const needsLatAndLng = false;
//     if(needsLatAndLng) {
//         event.preventDefault()
//         alert('Selecione um ponto no mapa')
//     }
    
// }


