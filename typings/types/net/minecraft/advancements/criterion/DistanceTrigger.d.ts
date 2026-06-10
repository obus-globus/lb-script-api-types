import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { DistanceTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/DistanceTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DistanceTrigger extends SimpleCriterionTrigger<DistanceTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<DistanceTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: DistanceTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, startPosition: Vec3): void;
}