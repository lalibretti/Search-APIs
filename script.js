//http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]

window.addEventListener('load', (event) => {
    console.log('page has loaded');
    //page reloads onclick
    document.getElementById('search').addEventListener('click', () => {
    //console.log('button clicked!'); 
        fetch('https://dog.ceo/api/breed/hound/images')
        .then((res) => {
            return res.json() 
        }) .then ((data) => {
            console.log(data);
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
