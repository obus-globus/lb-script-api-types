import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ChangeDimensionTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ChangeDimensionTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ChangeDimensionTrigger extends SimpleCriterionTrigger<ChangeDimensionTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ChangeDimensionTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, from: ResourceKey<Level>, to: ResourceKey<Level>): void;
}