import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { ClassRefForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ClassRefForm.d.ts'
export class NarrowClassRefForm extends ClassRefForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    constructor(arg0: number, arg1: string, arg2: number[], arg3: boolean)
    nestedMustStartClassPool(): boolean;
    setNestedEntries(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
}