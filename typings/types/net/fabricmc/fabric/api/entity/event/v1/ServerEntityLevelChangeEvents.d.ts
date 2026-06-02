import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerEntityLevelChangeEvents$AfterEntityChange } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerEntityLevelChangeEvents$AfterEntityChange.d.ts'
import type { ServerEntityLevelChangeEvents$AfterPlayerChange } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerEntityLevelChangeEvents$AfterPlayerChange.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ServerEntityLevelChangeEvents extends Object {
    static AFTER_ENTITY_CHANGE_LEVEL: Event<(param0: Entity, param1: Entity, param2: ServerLevel, param3: ServerLevel) => void>;
    static AFTER_PLAYER_CHANGE_LEVEL: Event<(param0: ServerPlayer, param1: ServerLevel, param2: ServerLevel) => void>;
    private constructor()
}