const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = 
    `<table>
        <tr>
            <th>KeyName</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.code}</td>
        </tr>
        </table>`  
})