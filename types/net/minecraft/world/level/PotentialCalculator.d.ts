import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { PotentialCalculator$PointCharge } from '../../../../net/minecraft/world/level/PotentialCalculator$PointCharge.d.ts'
export class PotentialCalculator extends Object {
    constructor()
    // private charges: PotentialCalculator$PointCharge[];
    addCharge(pos: BlockPos, charge: number): void;
    getPotentialEnergyChange(pos: BlockPos, charge: number): number;
}