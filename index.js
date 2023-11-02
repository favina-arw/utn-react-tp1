//document.getElementById("estado").addEventListener("change",traerEstado());

//function traerEstado(){
//    let estadoSeleccionado = document.getElementById("estado").value;
//    document.getElementById("estadoSeleccionado").textContent = estadoSeleccionado;    
//};

const selectEstado = document.getElementById("estado");

const estadoSeleccionadoLabel = document.getElementById("estadoSeleccionado");

function cambiarEstado(){
    let estadoSeleccionado = selectEstado.value;
    estadoSeleccionadoLabel.textContent = estadoSeleccionado;
}

selectEstado.addEventListener("change", cambiarEstado);