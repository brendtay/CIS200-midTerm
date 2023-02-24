let userChoice = 0;
let userTotal = 0;
$(document).ready(function () {
    refreshWebPage();
});

$("#Locations").click(function () {  
    window.location.href='locations.html';
})

$("#baseTier").click(function () {  
    userChoice = 0;
    checkButton();  
    mealButton();  
})

$("#midTier").click(function () {  
    userChoice = 1;
    checkButton();
    mealButton();
})

$("#topTier").click(function () {  
    userChoice = 2;
    checkButton();
    mealButton();
})

$("#orderHere").click(function () {  
    window.location.href='order.html';
})


$("#BM-sandwich").click(function () {  
        userTotal += 4.50;
        mealButton();
})
$("#BM-meal").click(function () {  
        userTotal += 7.75;
        console.log(userTotal);
        mealButton();
})

$("#QP-sandwich").click(function () {  
    userTotal += 4.50;
    mealButton();
})
$("#QP-meal").click(function () {  
    userTotal += 7;
    console.log(userTotal);
    mealButton();
})

$("#Checkout").click(function () {  
    window.location.href='404notFound.html';
})

$("#homePage").click(function () {  
    window.location.href='index.html';
})

function mealButton(){
    $.get("http://localhost:3000/user/usertotal/" + userTotal, function () {
            console.log("Website is reporting the users total is: " + userTotal);
    })
    let localChoice = 0.0;
    if(userChoice == 1){
        localChoice = 3.0;
    }else if(userChoice == 2){
        localChoice = 5.0
    }
    let total = localChoice + userChoice
    console.log(userChoice);
    $("#story").text("$" + userTotal);

}

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

function refreshWebPage(){
    $.get("http://localhost:3000/drone/", function (pulledUserChoice) {
        userChoice = pulledUserChoice; 
        if(pulledUserChoice == 0){
            $('#baseTier').removeClass('btn-secondary').addClass('btn-primary');
            $('#midTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#topTier').removeClass('btn-primary').addClass('btn-secondary');
        }else if(pulledUserChoice == 1){
            $('#baseTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#midTier').removeClass('btn-secondary').addClass('btn-primary');
            $('#topTier').removeClass('btn-primary').addClass('btn-secondary');
        }else if(pulledUserChoice == 2){
            $('#baseTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#midTier').removeClass('btn-primary').addClass('btn-secondary');
            $('#topTier').removeClass('btn-secondary').addClass('btn-primary');
        }
    })

    $.get("http://localhost:3000/user/usertotal", function(orderTotal){
        userTotal = parseFloat(orderTotal); 
        $("#story").text("$" + userTotal);
    })
    
}
