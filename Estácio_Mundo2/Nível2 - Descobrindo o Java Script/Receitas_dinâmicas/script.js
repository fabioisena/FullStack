let receita = [ 
{   "titulo": "Pão Italiano",
    "imagem": "./images/pao_italiano.webp",
    "ingredientes": ["500g - farinha de trigo", "350g - água", "5g - fermento biológico (seco)", "9g - sal"],
    "preparo": "Misture a farinha, água e fermento e deixe descansar por 30 minutos. Misture o sal de bata até incorporar. Faça 10 dobras a cada 30 minutos por 4 vezes. Asse em forno pré-aquecido em 230°C."
},
{   "titulo": "Pizza de Peperroni",
    "imagem": "./images/Pizza_pepperoni.webp",
    "ingredientes": ["350g - massa de pizza", "150g - queijo mussarela", "50g - pepperoni", "30g - molho de tomate"],
    "preparo": "Pre-asse a massa em forno à 250°C. Coloque o molho sobre toda a superfície, deixando 1cm de borda. Cubra com toda a mussarela e distribua o pepperoni. Asse em forno pré-aquecido em 180°C por 15minutos."
},
{   "titulo": "Cinnamon Roll",
    "imagem": "./images/cinnamon_roll.webp",
    "ingredientes": ["250g - massa de pizza", "50g - manteiga derretida", "5g - canela em pó", "10g - farinha de trigo"],
    "preparo": "Abra a massa em uma bancada deixando na dimensão de 40x30cm. Despeje a manteiga derretida sobre toda a superficie.Misture os secos do recheio e despeje em cima da manteiga. Enrole e corte rolos de 8cm de altura. Asse em forno pre-aquecido à 180°C por 30minutos"
}
]

getListaIngredientes = (receita) => {
const lista = receita.ingredientes
    .map(ingrediente => `<li>${ingrediente}</li>`) //class='mb-2'
    .reduce((acumulador, item) => acumulador + item, "<ul>") + "</ul>" //class='mb-1'
        return lista
}

getCard = (receita) =>{
return `
<div class="card">
    <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
    <div class="card-body">
        <h4 class="card-title">${receita.titulo}</h4>
        <div class="card-text">
            Ingredientes: ${getListaIngredientes(receita)}
            <hr>
            <h5>Modo de preparo: </h5>
            ${receita.preparo}
        </div>
    </div>
</div>`;
}

preencheCatalogo = () =>{
const html = receita
.map(receita => getCard(receita))
.reduce((acumulador, item) => acumulador + item, "")
document.getElementById("pnlCatalogo").innerHTML = html
}
onload = preencheCatalogo()
