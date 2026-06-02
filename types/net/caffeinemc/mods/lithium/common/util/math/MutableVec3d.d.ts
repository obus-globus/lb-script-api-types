import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MutableVec3d extends Object {
    constructor()
    readonly x: number;
    readonly y: number;
    readonly z: number;
    add(arg0: Vec3): void;
    getX(): number;
    getY(): number;
    getZ(): number;
    toImmutable(): Vec3;
}