const productsData = dataProducts;
const contentEl = document.querySelector('.product');

productsData.forEach(dataProducts => {
    const products = document.createElement('div');
    products.classList.add('products')

    const imgEl = document.createElement('img');
    imgEl.classList.add('img');
    imgEl.classList.add('img_product')
    imgEl.src = dataProducts.image

    const productNameEl = document.createElement('p');
    productNameEl.classList.add('nameText');
    productNameEl.textContent = dataProducts.productName;

    const priceEl = document.createElement('p');
    priceEl.classList.add('price');
    priceEl.textContent = dataProducts.price;

    const textEl = document.createElement('p');
    textEl.classList.add('textProduct');
    textEl.textContent = dataProducts.text;




    contentEl.appendChild(products);
    products.appendChild(imgEl)
    products.appendChild(productNameEl);

    products.appendChild(textEl);
    products.appendChild(priceEl);

});

const style = `
*{
    margin: 0;
    padding: 0;
}
.product{
    display: grid;
    grid-template-columns: repeat(3, 360px);
    grid-template-rows: repeat(2, 581px);
    gap: 30px;
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}
.products{
    
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    
}
.img_product{
    display: flex;
    background: #F7E4E2;
    justify-content: center;
    height: 420px;
}
.nameText{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    padding: 25px 16px;
}
.price{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #F16D7F;
    padding: 8px 16px;

}
.textProduct{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5D5D5D;
    padding: 8px 16px;
    max-width: 310px;
}`
styleSheet = document.createElement("style")
styleSheet.innerText = style;
document.head.appendChild(styleSheet)



