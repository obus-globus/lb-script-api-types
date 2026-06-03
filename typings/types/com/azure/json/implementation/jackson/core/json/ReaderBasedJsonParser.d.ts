import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { StreamReadCapability } from '../../../../../../../com/azure/json/implementation/jackson/core/StreamReadCapability.d.ts'
import type { ParserBase } from '../../../../../../../com/azure/json/implementation/jackson/core/base/ParserBase.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { CharsToNameCanonicalizer } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/CharsToNameCanonicalizer.d.ts'
import type { ByteArrayBuilder } from '../../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { JacksonFeatureSet } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ReaderBasedJsonParser extends ParserBase {
    constructor(arg0: IOContext, arg1: number, arg2: Reader, arg3: ObjectCodec, arg4: CharsToNameCanonicalizer)
    constructor(arg0: IOContext, arg1: number, arg2: Reader, arg3: ObjectCodec, arg4: CharsToNameCanonicalizer, arg5: string[], arg6: number, arg7: number, arg8: boolean)
    // private _bufferRecyclable: boolean;
    // private _hashSeed: number;
    // private _inputBuffer: string[];
    // private _nameStartCol: number;
    // private _nameStartOffset: number;
    // private _nameStartRow: number;
    // private _objectCodec: ObjectCodec;
    // private _reader: Reader;
    // private _symbols: CharsToNameCanonicalizer;
    // private _tokenIncomplete: boolean;
    // private _checkMatchEnd(arg0: string, arg1: number, arg2: number): void;
    _closeInput(): void;
    // private _closeScope(arg0: number): void;
    _decodeBase64(arg0: Base64Variant): number[];
    _decodeBase64(arg0: string, arg1: ByteArrayBuilder, arg2: Base64Variant): void;
    _decodeEscaped(): string;
    _finishString(): void;
    _finishString2(): void;
    _getText2(arg0: JsonToken): string;
    _handleApos(): JsonToken;
    _handleInvalidNumberStart(arg0: number, arg1: boolean): JsonToken;
    _handleOddName(arg0: number): string;
    // private _handleOddName2(arg0: number, arg1: number, arg2: number[]): string;
    _handleOddValue(arg0: number): JsonToken;
    _loadMore(): boolean;
    _loadMoreGuaranteed(): void;
    // private _matchFalse(): void;
    // private _matchNull(): void;
    _matchToken(arg0: string, arg1: number): void;
    // private _matchToken2(arg0: string, arg1: number): void;
    // private _matchTrue(): void;
    // private _nextAfterName(): JsonToken;
    _parseAposName(): string;
    // private _parseFloat(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): JsonToken;
    _parseFloatThatStartsWithPeriod(): JsonToken;
    _parseName(): string;
    // private _parseName2(arg0: number, arg1: number, arg2: number): string;
    _parseNegNumber(): JsonToken;
    // private _parseNumber2(arg0: boolean, arg1: number): JsonToken;
    _parsePosNumber(arg0: number): JsonToken;
    _readBinary(arg0: Base64Variant, arg1: OutputStream, arg2: number[]): number;
    _releaseBuffers(): void;
    _reportInvalidToken(arg0: string): void;
    _reportInvalidToken(arg0: string, arg1: string): void;
    // private _skipAfterComma2(): number;
    // private _skipCComment(): void;
    _skipCR(): void;
    // private _skipColon(): number;
    // private _skipColon2(arg0: boolean): number;
    // private _skipComma(arg0: number): number;
    // private _skipComment(): void;
    // private _skipLine(): void;
    _skipString(): void;
    // private _skipWSOrEnd(): number;
    // private _skipWSOrEnd2(): number;
    // private _skipYAMLComment(): boolean;
    // private _updateLocation(): void;
    // private _updateNameLocation(): void;
    // private _verifyNLZ2(): string;
    // private _verifyNoLeadingZeroes(): string;
    // private _verifyRootSpace(arg0: number): void;
    finishToken(): void;
    getBinaryValue(): number[];
    getBinaryValue(arg0: Base64Variant): number[];
    getCodec(): ObjectCodec;
    getInputSource(): Object;
    getNextChar(arg0: string): string;
    getNextChar(arg0: string, arg1: JsonToken): string;
    getReadCapabilities(): JacksonFeatureSet<StreamReadCapability>;
    getText(): string;
    getText(arg0: Writer): number;
    getTextCharacters(): string[];
    getTextLength(): number;
    getTextOffset(): number;
    getTokenLocation(): JsonLocation;
    getValueAsString(): string;
    getValueAsString(arg0: string): string;
    nextToken(): JsonToken;
    readBinaryValue(arg0: Base64Variant, arg1: OutputStream): number;
    setCodec(arg0: ObjectCodec): void;
}