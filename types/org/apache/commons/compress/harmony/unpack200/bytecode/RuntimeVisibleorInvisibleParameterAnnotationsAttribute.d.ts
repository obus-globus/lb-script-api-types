import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { AnnotationsAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { RuntimeVisibleorInvisibleParameterAnnotationsAttribute$ParameterAnnotation } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/RuntimeVisibleorInvisibleParameterAnnotationsAttribute$ParameterAnnotation.d.ts'
export class RuntimeVisibleorInvisibleParameterAnnotationsAttribute extends AnnotationsAttribute {
    constructor(arg0: CPUTF8, arg1: RuntimeVisibleorInvisibleParameterAnnotationsAttribute$ParameterAnnotation[])
    // private parameterAnnotations: RuntimeVisibleorInvisibleParameterAnnotationsAttribute$ParameterAnnotation[];
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}