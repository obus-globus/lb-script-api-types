import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
export interface ServerEntityEvents$AllowLoad extends Object{
    onAllowLoad(arg0: Entity, arg1: ServerLevel, arg2: EntitySpawnReason, arg3: boolean): boolean;
}