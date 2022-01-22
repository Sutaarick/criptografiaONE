let palavraCript = ""
let palavraDesc = ""
let valido

function cripto(){
    let base = (document.querySelector("#txt")).value
    let tamanho = base.length
    palavraCript = ""
    validar()

    if(valido){
        document.querySelector("#erro").innerText = ""
    for (let x = 0; x < tamanho; x++) {
        if (base[x] == "a") {
            palavraCript = palavraCript + "ai"
        } else if(base[x] == "e"){
            palavraCript = palavraCript + "enter"            
        } else if(base[x] == "i"){
            palavraCript = palavraCript + "imes"       
        } else if(base[x] == "o"){
            palavraCript = palavraCript + "ober"            
        } else if(base[x] == "u"){
            palavraCript = palavraCript + "ufat"            
        } else {
            palavraCript = palavraCript + base[x]
        }
        
    }

    document.querySelector("#txt").value = palavraCript
    } else {
        document.querySelector("#erro").innerText = "A mensagem escrita não é valida, por favor utilize apenas letras minusculas sem acentos"
        document.querySelector("#txt").value = ""
    }
}

function descripto(){
    let base = (document.querySelector("#txt")).value
    let tamanho = base.length
    palavraDesc = ""
    validar()

    if(valido){
    document.querySelector("#erro").innerText = ""
    for (let x = 0; x < tamanho; x++) {
        if ((base[x] == "a") 
            && (base[x+1] == "i")) {
            palavraDesc = palavraDesc + "a"
            x = x + 1
        } 
        
        else if((base[x] == "e") 
            && (base[x+1] == "n") 
            && (base[x+2] == "t") 
            && (base[x+3] == "e") 
            && (base[x+4] == "r")){
            palavraDesc = palavraDesc + "e"
            x = x + 4            
        } 
        
        else if((base[x] == "i") 
            && (base[x+1] == "m") 
            && (base[x+2] == "e") 
            && (base[x+3] == "s")){
            palavraDesc = palavraDesc + "i"
            x = x + 3            
        }  
        
        else if((base[x] == "o") 
            && (base[x+1] == "b") 
            && (base[x+2] == "e") 
            && (base[x+3] == "r")){
            palavraDesc = palavraDesc + "o"
            x = x + 3            
        } 
        
        else if((base[x] == "u") 
            && (base[x+1] == "f") 
            && (base[x+2] == "a") 
            && (base[x+3] == "t")){
            palavraDesc = palavraDesc + "u"
            x = x + 3            
        } 
        
        else {
            palavraDesc = palavraDesc + base[x]
        }
        
    }

    document.querySelector("#txt").value = palavraDesc
    } else {
        document.querySelector("#erro").innerText = "A mensagem escrita não é valida, por favor utilize apenas letras minusculas sem acentos"
        document.querySelector("#txt").value = ""
    }
}

function copiar() {
    var copia = document.querySelector("#txt");
    copia.select();
    document.execCommand("copy");
}

function validar() {
    let base = (document.querySelector("#txt")).value
    let tamanho = base.length

    for (let x = 0; x < tamanho; x++) {
        if (base.charCodeAt(x) >= 97 
            && base.charCodeAt(x) <= 122 
            || base.charCodeAt(x) == 32) {
                valido = true
            } else {
                valido = false
                break
            }
    }
}