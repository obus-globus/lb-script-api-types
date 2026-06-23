import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export abstract class AbstractEncoder extends Object implements CompositeEncoder, Encoder {
    constructor()
    beginCollection(descriptor: SerialDescriptor, collectionSize: number): CompositeEncoder;
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    encodeBoolean(value: boolean): void;
    encodeBooleanElement(descriptor: SerialDescriptor, index: number, value: boolean): void;
    encodeByte(value: number): void;
    encodeByteElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeChar(value: string): void;
    encodeCharElement(descriptor: SerialDescriptor, index: number, value: string): void;
    encodeDouble(value: number): void;
    encodeDoubleElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeElement(descriptor: SerialDescriptor, index: number): boolean;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeFloatElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeInline(descriptor: SerialDescriptor): Encoder;
    encodeInlineElement(descriptor: SerialDescriptor, index: number): Encoder;
    encodeInt(value: number): void;
    encodeIntElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeLong(value: number): void;
    encodeLongElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeNotNullMark(): void;
    encodeNull(): void;
    encodeNullableSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T | null): void;
    encodeNullableSerializableValue<T extends unknown>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T): void;
    encodeSerializableValue<T extends unknown>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeShortElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeString(value: string): void;
    encodeStringElement(descriptor: SerialDescriptor, index: number, value: string): void;
    encodeValue(value: Object): void;
    endStructure(descriptor: SerialDescriptor): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}