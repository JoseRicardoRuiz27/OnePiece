function lufyGears(gears) {
    const gearContainer = document.getElementById('gears')
    gearContainer.innerHTML = ''

        gears.forEach(gear => {
            const gearElement = document.createElement(`div`)
            gearElement.classList.add('gear-card')

            const nameElement = document.createElement(`h2`)
            nameElement.classList.add('gear-name')

            const descriptionElement = document.createElement(`p`)
            descriptionElement.classList.add('gear-description')

            nameElement.textContent = `Name ${gear.name}`
            descriptionElement.textContent = `Description ${gear.description}`

            gearElement.appendChild(nameElement)
            gearElement.appendChild(descriptionElement)

            gearContainer.appendChild(gearElement)
        });
        document.getElementById(`loading`).style.display = `none`
        gearContainer.style.display = `block`;
}

async function fetchLuffyGears() {
    try {
        const res = await fetch("https://api.api-onepiece.com/v2/luffy-gears/en")
        const data = await res.json()
        setTimeout(() => {
            lufyGears(data)
        }, 1000);
    } catch (error) {
        console.log('Error en la API', error)
    }
}
fetchLuffyGears()