import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { DecodeSequenceMode } from '../../../../kotlinx/serialization/json/DecodeSequenceMode.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class JsonStreamsKt extends Object {
    static decodeByReader(paramarg0: Json, paramarg1: DeserializationStrategy<Object>, paramarg2: InternalJsonReader): Object | null;
    static decodeToSequenceByReader(paramarg0: Json, paramarg1: InternalJsonReader, paramarg2: DeserializationStrategy<Object>, paramarg3: DecodeSequenceMode): Sequence<Object>;
    static decodeToSequenceByReader(paramarg0: Json, paramarg1: InternalJsonReader, paramarg2: DecodeSequenceMode): Sequence<Object>;
    static encodeByWriter(paramarg0: Json, paramarg1: InternalJsonWriter, paramarg2: SerializationStrategy<Object>, paramarg3: Object | null): void;
}