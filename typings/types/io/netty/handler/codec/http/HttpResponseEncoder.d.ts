import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpObjectEncoder } from '../../../../../io/netty/handler/codec/http/HttpObjectEncoder.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpResponseEncoder extends HttpObjectEncoder<HttpResponse> {
    constructor()
    acceptOutboundMessage(arg0: Object): boolean;
    encodeInitialLine(arg0: ByteBuf, arg1: HttpResponse): void;
    isContentAlwaysEmpty(arg0: HttpResponse): boolean;
    sanitizeHeadersBeforeEncode(arg0: HttpResponse, arg1: boolean): void;
}