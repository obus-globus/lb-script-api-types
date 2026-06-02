import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootItemConditionalFunction$DummyBuilder extends LootItemConditionalFunction$Builder<LootItemConditionalFunction$DummyBuilder> {
    constructor(constructor: (param0: LootItemCondition[]) => LootItemFunction)
    // private constructor: (param0: LootItemCondition[]) => LootItemFunction;
    build(): LootItemFunction;
    getThis(): LootItemConditionalFunction$DummyBuilder;
}