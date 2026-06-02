import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BinaryWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    copy(): BinaryWebSocketFrame;
    duplicate(): BinaryWebSocketFrame;
    replace(arg0: ByteBuf): BinaryWebSocketFrame;
    retain(): BinaryWebSocketFrame;
    retain(arg0: number): BinaryWebSocketFrame;
    retainedDuplicate(): BinaryWebSocketFrame;
    touch(): BinaryWebSocketFrame;
    touch(arg0: Object): BinaryWebSocketFrame;
}