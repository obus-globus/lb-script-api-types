import type { DecoderResult } from '../../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { HttpMethod } from '../../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpVersion } from '../../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class HttpPostRequestEncoder$WrappedHttpRequest extends Object implements HttpRequest {
    constructor(arg0: HttpRequest)
    // private request: HttpRequest;
    decoderResult(): DecoderResult;
    getDecoderResult(): DecoderResult;
    getMethod(): HttpMethod;
    getProtocolVersion(): HttpVersion;
    getUri(): string;
    headers(): Map$Entry<string, string>[];
    method(): HttpMethod;
    protocolVersion(): HttpVersion;
    setDecoderResult(arg0: DecoderResult): void;
    setMethod(arg0: HttpMethod): HttpRequest;
    setProtocolVersion(arg0: HttpVersion): HttpRequest;
    setUri(arg0: string): HttpRequest;
    uri(): string;
}