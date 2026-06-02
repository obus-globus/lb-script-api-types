import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class InnerClassesAttribute$InnerClassesEntry extends Object {
    constructor(arg0: CPClass, arg1: CPClass, arg2: CPUTF8, arg3: number)
    // private innerClassAccessFlags: number;
    // private innerClassInfo: CPClass;
    // private innerClassInfoIndex: number;
    // private innerClassName: CPUTF8;
    // private innerNameIndex: number;
    // private outerClassInfo: CPClass;
    // private outerClassInfoIndex: number;
    resolve(arg0: ClassConstantPool): void;
    write(arg0: DataOutputStream): void;
}