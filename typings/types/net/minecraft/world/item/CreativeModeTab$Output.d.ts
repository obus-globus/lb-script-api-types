import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CreativeModeTab$TabVisibility } from '../../../../net/minecraft/world/item/CreativeModeTab$TabVisibility.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export interface CreativeModeTab$Output extends Object{
    accept(stack: ItemStack): void;
    accept(stack: ItemStack, tabVisibility: CreativeModeTab$TabVisibility): void;
    accept(item: ItemLike): void;
    accept(item: ItemLike, tabVisibility: CreativeModeTab$TabVisibility): void;
    acceptAll(stacks: ItemStack[]): void;
    acceptAll(stacks: ItemStack[], tabVisibility: CreativeModeTab$TabVisibility): void;
}