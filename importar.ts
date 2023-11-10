/*
P.4.3. Desenvolva um programa que leia os dados de um arquivo de texto, armazene cada uma
das palavras em uma pilha, conforme são lidas do arquivo original. A seguir, o programa gera
um arquivo de saída (colocar o sufixo _out.txt) que contém o texto com as palavras e sinais de
pontuação em ordem invertida. 
*/


import * as fs from 'fs';
import { Stack, MyNode } from './stack';

//ARMAZENA DE FORMA GLOBAL O QUE É LIDO DO TXT
let conteudoDoArquivo: string; 

// CAMINHO DO ARQUIVO A SER LIDO
const caminhoDoTxt = 'txt/input.txt';

//FUNÇÃO DE LEITURA
function lerArquivoTxt(caminhoDoTxt: string, callback: (error: Error | null, data: string | null) => void) {
  fs.readFile(caminhoDoTxt, 'utf-8', (err, data) => {
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

// CHAMADA DA FUNÇÃO PARA LEITURA
lerArquivoTxt(caminhoDoTxt, (error, data) => {
  if (conteudoDoArquivo !== null) {
    const my_stack = new Stack<string>();

    // Divide o conteúdo em palavras e empilha cada palavra
    const separarPalavras = conteudoDoArquivo.split(' ');
    for (const palavrasSeparadas of separarPalavras) {
      my_stack.push(new MyNode<string>(palavrasSeparadas));
    }

    console.log('Initial Stack:');
    my_stack.print();

    let textoInvertido = '';
    // Desempilhe as palavras e concatene-as em ordem invertida
    while (!my_stack.is_empty()) {
      textoInvertido += my_stack.pop().value + ' ';
    }

    console.log('Texto invertido:');
    console.log(textoInvertido);

    fs.writeFile("txt/saida_out.txt", textoInvertido , function(erro) {

      if(erro) {
          throw erro;
      }
  
      console.log("Arquivo salvo");
  }); 
  } else {
    console.log('conteudoDoArquivo está vazio');
  }
});







export{
lerArquivoTxt, conteudoDoArquivo 
}




function textoInvertido(arg0: string, textoInvertido: any, arg2: (erro: NodeJS.ErrnoException | null) => void) {
  throw new Error('Function not implemented.');
}
// USAR FUNÇÃO SPLIT PARA O MY_NODE, PARA CADA ITEM CRIAR UMA INSTANCIA DO MY_NODE DENTRO DE UM FOR, ARMAZENANDO EM UMA PILHA (NEW MY_NODE), DEPOIS DE FINALIZADO UTILIZAR O MY_STACK.POP PARA CONCATENAR A STRING