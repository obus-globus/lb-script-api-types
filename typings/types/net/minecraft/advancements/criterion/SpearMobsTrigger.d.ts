import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { SpearMobsTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/SpearMobsTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class SpearMobsTrigger extends SimpleCriterionTrigger<SpearMobsTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<SpearMobsTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: SpearMobsTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, number: number): void;
}