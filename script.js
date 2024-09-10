const form = document.getElementById('dotaz');
const dataList = document.getElementById('dataList');
const showDataBtn = document.getElementById('showDataBtn');
const savedDataTitle = document.getElementById('savedDataTitle');


showDataBtn.addEventListener('click', function() {
    displayData();
    dataList.classList.remove('hidden');
    savedDataTitle.classList.remove('hidden');
});


form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('Name').value;
    const color = document.getElementById('color').value;
    const hobby = document.getElementById('hobby').value;
    const age = document.getElementById('age').value;

    
    const formData = {
        Name: Name,
        color: color,
        hobby: hobby,
        age: age
    };

    
    let storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedData));

    
    form.reset();
});


function displayData() {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    dataList.innerHTML = '';

    storedData.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = `Jméno: ${item.Name}, Barva: ${item.color}, Koníček: ${item.hobby}, Věk: ${item.age}`;
        dataList.appendChild(li);
    });
}