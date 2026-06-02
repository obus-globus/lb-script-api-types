import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { ObjectCodec } from '../../../../../../../com/azure/json/implementation/jackson/core/ObjectCodec.d.ts'
import type { StreamReadCapability } from '../../../../../../../com/azure/json/implementation/jackson/core/StreamReadCapability.d.ts'
import type { ParserBase } from '../../../../../../../com/azure/json/implementation/jackson/core/base/ParserBase.d.ts'
import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { JacksonFeatureSet } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeatureSet.d.ts'
export abstract class JsonParserBase extends ParserBase {
    constructor(arg0: IOContext, arg1: number, arg2: ObjectCodec)
    // private _objectCodec: ObjectCodec;
    currentLocation(): JsonLocation;
    currentTokenLocation(): JsonLocation;
    getCodec(): ObjectCodec;
    getCurrentLocation(): JsonLocation;
    getReadCapabilities(): JacksonFeatureSet<StreamReadCapability>;
    getTokenLocation(): JsonLocation;
    setCodec(arg0: ObjectCodec): void;
}