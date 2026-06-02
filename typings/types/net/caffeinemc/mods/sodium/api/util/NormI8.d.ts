import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class NormI8 extends Object {
    static flipPacked(paramarg0: number): number;
    static isOpposite(paramarg0: number, paramarg1: number): boolean;
    static pack(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static pack(paramarg0: Vector3fc): number;
    static unpack(paramarg0: number, paramarg1: Vector3f): Vector3f;
    static unpackX(paramarg0: number): number;
    static unpackY(paramarg0: number): number;
    static unpackZ(paramarg0: number): number;
    constructor()
}