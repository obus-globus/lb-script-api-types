import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export interface JsonDecoder extends Object, CompositeDecoder, Decoder{
    readonly json: Json;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeBoolean(): boolean;
    decodeBooleanElement(descriptor: SerialDescriptor, index: number): boolean;
    decodeByte(): number;
    decodeByteElement(descriptor: SerialDescriptor, index: number): number;
    decodeChar(): string;
    decodeCharElement(descriptor: SerialDescriptor, index: number): string;
    decodeCollectionSize(descriptor: SerialDescriptor): number;
    decodeDouble(): number;
    decodeDoubleElement(descriptor: SerialDescriptor, index: number): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeFloatElement(descriptor: SerialDescriptor, index: number): number;
    decodeInline(descriptor: SerialDescriptor): Decoder;
    decodeInlineElement(descriptor: SerialDescriptor, index: number): Decoder;
    decodeInt(): number;
    decodeIntElement(descriptor: SerialDescriptor, index: number): number;
    decodeJsonElement(): JsonElement;
    decodeLong(): number;
    decodeLongElement(descriptor: SerialDescriptor, index: number): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    decodeNullableSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T | null;
    decodeSequentially(): boolean;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    decodeShort(): number;
    decodeShortElement(descriptor: SerialDescriptor, index: number): number;
    decodeString(): string;
    decodeStringElement(descriptor: SerialDescriptor, index: number): string;
    endStructure(descriptor: SerialDescriptor): void;
}