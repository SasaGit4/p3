
const pessoas = [
    {
        nome: "Ana",
        genero: "F"
    },
    {
        nome: "Beto",
        genero: "M"
    },
    {
        nome: "Caio",
        genero: "M"
    },
    {
        nome: "Dani",
        genero: "F"
    }
];

function listar() {
    for(let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i]);
    }
}

function listar_por_genero(genero) {
    for(let i = 0; i < genero.length; i++) {
        console.log(genero[i]);
    }
}

listar();
listar_por_genero();