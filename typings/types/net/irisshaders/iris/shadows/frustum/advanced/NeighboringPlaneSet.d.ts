import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NeighboringPlaneSet extends Record {
    static forPlane(paramarg0: number): NeighboringPlaneSet;
    constructor(plane0: number, plane1: number, plane2: number, plane3: number)
    // private plane0: number;
    // private plane1: number;
    // private plane2: number;
    // private plane3: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    plane0(): number;
    plane1(): number;
    plane2(): number;
    plane3(): number;
    toString(): string;
}