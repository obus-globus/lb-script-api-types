import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChaseServer$PlayerPosition extends Record {
    private constructor(dimensionName: string, x: number, y: number, z: number, yRot: number, xRot: number)
    // private dimensionName: string;
    // private x: number;
    // private xRot: number;
    // private y: number;
    // private yRot: number;
    // private z: number;
    dimensionName(): string;
    equals(o: Object | null): boolean;
    // private format(): string;
    hashCode(): number;
    toString(): string;
    x(): number;
    xRot(): number;
    y(): number;
    yRot(): number;
    z(): number;
}