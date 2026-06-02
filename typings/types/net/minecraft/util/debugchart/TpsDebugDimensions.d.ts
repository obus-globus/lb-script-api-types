import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TpsDebugDimensions extends Enum<TpsDebugDimensions> {
    static FULL_TICK: TpsDebugDimensions;
    static IDLE: TpsDebugDimensions;
    static SCHEDULED_TASKS: TpsDebugDimensions;
    static TICK_SERVER_METHOD: TpsDebugDimensions;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TpsDebugDimensions;
    static values(): (Object | null)[];
    private constructor()
    name(): "FULL_TICK" | "TICK_SERVER_METHOD" | "SCHEDULED_TASKS" | "IDLE";
}