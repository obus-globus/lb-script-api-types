import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { PlayerInteractTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/PlayerInteractTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PlayerInteractTrigger extends SimpleCriterionTrigger<PlayerInteractTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<PlayerInteractTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: PlayerInteractTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, itemStack: ItemStack, interactedWith: Entity): void;
}