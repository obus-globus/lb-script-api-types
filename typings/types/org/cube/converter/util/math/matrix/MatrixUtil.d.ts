import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cube } from '../../../../../../org/cube/converter/model/element/Cube.d.ts'
import type { Triple } from '../../../../../../org/cube/converter/util/Triple.d.ts'
import type { Position3V } from '../../../../../../org/cube/converter/util/element/Position3V.d.ts'
import type { Pair } from '../../../../../../org/cube/converter/util/math/Pair.d.ts'
import type { Transformation } from '../../../../../../org/cube/converter/util/minecraft/Transformation.d.ts'
import type { Matrix3f } from '../../../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
export class MatrixUtil extends Object {
    static applyJacobiIterations(paramarg0: Matrix3f, paramarg1: number): Quaternionf;
    static fromMatrix(paramarg0: Matrix4f): Transformation;
    static isIdentity(paramarg0: Matrix4f): boolean;
    static isOrthonormal(paramarg0: Matrix4f): boolean;
    static isTranslation(paramarg0: Matrix4f): boolean;
    static scale(paramarg0: Matrix4f, paramarg1: number): Matrix4f;
    static svdDecompose(paramarg0: Matrix3f): Triple<Quaternionf, Vector3f, Quaternionf>;
    static toTransform(paramarg0: Pair<Position3V, Position3V>[], paramarg1: Cube): Transformation;
    private constructor()
}