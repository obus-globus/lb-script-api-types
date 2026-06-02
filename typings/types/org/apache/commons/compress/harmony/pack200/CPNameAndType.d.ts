import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { CPSignature } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPSignature.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
export class CPNameAndType extends ConstantPoolEntry implements Comparable<Object> {
    constructor(arg0: CPUTF8, arg1: CPSignature)
    readonly name: CPUTF8;
    // private signature: CPSignature;
    compareTo(arg0: Object | null): number;
    getName(): string;
    getNameIndex(): number;
    getTypeIndex(): number;
    toString(): string;
}