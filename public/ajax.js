fetch(urlSellers, init).then(response => response.json()).then(datosSeller => {
        dataSeller = datosSeller;
        fetch(urlCategories, init).then(response => response.json()).then(datosCategories => {
            categories = datosCategories;
            importScripts();
        })
    })
    .catch(error => alert("Los datos no están disponibles. Regrese más tarde."));