import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseEncoder } from '../../../../../io/netty/handler/codec/http/HttpResponseEncoder.d.ts'
export class HttpServerCodec$HttpServerResponseEncoder extends HttpResponseEncoder {
    private constructor(null_: HttpServerCodec$HttpServerResponseEncoder)
    // private method: HttpMethod;
    isContentAlwaysEmpty(arg0: HttpResponse): boolean;
    sanitizeHeadersBeforeEncode(arg0: HttpResponse, arg1: boolean): void;
}