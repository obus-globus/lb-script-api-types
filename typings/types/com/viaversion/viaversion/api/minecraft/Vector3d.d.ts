import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Vector3d extends Record {
    static ZERO: Vector3d;
    constructor(x: number, y: number, z: number)
    // private x: number;
    // private y: number;
    // private z: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    x(): number;
    y(): number;
    z(): number;
}