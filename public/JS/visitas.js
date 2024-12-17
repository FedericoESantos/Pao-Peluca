
if (localStorage.visitas) {
  localStorage.visitas = Number(localStorage.visitas) + 1;
} else {
  localStorage.visitas = 1;
}
document.getElementById('contador').innerText = localStorage.visitas;