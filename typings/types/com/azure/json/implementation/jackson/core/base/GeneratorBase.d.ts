import type { Base64Variant } from '../../../../../../../com/azure/json/implementation/jackson/core/Base64Variant.d.ts'
import type { JsonGenerator } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JsonStreamContext } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonStreamContext.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { StreamWriteFeature } from '../../../../../../../com/azure/json/implementation/jackson/core/StreamWriteFeature.d.ts'
import type { TreeNode } from '../../../../../../../com/azure/json/implementation/jackson/core/TreeNode.d.ts'
import type { Version } from '../../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { JsonWriteContext } from '../../../../../../../com/azure/json/implementation/jackson/core/json/JsonWriteContext.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class GeneratorBase extends JsonGenerator {
    static SURR1_FIRST: number;
    static SURR1_LAST: number;
    static SURR2_FIRST: number;
    static SURR2_LAST: number;
    constructor(arg0: number, arg1: ObjectCodec)
    // private _cfgNumbersAsStrings: boolean;
    // private _closed: boolean;
    // private _features: number;
    // private _objectCodec: ObjectCodec;
    // private _writeContext: JsonWriteContext;
    _asString(arg0: BigDecimal): string;
    _checkStdFeatureChanges(arg0: number, arg1: number): void;
    _decodeSurrogate(arg0: number, arg1: number): number;
    _releaseBuffers(): void;
    _verifyValueWrite(arg0: string): void;
    close(): void;
    disable(arg0: JsonGenerator$Feature): JsonGenerator;
    enable(arg0: JsonGenerator$Feature): JsonGenerator;
    flush(): void;
    getCodec(): ObjectCodec;
    getCurrentValue(): Object;
    getFeatureMask(): number;
    getOutputContext(): JsonStreamContext;
    isClosed(): boolean;
    isEnabled(arg0: JsonGenerator$Feature): boolean;
    isEnabled(arg0: StreamWriteFeature): boolean;
    overrideStdFeatures(arg0: number, arg1: number): JsonGenerator;
    setCodec(arg0: ObjectCodec): JsonGenerator;
    setCurrentValue(arg0: Object): void;
    setFeatureMask(arg0: number): JsonGenerator;
    version(): Version;
    writeBinary(arg0: Base64Variant, arg1: InputStream, arg2: number): number;
    writeBinary(arg0: InputStream, arg1: number): number;
    writeBinary(arg0: number[]): void;
    writeBinary(arg0: number[], arg1: number, arg2: number): void;
    writeFieldName(arg0: SerializableString): void;
    writeObject(arg0: Object): void;
    writeRawValue(arg0: SerializableString): void;
    writeRawValue(arg0: string[], arg1: number, arg2: number): void;
    writeRawValue(arg0: string): void;
    writeRawValue(arg0: string, arg1: number, arg2: number): void;
    writeStartObject(arg0: Object): void;
    writeStartObject(arg0: Object, arg1: number): void;
    writeString(arg0: SerializableString): void;
    writeString(arg0: Reader, arg1: number): void;
    writeTree(arg0: TreeNode): void;
}