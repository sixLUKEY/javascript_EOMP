function updateCart(){
    updateItems()
    updateTotal()

    localStorage.setItem('cart', JSON.stringify(cart))
}

function updateItems(){
    const cartBox = document.getElementById('cartBox')
    cartBox.innerHTML = ''
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
    const removeButton = document.createElement('button')

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
    removeButton.className = 'remove'

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
    quantity.innerText = product.units
    subtractButton.innerText = "-"
    addButton.innerText = "+"
    itemQuantity.appendChild( subtractButton )
    itemQuantity.appendChild( quantity )
    itemQuantity.appendChild( addButton )

    subtractButton.addEventListener("click", () =>{
        updateUnits('subtract', product.id)
    })

    addButton.addEventListener("click", () =>{
        updateUnits('add', product.id)
    })

    removeButton.innerText = '❌'
    removeButton.addEventListener("click", () =>{
        remove( product.id )
    })


    cartQuantity.appendChild( cartColorBlock )
    cartQuantity.appendChild( itemPrice )
    cartQuantity.appendChild( itemQuantity )

    cartDetails.appendChild( cartName )
    cartDetails.appendChild( cartQuantity )

    cartItem.appendChild( cartImage )
    cartItem.appendChild( cartDetails )
    cartItem.appendChild( removeButton )

    cartBox.appendChild( cartItem )
})
}

function updateUnits( action, id ){
    cart = cart.map((item) => {

        let units = item.units

        if ( item.id === id){
            if (action === 'subtract' && units > 1){
                units--
            }else if ( action === 'add' && units < item.quantity ){
                units++
            }
        }

        return {
            ...item,
            units
        }
    })

    updateCart()
}

const subtotal = document.getElementById( 'subtotal' )

function updateTotal(){
    let totalPrice = 0

    cart.forEach((item) => {
        totalPrice += item.price * item.units
    })

    subtotal.innerText = totalPrice.toFixed(2)
}

function remove( id ){
    cart = cart.filter((item) => item.id !== id)

    updateCart()
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart()


const checkoutBtn = document.getElementById('checkoutBtn')
checkoutBtn.addEventListener('click', () =>{
    checkout()
})

function checkout(){
    cart = []

    updateCart()
}