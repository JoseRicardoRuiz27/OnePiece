function characters(chars) {
    const gearContainer = document.getElementById('gears')
    gearContainer.innerHTML = '';

        chars.forEach(characters => {
            const charsElement = document.createElement(`div`)
            charsElement.classList.add('fruit-card')

            const nameElement = document.createElement(`h2`)
            nameElement.textContent = `Name: ${characters.name}`;

            const descriptionElement = document.createElement(`p`)
            descriptionElement.textContent = `Description: ${characters.description}`;

            charsElement.appendChild(nameElement)
            charsElement.appendChild(descriptionElement)

            gearContainer.appendChild(charsElement)
        });
        document.getElementById('loading').style.display = `none`
        gearContainer.style.display = `block`;
}

export async function fetchChars() {
    document.getElementById('fruits-button').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('gears').style.display = 'none';
    try {
        const res = await fetch("https://api.api-onepiece.com/v2/characters/en")
        const data = await res.json()
        characters(data)
    } catch (error) {
        console.log('Error en la API', error)
    }
}