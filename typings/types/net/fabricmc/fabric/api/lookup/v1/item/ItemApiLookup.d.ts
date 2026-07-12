import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemApiLookup$ItemApiProvider } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/item/ItemApiLookup$ItemApiProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export interface ItemApiLookup<A extends unknown, C extends unknown> extends Object {
    apiClass(): Class<A>;
    contextClass(): Class<C>;
    find(arg0: ItemStack, arg1: C): A;
    getId(): Identifier;
    getProvider(arg0: Item): (param0: ItemStack, param1: C) => A;
    registerFallback(arg0: (param0: ItemStack, param1: C) => A): void;
    registerForItems(arg0: (param0: ItemStack, param1: C) => A, ...arg1: ItemLike[]): void;
    registerSelf(...arg0: ItemLike[]): void;
}