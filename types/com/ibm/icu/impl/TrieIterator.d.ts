import type { Trie } from '../../../../com/ibm/icu/impl/Trie.d.ts'
import type { RangeValueIterator } from '../../../../com/ibm/icu/util/RangeValueIterator.d.ts'
import type { RangeValueIterator$Element } from '../../../../com/ibm/icu/util/RangeValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TrieIterator extends Object implements RangeValueIterator {
    constructor(arg0: Trie)
    // private m_currentCodepoint_: number;
    // private m_initialValue_: number;
    // private m_nextBlockIndex_: number;
    // private m_nextBlock_: number;
    // private m_nextCodepoint_: number;
    // private m_nextIndex_: number;
    // private m_nextTrailIndexOffset_: number;
    // private m_nextValue_: number;
    // private m_trie_: Trie;
    // private calculateNextBMPElement(arg0: RangeValueIterator$Element): boolean;
    // private calculateNextSupplementaryElement(arg0: RangeValueIterator$Element): void;
    // private checkBlock(arg0: number): boolean;
    // private checkBlockDetail(arg0: number): boolean;
    // private checkNullNextTrailIndex(): boolean;
    // private checkTrailBlock(arg0: number): boolean;
    extract(arg0: number): number;
    next(arg0: RangeValueIterator$Element): boolean;
    reset(): void;
    // private setResult(arg0: RangeValueIterator$Element, arg1: number, arg2: number, arg3: number): void;
}