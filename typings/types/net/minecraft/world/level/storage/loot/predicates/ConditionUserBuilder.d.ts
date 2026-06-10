import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export interface ConditionUserBuilder<T extends ConditionUserBuilder<T>> extends Object {
    unwrap(): T;
    when<E extends Object | number | string | boolean>(collection: E[], conditionProvider: (param0: E) => () => LootItemCondition): T;
    when(builder: () => LootItemCondition): T;
}