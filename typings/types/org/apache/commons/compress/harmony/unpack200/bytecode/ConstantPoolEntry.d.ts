import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export abstract class ConstantPoolEntry extends ClassFileEntry {
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
    globalIndex: number;
    tag: number;
    doWrite(arg0: DataOutputStream): void;
    equals(arg0: Object | null): boolean;
    getGlobalIndex(): number;
    getTag(): number;
    hashCode(): number;
    writeBody(arg0: DataOutputStream): void;
}