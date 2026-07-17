import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ImmutableBiMap$Builder } from '../../../../com/google/common/collect/ImmutableBiMap$Builder.d.ts'
import type { ImmutableMap$SerializedForm } from '../../../../com/google/common/collect/ImmutableMap$SerializedForm.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableBiMap$SerializedForm<K extends unknown, V extends unknown> extends ImmutableMap$SerializedForm<K, V> {
    constructor(bimap: JavaMap<K, V>)
    makeBuilder(size: number): ImmutableBiMap$Builder<K, V>;
}