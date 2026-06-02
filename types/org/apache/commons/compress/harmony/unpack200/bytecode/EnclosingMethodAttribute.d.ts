import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPNameAndType } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPNameAndType.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class EnclosingMethodAttribute extends Attribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: CPClass, arg1: CPNameAndType)
    // private classIndex: number;
    // private cpClass: CPClass;
    // private method: CPNameAndType;
    // private methodIndex: number;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}