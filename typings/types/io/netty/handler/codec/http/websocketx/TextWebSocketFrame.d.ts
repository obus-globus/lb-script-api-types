import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TextWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: string)
    constructor(arg0: string)
    copy(): TextWebSocketFrame;
    duplicate(): TextWebSocketFrame;
    replace(arg0: ByteBuf): TextWebSocketFrame;
    retain(): TextWebSocketFrame;
    retain(arg0: number): TextWebSocketFrame;
    retainedDuplicate(): TextWebSocketFrame;
    text(): string;
    touch(): TextWebSocketFrame;
    touch(arg0: Object): TextWebSocketFrame;
}