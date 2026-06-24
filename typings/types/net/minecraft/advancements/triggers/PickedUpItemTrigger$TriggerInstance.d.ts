import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class PickedUpItemTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<PickedUpItemTrigger$TriggerInstance>;
    static thrownItemPickedUpByEntity(paramplayer: Optional<ContextAwarePredicate>, paramitem: Optional<ItemPredicate>, paramentity: Optional<ContextAwarePredicate>): Criterion<PickedUpItemTrigger$TriggerInstance>;
    static thrownItemPickedUpByPlayer(paramplayer: Optional<ContextAwarePredicate>, paramitem: Optional<ItemPredicate>, paramentity: Optional<ContextAwarePredicate>): Criterion<PickedUpItemTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, item: Optional<ItemPredicate>, entity: Optional<ContextAwarePredicate>)
    // private entity: Optional<ContextAwarePredicate>;
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(player: ServerPlayer, itemStack: ItemStack, pickedUpBy: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}