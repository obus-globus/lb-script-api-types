import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Trie2$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie2$Range.d.ts'
import type { Trie2$ValueMapper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie2$ValueMapper.d.ts'
export class Trie2$Trie2Iterator extends Object implements Iterator<Trie2$Range> {
    constructor(null_: Trie2$Trie2Iterator, leadSurrogate: string, vm: Trie2$ValueMapper)
    constructor(null_: Trie2$Trie2Iterator, vm: Trie2$ValueMapper)
    // private doLeadSurrogates: boolean;
    // private doingCodePoints: boolean;
    // private limitCP: number;
    // private mapper: Trie2$ValueMapper;
    // private nextStart: number;
    // private returnValue: Trie2$Range;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Trie2$Range;
    // private rangeEndLS(startingLS: string): number;
    remove(): void;
}