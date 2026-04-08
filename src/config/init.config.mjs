import { updateTabStore } from "./store.mjs"
import { getElements, buildExplination } from "./utility.mjs"

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
        if (!k.classList.contains("tab-disabled")) {
          updateTabStore(p)
          setSelectionTab(p)
          activeCalculator(p)
        }
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
      resetPermisosForm()
      resetAdvancedForm()
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

    getElements("form-advanced-calculator")
      .forEach((k) => {
        k.addEventListener("submit", (e) => {
          e.preventDefault()
          e.stopPropagation()
        })
      })
}

function buildControlsTipos(tipos, permisos, regex) {
  getElements("permisos-control-tipos")
    .forEach((k) => {
      k.append(...buildOptionTipos(tipos))
      initValueControlTipos(k, 0, tipos)
      k.addEventListener("change", (e) => {
        const { value } = e.target
        const { desc } = tipos[value]
        getElements("controls-tipos-description")[0].textContent = desc
      })
    })

    getElements("advanced-permisos-control")
    .forEach((k) => {
      k.addEventListener("input", ({ _, target: { value } }) => {
        getElements("errors-advanced-permiso")[0]
            .textContent = 
              !regex.test(value)
                ? "Error detectado"
                : ""
        
        if (value.length === 10) {
          getElements("meaning-advanced-permiso")[0]
            .innerHTML = regex.test(value)
              ? buildExplination(value)
              : ""
        } else {
          getElements("meaning-advanced-permiso")[0]
            .innerHTML = ""
        }
      })
    })
}

function buildOptionTipos(tipos) {
  return Object.entries(tipos)
    .map(([a, { value }]) => {
      const e = document.createElement("option")
      e.setAttribute("value", a)
      e.setAttribute("label", value)
      return e
    })
}

function initValueControl(c, p, permisos) {
  c.setAttribute("selectedIndex", p.toString())
  const { value: v } = permisos[p]
  getElements("controls-user-description")[p].textContent = v
  getElements("controls-group-description")[p].textContent = v
  getElements("controls-others-description")[p].textContent = v
}

function initValueControlTipos(c, p, tipos) {
  c.setAttribute("selectedIndex", p.toString())
  const { value: v } = tipos[p]
  getElements("controls-tipos-description")[p].textContent = v
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

function resetAdvancedForm() {
  getElements("form-advanced-calculator")[0].reset()
  getElements("errors-advanced-permiso")[0].innerHTML = ''
  getElements("meaning-advanced-permiso")[0].innerHTML = ''
}

function resetPermisosForm() {
  getElements("form-permisos-selection")[0].reset()
  getElements("controls-msg")
    .forEach(k => k.textContent = '')
}

export {
  init,
  buildControls,
  buildTabs,
  buildControlsTipos
}