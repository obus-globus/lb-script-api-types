import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { FallAfterExplosionTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/FallAfterExplosionTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FallAfterExplosionTrigger extends SimpleCriterionTrigger<FallAfterExplosionTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<FallAfterExplosionTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: FallAfterExplosionTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, startPosition: Vec3, cause: Entity): void;
}