import type { Object } from '../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../net/irisshaders/iris/vertices/views/QuadView.d.ts'
import type { TriView } from '../../../../net/irisshaders/iris/vertices/views/TriView.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export abstract class NormalHelper extends Object {
    static computeFaceNormal(paramarg0: Vector3f, paramarg1: QuadView): void;
    static computeFaceNormalFlipped(paramarg0: Vector3f, paramarg1: QuadView): void;
    static computeFaceNormalManual(paramarg0: Vector3f, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number): void;
    static computeFaceNormalTri(paramarg0: Vector3f, paramarg1: TriView): void;
    static computeTangent(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: number): number;
    static computeTangent(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: TriView): number;
    static computeTangent(paramarg0: Vector4f, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: number, paramarg18: number): number;
    static computeTangentSmooth(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: TriView): number;
    static encodeNormal(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static encodeNormalTangent(paramarg0: Vector3f, paramarg1: Vector3f, paramarg2: Vector3f, paramarg3: Vector3f, paramarg4: Vector3f): number;
    static invertPackedNormal(paramarg0: number): number;
    static packDiamondByte(paramarg0: Vector3fc, paramarg1: Vector3fc, paramarg2: Vector3f, paramarg3: Vector3f, paramarg4: Vector3f): number;
    private constructor()
}