import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AbstractCircuitBreaker } from '../../../../../org/apache/commons/lang3/concurrent/AbstractCircuitBreaker.d.ts'
export class ThresholdCircuitBreaker extends AbstractCircuitBreaker<number> {
    static PROPERTY_NAME: string;
    constructor(arg0: number)
    readonly threshold: number;
    // private used: AtomicLong;
    checkState(): boolean;
    close(): void;
    getThreshold(): number;
    incrementAndCheckState(arg0: number): boolean;
}