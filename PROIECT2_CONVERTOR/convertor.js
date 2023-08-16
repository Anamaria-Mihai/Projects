let select = document.querySelectorAll('select');
let result = document.getElementById('result');
const api = 'https://api.frankfurter.app';

async function currency() {
    let currencyOptions = '';
    const res = await fetch(`${api}/currencies`);
    const data = await res.json();
    const arrKeys = Object.keys(data);
    arrKeys.forEach((key) => {
        currencyOptions += `<option value='${key}'>${key}</option>`;
    });

    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = currencyOptions;
    }
}
currency();

function converter() {
    if (induction.value == '') {
        alert('Introduceti o valoare');
        return false;
    }

    if (select[0].value != select[1].value) {
        // alert('Right');
        fetch(
            `${api}/latest?amount=${induction.value}&from=${select[0].value}&to=${select[1].value}`
        )
            .then((val) => val.json())
            .then((val) => {
                result.value = Object.values(val.rates)[0];
            });
    } else {
        alert('Selectati doua monede diferite');
    }
}

// When user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName('final-value').innerHTML = '';
}
