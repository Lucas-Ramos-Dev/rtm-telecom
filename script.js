
//REFERÊNCIANDO ELEMENTOS HTML ATRAVÉS DAS VARIÁVEIS PARA MANIPULAÇÃO DE VALORES [MANIPULAÇÃO DO DOM]
const INPUT_OS = document.getElementById("input-os");
const SELECT_INSTA = document.getElementById("instalation");
const INPUT_CLIENTE= document.getElementById("input-client");
const SELECT_CITY = document.getElementById("city");
const OUTPUT = document.getElementById("output-p");
const OUTPUT_TEXT_AREA = document.getElementById("output-textarea");

//DECLARAÇÃO DE DUAS CONSTANTES PARA SETAR COR NA SAÍDA EM CASO DE FALHA OU SUCESSO NA OPERAÇÃO
const fail = "#c52828";
const sucess = "#319931";

/*REFERÊNCIANDO E CRIANDO FUNÇÃO PARA O BOTÃO "GERAR", ADICIONANDO EVENTO "CLICK" COM UMA FUNÇÃO ANÔNIMA ARROW FUNCTION AO BOTÃO REFERÊNCIADO POR UMA CONSTANTE ONDE
IRÁR GERAR OS DADOS NECESSÁRIOS PARA A SAÍDA "OUTPUT" */ 
const BTN_GERAR = document.getElementById("btn-gerar").addEventListener("click", () => {
    const INSTA_SELECTED = SELECT_INSTA.options[SELECT_INSTA.selectedIndex];
    const CITY_SELECTED = SELECT_CITY.options[SELECT_CITY.selectedIndex];

    if(INPUT_OS.value == ""){
        OUTPUT.innerHTML = `Informe campo OS!`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else if (isNaN(INPUT_OS.value)){
        OUTPUT.innerHTML = `Campo OS não pode conter letras!`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else if(INSTA_SELECTED.value === "vazio"){
        OUTPUT.innerHTML = `Selecione um TIPO DE INSTALAÇÃO`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }if(INPUT_CLIENTE.value == ""){
        OUTPUT.innerHTML = `Informe o campo CLIENTE!`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else if (!isNaN(INPUT_CLIENTE.value)){
        OUTPUT.innerHTML = `Campo cliente não pode conter números!`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else if(CITY_SELECTED.value === "vazio"){
        OUTPUT.innerHTML = `Selecione uma cidade!`;
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else{
        OUTPUT.innerHTML = "";  
        OUTPUT_TEXT_AREA.innerHTML =  `OS: ${INPUT_OS.value}, `;
        OUTPUT_TEXT_AREA.innerHTML += `${INSTA_SELECTED.innerHTML}, `;
        OUTPUT_TEXT_AREA.innerHTML += `${INPUT_CLIENTE.value}, `;
        OUTPUT_TEXT_AREA.innerHTML += `${CITY_SELECTED.innerHTML}, `;
        OUTPUT.innerHTML = "Gerado com sucesso!";
        OUTPUT.style.color = sucess;
        OUTPUT.style.fontSize = "24px";
        return;
    }    
});

//CRIANDO, REFERÊNCIANDO E ADICIONANDO UM EVEMTO "CLICK" AO BOTÃO COPIAR ONDE EXECUTA UMA FUNÇÃO ANÔNIMA DO TIPO ARROW FUNCTION DIRETO EM UMA DECLARAÇÃO DE UMA CONSTANTE .
const BTN_COPIAR = document.getElementById("btn-copiar").addEventListener("click", () => {
    const dadosCopiados = OUTPUT_TEXT_AREA;

    if(dadosCopiados.value == ""){
        OUTPUT.innerHTML = "Nada a copiar!";
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
        return;
    }else{
        //VARIÁVEL dadosCopiadas CRIADA REFRÊNCIANDO MEU TEXT_ÁREA ONDE OS DADOS CONTIDOS NESTE CAMPO SÃO SELECIONADOS, COPIADOS E UMA MSG DE SAÍDA É EXIBIDA PARA CONFIRMAR A CÓPIA COM SUCESSO.
        dadosCopiados.select();
        dadosCopiados.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(dadosCopiados.innerHTML);
        OUTPUT.innerHTML = "Copiado com sucesso!";
    }
});

//CRIANDO, REFERÊNCIANDO E ADICIONANDO UM EVEMTO "CLICK" AO BOTÃO LIMPAR ONDE EXECUTA UMA FUNÇÃO ANÔNIMA DO TIPO ARROW FUNCTION DIRETO EM UMA DECLARAÇÃO DE UMA CONSTANTE. 
const BTN_LIMPAR = document.getElementById("btn-limpar").addEventListener("click", () => {
    const sucess = "#319931"; 
    OUTPUT.innerHTML = "Limpo com sucesso!"
    OUTPUT.style.color = sucess;
    OUTPUT.style.fontSize = "24px";
    
    INPUT_OS.value = "";
    SELECT_INSTA.value = "";
    INPUT_CLIENTE.value = "";
    SELECT_CITY.value = "";
    OUTPUT_TEXT_AREA.value = "";
});

//DECLARADO, REFERÊNCIADO E ADICIONADO UM EVENTO AO BOTÃO COM UMA FUNÇÃO ARROW FUNCTION QUE CONVERTE O RESUTADO DA SAÍDA EM CAIXA ALTA(CARACTERES MAIÚSCULOS).
const BTN_UPER_CASE = document.getElementById("btn-upperCase").addEventListener("click", () => {
    
    const textUperCase = OUTPUT_TEXT_AREA.innerHTML;

    if(OUTPUT_TEXT_AREA.value == ""){
        OUTPUT.innerHTML = "Nada a converter!";
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
    }else{
        OUTPUT_TEXT_AREA.innerHTML = textUperCase.toUpperCase();
        OUTPUT.innerHTML = "Texto em caixa alta!"
        OUTPUT.style.color = sucess;
        OUTPUT.style.fontSize = "24px";
    return;
    }
});

const BTN_LOWER_CASE = document.getElementById("btn-lowerCase").addEventListener("click", () => {
    
    const textLowerCase = OUTPUT_TEXT_AREA.innerHTML;

    if(OUTPUT_TEXT_AREA.value == ""){
        OUTPUT.innerHTML = "Nada a converter!";
        OUTPUT.style.color = fail;
        OUTPUT.style.fontSize = "24px";
    }else{
        OUTPUT_TEXT_AREA.innerHTML = textLowerCase.toLowerCase();
        OUTPUT.innerHTML = "Texto em caixa baixa!"
        OUTPUT.style.color = sucess;
        OUTPUT.style.fontSize = "24px";
    return;
    }
});

