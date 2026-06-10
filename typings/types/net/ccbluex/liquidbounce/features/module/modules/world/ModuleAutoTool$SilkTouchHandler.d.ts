import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModuleAutoTool$SilkTouchHandler extends ToggleableValueGroup implements BiPredicate<ItemStack, BlockState> {
    static INSTANCE: ModuleAutoTool$SilkTouchHandler;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    and(arg0: (param0: ItemStack, param1: BlockState) => boolean): (param0: ItemStack, param1: BlockState) => boolean;
    negate(): (param0: ItemStack, param1: BlockState) => boolean;
    or(arg0: (param0: ItemStack, param1: BlockState) => boolean): (param0: ItemStack, param1: BlockState) => boolean;
    test(itemStack: ItemStack, blockState: BlockState): boolean;
}