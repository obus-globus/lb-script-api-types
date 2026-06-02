import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export abstract class Attribute extends ClassFileEntry {
    constructor(arg0: CPUTF8)
    // private attributeName: CPUTF8;
    // private attributeNameIndex: number;
    doWrite(arg0: DataOutputStream): void;
    equals(arg0: Object | null): boolean;
    getAttributeName(): CPUTF8;
    getLength(): number;
    getLengthIncludingHeader(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    hasBCIRenumbering(): boolean;
    hashCode(): number;
    isSourceFileAttribute(): boolean;
    resolve(arg0: ClassConstantPool): void;
    writeBody(arg0: DataOutputStream): void;
}