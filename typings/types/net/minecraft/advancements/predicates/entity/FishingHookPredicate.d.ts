import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FishingHookPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static ANY: FishingHookPredicate;
    static CODEC: Codec<FishingHookPredicate>;
    static inOpenWater(paramrequirement: boolean): FishingHookPredicate;
    constructor(inOpenWater: Optional<boolean>)
    // private inOpenWater: Optional<boolean>;
    and(other: EntitySubPredicate): EntitySubPredicate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    inOpenWater(): Optional<boolean>;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    toString(): string;
}