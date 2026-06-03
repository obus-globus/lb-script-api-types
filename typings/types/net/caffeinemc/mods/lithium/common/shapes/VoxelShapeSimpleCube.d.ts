import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VoxelShapeCaster } from '../../../../../../net/caffeinemc/mods/lithium/common/shapes/VoxelShapeCaster.d.ts'
import type { AxisCycle } from '../../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
import type { Shapes$DoubleLineConsumer } from '../../../../../../net/minecraft/world/phys/shapes/Shapes$DoubleLineConsumer.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class VoxelShapeSimpleCube extends VoxelShape implements VoxelShapeCaster {
    constructor(arg0: DiscreteVoxelShape, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    isTiny: boolean;
    // private maxX: number;
    // private maxY: number;
    // private maxZ: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    bounds(): AABB;
    // private calculatePenetration(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    collideX(arg0: AxisCycle, arg1: AABB, arg2: number): number;
    findIndex(arg0: Direction$Axis, arg1: number): number;
    forAllBoxes(arg0: Shapes$DoubleLineConsumer): void;
    get(arg0: Direction$Axis, arg1: number): number;
    getCoords(arg0: Direction$Axis): (Object | null)[];
    intersects(arg0: AxisCycle, arg1: AABB): boolean;
    intersects(arg0: AABB, arg1: number, arg2: number, arg3: number): boolean;
    isEmpty(): boolean;
    max(arg0: Direction$Axis): number;
    max(aAxis: Direction$Axis, b: number, c: number): number;
    min(arg0: Direction$Axis): number;
    min(aAxis: Direction$Axis, b: number, c: number): number;
    move(arg0: number, arg1: number, arg2: number): VoxelShape;
    move(delta: Vec3i): VoxelShape;
    move(delta: Vec3): VoxelShape;
    toAabbs(): AABB[];
}