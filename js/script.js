// ---->Nav Link Color<----
var navLink = document.querySelectorAll(".nav-link");
function changeColor (ele){
    navLink.forEach((item)=>{
        item.style.cssText="color : black !important"
    })

    ele.style.cssText="color : #0c65ed !important";

}




// ----> To Main BTN <----
var toMain = document.getElementById("to-main");
// --->counter<---
var counters = document.querySelectorAll(".counter") ;
        
// function counting(clear, count, ele,time) {
//     var start = 0 ;
    
//     var set = setInterval(() => {
//         if (start == clear) {
//             clearInterval(set)
//             }
//         else {
//             start += count
//             ele.innerText = start
//             }
//         }, time)}

var valid = false
window.addEventListener("scroll" , ()=>{
    
    (document.documentElement.scrollTop>600)?
        toMain.style.display="block":
        toMain.style.display="none";
    
        
    if(document.documentElement.scrollTop>1200 && document.documentElement.scrollTop<1300){
         if(valid == false){
            counters.forEach((counter)=>{
                console.log(counter)
                var start = 0
                var clear = parseInt(counter.innerText);
                var interval = setInterval(()=>{
                    if (start==clear) {
                        clearInterval(interval);
                    }else{
                        start+=10;
                        counter.innerHTML=start;
                        valid = true
                        // console.log(counter)
                    }
                })
            })
         }
            // counting(8000 , 10 , counters[0] , 1);
            // counting(810 , 5 , counters[1] , 10);
            // counting(2000 , 10 , counters[2] , 4);
            // counting(20 , 1 , counters[3] , 100);
            
        }
            
        
            
})




// --->form validation<---
var myForm = document.getElementById("contactform");

// --->on typing<---
myForm.addEventListener("input",(e) => {
        switch (e.target.id) {
            case "nameinput":
                nameValidation(e.target);
                break;

            case "emailinput":
                emailValidation(e.target);
                break;

            case "subjectinput":
                subjectValidation(e.target);
                break;

            case "messageinput":
                msgValidation(e.target);
                break;
        }

    })
var nameValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 3) handleError(inp, "enter at least 3 character")
    else handleError(inp, "")

}

var emailValidation = (inp) => {
    var inputValue = inp.value
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regExp.test(inputValue) == false) handleError(inp, "please enter a valid email")
    else handleError(inp, "")
}

var subjectValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 5) handleError(inp, "enter at least 5 character")
    else handleError(inp, "")

}
var msgValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 20) handleError(inp, "enter at least 20 character")
    else handleError(inp, "")

}

var handleError = (ele, msg) => {
    ele.nextElementSibling.innerText = msg
}

// --->on submit<---
myForm.addEventListener("submit",(e) => {
    e.preventDefault();
        switch (e.target.id) {
            case "nameinput":
                emptyValidation(e.target);
                break;

            case "emailinput":
                emptyValidation(e.target);
                break;

            case "subjectinput":
                emptyValidation(e.target);
                break;

            case "messageinput":
                emptyValidation(e.target);
                break;

            default:
                return true;
        }

    })
var emptyValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue =="" || inputValue ==null) handleError(inp, "shoudn't be empty")
    else handleError(inp, "")
}

// ----->owl carouser<-----
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        margin:40,
        
        responsiveClass:true,
        
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2 
            }
        }


    }
    );

  });
