/* ======== typing animation ======= */

var typed = new Typed(".typing",{
    strings:["","node developer","","","","backend developer",""],
    typespeed: -1,
    backspeed:.2,
    loop:true
})

/* ========= aside ======= */
const nav = document.querySelector(".nav"),
       navlist = nav.querySelectorAll("li"),
       totalNavList = navlist.length;
       for (let i=0; i<totalNavList; i++)
       {
            const a = navlist[i].querySelector("a");
            a.addEventListener("click", function()
            {
                for(let j=0; j<totalNavList; j++)
                {
                    navlist[j].querySelector("a").classList.remove("active");
                } 
                this.classList.add("active")
                showSection(this)
            })
    }      


    // form validation

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var submitError = document.getElementById('submit-error');

    function validatename() {
        var name = document.getElementById('contact-name').value;

        
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
            return false;
        }
        
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateemail(){
        var email = document.getElementById('contact-email').value;


        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML= '<i class="fa-solid fa-circle-xmark"></i>'
            return false;
        }
        

        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateForm(){
        if(!validatename() || !validateemail || !validatemessage){
            submitError.style.display = 'block';
            submitError.innerHTML = 'PLEASE FIX ERROR TO SUBMIT'
            setTimeout(function(){  submitError.style.display = 'none';}, 3000);
            return false;
        }
    }