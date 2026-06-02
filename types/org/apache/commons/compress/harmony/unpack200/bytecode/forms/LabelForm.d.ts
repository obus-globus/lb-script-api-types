import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { CodeAttribute } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CodeAttribute.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
export class LabelForm extends ByteCodeForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    constructor(arg0: number, arg1: string, arg2: number[], arg3: boolean)
    // private widened: boolean;
    fixUpByteCodeTargets(arg0: ByteCode, arg1: CodeAttribute): void;
    setByteCodeOperands(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
}