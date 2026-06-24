import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldLocalBox extends Object {
    constructor(origin: Vec3, localBox: AABB)
    readonly localBox: AABB;
    readonly origin: Vec3;
    component1(): Vec3;
    component2(): AABB;
    copy(origin: Vec3, localBox: AABB): WorldLocalBox;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}