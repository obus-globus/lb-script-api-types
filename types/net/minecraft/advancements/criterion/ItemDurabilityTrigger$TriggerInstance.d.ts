import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class ItemDurabilityTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<ItemDurabilityTrigger$TriggerInstance>;
    static changedDurability(paramplayer: Optional<ContextAwarePredicate>, paramitem: Optional<ItemPredicate>, paramdurability: MinMaxBounds$Ints): Criterion<ItemDurabilityTrigger$TriggerInstance>;
    static changedDurability(paramitem: Optional<ItemPredicate>, paramdurability: MinMaxBounds$Ints): Criterion<ItemDurabilityTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, item: Optional<ItemPredicate>, durability: MinMaxBounds$Ints, delta: MinMaxBounds$Ints)
    // private delta: MinMaxBounds$Ints;
    // private durability: MinMaxBounds$Ints;
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    delta(): MinMaxBounds$Ints;
    durability(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(itemStack: ItemStack, newDurability: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}