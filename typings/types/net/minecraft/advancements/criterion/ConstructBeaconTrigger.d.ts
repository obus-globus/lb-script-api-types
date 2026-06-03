import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { ConstructBeaconTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ConstructBeaconTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class ConstructBeaconTrigger extends SimpleCriterionTrigger<ConstructBeaconTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ConstructBeaconTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: ConstructBeaconTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, levels: number): void;
}