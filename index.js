// Passo 1: Importar readline para entrada do usuário
const readline = require('readline');

// Criando uma interface para leitura dos dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que verifica o nível do herói com base na experiência
function categoriaXP(xp) {
  if (xp < 0) {
      return "Experiência inválida";
  } else if (xp <= 1000) {
      return "Ferro";
  } else if (xp <= 2000) {
      return "Bronze";
  } else if (xp <= 5000) {
      return "Prata";
  } else if (xp <= 7000) {
      return "Ouro";
  } else if (xp <= 8000) {
      return "Platina";
  } else if (xp <= 9000) {
      return "Ascendente";
  } else if (xp <= 10000) {
      return "Imortal";
  } else {
      return "Radiante";
  }
}

// Passo 2: Solicitar nome e experiência do herói
rl.question('Digite o nome do Herói: ', (nome) => {
  rl.question('Digite a quantidade de Experiência: ', (expInput) => {
    const exp = parseInt(expInput); // Converter a entrada para número

    // Verificar se a entrada é um número válido
    if (isNaN(exp)) {
      console.log('Por favor, insira um número válido para a experiência.');
    } else {
      // Exibir o resultado
      console.log(`O Herói ${nome} está no nível ${categoriaXP(exp)}.`);
    }

    // Fechar a interface
    rl.close();
  });
});
