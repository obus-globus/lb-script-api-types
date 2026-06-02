import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
export class CPUTF8 extends ConstantPoolEntry implements Comparable<Object> {
    constructor(arg0: string)
    // private string: string;
    compareTo(arg0: Object | null): number;
    getUnderlyingString(): string;
    toString(): string;
}