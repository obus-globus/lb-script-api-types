import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class TimedPickupTracker$PickupFilter extends Enum<TimedPickupTracker$PickupFilter> implements Predicate<BlockPos> {
    static LAVA: TimedPickupTracker$PickupFilter;
    static WATER: TimedPickupTracker$PickupFilter;
    static getEntries(): TimedPickupTracker$PickupFilter[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TimedPickupTracker$PickupFilter;
    static values(): (Object | null)[];
    private constructor()
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    name(): "WATER" | "LAVA";
}