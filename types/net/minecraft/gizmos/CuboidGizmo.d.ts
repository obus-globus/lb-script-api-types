import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { GizmoStyle } from '../../../net/minecraft/gizmos/GizmoStyle.d.ts'
import type { AABB } from '../../../net/minecraft/world/phys/AABB.d.ts'
export class CuboidGizmo extends Record implements Gizmo {
    // private aabb: AABB;
    // private coloredCornerStroke: boolean;
    // private style: GizmoStyle;
    aabb(): AABB;
    coloredCornerStroke(): boolean;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    style(): GizmoStyle;
    toString(): string;
}