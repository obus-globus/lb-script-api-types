import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface PlayerPickItemEvents$PickItemFromBlock extends Object{
    onPickItemFromBlock(arg0: ServerPlayer, arg1: BlockPos, arg2: BlockState, arg3: boolean): ItemStack;
}