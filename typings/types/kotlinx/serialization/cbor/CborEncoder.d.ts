import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Cbor } from '../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export interface CborEncoder extends Object, Encoder{
    readonly cbor: Cbor;
    beginCollection(descriptor: SerialDescriptor, collectionSize: number): CompositeEncoder;
    encodeNotNullMark(): void;
    encodeNullableSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
}