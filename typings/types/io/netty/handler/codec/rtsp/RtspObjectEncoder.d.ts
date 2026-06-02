import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObjectEncoder } from '../../../../../io/netty/handler/codec/http/HttpObjectEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RtspObjectEncoder<H extends HttpMessage> extends HttpObjectEncoder<H> {
    constructor()
    acceptOutboundMessage(arg0: Object): boolean;
}