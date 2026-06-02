import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
export abstract class ReferenceForm extends ByteCodeForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    getOffset(arg0: OperandManager): number;
    getPoolID(): number;
    setByteCodeOperands(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
    setNestedEntries(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
}