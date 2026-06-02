import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { BCIRenumberedAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/BCIRenumberedAttribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class LocalVariableTableAttribute extends BCIRenumberedAttribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: number, arg1: number[], arg2: number[], arg3: CPUTF8[], arg4: CPUTF8[], arg5: number[])
    readonly codeLength: number;
    // private descriptorIndexes: number[];
    // private descriptors: CPUTF8[];
    // private indexes: number[];
    // private lengths: number[];
    // private localVariableTableLength: number;
    // private nameIndexes: number[];
    // private names: CPUTF8[];
    // private startPcs: number[];
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    getStartPCs(): number[];
    renumber(arg0: number[]): void;
    resolve(arg0: ClassConstantPool): void;
    setCodeLength(arg0: number): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}