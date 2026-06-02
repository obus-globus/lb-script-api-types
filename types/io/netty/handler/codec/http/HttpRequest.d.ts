import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpRequest extends HttpMessage, Object{
    getMethod(): HttpMethod;
    getUri(): string;
    method(): HttpMethod;
    setMethod(arg0: HttpMethod): HttpRequest;
    setProtocolVersion(arg0: HttpVersion): HttpRequest;
    setUri(arg0: string): HttpRequest;
    uri(): string;
}