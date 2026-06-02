import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class UsedEnderEyeTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<UsedEnderEyeTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, distance: MinMaxBounds$Doubles)
    // private distance: MinMaxBounds$Doubles;
    // private player: Optional<ContextAwarePredicate>;
    distance(): MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(sqrDistance: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}