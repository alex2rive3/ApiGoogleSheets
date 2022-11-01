//const SHEET_ID = "";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXPFZBpNcddjClqKp8LCGRQXUvzpaHoIeHU3K5woER146LlXQwXYU4h9hWP1SSVAO1xUfnXuzJNyCV4YB5E8J-vji2jopsA4MkSt-N2Zyn6V4VboF3OMZfQwyxGc_1DXDG3U2NtG9mT_F3BKBKmsf-ENaCgYKATASARASFQEjDvL930ArJOnHkuOkv0UK9xl21Q0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/bebidas!A2:D`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Marca
        const itemMarca = document.createElement("span");
        itemMarca.className = "item Marca";
        itemMarca.innerHTML = values[i][1];

        const itemDescripcion = document.createElement("span");
        itemDescripcion.className = "item descripcion";
        itemDescripcion.innerHTML = values[i][2];

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][3];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemMarca);
        producto.appendChild(itemDescripcion);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});