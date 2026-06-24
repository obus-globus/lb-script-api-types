import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { DistancePredicate } from '../../../../net/minecraft/advancements/predicates/DistancePredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LevitationTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<LevitationTrigger$TriggerInstance>;
    static levitated(paramdistance: DistancePredicate): Criterion<LevitationTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, distance: Optional<DistancePredicate>, duration: MinMaxBounds$Ints)
    // private distance: Optional<DistancePredicate>;
    // private duration: MinMaxBounds$Ints;
    // private player: Optional<ContextAwarePredicate>;
    distance(): Optional<DistancePredicate>;
    duration(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(player: ServerPlayer, start: Vec3, duration: number): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}