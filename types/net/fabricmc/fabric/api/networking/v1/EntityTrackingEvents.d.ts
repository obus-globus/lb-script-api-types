import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { EntityTrackingEvents$StartTracking } from '../../../../../../net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents$StartTracking.d.ts'
import type { EntityTrackingEvents$StopTracking } from '../../../../../../net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents$StopTracking.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityTrackingEvents extends Object {
    static START_TRACKING: Event<(param0: Entity, param1: ServerPlayer) => void>;
    static STOP_TRACKING: Event<(param0: Entity, param1: ServerPlayer) => void>;
    private constructor()
}