//http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]

window.addEventListener ('load', (event) => {
console.log('page has loaded');
document.getElementById('btn').addEventListener('click', () => {
    fetch('http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]')
    .then((res) => {
        return res.json() 
    }) .then ((data) => {
        console.log('api data', data)
        console.log(`<img src = ${data.message}/>`)
        document.getElementById('result').innerHTML = `<img src =${ data.message} />`
    });
})
})