import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationsAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute.d.ts'
import type { AnnotationsAttribute$ElementValue } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute$ElementValue.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class AnnotationDefaultAttribute extends AnnotationsAttribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: AnnotationsAttribute$ElementValue)
    // private elementValue: AnnotationsAttribute$ElementValue;
    equals(arg0: Object | null): boolean;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}