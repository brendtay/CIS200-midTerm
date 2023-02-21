$(document).ready(function () {
    refreshWebPage();
    $("#btn-save").click(function () {
       getText();   
    })
});

function getText(){
    var userInput = $("#name").val();
    if(userInput != ""){
        $.get("http://localhost:3000/api/products/create/" + userInput, function () {
            $("#list-of-products").append("<li>" + userInput + "</li>");
        })
        /$("#name").val('');
    }
    
}

function refreshWebPage(){
    $.get("http://localhost:3000/api/products/create/", function (sData) {
    
            for (const products of sData) {
            $("#list-of-products").append("<li>" + products + "</li>");
           
        }
          
    })
}

