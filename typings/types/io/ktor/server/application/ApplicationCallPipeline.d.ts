import type { ApplicationCallPipeline$ApplicationPhase } from '../../../../io/ktor/server/application/ApplicationCallPipeline$ApplicationPhase.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
export class ApplicationCallPipeline extends Pipeline<void, PipelineCall> {
    static ApplicationPhase: ApplicationCallPipeline$ApplicationPhase;
    constructor(developmentMode: boolean, environment: ApplicationEnvironment)
    readonly developmentMode: boolean;
    readonly environment: ApplicationEnvironment;
    readonly receivePipeline: ApplicationReceivePipeline;
    readonly sendPipeline: ApplicationSendPipeline;
}