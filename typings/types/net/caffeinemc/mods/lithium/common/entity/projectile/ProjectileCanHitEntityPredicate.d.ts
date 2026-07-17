import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ProjectileCanHitEntityPredicate extends Record implements Predicate<Entity> {
    constructor(originalPredicate: (param0: Entity) => boolean)
    // private originalPredicate: (param0: Entity) => boolean;
    and(arg0: (param0: Entity) => boolean): (param0: Entity) => boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: Entity) => boolean;
    or(arg0: (param0: Entity) => boolean): (param0: Entity) => boolean;
    originalPredicate(): (param0: Entity) => boolean;
    test(arg0: Entity): boolean;
    toString(): string;
}