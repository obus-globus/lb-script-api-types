import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
export class PotentialCalculator$PointCharge extends Object {
    constructor(pos: BlockPos, charge: number)
    // private charge: number;
    // private pos: BlockPos;
    getPotentialChange(pos: BlockPos): number;
}