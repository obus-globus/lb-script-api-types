import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
export class StringJsonLexer extends AbstractJsonLexer {
    constructor(source: string)
    readonly source: string;
    canConsumeValue(): boolean;
    consumeKeyString(): string;
    consumeNextToken(): number;
    consumeNextToken(expected: string): void;
    consumeStringChunked(isLenient: boolean, consumeChunk: Function1<string, void>): void;
    peekLeadingMatchingValue(keyToMatch: string, isLenient: boolean): string | null;
    prefetchOrEof(position: number): number;
    skipWhitespaces(): number;
}