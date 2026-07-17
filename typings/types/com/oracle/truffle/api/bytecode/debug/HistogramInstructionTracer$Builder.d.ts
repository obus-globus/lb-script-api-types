import type { BytecodeDescriptor } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { HistogramInstructionTracer } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer.d.ts'
import type { HistogramInstructionTracer$GroupClause } from '../../../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer$GroupClause.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HistogramInstructionTracer$Builder extends Object {
    private constructor()
    // private filter: (param0: BytecodeNode) => boolean;
    // private groups: (param0: BytecodeNode, param1: Thread, param2: number) => Object[];
    build(descriptor: BytecodeDescriptor<any, any, any>): HistogramInstructionTracer;
    filter(filterClause: (param0: BytecodeNode) => boolean): HistogramInstructionTracer$Builder;
    groupBy(clause: (param0: BytecodeNode, param1: Thread, param2: number) => Object): HistogramInstructionTracer$Builder;
}