// create products on the local storage
let wrapper = document.querySelector("[recentProducts]")
let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse (localStorage.getItem("products")) 
: localStorage.setItem("products", 
    JSON.stringify(
        [
            {
                id: 1,
                productName: "bubbles",
                catergory: "character",
                description: "super hero",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/bubbles.png"
              },
              {
                id: 2,
                productName: "buttercup",
                catergory: "character",
                description: "super hero",
                amount: 20000.89,
                img_ur: "https://chelsea-julie.github.io/all-images/images/buttercup.png"
              },
              {
                id: 3,
                productName: "awodwa",
                catergory: "person",
                description: "aspiring developer",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/awodwa.png"
              },
              {
                id: 4,
                productName: "daniel",
                catergory: "person",
                description: "long",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/daniel.png"
              },
              {
                id: 5,
                productName: "nizaam",
                catergory: "nice",
                description: "aspiring developer",
                amount: 20000.89,
                img_url: "https://chelsea-julie.github.io/all-images/images/doofensmirts.png"
              }
        ]
    )
)

function recentProducts() {
    let latestProducts = products.reverse().slice(0, products.length >> 1) 
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
        <div class="card" style="width:18rem;">
         <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading= "lazy">
     <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">${product.description}</p>
     
    </div>
    </div>
        `
    })

}

recentProducts() 



