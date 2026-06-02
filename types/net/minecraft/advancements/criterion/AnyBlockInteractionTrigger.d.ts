import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { AnyBlockInteractionTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/AnyBlockInteractionTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
export class AnyBlockInteractionTrigger extends SimpleCriterionTrigger<AnyBlockInteractionTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<AnyBlockInteractionTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, pos: BlockPos, tool: ItemInstance): void;
}