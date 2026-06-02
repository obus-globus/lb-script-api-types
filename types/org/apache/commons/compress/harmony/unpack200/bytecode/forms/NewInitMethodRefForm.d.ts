import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { InitMethodReferenceForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/InitMethodReferenceForm.d.ts'
export class NewInitMethodRefForm extends InitMethodReferenceForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    context(arg0: OperandManager): string;
    setNestedEntries(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
}