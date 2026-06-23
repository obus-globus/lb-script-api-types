import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export interface CompositeDecoder extends Object{
    readonly serializersModule: SerializersModule;
    decodeBooleanElement(descriptor: SerialDescriptor, index: number): boolean;
    decodeByteElement(descriptor: SerialDescriptor, index: number): number;
    decodeCharElement(descriptor: SerialDescriptor, index: number): string;
    decodeCollectionSize(descriptor: SerialDescriptor): number;
    decodeDoubleElement(descriptor: SerialDescriptor, index: number): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeFloatElement(descriptor: SerialDescriptor, index: number): number;
    decodeInlineElement(descriptor: SerialDescriptor, index: number): Decoder;
    decodeIntElement(descriptor: SerialDescriptor, index: number): number;
    decodeLongElement(descriptor: SerialDescriptor, index: number): number;
    decodeNullableSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T | null;
    decodeSequentially(): boolean;
    decodeSerializableElement<T extends unknown>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeShortElement(descriptor: SerialDescriptor, index: number): number;
    decodeStringElement(descriptor: SerialDescriptor, index: number): string;
    endStructure(descriptor: SerialDescriptor): void;
}