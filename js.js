const contenido = document.querySelector('#contenido');
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(datos => {
        tabla(datos)
    })


function tabla(datos) {
    contenido.innerHTML = ''
    for(let valor of datos){
        contenido.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.name }</td>
                    <td>${ valor.email }</td>
                    <td>${ valor.website }</td>
                    <td>${ valor.phone }</td>

                </tr>
                
                `
    }
}

function buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
