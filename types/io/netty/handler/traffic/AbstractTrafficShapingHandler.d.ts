import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { TrafficCounter } from '../../../../io/netty/handler/traffic/TrafficCounter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractTrafficShapingHandler extends ChannelDuplexHandler {
    static DEFAULT_CHECK_INTERVAL: number;
    static DEFAULT_MAX_TIME: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    checkInterval: number;
    // private maxTime: number;
    maxWriteDelay: number;
    maxWriteSize: number;
    readonly readLimit: number;
    // private trafficCounter: TrafficCounter;
    // private userDefinedWritabilityIndex: number;
    readonly writeLimit: number;
    calculateSize(arg0: Object): number;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    checkWaitReadTime(arg0: ChannelHandlerContext, arg1: number, arg2: number): number;
    checkWriteSuspend(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    configure(arg0: number): void;
    configure(arg0: number, arg1: number): void;
    configure(arg0: number, arg1: number, arg2: number): void;
    doAccounting(arg0: TrafficCounter): void;
    getCheckInterval(): number;
    getMaxTimeWait(): number;
    getMaxWriteDelay(): number;
    getMaxWriteSize(): number;
    getReadLimit(): number;
    getWriteLimit(): number;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    informReadOperation(arg0: ChannelHandlerContext, arg1: number): void;
    read(arg0: ChannelHandlerContext): void;
    releaseReadSuspended(arg0: ChannelHandlerContext): void;
    releaseWriteSuspended(arg0: ChannelHandlerContext): void;
    setCheckInterval(arg0: number): void;
    setMaxTimeWait(arg0: number): void;
    setMaxWriteDelay(arg0: number): void;
    setMaxWriteSize(arg0: number): void;
    setReadLimit(arg0: number): void;
    setTrafficCounter(arg0: TrafficCounter): void;
    setUserDefinedWritability(arg0: ChannelHandlerContext, arg1: boolean): void;
    setWriteLimit(arg0: number): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: ChannelPromise): void;
    submitWrite(arg0: ChannelHandlerContext, arg1: Object, arg2: number, arg3: number, arg4: number, arg5: ChannelPromise): void;
    toString(): string;
    trafficCounter(): TrafficCounter;
    userDefinedWritabilityIndex(): number;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}