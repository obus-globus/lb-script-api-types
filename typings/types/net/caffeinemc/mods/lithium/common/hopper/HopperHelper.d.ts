import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ComparatorUpdatePattern } from '../../../../../../net/caffeinemc/mods/lithium/common/hopper/ComparatorUpdatePattern.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class HopperHelper extends Object {
    static determineComparatorUpdatePattern(paramarg0: ItemStack[], paramarg1: (Object | null)[]): ComparatorUpdatePattern;
    static replaceDoubleInventory(paramarg0: ItemStack[]): ItemStack[];
    static tryMoveSingleItem(paramarg0: ItemStack[], paramarg1: (Object | null)[], paramarg2: ItemStack, paramarg3: ItemStack, paramarg4: number, paramarg5: Direction): boolean;
    static tryMoveSingleItem(paramarg0: ItemStack[], paramarg1: ItemStack, paramarg2: Direction): boolean;
    static updateHopperOnUpdateSuppression(paramarg0: Level, paramarg1: BlockPos, paramarg2: number, paramarg3: LevelChunk, paramarg4: boolean): void;
    constructor()
}