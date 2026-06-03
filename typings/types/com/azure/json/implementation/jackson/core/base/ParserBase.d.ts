import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonParser$Feature } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { JsonParser$NumberType } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser$NumberType.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { Version } from '../../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { ParserMinimalBase } from '../../../../../../../com/azure/json/implementation/jackson/core/base/ParserMinimalBase.d.ts'
import type { ContentReference } from '../../../../../../../com/azure/json/implementation/jackson/core/io/ContentReference.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { JsonReadContext } from '../../../../../../../com/azure/json/implementation/jackson/core/json/JsonReadContext.d.ts'
import type { ByteArrayBuilder } from '../../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { TextBuffer } from '../../../../../../../com/azure/json/implementation/jackson/core/util/TextBuffer.d.ts'
import type { IllegalArgumentException } from '../../../../../../../java/lang/IllegalArgumentException.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export abstract class ParserBase extends ParserMinimalBase {
    constructor(arg0: IOContext, arg1: number)
    // private _binaryValue: number[];
    // private _byteArrayBuilder: ByteArrayBuilder;
    // private _closed: boolean;
    // private _currInputProcessed: number;
    // private _currInputRow: number;
    // private _currInputRowStart: number;
    // private _expLength: number;
    // private _fractLength: number;
    // private _inputEnd: number;
    // private _inputPtr: number;
    // private _intLength: number;
    // private _ioContext: IOContext;
    // private _nameCopied: boolean;
    // private _nameCopyBuffer: string[];
    // private _nextToken: JsonToken;
    // private _numTypesValid: number;
    // private _numberBigDecimal: BigDecimal;
    // private _numberBigInt: BigInteger;
    // private _numberDouble: number;
    // private _numberInt: number;
    // private _numberLong: number;
    // private _numberNegative: boolean;
    // private _parsingContext: JsonReadContext;
    // private _textBuffer: TextBuffer;
    // private _tokenInputCol: number;
    // private _tokenInputRow: number;
    // private _tokenInputTotal: number;
    _checkStdFeatureChanges(arg0: number, arg1: number): void;
    _closeInput(): void;
    _contentReference(): ContentReference;
    _decodeBase64Escape(arg0: Base64Variant, arg1: string, arg2: number): number;
    _decodeBase64Escape(arg0: Base64Variant, arg1: number, arg2: number): number;
    _decodeEscaped(): string;
    _eofAsNextChar(): number;
    _finishString(): void;
    _getByteArrayBuilder(): ByteArrayBuilder;
    _getSourceReference(): Object;
    _handleBase64MissingPadding(arg0: Base64Variant): void;
    _handleEOF(): void;
    _handleUnrecognizedCharacterEscape(arg0: string): string;
    _parseIntValue(): number;
    _parseNumericValue(arg0: number): void;
    // private _parseSlowFloat(arg0: number): void;
    // private _parseSlowInt(arg0: number): void;
    _releaseBuffers(): void;
    _reportMismatchedEndMarker(arg0: number, arg1: string): void;
    _reportTooLongIntegral(arg0: number, arg1: string): void;
    _throwUnquotedSpace(arg0: number, arg1: string): void;
    _validJsonTokenList(): string;
    _validJsonValueList(): string;
    close(): void;
    convertNumberToBigDecimal(): void;
    convertNumberToBigInteger(): void;
    convertNumberToDouble(): void;
    convertNumberToInt(): void;
    convertNumberToLong(): void;
    disable(arg0: JsonParser$Feature): JsonParser;
    enable(arg0: JsonParser$Feature): JsonParser;
    getBigIntegerValue(): BigInteger;
    getBinaryValue(): number[];
    getBinaryValue(arg0: Base64Variant): number[];
    getCurrentLocation(): JsonLocation;
    getCurrentName(): string;
    getCurrentValue(): Object;
    getDecimalValue(): BigDecimal;
    getDoubleValue(): number;
    getFloatValue(): number;
    getIntValue(): number;
    getLongValue(): number;
    getNumberType(): JsonParser$NumberType;
    getNumberValue(): Number;
    getNumberValueExact(): Number;
    getParsingContext(): JsonReadContext;
    getTokenCharacterOffset(): number;
    getTokenColumnNr(): number;
    getTokenLineNr(): number;
    getTokenLocation(): JsonLocation;
    hasTextCharacters(): boolean;
    isClosed(): boolean;
    isNaN(): boolean;
    loadMore(): boolean;
    loadMoreGuaranteed(): void;
    overrideCurrentName(arg0: string): void;
    overrideStdFeatures(arg0: number, arg1: number): JsonParser;
    reportInvalidBase64Char(arg0: Base64Variant, arg1: number, arg2: number): IllegalArgumentException;
    reportInvalidBase64Char(arg0: Base64Variant, arg1: number, arg2: number, arg3: string): IllegalArgumentException;
    reset(arg0: boolean, arg1: number, arg2: number, arg3: number): JsonToken;
    resetAsNaN(arg0: string, arg1: number): JsonToken;
    resetFloat(arg0: boolean, arg1: number, arg2: number, arg3: number): JsonToken;
    resetInt(arg0: boolean, arg1: number): JsonToken;
    setCurrentValue(arg0: Object): void;
    setFeatureMask(arg0: number): JsonParser;
    version(): Version;
}