import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Leashable$Wrench extends Record {
    // private force: Vec3;
    // private torque: number;
    equals(o: Object | null): boolean;
    force(): Vec3;
    hashCode(): number;
    scale(scale: number): Leashable$Wrench;
    toString(): string;
    torque(): number;
}