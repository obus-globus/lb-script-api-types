import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PongWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    copy(): PongWebSocketFrame;
    duplicate(): PongWebSocketFrame;
    replace(arg0: ByteBuf): PongWebSocketFrame;
    retain(): PongWebSocketFrame;
    retain(arg0: number): PongWebSocketFrame;
    retainedDuplicate(): PongWebSocketFrame;
    touch(): PongWebSocketFrame;
    touch(arg0: Object): PongWebSocketFrame;
}