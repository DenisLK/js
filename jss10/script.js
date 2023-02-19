const productData = productsData;
const contentEl = document.querySelector('.content')

productData.forEach(productsData => {
    const jokeEl = document.createElement('div');
    jokeEl.classList.add('joke_box');

    const imgEl = document.createElement('img');
    imgEl.src = productsData.image;
    imgEl.alt = 'photo';
    imgEl.classList.add('image');

    const queEl = document.createElement('h2');
    queEl.textContent = productsData.setup;
    queEl.classList.add('queText');

    const punchlineEl = document.createElement('p');
    punchlineEl.textContent = productsData.punchline;
    punchlineEl.classList.add('punchText')

    const idEl = document.createElement('id');
    idEl.textContent = `Номер шутки ${productsData.id}`;

    contentEl.appendChild(jokeEl)
    jokeEl.appendChild(idEl);
    jokeEl.appendChild(queEl);
    jokeEl.appendChild(punchlineEl);
    jokeEl.appendChild(imgEl);
});

const style = `
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(4, 206, 206, 0.11);
}
.joke_box{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    border: 1px solid black;
    background-color: rgb(99, 106, 116);
    margin: 30px;
}
.queText{
    color: rgb(173, 245, 245);
}
.punchText{
    color: rgb(253, 253, 252);
}

`
styleSheet = document.createElement("style")
styleSheet.innerText = style;
document.head.appendChild(styleSheet)