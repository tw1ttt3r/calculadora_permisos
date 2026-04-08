import { permisos, permisosClaves } from "./static/permisos.mjs"
import {
  init,
  buildControls,
  buildTabs,
  buildControlsTipos
} from "./config/init.config.mjs"
import tipos from "./static/tipos.mjs"
import regex from "./static/regex.mjs"

init()
buildTabs()
buildControls(permisos)
buildControlsTipos(tipos, permisosClaves, regex)