import type { Condition } from '../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Throttler extends Object {
    constructor()
    constructor(allocatedUntil: number)
    // private allocatedUntil: number;
    // private bytesPerSecond: number;
    readonly condition: Condition;
    readonly lock: ReentrantLock;
    // private maxByteCount: number;
    // private waitByteCount: number;
    byteCountOrWaitNanos(now: number, byteCount: number): number;
    bytesPerSecond(bytesPerSecond: number, waitByteCount: number, maxByteCount: number): void;
    sink(sink: Sink): Sink;
    source(source: Source): Source;
    take(byteCount: number): number;
}