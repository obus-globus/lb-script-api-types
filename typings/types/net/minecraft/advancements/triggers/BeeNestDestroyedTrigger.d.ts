import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { BeeNestDestroyedTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/BeeNestDestroyedTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BeeNestDestroyedTrigger extends SimpleCriterionTrigger<BeeNestDestroyedTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<BeeNestDestroyedTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: BeeNestDestroyedTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, state: BlockState, itemStack: ItemStack, numBeesInside: number): void;
}