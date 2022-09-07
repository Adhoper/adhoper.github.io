//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className="seleccionado";

    //desaparece el menu cuando se le da click
    var x = document.getElementById("nav");
    x.className = "";
}

//Funcion que muestra el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className==""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}


//Abrir el Modal


const openModal = document.getElementById('proyecto1');
//const openModal2 = document.getElementById('proyecto2');
//const openModal3 = document.getElementById('proyecto3');

const modal = document.getElementById("modalp1");
//const modal2 = document.getElementById("modalp2");
//const modal3 = document.getElementById("modalp3");

const closeModal = document.getElementById("m1");
//const closeModal2 = document.getElementById("m2");
//const closeModal3 = document.getElementById("m3");

openModal.addEventListener('click',(e)=>{

    e.preventDefault();
    modal.classList.add('modal--show');
})

/*openModal2.addEventListener('click',(e)=>{

    e.preventDefault();
    modal2.classList.add('modal--show');
})*/

/*openModal3.addEventListener('click',(e)=>{

    e.preventDefault();
    modal3.classList.add('modal--show');
})*/


closeModal.addEventListener('click',(e)=>{

    e.preventDefault();
    modal.classList.remove('modal--show');
})

/*closeModal2.addEventListener('click',(e)=>{

    e.preventDefault();
    modal2.classList.remove('modal--show');
})*/

/*closeModal3.addEventListener('click',(e)=>{

    e.preventDefault();
    modal3.classList.remove('modal--show');
})*/