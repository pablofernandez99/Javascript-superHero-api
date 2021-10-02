import { apiKey } from './config/apiKey.js'
import UI from './ui.js'

const ui = new UI()

const change = document.querySelector('#change--hero')

async function getData() {
	const id = Math.floor(Math.random() * 732)
	const url = `https://www.superheroapi.com/api.php/${apiKey}/${id}/image`

	const response = await fetch(url)
	return await response.json()
}

function catchError(err) {
	console.log('Error:', err)
}

change.addEventListener('click', () => {
	getData()
		.then(resp => {
			console.log(resp)
			ui.showImage(resp)
		})
		.catch(catchError)

})

async function searchData(name) {
	const url = `https://www.superheroapi.com/api.php/${apiKey}/search/${name}`

	const response = await fetch(url)
	return await response.json()
}

document.getElementById('searchForm').addEventListener('submit', async (e) => {
	e.preventDefault()
	let name = document.getElementById('searchHero')

	if (!name.value.trim()) {
		console.log('No puede estar vacio')
		return
	}

	searchData(name.value.toLowerCase())
		.then(resp => {
			name.value = " "
			console.log(resp.results)
			ui.showMultipleImages(resp)
		})
		.catch(catchError)
})

window.addEventListener('load', () => {
	getData()
		.then(resp => {
			console.log(resp)
			ui.showImage(resp)
		})
		.catch(catchError)
})