const searchInput = document.getElementById("site-search");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".opportunity-card");

    cards.forEach(function(card){

        let text = card.textContent.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});