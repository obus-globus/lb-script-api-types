import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { EntityHurtPlayerTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/EntityHurtPlayerTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
export class EntityHurtPlayerTrigger extends SimpleCriterionTrigger<EntityHurtPlayerTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<EntityHurtPlayerTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: EntityHurtPlayerTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, source: DamageSource, originalDamage: number, actualDamage: number, blocked: boolean): void;
}