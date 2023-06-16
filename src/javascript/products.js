//! POSTIMAGES LINK https://postimg.cc/gallery/DncVLfx


const products = JSON.parse(localStorage.getItem('products'));

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





