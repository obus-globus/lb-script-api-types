import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class KeyValueSerializer<K extends unknown, V extends unknown, R extends unknown> extends Object implements KSerializer<R> {
    protected constructor(keySerializer: KSerializer<K>, valueSerializer: KSerializer<V>)
    // private keySerializer: KSerializer<K>;
    // private /*not mapped: */ getKeySerializer(): KSerializer<K>;
    // private valueSerializer: KSerializer<V>;
    // private /*not mapped: */ getValueSerializer(): KSerializer<V>;
    deserialize(decoder: Decoder): R;
    serialize(encoder: Encoder, value: R): void;
    protected toResult(key: K, value: V): R;
}