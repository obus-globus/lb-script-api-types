import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { PrintInstructionTracer } from '../../../../../../com/oracle/truffle/api/bytecode/debug/PrintInstructionTracer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrintInstructionTracer$Builder extends Object {
    private constructor(out: (param0: string) => void)
    // private filter: (param0: BytecodeNode) => boolean;
    // private out: (param0: string) => void;
    build(): PrintInstructionTracer;
    filter(filterClause: (param0: BytecodeNode) => boolean): PrintInstructionTracer$Builder;
}