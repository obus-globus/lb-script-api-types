import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class CPMember extends ClassFileEntry {
    constructor(arg0: CPUTF8, arg1: CPUTF8, arg2: number, arg3: Attribute[])
    // private attributes: Attribute[];
    // private descriptor: CPUTF8;
    // private descriptorIndex: number;
    // private flags: number;
    // private name: CPUTF8;
    // private nameIndex: number;
    doWrite(arg0: DataOutputStream): void;
    equals(arg0: Object | null): boolean;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
}