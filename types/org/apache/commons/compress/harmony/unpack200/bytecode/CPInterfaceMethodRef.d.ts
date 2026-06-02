import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPNameAndType } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPNameAndType.d.ts'
import type { CPRef } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPRef.d.ts'
export class CPInterfaceMethodRef extends CPRef {
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
    constructor(arg0: CPClass, arg1: CPNameAndType, arg2: number)
    // private cachedHashCode: number;
    // private hashCodeComputed: boolean;
    // private generateHashCode(): void;
    hashCode(): number;
    invokeInterfaceCount(): number;
}