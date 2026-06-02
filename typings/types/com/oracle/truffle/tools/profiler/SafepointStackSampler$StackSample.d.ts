import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SafepointStackSampler$StackSample extends Object {
    constructor(thread: Thread, stack: StackTraceEntry[], biasNs: number, durationNs: number, overflowed: boolean)
    // private biasNs: number;
    // private durationNs: number;
    // private overflowed: boolean;
    // private stack: StackTraceEntry[];
    // private thread: Thread;
}