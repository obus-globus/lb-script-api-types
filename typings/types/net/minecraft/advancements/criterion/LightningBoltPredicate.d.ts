import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/criterion/EntitySubPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LightningBoltPredicate extends Record implements EntitySubPredicate {
    static CODEC: Codec<EntitySubPredicate>;
    static CODEC: MapCodec<LightningBoltPredicate>;
    static blockSetOnFire(paramcount: MinMaxBounds$Ints): LightningBoltPredicate;
    constructor(blocksSetOnFire: MinMaxBounds$Ints, entityStruck: Optional<EntityPredicate>)
    // private blocksSetOnFire: MinMaxBounds$Ints;
    // private entityStruck: Optional<EntityPredicate>;
    blocksSetOnFire(): MinMaxBounds$Ints;
    codec(): MapCodec<LightningBoltPredicate>;
    entityStruck(): Optional<EntityPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    toString(): string;
}