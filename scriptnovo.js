const elementoResultado = document.getElementById("resultado");
  
const mensg = [{
    "role": "system",
    "content": "Você é um assistente de bate-papo" ,
    }];
//aqui vamos capturar a fala do usuario
const CapturarFala = ()=> {
    let botao = document.querySelector('#start');
    let input = document.getElementById('result');
    

    //Aqui vamos criar um objeto de reconhecimento de fala
    var recognition = new webkitSpeechRecognition();
    recognition.lang = window.navigator.language;
    recognition.interimResults = true;
    
    
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // Verifique se a tecla pressionada é "Enter" (código-chave "Enter")
            event.preventDefault(); // Impedir o comportamento padrão de adicionar uma nova linha   
            PergutarAoJarvis(input.value);
            input.value="";
            
        }
        });

    
    botao.addEventListener('mousedown',()=>{
        console.log("Ouvindo!!")
        recognition.start();
    });
    botao.addEventListener('mouseup',()=>{
        console.log("não estou ouvindo! ")
        recognition.stop();
        PergutarAoJarvis(input.value)
    });

    recognition.addEventListener('result',(e)=>{
        const result = e.results[e.results.length - 1][0].transcript;
        input.value = result;
        console.log(result)
});

}
const PergutarAoJarvis=async(Perguta) =>{
    alterarMensagemAleatoriamente();
    if (Perguta === null || Perguta === undefined || Perguta === ""){
        alert("Texto Inválido!");
    }
    else if(Perguta.toLowerCase().indexOf("alterar tema") !== -1){
          // Adicione o evento de clique no botão de alternância
          toggleMode();     
    }
    else{
        const apiKey = "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";
        let url = "https://api.openai.com/v1/chat/completions";
        let header = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        }

        mensg.push({
            "role": "user",
            "content": Perguta,
        })

        let body ={
            model: "ft:gpt-3.5-turbo-0613:zeros-e-um::8DDHyrh4", // O modelo a ser usado
            messages: mensg,
            "temperature": 1
        }
        let options ={
            method: "POST",
            headers: header,
                body: JSON.stringify(body),
                }

        fetch(url, options)
        .then((response) => {return response.json();})
        .then((data)=>{elementoResultado.textContent = data.choices[0].message.content;
        const fala = new SpeechSynthesisUtterance(data.choices[0].message.content);

        mensg.push({
            "role": "assistant",
            "content": data.choices[0].message.content,
        })

    
        fala.pitch = 2;
        fala.rate = 1.8;
        window.speechSynthesis.speak(fala);
        })
        //console.log(data.choices[0].message.content)
    }


}

CapturarFala();