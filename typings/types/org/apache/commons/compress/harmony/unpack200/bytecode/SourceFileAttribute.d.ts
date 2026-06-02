import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class SourceFileAttribute extends Attribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: CPUTF8)
    // private name: CPUTF8;
    // private nameIndex: number;
    equals(arg0: Object | null): boolean;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    isSourceFileAttribute(): boolean;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}