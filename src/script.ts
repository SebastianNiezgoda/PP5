let customerIdCounter = 1;
var lista


document.getElementById('Submit-button').addEventListener('click', function () {
    const clientId = document.getElementById("currentEditClientId").value;
    const requiredFields = [
        'company-name', // Nazwa firmy
        'NIP', // NIP
        'city', // Miasto
        'street', // Ulica
        'hn', // Numer domu
        'code'  // Kod pocztowy
    ];
    //Sprawdzanie pól wymaganych
    const emptyFields = requiredFields.filter(id => !document.getElementById(id).value.trim());
    if (emptyFields.length > 0) {
        alert('Wszystkie wymagane pola muszą być uzupełnione!');
        return;
    };

    const data = {
        nazwaFirmy: document.getElementById('company-name').value,
        nip: document.getElementById('NIP').value,
        miasto: document.getElementById('city').value,
        ulica: document.getElementById('street').value,
        numerDomu: document.getElementById('hn').value,
        kodPocztowy: document.getElementById('code').value,
        branza: document.getElementById('industry').value,
        uwagi: document.getElementById('uwagi').value,
        aktywny: document.getElementById('customCheck1').checked
        };
        console.log(data);
    
        if (clientId) {
            updateClient(clientId);
            
        } else {
            addToList();
            
        }

        document.getElementById("currentEditClientId").value = "";
        showlist();

})

document.getElementById('fill').addEventListener('click', function () {
    
    document.getElementById('company-name').value = 'marek';
    document.getElementById('NIP').value = '1234567890';
    document.getElementById('city').value = 'Warszawa';
    document.getElementById('street').value = 'warszawska';
    document.getElementById('hn').value = '10';
    document.getElementById('code').value = '00-001';
    document.getElementById('industry').value = 'IT';
    document.getElementById('uwagi').value = 'Brak uwag.';
    document.getElementById('customCheck1').checked = true;
})

document.getElementById("showMElist").addEventListener('click',showlist);
document.getElementById("showMeform").addEventListener('click',newform);



function showlist(){
    document.getElementById("customer-form").style.display="none"
    document.getElementById("customer-list").style.display="block"

    let ul = document.getElementById("listaklientow");
    ul.innerHTML +=`<li class="list-group-item></li>`;
}
function showform(){
    document.getElementById("customer-form").style.display="block"
    document.getElementById("customer-list").style.display="none"
};

function newform(){
    document.getElementById("customer-form").style.display="block"
    document.getElementById("customer-list").style.display="none"
    document.getElementById('company-name').value = '';
    document.getElementById('NIP').value = "";
    document.getElementById('city').value = "";
    document.getElementById('street').value = "";
    document.getElementById('hn').value = "";
    document.getElementById('code').value ="";
    document.getElementById('industry').value = "";
    document.getElementById('uwagi').value = "";
    document.getElementById('customCheck1').checked = false;
};

    
function addToList() {
    const uniqueId = `client-${customerIdCounter++}`;
    const nazwaFirmyDoListy = document.getElementById("company-name").value;

    const ul = document.getElementById("listaklientow");

    // Tworzymy nowy element listy
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.id = uniqueId;
    li.textContent = `ID: ${uniqueId}, Nazwa firmy: ${nazwaFirmyDoListy}`;
    console.log(`Dodaję klienta: ${uniqueId}`);

    // Tworzymy przycisk „Edytuj”
    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.className = "btn btn-sm btn-warning ml-2";
   
    // Log, aby upewnić się, że przycisk został stworzony
    console.log("Przycisk 'Edytuj' stworzony dla: " + uniqueId);

    
    ul.appendChild(li); // Dodajemy element listy do UL
}

        
    

function editClient(clientId) {
    const clientElement = document.getElementById(clientId);
    if (!clientElement) return; // Zabezpieczenie przed nieznalezieniem elementu
    const clientData = clientElement.textContent.split(", ");

    document.getElementById("company-name").value = clientData[1].split(": ")[1];
    document.getElementById("currentEditClientId").value = clientId;

    document.getElementById("customer-form").style.display = "block";
    document.getElementById("customer-list").style.display = "none";
}

function updateClient(clientId) {
    const clientElement = document.getElementById(clientId);
    const nazwaFirmy = document.getElementById("company-name").value;

    clientElement.textContent = `ID: ${clientId}, Nazwa firmy: ${nazwaFirmy}`;

    
}
document.getElementById('edit-by-id').addEventListener('click', function() {
    const clientId = prompt("Podaj ID klienta do edycji:");
    
    if (clientId) {
        // Sprawdź, czy element z danym ID istnieje
        const clientElement = document.getElementById(clientId);
        if (clientElement) {
            editClient(clientId); // Wywołaj funkcję edytującą
        } else {
            alert("Nie znaleziono klienta o podanym ID.");
        }
    }
});