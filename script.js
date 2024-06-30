document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/Ev#3_Simbologia.pdf'; // Reemplaza con la ruta real de tu archivo
    link.download = 'Ev#3_Simbologia.pdf'; // Reemplaza con el nombre real del archivo
    document.body.appendChild(link); // Añade el enlace al DOM
    link.click(); // Simula el clic en el enlace
    document.body.removeChild(link); // Remueve el enlace del DOM
});
