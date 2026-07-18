import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { PipelineRequest } from '../../../../io/ktor/server/request/PipelineRequest.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { RoutingPipelineCall } from '../../../../io/ktor/server/routing/RoutingPipelineCall.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingPipelineRequest extends Object implements PipelineRequest {
    constructor(call: RoutingPipelineCall, pipeline: ApplicationReceivePipeline, engineRequest: PipelineRequest)
    readonly call: RoutingPipelineCall;
    readonly cookies: RequestCookies;
    readonly engineRequest: PipelineRequest;
    readonly headers: Headers;
    readonly local: RequestConnectionPoint;
    readonly pipeline: ApplicationReceivePipeline;
    readonly queryParameters: Parameters;
    readonly rawQueryParameters: Parameters;
    receiveChannel(): ByteReadChannel;
    setHeader(name: string, values: string[] | null): void;
    setReceiveChannel(channel: ByteReadChannel): void;
}