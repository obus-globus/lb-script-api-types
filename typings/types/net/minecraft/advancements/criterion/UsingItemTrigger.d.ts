import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { UsingItemTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/UsingItemTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class UsingItemTrigger extends SimpleCriterionTrigger<UsingItemTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<UsingItemTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: UsingItemTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, item: ItemStack): void;
}