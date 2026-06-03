import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { JsonParseException } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParseException.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonStreamContext } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { ByteArrayBuilder } from '../../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export abstract class ParserMinimalBase extends JsonParser {
    constructor(arg0: number)
    // private _currToken: JsonToken;
    // private _lastClearedToken: JsonToken;
    _constructError(arg0: string): JsonParseException;
    _constructError(arg0: string, arg1: Throwable): JsonParseException;
    _decodeBase64(arg0: string, arg1: ByteArrayBuilder, arg2: Base64Variant): void;
    _handleEOF(): void;
    _hasTextualNull(arg0: string): boolean;
    _longIntegerDesc(arg0: string): string;
    _longNumberDesc(arg0: string): string;
    _reportError(arg0: string): void;
    _reportError(arg0: string, arg1: Object): void;
    _reportError(arg0: string, arg1: Object, arg2: Object): void;
    _reportInputCoercion(arg0: string, arg1: JsonToken, arg2: Class<Object>): void;
    _reportInvalidEOF(): void;
    _reportInvalidEOF(arg0: string): void;
    _reportInvalidEOF(arg0: string, arg1: JsonToken): void;
    _reportInvalidEOFInValue(): void;
    _reportInvalidEOFInValue(arg0: JsonToken): void;
    _reportMissingRootWS(arg0: number): void;
    _reportUnexpectedChar(arg0: number, arg1: string): void;
    _throwInternal(): void;
    _throwInvalidSpace(arg0: number): void;
    _wrapError(arg0: string, arg1: Throwable): void;
    clearCurrentToken(): void;
    close(): void;
    currentToken(): JsonToken;
    currentTokenId(): number;
    getBinaryValue(): number[];
    getBinaryValue(arg0: Base64Variant): number[];
    getCurrentName(): string;
    getCurrentToken(): JsonToken;
    getCurrentTokenId(): number;
    getLastClearedToken(): JsonToken;
    getParsingContext(): JsonStreamContext;
    getText(): string;
    getText(arg0: Writer): number;
    getTextCharacters(): string[];
    getTextLength(): number;
    getTextOffset(): number;
    getValueAsBoolean(): boolean;
    getValueAsBoolean(arg0: boolean): boolean;
    getValueAsDouble(): number;
    getValueAsDouble(arg0: number): number;
    getValueAsInt(): number;
    getValueAsInt(arg0: number): number;
    getValueAsLong(): number;
    getValueAsLong(arg0: number): number;
    getValueAsString(): string;
    getValueAsString(arg0: string): string;
    hasCurrentToken(): boolean;
    hasTextCharacters(): boolean;
    hasToken(arg0: JsonToken): boolean;
    hasTokenId(arg0: number): boolean;
    isClosed(): boolean;
    isExpectedNumberIntToken(): boolean;
    isExpectedStartArrayToken(): boolean;
    isExpectedStartObjectToken(): boolean;
    nextToken(): JsonToken;
    nextValue(): JsonToken;
    overrideCurrentName(arg0: string): void;
    reportInvalidNumber(arg0: string): void;
    reportOverflowInt(): void;
    reportOverflowInt(arg0: string): void;
    reportOverflowInt(arg0: string, arg1: JsonToken): void;
    reportOverflowLong(): void;
    reportOverflowLong(arg0: string): void;
    reportOverflowLong(arg0: string, arg1: JsonToken): void;
    reportUnexpectedNumberChar(arg0: number, arg1: string): void;
    skipChildren(): JsonParser;
}