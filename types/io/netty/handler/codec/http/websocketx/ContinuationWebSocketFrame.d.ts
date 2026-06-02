import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ContinuationWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: string)
    copy(): ContinuationWebSocketFrame;
    duplicate(): ContinuationWebSocketFrame;
    replace(arg0: ByteBuf): ContinuationWebSocketFrame;
    retain(): ContinuationWebSocketFrame;
    retain(arg0: number): ContinuationWebSocketFrame;
    retainedDuplicate(): ContinuationWebSocketFrame;
    text(): string;
    touch(): ContinuationWebSocketFrame;
    touch(arg0: Object): ContinuationWebSocketFrame;
}