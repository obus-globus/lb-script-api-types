import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelFutureListener } from '../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IdleState } from '../../../../io/netty/handler/timeout/IdleState.d.ts'
import type { IdleStateEvent } from '../../../../io/netty/handler/timeout/IdleStateEvent.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Ticker } from '../../../../io/netty/util/concurrent/Ticker.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdleStateHandler extends ChannelDuplexHandler {
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: TimeUnit)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: TimeUnit)
    // private allIdleTimeNanos: number;
    // private allIdleTimeout: Future<Object>;
    // private firstAllIdleEvent: boolean;
    // private firstReaderIdleEvent: boolean;
    // private firstWriterIdleEvent: boolean;
    // private lastChangeCheckTimeStamp: number;
    // private lastFlushProgress: number;
    // private lastMessageHashCode: number;
    // private lastPendingWriteBytes: number;
    // private lastReadTime: number;
    // private lastWriteTime: number;
    // private observeOutput: boolean;
    // private readerIdleTimeNanos: number;
    // private readerIdleTimeout: Future<Object>;
    // private reading: boolean;
    // private state: number;
    // private ticker: Ticker;
    // private writeListener: ChannelFutureListener;
    // private writerIdleTimeNanos: number;
    // private writerIdleTimeout: Future<Object>;
    channelActive(arg0: ChannelHandlerContext): void;
    channelIdle(arg0: ChannelHandlerContext, arg1: IdleStateEvent): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    // private destroy(): void;
    getAllIdleTimeInMillis(): number;
    getReaderIdleTimeInMillis(): number;
    getWriterIdleTimeInMillis(): number;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    // private hasOutputChanged(arg0: ChannelHandlerContext, arg1: boolean): boolean;
    // private initOutputChanged(arg0: ChannelHandlerContext): void;
    // private initialize(arg0: ChannelHandlerContext): void;
    newIdleStateEvent(arg0: IdleState, arg1: boolean): IdleStateEvent;
    resetReadTimeout(): void;
    resetWriteTimeout(): void;
    schedule(arg0: ChannelHandlerContext, arg1: () => void, arg2: number, arg3: TimeUnit): Future<Object>;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}