$(document).on("ajax:success", function(event, response){
  alert("score");
  // console.log(data, status, xhr);
  $('body').append(response.message);
});

$(document).bind("ajaxSend", function(){
 $("#loading").show();
}).bind("ajaxComplete", function(){
 $("#loading").hide();
});

$(document).ready(function(){

  $('#repos').on("click", function(e){
    // alert("clicked");
    e.preventDefault();
    $.ajax({
      url: "https://api.github.com/users/quackhouse/repos",
      type: "get",
      dataType: "json"
    }).done(function(data){
      // alert("success");
      console.log(data);
      $.each(data, function(i){
        var link = $('<a>').attr("href", data[i].html_url).text(data[i].name);
        $('body').append(link);
        $('body').append($('<br>'));

      });
    });
  });
});