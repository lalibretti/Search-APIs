//http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]
const apiKey ='mlye8iDHtLK95jzzL2sydUiQFmWe5nEy';
window.addEventListener('load', (event) => {
    console.log('page has loaded');
    //page reloads onclick
    document.getElementById('search').addEventListener('click', () => {
    console.log('button clicked!')
    let searchTerm = document.getElementById('search-term').value;
    console.log('search term is', searchTerm);

        fetch('https://api.giphy.com/v1/gifs/search?api_key=mlye8iDHtLK95jzzL2sydUiQFmWe5nEy&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en')
        .then((res) => {
            return res.json() 
        }) .then ((json) => {
            console.log(json['data']);
            //console.log('api data', data)
           // console.log(`<img src = ${data.message}/>`)
            //document.getElementById('.result').innerHTML = `<img src =${ data.message} />`
        });
    })
    })

    //works at page load!! 
//     const url = 'https://dog.ceo/api/breed/hound/images';
//     document.getElementById('btn').addEventListener('click',
//         fetch(url).then(function (res) {
//             console.log(res);
//             return res.json()
//         })
//             .then(function (data) {
//                 console.log(data);
//                 data.data.array.forEach(function (val) {
//                     console.log(val);
                    
//                 });
//             })
// )})
