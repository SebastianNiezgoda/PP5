document.getElementById('Submit-button').addEventListener('click', function () {

    const requiredFields = [
    'exampleFormControlInput1', // Nazwa firmy
    'exampleFormControlInput2', // NIP
    'exampleFormControlInput3', // Miasto
    'exampleFormControlInput4', // Ulica
    'exampleFormControlInput5', // Numer domu
    'exampleFormControlInput7' // Kod pocztowy
    ];
    
    
    const emptyFields = requiredFields.filter(id => !document.getElementById(id).value.trim());
    
    if (emptyFields.length > 0) {
    alert('Wszystkie wymagane pola muszą być uzupełnione!');
    return;
    }
    
    
    const data = {
    nazwaFirmy: document.getElementById('exampleFormControlInput1').value,
    nip: document.getElementById('exampleFormControlInput2').value,
    miasto: document.getElementById('exampleFormControlInput3').value,
    ulica: document.getElementById('exampleFormControlInput4').value,
    numerDomu: document.getElementById('exampleFormControlInput5').value,
    numerMieszkania: document.getElementById('exampleFormControlInput6').value,
    kodPocztowy: document.getElementById('exampleFormControlInput7').value,
    branza: document.getElementById('exampleFormControlInput8').value,
    uwagi: document.getElementById('exampleFormControlTextarea1').value,
    aktywny: document.getElementById('customCheck1').checked
    };
    
    
    console.log(data);
    });
    
    document.getElementById('fill').addEventListener('click', function () {
    
    document.getElementById('exampleFormControlInput1').value = 'marek';
    document.getElementById('exampleFormControlInput2').value = '1234567890';
    document.getElementById('exampleFormControlInput3').value = 'Warszawa';
    document.getElementById('exampleFormControlInput4').value = 'warszawska';
    document.getElementById('exampleFormControlInput5').value = '10';
    document.getElementById('exampleFormControlInput6').value = '5';
    document.getElementById('exampleFormControlInput7').value = '00-001';
    document.getElementById('exampleFormControlInput8').value = 'IT';
    document.getElementById('exampleFormControlTextarea1').value = 'Brak uwag.';
    document.getElementById('customCheck1').checked = true;
    
    
    const allInputs = document.querySelectorAll('input, textarea, select');
    allInputs.forEach(input => input.disabled = true);
    
    alert('Pola zostały wypełnione i zablokowane!');
    });