import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootItemFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction$Builder.d.ts'
import type { ConditionUserBuilder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/ConditionUserBuilder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export abstract class LootItemConditionalFunction$Builder<T extends LootItemConditionalFunction$Builder<T>> extends Object implements LootItemFunction$Builder, ConditionUserBuilder<T> {
    constructor()
    // private conditions: ImmutableList$Builder<LootItemCondition>;
    getConditions(): LootItemCondition[];
    getThis(): T;
    unwrap(): T;
    when(collection: E[], conditionProvider: (param0: E) => () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
    when(condition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
}