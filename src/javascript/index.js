// FEATURED PRODUCTS

const products = JSON.parse(localStorage.getItem('products')) || [ 
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
];;

const featuredBox = document.getElementById('featured')
products.forEach((product) =>{
    if(product.featured) {
        const featuredProductBox = document.createElement('div')
        const featuredProduct = document.createElement('div')
        const featuredCard = document.createElement('div')
        const logo = document.createElement('div')
        const logoImg = document.createElement('img')
        const productImage = document.createElement('div')
        const productImageImg = document.createElement('img')
        const textBox = document.createElement('div')
        const productName = document.createElement('h4')
        const productDetails = document.createElement('h5')
        const colorBox = document.createElement('div')
        const colorBoxColor = document.createElement('div')
        const price = document.createElement('h3')

        featuredProductBox.className = 'featuredProductBox'
        featuredProduct.className = 'featuredProduct'
        featuredCard.className = 'featuredCard'
        logo.className = 'logo'
        productImage.className = 'productImage'
        textBox.className = 'textBox'
        productName.className = 'productName'
        colorBox.className = 'colorBox'
        colorBoxColor.className = 'colorBoxColor'
        price.className= 'price'

        logoImg.src = product.logo
        logoImg.alt = product.brand
        logo.appendChild( logoImg )
        
        productImageImg.src = product.image
        productImageImg.alt = product.name
        productImage.appendChild( productImageImg )

        featuredCard.appendChild( logo )
        featuredCard.appendChild( productImage )

        productName.innerText = product.name
        productDetails.innerText = product.description

        colorBoxColor.style.backgroundColor = product.color;
        colorBox.appendChild( colorBoxColor )

        textBox.appendChild( productName )
        textBox.appendChild( productDetails )
        textBox.appendChild( colorBox )

        price.innerText = product.price

        featuredProduct.appendChild( featuredCard )
        featuredProduct.appendChild( textBox )
        featuredProduct.appendChild( price )

        featuredProductBox.appendChild( featuredProduct )
        featuredBox.appendChild( featuredProductBox )
        
    }
})


// function process(){
//     const form = document.getElementById('form')
//     data = new FormData(form)

//     fetch("https://formspree.io/f/xwkjgqpp", { method: "POST", body: data })
//     .then( res => res.text())
//     .then( txt => {
//         console.log(txt)
//         form.reset()
//     })

//     return false
// }