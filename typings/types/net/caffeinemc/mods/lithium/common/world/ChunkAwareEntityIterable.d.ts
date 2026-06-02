import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityAccess } from '../../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
export interface ChunkAwareEntityIterable<T extends EntityAccess> extends Object{
    lithium$IterateEntitiesInTrackedSections(): T[];
}