// FEATURED PRODUCTS

const products = JSON.parse(localStorage.getItem('products'));

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