import type { CompositeLootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/CompositeLootItemCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class AnyOfCondition$Builder extends CompositeLootItemCondition$Builder {
    constructor(terms: () => LootItemCondition[])
    create(terms: LootItemCondition[]): LootItemCondition;
    or(term: () => LootItemCondition): AnyOfCondition$Builder;
}