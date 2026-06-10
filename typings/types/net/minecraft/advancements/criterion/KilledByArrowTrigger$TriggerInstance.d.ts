import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class KilledByArrowTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<KilledByArrowTrigger$TriggerInstance>;
    static crossbowKilled(paramitems: HolderGetter<Item>, paramvictims: (Object | null)[]): Criterion<KilledByArrowTrigger$TriggerInstance>;
    static crossbowKilled(paramitems: HolderGetter<Item>, paramuniqueEntityTypes: MinMaxBounds$Ints): Criterion<KilledByArrowTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, victims: ContextAwarePredicate[], uniqueEntityTypes: MinMaxBounds$Ints, firedFromWeapon: Optional<ItemPredicate>)
    // private firedFromWeapon: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    // private uniqueEntityTypes: MinMaxBounds$Ints;
    // private victims: ContextAwarePredicate[];
    equals(o: Object | null): boolean;
    firedFromWeapon(): Optional<ItemPredicate>;
    hashCode(): number;
    matches(victims: LootContext[], uniqueEntityTypes: number, firedFromWeapon: ItemStack): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    uniqueEntityTypes(): MinMaxBounds$Ints;
    validate(validator: ValidationContextSource): void;
    victims(): ContextAwarePredicate[];
}