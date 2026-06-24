import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { TargetBlockTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/TargetBlockTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TargetBlockTrigger extends SimpleCriterionTrigger<TargetBlockTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<TargetBlockTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: TargetBlockTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, projectile: Entity, hitPosition: Vec3, signalStrength: number): void;
}