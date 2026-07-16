import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
import type { ReaderJsonLexer } from '../../../../kotlinx/serialization/json/internal/ReaderJsonLexer.d.ts'
export class ReaderJsonLexerKt extends Object {
    static BATCH_SIZE: number;
    static ReaderJsonLexer(json: Json, reader: InternalJsonReader, buffer: string[]): ReaderJsonLexer;
}