import type { CallContext } from '../../../../io/ktor/server/application/CallContext.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { TransformBodyContext } from '../../../../io/ktor/server/application/TransformBodyContext.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class OnCallRespondContext<PluginConfig extends unknown> extends CallContext<PluginConfig> {
    constructor(pluginConfig: PluginConfig, context: PipelineContext<Object, PipelineCall>)
    // private context: PipelineContext<Object, PipelineCall>;
    // private /*not mapped: */ getContext(): PipelineContext<Object, PipelineCall>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    transformBody(transform: (param0: TransformBodyContext, param1: Object) => Object, $completion: Continuation<void>): any;
}