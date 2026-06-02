import type { ImmutableBiMap$Builder } from '../../../../com/google/common/collect/ImmutableBiMap$Builder.d.ts'
import type { ImmutableMap$SerializedForm } from '../../../../com/google/common/collect/ImmutableMap$SerializedForm.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableBiMap$SerializedForm<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMap$SerializedForm<K, V> {
    constructor(bimap: Map<K, V>)
    makeBuilder(size: number): ImmutableBiMap$Builder<K, V>;
}