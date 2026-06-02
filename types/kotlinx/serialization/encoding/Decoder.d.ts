import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export interface Decoder extends Object{
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeBoolean(): boolean;
    decodeByte(): number;
    decodeChar(): string;
    decodeDouble(): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeInline(descriptor: SerialDescriptor): Decoder;
    decodeInt(): number;
    decodeLong(): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    decodeNullableSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T | null;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    decodeShort(): number;
    decodeString(): string;
}