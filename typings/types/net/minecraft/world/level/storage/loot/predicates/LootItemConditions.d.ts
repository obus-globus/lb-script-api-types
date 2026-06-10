import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootItemConditions extends Object {
    static bootstrap(paramregistry: MapCodec<LootItemCondition>[]): MapCodec<LootItemCondition>;
    constructor()
}