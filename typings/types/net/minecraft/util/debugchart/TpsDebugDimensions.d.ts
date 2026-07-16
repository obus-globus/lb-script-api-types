import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TpsDebugDimensions extends Enum<TpsDebugDimensions> {
    static FULL_TICK: TpsDebugDimensions;
    static IDLE: TpsDebugDimensions;
    static SCHEDULED_TASKS: TpsDebugDimensions;
    static TICK_SERVER_METHOD: TpsDebugDimensions;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TpsDebugDimensions;
    static values(): TpsDebugDimensions[];
    private constructor()
    name(): "FULL_TICK" | "TICK_SERVER_METHOD" | "SCHEDULED_TASKS" | "IDLE";
}