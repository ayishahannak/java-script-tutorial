function fetchProducts(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((error)=>console.log(error));
    
}

function displayData(product){
    let htmlData=" ";

    product.forEach((product,index)=>
    {
        htmlData+=`<tr>
        <td>${index+1}</td>
        <td><img width="40px" src="${product.image}"/></td>
        <td>${product.title}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        </tr>`
    });

    const tablebody=document.getElementById("tbody");
    tablebody.innerHTML=htmlData;
}

fetchProducts();
