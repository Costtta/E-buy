// variables

const productList = document.getElementById("productList");
const menCards = document.getElementById("menCards")
const jeweleryCard = document.getElementById("jeweleryCard");
const electronicsCard = document.getElementById("electronicsCard");
const womenCard = document.getElementById("womenCard");

// api

async function api() {
    let fetching = await fetch("https://fakestoreapi.com/products")
    data = await fetching.json();
    console.log(data)
    displayData()
}

api()

function displayData(){
    let card = ``;
    let card2 = ``;
    let card3 = ``;
    let card4 = ``;
    for(let i = 0; i < 4; i++){
        card += `
        <div class="col-lg-3 col-md-6 col-12 p-5 text-center">
        <img src="${data[i].image}" alt="Men">
        <h2 class="my-4">${data[i].title}</h2>
        <p>$${data[i].price}</p>
        <p>Rating: ${data[i].rating.rate} <i class="fa-solid fa-star text-warning"></i></p>
        </div>
        `
    }
    menCards.innerHTML = card;
    for(let i = 4; i < 8; i++){
        card2 += `
        <div class="col-lg-6 col-md-6 col-12 bg-white p-5 text-center">
        <img src="${data[i].image}" widht="150px" height="150px" loading="lazy" alt="Jewelery">
        <h2 class="my-4">${data[i].title}</h2>
        <p>$${data[i].price}</p>
        <p>Rating: ${data[i].rating.rate} <i class="fa-solid fa-star text-warning"></i></p>
        <button class="btn btn-primary">View All</button>
        </div>
        `
    }
    jeweleryCard.innerHTML = card2;
    for(let i = 8; i < 14; i++){
        card3 += `
        <div class="col-lg-4 col-md-6 col-12 p-5 text-center image">
        <img src="${data[i].image}" widht="200px" height="200px" loading="lazy" alt="Electronics">
        <h2 class="my-4">${data[i].title}</h2>
        <p>$${data[i].price}</p>
        <p>Rating: ${data[i].rating.rate} <i class="fa-solid fa-star text-warning"></i></p>
        </div>
        `
    }
    electronicsCard.innerHTML = card3;
    for(let i = 14; i < 18; i++){
        card4 += `
        <div class="col-lg-3 col-md-6 col-12 bg-white p-5 text-center">
        <img src="${data[i].image}" width="200px" height="200px" loading="lazy" alt="Women">
        <h2 class="my-4">${data[i].title}</h2>
        <p>$${data[i].price}</p>
        <p>Rating: ${data[i].rating.rate} <i class="fa-solid fa-star text-warning"></i></p>
        </div>
        `
    }
    womenCard.innerHTML = card4;
}
