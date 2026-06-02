import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class LootItemFunctions extends Object {
    static CODEC: Codec<Object>;
    static IDENTITY: (param0: ItemStack, param1: LootContext) => ItemStack;
    static ROOT_CODEC: Codec<LootItemFunction>;
    static TYPED_CODEC: Codec<LootItemFunction>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    static compose(paramfunctions: (Object | null)[]): (param0: ItemStack, param1: LootContext) => ItemStack;
    constructor()
}