import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityInLevelCallback } from '../../../../../../../net/minecraft/world/level/entity/EntityInLevelCallback.d.ts'
export interface EntityAccessor extends Object{
    getChangeListener(): EntityInLevelCallback;
}