import type { ApplicationPlugin } from '../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { PluginBuilder } from '../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { RouteScopedPlugin } from '../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { RouteScopedPluginBuilder } from '../../../../io/ktor/server/application/RouteScopedPluginBuilder.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CreatePluginUtilsKt extends Object {
    static createApplicationPlugin<PluginConfigT extends unknown>(name: string, configurationPath: string, createConfiguration: (param0: ApplicationConfig) => PluginConfigT, body: (param0: PluginBuilder<PluginConfigT>) => void): ApplicationPlugin<PluginConfigT>;
    static createApplicationPlugin<PluginConfigT extends unknown>(name: string, createConfiguration: () => PluginConfigT, body: (param0: PluginBuilder<PluginConfigT>) => void): ApplicationPlugin<PluginConfigT>;
    static createApplicationPlugin(name: string, body: (param0: PluginBuilder<void>) => void): ApplicationPlugin<void>;
    static createRouteScopedPlugin<PluginConfigT extends unknown>(name: string, configurationPath: string, createConfiguration: (param0: ApplicationConfig) => PluginConfigT, body: (param0: RouteScopedPluginBuilder<PluginConfigT>) => void): RouteScopedPlugin<PluginConfigT>;
    static createRouteScopedPlugin<PluginConfigT extends unknown>(name: string, createConfiguration: () => PluginConfigT, body: (param0: RouteScopedPluginBuilder<PluginConfigT>) => void): RouteScopedPlugin<PluginConfigT>;
    static createRouteScopedPlugin(name: string, body: (param0: RouteScopedPluginBuilder<void>) => void): RouteScopedPlugin<void>;
}