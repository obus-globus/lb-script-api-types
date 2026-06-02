import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { SlideDownBlockTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/SlideDownBlockTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SlideDownBlockTrigger extends SimpleCriterionTrigger<SlideDownBlockTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<SlideDownBlockTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, state: BlockState): void;
}