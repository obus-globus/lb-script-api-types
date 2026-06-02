import type { RawCollationKey } from '../../../../com/ibm/icu/text/RawCollationKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class CollationKey extends Object implements Comparable<CollationKey> {
    constructor(arg0: string, arg1: RawCollationKey)
    constructor(arg0: string, arg1: number[])
    private constructor(arg0: string, arg1: number[], arg2: number)
    // private m_hashCode_: number;
    // private m_key_: number[];
    // private m_length_: number;
    // private m_source_: string;
    compareTo(arg0: CollationKey): number;
    equals(arg0: CollationKey): boolean;
    equals(arg0: Object | null): boolean;
    getBound(arg0: number, arg1: number): CollationKey;
    // private getLength(): number;
    getSourceString(): string;
    hashCode(): number;
    merge(arg0: CollationKey): CollationKey;
    toByteArray(): number[];
}