import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
export class StringJsonLexer extends AbstractJsonLexer {
    constructor(source: string, configuration: JsonConfiguration)
    readonly source: string;
    canConsumeValue(): boolean;
    consumeKeyString(): string;
    consumeNextToken(): number;
    consumeNextToken(expected: number): number;
    consumeNextToken(expected: string): void;
    consumeStringChunked(isLenient: boolean, consumeChunk: (param0: string) => void): void;
    peekLeadingMatchingValue(keyToMatch: string, isLenient: boolean): string | null;
    prefetchOrEof(position: number): number;
    skipWhitespaces(): number;
}