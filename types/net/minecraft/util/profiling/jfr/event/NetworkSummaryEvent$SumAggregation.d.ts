import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NetworkSummaryEvent } from '../../../../../../net/minecraft/util/profiling/jfr/event/NetworkSummaryEvent.d.ts'
export class NetworkSummaryEvent$SumAggregation extends Object {
    constructor(remoteAddress: string)
    // private event: NetworkSummaryEvent;
    // private receivedBytes: AtomicLong;
    // private receivedPackets: AtomicInteger;
    // private sentBytes: AtomicLong;
    // private sentPackets: AtomicInteger;
    commitEvent(): void;
    trackReceivedPacket(size: number): void;
    trackSentPacket(size: number): void;
}