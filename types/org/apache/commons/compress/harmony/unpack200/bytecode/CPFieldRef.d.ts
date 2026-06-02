import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPNameAndType } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPNameAndType.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { ConstantPoolEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
export class CPFieldRef extends ConstantPoolEntry {
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
    // private className: CPClass;
    // private classNameIndex: number;
    // private hashCodeComputed: boolean;
    // private nameAndType: CPNameAndType;
    // private nameAndTypeIndex: number;
    equals(arg0: Object | null): boolean;
    // private generateHashCode(): void;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}