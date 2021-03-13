function getSpoons(cupQnt) {
  return 14 * cupQnt / 7;
}

function getWater(cupQnt, cupSize) {
  if (cupQnt > 1) {
    return 14.285714285714 * cupSize * cupQnt / 100;
  } else {
    return cupSize / 7;
  }
}

function getMilk(cupQnt, cupSize) {
  if (cupQnt > 1) {
    return 85.714285714286 * cupSize * cupQnt / 100;
  } else {
    return cupSize - getWater(cupQnt, cupSize);
  }
}


const cupQnt = prompt("Quantos copos?");

const cupSize = prompt("qual o volume do copo em ml? ");

console.log(`
  Ingredientes: \n
    [+] ${getSpoons(cupQnt)} colheres de pó de capuccino. (Tamanho_da_colher = "sopa")
    [+] ${getWater(cupQnt, cupSize)}ml de água.
    [+] ${getMilk(cupQnt, cupSize)}ml de leite.`
);
console.log(`
Modo de Preparo: \n
[!] Esquente ${getWater(cupQnt, cupSize)}ml de água (sem deixar ferver!).
[!] Adicione ${getSpoons(cupQnt)} colheres (de sopa) de pó de capuccino e misture bem.
[!] Pegue essa mistura e coloque na geladeira, até que esfrie.
[!] Após esfriar, coloque no liquidificador e bata junto com {get_milk(cup_qnt, cup_size):.2f}ml de leite.
[!] E pronto, seu capuccino gelado está pronto para beber!!
OBS:
    [+] O liquidificador deixa mais cremoso
    [+] Use canudo de metal, bambu, madeira e papel. Temos que salvar as tartaruguinhas SZ.
    [!] Receita by: Rafaelvis Presley!`
);