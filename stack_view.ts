import { Stack, MyNode } from './stack';
import { conteudoDoArquivo } from './importar';

if (conteudoDoArquivo) {
  const my_stack = new Stack<string>();

  // Divide o conteúdo em palavras e empilha cada palavra
  const words = conteudoDoArquivo.split(' ');
  for (const word of words) {
    my_stack.push(new MyNode<string>(word));
  }

  console.log('Initial Stack:');
  my_stack.print();

  console.log('Stack after two successive removals:');
  console.log('Removed elements:', my_stack.pop().value, ', ', my_stack.pop().value);
  my_stack.print();

  console.log('Stack after three successive removals:');
  console.log(
    'Removed elements:',
    my_stack.pop().value,
    ', ',
    my_stack.pop().value,
    ', ',
    my_stack.pop().value
  );
  my_stack.print();

  console.log('Stack length:', my_stack.length);
} else {
  console.log('conteudoDoArquivo está vazio. Verifique se a exportação de conteúdo em "importar.ts" está correta.');
}
