import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VoxelShapeAlignedCuboid } from '../../../../../../net/caffeinemc/mods/lithium/common/shapes/VoxelShapeAlignedCuboid.d.ts'
import type { AxisCycle } from '../../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
export class VoxelShapeAlignedCuboidOffset extends VoxelShapeAlignedCuboid {
    constructor(arg0: VoxelShapeAlignedCuboid, arg1: DiscreteVoxelShape, arg2: number, arg3: number, arg4: number)
    // private xOffset: number;
    // private yOffset: number;
    // private zOffset: number;
    // private calculatePenetration(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    collideX(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    findIndex(arg0: Direction$Axis, arg1: number): number;
    get(arg0: Direction$Axis, arg1: number): number;
    getCoords(arg0: Direction$Axis): (Object | null)[];
}