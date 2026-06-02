import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
import type { SingleByteReferenceForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/SingleByteReferenceForm.d.ts'
export class FloatRefForm extends SingleByteReferenceForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string, arg2: number[])
    constructor(arg0: number, arg1: string, arg2: number[], arg3: boolean)
    getOffset(arg0: OperandManager): number;
    getPoolID(): number;
}