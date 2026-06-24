import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DamageSourcePredicate } from '../../../../net/minecraft/advancements/predicates/DamageSourcePredicate.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
export class DamagePredicate extends Record {
    static CODEC: Codec<DamagePredicate>;
    constructor(dealtDamage: MinMaxBounds$Doubles, takenDamage: MinMaxBounds$Doubles, sourceEntity: Optional<EntityPredicate>, blocked: Optional<boolean>, type: Optional<DamageSourcePredicate>)
    // private blocked: Optional<boolean>;
    // private dealtDamage: MinMaxBounds$Doubles;
    // private sourceEntity: Optional<EntityPredicate>;
    // private takenDamage: MinMaxBounds$Doubles;
    // private type: Optional<DamageSourcePredicate>;
    blocked(): Optional<boolean>;
    dealtDamage(): MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(player: ServerPlayer, source: DamageSource, originalDamage: number, actualDamage: number, blocked: boolean): boolean;
    sourceEntity(): Optional<EntityPredicate>;
    takenDamage(): MinMaxBounds$Doubles;
    toString(): string;
    type(): Optional<DamageSourcePredicate>;
}