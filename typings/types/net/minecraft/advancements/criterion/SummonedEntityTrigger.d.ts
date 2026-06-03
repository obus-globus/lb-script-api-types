import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { SummonedEntityTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/SummonedEntityTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class SummonedEntityTrigger extends SimpleCriterionTrigger<SummonedEntityTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<SummonedEntityTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: SummonedEntityTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, entity: Entity): void;
}