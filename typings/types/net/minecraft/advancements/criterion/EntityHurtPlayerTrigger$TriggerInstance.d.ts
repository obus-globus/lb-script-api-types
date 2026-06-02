import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { DamagePredicate } from '../../../../net/minecraft/advancements/criterion/DamagePredicate.d.ts'
import type { DamagePredicate$Builder } from '../../../../net/minecraft/advancements/criterion/DamagePredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class EntityHurtPlayerTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<EntityHurtPlayerTrigger$TriggerInstance>;
    static entityHurtPlayer(): Criterion<EntityHurtPlayerTrigger$TriggerInstance>;
    static entityHurtPlayer(paramdamage: DamagePredicate$Builder): Criterion<EntityHurtPlayerTrigger$TriggerInstance>;
    static entityHurtPlayer(paramdamage: DamagePredicate): Criterion<EntityHurtPlayerTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, damage: Optional<DamagePredicate>)
    // private damage: Optional<DamagePredicate>;
    // private player: Optional<ContextAwarePredicate>;
    damage(): Optional<DamagePredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(player: ServerPlayer, source: DamageSource, originalDamage: number, actualDamage: number, blocked: boolean): boolean;
    player(): Optional<ContextAwarePredicate>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}