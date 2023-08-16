fetch('https://api.frankfurter.app/currencies')
    .then((response) => response.json())
    .then((data) => {
        const selectElement = document.getElementById('from');
        const selectElement2 = document.getElementById('to');

        for (const currencyCode in data) {
            const option1 = document.createElement('option');
            option1.value = currencyCode;
            option1.textContent = currencyCode;
            selectElement.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currencyCode;
            option2.textContent = currencyCode;
            selectElement2.appendChild(option2);
        }
    })
    .catch((error) => {
        console.log('Error fetching currency data:', error);
    });

function fetchExchangeRate(event) {
    event.preventDefault();
    const fromCurrency =
        document.getElementById('from').value === '-'
            ? null
            : document.getElementById('from').value;
    const toCurrency =
        document.getElementById('to').value === '-' ? null : document.getElementById('to').value;
    const date = document.getElementById('date').value;

    if (!date) {
        alert('Please select a date.');
    }

    let url = `https://api.frankfurter.app/${date}`;

    if (fromCurrency && toCurrency) {
        url += `?from=${fromCurrency}&to=${toCurrency}`;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayExchangeRate(data);
        })
        .catch((error) => {
            console.log('Error fetching exchange rate:', error);
        });
}

function displayExchangeRate(data) {
    const exchangeRateTable = document.getElementById('exchangeRateTable');
    exchangeRateTable.innerHTML = '';

    const table = document.createElement('table');

    const tableHeaders = Object.keys(data.rates);
    const headerRow = document.createElement('tr');
    for (const header of tableHeaders) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    const rates = Object.values(data.rates);
    const row = document.createElement('tr');
    for (const rate of rates) {
        const td = document.createElement('td');
        td.textContent = rate;
        row.appendChild(td);
    }
    table.appendChild(row);

    exchangeRateTable.appendChild(table);
}
