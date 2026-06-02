import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
export class Interpolationf extends Object {
    static dFdxLinear(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: Vector2f): Vector2f;
    static dFdyLinear(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: Vector2f): Vector2f;
    static interpolateTriangle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): number;
    static interpolateTriangle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: Vector2f): Vector2f;
    static interpolateTriangle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: Vector3f): Vector3f;
    static interpolationFactorsTriangle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: Vector3f): Vector3f;
    constructor()
}