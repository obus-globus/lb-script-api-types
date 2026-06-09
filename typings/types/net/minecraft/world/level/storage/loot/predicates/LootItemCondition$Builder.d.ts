import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export interface LootItemCondition$Builder extends Object {
    and(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AllOfCondition$Builder;
    build(): LootItemCondition;
    invert(): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    or(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AnyOfCondition$Builder;
}