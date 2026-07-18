import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { PipelinePhase } from '../../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class CallFailed extends Object implements Hook<(param0: ApplicationCall, param1: Throwable) => void> {
    static INSTANCE: CallFailed;
    // private phase: PipelinePhase;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ApplicationCall, param1: Throwable) => void): void;
}