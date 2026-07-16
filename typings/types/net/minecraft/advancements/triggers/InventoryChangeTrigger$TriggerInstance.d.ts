import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/ItemPredicate$Builder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { InventoryChangeTrigger$TriggerInstance$Slots } from '../../../../net/minecraft/advancements/triggers/InventoryChangeTrigger$TriggerInstance$Slots.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class InventoryChangeTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<InventoryChangeTrigger$TriggerInstance>;
    static hasItems(...paramitems: ItemPredicate$Builder[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    static hasItems(...paramitems: ItemPredicate[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    static hasItems(...paramitems: ItemLike[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, slots: InventoryChangeTrigger$TriggerInstance$Slots, items: ItemPredicate[])
    // private items: ItemPredicate[];
    // private player: Optional<ContextAwarePredicate>;
    // private slots: InventoryChangeTrigger$TriggerInstance$Slots;
    equals(o: Object | null): boolean;
    hashCode(): number;
    items(): ItemPredicate[];
    matches(inventory: (Object | null)[], changedItem: ItemStack, slotsFull: number, slotsEmpty: number, slotsOccupied: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    slots(): InventoryChangeTrigger$TriggerInstance$Slots;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}