const input = document.getElementById('pkr');
const currency = document.getElementById('currency');
const form = document.getElementById('form');
const answer = document.getElementById('answer');

form.addEventListener('submit', async e => {
    e.preventDefault();
    console.log(input.value);
    console.log(currency.value);
    // debugger;
    const query = {
        amount: input.value,
        currency: currency.value
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    };
    const resp = await fetch('/convert', options);
    const result = await resp.json();
    console.log(result);
    const markup = `${input.value} PKR are equal to ${result} ${currency.value}.`;
    const p = document.createElement('p');
    p.innerHTML = markup;
    answer.appendChild(p);
    
})