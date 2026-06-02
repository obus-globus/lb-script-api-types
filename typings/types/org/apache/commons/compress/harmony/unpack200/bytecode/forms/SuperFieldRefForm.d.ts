import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { ClassSpecificReferenceForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ClassSpecificReferenceForm.d.ts'
export class SuperFieldRefForm extends ClassSpecificReferenceForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    context(arg0: OperandManager): string;
    getOffset(arg0: OperandManager): number;
    getPoolID(): number;
}