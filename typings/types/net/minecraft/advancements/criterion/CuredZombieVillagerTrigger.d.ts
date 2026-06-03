import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { CuredZombieVillagerTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/CuredZombieVillagerTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Zombie } from '../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
import type { Villager } from '../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class CuredZombieVillagerTrigger extends SimpleCriterionTrigger<CuredZombieVillagerTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<CuredZombieVillagerTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: CuredZombieVillagerTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, zombie: Zombie, villager: Villager): void;
}