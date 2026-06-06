import type { DefaultHttpMessage } from '../../../../../io/netty/handler/codec/http/DefaultHttpMessage.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultHttpResponse extends DefaultHttpMessage implements HttpResponse {
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: Map$Entry<string, string>[])
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: HttpHeadersFactory)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: boolean)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: boolean, arg3: boolean)
    equals(arg0: Object | null): boolean;
    getStatus(): HttpResponseStatus;
    hashCode(): number;
    setProtocolVersion(arg0: HttpVersion): HttpResponse;
    setStatus(arg0: HttpResponseStatus): HttpResponse;
    status(): HttpResponseStatus;
    toString(): string;
}