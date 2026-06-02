import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ServerExplosion$StackCollector extends Object {
    private constructor(pos: BlockPos, stack: ItemStack)
    // private pos: BlockPos;
    // private stack: ItemStack;
    tryMerge(input: ItemStack): void;
}