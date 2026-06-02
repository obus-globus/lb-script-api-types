import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class EnterBlockTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<EnterBlockTrigger$TriggerInstance>;
    static entersBlock(paramblock: Block): Criterion<EnterBlockTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, block: Optional<Holder<Block>>, state: Optional<StatePropertiesPredicate>)
    // private block: Optional<Holder<Block>>;
    // private player: Optional<ContextAwarePredicate>;
    // private state: Optional<StatePropertiesPredicate>;
    block(): Optional<Holder<Block>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(state: BlockState): boolean;
    player(): Optional<ContextAwarePredicate>;
    state(): Optional<StatePropertiesPredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}