import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleStrongholdFinder$PendingThrow extends Object {
    constructor(throwPosition: Vec3, tick: number, dimension: ResourceKey<Level>)
    readonly dimension: ResourceKey<Level>;
    readonly throwPosition: Vec3;
    readonly tick: number;
    component1(): Vec3;
    component2(): number;
    component3(): ResourceKey<Level>;
    copy(throwPosition: Vec3, tick: number, dimension: ResourceKey<Level>): ModuleStrongholdFinder$PendingThrow;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}