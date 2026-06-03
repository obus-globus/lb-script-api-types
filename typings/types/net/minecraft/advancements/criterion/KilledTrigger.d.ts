import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { KilledTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/KilledTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class KilledTrigger extends SimpleCriterionTrigger<KilledTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<KilledTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: KilledTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, entity: Entity, killingBlow: DamageSource): void;
}