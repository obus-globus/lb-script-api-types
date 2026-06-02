import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnchantmentUtil$BuilderExtensions } from '../../../../../net/fabricmc/fabric/impl/item/EnchantmentUtil$BuilderExtensions.d.ts'
import type { EnchantmentBuilderAccessor } from '../../../../../net/fabricmc/fabric/mixin/item/EnchantmentBuilderAccessor.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentMap$Builder } from '../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
import type { ConditionalEffect } from '../../../../../net/minecraft/world/item/enchantment/ConditionalEffect.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Enchantment$EnchantmentDefinition } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$EnchantmentDefinition.d.ts'
import type { EnchantmentTarget } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentTarget.d.ts'
import type { TargetedConditionalEffect } from '../../../../../net/minecraft/world/item/enchantment/TargetedConditionalEffect.d.ts'
import type { EnchantmentAttributeEffect } from '../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentAttributeEffect.d.ts'
import type { LootItemCondition$Builder } from '../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class Enchantment$Builder extends Object implements EnchantmentUtil$BuilderExtensions, EnchantmentBuilderAccessor {
    constructor(definition: Enchantment$EnchantmentDefinition)
    readonly definition: Enchantment$EnchantmentDefinition;
    // private didModify: boolean;
    // private effectLists: Map<DataComponentType<Object>, (Object | null)[]>;
    // private effectMapBuilder: DataComponentMap$Builder;
    readonly exclusiveSet: Holder<T>[];
    build(descriptionKey: Identifier): Enchantment;
    exclusiveWith(set: Holder<T>[]): Enchantment$Builder;
    fabric$didModify(): boolean;
    fabric$resetModified(): void;
    // private getEffectsList(type: DataComponentType<E[]>): E[];
    withEffect<E extends Object | number | string | boolean>(type: DataComponentType<ConditionalEffect<E>[]>, effect: E): Enchantment$Builder;
    withEffect<E extends Object | number | string | boolean>(type: DataComponentType<ConditionalEffect<E>[]>, effect: E, condition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): Enchantment$Builder;
    withEffect<E extends Object | number | string | boolean>(type: DataComponentType<TargetedConditionalEffect<E>[]>, enchanted: EnchantmentTarget, affected: EnchantmentTarget, effect: E): Enchantment$Builder;
    withEffect<E extends Object | number | string | boolean>(type: DataComponentType<TargetedConditionalEffect<E>[]>, enchanted: EnchantmentTarget, affected: EnchantmentTarget, effect: E, condition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): Enchantment$Builder;
    withEffect(type: DataComponentType<EnchantmentAttributeEffect[]>, effect: EnchantmentAttributeEffect): Enchantment$Builder;
    withEffect(type: DataComponentType<Unit>): Enchantment$Builder;
    withSpecialEffect<E extends Object | number | string | boolean>(type: DataComponentType<E>, effect: E): Enchantment$Builder;
}