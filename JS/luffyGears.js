function luffyGears(gears) {
    const gearContainer = document.getElementById('gears')
    gearContainer.innerHTML = '';

        gears.forEach(gear => {
            const gearElement = document.createElement(`div`)
            gearElement.classList.add('gear-card')

            const nameElement = document.createElement(`h2`)
            nameElement.textContent = `Name: ${gear.name}`;

            const descriptionElement = document.createElement(`p`)
            descriptionElement.textContent = `Description: ${gear.description}`;

            gearElement.appendChild(nameElement)
            gearElement.appendChild(descriptionElement)

            gearContainer.appendChild(gearElement)
        });
        document.getElementById('loading').style.display = `none`
        gearContainer.style.display = `block`;
}

export async function fetchLuffyGears() {
    document.getElementById('fetch-button').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('gears').style.display = 'none';
    try {
        const res = await fetch("https://api.api-onepiece.com/v2/luffy-gears/en")
        const data = await res.json()
        luffyGears(data)
    } catch (error) {
        console.log('Error en la API', error)
    }
}