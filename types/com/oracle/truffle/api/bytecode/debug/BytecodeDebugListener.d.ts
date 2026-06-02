import type { Instruction } from '../../../../../../com/oracle/truffle/api/bytecode/Instruction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface BytecodeDebugListener extends Object{
    afterInstructionExecute(instruction: Instruction, exception: Throwable): void;
    afterRootExecute(leaveInstruction: Instruction, returnValue: Object, t: Throwable): void;
    beforeInstructionExecute(instruction: Instruction): void;
    beforeRootExecute(enterInstruction: Instruction): void;
    onBytecodeStackTransition(source: Instruction, target: Instruction): void;
    onInvalidateInstruction(before: Instruction, after: Instruction): void;
    onQuicken(before: Instruction, after: Instruction): void;
    onQuickenOperand(baseInstruction: Instruction, operandIndex: number, operandBefore: Instruction, operandAfter: Instruction): void;
    onSpecialize(instruction: Instruction, specialization: string): void;
}