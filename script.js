//listar numeros de 1 a 200 e mostrar numeros com m3 na frente para multiplos de 3, com m5 para multiplos de 5 e com m3 m5 para multiplos de 3 e 5:

window.onload = () => {
    listaNumeros(200);
    mostra();
}

//Array para guardar resultados listados
let resultSet = [];

//Lista numeros
function listaNumeros(num){
    for( i=1; i<=num; i++ ){
        resultSet.push( i + mult3(i) + mult5(i));
    }
}

//Adiciona m3 para multiplos de 3:
function mult3(x){
    if(x % 3 === 0) return " m3 ";
    return "";
}

//Adiciona m5 para multiplos de 5:
function mult5(x){
    if(x % 5 === 0) return " m5 ";
    return "";
}

//Mostra resultado:
function mostra(){
    conteudo.innerHTML = resultSet.join("<br>");
}


/* Antes de refatorar

for( i = 1; i <= 200; i++ ){ 

    if( i % 3 == 0 && i % 5 == 0 ){
        conteudo.innerHTML += i + ' m3 e m5 ' + '<br>';

    } else if( i % 3 == 0 ){
        conteudo.innerHTML += i + ' m3 ' + '<br>';
    } else if( i % 5 ==0 ){
        conteudo.innerHTML += i + ' m5 ' + '<br>';
    } else{
        conteudo.innerHTML += i + '<br>'
    }
}*/