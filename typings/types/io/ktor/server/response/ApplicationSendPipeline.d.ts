import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationSendPipeline$Phases } from '../../../../io/ktor/server/response/ApplicationSendPipeline$Phases.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationSendPipeline extends Pipeline<Object, PipelineCall> {
    static Phases: ApplicationSendPipeline$Phases;
    constructor(developmentMode?: boolean)
    readonly developmentMode: boolean;
}