import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AggregateFuture$ReleaseResourcesReason extends Enum<AggregateFuture$ReleaseResourcesReason> {
    static ALL_INPUT_FUTURES_PROCESSED: AggregateFuture$ReleaseResourcesReason;
    static OUTPUT_FUTURE_DONE: AggregateFuture$ReleaseResourcesReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AggregateFuture$ReleaseResourcesReason;
    static values(): (Object | null)[];
    private constructor()
    name(): "OUTPUT_FUTURE_DONE" | "ALL_INPUT_FUTURES_PROCESSED";
}