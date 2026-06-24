import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityTagPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<EntityTagPredicate>;
    constructor(anyOf: Optional<string[]>, allOf: Optional<string[]>, noneOf: Optional<string[]>)
    // private allOf: Optional<string[]>;
    // private anyOf: Optional<string[]>;
    // private noneOf: Optional<string[]>;
    allOf(): Optional<string[]>;
    and(other: EntitySubPredicate): EntitySubPredicate;
    anyOf(): Optional<string[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(tags: string[]): boolean;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    noneOf(): Optional<string[]>;
    toString(): string;
}