import type { JsonGenerator } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { StreamWriteCapability } from '../../../../../../../com/azure/json/implementation/jackson/core/StreamWriteCapability.d.ts'
import type { Version } from '../../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { GeneratorBase } from '../../../../../../../com/azure/json/implementation/jackson/core/base/GeneratorBase.d.ts'
import type { CharacterEscapes } from '../../../../../../../com/azure/json/implementation/jackson/core/io/CharacterEscapes.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { JacksonFeatureSet } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
export abstract class JsonGeneratorImpl extends GeneratorBase {
    static SURR1_FIRST: number;
    static SURR1_LAST: number;
    static SURR2_FIRST: number;
    static SURR2_LAST: number;
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec)
    // private _cfgUnqNames: boolean;
    // private _characterEscapes: CharacterEscapes;
    // private _ioContext: IOContext;
    // private _maximumNonEscapedChar: number;
    // private _outputEscapes: number[];
    // private _rootValueSeparator: SerializableString;
    _checkStdFeatureChanges(arg0: number, arg1: number): void;
    _reportCantWriteValueExpectName(arg0: string): void;
    disable(arg0: JsonGenerator$Feature): JsonGenerator;
    enable(arg0: JsonGenerator$Feature): JsonGenerator;
    getCharacterEscapes(): CharacterEscapes;
    getHighestEscapedChar(): number;
    getWriteCapabilities(): JacksonFeatureSet<StreamWriteCapability>;
    setCharacterEscapes(arg0: CharacterEscapes): JsonGenerator;
    setHighestNonEscapedChar(arg0: number): JsonGenerator;
    setRootValueSeparator(arg0: SerializableString): JsonGenerator;
    version(): Version;
}