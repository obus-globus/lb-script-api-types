import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Cbor } from '../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export interface CborEncoder extends Object, Encoder{
    readonly cbor: Cbor;
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
    encodeNullableSerializableValue<T extends unknown>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableValue<T extends unknown>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeString(value: string): void;
}