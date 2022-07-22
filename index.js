class Destino {
    constructor(img, lugar, descripcion, precio, id){
        this.img= img;
        this.lugar= lugar;
        this.descripcion=descripcion;
        this.precio= precio;
        this.id= id;
    }
}

let lugares =[]

fetch("/datos.json")
    .then((respuesta) => respuesta.json())
    .then((info) => {
        lugares = info;
        lugares.forEach((Destino) => {
            nuevaCards(Destino);
        });
    })


function nuevaCards(Destino) {
    const rowcard = document.getElementById("rowcard");
    let cards = document.createElement("div");
    cards.innerHTML = ` 
    <img src= ${Destino.img} class="card-img-top border" alt="...">
    <h5 class="card-title">${Destino.lugar}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${Destino.descripcion} </p>
      <button id="${Destino.id}" class="btn btn-1 boton">Ver mas </button>
    </div>`;
    rowcard.append(cards)
    rowcard.classList.add("row");
    cards.classList.add("card", "col", "col-sm-8", "col-md-6", "col-lg-4");

}

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });