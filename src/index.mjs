import permisos from "./static/permisos.mjs"
import { init, buildControls, buildTabs } from "./config/init.config.mjs"

init()
buildTabs()
buildControls(permisos)