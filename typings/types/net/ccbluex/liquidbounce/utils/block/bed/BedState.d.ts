import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SurroundingBlock } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/SurroundingBlock.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Represents a bed state.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/bed/BedState.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/bed/BedState.kt:31}
 */
export class BedState extends Record {
    constructor(block: BedBlock, trackedBlockPos: BlockPos, pos: Vec3, surroundingBlocks: SurroundingBlock[], compactSurroundingBlocks: SurroundingBlock[])
    // private block: BedBlock;
    /*not mapped: */ block(): BedBlock;
    // private compactSurroundingBlocks: SurroundingBlock[];
    /*not mapped: */ compactSurroundingBlocks(): SurroundingBlock[];
    // private pos: Vec3;
    /*not mapped: */ pos(): Vec3;
    // private surroundingBlocks: SurroundingBlock[];
    /*not mapped: */ surroundingBlocks(): SurroundingBlock[];
    // private trackedBlockPos: BlockPos;
    /*not mapped: */ trackedBlockPos(): BlockPos;
    component1(): BedBlock;
    component2(): BlockPos;
    component3(): Vec3;
    component4(): SurroundingBlock[];
    component5(): SurroundingBlock[];
    copy(block: BedBlock, trackedBlockPos: BlockPos, pos: Vec3, surroundingBlocks: SurroundingBlock[], compactSurroundingBlocks: SurroundingBlock[]): BedState;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}