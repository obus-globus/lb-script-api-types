import type { JsonGenerator$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StreamWriteFeature extends Enum<StreamWriteFeature> implements JacksonFeature {
    static AUTO_CLOSE_CONTENT: StreamWriteFeature;
    static AUTO_CLOSE_TARGET: StreamWriteFeature;
    static FLUSH_PASSED_TO_STREAM: StreamWriteFeature;
    static IGNORE_UNKNOWN: StreamWriteFeature;
    static STRICT_DUPLICATE_DETECTION: StreamWriteFeature;
    static WRITE_BIGDECIMAL_AS_PLAIN: StreamWriteFeature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StreamWriteFeature;
    static values(): (Object | null)[];
    private constructor(arg2: JsonGenerator$Feature)
    // private _defaultState: boolean;
    // private _mappedFeature: JsonGenerator$Feature;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    mappedFeature(): JsonGenerator$Feature;
    name(): "AUTO_CLOSE_TARGET" | "AUTO_CLOSE_CONTENT" | "FLUSH_PASSED_TO_STREAM" | "WRITE_BIGDECIMAL_AS_PLAIN" | "STRICT_DUPLICATE_DETECTION" | "IGNORE_UNKNOWN";
}