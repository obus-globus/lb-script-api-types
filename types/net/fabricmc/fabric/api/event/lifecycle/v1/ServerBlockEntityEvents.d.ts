import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerBlockEntityEvents$Load } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents$Load.d.ts'
import type { ServerBlockEntityEvents$Unload } from '../../../../../../../net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents$Unload.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class ServerBlockEntityEvents extends Object {
    static BLOCK_ENTITY_LOAD: Event<(param0: BlockEntity, param1: ServerLevel) => void>;
    static BLOCK_ENTITY_UNLOAD: Event<(param0: BlockEntity, param1: ServerLevel) => void>;
    private constructor()
}