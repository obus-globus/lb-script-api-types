import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoPrimitives } from '../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { TextGizmo$Style } from '../../../net/minecraft/gizmos/TextGizmo$Style.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class TextGizmo extends Record implements Gizmo {
    constructor(pos: Vec3, text: string, style: TextGizmo$Style)
    // private pos: Vec3;
    // private style: TextGizmo$Style;
    // private text: string;
    emit(primitives: GizmoPrimitives, alphaMultiplier: number): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): Vec3;
    style(): TextGizmo$Style;
    text(): string;
    toString(): string;
}