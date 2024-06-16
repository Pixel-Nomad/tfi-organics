let previousScrollPosition = 0;

function HandlePage() {
    HandleProducts()
    handleDarkMode();
    setTimeout(() => {
        $('.loading-container').hide();
        $('.ProductPage').show();
    }, 200);
}

function HandleProducts() {
    const Products = Data.Products;
    const prod = [];
    for (i = 0; i < Products.length; i++) {
        const e = Products[i];
        const card = `<div class="col">
        <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
          <img
            src="${e.image}"
            class="card-img-top image-fluid"
            alt="${e.Image_alt}"
          />
          <hr class="divider divider-dark" /> 
          <div class="card-body">
            <h5 class="card-title text-center text-dark">${e.Title}</h5>
          </div>
          <hr class="divider divider-dark" />
                <button type="button" class="mt-3 btn btn-light float-md-center text-dark"
                    onclick="onRead('${e.image}','${e.Image_alt}','${e.Title}','${i}')">Click to Read More</button>
          <hr class="divider divider-dark" />
          <div class="card-footer text-center text-dark">${e.price}</div>
        </div>
      </div>`
        prod.push(card);
    }
    const html = `<br><br><br><br>
    <div class="container">
      <p class="text-center fs-1 text-dark">Our Products</p>
      <div class="row row-cols-1 row-cols-md-3 m-4" id="cards">
      ${prod.join('')}
      </div>
    </div>`
    const prodContainer = document.getElementById('Products-Container');
    prodContainer.innerHTML = html;
}

function onRead(Image, Image_alt, Title, index) {
    
    Details = Data.Products[index].Details;
    if (DarkMode) {
        const Detailsc = [];
        for (i = 0; i < Details.length; i++) {
            const e = Details[i];
            const detail = `<div class="col">
                <h1 class="text-light fs-2 pt-5"><b>${e.Title}</b></h1>
                <h1 class="text-light fs-5">${e.Description}</h1>
            </div>`
          Detailsc.push(detail);
        }
        const html = `<br><br><br>
        <div class="container">
            <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
            <h1 class="text-center text-light fs-1"><b>${Title}</b></h1>
            <div class="row row-cols-1 row-cols-md-2 m-4">
                <div class="col">
                    <img src="${Image}" class="img-fluid rounded mx-auto mt-5 pt-5 pb-5 mt-5 d-block shadow-dark" style="width:350px;height:350px" alt="${Image_alt}" />
                </div>
                ${Detailsc.join('')}
            </div>
        </div>
        `
        const prodContainer = document.getElementById('Product-Details');
        prodContainer.innerHTML = html;
    } else {
        const Detailsc = [];
        for (i = 0; i < Details.length; i++) {
            const e = Details[i];
            const detail = `<div class="col">
                <h1 class="text-dark fs-2 pt-5"><b>${e.Title}</b></h1>
                <h1 class="text-dark fs-5">${e.Description}</h1>
            </div>`
          Detailsc.push(detail);
        }
        const html = `<br><br><br>
        <div class="container">
            <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
            <h1 class="text-center text-dark fs-1"><b>${Title}</b></h1>
            <div class="row row-cols-1 row-cols-md-2 m-4">
                <div class="col ">
                    <img src="${Image}" class="img-fluid rounded mx-auto  mt-5 pt-5 pb-5 mt-5 d-block shadow-light" style="width:350px;height:350px" alt="${Image_alt}" />
                </div>
                ${Detailsc.join('')}
            </div>
        </div>
        `
        const prodContainer = document.getElementById('Product-Details');
        prodContainer.innerHTML = html;
    }
    previousScrollPosition = window.scrollY;
    $('#Products-Container').hide();
    $('#Product-Details').show();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Use 'auto' for instant scroll
    });
}

function GOBack(){
    $('#Product-Details').hide();
    $('#Products-Container').show();
    window.scrollTo({
        top: previousScrollPosition,
        behavior: 'smooth'
    });
}

Data = storage
HandlePage()