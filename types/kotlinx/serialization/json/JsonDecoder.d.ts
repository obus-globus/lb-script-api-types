import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export interface JsonDecoder extends Object, CompositeDecoder, Decoder{
    readonly json: Json;
    decodeCollectionSize(descriptor: SerialDescriptor): number;
    decodeJsonElement(): JsonElement;
    decodeNullableSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T | null;
    decodeSequentially(): boolean;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
}