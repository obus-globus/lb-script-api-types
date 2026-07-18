import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { PipelineResponse } from '../../../../io/ktor/server/response/PipelineResponse.d.ts'
import type { ResponseCookies } from '../../../../io/ktor/server/response/ResponseCookies.d.ts'
import type { ResponseHeaders } from '../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingResponse extends Object implements ApplicationResponse {
    constructor(call: RoutingCall, applicationResponse: PipelineResponse)
    // private applicationResponse: PipelineResponse;
    /*not mapped: */ getApplicationResponse$ktor_server_core(): PipelineResponse;
    readonly call: RoutingCall;
    readonly cookies: ResponseCookies;
    readonly headers: ResponseHeaders;
    /*not mapped: */ isCommitted(): boolean;
    /*not mapped: */ isSent(): boolean;
    push(builder: ResponsePushBuilder): void;
    status(): HttpStatusCode | null;
    status(value: HttpStatusCode): void;
}