import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DrawableGizmoPrimitives$Point extends Record {
    // private color: number;
    // private pos: Vec3;
    // private size: number;
    color(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): Vec3;
    size(): number;
    toString(): string;
}