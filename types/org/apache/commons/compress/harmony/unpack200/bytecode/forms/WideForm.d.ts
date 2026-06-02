import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { VariableInstructionForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/VariableInstructionForm.d.ts'
export class WideForm extends VariableInstructionForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string)
    setByteCodeOperands(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
    setByteCodeOperandsFormat1(arg0: number, arg1: ByteCode, arg2: OperandManager, arg3: number): void;
    setByteCodeOperandsFormat2(arg0: number, arg1: ByteCode, arg2: OperandManager, arg3: number): void;
}