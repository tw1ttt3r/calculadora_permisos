import tipos from "../static/tipos.mjs";
import { tiposPermisos } from "../static/permisos.mjs";

function getElements(clas) {
  return document.querySelectorAll(`.${clas}`)
}

function buildExplination(v) {
  let explination = ""
  for (const p in v) {
    const c = v[p]
    switch(parseInt(p)) {
      case 0:
        explination += `Se detecta que es: ${getTipoByIdentificator(c, tipos)},<br />`
        break
      case 1:
        explination += `Permisos de usuario:<br />
          - permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
        break
        case 2:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 3:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 4:
          explination += `Permisos de grupo:<br />
            - permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 5:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 6:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 7:
          explination += `Permisos de otros:<br />
            - permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 8:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
        case 9:
          explination += `- permiso de ${getPermisoByIdentificator(c, tiposPermisos)}<br />`
          break
    }
  }
  return explination
}

function getTipoByIdentificator(i, tipos) {
  return Object.values(tipos)
    .reduce((acc, { desc, value }) => acc + (value === i ? desc : ''), '')
}

function getPermisoByIdentificator(i, permisos) {
  return Object.entries(permisos)
    .reduce((acc, [ k, v ]) => acc + (k === i ? v : ''), '')
}

export {
  getElements,
  buildExplination
}