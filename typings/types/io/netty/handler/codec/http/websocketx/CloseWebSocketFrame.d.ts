import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CloseWebSocketFrame extends WebSocketFrame {
    constructor()
    constructor(arg0: WebSocketCloseStatus)
    constructor(arg0: WebSocketCloseStatus, arg1: ByteBufAllocator)
    constructor(arg0: WebSocketCloseStatus, arg1: string)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBufAllocator, arg3: number, arg4: string)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: string)
    constructor(arg0: number, arg1: string)
    copy(): CloseWebSocketFrame;
    duplicate(): CloseWebSocketFrame;
    reasonText(): string;
    replace(arg0: ByteBuf): CloseWebSocketFrame;
    retain(): CloseWebSocketFrame;
    retain(arg0: number): CloseWebSocketFrame;
    retainedDuplicate(): CloseWebSocketFrame;
    statusCode(): number;
    touch(): CloseWebSocketFrame;
    touch(arg0: Object): CloseWebSocketFrame;
}