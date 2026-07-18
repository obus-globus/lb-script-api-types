import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { PipelineRequest } from '../../../../io/ktor/server/request/PipelineRequest.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingRequest extends Object implements ApplicationRequest {
    constructor(pathVariables: Parameters, request: PipelineRequest, call: RoutingCall)
    readonly call: RoutingCall;
    readonly cookies: RequestCookies;
    readonly headers: Headers;
    readonly local: RequestConnectionPoint;
    readonly pathVariables: Parameters;
    readonly queryParameters: Parameters;
    readonly rawQueryParameters: Parameters;
    // private request: PipelineRequest;
    /*not mapped: */ getRequest$ktor_server_core(): PipelineRequest;
    receiveChannel(): ByteReadChannel;
}