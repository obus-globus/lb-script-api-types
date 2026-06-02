import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ItemApiLookup$ItemApiProvider<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    find(arg0: ItemStack, arg1: C): A;
}