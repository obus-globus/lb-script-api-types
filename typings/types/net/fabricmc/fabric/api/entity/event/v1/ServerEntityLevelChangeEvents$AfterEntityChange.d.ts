import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface ServerEntityLevelChangeEvents$AfterEntityChange extends Object{
    afterChangeLevel(arg0: Entity, arg1: Entity, arg2: ServerLevel, arg3: ServerLevel): void;
}