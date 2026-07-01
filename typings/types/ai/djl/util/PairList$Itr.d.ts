import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class PairList$Itr extends Object implements Iterator<Pair<K, V>> {
    constructor(null_: Pair<Object, Object>[])
    // private cursor: number;
    // private size: number;
    forEachRemaining<K extends unknown, V extends unknown>(arg0: (param0: Pair<K, V>) => void): void;
    hasNext(): boolean;
    next<K extends unknown, V extends unknown>(): Pair<K, V>;
}