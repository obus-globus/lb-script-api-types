import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { JsonGeneratorImpl } from '../../../../../../../com/azure/json/implementation/jackson/core/json/JsonGeneratorImpl.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WriterBasedJsonGenerator extends JsonGeneratorImpl {
    static SURR1_FIRST: number;
    static SURR1_LAST: number;
    static SURR2_FIRST: number;
    static SURR2_LAST: number;
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: Writer)
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec, arg3: Writer, arg4: string)
    // private _copyBuffer: string[];
    // private _currentEscape: SerializableString;
    // private _entityBuffer: string[];
    // private _outputBuffer: string[];
    // private _outputEnd: number;
    // private _outputHead: number;
    // private _outputTail: number;
    // private _quoteChar: string;
    // private _writer: Writer;
    // private _allocateCopyBuffer(): string[];
    // private _allocateEntityBuffer(): string[];
    // private _appendCharacterEscape(arg0: string, arg1: number): void;
    _flushBuffer(): void;
    // private _prependOrWriteCharacterEscape(arg0: string, arg1: number): void;
    // private _prependOrWriteCharacterEscape(arg0: string[], arg1: number, arg2: number, arg3: string, arg4: number): number;
    // private _readMore(arg0: InputStream, arg1: number[], arg2: number, arg3: number, arg4: number): number;
    _releaseBuffers(): void;
    _verifyValueWrite(arg0: string): void;
    _writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number[]): number;
    _writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number[], arg3: number): number;
    _writeBinary(arg0: Base64Variant, arg1: number[], arg2: number, arg3: number): void;
    _writeFieldName(arg0: SerializableString, arg1: boolean): void;
    _writeFieldName(arg0: string, arg1: boolean): void;
    // private _writeFieldNameTail(arg0: SerializableString): void;
    // private _writeLongString(arg0: string): void;
    // private _writeNull(): void;
    // private _writeQuotedInt(arg0: number): void;
    // private _writeQuotedLong(arg0: number): void;
    // private _writeQuotedRaw(arg0: string[], arg1: number, arg2: number): void;
    // private _writeQuotedRaw(arg0: string): void;
    // private _writeQuotedShort(arg0: number): void;
    // private _writeSegment(arg0: number): void;
    // private _writeSegmentASCII(arg0: number, arg1: number): void;
    // private _writeSegmentCustom(arg0: number): void;
    // private _writeString(arg0: string[], arg1: number, arg2: number): void;
    // private _writeString(arg0: string): void;
    // private _writeString2(arg0: SerializableString): void;
    // private _writeString2(arg0: number): void;
    // private _writeStringASCII(arg0: string[], arg1: number, arg2: number, arg3: number): void;
    // private _writeStringASCII(arg0: number, arg1: number): void;
    // private _writeStringCustom(arg0: string[], arg1: number, arg2: number): void;
    // private _writeStringCustom(arg0: number): void;
    canWriteFormattedNumbers(): boolean;
    close(): void;
    flush(): void;
    getOutputBuffered(): number;
    getOutputTarget(): Object;
    writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number): number;
    writeBinary(arg0: Base64Variant, arg1: number[], arg2: number, arg3: number): void;
    writeBinary(arg0: InputStream, arg1: number): number;
    writeBinary(arg0: number[]): void;
    writeBinary(arg0: number[], arg1: number, arg2: number): void;
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
    writeNumber(arg0: string): void;
    writeRaw(arg0: SerializableString): void;
    writeRaw(arg0: string): void;
    writeRaw(arg0: string[], arg1: number, arg2: number): void;
    writeRaw(arg0: string, arg1: number, arg2: number): void;
    // private writeRawLong(arg0: string): void;
    writeRawUTF8String(arg0: number[], arg1: number, arg2: number): void;
    writeStartArray(): void;
    writeStartArray(arg0: Object): void;
    writeStartArray(arg0: Object, arg1: number): void;
    writeStartArray(arg0: number): void;
    writeStartObject(): void;
    writeStartObject(arg0: Object): void;
    writeStartObject(arg0: Object, arg1: number): void;
    writeString(arg0: SerializableString): void;
    writeString(arg0: Reader, arg1: number): void;
    writeString(arg0: string[], arg1: number, arg2: number): void;
    writeString(arg0: string): void;
    writeUTF8String(arg0: number[], arg1: number, arg2: number): void;
}