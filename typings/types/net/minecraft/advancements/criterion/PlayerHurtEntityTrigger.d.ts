import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { PlayerHurtEntityTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/PlayerHurtEntityTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class PlayerHurtEntityTrigger extends SimpleCriterionTrigger<PlayerHurtEntityTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<PlayerHurtEntityTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: PlayerHurtEntityTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, victim: Entity, source: DamageSource, originalDamage: number, actualDamage: number, blocked: boolean): void;
}