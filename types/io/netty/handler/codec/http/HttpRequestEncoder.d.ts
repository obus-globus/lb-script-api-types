import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpObjectEncoder } from '../../../../../io/netty/handler/codec/http/HttpObjectEncoder.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpRequestEncoder extends HttpObjectEncoder<HttpRequest> {
    constructor()
    acceptOutboundMessage(arg0: Object): boolean;
    encodeInitialLine(arg0: ByteBuf, arg1: HttpRequest): void;
}