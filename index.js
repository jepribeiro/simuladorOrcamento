//criar a classe calculadora que irá criar o objeto

class calculadora {
  constructor(resultado) {
    this.salario = resultado.salario;
    this.custoFixo = resultado.custoFixo;
    this.horasMes = resultado.horasMes;
  }
}

// função para receber os parâmetros

const recebeParametros = () => {
  let salario = parseFloat(
    prompt("Qual será o valor de salário que deseja receber?")
  );

  let custoFixo = parseFloat(prompt("Qual o custo fixo?"));

  let horasMes = parseInt(prompt("Quantas horas de trabalho por mês?"));

  return { salario, custoFixo, horasMes };
};
const parametros = recebeParametros();

//calcula valor hora/trabalho

const calculaHoraTrabalho = ({ salario, custoFixo, horasMes }) => {
  const horaTrabalho = (salario + custoFixo) / horasMes;

  alert(`O valor do seu trabalho é de ${horaTrabalho} reais por hora. `);
};
//cria o novo objeto/orçamento
calculaHoraTrabalho(parametros);
let novoOrcamento = new calculadora(parametros);

//mostra o objeto criado

console.log(novoOrcamento);
