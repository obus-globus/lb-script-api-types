import type { ImmutableMap$SerializedForm } from '../../../../com/google/common/collect/ImmutableMap$SerializedForm.d.ts'
import type { ImmutableSortedMap$Builder } from '../../../../com/google/common/collect/ImmutableSortedMap$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSortedMap$SerializedForm<K extends unknown, V extends unknown> extends ImmutableMap$SerializedForm<K, V> {
    constructor(sortedMap: Map<K, V>)
    // private comparator: (param0: K, param1: K) => number;
    makeBuilder(size: number): ImmutableSortedMap$Builder<K, V>;
}