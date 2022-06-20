async function getMonkeys() {
    let url = 'https://statsnite.com/api/btd/v3/tower/dart-monkey'
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

