import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class NormI8 extends Object {
    static pack(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static pack(paramarg0: Vector3f): number;
    static pack(paramarg0: Vector3f, paramarg1: number): number;
    static packColor(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static toByte(paramarg0: number): number;
    static unpackW(paramarg0: number): number;
    static unpackX(paramarg0: number): number;
    static unpackY(paramarg0: number): number;
    static unpackZ(paramarg0: number): number;
    constructor()
}