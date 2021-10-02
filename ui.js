class UI {
    constructor() {
        this.container = document.getElementById('container')
        this.message = document.getElementById('message')
    }

    showImage(hero) {
        this.clearMessage()
        this.container.innerHTML = `
            <li>
                <img src=${hero.url} alt=${hero.name} width="100%" />
                <p>${hero.name}</p>
            </li>
        `
    }

    showMultipleImages(hero) {
        this.container.innerHTML = ""
        
        if (hero.response === "error") {
            this.message.innerHTML = `
                <div class="alert__danger">
                    <p>${hero.error}</p>
                </div>
            `
            setTimeout(() => this.clearMessage(), 2000)
            return
        }

        this.container.innerHTML = ""

        hero.results.map(({ image, name, powerstats }) => {
            this.container.innerHTML += `
            <li>
                <div class="card">
                    <img src=${image.url} alt=${name} width="100%" />
                    <div class="overlay">
                        <h2>${name}</h2>
                        <div class="description">
                            <h4>PowerStats</h4>
                            <p>Combat: ${powerstats.combat}</p>
                            <p>Combat: ${powerstats.combat}</p>
                            <p>Speed: ${powerstats.speed}</p>
                        </div>
                    </div>
                </div>
            </li>
           `
        })
    }

    clearMessage() {
        let alertFound = document.querySelector('.alert__danger')
        if (alertFound) {
            alertFound.remove()
        }
    }
}

export default UI