import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Trie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie.d.ts'
import type { RangeValueIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/RangeValueIterator.d.ts'
import type { RangeValueIterator$Element } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/RangeValueIterator$Element.d.ts'
export class TrieIterator extends Object implements RangeValueIterator {
    constructor(trie: Trie)
    // private m_currentCodepoint_: number;
    // private m_initialValue_: number;
    // private m_nextBlockIndex_: number;
    // private m_nextBlock_: number;
    // private m_nextCodepoint_: number;
    // private m_nextIndex_: number;
    // private m_nextTrailIndexOffset_: number;
    // private m_nextValue_: number;
    // private m_trie_: Trie;
    // private calculateNextBMPElement(element: RangeValueIterator$Element): boolean;
    // private calculateNextSupplementaryElement(element: RangeValueIterator$Element): void;
    // private checkBlock(currentValue: number): boolean;
    // private checkBlockDetail(currentValue: number): boolean;
    // private checkNullNextTrailIndex(): boolean;
    // private checkTrailBlock(currentValue: number): boolean;
    extract(value: number): number;
    next(element: RangeValueIterator$Element): boolean;
    reset(): void;
    // private setResult(element: RangeValueIterator$Element, start: number, limit: number, value: number): void;
}