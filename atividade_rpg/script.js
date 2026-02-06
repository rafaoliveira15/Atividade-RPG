     var js_nome;
     var js_classe;
     var js_habilidade;
     var js_frase;

        function gerar( ) {


          js_nome = document.persona.js_nome.value;
          js_classe = document.persona.js_classe.value;
          js_habilidade = document.persona.js_habilidade.value;
          js_frase = `<h2> O lendário ${js_classe} chamado ${js_nome} acaba de entrar na 
          guilda usando sua técnica de ${js_habilidade}! </h2>`;
 
            document.getElementById("result").innerHTML = js_frase; 
            result.style.display = "block";

          if (!js_nome || !js_classe || !js_habilidade) {
             document.getElementById("result").innerHTML =
              "<strong class='aviso'> Por favor, preencha corretamente para gerar seu herói </strong>";
             return;
          }

   
            }
        

 