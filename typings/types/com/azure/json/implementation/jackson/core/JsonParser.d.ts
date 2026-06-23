import type { Base64Variant } from '../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { FormatSchema } from '../../../../../../com/azure/json/implementation/jackson/core/FormatSchema.d.ts'
import type { JsonLocation } from '../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonParseException } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParseException.d.ts'
import type { JsonParser$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { JsonParser$NumberType } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$NumberType.d.ts'
import type { JsonStreamContext } from '../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { JsonToken } from '../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { ObjectCodec } from '../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { StreamReadCapability } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadCapability.d.ts'
import type { StreamReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadFeature.d.ts'
import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { TypeReference } from '../../../../../../com/azure/json/implementation/jackson/core/type/TypeReference.d.ts'
import type { JacksonFeatureSet } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
import type { RequestPayload } from '../../../../../../com/azure/json/implementation/jackson/core/util/RequestPayload.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { BigDecimal } from '../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JsonParser extends Object implements Versioned, Closeable {
    constructor()
    constructor(arg0: number)
    // private _features: number;
    // private _requestPayload: RequestPayload;
    _codec(): ObjectCodec;
    _constructError(arg0: string): JsonParseException;
    _reportUnsupportedOperation(): void;
    assignCurrentValue(arg0: Object): void;
    canReadObjectId(): boolean;
    canReadTypeId(): boolean;
    canUseSchema(arg0: FormatSchema): boolean;
    clearCurrentToken(): void;
    close(): void;
    configure(arg0: JsonParser$Feature, arg1: boolean): JsonParser;
    currentLocation(): JsonLocation;
    currentName(): string;
    currentToken(): JsonToken;
    currentTokenId(): number;
    currentTokenLocation(): JsonLocation;
    currentValue(): Object;
    disable(arg0: JsonParser$Feature): JsonParser;
    enable(arg0: JsonParser$Feature): JsonParser;
    finishToken(): void;
    getBigIntegerValue(): BigInteger;
    getBinaryValue(): number[];
    getBinaryValue(arg0: Base64Variant): number[];
    getBooleanValue(): boolean;
    getByteValue(): number;
    getCodec(): ObjectCodec;
    getCurrentLocation(): JsonLocation;
    getCurrentName(): string;
    getCurrentToken(): JsonToken;
    getCurrentTokenId(): number;
    getCurrentValue(): Object;
    getDecimalValue(): BigDecimal;
    getDoubleValue(): number;
    getEmbeddedObject(): Object;
    getFeatureMask(): number;
    getFloatValue(): number;
    getInputSource(): Object;
    getIntValue(): number;
    getLastClearedToken(): JsonToken;
    getLongValue(): number;
    getNumberType(): JsonParser$NumberType;
    getNumberValue(): Number;
    getNumberValueExact(): Number;
    getObjectId(): Object;
    getParsingContext(): JsonStreamContext;
    getReadCapabilities(): JacksonFeatureSet<StreamReadCapability>;
    getSchema(): FormatSchema;
    getShortValue(): number;
    getText(): string;
    getText(arg0: Writer): number;
    getTextCharacters(): string[];
    getTextLength(): number;
    getTextOffset(): number;
    getTokenLocation(): JsonLocation;
    getTypeId(): Object;
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
    isEnabled(arg0: JsonParser$Feature): boolean;
    isEnabled(arg0: StreamReadFeature): boolean;
    isExpectedNumberIntToken(): boolean;
    isExpectedStartArrayToken(): boolean;
    isExpectedStartObjectToken(): boolean;
    isNaN(): boolean;
    nextToken(): JsonToken;
    nextValue(): JsonToken;
    overrideCurrentName(arg0: string): void;
    overrideFormatFeatures(arg0: number, arg1: number): JsonParser;
    overrideStdFeatures(arg0: number, arg1: number): JsonParser;
    readBinaryValue(arg0: Base64Variant, arg1: OutputStream): number;
    readValueAs<T extends unknown>(arg0: TypeReference<Object>): T;
    readValueAs<T extends unknown>(arg0: Class<T>): T;
    requiresCustomCodec(): boolean;
    setCodec(arg0: ObjectCodec): void;
    setCurrentValue(arg0: Object): void;
    setFeatureMask(arg0: number): JsonParser;
    setSchema(arg0: FormatSchema): void;
    skipChildren(): JsonParser;
    version(): Version;
}