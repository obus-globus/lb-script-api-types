import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationsAttribute$Annotation } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute$Annotation.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class RuntimeVisibleorInvisibleParameterAnnotationsAttribute$ParameterAnnotation extends Object {
    constructor(arg0: AnnotationsAttribute$Annotation[])
    // private annotations: AnnotationsAttribute$Annotation[];
    getClassFileEntries(): Object[];
    getLength(): number;
    resolve(arg0: ClassConstantPool): void;
    writeBody(arg0: DataOutputStream): void;
}