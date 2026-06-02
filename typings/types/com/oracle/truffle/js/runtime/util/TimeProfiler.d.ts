import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TimeProfiler extends Object {
    constructor()
    // private counter: AtomicLong;
    printCumulative(): void;
    printElapsed(startTime: number, event: string): void;
}