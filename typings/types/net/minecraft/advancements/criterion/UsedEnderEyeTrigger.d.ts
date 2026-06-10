import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { UsedEnderEyeTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/UsedEnderEyeTrigger$TriggerInstance.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class UsedEnderEyeTrigger extends SimpleCriterionTrigger<UsedEnderEyeTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<UsedEnderEyeTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: UsedEnderEyeTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, feature: BlockPos): void;
}