import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { CollationKeys$LevelCallback } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationKeys$LevelCallback.d.ts'
import type { CollationKeys$SortKeyByteSink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationKeys$SortKeyByteSink.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
export class CollationKeys extends Object {
    static SIMPLE_LEVEL_FALLBACK: CollationKeys$LevelCallback;
    static writeSortKeyUpToQuaternary(paramiter: CollationIterator, paramcompressibleBytes: (Object | null)[], paramsettings: CollationSettings, paramsink: CollationKeys$SortKeyByteSink, paramminLevel: number, paramcallback: CollationKeys$LevelCallback, parampreflight: boolean): void;
    private constructor()
}