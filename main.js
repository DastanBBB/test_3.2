
//---------Task1--------
// const extractNumbers =(str) => {
//     return str
//         .split('')
//         .filter(char => !isNaN(char) && char !== ' ')
// };
//
// console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]

//--------Task2--------
// function fibonacci (prev = 0, current = 1) {
//     if (prev > 144) return;
//
//     console.log(prev)
//
//     setTimeout(() => {
//         fibonacci(current, prev + current)
//     }, 1000)
// }
// fibonacci();

//-------Task3--------
// async  function fetchProduct () {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json()
//
//         data.forEach(product => {
//             console.log(product.title)
//         })
//     } catch (error) {
//         console.log('Ошибка при выполнения запроса')
//     }
// }


//--------Task4----------
// document.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         const color = event.target.textContent;
//         document.body.style.backgroundColor = color;
//     }
// });

//--------Task6-----------
// let counter = 0;
// const counterElement = document.getElementById('counter');
// const intervalId = setInterval(() => {
//     counter++;
//     counterElement.textContent = counter;
//
//     if (counter >= 100) {
//         clearInterval(intervalId);
//     }
// }, 1);

//-----------Task7---------
document.getElementById('fetch-button').addEventListener('click', async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();

        console.log('Полученные данные:', data);
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
    }
});
