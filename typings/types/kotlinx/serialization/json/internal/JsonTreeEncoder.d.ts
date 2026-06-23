import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { AbstractJsonTreeEncoder } from '../../../../kotlinx/serialization/json/internal/AbstractJsonTreeEncoder.d.ts'
export class JsonTreeEncoder extends AbstractJsonTreeEncoder {
    constructor(json: Json, nodeConsumer: (param0: JsonElement) => void)
    // private content: { [key: string]: JsonElement };
    // private /*not mapped: */ getContent(): { [key: string]: JsonElement };
    encodeNullableSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T | null): void;
    getCurrent(): JsonElement;
    putElement(key: string, element: JsonElement): void;
}