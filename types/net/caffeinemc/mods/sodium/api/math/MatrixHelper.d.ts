import type { PoseStack$Pose } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Matrix3f } from '../../../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class MatrixHelper extends Object {
    static rotateZYX(paramarg0: PoseStack$Pose, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static transformNormal(paramarg0: Matrix3f, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static transformNormal(paramarg0: Matrix3f, paramarg1: boolean, paramarg2: number): number;
    static transformNormal(paramarg0: Matrix3f, paramarg1: boolean, paramarg2: Direction): number;
    static transformNormalX(paramarg0: Matrix3f, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformNormalY(paramarg0: Matrix3f, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformNormalZ(paramarg0: Matrix3f, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformPositionX(paramarg0: Matrix4fc, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformPositionY(paramarg0: Matrix4fc, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformPositionZ(paramarg0: Matrix4fc, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static transformSafeNormal(paramarg0: Matrix3f, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}