import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { DecodeSequenceMode } from '../../../../kotlinx/serialization/json/DecodeSequenceMode.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class JsonStreamsKt extends Object {
    static decodeByReader<T extends unknown>(json: Json, deserializer: DeserializationStrategy<T>, reader: InternalJsonReader): T;
    static decodeToSequenceByReader<T extends unknown>(json: Json, reader: InternalJsonReader, deserializer: DeserializationStrategy<T>, format: DecodeSequenceMode): Sequence<T>;
    static decodeToSequenceByReader<T extends unknown>(json: Json, reader: InternalJsonReader, format: DecodeSequenceMode): Sequence<T>;
    static encodeByWriter<T extends unknown>(json: Json, writer: InternalJsonWriter, serializer: SerializationStrategy<T>, value: T): void;
}