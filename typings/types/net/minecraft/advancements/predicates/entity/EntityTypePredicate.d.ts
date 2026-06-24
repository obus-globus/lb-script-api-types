import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityTypePredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<EntityTypePredicate>;
    static of(paramlookup: HolderGetter<EntityType<any>>, paramtype: TagKey<EntityType<any>>): EntityTypePredicate;
    static of(paramlookup: HolderGetter<EntityType<any>>, paramtype: EntityType<any>): EntityTypePredicate;
    constructor(types: Holder<EntityType<any>>[])
    // private types: Holder<EntityType<any>>[];
    and(other: EntitySubPredicate): EntitySubPredicate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(type: Holder<EntityType<any>>): boolean;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    toString(): string;
    types(): Holder<EntityType<any>>[];
}