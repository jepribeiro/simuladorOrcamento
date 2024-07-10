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

const obterParametros = () => {
  const salario = parseFloat(
    prompt("Qual será o valor de salário que deseja receber?")
  );
  const custoFixo = parseFloat(prompt("Qual o custo fixo?"));
  const horasMes = parseInt(prompt("Quantas horas de trabalho por mês?"));
  return { salario, custoFixo, horasMes };
};

const criarCalculadora = () => {
  const { salario, custoFixo, horasMes } = obterParametros();
  return new Calculadora(salario, custoFixo, horasMes);
};

// Cria uma nova instância da classe Calculadora
const novoOrcamento = criarCalculadora();

// Calcula o valor da hora de trabalho
const valorHoraTrabalho = novoOrcamento.calculaHoraTrabalho();

// Exibe o valor da hora de trabalho
alert(
  `O valor do seu trabalho é de ${valorHoraTrabalho.toFixed(2)} reais por hora.`
);

// Console log para verificar o objeto criado
console.log(novoOrcamento);
