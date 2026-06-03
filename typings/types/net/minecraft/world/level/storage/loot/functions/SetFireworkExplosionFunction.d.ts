import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { FireworkExplosion } from '../../../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { FireworkExplosion$Shape } from '../../../../../../../net/minecraft/world/item/component/FireworkExplosion$Shape.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetFireworkExplosionFunction extends LootItemConditionalFunction {
    static DEFAULT_VALUE: FireworkExplosion;
    static MAP_CODEC: MapCodec<SetFireworkExplosionFunction>;
    constructor(predicates: LootItemCondition[], shape: Optional<FireworkExplosion$Shape>, colors: Optional<(Object | null)[]>, fadeColors: Optional<(Object | null)[]>, hasTrail: Optional<boolean>, hasTwinkle: Optional<boolean>)
    // private colors: Optional<(Object | null)[]>;
    // private fadeColors: Optional<(Object | null)[]>;
    // private shape: Optional<FireworkExplosion$Shape>;
    // private trail: Optional<boolean>;
    // private twinkle: Optional<boolean>;
    apply(itemStack: ItemStack, context: LootContext): ItemStack;
    // private apply(original: FireworkExplosion): FireworkExplosion;
    codec(): MapCodec<SetFireworkExplosionFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}