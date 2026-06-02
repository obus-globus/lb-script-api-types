import type { LinkedHashMultimap$ValueEntry } from '../../../../com/google/common/collect/LinkedHashMultimap$ValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinkedHashMultimap$MultimapIterationChain<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    private constructor()
    // private firstEntry: LinkedHashMultimap$ValueEntry<K, V>;
    // private lastEntry: LinkedHashMultimap$ValueEntry<K, V>;
    append(newEntry: LinkedHashMultimap$ValueEntry<K, V>): void;
    delete(entry: LinkedHashMultimap$ValueEntry<K, V>): void;
    succeeds(pred: LinkedHashMultimap$ValueEntry<K, V>, succ: LinkedHashMultimap$ValueEntry<K, V>): void;
}