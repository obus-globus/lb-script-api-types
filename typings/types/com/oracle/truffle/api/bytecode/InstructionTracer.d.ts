import type { BytecodeDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { InstructionTracer$InstructionAccess } from '../../../../../com/oracle/truffle/api/bytecode/InstructionTracer$InstructionAccess.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InstructionTracer extends Object{
    getExclusiveBytecodeDescriptor(): BytecodeDescriptor<any, any, any>;
    onInstructionEnter(access: InstructionTracer$InstructionAccess, bytecode: BytecodeNode, bytecodeIndex: number, frame: Frame): void;
}