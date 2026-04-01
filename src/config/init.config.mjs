function init() {
  document.title = "Calculadora de Permisos"
}

function buildControls(permisos) {
  document
    .querySelectorAll(".permisos-control")
    .forEach((k) => {
      k.append(...buildOptions(permisos))
      initValueControl(k, 0, permisos)
      k.addEventListener("change", (e) => {
        const id = k.getAttribute("id")
        const { value } = e.target
        const { value: v } = permisos[value]
        switch(id) {
          case "controls-user":
            document.querySelectorAll(".controls-user-description")[0].textContent = v
            break;
          case "controls-group":
            document.querySelectorAll(".controls-group-description")[0].textContent = v
            break;
          case "controls-others":
            document.querySelectorAll(".controls-others-description")[0].textContent = v
            break;
        }
      })
    })
}

function initValueControl(c, p, permisos) {
  c.setAttribute("selectedIndex", p.toString())
  const { value: v } = permisos[p]
  document.querySelectorAll(".controls-user-description")[p].textContent = v
  document.querySelectorAll(".controls-group-description")[p].textContent = v
  document.querySelectorAll(".controls-others-description")[p].textContent = v
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