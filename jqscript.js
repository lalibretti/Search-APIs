//API KEY const apiKey ='mlye8iDHtLK95jzzL2sydUiQFmWe5nEy';

$(document).ready(function() {
    console.log('ready');
    var api_key = 'mlye8iDHtLK95jzzL2sydUiQFmWe5nEy'; 
    $(".btn").click(function () {
        console.log('button clicked!');
        var result = $(".search").val().trim();
        if (result === ""){
            alert("fill out for gif!");
            return; 
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            cache: false,
            url:
              "https://api.giphy.com/v1/gifs/search?q=" +
              result +
              "&api_key=" +
              api_key,
            success: function (response) {
              $(".result").empty();
              var data = response.data;
              if (data) {
                data.slice(0, 10).forEach(function (item) {
                  $(".results").append(
                    "<img src='" +
                      item.images.original.url +
                      "'class='col-12 col-md-4'>"
                  );
                });
              } else {
                alert("no giphys here!");
              }
            }
          });
        });
      });