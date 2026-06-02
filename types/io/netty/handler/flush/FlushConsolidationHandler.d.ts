import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FlushConsolidationHandler extends ChannelDuplexHandler {
    static DEFAULT_EXPLICIT_FLUSH_AFTER_FLUSHES: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private consolidateWhenNoReadInProgress: boolean;
    // private ctx: ChannelHandlerContext;
    // private explicitFlushAfterFlushes: number;
    // private flushPendingCount: number;
    // private flushTask: () => void;
    // private nextScheduledFlush: Future<Object>;
    // private readInProgress: boolean;
    // private cancelScheduledFlush(): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    // private flushIfNeeded(arg0: ChannelHandlerContext): void;
    // private flushNow(arg0: ChannelHandlerContext): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    // private resetReadAndFlushIfNeeded(arg0: ChannelHandlerContext): void;
    // private scheduleFlush(arg0: ChannelHandlerContext): void;
}