import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { ApplicationPlugin } from '../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { PluginBuilder } from '../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationPluginImpl<PluginConfigT extends unknown> extends Object implements ApplicationPlugin<PluginConfigT> {
    constructor(name: string, createConfiguration: (param0: ApplicationCallPipeline) => PluginConfigT, body: (param0: PluginBuilder<PluginConfigT>) => void)
    // private body: (param0: PluginBuilder<PluginConfigT>) => void;
    // private createConfiguration: (param0: ApplicationCallPipeline) => PluginConfigT;
    readonly key: AttributeKey<PluginInstance>;
    install(pipeline: Application, configure: (param0: PluginConfigT) => void): PluginInstance;
}