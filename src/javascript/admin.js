function Product( brand, logo , name, gender, description, size, color, price, quantity, image, featured ){
    
    const id = Math.floor(Math.random() * 1000000)

    this.id = id
    this.brand = brand;
    this.logo = logo;   
    this.name = name;
    this.description = description;
    this.gender = gender;
    this.size = size;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
    this.featured = featured;

}

let products = [ 
    {
    id : 1,
    brand : 'Nike',
    logo : "https://i.postimg.cc/W1nvZgNv/nikeLogo.png",
    name : 'Air Jordan 1',
    description : 'University Blue',
    gender : 'Male',
    size : 12,
    color : '#ACD3EE',
    price : 2599,
    quantity : 20,
    image : "https://i.postimg.cc/rmvXT9JS/jordan1.png",
    featured : true,
    },
    {
    id : 2,
    brand : 'Converse',
    logo: "https://i.postimg.cc/qBP4Hpb9/converse-Logo.png",
    name : 'All Star',
    description : 'Classic Chuck',
    gender : 'Female',
    size : 8,
    color : '#161C1E',
    price : 1299,
    quantity : 10,
    image : "https://i.postimg.cc/vm2wqyx2/chuck-taylor.png",
    featured : true,
    },
    {
    id : 3,
    brand : 'Adidas',
    logo : "https://i.postimg.cc/F15PWWxB/adidas-Logo.png",
    name : 'Adilette Slides',
    description : "'22 version",
    gender : 'Female',
    size : 9,
    color : '#C5C0AE',
    price : 899,
    quantity : 5,
    image : "https://i.postimg.cc/Ls8M355Z/adilette.png",
    featured : false,
    },
    {
    id : 4,
    brand : 'Vans',
    logo : "https://i.postimg.cc/0jDgyJWh/vansLogo.png",
    name : 'sk8 hi',
    description : 'Suede Flame',
    gender : 'Female',
    size : 6,
    color : '#111313',
    price : 999,
    quantity : 13,
    image : "https://i.postimg.cc/kMbPckJw/vanHi.png",
    featured : true,
    },
    {
    id : 5,
    brand : 'Nike',
    logo : "https://i.postimg.cc/W1nvZgNv/nikeLogo.png",
    name : 'Air Max 90 Surplus',
    description : 'Caldera Fabric',
    gender : 'Male',
    size : 8,
    color : '#AE967E',
    price : 2499,
    quantity : 25,
    image : "https://i.postimg.cc/DZWkRNqv/airMax.png",
    featured : true,
    }
];

localStorage.setItem('products', JSON.stringify(products));

function createProduct() {

    const brand = document.getElementById('brandSelector').value
    const logo = document.getElementById('logoSelector').value
    const name = document.getElementById('productName').value
    const description = document.getElementById('productDesc').value
    const gender = document.getElementById('gender').value
    const size = document.getElementById('size').value
    const color = document.getElementById('color').value
    const price = document.getElementById('productPrice').value
    const quantity = document.getElementById('productQuantity').value
    const image = document.getElementById('productImage').value
    const featured = document.getElementById('productFeatured').value

    const newProduct = new Product( brand, logo, name, description, gender, size, color, price, quantity, image, featured )
    // console.log(products)
        const previewBox = document.getElementById('previewProduct')
        const productBox = document.createElement('div')
        const productCard = document.createElement('div')
        const cardHead = document.createElement('div')
        const logoImg = document.createElement('img')
        const cardPrice = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardDetails = document.createElement('div')
        const cardName = document.createElement('div')
        const cardDesc = document.createElement('div')
        const cardSizes = document.createElement('div')
        const addBox = document.createElement('div')
        const cardColorBox = document.createElement('div')
        const cardColorInner = document.createElement('div')
        const pushButton = document.createElement('button')

        productBox.className = 'productBox'
        productCard.className = 'productCard'
        cardHead.className = 'cardHead'
        logoImg.className = 'logoImg'
        cardPrice.className = 'cardPrice'
        cardImg.className = 'cardImg'
        cardDetails.className = 'cardDetails'
        cardName.className = 'cardName'
        cardDesc.className = 'cardDesc'
        cardSizes.className = 'cardSizes'
        addBox.className = 'addBox'
        cardColorBox.className = 'cardColorBox'
        cardColorInner.className = 'cardColorInner'
        pushButton.className = 'pushButton'

        previewBox.innerHTML = ''
        
        logoImg.src = logo
        logoImg.alt = brand
        cardPrice.innerText = `R${price}`

        cardHead.appendChild( logoImg )
        cardHead.appendChild( cardPrice )

        cardImg.src = image
        cardImg.alt = name

        cardName.innerText = name
        cardDesc.innerText = description
        cardSizes.innerText = `Available Sizes: ${size}`

        cardDetails.appendChild( cardName )
        cardDetails.appendChild( cardDesc )
        cardDetails.appendChild( cardSizes )

        cardColorInner.style.backgroundColor = color;
        cardColorBox.appendChild( cardColorInner )

        pushButton.innerText = "Add to Products"

        
        addBox.appendChild( cardColorBox )

        productCard.appendChild( cardHead )
        productCard.appendChild( cardImg )
        productCard.appendChild( cardDetails )
        productCard.appendChild( addBox )

        previewBox.appendChild( productCard )

        previewBox.appendChild( pushButton )

        pushButton.addEventListener( 'click', () => {
            const existingProducts = JSON.parse(localStorage.getItem('products') || [])
           
            existingProducts.push( newProduct )
            alert('Product added Succesfully!')
            localStorage.setItem('products', JSON.stringify(existingProducts))
            console.log(products)
        })
}







//   function editProperty() {
//     const propertyName = 'name';
//     const searchValue = 'Flux 25';
  
//     const index = products.findIndex(product => product[propertyName] === searchValue);
    
//     if (index !== -1) {
//       const property = 'price';
//       const value = 3799;
  
//       products[index][property] = value;
//       console.log("Property updated successfully!");
//     } else {
//       console.log("product not found!");
//     }
//   }
//   editProperty()
// console.log(products)