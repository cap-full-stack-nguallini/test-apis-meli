function generaEncabezado() {
    var encabezado = "<center>Items publicados por el seller_id: " + dataSeller.seller.id + " del site " + dataSeller.results[0].site_id + "</center>";
    return encabezado;
}

if (document.getElementById("encabezado")) {
    document.getElementById("encabezado").innerHTML = generaEncabezado();
}

function generaTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr style=background-color:gold>\
            <th scope='col'>id del item</th>\
            <th scope='col'>title del item</th>\
            <th scope='col'>category_id del item</th>\
            <th scope='col'>name de la categoría</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < dataSeller.results.length; i++) {
        tabla += "\
                    <tr>\
                        <td>" + dataSeller.results[i].id + "</td>\
                        <td>" + dataSeller.results[i].title + "</td>\
                        <td>" + dataSeller.results[i].category_id + "</td>\
                        <td>" + categories[dataSeller.results[i].category_id].name + "</td>\
                    </tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

if (document.getElementById("tabla")) {
    document.getElementById("tabla").innerHTML = generaTabla();
}