import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface GoAndGiveItemsToTarget$ItemThrower<E extends Object | number | string | boolean> extends Object{
    onItemThrown(level: ServerLevel, thrower: E, item: ItemStack, targetPos: BlockPos): void;
}