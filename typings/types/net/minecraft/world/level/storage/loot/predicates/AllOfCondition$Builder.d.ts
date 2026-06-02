import type { CompositeLootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/CompositeLootItemCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class AllOfCondition$Builder extends CompositeLootItemCondition$Builder {
    constructor(terms: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition[])
    and(term: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AllOfCondition$Builder;
    create(terms: LootItemCondition[]): LootItemCondition;
}