import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { CauldronInteraction } from '../../../../net/minecraft/core/cauldron/CauldronInteraction.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CauldronInteraction$Dispatcher extends Object {
    constructor()
    // private items: Map<Item, (param0: BlockState, param1: Level, param2: BlockPos, param3: Player, param4: InteractionHand, param5: ItemStack) => InteractionResult>;
    // private tags: Map<TagKey<Item>, (param0: BlockState, param1: Level, param2: BlockPos, param3: Player, param4: InteractionHand, param5: ItemStack) => InteractionResult>;
    get(itemStack: ItemStack): (param0: BlockState, param1: Level, param2: BlockPos, param3: Player, param4: InteractionHand, param5: ItemStack) => InteractionResult;
    put(tag: TagKey<Item>, interaction: (param0: BlockState, param1: Level, param2: BlockPos, param3: Player, param4: InteractionHand, param5: ItemStack) => InteractionResult): void;
    put(item: Item, interaction: (param0: BlockState, param1: Level, param2: BlockPos, param3: Player, param4: InteractionHand, param5: ItemStack) => InteractionResult): void;
}