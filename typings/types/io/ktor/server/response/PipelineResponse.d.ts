import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PipelineResponse extends ApplicationResponse, Object{
    readonly call: PipelineCall;
    readonly pipeline: ApplicationSendPipeline;
    push(builder: ResponsePushBuilder): void;
    status(): HttpStatusCode | null;
    status(value: HttpStatusCode): void;
}