var nome = window.document.querySelector("#nome");

var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector("#gato")
var email = document.querySelector("#email");

var assunto = document.querySelector("#assunto");



function validarNome(){

    let txtNome = document.querySelector("#txtNome");


    if(nome.value.length < 2){

        txtNome.innerHTML = "nome invalido :(";

  
        txtNome.style.color = "red";
        nomeOk = false;

    }else{

        txtNome.innerHTML = "nome valido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

 function validarEmail(){
     let txtEmail = document.querySelector("#txtEmail");


     if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){

        txtEmail.innerHTML = "E-mail invalido";
        txtEmail.style.color = "red";
        emailOk = false;

     }else{

        txtEmail.innerHTML = "E-mail valido";
        txtEmail.style.color = "green";
        emailOk = true;

     }

 }

 function validarAssunto(){

    let txtAssunto = document.querySelector("#txtAssunto");

    if (assunto.value.length >= 100){

        txtAssunto.innerHTML = "Tem uma luzinha que tenho que pegar, digite até 100 caracteres ;)"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false
    }else{

 
        txtAssunto.style.display = "none"
 

        assuntoOk = true

    }


 }


 function enviar(){

    if(nomeOk == true && emailOk == true && assuntoOk == true){


      alert("Obrrrrigada pela miausagem");

    }else{

      alert("Você agiu como um cachorro e esse site pra gato");

    }
 }

 function gatoZoom(){

    mapa.style.width= "960px"
    mapa.style.height= "1221px"

  }

  function gatoNormal(){

    mapa.style.width= "320px"
    mapa.style.height= "407px"

  }

    /*Limpar formulario*/
    window.onbeforeunload = () => {
     for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
    }
/*Limpar formulario*/

  /*pesquisa*/
  
  /*pesquisa*/
