import type { ByteCodeForm } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
export abstract class VariableInstructionForm extends ByteCodeForm {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string)
    setRewrite2Bytes(arg0: number, arg1: number, arg2: number[]): void;
    setRewrite4Bytes(arg0: number, arg1: number, arg2: number[]): void;
    setRewrite4Bytes(arg0: number, arg1: number[]): void;
}