import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { FireworkExplosion } from '../../../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { Fireworks } from '../../../../../../../net/minecraft/world/item/component/Fireworks.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ListOperation$StandAlone } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$StandAlone.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetFireworksFunction extends LootItemConditionalFunction {
    static DEFAULT_VALUE: Fireworks;
    static MAP_CODEC: MapCodec<SetFireworksFunction>;
    constructor(predicates: LootItemCondition[], explosions: Optional<ListOperation$StandAlone<FireworkExplosion>>, flightDuration: Optional<number>)
    // private explosions: Optional<ListOperation$StandAlone<FireworkExplosion>>;
    // private flightDuration: Optional<number>;
    apply(itemStack: ItemStack, context: LootContext): ItemStack;
    // private apply(old: Fireworks): Fireworks;
    codec(): MapCodec<SetFireworksFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}