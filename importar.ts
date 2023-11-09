import * as fs from 'fs';
import { Stack, MyNode } from './stack';

//ARMAZENA DE FORMA GLOBAL O QUE É LIDO DO TXT
let conteudoDoArquivo: string; 

//FUNÇÃO DE LEITURA
function lerArquivoTxt(filePath: string, callback: (error: Error | null, data: string | null) => void) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      callback(err, null);
    } else {
      console.log('Conteúdo do arquivo lido com sucesso:', data);
      conteudoDoArquivo = data;
      callback(null, data);
    }
  });
}


// CAMINHO DO ARQUIVO A SER LIDO
const filePath = 'txt/input.txt';

// CHAMADA DA FUNÇÃO PARA LEITURA
lerArquivoTxt(filePath, (error, data) => {
  if (conteudoDoArquivo !== null) {
    const my_stack = new Stack<string>();

    // Divide o conteúdo em palavras e empilha cada palavra
    const words = conteudoDoArquivo.split(' ');
    for (const word of words) {
      my_stack.push(new MyNode<string>(word));
    }

    console.log('Initial Stack:');
    my_stack.print();

    let reversedText = '';
    // Desempilhe as palavras e concatene-as em ordem invertida
    while (!my_stack.is_empty()) {
      reversedText += my_stack.pop().value + ' ';
    }

    console.log('Texto invertido:');
    console.log(reversedText);
  } else {
    console.log('conteudoDoArquivo está vazio. Verifique se a leitura do arquivo foi bem-sucedida.');
  }
});

export{
lerArquivoTxt, conteudoDoArquivo 
}



// USAR FUNÇÃO SPLIT PARA O MY_NODE, PARA CADA ITEM CRIAR UMA INSTANCIA DO MY_NODE DENTRO DE UM FOR, ARMAZENANDO EM UMA PILHA (NEW MY_NODE), DEPOIS DE FINALIZADO UTILIZAR O MY_STACK.POP PARA CONCATENAR A STRING