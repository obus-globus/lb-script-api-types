import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class ChangeDimensionTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<ChangeDimensionTrigger$TriggerInstance>;
    static changedDimension(): Criterion<ChangeDimensionTrigger$TriggerInstance>;
    static changedDimension(paramfrom: ResourceKey<Level>, paramto: ResourceKey<Level>): Criterion<ChangeDimensionTrigger$TriggerInstance>;
    static changedDimensionFrom(paramfrom: ResourceKey<Level>): Criterion<ChangeDimensionTrigger$TriggerInstance>;
    static changedDimensionTo(paramto: ResourceKey<Level>): Criterion<ChangeDimensionTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, from: Optional<ResourceKey<Level>>, to: Optional<ResourceKey<Level>>)
    // private from: Optional<ResourceKey<Level>>;
    // private player: Optional<ContextAwarePredicate>;
    // private to: Optional<ResourceKey<Level>>;
    equals(o: Object | null): boolean;
    from(): Optional<ResourceKey<Level>>;
    hashCode(): number;
    matches(from: ResourceKey<Level>, to: ResourceKey<Level>): boolean;
    player(): Optional<ContextAwarePredicate>;
    to(): Optional<ResourceKey<Level>>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}