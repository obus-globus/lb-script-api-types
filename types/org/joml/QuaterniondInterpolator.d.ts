import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { QuaterniondInterpolator$SvdDecomposition3d } from '../../org/joml/QuaterniondInterpolator$SvdDecomposition3d.d.ts'
export class QuaterniondInterpolator extends Object {
    constructor()
    // private m: number[];
    // private svdDecomposition3d: QuaterniondInterpolator$SvdDecomposition3d;
    // private u: Matrix3d;
    // private v: Matrix3d;
    computeWeightedAverage(arg0: Quaterniond[], arg1: number[], arg2: number, arg3: Quaterniond): Quaterniond;
}