import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { HitResult$Type } from '../../../../net/minecraft/world/phys/HitResult$Type.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class HitResult extends Object {
    constructor(location: Vec3)
    readonly location: Vec3;
    distanceTo(entity: Entity): number;
    getLocation(): Vec3;
    getType(): HitResult$Type;
}