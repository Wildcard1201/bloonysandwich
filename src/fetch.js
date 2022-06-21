async function getMonkey() {
    let url = 'https://statsnite.com/api/btd/v3/tower/dart-monkey'
    let ops = {
        method: 'GET',   // should be default anyway
        mode: 'no-cors'
    }

    try {
        let res = await fetch(url, ops)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

async function renderMonkey() {
    let monkey = await getMonkey()
    let html = ''

    console.log(monkey)

    let htmlSegment = 
        `<div class="monkey">
            <h2>${monkey.id}</h2>
        </div>`

    html += htmlSegment

    let container = document.getElementById('container')
    container.innerHTML = html
}

renderMonkey();