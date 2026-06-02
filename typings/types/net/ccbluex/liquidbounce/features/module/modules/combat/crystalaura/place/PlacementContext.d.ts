import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlacementContext extends Object {
    constructor(basePlace: boolean, basePlaceLayers: { start: number; endInclusive: number; step: number }, expectedCrystal: AABB, target: LivingEntity)
    readonly basePlace: boolean;
    readonly basePlaceLayers: { start: number; endInclusive: number; step: number };
    readonly expectedCrystal: AABB;
    readonly eyePos: Vec3;
    readonly range: number;
    readonly target: LivingEntity;
    readonly wallsRange: number;
}