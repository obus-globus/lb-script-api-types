import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export interface ConditionUserBuilder<T extends ConditionUserBuilder<T>> extends Object{
    unwrap(): T;
    when(collection: E[], conditionProvider: (param0: E) => () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
    when(builder: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
}