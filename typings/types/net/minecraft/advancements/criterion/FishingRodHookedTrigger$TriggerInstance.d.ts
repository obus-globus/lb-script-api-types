import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class FishingRodHookedTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<FishingRodHookedTrigger$TriggerInstance>;
    static fishedItem(paramrod: Optional<ItemPredicate>, paramentity: Optional<EntityPredicate>, paramitem: Optional<ItemPredicate>): Criterion<FishingRodHookedTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, rod: Optional<ItemPredicate>, entity: Optional<ContextAwarePredicate>, item: Optional<ItemPredicate>)
    // private entity: Optional<ContextAwarePredicate>;
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    // private rod: Optional<ItemPredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(rod: ItemStack, hookedIn: LootContext, items: E[]): boolean;
    player(): Optional<ContextAwarePredicate>;
    rod(): Optional<ItemPredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}