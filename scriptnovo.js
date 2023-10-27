
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100% - 90px);
    margin-left: 90px;
}
.robo   {
    width: 160px;
    height: 183px;
    flex-shrink: 0;
    animation: changeHue 10s linear infinite;
}

h1{
    color: #272727;
    font-family: 'Inter', sans-serif;
    font-size: 72px;
    ;

}

.input{
    border: none;
    border-bottom: 1px solid black;
    width: 500px;
    padding-top: 20px;
    background-color: transparent;
    
    
}
.input:focus{
    outline: none;
}

.material-symbols-outlined {
    position: relative;
    padding: 12px 12px;
    border-radius: 50%;
    background-color: #DD203C;
    border: none;
    color: white;
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
  }
  
  .material-symbols-outlined::before {
    content: "\f130"; /* Código do ícone de microfone (pode variar dependendo da fonte) */
    font-family: 'Font Awesome'; /* Use a fonte que contém o ícone */
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;

  }
  
  .material-symbols-outlined:hover {
    background-color: #891425;
  }
  
  .material-symbols-outlined:hover::before {
    display: block; /* Exibe o ícone ao passar o mouse */
  }
  
.logo{
    padding-top: 20px;
}
.barra{
    
    width: 60px;
    background-color: #DD203C;
    height: 100vh;
    position: absolute;
    left: 0;
}

.light-mode {
    background-color: #fff;
    color: #000;
}

.dark-mode {
    background-color: #000;
    color: #fff;
}

@keyframes changeHue {
    0% {
        filter: hue-rotate(0deg); /* Começa com o matiz original (0 graus) */
    }
    100% {
        filter: hue-rotate(360deg); /* Gira o matiz em 360 graus para criar a animação completa */
    }
}
#toggleMode{
    position: absolute;
    z-index: 999;
    font-size: 40px;
    background-color: transparent;
    border: none;
}
.dark-mode {
    background-color: #272727;
    color: #fff;
  }
  
  .dark-mode .barra {
    background-color: #660202; /* Cor da barra lateral no modo escuro */
  }

  .dark-mode .input {
    border-bottom: 1px solid white;
    color: white;
  }

  .dark-mode h1 {
    color: #fff; /* Cor do texto h1 no modo escuro */
  }
  .dark-mode .material-symbols-outlined:hover{
    background-color: #660202;
}
  .dark-mode .material-symbols-outlined{
    background-color: #660202;
}
  

  
