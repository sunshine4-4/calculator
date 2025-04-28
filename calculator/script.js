function calculateSalary() {
    let salary = parseFloat(document.getElementById('salary').value) || 0;
    let days = parseInt(document.getElementById('days').value) || 0;
    let bonus = parseFloat(document.getElementById('bonus').value) || 0;
    let total = (salary / 30) * days + bonus;
    let tax = total * 0.13;
    let finalSalary = total - tax;
    
    let resultText = `Начисленная сумма: ${total.toFixed(2)} ₽<br>НДФЛ (13%): ${tax.toFixed(2)} ₽<br>Зарплата на руки: ${finalSalary.toFixed(2)} ₽`;
    document.getElementById('previewResult').innerHTML = resultText;
    
    document.getElementById('saveButton').style.display = 'block';
}

function saveResult() {
    let fio = document.getElementById('fio').value;
    let position = document.getElementById('position').value;
    let salary = parseFloat(document.getElementById('salary').value) || 0;
    let days = parseInt(document.getElementById('days').value) || 0;
    let bonus = parseFloat(document.getElementById('bonus').value) || 0;
    let total = (salary / 30) * days + bonus;
    let tax = total * 0.13;
    let finalSalary = total - tax;

    let result = {
        fio: fio,
        position: position,
        total: total.toFixed(2),
        tax: tax.toFixed(2),
        finalSalary: finalSalary.toFixed(2)
    };

    let results = JSON.parse(localStorage.getItem("salaryResults")) || [];
    results.push(result);
    localStorage.setItem("salaryResults", JSON.stringify(results));

    alert('Результат сохранен!');
}
