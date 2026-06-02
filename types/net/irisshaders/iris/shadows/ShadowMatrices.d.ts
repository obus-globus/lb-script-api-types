import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
export class ShadowMatrices extends Object {
    static FAR: number;
    static NEAR: number;
    static createBaselineModelViewMatrix(paramarg0: PoseStack, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static createModelViewMatrix(paramarg0: PoseStack, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static createOrthoMatrix(paramarg0: number, paramarg1: number, paramarg2: number): Matrix4f;
    static createPerspectiveMatrix(paramarg0: number): Matrix4f;
    static snapModelViewToGrid(paramarg0: PoseStack, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}