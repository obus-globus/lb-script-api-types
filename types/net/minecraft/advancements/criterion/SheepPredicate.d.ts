import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/criterion/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SheepPredicate extends Record implements EntitySubPredicate {
    static CODEC: Codec<EntitySubPredicate>;
    static CODEC: MapCodec<SheepPredicate>;
    static hasWool(): SheepPredicate;
    constructor(sheared: Optional<boolean>)
    // private sheared: Optional<boolean>;
    codec(): MapCodec<SheepPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    sheared(): Optional<boolean>;
    toString(): string;
}