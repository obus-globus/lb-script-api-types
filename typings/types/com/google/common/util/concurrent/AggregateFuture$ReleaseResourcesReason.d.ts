import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AggregateFuture$ReleaseResourcesReason extends Enum<AggregateFuture$ReleaseResourcesReason> {
    static ALL_INPUT_FUTURES_PROCESSED: AggregateFuture$ReleaseResourcesReason;
    static OUTPUT_FUTURE_DONE: AggregateFuture$ReleaseResourcesReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AggregateFuture$ReleaseResourcesReason;
    static values(): AggregateFuture$ReleaseResourcesReason[];
    private constructor()
    name(): "OUTPUT_FUTURE_DONE" | "ALL_INPUT_FUTURES_PROCESSED";
}