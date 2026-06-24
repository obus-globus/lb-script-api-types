import type { ProjectionType } from '../../../../com/mojang/blaze3d/ProjectionType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
export class Projection extends Object {
    constructor()
    // private height: number;
    // private isMatrixDirty: boolean;
    // private lastShader: boolean;
    // private matrix: Matrix4f;
    readonly matrixVersion: number;
    // private orthoInvertY: boolean;
    // private perspectiveFov: number;
    // private projectionType: ProjectionType;
    // private width: number;
    // private zFar: number;
    // private zNear: number;
    fov(): number;
    getMatrix(dest: Matrix4f): Matrix4f;
    getMatrixVersion(): number;
    height(): number;
    invertY(): boolean;
    setSize(width: number, height: number): void;
    setupOrtho(zNear: number, zFar: number, width: number, height: number, invertY: boolean): void;
    setupPerspective(zNear: number, zFar: number, fov: number, width: number, height: number): void;
    width(): number;
    zFar(): number;
    zNear(): number;
}