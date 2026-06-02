import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { TransientEntitySectionManager } from '../../../../../../net/minecraft/world/level/entity/TransientEntitySectionManager.d.ts'
export interface ClientWorldAccessor extends Object{
    lithium$getEntityManager(): TransientEntitySectionManager<Entity>;
}