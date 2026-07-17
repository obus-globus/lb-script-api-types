import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractTrafficShapingHandler } from '../../../../io/netty/handler/traffic/AbstractTrafficShapingHandler.d.ts'
import type { GlobalTrafficShapingHandler$PerChannel } from '../../../../io/netty/handler/traffic/GlobalTrafficShapingHandler$PerChannel.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlobalTrafficShapingHandler extends AbstractTrafficShapingHandler {
    static DEFAULT_CHECK_INTERVAL: number;
    static DEFAULT_MAX_TIME: number;
    constructor(arg0: (Object | null)[])
    constructor(arg0: ScheduledExecutorService, arg1: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number, arg3: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number, arg3: number, arg4: number)
    // private channelQueues: JavaMap<number, GlobalTrafficShapingHandler$PerChannel>;
    maxGlobalWriteSize: number;
    // private queuesSize: AtomicLong;
    checkWaitReadTime(arg0: ChannelHandlerContext, arg1: number, arg2: number): number;
    createGlobalTrafficCounter(arg0: ScheduledExecutorService): void;
    getMaxGlobalWriteSize(): number;
    // private getOrSetPerChannel(arg0: ChannelHandlerContext): GlobalTrafficShapingHandler$PerChannel;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    informReadOperation(arg0: ChannelHandlerContext, arg1: number): void;
    queuesSize(): number;
    release(): void;
    // private sendAllValid(arg0: ChannelHandlerContext, arg1: GlobalTrafficShapingHandler$PerChannel, arg2: number): void;
    setMaxGlobalWriteSize(arg0: number): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: ChannelPromise): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: number, arg4: number, arg5: ChannelPromise): void;
    userDefinedWritabilityIndex(): number;
}