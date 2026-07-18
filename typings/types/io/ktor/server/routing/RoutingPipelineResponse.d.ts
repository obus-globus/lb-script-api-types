import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { PipelineResponse } from '../../../../io/ktor/server/response/PipelineResponse.d.ts'
import type { ResponseCookies } from '../../../../io/ktor/server/response/ResponseCookies.d.ts'
import type { ResponseHeaders } from '../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { RoutingPipelineCall } from '../../../../io/ktor/server/routing/RoutingPipelineCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingPipelineResponse extends Object implements PipelineResponse {
    constructor(call: RoutingPipelineCall, pipeline: ApplicationSendPipeline, engineResponse: PipelineResponse)
    readonly call: RoutingPipelineCall;
    readonly cookies: ResponseCookies;
    readonly engineResponse: PipelineResponse;
    readonly headers: ResponseHeaders;
    /*not mapped: */ isCommitted(): boolean;
    /*not mapped: */ isSent(): boolean;
    readonly pipeline: ApplicationSendPipeline;
    push(builder: ResponsePushBuilder): void;
    status(): HttpStatusCode | null;
    status(value: HttpStatusCode): void;
}