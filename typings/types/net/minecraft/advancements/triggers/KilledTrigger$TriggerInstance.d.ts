import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/predicates/ContextAwarePredicate.d.ts'
import type { DamageSourcePredicate } from '../../../../net/minecraft/advancements/predicates/DamageSourcePredicate.d.ts'
import type { DamageSourcePredicate$Builder } from '../../../../net/minecraft/advancements/predicates/DamageSourcePredicate$Builder.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { LootContext } from '../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class KilledTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: Optional<EntityPredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: Optional<EntityPredicate>, paramkillingBlow: Optional<DamageSourcePredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: Optional<EntityPredicate>, paramkillingBlow: DamageSourcePredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: EntityPredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: EntityPredicate$Builder, paramkillingBlow: Optional<DamageSourcePredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static entityKilledPlayer(paramentity: EntityPredicate$Builder, paramkillingBlow: DamageSourcePredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: Optional<EntityPredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: Optional<EntityPredicate>, paramkillingBlow: Optional<DamageSourcePredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: Optional<EntityPredicate>, paramkillingBlow: DamageSourcePredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: EntityPredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: EntityPredicate$Builder, paramkillingBlow: Optional<DamageSourcePredicate>): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntity(paramentity: EntityPredicate$Builder, paramkillingBlow: DamageSourcePredicate$Builder): Criterion<KilledTrigger$TriggerInstance>;
    static playerKilledEntityNearSculkCatalyst(): Criterion<KilledTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, entity: Optional<ContextAwarePredicate>, killingBlow: Optional<DamageSourcePredicate>)
    // private entity: Optional<ContextAwarePredicate>;
    // private killingBlow: Optional<DamageSourcePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    entity(): Optional<ContextAwarePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    killingBlow(): Optional<DamageSourcePredicate>;
    matches(player: ServerPlayer, entity: LootContext, killingBlow: DamageSource): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}