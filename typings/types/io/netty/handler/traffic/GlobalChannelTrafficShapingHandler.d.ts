import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractTrafficShapingHandler } from '../../../../io/netty/handler/traffic/AbstractTrafficShapingHandler.d.ts'
import type { GlobalChannelTrafficShapingHandler$PerChannel } from '../../../../io/netty/handler/traffic/GlobalChannelTrafficShapingHandler$PerChannel.d.ts'
import type { TrafficCounter } from '../../../../io/netty/handler/traffic/TrafficCounter.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlobalChannelTrafficShapingHandler extends AbstractTrafficShapingHandler {
    static DEFAULT_CHECK_INTERVAL: number;
    static DEFAULT_MAX_TIME: number;
    constructor(arg0: ScheduledExecutorService)
    constructor(arg0: ScheduledExecutorService, arg1: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: ScheduledExecutorService, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    // private accelerationFactor: number;
    // private channelQueues: { [key: number]: GlobalChannelTrafficShapingHandler$PerChannel };
    // private cumulativeReadBytes: AtomicLong;
    // private cumulativeWrittenBytes: AtomicLong;
    // private maxDeviation: number;
    maxGlobalWriteSize: number;
    // private queuesSize: AtomicLong;
    readonly readChannelLimit: number;
    // private readDeviationActive: boolean;
    // private slowDownFactor: number;
    readonly writeChannelLimit: number;
    // private writeDeviationActive: boolean;
    accelerationFactor(): number;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelTrafficCounters(): E[];
    checkWaitReadTime(arg0: ChannelHandlerContext, arg1: number, arg2: number): number;
    // private computeBalancedWait(arg0: number, arg1: number, arg2: number): number;
    // private computeDeviationCumulativeBytes(): void;
    configureChannel(arg0: number, arg1: number): void;
    createGlobalTrafficCounter(arg0: ScheduledExecutorService): void;
    doAccounting(arg0: TrafficCounter): void;
    getMaxGlobalWriteSize(): number;
    // private getOrSetPerChannel(arg0: ChannelHandlerContext): GlobalChannelTrafficShapingHandler$PerChannel;
    getReadChannelLimit(): number;
    getWriteChannelLimit(): number;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    informReadOperation(arg0: ChannelHandlerContext, arg1: number): void;
    maxDeviation(): number;
    maximumCumulativeReadBytes(): number;
    maximumCumulativeWrittenBytes(): number;
    queuesSize(): number;
    release(): void;
    // private sendAllValid(arg0: ChannelHandlerContext, arg1: GlobalChannelTrafficShapingHandler$PerChannel, arg2: number): void;
    setMaxDeviation(arg0: number, arg1: number, arg2: number): void;
    setMaxGlobalWriteSize(arg0: number): void;
    setReadChannelLimit(arg0: number): void;
    setWriteChannelLimit(arg0: number): void;
    slowDownFactor(): number;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: ChannelPromise): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: number, arg4: number, arg5: ChannelPromise): void;
    toString(): string;
    userDefinedWritabilityIndex(): number;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}