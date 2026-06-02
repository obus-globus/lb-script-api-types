import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleStrongholdFinder$TrackedEye extends Object {
    constructor(entityId: number, throwPosition: Vec3, spawnTick: number)
    readonly entityId: number;
    readonly spawnTick: number;
    readonly throwPosition: Vec3;
    component1(): number;
    component2(): Vec3;
    component3(): number;
    copy(entityId: number, throwPosition: Vec3, spawnTick: number): ModuleStrongholdFinder$TrackedEye;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}