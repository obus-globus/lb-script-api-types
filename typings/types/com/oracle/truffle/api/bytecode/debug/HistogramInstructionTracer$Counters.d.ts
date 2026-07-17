import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HistogramInstructionTracer$Counters extends Object {
    constructor(tableSize: number, leaf: boolean)
    // private data: AtomicLong[];
    // private size: number;
    // private subgroups: Map<Object, HistogramInstructionTracer$Counters>;
    getOrCreateGroup(childGroup: Object, leaf: boolean): HistogramInstructionTracer$Counters;
    reset(): void;
}