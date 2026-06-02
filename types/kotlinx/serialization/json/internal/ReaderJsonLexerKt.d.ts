import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
import type { ReaderJsonLexer } from '../../../../kotlinx/serialization/json/internal/ReaderJsonLexer.d.ts'
export class ReaderJsonLexerKt extends Object {
    static BATCH_SIZE: number;
    static ReaderJsonLexer(paramarg0: Json, paramarg1: InternalJsonReader, paramarg2: string[]): ReaderJsonLexer;
}