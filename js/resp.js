function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }






function readMore(city) {
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}


var slideshowContainers = document.getElementsByClassName("slideshow-container");
/* For each container get starting variables */
for(let s = 0; s < slideshowContainers.length; s++) {
    /* Read the new data attribute */        
    var cycle = slideshowContainers[s].dataset.cycle;
    /* Find all the child nodes with class mySlides */
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    /* Now we can cycle slides, but this recursive function must have parameters */
    /* slides and cycle never change, those are unique for each slide container */
    /* slideIndex will increase during each iteration */
    showSlides(slides, slideIndex, cycle);
};

/* Function is alsmost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    /* Calling same function, but with new parameters and cycle time */
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};














document.querySelector(".dropbtns").addEventListener("click", function() {
    document.querySelector(".dropdowns-contents").classList.toggle("show");
  });
  
  // Hide the dropdown content when the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdownss = document.querySelectorAll(".dropdowns-contents");
      for (var i = 0; i < dropdownss.length; i++) {
        var openDropdown = dropdownss[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });
 

  var typed = new Typed(".typing", {
    strings: ["Mother", "Sister", "Wife", "Daughter"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Mother", "Sister", "Wife", "Daughter"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

  
  
  




  
  
  