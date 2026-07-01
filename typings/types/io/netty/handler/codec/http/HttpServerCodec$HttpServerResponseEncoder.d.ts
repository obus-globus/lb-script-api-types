import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseEncoder } from '../../../../../io/netty/handler/codec/http/HttpResponseEncoder.d.ts'
import type { HttpServerCodec } from '../../../../../io/netty/handler/codec/http/HttpServerCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpServerCodec$HttpServerResponseEncoder extends HttpResponseEncoder {
    constructor(null_: HttpServerCodec, arg1: any)
    // private methodFlag: number;
    isContentAlwaysEmpty(arg0: HttpResponse): boolean;
    sanitizeHeadersBeforeEncode(arg0: HttpResponse, arg1: boolean): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}