import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PingWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    copy(): PingWebSocketFrame;
    duplicate(): PingWebSocketFrame;
    replace(arg0: ByteBuf): PingWebSocketFrame;
    retain(): PingWebSocketFrame;
    retain(arg0: number): PingWebSocketFrame;
    retainedDuplicate(): PingWebSocketFrame;
    touch(): PingWebSocketFrame;
    touch(arg0: Object): PingWebSocketFrame;
}