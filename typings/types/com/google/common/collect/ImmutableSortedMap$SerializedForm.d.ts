import type { ImmutableMap$SerializedForm } from '../../../../com/google/common/collect/ImmutableMap$SerializedForm.d.ts'
import type { ImmutableSortedMap$Builder } from '../../../../com/google/common/collect/ImmutableSortedMap$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSortedMap$SerializedForm<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMap$SerializedForm<K, V> {
    constructor(sortedMap: Map<K, V>)
    // private comparator: (param0: Object) => boolean;
    makeBuilder(size: number): ImmutableSortedMap$Builder<K, V>;
}