async function lufyGears() {
    try {
        const res = await fetch("https://api.api-onepiece.com/v2/luffy-gears/en")
        const data = await res.json();

        data.forEach(gear => {
            const gearElement = document.createElement(`div`)
            gearElement.classList.add('gear-card')
            const nameElement = document.createElement(`h2`)
            nameElement.classList.add('gear-name')
            const descriptionElement = document.createElement(`p`)
            nameElement.classList.add('gear-description')

            nameElement.textContent = `Name ${gear.name}`
            descriptionElement.textContent = `Description ${gear.description}`

            gearElement.appendChild(nameElement)
            gearElement.appendChild(descriptionElement)

            document.getElementById(`gears`).appendChild(gearElement)
        });
    } catch (error) {
        console.log("No se puede mostrar la informacion de la API", error)
    }
}
lufyGears()


let searchData = []
