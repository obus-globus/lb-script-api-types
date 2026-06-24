import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextGizmo$Style } from '../../../../../net/minecraft/gizmos/TextGizmo$Style.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DrawableGizmoPrimitives$Text extends Record {
    constructor(pos: Vec3, text: string, style: TextGizmo$Style)
    // private pos: Vec3;
    // private style: TextGizmo$Style;
    // private text: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): Vec3;
    style(): TextGizmo$Style;
    text(): string;
    toString(): string;
}