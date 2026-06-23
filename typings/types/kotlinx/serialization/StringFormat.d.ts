import type { Object } from '../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialFormat } from '../../kotlinx/serialization/SerialFormat.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
export interface StringFormat extends Object, SerialFormat{
    decodeFromString<T extends unknown>(deserializer: DeserializationStrategy<T>, string: string): T;
    encodeToString<T extends unknown>(serializer: SerializationStrategy<T>, value: T): string;
}