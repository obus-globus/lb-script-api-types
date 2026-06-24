import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../../org/joml/Matrix3f.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
export class GivensParameters extends Record {
    static fromPositiveAngle(paramangle: number): GivensParameters;
    static fromUnnormalized(paramsinHalf: number, paramcosHalf: number): GivensParameters;
    constructor(sinHalf: number, cosHalf: number)
    // private cosHalf: number;
    // private sinHalf: number;
    aroundX(input: Matrix3f): Matrix3f;
    aroundX(input: Quaternionf): Quaternionf;
    aroundY(input: Matrix3f): Matrix3f;
    aroundY(input: Quaternionf): Quaternionf;
    aroundZ(input: Matrix3f): Matrix3f;
    aroundZ(input: Quaternionf): Quaternionf;
    cos(): number;
    cosHalf(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    inverse(): GivensParameters;
    sin(): number;
    sinHalf(): number;
    toString(): string;
}