import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { RawCollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RawCollationKey.d.ts'
export class CollationKey extends Object implements Comparable<CollationKey> {
    constructor(source: string, key: number[])
    private constructor(source: string, key: number[], length: number)
    constructor(source: string, key: RawCollationKey)
    // private m_hashCode_: number;
    // private m_key_: number[];
    // private m_length_: number;
    // private m_source_: string;
    compareTo(target: CollationKey): number;
    equals(target: Object | null): boolean;
    equals(target: CollationKey): boolean;
    getBound(boundType: number, noOfLevels: number): CollationKey;
    // private getLength(): number;
    getSourceString(): string;
    hashCode(): number;
    merge(source: CollationKey): CollationKey;
    toByteArray(): number[];
}