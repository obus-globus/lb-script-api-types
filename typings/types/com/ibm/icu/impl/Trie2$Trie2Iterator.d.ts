import type { Trie2$Range } from '../../../../com/ibm/icu/impl/Trie2$Range.d.ts'
import type { Trie2$ValueMapper } from '../../../../com/ibm/icu/impl/Trie2$ValueMapper.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Trie2$Trie2Iterator extends Object implements Iterator<Trie2$Range> {
    constructor(null_: Trie2$Range[], arg1: Trie2$ValueMapper)
    constructor(null_: Trie2$Range[], arg1: string, arg2: Trie2$ValueMapper)
    // private doLeadSurrogates: boolean;
    // private doingCodePoints: boolean;
    // private limitCP: number;
    // private mapper: Trie2$ValueMapper;
    // private nextStart: number;
    // private returnValue: Trie2$Range;
    forEachRemaining(arg0: (param0: Trie2$Range) => void): void;
    hasNext(): boolean;
    next(): Trie2$Range;
    // private rangeEndLS(arg0: string): number;
    remove(): void;
}