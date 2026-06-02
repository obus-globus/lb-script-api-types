import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class PointedDripstoneBlock$FluidInfo extends Record {
    constructor(pos: BlockPos, fluid: Fluid, sourceState: BlockState)
    // private fluid: Fluid;
    // private pos: BlockPos;
    // private sourceState: BlockState;
    equals(o: Object | null): boolean;
    fluid(): Fluid;
    hashCode(): number;
    pos(): BlockPos;
    sourceState(): BlockState;
    toString(): string;
}