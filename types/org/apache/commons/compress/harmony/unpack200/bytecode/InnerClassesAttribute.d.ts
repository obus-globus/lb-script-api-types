import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { ConstantPoolEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
import type { InnerClassesAttribute$InnerClassesEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/InnerClassesAttribute$InnerClassesEntry.d.ts'
export class InnerClassesAttribute extends Attribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: string)
    // private innerClasses: InnerClassesAttribute$InnerClassesEntry[];
    // private nestedClassFileEntries: ConstantPoolEntry[];
    addInnerClassesEntry(arg0: CPClass, arg1: CPClass, arg2: CPUTF8, arg3: number): void;
    // private addInnerClassesEntry(arg0: InnerClassesAttribute$InnerClassesEntry): void;
    equals(arg0: Object | null): boolean;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}