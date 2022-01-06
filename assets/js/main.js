import {Leon, Lobo, Oso, Serpiente, Aguila} from './clases.js'

(async function() {
    let datos = await fetch("assets/data/animales.json");
    let datos2 = await datos.json();
    let animales = datos2.animales
    
    $("#animal").on('change', function(){
        const nombre_animal = $("#animal").val()
        
        const animal = animales.find( an => an.name == nombre_animal)

        $("#preview").css('background-image', `url("assets/imgs/${animal.imagen}")`)
    })

})();

const animales = []

$("#btnRegistrar").on('click', function(){

    const animal = $("#animal").val()
    const edad = $("#edad").val()
    const comentarios = $("#comentarios").val()

    let nuevoanimal;

    if (animal == 'Leon') {
        nuevoanimal = new Leon(animal, edad, comentarios)
    } else if (animal == 'Lobo') {
        nuevoanimal = new Lobo(animal, edad, comentarios)
    } else if (animal == 'Oso') {
        nuevoanimal = new Oso(animal, edad, comentarios)
    } else if (animal == 'Serpiente') {
        nuevoanimal = new Serpiente(animal, edad, comentarios)
    } else {
        nuevoanimal = new Aguila(animal, edad, comentarios)
    }

    animales.push(nuevoanimal);

    dibujarAnimales()
})

function dibujarAnimales() {
    $("#Animales").html("")
    for (animal of animales) {
        
        $("#Animales").append(`
        <div class="card col-3" style="width: 18rem;">
            <img src="${animal.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>        
        
        `)
    }
}