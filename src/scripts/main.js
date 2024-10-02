document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // AJAX - Asynchronous JavaScript and XML

        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open("GET", endPoint);
        xhttp.send();
    })
})