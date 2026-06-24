import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Leashable$Wrench extends Record {
    static ZERO: Leashable$Wrench;
    static accumulate(paramwrenches: Leashable$Wrench[]): Leashable$Wrench;
    static torqueFromForce(paramleverArm: Vec3, paramforce: Vec3): number;
    constructor(force: Vec3, torque: number)
    // private force: Vec3;
    // private torque: number;
    equals(o: Object | null): boolean;
    force(): Vec3;
    hashCode(): number;
    scale(scale: number): Leashable$Wrench;
    toString(): string;
    torque(): number;
}