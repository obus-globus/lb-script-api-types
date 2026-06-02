import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ExemptContext extends Object {
    constructor(box: AABB, bestHitVector: Vec3, worstHitVector: Vec3)
    readonly bestHitVector: Vec3;
    readonly box: AABB;
    readonly worstHitVector: Vec3;
    component1(): AABB;
    component2(): Vec3;
    component3(): Vec3;
    copy(box: AABB, bestHitVector: Vec3, worstHitVector: Vec3): ExemptContext;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}