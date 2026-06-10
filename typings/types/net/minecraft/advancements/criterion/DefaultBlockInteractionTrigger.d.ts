import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { DefaultBlockInteractionTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/DefaultBlockInteractionTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class DefaultBlockInteractionTrigger extends SimpleCriterionTrigger<DefaultBlockInteractionTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<DefaultBlockInteractionTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: DefaultBlockInteractionTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, pos: BlockPos): void;
}