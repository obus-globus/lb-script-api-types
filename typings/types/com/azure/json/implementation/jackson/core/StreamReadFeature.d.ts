import type { JsonParser$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StreamReadFeature extends Enum<StreamReadFeature> implements JacksonFeature {
    static AUTO_CLOSE_SOURCE: StreamReadFeature;
    static IGNORE_UNDEFINED: StreamReadFeature;
    static INCLUDE_SOURCE_IN_LOCATION: StreamReadFeature;
    static STRICT_DUPLICATE_DETECTION: StreamReadFeature;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StreamReadFeature;
    static values(): StreamReadFeature[];
    private constructor(arg2: JsonParser$Feature)
    // private _defaultState: boolean;
    // private _mappedFeature: JsonParser$Feature;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    mappedFeature(): JsonParser$Feature;
    name(): "AUTO_CLOSE_SOURCE" | "STRICT_DUPLICATE_DETECTION" | "IGNORE_UNDEFINED" | "INCLUDE_SOURCE_IN_LOCATION";
}