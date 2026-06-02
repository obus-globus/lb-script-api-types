import type { GlobalChannelTrafficShapingHandler } from '../../../../io/netty/handler/traffic/GlobalChannelTrafficShapingHandler.d.ts'
import type { TrafficCounter } from '../../../../io/netty/handler/traffic/TrafficCounter.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlobalChannelTrafficCounter$MixedTrafficMonitoringTask extends Object implements Runnable {
    constructor(arg0: GlobalChannelTrafficShapingHandler, arg1: TrafficCounter)
    // private counter: TrafficCounter;
    // private trafficShapingHandler1: GlobalChannelTrafficShapingHandler;
    run(): void;
}