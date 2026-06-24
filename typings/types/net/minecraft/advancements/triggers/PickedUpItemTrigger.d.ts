import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { PickedUpItemTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/PickedUpItemTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PickedUpItemTrigger extends SimpleCriterionTrigger<PickedUpItemTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<PickedUpItemTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: PickedUpItemTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, itemStack: ItemStack, entity: Entity): void;
}