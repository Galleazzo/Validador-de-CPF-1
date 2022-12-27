function validar(){

var n1 = document.getElementById('cpf');
var btn = document.getElementById('btn');
var pag = document.getElementById('pag');

  var n1 = Number(cpf.value)

    if(n1 == 11111111111
        || n1 == 22222222222 
        || n1 == 33333333333
        || n1 == 44444444444
        || n1 == 55555555555
        || n1 == 66666666666
        || n1 == 77777777777
        || n1 == 88888888888
        || n1 == 99999999999
        || n1 == 00000000000 || n1 > 99999999999){
            pag.innerHTML = `Invalido!!!`
    }else {
        pag.innerHTML = `Valido!!! Seu CPF é ${n1}`
    }
}
