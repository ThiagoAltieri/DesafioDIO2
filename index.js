// Função para calcular o saldo e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calculando o saldo
    var saldoVitorias = vitorias - derrotas;

    // Utilizando uma estrutura de decisão para determinar o nível
    var nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando o resultado
    return "O Herói, de saldo " + saldoVitorias + ", está no nível " + nivel;
}

// Exemplo de uso da função
var resultado = calcularNivel(30, 15);
console.log(resultado);