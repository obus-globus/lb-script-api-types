import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { QuaternionfInterpolator$SvdDecomposition3f } from '../../org/joml/QuaternionfInterpolator$SvdDecomposition3f.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
export class QuaternionfInterpolator extends Object {
    constructor()
    // private m: number[];
    // private svdDecomposition3f: QuaternionfInterpolator$SvdDecomposition3f;
    // private u: Matrix3f;
    // private v: Matrix3f;
    computeWeightedAverage(arg0: Quaternionfc[], arg1: number[], arg2: number, arg3: Quaternionf): Quaternionf;
}