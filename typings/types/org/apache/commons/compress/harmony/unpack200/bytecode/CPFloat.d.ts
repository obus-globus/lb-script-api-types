import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { CPConstantNumber } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPConstantNumber.d.ts'
export class CPFloat extends CPConstantNumber {
    static CP_Class: number;
    static CP_Double: number;
    static CP_Fieldref: number;
    static CP_Float: number;
    static CP_Integer: number;
    static CP_InterfaceMethodref: number;
    static CP_Long: number;
    static CP_Methodref: number;
    static CP_NameAndType: number;
    static CP_String: number;
    static CP_UTF8: number;
    constructor(arg0: number, arg1: number)
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}