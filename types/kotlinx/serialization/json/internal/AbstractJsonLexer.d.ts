import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
import type { JsonPath } from '../../../../kotlinx/serialization/json/internal/JsonPath.d.ts'
export abstract class AbstractJsonLexer extends Object {
    constructor()
    currentPosition: number;
    // private escapedString: StringBuilder;
    // private /*not mapped: */ getEscapedString(): StringBuilder;
    path: JsonPath;
    // private peekedString: string | null;
    // private /*not mapped: */ getSource(): CharSequence;
    // private appendEsc(startPosition: number): number;
    // private appendEscape(lastPosition: number, current: number): number;
    // private appendHex(source: CharSequence, startPos: number): number;
    protected appendRange(fromIndex: number, toIndex: number): void;
    canConsumeValue(): boolean;
    consumeBoolean(): boolean;
    // private consumeBoolean(start: number): boolean;
    consumeBooleanLenient(): boolean;
    // private consumeBooleanLiteral(literalSuffix: string, current: number): void;
    consumeKeyString(): string;
    consumeNextToken(): number;
    consumeNextToken(expected: number): number;
    consumeNextToken(expected: string): void;
    consumeNumericLiteral(): number;
    consumeNumericLiteralFully(): number;
    consumeString(): string;
    protected consumeString(source: CharSequence, startPosition: number, current: number): string;
    consumeStringChunked(isLenient: boolean, consumeChunk: Function1<string, void>): void;
    consumeStringLenient(): string;
    consumeStringLenientNotNull(): string;
    // private decodedString(lastPosition: number, currentPosition: number): string;
    discardPeeked(): void;
    ensureHaveChars(): void;
    expectEof(): void;
    fail(expectedToken: number, wasConsumed: boolean, message: Function2<string, string, string>): void;
    fail(message: string, position: number, hint: string): void;
    failOnUnknownKey(key: string): void;
    // private fromHexChar(source: CharSequence, currentPosition: number): number;
    indexOf(char: string, startPos: number): number;
    // private insideString(isLenient: boolean, char: string): boolean;
    isNotEof(): boolean;
    protected isValidValueStart(c: string): boolean;
    peekLeadingMatchingValue(keyToMatch: string, isLenient: boolean): string | null;
    peekNextToken(): number;
    peekString(isLenient: boolean): string | null;
    prefetchOrEof(position: number): number;
    require(condition: boolean, position: number, message: Function0<string>): void;
    skipElement(allowLenientStrings: boolean): void;
    skipWhitespaces(): number;
    substring(startPos: number, endPos: number): string;
    // private takePeeked(): string;
    toString(): string;
    tryConsumeComma(): boolean;
    tryConsumeNull(doConsume: boolean): boolean;
    protected unexpectedToken(expected: string): void;
    // private wasUnquotedString(): boolean;
    // private withPositionRollback<T extends Object | number | string | boolean>(action: Function0<T>): T;
    // private writeRange(fromIndex: number, toIndex: number, currentChunkHasEscape: boolean, consumeChunk: Function1<string, void>): void;
}