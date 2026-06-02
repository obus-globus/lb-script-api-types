import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EyeMeasurement extends Record {
    constructor(throwX: number, throwY: number, throwZ: number, angleDeg: number, tick: number)
    constructor(throwPos: Vec3, angleDeg: number, tick: number)
    // private angleDeg: number;
    /*not mapped: */ angleDeg(): number;
    // private throwPos: Vec3;
    /*not mapped: */ throwPos(): Vec3;
    // private tick: number;
    /*not mapped: */ tick(): number;
    component1(): Vec3;
    component2(): number;
    component3(): number;
    copy(throwPos: Vec3, angleDeg: number, tick: number): EyeMeasurement;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}