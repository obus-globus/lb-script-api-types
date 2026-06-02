import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractCollectionSerializer } from '../../../kotlinx/serialization/internal/AbstractCollectionSerializer.d.ts'
export class MapLikeSerializer<Key extends Object | number | string | boolean, Value extends Object | number | string | boolean, Collection extends Object | number | string | boolean, Builder extends Map<Key, Value>> extends AbstractCollectionSerializer<Map$Entry<Key, Value>, Collection, Builder> {
    protected constructor(keySerializer: KSerializer<Key>, valueSerializer: KSerializer<Value>)
    readonly descriptor: SerialDescriptor;
    readonly keySerializer: KSerializer<Key>;
    readonly valueSerializer: KSerializer<Value>;
    protected readAll(decoder: CompositeDecoder, builder: Builder, startIndex: number, size: number): void;
    protected readElement(decoder: CompositeDecoder, index: number, builder: Builder, checkIndex: boolean): void;
    serialize(encoder: Encoder, value: Collection): void;
}