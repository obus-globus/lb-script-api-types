import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class ConstructBeaconTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<ConstructBeaconTrigger$TriggerInstance>;
    static constructedBeacon(): Criterion<ConstructBeaconTrigger$TriggerInstance>;
    static constructedBeacon(paramlevel: MinMaxBounds$Ints): Criterion<ConstructBeaconTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, level: MinMaxBounds$Ints)
    // private level: MinMaxBounds$Ints;
    // private player: Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): MinMaxBounds$Ints;
    matches(levels: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}