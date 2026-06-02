import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { DecodeSequenceMode } from '../../../../kotlinx/serialization/json/DecodeSequenceMode.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { ReaderJsonLexer } from '../../../../kotlinx/serialization/json/internal/ReaderJsonLexer.d.ts'
export class JsonIteratorKt extends Object {
    static JsonIterator(paramarg0: DecodeSequenceMode, paramarg1: Json, paramarg2: ReaderJsonLexer, paramarg3: DeserializationStrategy<Object>): Iterator<Object>;
}