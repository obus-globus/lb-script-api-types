import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { EnginePipeline$Companion } from '../../../../io/ktor/server/engine/EnginePipeline$Companion.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
export class EnginePipeline extends Pipeline<void, PipelineCall> {
    static Companion: EnginePipeline$Companion;
    constructor(developmentMode?: boolean)
    readonly developmentMode: boolean;
    readonly receivePipeline: ApplicationReceivePipeline;
    readonly sendPipeline: ApplicationSendPipeline;
}