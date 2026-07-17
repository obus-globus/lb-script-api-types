import type { BytecodeDescriptor } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { InstructionTracer } from '../../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { InstructionTracer$InstructionAccess } from '../../../../../../com/oracle/truffle/api/bytecode/InstructionTracer$InstructionAccess.d.ts'
import type { HistogramInstructionTracer$Builder } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$Builder.d.ts'
import type { HistogramInstructionTracer$Counters } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$Counters.d.ts'
import type { HistogramInstructionTracer$GroupClause } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$GroupClause.d.ts'
import type { HistogramInstructionTracer$Histogram } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$Histogram.d.ts'
import type { HistogramInstructionTracer$LastTraceCache } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$LastTraceCache.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HistogramInstructionTracer extends Object implements InstructionTracer {
    static newBuilder(): HistogramInstructionTracer$Builder;
    constructor(descriptor: BytecodeDescriptor<any, any, any>, bytecodeFilter: (param0: BytecodeNode) => boolean, groupClauses: (param0: BytecodeNode, param1: Thread, param2: number) => Object[])
    // private cache: HistogramInstructionTracer$LastTraceCache;
    // private counters: HistogramInstructionTracer$Counters;
    // private descriptor: BytecodeDescriptor<any, any, any>;
    // private filterClause: (param0: BytecodeNode) => boolean;
    // private groupClauses: (param0: BytecodeNode, param1: Thread, param2: number) => Object[];
    // private rootCounters: AtomicLong[];
    dumpHistogram(): string;
    getExclusiveBytecodeDescriptor(): BytecodeDescriptor<any, any, any>;
    getHistogram(): HistogramInstructionTracer$Histogram;
    getHistogramAndReset(): HistogramInstructionTracer$Histogram;
    onInstructionEnter(access: InstructionTracer$InstructionAccess, bytecode: BytecodeNode, bytecodeIndex: number, frame: Frame): void;
    printHistogram(out: PrintStream): void;
    reset(): void;
    // private updateCache(bytecode: BytecodeNode, compiledTier: number): HistogramInstructionTracer$LastTraceCache;
}