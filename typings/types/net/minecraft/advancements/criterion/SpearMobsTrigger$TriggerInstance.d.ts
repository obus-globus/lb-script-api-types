import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class SpearMobsTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<SpearMobsTrigger$TriggerInstance>;
    static spearMobs(paramrequiredCount: number): Criterion<SpearMobsTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, count: Optional<number>)
    // private count: Optional<number>;
    // private player: Optional<ContextAwarePredicate>;
    count(): Optional<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(requiredCount: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}