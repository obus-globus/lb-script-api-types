import type { CallContext } from '../../../../io/ktor/server/application/CallContext.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OnCallContext<PluginConfig extends unknown> extends CallContext<PluginConfig> {
    constructor(pluginConfig: PluginConfig, context: PipelineContext<void, PipelineCall>)
}