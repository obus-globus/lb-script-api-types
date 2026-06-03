import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
import type { ReaderJsonLexer } from '../../../../kotlinx/serialization/json/internal/ReaderJsonLexer.d.ts'
export class ReaderJsonLexerWithComments extends ReaderJsonLexer {
    constructor(reader: InternalJsonReader, buffer: string[])
    canConsumeValue(): boolean;
    consumeNextToken(): number;
    consumeNextToken(expected: number): number;
    consumeNextToken(expected: string): void;
    // private handleComment(position: number): Pair<number, boolean>;
    peekNextToken(): number;
    // private prefetchWithinThreshold(position: number): number;
    skipWhitespaces(): number;
}