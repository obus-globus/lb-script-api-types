import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Transformation } from '../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../../../org/joml/Quaternionfc.d.ts'
export class PoseStack extends Object {
    constructor()
    // private lastIndex: number;
    // private poses: PoseStack$Pose[];
    isEmpty(): boolean;
    last(): PoseStack$Pose;
    mulPose(matrix: Transformation): void;
    mulPose(matrix: Matrix4fc): void;
    mulPose(by: Quaternionfc): void;
    popPose(): void;
    pushPose(): void;
    rotateAround(rotation: Quaternionfc, pivotX: number, pivotY: number, pivotZ: number): void;
    scale(xScale: number, yScale: number, zScale: number): void;
    setIdentity(): void;
    translate(xo: number, yo: number, zo: number): void;
    translate(offset: Vec3): void;
}