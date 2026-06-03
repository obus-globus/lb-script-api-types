import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VoxelShapeCaster } from '../../../../../../net/caffeinemc/mods/lithium/common/shapes/VoxelShapeCaster.d.ts'
import type { AxisCycle } from '../../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class VoxelShapeEmpty extends VoxelShape implements VoxelShapeCaster {
    constructor(arg0: DiscreteVoxelShape)
    collideX(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    getCoords(arg0: Direction$Axis): (Object | null)[];
    intersects(arg0: AABB, arg1: number, arg2: number, arg3: number): boolean;
    isEmpty(): boolean;
    max(arg0: Direction$Axis): number;
    max(aAxis: Direction$Axis, b: number, c: number): number;
    min(arg0: Direction$Axis): number;
    min(aAxis: Direction$Axis, b: number, c: number): number;
}