import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObjectEncoder } from '../../../../../io/netty/handler/codec/http/HttpObjectEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RtspEncoder extends HttpObjectEncoder<HttpMessage> {
    constructor()
    acceptOutboundMessage(arg0: Object): boolean;
    encodeInitialLine(arg0: ByteBuf, arg1: HttpMessage): void;
}