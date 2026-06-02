import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { HitResult$Type } from '../../../../net/minecraft/world/phys/HitResult$Type.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityHitResult extends HitResult {
    constructor(entity: Entity)
    constructor(entity: Entity, location: Vec3)
    readonly entity: Entity;
    getEntity(): Entity;
    getType(): HitResult$Type;
}