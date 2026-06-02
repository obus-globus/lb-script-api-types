import type { Object } from '../../../java/lang/Object.d.ts'
import type { TextGizmo$Style } from '../../../net/minecraft/gizmos/TextGizmo$Style.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export interface GizmoPrimitives extends Object{
    addLine(start: Vec3, end: Vec3, color: number, width: number): void;
    addPoint(pos: Vec3, color: number, size: number): void;
    addQuad(a: Vec3, b: Vec3, c: Vec3, d: Vec3, color: number): void;
    addText(pos: Vec3, text: string, style: TextGizmo$Style): void;
    addTriangleFan(points: Vec3[], color: number): void;
}