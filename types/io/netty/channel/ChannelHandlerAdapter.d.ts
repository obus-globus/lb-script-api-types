import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class ChannelHandlerAdapter extends Object implements ChannelHandler {
    constructor()
    // private added: boolean;
    ensureNotSharable(): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isSharable(): boolean;
}