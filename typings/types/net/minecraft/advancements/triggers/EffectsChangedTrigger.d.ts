import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { EffectsChangedTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/EffectsChangedTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class EffectsChangedTrigger extends SimpleCriterionTrigger<EffectsChangedTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<EffectsChangedTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: EffectsChangedTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, source: Entity): void;
}