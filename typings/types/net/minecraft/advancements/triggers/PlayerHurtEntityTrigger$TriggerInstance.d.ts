import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { DamagePredicate } from '../../../../net/minecraft/advancements/predicates/DamagePredicate.d.ts'
import type { DamagePredicate$Builder } from '../../../../net/minecraft/advancements/predicates/DamagePredicate$Builder.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class PlayerHurtEntityTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntity(): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntity(paramdamage: Optional<DamagePredicate>, paramentity: Optional<EntityPredicate>): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntity(paramentity: Optional<EntityPredicate>): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntity(paramdamage: DamagePredicate$Builder, paramentity: Optional<EntityPredicate>): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntityWithDamage(paramdamage: Optional<DamagePredicate>): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    static playerHurtEntityWithDamage(paramdamage: DamagePredicate$Builder): Criterion<PlayerHurtEntityTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, damage: Optional<DamagePredicate>, entity: Optional<ContextAwarePredicate>)
    // private damage: Optional<DamagePredicate>;
    // private entity: Optional<ContextAwarePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    damage(): Optional<DamagePredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(player: ServerPlayer, victim: LootContext, source: DamageSource, originalDamage: number, actualDamage: number, blocked: boolean): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}