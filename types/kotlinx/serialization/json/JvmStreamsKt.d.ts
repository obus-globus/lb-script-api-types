import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { DecodeSequenceMode } from '../../../kotlinx/serialization/json/DecodeSequenceMode.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
export class JvmStreamsKt extends Object {
    static decodeFromStream(paramarg0: Json, paramarg1: InputStream): Object | null;
    static decodeFromStream(paramarg0: Json, paramarg1: DeserializationStrategy<Object>, paramarg2: InputStream): Object | null;
    static decodeToSequence(paramarg0: Json, paramarg1: InputStream, paramarg2: DeserializationStrategy<Object>, paramarg3: DecodeSequenceMode): Sequence<Object>;
    static decodeToSequence(paramarg0: Json, paramarg1: InputStream, paramarg2: DecodeSequenceMode): Sequence<Object>;
    static encodeToStream(paramarg0: Json, paramarg1: Object | null, paramarg2: OutputStream): void;
    static encodeToStream(paramarg0: Json, paramarg1: SerializationStrategy<Object>, paramarg2: Object | null, paramarg3: OutputStream): void;
}