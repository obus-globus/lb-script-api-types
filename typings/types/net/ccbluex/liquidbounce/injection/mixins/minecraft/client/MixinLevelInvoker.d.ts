import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LevelEntityGetter } from '../../../../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
export interface MixinLevelInvoker extends Object{
    invokeGetEntities(): LevelEntityGetter<Entity>;
}