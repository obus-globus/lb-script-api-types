import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { PipelineRequest } from '../../../../io/ktor/server/request/PipelineRequest.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BaseApplicationRequest extends Object implements PipelineRequest {
    constructor(call: PipelineCall)
    readonly call: PipelineCall;
    /*not mapped: */ getCookies(): RequestCookies;
    // private /*not mapped: */ getEngineHeaders(): Headers;
    // private /*not mapped: */ getEngineReceiveChannel(): ByteReadChannel;
    readonly headers: Headers;
    /*not mapped: */ getLocal(): RequestConnectionPoint;
    readonly pipeline: ApplicationReceivePipeline;
    /*not mapped: */ getQueryParameters(): Parameters;
    /*not mapped: */ getRawQueryParameters(): Parameters;
    receiveChannel(): ByteReadChannel;
    setHeader(name: string, values: string[] | null): void;
    setReceiveChannel(channel: ByteReadChannel): void;
}