import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HistogramInstructionTracer$LastTraceCache extends Record {
    private constructor(bytecodeNode: BytecodeNode, counters: AtomicLong[], included: boolean, compiledTier: number, thread: Thread)
    // private bytecodeNode: BytecodeNode;
    // private compiledTier: number;
    // private counters: AtomicLong[];
    // private included: boolean;
    // private thread: Thread;
    bytecodeNode(): BytecodeNode;
    compiledTier(): number;
    counters(): AtomicLong[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    included(): boolean;
    thread(): Thread;
    toString(): string;
}