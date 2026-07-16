import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonEncoder } from '../../../../kotlinx/serialization/json/JsonEncoder.d.ts'
export class PolymorphicKt extends Object {
    static checkKind(kind: SerialKind): void;
    static classDiscriminator(self: SerialDescriptor, json: Json): string;
    static decodeSerializableValuePolymorphic<T extends unknown>(self: JsonDecoder, deserializer: DeserializationStrategy<T>, path: () => string): T;
    static encodePolymorphically<T extends unknown>(self: JsonEncoder, serializer: SerializationStrategy<T>, value: T, ifPolymorphic: (param0: string, param1: string) => void): void;
    static throwJsonElementPolymorphicException(serialName: string | null, element: JsonElement): void;
}