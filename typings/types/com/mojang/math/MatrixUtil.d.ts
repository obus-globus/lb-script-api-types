import type { Object } from '../../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
export class MatrixUtil extends Object {
    static checkProperty(parammatrix: Matrix4fc, paramproperty: number): boolean;
    static checkPropertyRaw(parammatrix: Matrix4fc, paramproperty: number): boolean;
    static eigenvalueJacobi(paraminOut: Matrix3f, paramsteps: number, paramresult: Quaternionf): void;
    static isIdentity(parammatrix: Matrix4fc): boolean;
    static isPureTranslation(parammatrix: Matrix4fc): boolean;
    static mulComponentWise(paramm: Matrix4f, paramfactor: number): Matrix4f;
    static svdDecompose(paraminput: Matrix4fc, paramt: Vector3f, paramu: Quaternionf, params: Vector3f, paramv: Quaternionf): void;
    private constructor()
}