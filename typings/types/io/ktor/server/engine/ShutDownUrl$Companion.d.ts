import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { ShutDownUrl$Config } from '../../../../io/ktor/server/engine/ShutDownUrl$Config.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ShutDownUrl$Companion extends Object {
    // private ApplicationCallPlugin: BaseApplicationPlugin<Application, ShutDownUrl$Config, PluginInstance>;
    /*not mapped: */ getApplicationCallPlugin(): BaseApplicationPlugin<Application, ShutDownUrl$Config, PluginInstance>;
}