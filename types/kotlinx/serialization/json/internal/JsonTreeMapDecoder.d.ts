import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonTreeDecoder } from '../../../../kotlinx/serialization/json/internal/JsonTreeDecoder.d.ts'
export class JsonTreeMapDecoder extends JsonTreeDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(json: Json, value: JsonObject)
    // private keys: string[];
    // private position: number;
    // private size: number;
    readonly value: JsonObject;
    protected currentElement(tag: string): JsonElement;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    protected elementName(descriptor: SerialDescriptor, index: number): string;
    endStructure(descriptor: SerialDescriptor): void;
}