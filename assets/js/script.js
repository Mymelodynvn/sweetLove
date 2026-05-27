document.getElementById("btn__register").addEventListener("click", register);
document.getElementById("btn__login").addEventListener("click", iniciarSesion);
window.addEventListener("resize", widthPage);

/*para que al darle registrarse, se mueva la cajita*/
//declaración de variables

var container_login_register = document.querySelector(".container__login-register"); //acordarme de poner los puntos antes de escribir las clasesss
var form_login = document.querySelector(".form__login");
var form_register = document.querySelector(".form__register");
var back_box_login = document.querySelector(".back__box-login");
var back_box_register = document.querySelector(".back__box-register");

function widthPage(){
    if(window.innerWidth >850){
        back_box_login.style.display = "block";
        back_box_register.style.display = "block"
    }else{
        back_box_register.style.display = "block";
        back_box_register.style.opacity= "1";
        back_box_login.style.display= "none";
        back_box_login.style.display ="block"
        form_register.style.display= "none";
        container_login_register.style.left = "0px"
    }
}
widthPage()

function iniciarSesion(){
    if(window.innerWidth >850){
        form_register.style.display = "none";
    container_login_register.style.left ="0px";
    form_login.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.opacity = "0";
    }else{
        form_register.style.display = "none";
        container_login_register.style.left ="0px";
        form_login.style.display = "block";
        back_box_register.style.display = "block";
        back_box_login.style.display = "none";
    }
}

    
function register(){
    if(window.innerWidth >850){
    form_register.style.display = "block";
    container_login_register.style.left ="420px";
    form_login.style.display = "none";
    back_box_register.style.opacity = "0";
    back_box_login.style.opacity = "1";
} else{
        form_register.style.display = "block";
        container_login_register.style.left ="0px";
        form_login.style.display = "none";
        back_box_register.style.display = "none";
        back_box_login.style.opacity = "1";
    }
}

//los codigoso  son iguales pero tienen todo lo contario