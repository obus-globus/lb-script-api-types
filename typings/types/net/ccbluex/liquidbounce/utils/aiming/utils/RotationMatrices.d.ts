import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../../../../../org/joml/Matrix3f.d.ts'
export class RotationMatrices extends Record {
    constructor(toMatrix: Matrix3f, backMatrix: Matrix3f)
    // private backMatrix: Matrix3f;
    /*not mapped: */ backMatrix(): Matrix3f;
    // private toMatrix: Matrix3f;
    /*not mapped: */ toMatrix(): Matrix3f;
    component1(): Matrix3f;
    component2(): Matrix3f;
    copy(toMatrix: Matrix3f, backMatrix: Matrix3f): RotationMatrices;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}