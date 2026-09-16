// let = capaz de alterar, const = incapaz de alterar
    let pontos = 0;

    function ganharPonto(){
        pontos = pontos+ 1; // pontos+= 1
        document.getElementById("pontos").innerText = pontos
    }