import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../../../../../org/joml/Matrix3f.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
export class GivensPair extends Record {
    static fromAngle(paramarg0: number): GivensPair;
    static normalize(paramarg0: number, paramarg1: number): GivensPair;
    // private cosHalf: number;
    // private sinHalf: number;
    cosFloat(): number;
    cosHalf(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    negateSin(): GivensPair;
    setRotationX(arg0: Matrix3f): Matrix3f;
    setRotationY(arg0: Matrix3f): Matrix3f;
    setRotationZ(arg0: Matrix3f): Matrix3f;
    setXRotation(arg0: Quaternionf): Quaternionf;
    setYRotation(arg0: Quaternionf): Quaternionf;
    setZRotation(arg0: Quaternionf): Quaternionf;
    sinFloat(): number;
    sinHalf(): number;
    toString(): string;
}