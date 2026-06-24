import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DamagePredicate } from '../../../../net/minecraft/advancements/predicates/DamagePredicate.d.ts'
import type { DamageSourcePredicate } from '../../../../net/minecraft/advancements/predicates/DamageSourcePredicate.d.ts'
import type { DamageSourcePredicate$Builder } from '../../../../net/minecraft/advancements/predicates/DamageSourcePredicate$Builder.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
export class DamagePredicate$Builder extends Object {
    static damageInstance(): DamagePredicate$Builder;
    constructor()
    // private blocked: Optional<boolean>;
    // private dealtDamage: MinMaxBounds$Doubles;
    // private sourceEntity: Optional<EntityPredicate>;
    // private takenDamage: MinMaxBounds$Doubles;
    // private type: Optional<DamageSourcePredicate>;
    blocked(blocked: boolean): DamagePredicate$Builder;
    build(): DamagePredicate;
    dealtDamage(dealtDamage: MinMaxBounds$Doubles): DamagePredicate$Builder;
    sourceEntity(sourceEntity: EntityPredicate): DamagePredicate$Builder;
    takenDamage(takenDamage: MinMaxBounds$Doubles): DamagePredicate$Builder;
    type(type: DamageSourcePredicate): DamagePredicate$Builder;
    type(type: DamageSourcePredicate$Builder): DamagePredicate$Builder;
}