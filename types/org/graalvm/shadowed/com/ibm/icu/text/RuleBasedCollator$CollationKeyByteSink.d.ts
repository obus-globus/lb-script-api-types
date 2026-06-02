import type { CollationKeys$SortKeyByteSink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
import type { RawCollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RawCollationKey.d.ts'
export class RuleBasedCollator$CollationKeyByteSink extends CollationKeys$SortKeyByteSink {
    constructor(key: RawCollationKey)
    // private key_: RawCollationKey;
    AppendBeyondCapacity(bytes: number[], start: number, n: number, length: number): void;
    Resize(appendCapacity: number, length: number): boolean;
}