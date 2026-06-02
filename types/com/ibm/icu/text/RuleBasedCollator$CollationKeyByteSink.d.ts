import type { CollationKeys$SortKeyByteSink } from '../../../../com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
import type { RawCollationKey } from '../../../../com/ibm/icu/text/RawCollationKey.d.ts'
export class RuleBasedCollator$CollationKeyByteSink extends CollationKeys$SortKeyByteSink {
    constructor(arg0: RawCollationKey)
    // private key_: RawCollationKey;
    AppendBeyondCapacity(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    Resize(arg0: number, arg1: number): boolean;
}