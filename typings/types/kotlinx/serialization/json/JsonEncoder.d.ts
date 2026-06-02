import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export interface JsonEncoder extends Object, CompositeEncoder, Encoder{
    readonly json: Json;
    beginCollection(descriptor: SerialDescriptor, collectionSize: number): CompositeEncoder;
    encodeJsonElement(element: JsonElement): void;
    encodeNotNullMark(): void;
    encodeNullableSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}