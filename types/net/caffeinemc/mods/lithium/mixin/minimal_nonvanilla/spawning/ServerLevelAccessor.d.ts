import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PersistentEntitySectionManager } from '../../../../../../../net/minecraft/world/level/entity/PersistentEntitySectionManager.d.ts'
export interface ServerLevelAccessor extends Object{
    getEntityManager(): PersistentEntitySectionManager<Entity>;
}