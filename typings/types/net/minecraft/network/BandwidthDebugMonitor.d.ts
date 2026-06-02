import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalSampleLogger } from '../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
export class BandwidthDebugMonitor extends Object {
    constructor(bandwidthLogger: LocalSampleLogger)
    // private bandwidthLogger: LocalSampleLogger;
    // private bytesReceived: AtomicInteger;
    onReceive(bytes: number): void;
    tick(): void;
}