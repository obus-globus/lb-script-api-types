import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { ChanneledLightningTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ChanneledLightningTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ChanneledLightningTrigger extends SimpleCriterionTrigger<ChanneledLightningTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ChanneledLightningTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, victims: Entity[]): void;
    trigger(player: ServerPlayer, matcher: (param0: ChanneledLightningTrigger$TriggerInstance) => boolean): void;
}