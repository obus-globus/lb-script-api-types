import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Vec3i } from '../../../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class AStarMode$PathCache extends Record {
    constructor(enemy: LivingEntity, path: Vec3i[])
    // private enemy: LivingEntity;
    /*not mapped: */ enemy(): LivingEntity;
    // private path: Vec3i[];
    /*not mapped: */ path(): Vec3i[];
    component1(): LivingEntity;
    component2(): Vec3i[];
    copy(enemy: LivingEntity, path: Vec3i[]): AStarMode$PathCache;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}