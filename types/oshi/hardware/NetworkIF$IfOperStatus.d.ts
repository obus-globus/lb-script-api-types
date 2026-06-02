import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class NetworkIF$IfOperStatus extends Enum<NetworkIF$IfOperStatus> {
    static DORMANT: NetworkIF$IfOperStatus;
    static DOWN: NetworkIF$IfOperStatus;
    static LOWER_LAYER_DOWN: NetworkIF$IfOperStatus;
    static NOT_PRESENT: NetworkIF$IfOperStatus;
    static TESTING: NetworkIF$IfOperStatus;
    static UNKNOWN: NetworkIF$IfOperStatus;
    static UP: NetworkIF$IfOperStatus;
    static byValue(paramarg0: number): NetworkIF$IfOperStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NetworkIF$IfOperStatus;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly value: number;
    getValue(): number;
    name(): "UP" | "DOWN" | "TESTING" | "UNKNOWN" | "DORMANT" | "NOT_PRESENT" | "LOWER_LAYER_DOWN";
}