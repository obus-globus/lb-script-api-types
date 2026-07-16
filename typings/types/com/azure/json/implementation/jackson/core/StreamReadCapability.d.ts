import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StreamReadCapability extends Enum<StreamReadCapability> implements JacksonFeature {
    static DUPLICATE_PROPERTIES: StreamReadCapability;
    static SCALARS_AS_OBJECTS: StreamReadCapability;
    static UNTYPED_SCALARS: StreamReadCapability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StreamReadCapability;
    static values(): StreamReadCapability[];
    private constructor(arg2: boolean)
    // private _defaultState: boolean;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    name(): "DUPLICATE_PROPERTIES" | "SCALARS_AS_OBJECTS" | "UNTYPED_SCALARS";
}