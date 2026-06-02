import type { DebugCounter } from '../../../../../com/oracle/truffle/api/object/DebugCounter.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class DebugCounter$DebugCounterImpl extends DebugCounter {
    static create(paramname: string): DebugCounter;
    static dumpCounters(): void;
    private constructor(name: string)
    // private name: string;
    // private value: AtomicLong;
    get(): number;
    inc(): void;
    toString(): string;
}