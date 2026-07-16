import type { CollationIterator } from '../../../../../com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { CollationKeys$LevelCallback } from '../../../../../com/ibm/icu/impl/coll/CollationKeys$LevelCallback.d.ts'
import type { CollationKeys$SortKeyByteSink } from '../../../../../com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
import type { CollationSettings } from '../../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationKeys extends Object {
    static SIMPLE_LEVEL_FALLBACK: CollationKeys$LevelCallback;
    static writeSortKeyUpToQuaternary(paramarg0: CollationIterator, paramarg1: boolean[], paramarg2: CollationSettings, paramarg3: CollationKeys$SortKeyByteSink, paramarg4: number, paramarg5: CollationKeys$LevelCallback, paramarg6: boolean): void;
    private constructor()
}