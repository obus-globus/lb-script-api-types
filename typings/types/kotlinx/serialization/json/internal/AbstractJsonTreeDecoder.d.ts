import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Decoder } from '../../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { NamedValueDecoder } from '../../../../kotlinx/serialization/internal/NamedValueDecoder.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonPrimitive } from '../../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class AbstractJsonTreeDecoder extends NamedValueDecoder implements JsonDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    protected constructor(json: Json, value: JsonElement, polymorphicDiscriminator: string | null)
    // private configuration: JsonConfiguration;
    readonly json: Json;
    // private polymorphicDiscriminator: string | null;
    // private /*not mapped: */ getPolymorphicDiscriminator(): string | null;
    readonly serializersModule: SerializersModule;
    readonly value: JsonElement;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    cast<T extends JsonElement>(value: JsonElement, serialName: string, tag: string): T;
    cast<T extends JsonElement>(value: JsonElement, descriptor: SerialDescriptor): T;
    protected composeName(parentName: string, childName: string): string;
    protected currentElement(tag: string): JsonElement;
    protected currentObject(): JsonElement;
    decodeInline(descriptor: SerialDescriptor): Decoder;
    decodeJsonElement(): JsonElement;
    decodeNotNullMark(): boolean;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    protected decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    protected decodeTaggedBoolean(tag: string): boolean;
    protected decodeTaggedByte(tag: string): number;
    protected decodeTaggedChar(tag: string): string;
    protected decodeTaggedDouble(tag: string): number;
    protected decodeTaggedEnum(tag: string, enumDescriptor: SerialDescriptor): number;
    protected decodeTaggedFloat(tag: string): number;
    protected decodeTaggedInline(tag: string, inlineDescriptor: SerialDescriptor): Decoder;
    protected decodeTaggedInt(tag: string): number;
    protected decodeTaggedLong(tag: string): number;
    protected decodeTaggedNotNullMark(tag: string): boolean;
    protected decodeTaggedNull(tag: string): void | null;
    protected decodeTaggedShort(tag: string): number;
    protected decodeTaggedString(tag: string): string;
    endStructure(descriptor: SerialDescriptor): void;
    // private getPrimitiveValue<T extends Object | number | string | boolean>(tag: string, primitiveName: string, convert: (param0: JsonPrimitive) => T | null): T;
    protected getPrimitiveValue(tag: string, descriptor: SerialDescriptor): JsonPrimitive;
    protected renderTagStack(): string;
    renderTagStack(currentTag: string): string;
    // private unparsedPrimitive(literal: JsonPrimitive, primitive: string, tag: string): void;
}