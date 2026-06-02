import type { Transformation } from '../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class PoseStack$Pose extends Object {
    constructor()
    // private normal: Matrix3f;
    // private pose: Matrix4f;
    trustedNormals: boolean;
    // private computeNormalMatrix(): void;
    copy(): PoseStack$Pose;
    mulPose(transformation: Transformation): void;
    mulPose(matrix: Matrix4fc): void;
    normal(): Matrix3f;
    pose(): Matrix4f;
    rotate(by: Quaternionfc): void;
    rotateAround(rotation: Quaternionfc, pivotX: number, pivotY: number, pivotZ: number): void;
    scale(xScale: number, yScale: number, zScale: number): void;
    set(pose: PoseStack$Pose): void;
    setIdentity(): void;
    transformNormal(x: number, y: number, z: number, destination: Vector3f): Vector3f;
    transformNormal(normal: Vector3fc, destination: Vector3f): Vector3f;
    translate(xo: number, yo: number, zo: number): Matrix4f;
}