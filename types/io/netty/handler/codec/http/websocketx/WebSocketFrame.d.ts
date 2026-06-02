import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultByteBufHolder } from '../../../../../../io/netty/buffer/DefaultByteBufHolder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WebSocketFrame extends DefaultByteBufHolder {
    constructor(arg0: ByteBuf)
    constructor(arg0: boolean, arg1: number, arg2: ByteBuf)
    readonly finalFragment: boolean;
    // private rsv: number;
    copy(): WebSocketFrame;
    duplicate(): WebSocketFrame;
    isFinalFragment(): boolean;
    replace(arg0: ByteBuf): WebSocketFrame;
    retain(): WebSocketFrame;
    retain(arg0: number): WebSocketFrame;
    retainedDuplicate(): WebSocketFrame;
    rsv(): number;
    toString(): string;
    touch(): WebSocketFrame;
    touch(arg0: Object): WebSocketFrame;
}