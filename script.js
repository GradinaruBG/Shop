1
let productsGrid = document.getElementById("products-grid");
2
let productsArray = [];
3
let xhr = new XMLHttpRequest();
4
let url = "https://my-json-server.typicode.com/GradinaruBG/Shop";
5

6
xhr.open('GET',url + '/products');
7
xhr.responseType = 'json';
8
xhr.onload = function(){
9
  let products = xhr.response;
10
  productsGrid.innerHTML = null;
11
  products.forEach(p=>{
12
    productsArray.push(p);
13
    let pElem = document.createElement('div');
14
    pElem.classList.add('product');
15
    pElem.innerHTML = `
16
        <h2 class='product-name'>${p.name}</h2>
17
        <img class='product-photo' src='${p.photo_url}'>
18
        <p class='product-description'><b>Description: </b>
19
        ${p.description}</p>
20
        <button>Buy</button>`;
21
    productsGrid.append(pElem);
22
  });
23
  
24
}
25
xhr.send();