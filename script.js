var btn = document.querySelectorAll(".key li")
var input = document.querySelector(".input-valor")
var operador = document.querySelectorAll(".operador")

for(var i = 0; i < btn.length; i++) {
    document.onkeypress = function() {
        var key = event.keyCode;

        for(var e = 0; e <= 10; e++) {
            if(key === (48+e)) {
                input.innerHTML = input.innerHTML + e;
            }
        }

        switch(key) {
            case 42:
                input.innerHTML = input.innerHTML + "*";
                break;
            case 43:
                input.innerHTML = input.innerHTML + "+";
                break;
            case 45:
                input.innerHTML = input.innerHTML + "-";
                break; 
            case 46:
                input.innerHTML = input.innerHTML + ".";
                break;
            case 47:
                input.innerHTML = input.innerHTML + "/";
                break;
            case 13:
            case 61:
                var equacao = input.innerHTML;
                if(equacao) {
                    try {
                        input.innerHTML = eval(equacao);  
                    } catch (error) {
                        alert("Deu Erro");
                    }
                }
                break;  
            case 67:
            case 99:
                input.innerHTML = "";
                break;
            default:
                break;              
        }
    };
    btn[i].addEventListener('click',function(){
        var btnVal = this.innerHTML;
        var inputVal = input.innerHTML;

        switch(btnVal) {
            case "c":
                input.innerHTML = "";
                break;
            case "=":
                var equacao = inputVal;
                if(equacao) {
                    try {
                        input.innerHTML = eval(equacao);
                    } catch (error) {
                        alert("Não compreendi")
                    }
                }
                break;
            default:
                input.innerHTML = input.innerHTML + btnVal
                break;    
        }
    })
}