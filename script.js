document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/Ev#3_Simbologia.pdf'; // Reemplaza con la ruta real de tu archivo
    link.download = 'Ev#3_Simbologia.pdf'; // Reemplaza con el nombre real del archivo
    link.click();
});
