import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { FilledBucketTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/FilledBucketTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FilledBucketTrigger extends SimpleCriterionTrigger<FilledBucketTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<FilledBucketTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, item: ItemStack): void;
}