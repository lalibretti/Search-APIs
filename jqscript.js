//API KEY 
const apiKey = 'mlye8iDHtLK95jzzL2sydUiQFmWe5nEy';

$(document).ready(function () {
    console.log('ready');

    $(".btn").on('click', (function () {
        console.log('button clicked!');

        let searchTerm = $("#search-term").val();
        console.log('the search term is', searchTerm);
    
        if (searchTerm === "") {
            alert("fill out for gif!");
            return;
        }
        $.get(`https://api.giphy.com/v1/gifs/search?api_key=mlye8iDHtLK95jzzL2sydUiQFmWe5nEy&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
            .then((json) => {
                console.log(json);

        
                let results = json;
                console.log('results array:',results);

                $('#results').html("")


    //Why isnt this working? Error says results isnt iterable
                for (let image of results) {
                    let url = image.images.original.url
                    console.log('results are', url);

                    $('#results').append(`<div class='p-5 border-b border-gray-300'>${images.original.url}`)
                };
            })
        }

    )
//Left in ajax request to query the server for json results 
     //   $('#results').html("")
        // $.ajax({
        //     type: "GET",
        //     dataType: "json",
        //     cache: false,
        //     url: `https://api.giphy.com/v1/gifs/search?api_key=mlye8iDHtLK95jzzL2sydUiQFmWe5nEy&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`,
        //     success: function (response) {
        //         $(".result").empty();
        //         var data = response.data;
        //         if (data) {
        //             data.slice(0, 10).forEach(function (item) {
        //                 $(".results").append(
        //                     "<img src='" +
        //                     item.images.original.url
        //                 );
        //             });
        //         } else {
        //             alert("no giphys here!");
        //         }
        //     }
        // })
    )})