import type { Object } from '../../java/lang/Object.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class QuaternionfKt extends Object {
    static difference(paramarg0: Quaternionfc, paramarg1: Quaternionfc): Quaternionf;
    static div(paramarg0: Quaternionfc, paramarg1: number): Quaternionf;
    static div(paramarg0: Quaternionfc, paramarg1: Quaternionfc): Quaternionf;
    static divAssign(paramarg0: Quaternionf, paramarg1: number): void;
    static divAssign(paramarg0: Quaternionf, paramarg1: Quaternionfc): void;
    static minus(paramarg0: Quaternionfc, paramarg1: Quaternionfc): Quaternionf;
    static minusAssign(paramarg0: Quaternionf, paramarg1: Quaternionfc): void;
    static plus(paramarg0: Quaternionfc, paramarg1: Quaternionfc): Quaternionf;
    static plusAssign(paramarg0: Quaternionf, paramarg1: Quaternionfc): void;
    static times(paramarg0: Quaternionfc, paramarg1: number): Quaternionf;
    static times(paramarg0: Quaternionfc, paramarg1: Quaternionfc): Quaternionf;
    static times(paramarg0: Quaternionfc, paramarg1: Vector3fc): Vector3f;
    static times(paramarg0: Quaternionfc, paramarg1: Vector4fc): Vector4f;
    static timesAssign(paramarg0: Quaternionf, paramarg1: number): void;
    static timesAssign(paramarg0: Quaternionf, paramarg1: Quaternionfc): void;
}