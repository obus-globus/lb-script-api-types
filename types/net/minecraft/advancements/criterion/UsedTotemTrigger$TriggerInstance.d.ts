import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class UsedTotemTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<UsedTotemTrigger$TriggerInstance>;
    static usedTotem(paramitem: ItemPredicate): Criterion<UsedTotemTrigger$TriggerInstance>;
    static usedTotem(paramitems: HolderGetter<Item>, paramitemlike: ItemLike): Criterion<UsedTotemTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, item: Optional<ItemPredicate>)
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(itemStack: ItemStack): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}