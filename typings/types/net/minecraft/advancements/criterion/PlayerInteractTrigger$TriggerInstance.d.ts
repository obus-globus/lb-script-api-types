import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/ItemPredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class PlayerInteractTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<PlayerInteractTrigger$TriggerInstance>;
    static equipmentSheared(paramplayer: Optional<ContextAwarePredicate>, paramitem: ItemPredicate$Builder, paramentity: Optional<ContextAwarePredicate>): Criterion<PlayerInteractTrigger$TriggerInstance>;
    static equipmentSheared(paramitem: ItemPredicate$Builder, paramentity: Optional<ContextAwarePredicate>): Criterion<PlayerInteractTrigger$TriggerInstance>;
    static itemUsedOnEntity(paramplayer: Optional<ContextAwarePredicate>, paramitem: ItemPredicate$Builder, paramentity: Optional<ContextAwarePredicate>): Criterion<PlayerInteractTrigger$TriggerInstance>;
    static itemUsedOnEntity(paramitem: ItemPredicate$Builder, paramentity: Optional<ContextAwarePredicate>): Criterion<PlayerInteractTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, item: Optional<ItemPredicate>, entity: Optional<ContextAwarePredicate>)
    // private entity: Optional<ContextAwarePredicate>;
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(itemStack: ItemStack, interactedWith: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}