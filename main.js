// get slider items | array.from[es6 feature]
var sliferItems  = Array.from(document.querySelectorAll(`.slider-container img`));

// get number of slides
var slidsCount = sliferItems.length;

// set current slide 
var currentSlide = 1;
// slide Number  Element 
var slideNumberElement = document.getElementById("slide-number");

// previos and next buttons 
var nextButton = document.getElementById("next");
var perviosButton = document.getElementById("prev");


// handle click on previos and next buttons
nextButton.onclick = nextSlide
perviosButton.onclick = prevSlide

// create tha main ul element 
var pagenationElement = document.createElement("ul")

// set id on created ul element 
pagenationElement.setAttribute(`id` , `pagenation-ul`);

//create list itmes based  on slides count  
for (var i = 1; i<=slidsCount; i++ ){
    // creste the li 
    var pagenationItems = document.createElement("li");

    // set custom attribute 
    pagenationItems.setAttribute(`data-index` , i);

    // set item content 
    pagenationItems.appendChild(document.createTextNode(i))

    // ?append  items to the main ul list 
    pagenationElement.appendChild(pagenationItems);
}
// add the created ul element to the bage 
document.getElementById(`indicators`).appendChild(pagenationElement)

// get the new created ul 
var pagenationCreatedUl = document.getElementById("pagenation-ul")

// get pegenationI tems
var pegenationBullets = Array.from(document.querySelectorAll(`#pagenation-ul li`));

    // loop throgh all bullets items 
    for (var i = 0; i<pegenationBullets.length; i++){
        pegenationBullets[i].onclick = function(){
            currentSlide = parseInt(this.getAttribute(`data-index`))
            theChecker()
        }
    }

//  triger the checker function
theChecker()

// next slide function
function nextSlide(){
  if(nextButton.classList.contains(`disabled`)){
    // do nothing 
    return false
  }else{
    currentSlide++
    theChecker()
  }
}
// previos slde function
function prevSlide(){
    if(perviosButton.classList.contains(`disabled`)){
        // do nothing 
        return false
      }else{
        currentSlide--
        theChecker()
      }
}

// create  the checker function 
function theChecker (){
    // set the dlide number 
    slideNumberElement.textContent = ' slide # ' + (currentSlide) + ` of ` + (slidsCount)
    
    // remove all active class  

    removeAllActive()
    // set active class on current slide 
    sliferItems[currentSlide - 1 ].classList.add("active")

    // set active class on current pagenation item
    pagenationCreatedUl.children[currentSlide - 1].classList.add(`active`);

    // check if current slide is the first 
    if(currentSlide == 1){
        // add disabled class on previos button 
        perviosButton.classList.add("disabled")
    }else{
         // remove disabled class on previos button 
         perviosButton.classList.remove("disabled")
    }

       // check if current slide is the last  
       if(currentSlide == slidsCount){
        // add disabled class on previos button 
        nextButton.classList.add("disabled")
    }else{
         // remove disabled class on previos button 
         nextButton.classList.remove("disabled")
    }
}

// remove all active classes from images and pagenation bullets 

function removeAllActive(){
    // loop through images 
    sliferItems.forEach(function(img ){
        img.classList.remove("active")
    });

    // loop through pagenation bullets 
    pegenationBullets.forEach(function(bullet){
        bullet.classList.remove("active")
    })
}