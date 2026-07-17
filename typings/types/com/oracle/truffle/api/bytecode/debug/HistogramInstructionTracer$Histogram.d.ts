import type { BytecodeDescriptor } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { InstructionDescriptor } from '../../../../../../com/oracle/truffle/api/bytecode/InstructionDescriptor.d.ts'
import type { HistogramInstructionTracer$Counters } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$Counters.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { LongSummaryStatistics } from '../../../../../../java/util/LongSummaryStatistics.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HistogramInstructionTracer$Histogram extends Object {
    private constructor(descriptor: BytecodeDescriptor<any, any, any>, counters: HistogramInstructionTracer$Counters, reset: boolean)
    // private data: Map<InstructionDescriptor, number>;
    // private descriptor: BytecodeDescriptor<any, any, any>;
    readonly instructionsExecuted: number;
    // private subGroups: Map<Object, HistogramInstructionTracer$Histogram>;
    dump(): string;
    getCounters(): Map<InstructionDescriptor, number>;
    getGroups(): Map<Object, HistogramInstructionTracer$Histogram>;
    getInstructionsExecuted(): number;
    getStatistics(): Map<InstructionDescriptor, LongSummaryStatistics>;
    print(out: PrintStream): void;
    // private printRecursive(out: PrintStream, depth: number, globalTotal: number, formatString: string): void;
    // private sumCounters(statistics: Map<InstructionDescriptor, number>, values: AtomicLong[], reset: boolean): number;
}