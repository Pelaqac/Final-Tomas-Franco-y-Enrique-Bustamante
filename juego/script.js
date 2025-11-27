document.getElementById("simular").addEventListener("click", () => {
  const monto = parseFloat(document.getElementById("donacion").value);
  const r = document.getElementById("resultado");

  if (isNaN(monto) || monto <= 0) {
    r.innerHTML = "<div class='item'><span class='emoji'>⚠️</span> Ingresá un monto válido.</div>";
    r.classList.remove("oculto");
    return;
  }

  // Fórmulas de impacto ambiental
  const arboles = Math.floor(monto * 3.5);
  const co2Anual = arboles * 21;
  const co2Decada = co2Anual * 10;
  const superficie = (arboles * 2.5).toFixed(1);
  const fauna = Math.floor(arboles / 8);

  // HTML moderno + limpio con emojis
  r.innerHTML = `
    <div class="item"><span class="emoji">🌱</span> Árboles plantados: <b>${arboles}</b></div>
    <div class="item"><span class="emoji">🌍</span> CO₂ absorbido por año: <b>${co2Anual} kg</b></div>
    <div class="item"><span class="emoji">⏳</span> CO₂ absorbido en 10 años: <b>${co2Decada} kg</b></div>
    <div class="item"><span class="emoji">🟩</span> Superficie verde equivalente: <b>${superficie} m²</b></div>
    <div class="item"><span class="emoji">🦔</span> Especies beneficiadas: <b>${fauna}</b></div>
  `;

  r.classList.remove("oculto");
});
