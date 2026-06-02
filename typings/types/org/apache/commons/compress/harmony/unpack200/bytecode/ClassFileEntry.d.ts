import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export abstract class ClassFileEntry extends Object {
    constructor()
    // private resolved: boolean;
    doWrite(arg0: DataOutputStream): void;
    equals(arg0: Object | null): boolean;
    getNestedClassFileEntries(): ClassFileEntry[];
    hashCode(): number;
    objectHashCode(): number;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    write(arg0: DataOutputStream): void;
}