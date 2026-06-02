import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { Vector3f } from '../../../../../../../../org/joml/Vector3f.d.ts'
export class NormalHelper extends Object {
    static computeFaceNormal(paramarg0: Vector3f, paramarg1: QuadView): void;
    static packNormal(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static packNormal(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static packNormal(paramarg0: Vector3f): number;
    static packNormal(paramarg0: Vector3f, paramarg1: number): number;
    static unpackNormal(paramarg0: number, paramarg1: Vector3f): void;
    static unpackNormalW(paramarg0: number): number;
    static unpackNormalX(paramarg0: number): number;
    static unpackNormalY(paramarg0: number): number;
    static unpackNormalZ(paramarg0: number): number;
    private constructor()
}