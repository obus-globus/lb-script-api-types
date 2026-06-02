import type { GlobalChannelTrafficShapingHandler } from '../../../../io/netty/handler/traffic/GlobalChannelTrafficShapingHandler.d.ts'
import type { TrafficCounter } from '../../../../io/netty/handler/traffic/TrafficCounter.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
export class GlobalChannelTrafficCounter extends TrafficCounter {
    static milliSecondFromNano(): number;
    constructor(arg0: GlobalChannelTrafficShapingHandler, arg1: ScheduledExecutorService, arg2: string, arg3: number)
    resetCumulativeTime(): void;
    start(): void;
    stop(): void;
}