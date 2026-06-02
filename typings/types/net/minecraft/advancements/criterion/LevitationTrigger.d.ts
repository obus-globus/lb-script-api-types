import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { LevitationTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/LevitationTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LevitationTrigger extends SimpleCriterionTrigger<LevitationTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<LevitationTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, start: Vec3, duration: number): void;
}