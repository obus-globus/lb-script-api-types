import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BCIRenumberedAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/BCIRenumberedAttribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class LineNumberTableAttribute extends BCIRenumberedAttribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: number, arg1: number[], arg2: number[])
    // private lineNumberTableLength: number;
    // private lineNumbers: number[];
    // private startPcs: number[];
    equals(arg0: Object | null): boolean;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    getStartPCs(): number[];
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}