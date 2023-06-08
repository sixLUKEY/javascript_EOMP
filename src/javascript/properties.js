let properties = [ ];

function CreateProperty( Address, description, category, bedrooms, bathrooms, garages, size,  price, imageLink){
    
    const id = Math.floor(Math.random() * 1000000)
    const perMonth = (price/240 * 1.3).toFixed(2)

    const property = {
        id, 
        Address,
        description,
        category,
        bedrooms,
        bathrooms,
        garages,
        size,
        price,
        perMonth,
        imageLink
    }

    properties.push(property)
}


const mansion = new CreateProperty( "123 Elm Street, Cape Town, South Africa, 7559", "3 storey Mansion with seaeside view", "Mansion", 5, 4, 2, 24200, 2450000, "https:hello")

console.log(properties)

properties.forEach( property => {
    const output = document.getElementById('')
    const propDiv = document.createElement('div')
    const desc = document.createElement('p')
    const img = document.createElement('img')
    
    desc.innerText = `${property.description}`
    
})