import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { DrawableGizmoPrimitives$Group } from '../../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Group.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { GizmoPrimitives } from '../../../../../net/minecraft/gizmos/GizmoPrimitives.d.ts'
import type { TextGizmo$Style } from '../../../../../net/minecraft/gizmos/TextGizmo$Style.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DrawableGizmoPrimitives extends Object implements GizmoPrimitives {
    constructor()
    // private isEmpty: boolean;
    // private opaque: DrawableGizmoPrimitives$Group;
    // private translucent: DrawableGizmoPrimitives$Group;
    addLine(start: Vec3, end: Vec3, color: number, width: number): void;
    addPoint(pos: Vec3, color: number, size: number): void;
    addQuad(a: Vec3, b: Vec3, c: Vec3, d: Vec3, color: number): void;
    addText(pos: Vec3, text: string, style: TextGizmo$Style): void;
    addTriangleFan(points: Vec3[], color: number): void;
    // private getGroup(color: number): DrawableGizmoPrimitives$Group;
    submit(submitNodeCollector: SubmitNodeCollector, cameraRenderState: CameraRenderState, onTop: boolean): void;
}