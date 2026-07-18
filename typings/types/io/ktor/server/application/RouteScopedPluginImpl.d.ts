import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { RouteScopedPlugin } from '../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { RouteScopedPluginBuilder } from '../../../../io/ktor/server/application/RouteScopedPluginBuilder.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteScopedPluginImpl<PluginConfigT extends unknown> extends Object implements RouteScopedPlugin<PluginConfigT> {
    constructor(name: string, createConfiguration: (param0: ApplicationCallPipeline) => PluginConfigT, body: (param0: RouteScopedPluginBuilder<PluginConfigT>) => void)
    // private body: (param0: RouteScopedPluginBuilder<PluginConfigT>) => void;
    // private createConfiguration: (param0: ApplicationCallPipeline) => PluginConfigT;
    readonly key: AttributeKey<PluginInstance>;
    install(pipeline: ApplicationCallPipeline, configure: (param0: PluginConfigT) => void): PluginInstance;
}