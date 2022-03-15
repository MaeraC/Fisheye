/* eslint-disable no-unused-vars */
function likesCounter() {

    const buttonLike = document.querySelectorAll(".buttonHeart");
    const totalCounter = document.querySelector(".totalCounter");

    // Incrémente le nombre de likes et dislikes
    for (let i = 0; i < buttonLike.length; i++) {
        let likeBtn = buttonLike[i];

        likeBtn.addEventListener("click", () => {

            likeBtn.classList.toggle("selected");
            let counter = likeBtn.parentElement.children[0];

            if (likeBtn.classList.contains("selected")) {
                counter.value++;
                totalCounter.value++;
                likeBtn.style.color = "#D88876";
            }
            else {
                counter.value--;
                totalCounter.value--; 
                likeBtn.style.color = "#901C1C";
            }
        })
    }
}

