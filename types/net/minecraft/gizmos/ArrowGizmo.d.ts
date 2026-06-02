import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class ArrowGizmo extends Record implements Gizmo {
    static DEFAULT_WIDTH: number;
    // private color: number;
    // private end: Vec3;
    // private start: Vec3;
    // private width: number;
    color(): number;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    end(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    start(): Vec3;
    toString(): string;
    width(): number;
}