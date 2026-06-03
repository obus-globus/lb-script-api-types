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
    static checkKind(paramarg0: SerialKind): void;
    static classDiscriminator(paramarg0: SerialDescriptor, paramarg1: Json): string;
    static decodeSerializableValuePolymorphic(paramarg0: JsonDecoder, paramarg1: DeserializationStrategy<Object>, paramarg2: () => string): Object | null;
    static encodePolymorphically(paramarg0: JsonEncoder, paramarg1: SerializationStrategy<Object>, paramarg2: Object | null, paramarg3: (param0: Object | null, param1: Object | null) => void): void;
    static throwJsonElementPolymorphicException(paramarg0: string, paramarg1: JsonElement): void;
}