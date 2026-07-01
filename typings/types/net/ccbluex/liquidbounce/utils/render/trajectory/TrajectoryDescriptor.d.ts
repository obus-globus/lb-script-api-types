import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryDescriptor$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryDescriptor$Companion.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { TrajectoryShotDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryShotDescriptor.d.ts'
import type { TrajectoryType } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrajectoryDescriptor extends Record {
    static BOW_ARROW: TrajectoryDescriptor;
    static CROSSBOW_ARROW: TrajectoryDescriptor;
    static Companion: TrajectoryDescriptor$Companion;
    static EGG: TrajectoryDescriptor;
    static ENDER_PEARL: TrajectoryDescriptor;
    static ENTITY_ARROW: TrajectoryDescriptor;
    static EXP_BOTTLE: TrajectoryDescriptor;
    static FIREBALL: TrajectoryDescriptor;
    static FIREWORK_ROCKET: TrajectoryDescriptor;
    static FISHING_BOBBER: TrajectoryDescriptor;
    static POTION: TrajectoryDescriptor;
    static SNOWBALL: TrajectoryDescriptor;
    static TRIDENT: TrajectoryDescriptor;
    static WIND_CHARGE: TrajectoryDescriptor;
    constructor(trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType)
    // private trajectoryInfo: TrajectoryInfo;
    /*not mapped: */ trajectoryInfo(): TrajectoryInfo;
    // private trajectoryType: TrajectoryType;
    /*not mapped: */ trajectoryType(): TrajectoryType;
    component1(): TrajectoryInfo;
    component2(): TrajectoryType;
    copy(trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType): TrajectoryDescriptor;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toShotDescriptor(yawOffsetDegrees: number, icon: ItemStack, colorSource: DataComponentGetter): TrajectoryShotDescriptor;
    toString(): string;
}