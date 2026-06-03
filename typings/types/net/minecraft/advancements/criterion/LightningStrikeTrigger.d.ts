import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { LightningStrikeTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/LightningStrikeTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LightningBolt } from '../../../../net/minecraft/world/entity/LightningBolt.d.ts'
export class LightningStrikeTrigger extends SimpleCriterionTrigger<LightningStrikeTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<LightningStrikeTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: LightningStrikeTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, lightning: LightningBolt, entitiesAround: Entity[]): void;
}