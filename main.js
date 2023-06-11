const productCart = [
    {
        id: 1,
        name : "Arroz",
        price: 50.98,
    },

    {
        id: 2,
        name : "Batata",
        price: 40.80,
    },

    {
        id: 3,
        name : "Milho",
        price: 90.98,
    },

    {
        id: 4,
        name : "Açuca",
        price: 55.40,
    },

    {
        id: 5,
        name : "Oleo",
        price: 78.99,
    },
];

function some(){
    let soma = 0 //konte
    for(let i = 0; i < productCart.length; i++ ){
        soma += productCart[i].price;
    }

    soma = soma.toLocaleString("ang-us" , {style: "currency" , currency:"USD"});
    return soma;
};

let main = document.createElement("main");
document.getElementsByTagName("body")[0].appendChild(main);

let ul = document.createElement("ul");
ul.classList.add("productList");

let li = document.createElement("li");
li.classList.add("headerList");

let itemHeader = document.createElement("p");
let text = document.createTextNode("Item");
itemHeader.appendChild(text);

let valeurHeader = document.createElement("p");
let velue = document.createTextNode("veleur");
valeurHeader.appendChild(velue);

li.appendChild(itemHeader);
li.appendChild(valeurHeader);

ul.appendChild(li);

for(let i = 0; i < productCart.length; i++){

    let liste = document.createElement("li");
    liste.classList.add("productDetail");

    let p1 = document.createElement("p");
    let nameProduct = document.createTextNode(productCart[i].name);
    p1.appendChild(nameProduct);

    let valeurFormater= document.createTextNode(productCart[i].price)
    .toLocaleString("ang-us",
     {style: "currency" , currency: "USD"});

    let p2 = document.createElement("p");
    let priceProduct = document.createTextNode(productCart[i].price);
    p2.appendChild(priceProduct);

    liste.appendChild(p1);
    liste.appendChild(p2);

    ul.appendChild(liste)
}

let liste2 = document.createElement("li")
liste2.classList.add("total");

let p3 = document.createElement("p");
let total = document.createTextNode("Total");
p3.appendChild(total);

let p4 = document.createElement("p");
let someProduct = document.createTextNode(some());
p4.appendChild(someProduct);

liste2.appendChild(p3);
liste2.appendChild(p4);

ul.appendChild(liste2);

document.getElementsByTagName("main")[0].appendChild(ul);

let button = document.createElement("button");
button.classList.add("buttonEnd");

let textButton = document.createTextNode("payer");
button.appendChild(textButton);

document.getElementsByTagName("main")[0].appendChild(button);


