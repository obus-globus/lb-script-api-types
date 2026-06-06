import type { DefaultHttpMessage } from '../../../../../io/netty/handler/codec/http/DefaultHttpMessage.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultHttpRequest extends DefaultHttpMessage implements HttpRequest {
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: Map$Entry<string, string>[])
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: HttpHeadersFactory)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: boolean)
    equals(arg0: Object | null): boolean;
    getMethod(): HttpMethod;
    getUri(): string;
    hashCode(): number;
    method(): HttpMethod;
    setMethod(arg0: HttpMethod): HttpRequest;
    setProtocolVersion(arg0: HttpVersion): HttpRequest;
    setUri(arg0: string): HttpRequest;
    toString(): string;
    uri(): string;
}