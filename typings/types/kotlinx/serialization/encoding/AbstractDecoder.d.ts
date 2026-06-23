import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
export abstract class AbstractDecoder extends Object implements CompositeDecoder, Decoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor()
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
    decodeLong(): number;
    decodeLongElement(descriptor: SerialDescriptor, index: number): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    decodeNullableSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T | null;
    decodeNullableSerializableValue<T extends unknown>(deserializer: DeserializationStrategy<T>): T | null;
    decodeSequentially(): boolean;
    decodeSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeSerializableValue<T extends unknown>(deserializer: DeserializationStrategy<T>): T;
    decodeSerializableValue<T extends unknown>(deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeShort(): number;
    decodeShortElement(descriptor: SerialDescriptor, index: number): number;
    decodeString(): string;
    decodeStringElement(descriptor: SerialDescriptor, index: number): string;
    decodeValue(): Object;
    endStructure(descriptor: SerialDescriptor): void;
}