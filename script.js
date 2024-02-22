const table = document.querySelector('table');

// Add loading row
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

const promises = Array.from({ length: 3 }, (_, index) => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime * 1000);
    });
});

Promise.all(promises).then(times => {
    table.deleteRow(1); // Remove loading row

    times.forEach((time, index) => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = `Promise ${index + 1}`;
        cell2.textContent = `${time}`;
    });

    const total = times.reduce((acc, curr) => acc + curr, 0);
    const totalRow = table.insertRow();
    const totalCell1 = totalRow.insertCell();
    const totalCell2 = totalRow.insertCell();
    totalCell1.textContent = 'Total';
    totalCell2.textContent = `${total.toFixed(3)}`;
});