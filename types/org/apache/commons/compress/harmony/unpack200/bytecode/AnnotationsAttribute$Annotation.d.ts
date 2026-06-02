import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationsAttribute$ElementValue } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute$ElementValue.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class AnnotationsAttribute$Annotation extends Object {
    constructor(arg0: number, arg1: CPUTF8, arg2: CPUTF8[], arg3: AnnotationsAttribute$ElementValue[])
    // private elementNames: CPUTF8[];
    // private elementValues: AnnotationsAttribute$ElementValue[];
    // private nameIndexes: number[];
    // private numPairs: number;
    // private type: CPUTF8;
    // private typeIndex: number;
    getClassFileEntries(): Object[];
    getLength(): number;
    resolve(arg0: ClassConstantPool): void;
    writeBody(arg0: DataOutputStream): void;
}