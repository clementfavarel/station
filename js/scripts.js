document.addEventListener("DOMContentLoaded", function () {
  const numerosLyres = document.getElementById("numerosLyres");
  const numerosBlocs = document.getElementById("numerosBlocs");
  const nbInputsPerContainer = 10;

  for (let nbLyres = 0; nbLyres < nbInputsPerContainer; nbLyres++) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = `lyre_${nbLyres}`;
    input.id = `lyre_${nbLyres}`;
    input.classList.add("lyre");
    input.placeholder = "Entrez numéro de lyre";
    numerosLyres.appendChild(input);
  }

  for (let nbBlocs = 0; nbBlocs < nbInputsPerContainer; nbBlocs++) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = `bloc_${nbBlocs}`;
    input.id = `bloc_${nbBlocs}`;
    input.classList.add("bloc");
    input.placeholder = "Entrez numéro de bloc";
    numerosBlocs.appendChild(input);
  }
});
