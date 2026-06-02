import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export interface Encoder extends Object{
    readonly serializersModule: SerializersModule;
    beginCollection(descriptor: SerialDescriptor, collectionSize: number): CompositeEncoder;
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    encodeBoolean(value: boolean): void;
    encodeByte(value: number): void;
    encodeChar(value: string): void;
    encodeDouble(value: number): void;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeInline(descriptor: SerialDescriptor): Encoder;
    encodeInt(value: number): void;
    encodeLong(value: number): void;
    encodeNotNullMark(): void;
    encodeNull(): void;
    encodeNullableSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeString(value: string): void;
}