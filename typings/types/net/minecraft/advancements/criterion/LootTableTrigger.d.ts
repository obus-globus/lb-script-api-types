import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { LootTableTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/LootTableTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class LootTableTrigger extends SimpleCriterionTrigger<LootTableTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<LootTableTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: LootTableTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, lootTable: ResourceKey<LootTable>): void;
}