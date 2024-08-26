function fruitSaga(fruit) {
    const gearContainer = document.getElementById('gears')
    gearContainer.innerHTML = '';

        fruit.forEach(fruits => {
            const fruitElement = document.createElement(`div`)
            fruitElement.classList.add('fruit-card')

            const nameElement = document.createElement(`h2`)
            nameElement.textContent = `Name: ${fruits.name}`;

            const descriptionElement = document.createElement(`p`)
            descriptionElement.textContent = `Description: ${fruits.description}`;

            fruitElement.appendChild(nameElement)
            fruitElement.appendChild(descriptionElement)

            gearContainer.appendChild(fruitElement)
        });
        document.getElementById('loading').style.display = `none`
        gearContainer.style.display = `block`;
}

export async function fetchFruits() {
    document.getElementById('fruits-button').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('gears').style.display = 'none';
    try {
        const res = await fetch("https://api.api-onepiece.com/v2/fruits/en")
        const data = await res.json()
        fruitSaga(data)
    } catch (error) {
        console.log('Error en la API', error)
    }
}