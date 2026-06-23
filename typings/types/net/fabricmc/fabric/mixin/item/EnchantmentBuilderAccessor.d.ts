import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentMap$Builder } from '../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Enchantment$EnchantmentDefinition } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$EnchantmentDefinition.d.ts'
export interface EnchantmentBuilderAccessor extends Object{
    getDefinition(): Enchantment$EnchantmentDefinition;
    getEffectMap(): DataComponentMap$Builder;
    getExclusiveSet(): Holder<Enchantment>[];
    invokeGetEffectsList<E extends unknown>(arg0: DataComponentType<E[]>): E[];
}