import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { JsonGeneratorImpl } from '../../../../../../../com/azure/json/implementation/jackson/core/json/JsonGeneratorImpl.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UTF8JsonGenerator extends JsonGeneratorImpl {
    static SURR1_FIRST: number;
    static SURR1_LAST: number;
    static SURR2_FIRST: number;
    static SURR2_LAST: number;
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: OutputStream)
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: OutputStream, arg4: number[], arg5: number, arg6: boolean)
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: OutputStream, arg4: string)
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: OutputStream, arg4: string, arg5: number[], arg6: number, arg7: boolean)
    // private _bufferRecyclable: boolean;
    // private _charBuffer: string[];
    // private _charBufferLength: number;
    // private _outputBuffer: number[];
    // private _outputEnd: number;
    // private _outputMaxContiguous: number;
    // private _outputStream: OutputStream;
    // private _outputTail: number;
    // private _quoteChar: number;
    _flushBuffer(): void;
    // private _handleLongCustomEscape(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    // private _outputMultiByteChar(arg0: number, arg1: number): number;
    // private _outputRawMultiByteChar(arg0: number, arg1: string[], arg2: number, arg3: number): number;
    _outputSurrogates(arg0: number, arg1: number): void;
    // private _readMore(arg0: InputStream, arg1: number[], arg2: number, arg3: number, arg4: number): number;
    _releaseBuffers(): void;
    _verifyValueWrite(arg0: string): void;
    _writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number[]): number;
    _writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number[], arg3: number): number;
    _writeBinary(arg0: Base64Variant, arg1: number[], arg2: number, arg3: number): void;
    // private _writeBytes(arg0: number[]): void;
    // private _writeBytes(arg0: number[], arg1: number, arg2: number): void;
    // private _writeCustomEscape(arg0: number[], arg1: number, arg2: SerializableString, arg3: number): number;
    // private _writeCustomStringSegment2(arg0: string[], arg1: number, arg2: number): void;
    // private _writeCustomStringSegment2(arg0: string, arg1: number, arg2: number): void;
    // private _writeGenericEscape(arg0: number, arg1: number): number;
    // private _writeNull(): void;
    // private _writeQuotedInt(arg0: number): void;
    // private _writeQuotedLong(arg0: number): void;
    // private _writeQuotedRaw(arg0: string[], arg1: number, arg2: number): void;
    // private _writeQuotedRaw(arg0: string): void;
    // private _writeQuotedShort(arg0: number): void;
    // private _writeRawSegment(arg0: string[], arg1: number, arg2: number): void;
    // private _writeSegmentedRaw(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringSegment(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringSegment(arg0: string, arg1: number, arg2: number): void;
    // private _writeStringSegment2(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringSegment2(arg0: string, arg1: number, arg2: number): void;
    // private _writeStringSegmentASCII2(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringSegmentASCII2(arg0: string, arg1: number, arg2: number): void;
    // private _writeStringSegments(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringSegments(arg0: string, arg1: boolean): void;
    // private _writeStringSegments(arg0: string, arg1: number, arg2: number): void;
    // private _writeUTF8Segment(arg0: number[], arg1: number, arg2: number): void;
    // private _writeUTF8Segment2(arg0: number[], arg1: number, arg2: number): void;
    // private _writeUTF8Segments(arg0: number[], arg1: number, arg2: number): void;
    // private _writeUnq(arg0: SerializableString): void;
    close(): void;
    flush(): void;
    getOutputBuffered(): number;
    getOutputTarget(): Object;
    writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number): number;
    writeBinary(arg0: Base64Variant, arg1: number[], arg2: number, arg3: number): void;
    writeBoolean(arg0: boolean): void;
    writeEndArray(): void;
    writeEndObject(): void;
    writeFieldName(arg0: SerializableString): void;
    writeFieldName(arg0: string): void;
    writeNull(): void;
    writeNumber(arg0: BigDecimal): void;
    writeNumber(arg0: BigInteger): void;
    writeNumber(arg0: string[], arg1: number, arg2: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: string): void;
    writeRaw(arg0: SerializableString): void;
    writeRaw(arg0: string): void;
    writeRaw(arg0: string[], arg1: number, arg2: number): void;
    writeRaw(arg0: string): void;
    writeRaw(arg0: string, arg1: number, arg2: number): void;
    writeRawUTF8String(arg0: number[], arg1: number, arg2: number): void;
    writeRawValue(arg0: SerializableString): void;
    writeStartArray(): void;
    writeStartArray(arg0: Object): void;
    writeStartArray(arg0: Object, arg1: number): void;
    writeStartObject(): void;
    writeStartObject(arg0: Object): void;
    writeString(arg0: SerializableString): void;
    writeString(arg0: Reader, arg1: number): void;
    writeString(arg0: string[], arg1: number, arg2: number): void;
    writeString(arg0: string): void;
    writeUTF8String(arg0: number[], arg1: number, arg2: number): void;
}