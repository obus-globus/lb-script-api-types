import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { KeyValueSerializer } from '../../../kotlinx/serialization/internal/KeyValueSerializer.d.ts'
export class PairSerializer<K extends unknown, V extends unknown> extends KeyValueSerializer<K, V, Pair<K, V>> {
    constructor(keySerializer: KSerializer<K>, valueSerializer: KSerializer<V>)
    readonly descriptor: SerialDescriptor;
    protected toResult(key: K, value: V): Pair<K, V>;
}