import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { CPConstant } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPConstant.d.ts'
export abstract class CPConstantNumber extends CPConstant {
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
    getNumber(): Number;
}