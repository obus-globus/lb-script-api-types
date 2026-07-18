import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CallContext<PluginConfig extends unknown> extends Object {
    constructor(pluginConfig: PluginConfig, context: PipelineContext<Object, PipelineCall>)
    // private context: PipelineContext<Object, PipelineCall>;
    // private /*not mapped: */ getContext(): PipelineContext<Object, PipelineCall>;
    readonly pluginConfig: PluginConfig;
    finish(): void;
}