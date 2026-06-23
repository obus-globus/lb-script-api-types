import type { Object } from '../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialFormat } from '../../kotlinx/serialization/SerialFormat.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
export interface BinaryFormat extends Object, SerialFormat{
    decodeFromByteArray<T extends unknown>(deserializer: DeserializationStrategy<T>, bytes: number[]): T;
    encodeToByteArray<T extends unknown>(serializer: SerializationStrategy<T>, value: T): number[];
}