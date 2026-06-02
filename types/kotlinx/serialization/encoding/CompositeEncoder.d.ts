import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export interface CompositeEncoder extends Object{
    readonly serializersModule: SerializersModule;
    encodeBooleanElement(descriptor: SerialDescriptor, index: number, value: boolean): void;
    encodeByteElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeCharElement(descriptor: SerialDescriptor, index: number, value: string): void;
    encodeDoubleElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeFloatElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeInlineElement(descriptor: SerialDescriptor, index: number): Encoder;
    encodeIntElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeLongElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeNullableSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T): void;
    encodeShortElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeStringElement(descriptor: SerialDescriptor, index: number, value: string): void;
    endStructure(descriptor: SerialDescriptor): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}