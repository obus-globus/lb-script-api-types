import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { CodeAttribute } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CodeAttribute.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { VariableInstructionForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/VariableInstructionForm.d.ts'
export abstract class SwitchForm extends VariableInstructionForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string)
    fixUpByteCodeTargets(arg0: ByteCode, arg1: CodeAttribute): void;
}