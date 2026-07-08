import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ScaffoldBlockItemSelection extends ValueGroup {
    static INSTANCE: ScaffoldBlockItemSelection;
    // private disallowedBlocksToPlace: Block[];
    // private /*not mapped: */ getDisallowedBlocksToPlace(): Block[];
    // private unfavorableBlocksToPlace: Block[];
    // private /*not mapped: */ getUnfavorableBlocksToPlace(): Block[];
    /**
     * Special handling for unfavourable blocks (like crafting tables, slabs, etc.):
     * - {@link ModuleScaffold}: Unfavourable blocks are only used when there is no other option left
     * - {@link ModuleInventoryCleaner}: Unfavourable blocks are not used as blocks by inv-cleaner.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldBlockItemSelection.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ScaffoldBlockItemSelection.kt:88}
     */
    isBlockUnfavourable(stack: ItemStack): boolean;
    isValidBlock(stack: ItemStack | null): boolean;
}