import { updateTabStore } from "./store.mjs"
import { getElements } from "./utility.mjs"

function init() {
  document.title = "Calculadora de Permisos"
}

function buildTabs() {
  getElements("tab")
    .forEach((k, p) => {
      if (!p) {
        k.classList.add("font-bold")
      }
      k.addEventListener("click", () => {
        updateTabStore(p)
        setSelectionTab(p)
        activeCalculator(p)
      })
    })

    getElements("container-calculator")
    .forEach((k, p) => {
      if (!p) {
        k.classList.add("container-calculator-visible")
        return
      }
      k.classList.add("container-calculator-invisible")
    })
}

function activeCalculator(i) {
  getElements("container-calculator")
    .forEach((k, p) => {
      if (i !== p) {
        k.classList.remove("container-calculator-visible")
        k.classList.add("container-calculator-invisible")
      } else {
        k.classList.remove("container-calculator-invisible")
        k.classList.add("container-calculator-visible")
      }
    })
}

function setSelectionTab(i) {
  const e = getElements("tab")
    e.forEach((k, p) => {
      k.classList.remove("font-bold")
      if (p === i) k.classList.add("font-bold")
    })
}

function buildControls(permisos) {
  getElements("permisos-control")
    .forEach((k) => {
      k.append(...buildOptions(permisos))
      initValueControl(k, 0, permisos)
      k.addEventListener("change", (e) => {
        const id = k.getAttribute("id")
        const { value } = e.target
        const { value: v } = permisos[value]
        switch(id) {
          case "controls-user":
            getElements("controls-user-description")[0].textContent = v
            break;
          case "controls-group":
            getElements("controls-group-description")[0].textContent = v
            break;
          case "controls-others":
            getElements("controls-others-description")[0].textContent = v
            break;
        }
      })
    })
}

function initValueControl(c, p, permisos) {
  c.setAttribute("selectedIndex", p.toString())
  const { value: v } = permisos[p]
  getElements("controls-user-description")[p].textContent = v
  getElements("controls-group-description")[p].textContent = v
  getElements("controls-others-description")[p].textContent = v
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
  buildControls,
  buildTabs
}