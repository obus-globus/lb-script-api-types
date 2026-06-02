import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Trie2$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie2$Range.d.ts'
import type { RangeValueIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/RangeValueIterator.d.ts'
import type { RangeValueIterator$Element } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/RangeValueIterator$Element.d.ts'
export class UCharacter$UCharacterTypeIterator extends Object implements RangeValueIterator {
    constructor()
    // private range: Trie2$Range;
    // private trieIterator: Iterator<Trie2$Range>;
    next(element: RangeValueIterator$Element): boolean;
    reset(): void;
}