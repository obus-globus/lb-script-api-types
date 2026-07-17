import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { MapLikeSerializer } from '../../../kotlinx/serialization/internal/MapLikeSerializer.d.ts'
export class LinkedHashMapSerializer<K extends unknown, V extends unknown> extends MapLikeSerializer<K, V, JavaMap<K, V>, JavaMap<K, V>> {
    constructor(kSerializer: KSerializer<K>, vSerializer: KSerializer<V>)
    readonly descriptor: SerialDescriptor;
    protected builder(): JavaMap<K, V>;
}