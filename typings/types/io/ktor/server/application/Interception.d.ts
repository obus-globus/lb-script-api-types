import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interception<T extends unknown> extends Object {
    constructor(phase: PipelinePhase, action: (param0: Pipeline<T, PipelineCall>) => void)
    readonly action: (param0: Pipeline<T, PipelineCall>) => void;
    readonly phase: PipelinePhase;
}