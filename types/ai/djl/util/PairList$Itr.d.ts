import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class PairList$Itr extends Object implements Iterator<Pair<K, V>> {
    constructor(null_: PairList$Itr)
    // private cursor: number;
    // private size: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Pair<K, V>;
}