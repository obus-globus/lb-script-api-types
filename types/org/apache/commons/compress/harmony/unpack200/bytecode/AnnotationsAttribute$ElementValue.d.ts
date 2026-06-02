import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class AnnotationsAttribute$ElementValue extends Object {
    constructor(arg0: number, arg1: Object)
    // private constantValueIndex: number;
    // private tag: number;
    // private value: Object;
    getClassFileEntries(): Object[];
    getLength(): number;
    resolve(arg0: ClassConstantPool): void;
    writeBody(arg0: DataOutputStream): void;
}