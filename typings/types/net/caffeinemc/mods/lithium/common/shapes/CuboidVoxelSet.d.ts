import type { AxisCycle } from '../../../../../../net/minecraft/core/AxisCycle.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
export class CuboidVoxelSet extends DiscreteVoxelShape {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
    // private maxX: number;
    // private maxY: number;
    // private maxZ: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    fill(arg0: number, arg1: number, arg2: number): void;
    firstFull(arg0: Direction$Axis): number;
    firstFull(aAxis: Direction$Axis, b: number, c: number): number;
    isEmpty(): boolean;
    isFull(arg0: number, arg1: number, arg2: number): boolean;
    isFull(transform: AxisCycle, x: number, y: number, z: number): boolean;
    lastFull(arg0: Direction$Axis): number;
    lastFull(aAxis: Direction$Axis, b: number, c: number): number;
}