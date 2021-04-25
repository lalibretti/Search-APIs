const apiKey ='mlye8iDHtLK95jzzL2sydUiQFmWe5nEy';

    
   window.addEventListener('load', (event) => {
    console.log('page is loaded');
    document.getElementById('search-button').addEventListener('click', () => {
        console.log('button was clicked');
        let searchTerm = document.getElementById('search-term').value;
        console.log('search term is', searchTerm);
        
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=mlye8iDHtLK95jzzL2sydUiQFmWe5nEy&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
        .then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json);
            let results = json.data;
            console.log('results array:', results);

        
            document.getElementById('results').innerHTML = "";
            
            for( let image of json.data) {
                let imageUrl = image.images.original.url 
                console.log("the results are",image.images.original.url);
                document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<img src= ${imageUrl} />`;
            }

        })
    });
})
//works at page load!! 
// const url = 'https://api.giphy.com/v1/gifs/search?api_key=mlye8iDHtLK95jzzL2sydUiQFmWe5nEy&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en';
// document.getElementById('btn').addEventListener('click')
//     fetch(url).then(function (res) {
//         console.log(res);
//         return res.json()
//     })
//         .then(function (data) {
//             console.log(data);
//             data.data.array.forEach(function (val) {
//                 console.log(val);

//             });