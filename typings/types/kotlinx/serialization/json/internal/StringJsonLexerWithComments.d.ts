import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { StringJsonLexer } from '../../../../kotlinx/serialization/json/internal/StringJsonLexer.d.ts'
export class StringJsonLexerWithComments extends StringJsonLexer {
    constructor(source: string, configuration: JsonConfiguration)
    canConsumeValue(): boolean;
    consumeNextToken(): number;
    consumeNextToken(expected: number): number;
    consumeNextToken(expected: string): void;
    peekNextToken(): number;
    skipWhitespaces(): number;
}