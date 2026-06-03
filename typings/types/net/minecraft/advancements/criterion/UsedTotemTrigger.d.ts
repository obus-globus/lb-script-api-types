import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { UsedTotemTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/UsedTotemTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class UsedTotemTrigger extends SimpleCriterionTrigger<UsedTotemTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<UsedTotemTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: UsedTotemTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, itemStack: ItemStack): void;
}