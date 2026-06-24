import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointGizmo extends Record implements Gizmo {
    constructor(pos: Vec3, color: number, size: number)
    // private color: number;
    // private pos: Vec3;
    // private size: number;
    color(): number;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): Vec3;
    size(): number;
    toString(): string;
}