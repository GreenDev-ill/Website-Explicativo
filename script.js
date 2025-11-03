// O evento 'DOMContentLoaded' espera o HTML ser totalmente carregado
// para que o JS possa encontrar os elementos da página com segurança.
document.addEventListener('DOMContentLoaded', () => {

    // --- [NOVO] EXEMPLO 4: CONDICIONAIS (IF/ELSE) ---
    const btnCheckTime = document.querySelector('#btn-check-time');
    const outputCheckTime = document.querySelector('#output-check-time');
    
    if (btnCheckTime && outputCheckTime) {
        btnCheckTime.addEventListener('click', () => {
            const hora = new Date().getHours(); // Pega a hora atual (0-23)
            if (hora < 12) {
                outputCheckTime.textContent = "Bom dia! (Hora: " + hora + ")";
            } else if (hora < 18) {
                outputCheckTime.textContent = "Boa tarde! (Hora: " + hora + ")";
            } else {
                outputCheckTime.textContent = "Boa noite! (Hora: " + hora + ")";
            }
        });
    }

    // --- [NOVO] EXEMPLO 5: LOOPS (FOR) ---
    const btnRunLoop = document.querySelector('#btn-run-loop');
    const outputLoopList = document.querySelector('#output-loop-list');

    if (btnRunLoop && outputLoopList) {
        btnRunLoop.addEventListener('click', () => {
            // Limpa a lista antes de preencher
            outputLoopList.innerHTML = ''; 
            
            for (let i = 1; i <= 5; i++) {
                // 1. Cria um novo elemento <li>
                const novoItem = document.createElement('li');
                // 2. Define o texto do <li>
                novoItem.textContent = "Item " + i + " criado pelo loop.";
                // 3. Adiciona o <li> à lista <ul>
                outputLoopList.appendChild(novoItem);
            }
        });
    }

    // --- [NOVO] EXEMPLO 6: INNERHTML vs TEXTCONTENT ---
    const btnDemoText = document.querySelector('#btn-demo-textcontent');
    const btnDemoHTML = document.querySelector('#btn-demo-innerhtml');
    const outputDemoText = document.querySelector('#demo-text-output');
    
    if (btnDemoText && btnDemoHTML && outputDemoText) {
        btnDemoText.addEventListener('click', () => {
            // Insere texto puro. O HTML é "escapado" (mostrado como texto).
            outputDemoText.textContent = '<b>Este é um texto puro.</b>';
        });
        btnDemoHTML.addEventListener('click', () => {
            // Interpreta o HTML e renderiza o negrito.
            outputDemoText.innerHTML = '<b>Este é um texto em negrito.</b>';
        });
    }
    
    // --- [NOVO] EXEMPLO 7: MUDANDO ESTILOS (.style) ---
    const btnDemoStyle = document.querySelector('#btn-demo-style');
    const boxDemoStyle = document.querySelector('#demo-style-box');
    
    if (btnDemoStyle && boxDemoStyle) {
        btnDemoStyle.addEventListener('click', () => {
            boxDemoStyle.style.backgroundColor = 'var(--cor-primaria)';
            boxDemoStyle.style.color = '#000';
            boxDemoStyle.style.fontWeight = 'bold';
            boxDemoStyle.textContent = 'Estilo alterado pelo JS!';
        });
    }
    
    // --- [NOVO] EXEMPLO 8: MUDANDO ATRIBUTOS (setAttribute) ---
    const btnDemoDisable = document.querySelector('#btn-demo-disable');
    const btnDemoDisabled = document.querySelector('#btn-demo-disabled');
    
    if (btnDemoDisable && btnDemoDisabled) {
        btnDemoDisable.addEventListener('click', () => {
            // Adiciona o atributo "disabled", desativando o botão
            btnDemoDisabled.setAttribute('disabled', 'true');
            btnDemoDisabled.textContent = 'Fui desabilitado!';
        });
    }

    // --- (Os 3 exemplos práticos originais continuam abaixo) ---

    // --- EXEMPLO PRÁTICO 1: Toggle de Classe ---
    const toggleButton = document.querySelector('#btn-toggle');
    const secretDiv = document.querySelector('#div-escondida');

    if (toggleButton && secretDiv) {
        toggleButton.addEventListener('click', () => {
            secretDiv.classList.toggle('hidden');
        });
    }

    // --- EXEMPLO PRÁTICO 2: Validação de Formulário ---
    const form = document.querySelector('#meu-formulario');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');
    const errorMessage = document.querySelector('#msg-erro');

    if (form && nomeInput && emailInput && senhaInput && errorMessage) {
        
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento da página

            // Reseta erros anteriores
            errorMessage.textContent = ''; 
            errorMessage.style.display = 'none';
            nomeInput.classList.remove('error-input'); 
            emailInput.classList.remove('error-input'); 
            senhaInput.classList.remove('error-input');

            // Coleta valores
            const nomeValue = nomeInput.value.trim();
            const senhaValue = senhaInput.value.trim();
            
            // Validação
            let isValid = true; 
            let errorText = ''; 

            if (nomeValue === '') {
                isValid = false; 
                errorText += 'O campo NOME é obrigatório. '; 
                nomeInput.classList.add('error-input'); 
            }

            if (senhaValue.length < 6) {
                isValid = false; 
                errorText += 'A SENHA deve ter no mínimo 6 caracteres.'; 
                senhaInput.classList.add('error-input'); 
            }
            
            // Exibe o Resultado
            if (isValid) {
                errorMessage.textContent = 'FORMULÁRIO ENVIADO COM SUCESSO! (Simulado)';
                errorMessage.style.color = 'var(--cor-primaria)'; 
                errorMessage.style.display = 'block'; 
                form.reset(); 
            } else {
                errorMessage.textContent = 'ERRO: ' + errorText; 
                errorMessage.style.color = 'var(--cor-erro)'; 
                errorMessage.style.display = 'block'; 
            }
        });
    }

    // --- EXEMPLO PRÁTICO 3: Criação de Elementos ---
    const addButton = document.querySelector('#btn-adicionar');
    const demoList = document.querySelector('#lista-demo');

    if (addButton && demoList) {
        let itemCount = 2; // Contador
        addButton.addEventListener('click', () => {
            const novoItem = document.createElement('li');
            novoItem.textContent = `Item ${itemCount} (Criado pelo JS!)`;
            demoList.appendChild(novoItem);
            itemCount++;
        });
    }

}); // Fim do 'DOMContentLoaded'