import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ItemUsedOnLocationTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ItemUsedOnLocationTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
export class ItemUsedOnLocationTrigger extends SimpleCriterionTrigger<ItemUsedOnLocationTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ItemUsedOnLocationTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, pos: BlockPos, tool: ItemInstance): void;
}