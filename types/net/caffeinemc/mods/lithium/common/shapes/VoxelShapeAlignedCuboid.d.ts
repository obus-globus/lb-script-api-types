import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VoxelShapeSimpleCube } from '../../../../../../net/caffeinemc/mods/lithium/common/shapes/VoxelShapeSimpleCube.d.ts'
import type { AxisCycle } from '../../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class VoxelShapeAlignedCuboid extends VoxelShapeSimpleCube {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
    constructor(arg0: DiscreteVoxelShape, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
    // private xyzResolution: number;
    // private calculatePenetration(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    collideX(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    findIndex(arg0: Direction$Axis, arg1: number): number;
    get(arg0: Direction$Axis, arg1: number): number;
    getCoords(arg0: Direction$Axis): (Object | null)[];
    getXSegments(): number;
    getYSegments(): number;
    getZSegments(): number;
    move(arg0: number, arg1: number, arg2: number): VoxelShape;
}