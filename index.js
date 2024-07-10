class Calculadora {
  constructor(salario, custoFixo, horasMes) {
    this.salario = salario;
    this.custoFixo = custoFixo;
    this.horasMes = horasMes;
  }

  calculaHoraTrabalho() {
    return (this.salario + this.custoFixo) / this.horasMes;
  }
}

const parametros = {
  salario: 5000, // Valor de exemplo para o salário
  custoFixo: 1000, // Valor de exemplo para o custo fixo
  horasMes: 120, // Valor de exemplo para as horas por mês
};

const criarCalculadora = () => {
  return new Calculadora(
    parametros.salario,
    parametros.custoFixo,
    parametros.horasMes
  );
};

// Chamar a função que cria a calculadora
const novoOrcamento = criarCalculadora();

// Calcula o valor da hora de trabalho
const valorHoraTrabalho = novoOrcamento.calculaHoraTrabalho();

// Exibe o valor da hora de trabalho
console.log(
  `O valor do seu trabalho é de ${valorHoraTrabalho.toFixed(2)} reais por hora.`
);

// Console log para verificar o objeto criado
console.log(`Os dados do seu novo trabalho é ${novoOrcamento}`);
