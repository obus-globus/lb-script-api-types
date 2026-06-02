import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class StartRidingTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<StartRidingTrigger$TriggerInstance>;
    static playerStartsRiding(paramplayer: EntityPredicate$Builder): Criterion<StartRidingTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>)
    // private player: Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}