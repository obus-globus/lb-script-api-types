import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
import type { ArrayAsSequence } from '../../../../kotlinx/serialization/json/internal/ArrayAsSequence.d.ts'
import type { InternalJsonReader } from '../../../../kotlinx/serialization/json/internal/InternalJsonReader.d.ts'
export class ReaderJsonLexer extends AbstractJsonLexer {
    constructor(reader: InternalJsonReader, buffer: string[], configuration: JsonConfiguration)
    readonly buffer: string[];
    readonly reader: InternalJsonReader;
    readonly source: ArrayAsSequence;
    // private threshold: number;
    protected appendRange(fromIndex: number, toIndex: number): void;
    canConsumeValue(): boolean;
    consumeKeyString(): string;
    consumeNextToken(): number;
    consumeNextToken(expected: number): number;
    consumeNextToken(expected: string): void;
    ensureHaveChars(): void;
    indexOf(char: string, startPos: number): number;
    peekLeadingMatchingValue(keyToMatch: string, isLenient: boolean): string | null;
    prefetchOrEof(position: number): number;
    // private preload(unprocessedCount: number): void;
    release(): void;
    skipWhitespaces(): number;
    substring(startPos: number, endPos: number): string;
}