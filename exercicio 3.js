/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/



const pagamento = 100;
const AvistaDebito = pagamento * 0.9;
const DinheiroPix = pagamento * 0.85;
const DuasVezes = pagamento * 0.1;
const FormaPag = 1;


if (FormaPag === 1) {
console.log(AplicarDesconto(AvistaDebito));
}

else if (FormaPag === 2) {  
    console.log(DinheiroPix);
}

else if (FormaPag === 3) {  
    console.log(pagamento);
}

else if (FormaPag === 4) {
    console.log (DuasVezes + pagamento);
}




function AplicarDesconto(valor, tipoDePagamento) {
    if (tipoDePagamento == 1) {
        return valor * 0.9;
    } else if (tipoDePagamento == 2) {
        return valor * 0.85;
    } else if (tipoDePagamento == 3) {
        return valor * 0.1;
    } else if (tipoDePagamento == 4) {
        return valor * 0.1 + valor;
    }
}

console.log(AplicarDesconto(100,4))
   


