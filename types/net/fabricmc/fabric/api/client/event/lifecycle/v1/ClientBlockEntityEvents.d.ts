import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientBlockEntityEvents$Load } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents$Load.d.ts'
import type { ClientBlockEntityEvents$Unload } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents$Unload.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class ClientBlockEntityEvents extends Object {
    static BLOCK_ENTITY_LOAD: Event<(param0: BlockEntity, param1: ClientLevel) => void>;
    static BLOCK_ENTITY_UNLOAD: Event<(param0: BlockEntity, param1: ClientLevel) => void>;
    private constructor()
}