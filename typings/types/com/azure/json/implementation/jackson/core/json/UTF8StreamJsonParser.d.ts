import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { StreamReadCapability } from '../../../../../../../com/azure/json/implementation/jackson/core/StreamReadCapability.d.ts'
import type { ParserBase } from '../../../../../../../com/azure/json/implementation/jackson/core/base/ParserBase.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { ByteQuadsCanonicalizer } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/ByteQuadsCanonicalizer.d.ts'
import type { ByteArrayBuilder } from '../../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { JacksonFeatureSet } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UTF8StreamJsonParser extends ParserBase {
    constructor(arg0: IOContext, arg1: number, arg2: InputStream, arg3: ObjectCodec, arg4: ByteQuadsCanonicalizer, arg5: number[], arg6: number, arg7: number, arg8: boolean)
    constructor(arg0: IOContext, arg1: number, arg2: InputStream, arg3: ObjectCodec, arg4: ByteQuadsCanonicalizer, arg5: number[], arg6: number, arg7: number, arg8: number, arg9: boolean)
    // private _bufferRecyclable: boolean;
    // private _inputBuffer: number[];
    // private _inputStream: InputStream;
    // private _nameStartCol: number;
    // private _nameStartOffset: number;
    // private _nameStartRow: number;
    // private _objectCodec: ObjectCodec;
    // private _quad1: number;
    // private _quadBuffer: number[];
    // private _symbols: ByteQuadsCanonicalizer;
    // private _tokenIncomplete: boolean;
    // private _checkMatchEnd(arg0: string, arg1: number, arg2: number): void;
    // private _closeArrayScope(): void;
    _closeInput(): void;
    // private _closeObjectScope(): void;
    // private _closeScope(arg0: number): JsonToken;
    _decodeBase64(arg0: Base64Variant): number[];
    _decodeBase64(arg0: string, arg1: ByteArrayBuilder, arg2: Base64Variant): void;
    _decodeCharForError(arg0: number): number;
    _decodeEscaped(): string;
    // private _decodeUtf8_2(arg0: number): number;
    // private _decodeUtf8_3(arg0: number): number;
    // private _decodeUtf8_3fast(arg0: number): number;
    // private _decodeUtf8_4(arg0: number): number;
    _finishAndReturnString(): string;
    _finishString(): void;
    // private _finishString2(arg0: string[], arg1: number): void;
    _getText2(arg0: JsonToken): string;
    _handleApos(): JsonToken;
    _handleInvalidNumberStart(arg0: number, arg1: boolean): JsonToken;
    _handleOddName(arg0: number): string;
    _handleUnexpectedValue(arg0: number): JsonToken;
    _loadMore(): boolean;
    _loadMoreGuaranteed(): void;
    _matchFalse(): void;
    _matchNull(): void;
    _matchToken(arg0: string, arg1: number): void;
    // private _matchToken2(arg0: string, arg1: number): void;
    _matchTrue(): void;
    // private _nextAfterName(): JsonToken;
    // private _nextTokenNotInObject(arg0: number): JsonToken;
    _parseAposName(): string;
    // private _parseFloat(arg0: string[], arg1: number, arg2: number, arg3: boolean, arg4: number): JsonToken;
    _parseFloatThatStartsWithPeriod(): JsonToken;
    _parseName(arg0: number): string;
    _parseNegNumber(): JsonToken;
    // private _parseNumber2(arg0: string[], arg1: number, arg2: boolean, arg3: number): JsonToken;
    _parsePosNumber(arg0: number): JsonToken;
    _readBinary(arg0: Base64Variant, arg1: OutputStream, arg2: number[]): number;
    _releaseBuffers(): void;
    _reportInvalidChar(arg0: number): void;
    _reportInvalidInitial(arg0: number): void;
    _reportInvalidOther(arg0: number): void;
    _reportInvalidOther(arg0: number, arg1: number): void;
    _reportInvalidToken(arg0: string): void;
    _reportInvalidToken(arg0: string, arg1: string): void;
    // private _skipCComment(): void;
    _skipCR(): void;
    // private _skipColon(): number;
    // private _skipColon2(arg0: boolean): number;
    // private _skipComment(): void;
    // private _skipLine(): void;
    _skipString(): void;
    // private _skipUtf8_2(): void;
    // private _skipUtf8_3(): void;
    // private _skipUtf8_4(arg0: number): void;
    // private _skipWS(): number;
    // private _skipWS2(): number;
    // private _skipWSOrEnd(): number;
    // private _skipWSOrEnd2(): number;
    // private _skipYAMLComment(): boolean;
    // private _updateLocation(): void;
    // private _updateNameLocation(): void;
    // private _verifyNoLeadingZeroes(): number;
    // private _verifyRootSpace(arg0: number): void;
    // private addName(arg0: number[], arg1: number, arg2: number): string;
    // private findName(arg0: number, arg1: number): string;
    // private findName(arg0: number, arg1: number, arg2: number): string;
    // private findName(arg0: number, arg1: number, arg2: number, arg3: number): string;
    // private findName(arg0: number[], arg1: number, arg2: number, arg3: number): string;
    finishToken(): void;
    getBinaryValue(): number[];
    getBinaryValue(arg0: Base64Variant): number[];
    getCodec(): ObjectCodec;
    getCurrentLocation(): JsonLocation;
    getInputSource(): Object;
    getReadCapabilities(): JacksonFeatureSet<StreamReadCapability>;
    getText(): string;
    getText(arg0: Writer): number;
    getTextCharacters(): string[];
    getTextLength(): number;
    getTextOffset(): number;
    getTokenLocation(): JsonLocation;
    getValueAsInt(): number;
    getValueAsInt(arg0: number): number;
    getValueAsString(): string;
    getValueAsString(arg0: string): string;
    // private nextByte(): number;
    nextToken(): JsonToken;
    parseEscapedName(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): string;
    parseLongName(arg0: number, arg1: number, arg2: number): string;
    parseMediumName(arg0: number): string;
    parseMediumName2(arg0: number, arg1: number): string;
    // private parseName(arg0: number, arg1: number, arg2: number): string;
    // private parseName(arg0: number, arg1: number, arg2: number, arg3: number): string;
    // private parseName(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): string;
    readBinaryValue(arg0: Base64Variant, arg1: OutputStream): number;
    setCodec(arg0: ObjectCodec): void;
    slowParseName(): string;
}