import type { Base64Variant } from '../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { FormatSchema } from '../../../../../../com/azure/json/implementation/jackson/core/FormatSchema.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JsonParser } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonStreamContext } from '../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { ObjectCodec } from '../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { StreamWriteCapability } from '../../../../../../com/azure/json/implementation/jackson/core/StreamWriteCapability.d.ts'
import type { StreamWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamWriteFeature.d.ts'
import type { TreeNode } from '../../../../../../com/azure/json/implementation/jackson/core/TreeNode.d.ts'
import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { CharacterEscapes } from '../../../../../../com/azure/json/implementation/jackson/core/io/CharacterEscapes.d.ts'
import type { JacksonFeatureSet } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Flushable } from '../../../../../../java/io/Flushable.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { BigDecimal } from '../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JsonGenerator extends Object implements Versioned, Closeable, Flushable {
    constructor()
    _copyCurrentContents(arg0: JsonParser): void;
    _reportError(arg0: string): void;
    _reportUnsupportedOperation(): void;
    _verifyOffsets(arg0: number, arg1: number, arg2: number): void;
    _writeSimpleObject(arg0: Object): void;
    assignCurrentValue(arg0: Object): void;
    canOmitFields(): boolean;
    canUseSchema(arg0: FormatSchema): boolean;
    canWriteBinaryNatively(): boolean;
    canWriteFormattedNumbers(): boolean;
    canWriteObjectId(): boolean;
    canWriteTypeId(): boolean;
    close(): void;
    configure(arg0: JsonGenerator$Feature, arg1: boolean): JsonGenerator;
    copyCurrentEvent(arg0: JsonParser): void;
    copyCurrentStructure(arg0: JsonParser): void;
    currentValue(): Object;
    disable(arg0: JsonGenerator$Feature): JsonGenerator;
    enable(arg0: JsonGenerator$Feature): JsonGenerator;
    flush(): void;
    getCharacterEscapes(): CharacterEscapes;
    getCodec(): ObjectCodec;
    getCurrentValue(): Object;
    getFeatureMask(): number;
    getHighestEscapedChar(): number;
    getOutputBuffered(): number;
    getOutputContext(): JsonStreamContext;
    getOutputTarget(): Object;
    getSchema(): FormatSchema;
    getWriteCapabilities(): JacksonFeatureSet<StreamWriteCapability>;
    isClosed(): boolean;
    isEnabled(arg0: JsonGenerator$Feature): boolean;
    isEnabled(arg0: StreamWriteFeature): boolean;
    overrideFormatFeatures(arg0: number, arg1: number): JsonGenerator;
    overrideStdFeatures(arg0: number, arg1: number): JsonGenerator;
    setCharacterEscapes(arg0: CharacterEscapes): JsonGenerator;
    setCodec(arg0: ObjectCodec): JsonGenerator;
    setCurrentValue(arg0: Object): void;
    setFeatureMask(arg0: number): JsonGenerator;
    setHighestNonEscapedChar(arg0: number): JsonGenerator;
    setRootValueSeparator(arg0: SerializableString): JsonGenerator;
    setSchema(arg0: FormatSchema): void;
    version(): Version;
    writeArray(arg0: string[], arg1: number, arg2: number): void;
    writeArray(arg0: number[], arg1: number, arg2: number): void;
    writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number): number;
    writeBinary(arg0: Base64Variant, arg1: number[], arg2: number, arg3: number): void;
    writeBinary(arg0: InputStream, arg1: number): number;
    writeBinary(arg0: number[]): void;
    writeBinary(arg0: number[], arg1: number, arg2: number): void;
    writeBoolean(arg0: boolean): void;
    writeBooleanField(arg0: string, arg1: boolean): void;
    writeEmbeddedObject(arg0: Object): void;
    writeEndArray(): void;
    writeEndObject(): void;
    writeFieldId(arg0: number): void;
    writeFieldName(arg0: SerializableString): void;
    writeFieldName(arg0: string): void;
    writeNull(): void;
    writeNumber(arg0: BigDecimal): void;
    writeNumber(arg0: BigInteger): void;
    writeNumber(arg0: string[], arg1: number, arg2: number): void;
    writeNumber(arg0: number): void;
    writeNumber(arg0: string): void;
    writeObject(arg0: Object): void;
    writeObjectId(arg0: Object): void;
    writeObjectRef(arg0: Object): void;
    writeOmittedField(arg0: string): void;
    writeRaw(arg0: SerializableString): void;
    writeRaw(arg0: string): void;
    writeRaw(arg0: string[], arg1: number, arg2: number): void;
    writeRaw(arg0: string, arg1: number, arg2: number): void;
    writeRawUTF8String(arg0: number[], arg1: number, arg2: number): void;
    writeRawValue(arg0: SerializableString): void;
    writeRawValue(arg0: string[], arg1: number, arg2: number): void;
    writeRawValue(arg0: string): void;
    writeRawValue(arg0: string, arg1: number, arg2: number): void;
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
    writeStringField(arg0: string, arg1: string): void;
    writeTree(arg0: TreeNode): void;
    writeTypeId(arg0: Object): void;
    writeUTF8String(arg0: number[], arg1: number, arg2: number): void;
}