import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VecDeltaCodec extends Object {
    constructor()
    base: Vec3;
    decode(xa: number, ya: number, za: number): Vec3;
    delta(pos: Vec3): Vec3;
    encodeX(pos: Vec3): number;
    encodeY(pos: Vec3): number;
    encodeZ(pos: Vec3): number;
    getBase(): Vec3;
    setBase(base: Vec3): void;
}