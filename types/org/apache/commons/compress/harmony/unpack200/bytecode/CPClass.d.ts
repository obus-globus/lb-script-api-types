import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { ConstantPoolEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
export class CPClass extends ConstantPoolEntry {
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
    constructor(arg0: CPUTF8, arg1: number)
    // private cachedHashCode: number;
    // private hashCodeComputed: boolean;
    // private index: number;
    name: string;
    // private utf8: CPUTF8;
    equals(arg0: Object | null): boolean;
    // private generateHashCode(): void;
    getName(): string;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}