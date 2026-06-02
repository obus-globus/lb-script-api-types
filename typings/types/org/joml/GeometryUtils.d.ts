import type { Object } from '../../java/lang/Object.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class GeometryUtils extends Object {
    static bitangent(paramarg0: Vector3fc, paramarg1: Vector2fc, paramarg2: Vector3fc, paramarg3: Vector2fc, paramarg4: Vector3fc, paramarg5: Vector2fc, paramarg6: Vector3f): void;
    static normal(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: Vector3f): void;
    static normal(paramarg0: Vector3fc, paramarg1: Vector3fc, paramarg2: Vector3fc, paramarg3: Vector3f): void;
    static perpendicular(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: Vector3f, paramarg4: Vector3f): void;
    static perpendicular(paramarg0: Vector3fc, paramarg1: Vector3f, paramarg2: Vector3f): void;
    static tangent(paramarg0: Vector3fc, paramarg1: Vector2fc, paramarg2: Vector3fc, paramarg3: Vector2fc, paramarg4: Vector3fc, paramarg5: Vector2fc, paramarg6: Vector3f): void;
    static tangentBitangent(paramarg0: Vector3fc, paramarg1: Vector2fc, paramarg2: Vector3fc, paramarg3: Vector2fc, paramarg4: Vector3fc, paramarg5: Vector2fc, paramarg6: Vector3f, paramarg7: Vector3f): void;
    constructor()
}