//! POSTIMAGES LINK https://postimg.cc/gallery/DncVLfx

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


//FEATURED PRODUCTS
// const featuredBox = document.getElementById('featured')
// products.forEach((product) =>{
//     if(product.featured) {
//         const featuredProductBox = document.createElement('div')
//         const featuredProduct = document.createElement('div')
//         const featuredCard = document.createElement('div')
//         const logo = document.createElement('div')
//         const logoImg = document.createElement('img')
//         const productImage = document.createElement('div')
//         const productImageImg = document.createElement('img')
//         const textBox = document.createElement('div')
//         const productName = document.createElement('h4')
//         const productDetails = document.createElement('h5')
//         const colorBox = document.createElement('div')
//         const colorBoxColor = document.createElement('div')
//         const price = document.createElement('h3')

//         featuredProductBox.className = 'featuredProductBox'
//         featuredProduct.className = 'featuredProduct'
//         featuredCard.className = 'featuredCard'
//         logo.className = 'logo'
//         productImage.className = 'productImage'
//         textBox.className = 'textBox'
//         productName.className = 'productName'
//         colorBox.className = 'colorBox'
//         colorBoxColor.className = 'colorBoxColor'
//         price.className= 'price'

//         logoImg.src = product.logo
//         logoImg.alt = product.brand
//         logo.appendChild( logoImg )
        
//         productImageImg.src = product.image
//         productImageImg.alt = product.name
//         productImage.appendChild( productImageImg )

//         featuredCard.appendChild( logo )
//         featuredCard.appendChild( productImage )

//         productName.innerText = product.name
//         productDetails.innerText = product.description

//         colorBoxColor.style.backgroundColor = product.color;
//         colorBox.appendChild( colorBoxColor )

//         textBox.appendChild( productName )
//         textBox.appendChild( productDetails )
//         textBox.appendChild( colorBox )

//         price.innerText = product.price

//         featuredProduct.appendChild( featuredCard )
//         featuredProduct.appendChild( textBox )
//         featuredProduct.appendChild( price )

//         featuredProductBox.appendChild( featuredProduct )
//         featuredBox.appendChild( featuredProductBox )
        
//     }
// })


//MENS SECTION
const mensBox = document.getElementById( 'mensBox' )
const womensBox = document.getElementById( 'womensBox' )

products.forEach((product) => {
    
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
        const addButton = document.createElement('div')

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
        addButton.className = 'addButton'

        logoImg.src = product.logo
        logoImg.alt = product.brand
        cardPrice.innerText = `R${product.price}`

        cardHead.appendChild( logoImg )
        cardHead.appendChild( cardPrice )

        cardImg.src = product.image
        cardImg.alt = product.name

        cardName.innerText = product.name
        cardDesc.innerText = product.description
        cardSizes.innerText = `Available Sizes: ${product.size}`

        cardDetails.appendChild( cardName )
        cardDetails.appendChild( cardDesc )
        cardDetails.appendChild( cardSizes )

        cardColorInner.style.backgroundColor = product.color;
        cardColorBox.appendChild( cardColorInner )

        addButton.innerHTML = `<i class="fa-solid fa-cart-plus fa-2xl"></i>`
        
        addBox.appendChild( cardColorBox )
        addBox.appendChild( addButton )

        productCard.appendChild( cardHead )
        productCard.appendChild( cardImg )
        productCard.appendChild( cardDetails )
        productCard.appendChild( addBox )

        productBox.appendChild( productCard )
    
        if ( product.gender !== 'Female'){
            mensBox.appendChild( productBox )
        } else if ( product.gender !== 'Male'){
            womensBox.appendChild( productBox )
        }
})


function Product( brand, name, gender, description, size, color, price, quantity, image, featured ){
    
    const id = Math.floor(Math.random() * 1000000)

    this.id = id
    this.brand = brand;
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


// function createProduct() {

//     const brand = 'Adidas'
//     const logo = 'Adidas'
//     const name = 'Flux 25'
//     const description = 'Neon Pink Ltd'
//     const gender = 'Male'
//     const size = 8
//     const color = 'black'
//     const price = 1899
//     const quantity = 12
//     const image = 'url52'

//     const newProduct = new Product( brand, logo, name, description, gender, size, color, price, quantity, image )
//     products.push( newProduct )
// }

// createProduct()

// console.log(products)


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

let cart = [
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
        }
]

const cartBox = document.getElementById('cartBox')

cart.forEach((product) => {

    const cartItem = document.createElement('div')
    const cartImage = document.createElement('div')
    const cartImageImg = document.createElement('img')
    const cartDetails = document.createElement('div')
    const cartName = document.createElement('div')
    const productName = document.createElement('p')
    const productSize = document.createElement('p')
    const cartQuantity = document.createElement('div')
    const cartColorBlock = document.createElement('div')
    const innerColorBlock = document.createElement('div')
    const itemPrice = document.createElement('div')
    const itemQuantity = document.createElement('div')
    const subtractButton = document.createElement('button')
    const quantity = document.createElement('div')
    const addButton = document.createElement('button')

    cartItem.className = 'cartItem'
    cartImage.className = 'cartImage'
    cartDetails.className = 'cartDetails'
    cartName.className = 'cartName'
    cartQuantity.className = 'cartQuantity'
    cartColorBlock.className = 'cartColorBlock'
    innerColorBlock.className = 'innerColorBlock'
    itemPrice.className = 'itemPrice'
    itemQuantity.className = 'itemQuantity'
    quantity.className = 'quantity'

    cartImageImg.src = product.image
    cartImageImg.alt = product.name
    cartImage.appendChild( cartImageImg )

    productName.innerHTML = `${product.name} <br> ${product.description}`
    productSize.innerText = `Size: ${product.size}`
    cartName.appendChild( productName )
    cartName.appendChild( productSize )

    innerColorBlock.style.backgroundColor = product.color;
    cartColorBlock.appendChild( innerColorBlock )

    itemPrice.innerText = `R${product.price}`

    subtractButton.innerText = "-"
    addButton.innerText = "+"
    itemQuantity.appendChild( subtractButton )
    itemQuantity.appendChild( quantity )
    itemQuantity.appendChild( addButton )

    cartQuantity.appendChild( cartColorBlock )
    cartQuantity.appendChild( itemPrice )
    cartQuantity.appendChild( itemQuantity )

    cartDetails.appendChild( cartName )
    cartDetails.appendChild( cartQuantity )

    cartItem.appendChild( cartImage )
    cartItem.appendChild( cartDetails )

    cartBox.appendChild( cartItem )
})