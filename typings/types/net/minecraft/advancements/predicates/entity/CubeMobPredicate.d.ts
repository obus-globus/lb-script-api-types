import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CubeMobPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<CubeMobPredicate>;
    static sized(paramsize: MinMaxBounds$Ints): CubeMobPredicate;
    constructor(size: MinMaxBounds$Ints)
    // private size: MinMaxBounds$Ints;
    and(other: EntitySubPredicate): EntitySubPredicate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    size(): MinMaxBounds$Ints;
    toString(): string;
}