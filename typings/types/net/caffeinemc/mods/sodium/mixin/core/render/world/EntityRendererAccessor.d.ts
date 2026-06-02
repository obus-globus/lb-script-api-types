import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface EntityRendererAccessor extends Object{
    sodium$getBoundingBoxForCulling(arg0: Entity): AABB;
}