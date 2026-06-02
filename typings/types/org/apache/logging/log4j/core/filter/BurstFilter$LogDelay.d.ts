import type { Delayed } from '../../../../../../java/util/concurrent/Delayed.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BurstFilter$LogDelay extends Object implements Delayed {
    constructor(expireTime: number)
    // private expireTime: number;
    compareTo(delayed: Delayed): number;
    equals(o: Object | null): boolean;
    getDelay(timeUnit: TimeUnit): number;
    hashCode(): number;
    setDelay(delay: number): void;
}