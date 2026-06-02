import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
export interface AllowedEntitiesProvider extends Object{
    get(entityGetter: HolderGetter<EntityType<Object>>): Holder<T>[];
}