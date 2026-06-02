import type { Object } from '../../java/lang/Object.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class QuaterniondKt extends Object {
    static difference(paramarg0: Quaterniondc, paramarg1: Quaterniondc): Quaterniond;
    static div(paramarg0: Quaterniondc, paramarg1: number): Quaterniond;
    static div(paramarg0: Quaterniondc, paramarg1: Quaterniondc): Quaterniond;
    static divAssign(paramarg0: Quaterniond, paramarg1: number): void;
    static divAssign(paramarg0: Quaterniond, paramarg1: Quaterniondc): void;
    static minus(paramarg0: Quaterniondc, paramarg1: Quaterniondc): Quaterniond;
    static minusAssign(paramarg0: Quaterniond, paramarg1: Quaterniondc): void;
    static plus(paramarg0: Quaterniondc, paramarg1: Quaterniondc): Quaterniond;
    static plusAssign(paramarg0: Quaterniond, paramarg1: Quaterniondc): void;
    static times(paramarg0: Quaterniondc, paramarg1: number): Quaterniond;
    static times(paramarg0: Quaterniondc, paramarg1: Quaterniondc): Quaterniond;
    static times(paramarg0: Quaterniondc, paramarg1: Vector3dc): Vector3d;
    static times(paramarg0: Quaterniondc, paramarg1: Vector3fc): Vector3f;
    static times(paramarg0: Quaterniondc, paramarg1: Vector4dc): Vector4d;
    static times(paramarg0: Quaterniondc, paramarg1: Vector4fc): Vector4f;
    static timesAssign(paramarg0: Quaterniond, paramarg1: number): void;
    static timesAssign(paramarg0: Quaterniond, paramarg1: Quaterniondc): void;
}