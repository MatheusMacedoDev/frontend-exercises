const form = document.querySelector('form');
const list = document.querySelector('#list') 

const arrayList = [];

form.addEventListener('submit', async event => {
    event.preventDefault();

    const fruitName = insertFruitInList();    
    removeListElements();
    showListElements();

    await postInAPI(fruitName);

    console.log(arrayList);
});

const insertFruitInList = () => {
    const fruitName = document.querySelector('#fruit-name').value;
    arrayList.push(fruitName);
    return fruitName;
} 

const postInAPI = async fruitName => {
    const response = await fetch('http://localhost:3000/fruits', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: fruitName
        })
    })
}

const removeListElements = () => {
    list.innerHTML = '';
}

const showListElements = () => {
    arrayList.sort();
    arrayList.forEach(element => {
        const newFruitElement = document.createElement('li');
        newFruitElement.innerText = element;
    
        list.appendChild(newFruitElement);
    })
}

