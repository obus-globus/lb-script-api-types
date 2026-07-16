import type { Object } from '../../java/lang/Object.d.ts'
import type { BinaryFormat } from '../../kotlinx/serialization/BinaryFormat.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { StringFormat } from '../../kotlinx/serialization/StringFormat.d.ts'
export class SerialFormatKt extends Object {
    static decodeFromByteArray<T extends unknown>(self: BinaryFormat, bytes: number[]): T;
    static decodeFromHexString<T extends unknown>(self: BinaryFormat, hex: string): T;
    static decodeFromHexString<T extends unknown>(self: BinaryFormat, deserializer: DeserializationStrategy<T>, hex: string): T;
    static decodeFromString<T extends unknown>(self: StringFormat, string: string): T;
    static encodeToByteArray<T extends unknown>(self: BinaryFormat, value: T): number[];
    static encodeToHexString<T extends unknown>(self: BinaryFormat, value: T): string;
    static encodeToHexString<T extends unknown>(self: BinaryFormat, serializer: SerializationStrategy<T>, value: T): string;
    static encodeToString<T extends unknown>(self: StringFormat, value: T): string;
}