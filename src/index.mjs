import permisos from "./static/permisos.mjs"
import { init, buildControls } from "./config/init.config.mjs"

init()
buildControls(permisos)