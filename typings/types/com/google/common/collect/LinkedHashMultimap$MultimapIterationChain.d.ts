import type { LinkedHashMultimap$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { LinkedHashMultimap$ValueEntry } from '../../../../com/google/common/collect/LinkedHashMultimap$ValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinkedHashMultimap$MultimapIterationChain<K extends unknown, V extends unknown> extends Object {
    private constructor()
    constructor(arg0: LinkedHashMultimap$1)
    // private firstEntry: LinkedHashMultimap$ValueEntry<K, V>;
    // private lastEntry: LinkedHashMultimap$ValueEntry<K, V>;
    append(newEntry: LinkedHashMultimap$ValueEntry<K, V>): void;
    delete(entry: LinkedHashMultimap$ValueEntry<K, V>): void;
    succeeds(pred: LinkedHashMultimap$ValueEntry<K, V>, succ: LinkedHashMultimap$ValueEntry<K, V>): void;
}