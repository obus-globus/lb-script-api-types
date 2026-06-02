import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BCIRenumberedAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/BCIRenumberedAttribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class NewAttribute extends BCIRenumberedAttribute {
    constructor(arg0: CPUTF8, arg1: number)
    // private body: Object[];
    readonly layoutIndex: number;
    // private lengths: number[];
    // private pool: ClassConstantPool;
    addBCIndex(arg0: number, arg1: number): void;
    addBCLength(arg0: number, arg1: number): void;
    addBCOffset(arg0: number, arg1: number): void;
    addInteger(arg0: number, arg1: number): void;
    addToBody(arg0: number, arg1: Object): void;
    getLayoutIndex(): number;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    getStartPCs(): number[];
    renumber(arg0: number[]): void;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}