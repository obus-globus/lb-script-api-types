import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityTrackerAccessor } from '../../../../../../net/fabricmc/fabric/mixin/networking/accessor/EntityTrackerAccessor.d.ts'
export interface ChunkMapAccessor extends Object{
    getEntityMap(): Int2ObjectMap<EntityTrackerAccessor>;
}