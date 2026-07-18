import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationPlugin<TConfiguration extends unknown> extends BaseApplicationPlugin<Application, TConfiguration, PluginInstance>, Object{
}