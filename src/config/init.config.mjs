function init() {
  document.title = "Calculadora de Permisos"
}

function buildControls(permisos) {
  document
    .querySelectorAll(".permisos-control")
    .forEach((k) => k.append(...buildOptions(permisos)))
}

function buildOptions(permisos) {
  return Object.keys(permisos)
    .map((v) => {
      const e = document.createElement("option")
      e.setAttribute("value", v)
      e.setAttribute("label", v)
      return e
      }
    )
}

export {
  init,
  buildControls
}