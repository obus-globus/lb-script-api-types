import type { BaseRouteScopedPlugin } from '../../../../io/ktor/server/application/BaseRouteScopedPlugin.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RouteScopedPlugin<TConfiguration extends unknown> extends BaseRouteScopedPlugin<TConfiguration, PluginInstance>, Object{
}