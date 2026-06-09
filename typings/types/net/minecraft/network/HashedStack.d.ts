import type { Object } from '../../../java/lang/Object.d.ts'
import type { HashedPatchMap$HashGenerator } from '../../../net/minecraft/network/HashedPatchMap$HashGenerator.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export interface HashedStack extends Object {
    matches(stack: ItemStack, hasher: (param0: Object | null) => unknown): boolean;
}