import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientEntityEvents$Load } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents$Load.d.ts'
import type { ClientEntityEvents$Unload } from '../../../../../../../../net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents$Unload.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ClientEntityEvents extends Object {
    static ENTITY_LOAD: Event<(param0: Entity, param1: ClientLevel) => void>;
    static ENTITY_UNLOAD: Event<(param0: Entity, param1: ClientLevel) => void>;
    private constructor()
}