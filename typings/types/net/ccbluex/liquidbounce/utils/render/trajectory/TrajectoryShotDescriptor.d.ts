import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { TrajectoryType } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrajectoryShotDescriptor extends Record {
    constructor(trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType, yawOffsetDegrees: number, icon: ItemStack, colorSource: DataComponentGetter)
    // private colorSource: DataComponentGetter;
    /*not mapped: */ colorSource(): DataComponentGetter;
    // private icon: ItemStack;
    /*not mapped: */ icon(): ItemStack;
    // private trajectoryInfo: TrajectoryInfo;
    /*not mapped: */ trajectoryInfo(): TrajectoryInfo;
    // private trajectoryType: TrajectoryType;
    /*not mapped: */ trajectoryType(): TrajectoryType;
    // private yawOffsetDegrees: number;
    /*not mapped: */ yawOffsetDegrees(): number;
    component1(): TrajectoryInfo;
    component2(): TrajectoryType;
    component3(): number;
    component4(): ItemStack;
    component5(): DataComponentGetter;
    copy(trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType, yawOffsetDegrees: number, icon: ItemStack, colorSource: DataComponentGetter): TrajectoryShotDescriptor;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}