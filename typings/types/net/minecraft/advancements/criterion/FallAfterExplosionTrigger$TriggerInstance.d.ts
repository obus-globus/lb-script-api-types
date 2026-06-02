import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { DistancePredicate } from '../../../../net/minecraft/advancements/criterion/DistancePredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { LocationPredicate } from '../../../../net/minecraft/advancements/criterion/LocationPredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FallAfterExplosionTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<FallAfterExplosionTrigger$TriggerInstance>;
    static fallAfterExplosion(paramdistance: DistancePredicate, paramcause: EntityPredicate$Builder): Criterion<FallAfterExplosionTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, startPosition: Optional<LocationPredicate>, distance: Optional<DistancePredicate>, cause: Optional<ContextAwarePredicate>)
    // private cause: Optional<ContextAwarePredicate>;
    // private distance: Optional<DistancePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    // private startPosition: Optional<LocationPredicate>;
    cause(): Optional<ContextAwarePredicate>;
    distance(): Optional<DistancePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(level: ServerLevel, enteredPosition: Vec3, playerPosition: Vec3, cause: LootContext): boolean;
    player(): Optional<ContextAwarePredicate>;
    startPosition(): Optional<LocationPredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
    validate(validator: ValidationContextSource): void;
}