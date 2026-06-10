import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export abstract class LootItemConditionalFunction extends Object implements LootItemFunction {
    static decorate(paramfunction: (param0: ItemStack, param1: LootContext) => ItemStack, paramoutput: (param0: ItemStack) => void, paramcontext: LootContext): (param0: ItemStack) => void;
    constructor(predicates: LootItemCondition[])
    // private compositePredicates: (param0: LootContext) => boolean;
    // private predicates: LootItemCondition[];
    apply(itemStack: ItemStack, context: LootContext): ItemStack;
    codec(): MapCodec<LootItemConditionalFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}