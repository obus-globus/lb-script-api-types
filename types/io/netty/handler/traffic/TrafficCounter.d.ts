import type { AbstractTrafficShapingHandler } from '../../../../io/netty/handler/traffic/AbstractTrafficShapingHandler.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TrafficCounter extends Object {
    static milliSecondFromNano(): number;
    constructor(arg0: AbstractTrafficShapingHandler, arg1: ScheduledExecutorService, arg2: string, arg3: number)
    constructor(arg0: ScheduledExecutorService, arg1: string, arg2: number)
    // private checkInterval: AtomicLong;
    // private cumulativeReadBytes: AtomicLong;
    // private cumulativeWrittenBytes: AtomicLong;
    // private currentReadBytes: AtomicLong;
    // private currentWrittenBytes: AtomicLong;
    // private executor: ScheduledExecutorService;
    // private lastCumulativeTime: number;
    // private lastReadBytes: number;
    // private lastReadThroughput: number;
    // private lastReadingTime: number;
    // private lastTime: AtomicLong;
    // private lastWriteThroughput: number;
    // private lastWritingTime: number;
    // private lastWrittenBytes: number;
    // private monitor: () => void;
    // private monitorActive: boolean;
    // private name: string;
    // private readingTime: number;
    readonly realWriteThroughput: number;
    readonly realWrittenBytes: AtomicLong;
    // private scheduledFuture: ScheduledFuture<Object>;
    // private trafficShapingHandler: AbstractTrafficShapingHandler;
    // private writingTime: number;
    bytesRealWriteFlowControl(arg0: number): void;
    bytesRecvFlowControl(arg0: number): void;
    bytesWriteFlowControl(arg0: number): void;
    checkInterval(): number;
    configure(arg0: number): void;
    cumulativeReadBytes(): number;
    cumulativeWrittenBytes(): number;
    currentReadBytes(): number;
    currentWrittenBytes(): number;
    getRealWriteThroughput(): number;
    getRealWrittenBytes(): AtomicLong;
    // private init(arg0: number): void;
    lastCumulativeTime(): number;
    lastReadBytes(): number;
    lastReadThroughput(): number;
    lastTime(): number;
    lastWriteThroughput(): number;
    lastWrittenBytes(): number;
    name(): string;
    readTimeToWait(arg0: number, arg1: number, arg2: number): number;
    readTimeToWait(arg0: number, arg1: number, arg2: number, arg3: number): number;
    resetAccounting(arg0: number): void;
    resetCumulativeTime(): void;
    start(): void;
    stop(): void;
    toString(): string;
    writeTimeToWait(arg0: number, arg1: number, arg2: number): number;
    writeTimeToWait(arg0: number, arg1: number, arg2: number, arg3: number): number;
}