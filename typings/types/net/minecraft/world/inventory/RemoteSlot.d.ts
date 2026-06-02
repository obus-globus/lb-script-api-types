import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HashedStack } from '../../../../net/minecraft/network/HashedStack.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface RemoteSlot extends Object{
    force(outgoing: ItemStack): void;
    matches(local: ItemStack): boolean;
    receive(incoming: HashedStack): void;
}