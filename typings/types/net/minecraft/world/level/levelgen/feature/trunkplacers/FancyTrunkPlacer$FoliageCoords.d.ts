import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FoliagePlacer$FoliageAttachment } from '../../../../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacer$FoliageAttachment.d.ts'
export class FancyTrunkPlacer$FoliageCoords extends Object {
    constructor(pos: BlockPos, branchBase: number)
    // private attachment: FoliagePlacer$FoliageAttachment;
    readonly branchBase: number;
    getBranchBase(): number;
}