import type { Trie2$Range } from '../../../../com/ibm/icu/impl/Trie2$Range.d.ts'
import type { RangeValueIterator } from '../../../../com/ibm/icu/util/RangeValueIterator.d.ts'
import type { RangeValueIterator$Element } from '../../../../com/ibm/icu/util/RangeValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UCharacter$UCharacterTypeIterator extends Object implements RangeValueIterator {
    constructor()
    // private range: Trie2$Range;
    // private trieIterator: Iterator<Trie2$Range>;
    next(arg0: RangeValueIterator$Element): boolean;
    reset(): void;
}