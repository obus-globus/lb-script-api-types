import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { AbstractJsonTreeDecoder } from '../../../../kotlinx/serialization/json/internal/AbstractJsonTreeDecoder.d.ts'
export class JsonTreeDecoder extends AbstractJsonTreeDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(json: Json, value: JavaMap<any, any>, polymorphicDiscriminator: string | null, polyDescriptor: SerialDescriptor | null)
    // private forceNull: boolean;
    // private polyDescriptor: SerialDescriptor | null;
    // private position: number;
    readonly value: JavaMap<any, any>;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    protected currentElement(tag: string): JsonElement;
    currentElementOrNull(tag: string): JsonElement | null;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeNotNullMark(): boolean;
    protected elementName(descriptor: SerialDescriptor, index: number): string;
    endStructure(descriptor: SerialDescriptor): void;
    // private setForceNull(descriptor: SerialDescriptor, index: number): boolean;
}