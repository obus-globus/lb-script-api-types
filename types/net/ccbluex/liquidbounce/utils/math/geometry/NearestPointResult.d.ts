import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NearestPointResult extends Record {
    constructor(point: Vec3, distanceSquared: number)
    // private distanceSquared: number;
    /*not mapped: */ distanceSquared(): number;
    // private point: Vec3;
    /*not mapped: */ point(): Vec3;
    component1(): Vec3;
    component2(): number;
    copy(point: Vec3, distanceSquared: number): NearestPointResult;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}