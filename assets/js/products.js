function HandlePage() {
    HandleProducts()
    handleDarkMode();
    setTimeout(() => {
        $('.loading-container').hide();
        $('.ProductPage').show();
    }, 200);
}

function isEven(number) {
    return number % 2 === 0;
}

function HandleProducts() {
    const Products = Data.Products;
    
    
    let html = ''
    for (i=0; i < Products.length; i++){
        const e = Products[i];
        if (isEven(i)){
            html += `<hr class="divider divider-dark" />
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <img src="${e.image}" class="img-thumbnail mt-5 pt-5" style="background: transparent !important; border: 0 !important;" alt="${e.Image_alt}" />
                </div>
                <div class="col">
                    <br>
                        <h1 class="text-dark fs-3 pt-5"><b>${e.Title}</b></h1>
                    <br>
                        <h1 class=" text-dark fs-5">${e.description}</h1>
                    <br>
                </div>
            </div>
            `
            
        } else {
            html += `<hr class="divider divider-dark" />
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <br>
                        <h1 class="text-dark fs-3 pt-5"><b>${e.Title}</b></h1>
                    <br>
                        <h1 class=" text-dark fs-5">${e.description}</h1>
                    <br>
                </div>
                <div class="col">
                    <img src="${e.image}" class="img-thumbnail mt-5 pt-5" style="background: transparent !important; border: 0 !important;" alt="${e.Image_alt}" />
                </div>
            </div>
            `
            
        }
    }
    const prodContainer = document.getElementById('Products-Container');
            prodContainer.innerHTML = html;
}


Data = storage
HandlePage()