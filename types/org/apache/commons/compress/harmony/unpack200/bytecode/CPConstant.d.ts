import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConstantPoolEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
export abstract class CPConstant extends ConstantPoolEntry {
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
    constructor(arg0: number, arg1: Object, arg2: number)
    // private value: Object;
    equals(arg0: Object | null): boolean;
    getValue(): Object;
    hashCode(): number;
}