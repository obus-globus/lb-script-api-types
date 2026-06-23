import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextUser } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export interface LootItemFunction extends BiFunction<ItemStack, LootContext, ItemStack>, Object, LootContextUser {
    andThen<V extends unknown>(arg0: (param0: ItemStack) => V): (param0: ItemStack, param1: LootContext) => V;
    codec(): MapCodec<LootItemFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    validate(context: ValidationContext): void;
}