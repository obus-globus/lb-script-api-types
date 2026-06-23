import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Maps$EntryTransformer } from '../../../../com/google/common/collect/Maps$EntryTransformer.d.ts'
import type { Multimaps$TransformedEntriesMultimap } from '../../../../com/google/common/collect/Multimaps$TransformedEntriesMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$TransformedEntriesListMultimap<K extends unknown, V1 extends unknown, V2 extends unknown> extends Multimaps$TransformedEntriesMultimap<K, V1, V2> implements ListMultimap<K, V2> {
    constructor(fromMultimap: ListMultimap<K, V1>, transformer: (param0: K, param1: V1) => V2)
    get(key: K): V2[];
    removeAll(key: Object): V2[];
    replaceValues(key: K, values: V2[]): V2[];
    transform(key: K, values: V1[]): V2[];
}