import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { ModuleFucker$SurroundingInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$SurroundingInfo.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * A candidate path that opens line of sight to a target outline point.
 *
 * @param firstBlock the block that should be broken first
 * @param blocks all blocks that need to be broken for the path
 * @param info scoring and target metadata for this path
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L523 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:523}
 */
export class ModuleFucker$SurroundingPath extends Object implements Comparable<ModuleFucker$SurroundingPath> {
    constructor(firstBlock: BlockPos, blocks: BlockPos[], info: ModuleFucker$SurroundingInfo)
    readonly blocks: BlockPos[];
    readonly firstBlock: BlockPos;
    readonly info: ModuleFucker$SurroundingInfo;
    compareTo(other: ModuleFucker$SurroundingPath): number;
    component1(): BlockPos;
    component2(): BlockPos[];
    component3(): ModuleFucker$SurroundingInfo;
    copy(firstBlock: BlockPos, blocks: BlockPos[], info: ModuleFucker$SurroundingInfo): ModuleFucker$SurroundingPath;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}