import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { KilledByArrowTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/KilledByArrowTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class KilledByArrowTrigger extends SimpleCriterionTrigger<KilledByArrowTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<KilledByArrowTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: KilledByArrowTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, victims: Entity[], firedByWeapon: ItemStack): void;
}