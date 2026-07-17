import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Instruction } from '../../../../../com/oracle/truffle/api/bytecode/Instruction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InstructionTracer$InstructionAccess extends Object {
    constructor(token: Object)
    getTracedInstruction(bytecode: BytecodeNode, bytecodeIndex: number): Instruction;
    getTracedOperationCode(bytecode: BytecodeNode, bytecodeIndex: number): number;
}