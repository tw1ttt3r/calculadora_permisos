import permisos from "./static/permisos.mjs"
import {
  init,
  buildControls,
  buildTabs,
  buildControlsTipos
} from "./config/init.config.mjs"
import tipos from "./static/tipos.mjs"

init()
buildTabs()
buildControls(permisos)
buildControlsTipos(tipos)