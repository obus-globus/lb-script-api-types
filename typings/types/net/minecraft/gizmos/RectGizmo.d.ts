import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { GizmoStyle } from '../../../net/minecraft/gizmos/GizmoStyle.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class RectGizmo extends Record implements Gizmo {
    static fromCuboidFace(paramcuboidCornerA: Vec3, paramcuboidCornerB: Vec3, paramface: Direction, paramstyle: GizmoStyle): RectGizmo;
    constructor(a: Vec3, b: Vec3, c: Vec3, d: Vec3, style: GizmoStyle)
    // private a: Vec3;
    // private b: Vec3;
    // private c: Vec3;
    // private d: Vec3;
    // private style: GizmoStyle;
    a(): Vec3;
    b(): Vec3;
    c(): Vec3;
    d(): Vec3;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    style(): GizmoStyle;
    toString(): string;
}