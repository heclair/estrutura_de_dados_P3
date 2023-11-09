import * as fs from 'fs';

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

    }
});

class MyNode<T>{
  value: T;
  next: MyNode<T>;
  constructor(v:T){
      this.value = v;
      this.next = {} as MyNode<T>;
  }
}

class Stack<T>{
  length: number;
  top: MyNode<T>;
  constructor(){
      this.top = {} as MyNode<T>;
      this.length = 0;
  }

  is_empty(){
      return (this.length == 0);
  }

  push(node: MyNode<T>){
      node.next = this.top;
      this.top = node;
      ++ this.length;
  }

  pop(): T | null {
    if (!this.is_empty()) {
      const value = this.top.value;
      this.top = this.top.next;
      this.length--;
      return value;
    }
    return null;
  }

  print(){
      let current_node = this.top;
      console.log("vvvv Top ")
      while(Object.keys(current_node).length != 0){
          console.log(current_node.value);
          current_node = current_node.next;
      }
      console.log("^^^^ Base ");    
  }
}

export{
  MyNode, Stack, lerArquivoTxt, conteudoDoArquivo 
}

