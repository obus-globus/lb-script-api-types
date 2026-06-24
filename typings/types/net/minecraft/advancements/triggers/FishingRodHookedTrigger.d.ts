import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { FishingRodHookedTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/FishingRodHookedTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { FishingHook } from '../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FishingRodHookedTrigger extends SimpleCriterionTrigger<FishingRodHookedTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<FishingRodHookedTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: FishingRodHookedTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, rod: ItemStack, hook: FishingHook, items: ItemStack[]): void;
}