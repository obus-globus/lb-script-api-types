import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { AbstractJsonTreeDecoder } from '../../../../kotlinx/serialization/json/internal/AbstractJsonTreeDecoder.d.ts'
export class JsonPrimitiveDecoder extends AbstractJsonTreeDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(json: Json, value: JsonElement, polymorphicDiscriminator: string | null)
    readonly value: JsonElement;
    protected currentElement(tag: string): JsonElement;
    decodeElementIndex(descriptor: SerialDescriptor): number;
}