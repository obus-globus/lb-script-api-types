import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PointInsideBox$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox$Companion.d.ts'
import type { Position } from '../../../../../../net/minecraft/core/Position.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointInsideBox extends Record implements Position {
    static Companion: PointInsideBox$Companion;
    static of(paramarg0: Vec3, paramarg1: AABB): PointInsideBox;
    private constructor(pos: Vec3, box: AABB)
    // private box: AABB;
    /*not mapped: */ box(): AABB;
    // private pos: Vec3;
    /*not mapped: */ pos(): Vec3;
    component1(): Vec3;
    component2(): AABB;
    // private copy(pos: Vec3, box: AABB): PointInsideBox;
    distanceTo(point: PointInsideBox): number;
    distanceTo(point: Vec3): number;
    distanceToSqr(point: PointInsideBox): number;
    distanceToSqr(point: Vec3): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    minus(other: Position): PointInsideBox;
    plus(other: Position): PointInsideBox;
    toString(): string;
    x(): number;
    y(): number;
    z(): number;
}