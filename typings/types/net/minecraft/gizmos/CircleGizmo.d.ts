import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { GizmoStyle } from '../../../net/minecraft/gizmos/GizmoStyle.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class CircleGizmo extends Record implements Gizmo {
    // private pos: Vec3;
    // private radius: number;
    // private style: GizmoStyle;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): Vec3;
    radius(): number;
    style(): GizmoStyle;
    toString(): string;
}