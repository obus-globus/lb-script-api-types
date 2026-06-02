import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityAccess } from '../../../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntitySectionStorage } from '../../../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
export interface PersistentEntitySectionManagerAccessor<T extends EntityAccess> extends Object{
    getCache(): EntitySectionStorage<T>;
}