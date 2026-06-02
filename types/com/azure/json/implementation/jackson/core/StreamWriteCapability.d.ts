import type { JacksonFeature } from '../../../../../../com/azure/json/implementation/jackson/core/util/JacksonFeature.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StreamWriteCapability extends Enum<StreamWriteCapability> implements JacksonFeature {
    static CAN_WRITE_BINARY_NATIVELY: StreamWriteCapability;
    static CAN_WRITE_FORMATTED_NUMBERS: StreamWriteCapability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StreamWriteCapability;
    static values(): (Object | null)[];
    private constructor(arg2: boolean)
    // private _defaultState: boolean;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    name(): "CAN_WRITE_BINARY_NATIVELY" | "CAN_WRITE_FORMATTED_NUMBERS";
}