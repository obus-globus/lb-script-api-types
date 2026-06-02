import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TargetBlockTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<TargetBlockTrigger$TriggerInstance>;
    static targetHit(paramredstoneSignalStrength: MinMaxBounds$Ints, paramprojectile: Optional<ContextAwarePredicate>): Criterion<TargetBlockTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, signalStrength: MinMaxBounds$Ints, projectile: Optional<ContextAwarePredicate>)
    // private player: Optional<ContextAwarePredicate>;
    // private projectile: Optional<ContextAwarePredicate>;
    // private signalStrength: MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(projectile: LootContext, hitPosition: Vec3, signalStrength: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    projectile(): Optional<ContextAwarePredicate>;
    signalStrength(): MinMaxBounds$Ints;
    toString(): string;
    validate(validator: ValidationContextSource): void;
    validate(validator: ValidationContextSource): void;
}