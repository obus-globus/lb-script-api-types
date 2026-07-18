import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline$Phases } from '../../../../io/ktor/server/request/ApplicationReceivePipeline$Phases.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationReceivePipeline extends Pipeline<Object, PipelineCall> {
    static Phases: ApplicationReceivePipeline$Phases;
    constructor(developmentMode?: boolean)
    readonly developmentMode: boolean;
}