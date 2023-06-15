let products = [ ];

function CreateProduct( brand, logo, name, gender, description, size, color, price, quantity, image ){
    
    const id = Math.floor(Math.random() * 1000000)

    const product = {
        id, 
        brand,
        logo,
        name,
        description,
        gender,
        size,
        color,
        price,
        quantity,
        image
    }

    products.push(product)
}


const airMax90 = new CreateProduct( "Nike", "https://", "Air Max 90", "Mens", "Deep Black Edition", 8, "Black", 2499, 52, "https://" )

console.log(products)


// products.forEach( product => {
//     const output = document.getElementById('')
//     const prodDiv = document.createElement('div')
//     const desc = document.createElement('p')
//     const img = document.createElement('img')
    
//     desc.innerText = `${product.description}`
    
// })

const users = []

function createUser( name, surname, age){
    const id = Math.floor(Math.random() * 1000000)

    this.id = id
    this.name = name
    this.surname = surname
    this.age = age

    users.push(this)
}

const luke = new createUser( 'Luke', 'Evertson', 22)
const mufuniwa = new createUser('Mufuniwa', 'Mbedzi', 20 )

console.log(luke)
console.log(mufuniwa)

console.log(users)

const addBtn = document.getElementById('addBtn')

addBtn.addEventListener( 'click', () =>{

    const name = document.getElementById('name').value
    createUser( name, surname, age)
})

const div = document.createElement('div')



