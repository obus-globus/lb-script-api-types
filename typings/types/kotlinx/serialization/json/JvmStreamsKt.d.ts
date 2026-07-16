import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { DecodeSequenceMode } from '../../../kotlinx/serialization/json/DecodeSequenceMode.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
export class JvmStreamsKt extends Object {
    static decodeFromStream<T extends unknown>(self: Json, stream: InputStream): T;
    static decodeFromStream<T extends unknown>(self: Json, deserializer: DeserializationStrategy<T>, stream: InputStream): T;
    static decodeToSequence<T extends unknown>(self: Json, stream: InputStream, deserializer: DeserializationStrategy<T>, format: DecodeSequenceMode): Sequence<T>;
    static decodeToSequence<T extends unknown>(self: Json, stream: InputStream, format: DecodeSequenceMode): Sequence<T>;
    static encodeToStream<T extends unknown>(self: Json, value: T, stream: OutputStream): void;
    static encodeToStream<T extends unknown>(self: Json, serializer: SerializationStrategy<T>, value: T, stream: OutputStream): void;
}