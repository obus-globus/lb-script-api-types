import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { EntityPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LightningBoltPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<LightningBoltPredicate>;
    static blockSetOnFire(paramcount: MinMaxBounds$Ints): LightningBoltPredicate;
    constructor(blocksSetOnFire: MinMaxBounds$Ints, entityStruck: Optional<EntityPredicate>)
    // private blocksSetOnFire: MinMaxBounds$Ints;
    // private entityStruck: Optional<EntityPredicate>;
    and(other: EntitySubPredicate): EntitySubPredicate;
    blocksSetOnFire(): MinMaxBounds$Ints;
    entityStruck(): Optional<EntityPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    toString(): string;
}