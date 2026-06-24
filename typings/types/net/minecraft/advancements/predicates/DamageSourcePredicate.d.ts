import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagPredicate } from '../../../../net/minecraft/advancements/predicates/TagPredicate.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DamageSourcePredicate extends Record {
    static CODEC: Codec<DamageSourcePredicate>;
    constructor(tags: TagPredicate<DamageType>[], directEntity: Optional<EntityPredicate>, sourceEntity: Optional<EntityPredicate>, isDirect: Optional<boolean>)
    // private directEntity: Optional<EntityPredicate>;
    // private isDirect: Optional<boolean>;
    // private sourceEntity: Optional<EntityPredicate>;
    // private tags: TagPredicate<DamageType>[];
    directEntity(): Optional<EntityPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isDirect(): Optional<boolean>;
    matches(level: ServerLevel, position: Vec3, source: DamageSource): boolean;
    matches(player: ServerPlayer, source: DamageSource): boolean;
    sourceEntity(): Optional<EntityPredicate>;
    tags(): TagPredicate<DamageType>[];
    toString(): string;
}