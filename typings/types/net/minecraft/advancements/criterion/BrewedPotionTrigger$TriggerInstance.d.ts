import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Potion } from '../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class BrewedPotionTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<BrewedPotionTrigger$TriggerInstance>;
    static brewedPotion(): Criterion<BrewedPotionTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, potion: Optional<Holder<Potion>>)
    // private player: Optional<ContextAwarePredicate>;
    // private potion: Optional<Holder<Potion>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(potion: Holder<Potion>): boolean;
    player(): Optional<ContextAwarePredicate>;
    potion(): Optional<Holder<Potion>>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}