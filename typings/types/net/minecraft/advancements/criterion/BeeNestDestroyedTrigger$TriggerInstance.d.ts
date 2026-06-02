import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/ItemPredicate$Builder.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class BeeNestDestroyedTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<BeeNestDestroyedTrigger$TriggerInstance>;
    static destroyedBeeNest(paramblock: Block, paramitemPredicate: ItemPredicate$Builder, paramnumBeesInside: MinMaxBounds$Ints): Criterion<BeeNestDestroyedTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, block: Optional<Holder<Block>>, item: Optional<ItemPredicate>, beesInside: MinMaxBounds$Ints)
    // private beesInside: MinMaxBounds$Ints;
    // private block: Optional<Holder<Block>>;
    // private item: Optional<ItemPredicate>;
    // private player: Optional<ContextAwarePredicate>;
    beesInside(): MinMaxBounds$Ints;
    block(): Optional<Holder<Block>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Optional<ItemPredicate>;
    matches(state: BlockState, itemStack: ItemStack, numBeesInside: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}