import type { StringJsonLexer } from '../../../../kotlinx/serialization/json/internal/StringJsonLexer.d.ts'
export class StringJsonLexerWithComments extends StringJsonLexer {
    constructor(source: string)
    canConsumeValue(): boolean;
    consumeNextToken(): number;
    consumeNextToken(expected: string): void;
    peekNextToken(): number;
    skipWhitespaces(): number;
}