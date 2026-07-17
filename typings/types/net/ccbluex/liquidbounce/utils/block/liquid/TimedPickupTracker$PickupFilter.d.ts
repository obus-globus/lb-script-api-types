import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class TimedPickupTracker$PickupFilter extends Enum<TimedPickupTracker$PickupFilter> implements Predicate<BlockPos> {
    static LAVA: TimedPickupTracker$PickupFilter;
    static WATER: TimedPickupTracker$PickupFilter;
    static getEntries(): TimedPickupTracker$PickupFilter[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TimedPickupTracker$PickupFilter;
    static values(): TimedPickupTracker$PickupFilter[];
    private constructor()
    and(arg0: (param0: BlockPos) => boolean): (param0: BlockPos) => boolean;
    negate(): (param0: BlockPos) => boolean;
    or(arg0: (param0: BlockPos) => boolean): (param0: BlockPos) => boolean;
    name(): "WATER" | "LAVA";
}