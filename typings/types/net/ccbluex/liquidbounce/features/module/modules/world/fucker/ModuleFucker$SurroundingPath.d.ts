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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L524 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:524}
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