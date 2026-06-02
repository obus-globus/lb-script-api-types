import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { EnterBlockTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/EnterBlockTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class EnterBlockTrigger extends SimpleCriterionTrigger<EnterBlockTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<EnterBlockTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, state: BlockState): void;
}