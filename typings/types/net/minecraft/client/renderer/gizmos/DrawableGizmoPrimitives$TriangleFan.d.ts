import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DrawableGizmoPrimitives$TriangleFan extends Record {
    constructor(points: Vec3[], color: number)
    // private color: number;
    // private points: Vec3[];
    color(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    points(): Vec3[];
    toString(): string;
}