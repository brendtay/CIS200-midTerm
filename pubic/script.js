let userChoice = 0;

$(document).ready(function () {
    $("#Locations").click(function () {  
        window.location.href='locations.html';
    })

    $("#baseTier").click(function () {  
        userChoice = 0;
        checkButton();
        
       
    })
    $("#midTier").click(function () {  
        userChoice = 1;
        checkButton();
    })

    $("#topTier").click(function () {  
        userChoice = 2;
        checkButton();
    })
});
function checkButton(){
    $.get("http://localhost:3000/drone/" + userChoice, function () {
            console.log("Website is reporting button: " + userChoice);
        })
        if(userChoice == 0){
            $('#baseTier').removeClass('btn-secondary').addClass('btn-primary');
            $('#midTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#topTier').removeClass('btn-primary').addClass('btn-secondary');
        }else if(userChoice == 1){
            $('#baseTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#midTier').removeClass('btn-secondary').addClass('btn-primary');
            $('#topTier').removeClass('btn-primary').addClass('btn-secondary');
        }else if(userChoice == 2){
            $('#baseTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#midTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#topTier').removeClass('btn-secondary').addClass('btn-primary');
        }

}


    