import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ListenerTransform extends Record {
    static INITIAL: ListenerTransform;
    constructor(position: Vec3, forward: Vec3, up: Vec3)
    // private forward: Vec3;
    // private position: Vec3;
    // private up: Vec3;
    equals(o: Object | null): boolean;
    forward(): Vec3;
    hashCode(): number;
    position(): Vec3;
    right(): Vec3;
    toString(): string;
    up(): Vec3;
}