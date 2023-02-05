import { reviews } from "./app.js";
  
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomRevBtn = document.querySelector('.random-review')

const profilePic = document.getElementById("profile-pic")
const profileName = document.getElementById("name")
const designation = document.getElementById("designation")
const review = document.getElementById("review")

let reviewNumber = 0

function getReview(person){
    const item = reviews[person]
    profileName.textContent = item.name;
    designation.textContent = item.job;
    profilePic.src = item.img;
    review.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[reviewNumber]
    profileName.textContent = item.name;
    designation.textContent = item.job;
    profilePic.src = item.img;
    review.textContent = item.text;
});

prevBtn.addEventListener("click", getPrev);
nextBtn.addEventListener("click", getNext);
randomRevBtn.addEventListener("click", getRandomReview);

function getNext(){
    reviewNumber++                          
    if( reviewNumber > reviews.length-1){   
        reviewNumber = 0                    
    }                                       
    getReview(reviewNumber)
    console.log(reviewNumber)
}

/******
 * Headaches I got:
1. Originally I coded length.reviews-1 instead of reviews.length-1. I spent one day to find this mistake.
2. If increment or decrement line was in the last line their function they give some troubles.  It fits perfectly in first line of the corresponding function.
***********/
function getPrev(){
    reviewNumber--  
    if( reviewNumber < 0 ){
        reviewNumber = reviews.length-1
    }
    getReview(reviewNumber)
    console.log(reviewNumber)
}

function getRandomReview(){
    let randomNum = Math.floor(Math.random() * reviews.length)
    getReview(randomNum)
    console.log(randomNum)
}