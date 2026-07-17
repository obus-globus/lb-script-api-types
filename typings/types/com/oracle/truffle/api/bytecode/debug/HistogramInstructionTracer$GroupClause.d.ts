import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HistogramInstructionTracer$GroupClause extends Object{
    group(bytecodeNode: BytecodeNode, thread: Thread, compilationTier: number): Object;
}