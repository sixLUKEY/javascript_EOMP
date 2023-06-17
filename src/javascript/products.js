//! POSTIMAGES LINK https://postimg.cc/gallery/DncVLfx


const products = JSON.parse(localStorage.getItem('products')) ||  [ 
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
        addButton.addEventListener( 'click', () =>{
            console.log(product.id)
            cartAdd( product.id )
            
        })

        function cartAdd ( id ){
            if( cart.some((item) => item.id === id)){
                updateUnits('add', id)
            } else{
                const item = products.find((product) => product.id === id)
                cart.push({
                    ...item,
                    units: 1
                })
            }

            updateCart()
        }
        
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


const filterOutput = document.getElementById('filterOutput')
const filterBtn = document.getElementById('filterBtn') 



filterBtn.addEventListener('click', () =>{
    const filterer = document.getElementById('filterSelect').value
    const filteredAmount = document.getElementById('filterAmount').value
    console.log(filteredProducts)
    console.log(filterer)
    console.log(filteredAmount)

    const filteredProducts = products.filter((product) =>{
    
        if (filterer === 'price'){
            return product.price <= filteredAmount
        } else if (filterer === 'brand'){
            return product.brand === filteredAmount
        }
       
    })

    filteredProducts.forEach((product) => {
    
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
        addButton.addEventListener( 'click', () =>{
            console.log(product.id)
            cartAdd( product.id )
            
        })
    
        function cartAdd ( id ){
            if( cart.some((item) => item.id === id)){
                updateUnits('add', id)
            } else{
                const item = products.find((product) => product.id === id)
                cart.push({
                    ...item,
                    units: 1
                })
            }
    
            updateCart()
        }
        
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
    
})





