import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export abstract class CompositeLootItemCondition$Builder extends Object implements LootItemCondition$Builder {
    constructor(terms: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition[])
    // private terms: ImmutableList$Builder<LootItemCondition>;
    addTerm(term: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): void;
    and(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AllOfCondition$Builder;
    build(): LootItemCondition;
    create(terms: LootItemCondition[]): LootItemCondition;
    invert(): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    or(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AnyOfCondition$Builder;
}