'use strict'

function login(){
    var loginfo=confirm('do you have account'); 
    if (loginfo) {
        var welcomeOrNot='welcome to your faverate ';
    } 
    else{
        welcomeOrNot='please signUp ';
    }
    return welcomeOrNot;
}
//document.write(login);

function foodOrder(){
    var foodtype=prompt('whats your fav food:');
    var photo;
    if (foodtype==='mansaf') {
        photo='<https://migrationology.com/wp-content/uploads/2016/04/mansaf-jordanian-food.jpg">';

        
    } else if (foodtype==='falafel') {
        photo='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNCBvzqVUTtPRnqtRh5agxHcraTtXHJlOxA8eypYP8HUSPDNTo&usqp=CAU">';

    } else if (foodtype==='shawerma') {

        photo='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDRyrq8TdpdG7nW_1ddNaOlxRBZaKhTrHdCqjCc2zlkmI1fHHj&usqp=CAU">';
    } else {
        photo='please chose mansaf or shawerma or falafel ';
        
    }
    return photo;
    //document.write(foodOrder());
}
