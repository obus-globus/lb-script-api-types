import type { VertexConsumer } from '../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../../../../org/joml/Vector4f.d.ts'
export class ModuleBreadcrumbs$RenderData extends Object {
    constructor(pose: Matrix4fc, bufferBuilder: VertexConsumer, color: Vector4f, lines: boolean)
    readonly bufferBuilder: VertexConsumer;
    readonly color: Vector4f;
    readonly lines: boolean;
    readonly pose: Matrix4fc;
}